<script>
  import { onMount } from "svelte";
  import {
    absoluteQrPageUrl,
    COUNTDOWN_FROM,
    COUNTDOWN_STEP_MS,
    DEMO_QR_PAGE_URL,
    DEMO_QR_PAYLOAD,
    DETECT_HOLD_MS,
    FLASH_MS,
    SCAN_INTERVAL_MS,
  } from "./demoConfig.js";
  import {
    canvasToBlob,
    createScanSurface,
    decodeQr,
    grabFrame,
    grabFullFrame,
    matchesDemoCode,
  } from "./qr-scan.js";

  /**
   * idle → starting → live → detected → countdown → flash → captured
   * plus the dead ends: denied | unsupported | error
   */
  let status = $state("idle");
  let countdown = $state(COUNTDOWN_FROM);
  let photoUrl = $state("");
  let detectedValue = $state("");
  let errorMessage = $state("");
  let copied = $state(false);

  // Plain (non-reactive) refs: these only ever change inside functions, never in the markup.
  let video;
  let surface = null; // { canvas, context } from createScanSurface()
  let stream = null;
  let scanTimer = null;
  const pendingTimers = new Set();
  let disposed = false;

  const CAMERA_ERROR_MESSAGES = {
    NotAllowedError:
      "Camera access was blocked. Allow the camera for this site (from the browser's address bar) and try again.",
    PermissionDeniedError:
      "Camera access was blocked. Allow the camera for this site (from the browser's address bar) and try again.",
    NotFoundError:
      "No camera was found on this device. Connect one and try again.",
    NotReadableError:
      "The camera is already in use by another app or tab. Close it and try again.",
    OverconstrainedError:
      "This camera doesn't support the settings the demo asked for.",
    SecurityError:
      "The browser blocked camera access for security reasons. Make sure you're on HTTPS or localhost.",
  };

  const isCaptured = $derived(status === "captured");
  const isBusy = $derived(status === "idle" || status === "starting");
  const showOverlay = $derived(
    status === "detected" || status === "countdown" || status === "flash",
  );
  const showRetry = $derived(status === "denied" || status === "error");

  // Absolute, so "Copy link" and the printed address are useful on the device that needs them.
  // On a dev host that address would be localhost, which no phone can reach, so the helper
  // falls back to the deployed site there.
  const qrPageUrl = $derived(absoluteQrPageUrl(window.location));

  // Screen readers get the same running commentary as the visual overlay.
  const liveMessage = $derived(
    status === "detected"
      ? "QR code detected"
      : status === "countdown"
        ? `Taking a photo in ${countdown}`
        : status === "flash"
          ? "Photo!"
          : status === "captured"
            ? "Demo complete"
            : "",
  );

  /** A tracked setTimeout, so a reset or unmount can cancel a countdown mid-flight. */
  function wait(ms) {
    return new Promise((resolve) => {
      const timer = window.setTimeout(() => {
        pendingTimers.delete(timer);
        resolve();
      }, ms);
      pendingTimers.add(timer);
    });
  }

  function clearPendingTimers() {
    for (const timer of pendingTimers) window.clearTimeout(timer);
    pendingTimers.clear();
  }

  function stopScanning() {
    if (scanTimer !== null) {
      window.clearInterval(scanTimer);
      scanTimer = null;
    }
  }

  function releasePhotoUrl() {
    // Only object URLs need revoking; the data-URL fallback is plain memory.
    if (photoUrl.startsWith("blob:")) URL.revokeObjectURL(photoUrl);
    photoUrl = "";
  }

  function stopStream() {
    if (stream) {
      for (const track of stream.getTracks()) track.stop();
      stream = null;
    }
    if (video) video.srcObject = null;
  }

  function startScanning() {
    stopScanning();
    scanTimer = window.setInterval(() => {
      if (status !== "live") return;
      const value = decodeQr(grabFrame(video, surface));
      if (value && matchesDemoCode(value)) handleDetected(value);
    }, SCAN_INTERVAL_MS);
  }

  async function startCamera() {
    if (!navigator.mediaDevices?.getUserMedia) {
      status = "unsupported";
      return;
    }

    stopScanning();
    releasePhotoUrl();
    clearPendingTimers();
    detectedValue = "";
    errorMessage = "";
    countdown = COUNTDOWN_FROM;
    status = "starting";

    try {
      stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: false,
      });

      if (disposed) {
        stopStream();
        return;
      }

      video.srcObject = stream;
      // The autoplay attribute covers most browsers; the explicit play() covers the rest and
      // rejects harmlessly when the browser has already started playing.
      try {
        await video.play();
      } catch {
        /* covered by the autoplay attribute */
      }

      status = "live";
      startScanning();
    } catch (error) {
      stopStream();
      if (disposed) return;

      const name = error?.name ?? "";
      status =
        name === "NotAllowedError" || name === "PermissionDeniedError"
          ? "denied"
          : "error";
      errorMessage =
        CAMERA_ERROR_MESSAGES[name] ??
        "The camera couldn't be started. Check that no other app is using it, then try again.";
    }
  }

  async function handleDetected(value) {
    // Guarded because the scan loop and the "Test QR Code" button share this path.
    if (status !== "live") return;

    stopScanning();
    detectedValue = value;
    status = "detected";
    await wait(DETECT_HOLD_MS);

    if (disposed) return;
    status = "countdown";
    for (let remaining = COUNTDOWN_FROM; remaining > 0; remaining -= 1) {
      countdown = remaining;
      await wait(COUNTDOWN_STEP_MS);
      if (disposed) return;
    }

    status = "flash";
    await wait(FLASH_MS);
    if (disposed) return;

    const captured = await capturePhoto();
    if (disposed) return;

    if (!captured) {
      // The frame wasn't available (very unlikely). Rather than showing an empty "demo
      // complete" screen, go back to watching for the code.
      status = "live";
      startScanning();
      return;
    }

    status = "captured";
  }

  /** Freezes the frame that is on screen right now as the demo's "photo". */
  async function capturePhoto() {
    const canvas = grabFullFrame(video);
    if (!canvas) return false;

    const blob = await canvasToBlob(canvas);
    releasePhotoUrl();
    // Object URLs keep the blob alive until revoked; fall back to a data URL when toBlob is
    // unavailable.
    photoUrl = blob
      ? URL.createObjectURL(blob)
      : canvas.toDataURL("image/jpeg", 0.92);
    return true;
  }

  function reset() {
    clearPendingTimers();
    releasePhotoUrl();
    detectedValue = "";
    countdown = COUNTDOWN_FROM;

    if (stream) {
      status = "live";
      startScanning();
    } else {
      startCamera();
    }
  }

  async function copyQrLink() {
    try {
      await navigator.clipboard.writeText(qrPageUrl);
      copied = true;
      window.setTimeout(() => (copied = false), 2000);
    } catch {
      // Clipboard permission can be denied; the address is on screen to type out instead.
      copied = false;
    }
  }

  /**
   * Runs the normal detection flow without a QR code, so a visitor with a single device can
   * still see the countdown and photo. Uses the payload the shared demo code encodes.
   */
  function simulateDetection() {
    handleDetected(DEMO_QR_PAYLOAD);
  }

  // Don't decode frames in a hidden tab.
  function handleVisibilityChange() {
    if (document.visibilityState === "hidden") stopScanning();
    else if (status === "live") startScanning();
  }

  onMount(() => {
    surface = createScanSurface();
    startCamera();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      disposed = true;
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearPendingTimers();
      stopScanning();
      stopStream();
      releasePhotoUrl();
    };
  });
</script>

<div class="demo">
  <!-- Screen readers receive the same running commentary as the visual overlay. -->
  <p class="sr-only" aria-live="polite">{liveMessage}</p>

  <div class="stage">
    <div class="stage-frame">
      <video
        class="stage-video"
        class:is-hidden={isCaptured}
        bind:this={video}
        autoplay
        muted
        playsinline
        disablepictureinpicture
        aria-label="Live webcam preview"
      ></video>

      {#if isCaptured && photoUrl}
        <img
          class="stage-photo"
          src={photoUrl}
          alt="The photo captured when the QR code was recognised"
        />
        <p class="stage-badge">Demo complete</p>
      {/if}

      {#if showOverlay}
        <div class="stage-overlay" class:flash={status === "flash"}>
          {#if status === "detected"}
            <p class="overlay-headline">QR code detected</p>
          {:else if status === "countdown"}
            <p class="overlay-countdown">{countdown}</p>
          {:else}
            <p class="overlay-headline">Photo!</p>
          {/if}
        </div>
      {/if}

      {#if isBusy}
        <div class="stage-overlay panel">
          <p class="panel-title">Waiting for camera access…</p>
          <p class="panel-text">
            Your browser will ask for permission to use the webcam.
          </p>
        </div>
      {:else if status === "denied" || status === "error"}
        <div class="stage-overlay panel">
          <p class="panel-title">The camera didn't start</p>
          <p class="panel-text">{errorMessage}</p>
        </div>
      {:else if status === "unsupported"}
        <div class="stage-overlay panel">
          <p class="panel-title">This browser can't run the demo</p>
          <p class="panel-text">
            Camera access needs a modern browser on a secure (HTTPS) connection.
          </p>
        </div>
      {:else if status === "live"}
        <p class="stage-hint">Hold your QR code inside the frame</p>
      {/if}
    </div>
  </div>

  <div class="actions">
    {#if isCaptured}
      <a
        class="button primary"
        href={photoUrl}
        download="capture-codes-demo-photo.jpg"
      >
        Download photo
      </a>
      <button class="button" onclick={reset}>Try again</button>
    {:else if showRetry}
      <button class="button primary" onclick={startCamera}>Try again</button>
    {/if}
    {#if status === "live"}
      <button class="button simulate" onclick={simulateDetection}>
        Test QR Code
      </button>
    {/if}
  </div>

  {#if isCaptured && detectedValue}
    <p class="recognised">Recognised code: <code>{detectedValue}</code></p>
  {/if}

  <section class="demo-intro">
    <p class="intro">
      Please note two devices are needed for this demo, one to display a camera
      feed and second to show a QR code to the camera.
      <br />
      <br />
      For the demo everything happens in your browser. No photo or video ever leaves
      your device. It is solely to demonstrate how the server searches for QR codes
      in uploaded footage.
    </p>
  </section>

  <ol class="steps">
    <li class="step">
      <span class="step-number" aria-hidden="true">1</span>
      <div class="step-body">
        <h2 class="step-title">Get your QR code</h2>
        <p class="step-text">
          On a second device open the following link to view a QR code.
        </p>
        <div class="step-actions">
          <a
            class="step-link"
            href={DEMO_QR_PAGE_URL}
            target="_blank"
            rel="noopener"
          >
            Open your QR code
          </a>
          <button class="copy-button" onclick={copyQrLink}>
            {copied ? "Copied!" : "Copy link"}
          </button>
        </div>
        <p class="step-url">{qrPageUrl}</p>
        <p>
          If you do not have access to a second device you can press "Test QR
          Code" below the camera feed.
        </p>
      </div>
    </li>

    <li class="step">
      <span class="step-number" aria-hidden="true">2</span>
      <div class="step-body">
        <h2 class="step-title">Show the QR code to your webcam</h2>
        <p class="step-text">
          Hold your device up to the camera. Once the QR code is detected the
          demo will count you down and take the photo.
        </p>
      </div>
    </li>

    <li class="step">
      <span class="step-number" aria-hidden="true">3</span>
      <div class="step-body">
        <h2 class="step-title">Photo captured</h2>
        <p class="step-text">A photo is displayed in the browser.</p>
      </div>
    </li>
  </ol>
</div>

<style>
  .demo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
  }

  /* Visually hidden but still announced. Keeping the live region in the DOM from the first
     render is what makes aria-live announcements reliable. */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .stage {
    width: 100%;
    max-width: 960px;
  }

  .stage-frame {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 16px;
    overflow: hidden;
    background: #16182b;
    box-shadow: 0 24px 60px rgba(26, 26, 46, 0.22);
  }

  .stage-video,
  .stage-photo {
    position: absolute;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Selfie-style mirror for the preview only. A CSS transform isn't part of the pixel data, so
     the frame handed to the decoder (and to the photo) is the camera's unmirrored output. */
  .stage-video {
    transform: scaleX(-1);
    transition: opacity 0.2s;
  }

  .stage-video.is-hidden {
    opacity: 0;
  }

  .stage-badge {
    position: absolute;
    left: 50%;
    bottom: 1.25rem;
    transform: translateX(-50%);
    margin: 0;
    padding: 0.6rem 1.4rem;
    border-radius: 999px;
    background: #f5c542;
    color: #331153;
    font-family: "Merriweather Sans", sans-serif;
    font-size: clamp(0.95rem, 2.5vw, 1.15rem);
    font-weight: 700;
    letter-spacing: 0.02em;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
  }

  .stage-overlay {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    padding: 1rem;
    text-align: center;
    color: #fff;
    background: rgba(16, 16, 32, 0.45);
  }

  .stage-overlay.flash {
    background: #fff;
  }

  .stage-overlay.flash .overlay-headline {
    color: #1a1a2e;
    text-shadow: none;
  }

  .stage-overlay.panel {
    align-content: center;
    gap: 0.6rem;
    padding: 2rem 1.5rem;
    background: rgba(16, 16, 32, 0.88);
  }

  .overlay-headline {
    margin: 0;
    font-family: "Merriweather Sans", sans-serif;
    font-size: clamp(1.5rem, 4.5vw, 3rem);
    font-weight: 700;
    text-shadow: 0 4px 24px rgba(0, 0, 0, 0.6);
  }

  .overlay-countdown {
    margin: 0;
    font-family: "Merriweather Sans", sans-serif;
    font-size: clamp(4rem, 18vw, 10rem);
    font-weight: 700;
    line-height: 1;
    color: #f5c542;
    text-shadow: 0 6px 40px rgba(0, 0, 0, 0.65);
    animation: countdown-pop 0.3s ease;
  }

  @keyframes countdown-pop {
    from {
      transform: scale(0.7);
      opacity: 0.4;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .stage-video,
    .overlay-countdown {
      transition: none;
      animation: none;
    }
  }

  .panel-title {
    margin: 0;
    font-family: "Merriweather Sans", sans-serif;
    font-size: clamp(1.05rem, 2.6vw, 1.4rem);
    font-weight: 700;
  }

  .panel-text {
    margin: 0;
    max-width: 34ch;
    font-size: 0.95rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.75);
  }

  .stage-hint {
    position: absolute;
    left: 50%;
    bottom: 1rem;
    transform: translateX(-50%);
    margin: 0;
    padding: 0.4rem 0.9rem;
    border-radius: 999px;
    background: rgba(16, 16, 32, 0.6);
    color: #fff;
    font-size: 0.85rem;
    white-space: nowrap;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }

  .button {
    display: inline-block;
    padding: 0.7rem 1.5rem;
    border: 1px solid rgba(26, 26, 46, 0.15);
    border-radius: 8px;
    background: #fff;
    color: #393d6c;
    font-family: inherit;
    font-size: 0.95rem;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition:
      background 0.2s,
      border-color 0.2s,
      transform 0.1s;
  }

  .button:hover {
    background: #f4f4fa;
    transform: translateY(-1px);
  }

  .button:active {
    transform: translateY(0);
  }

  .button.primary {
    border-color: #393d6c;
    background: #393d6c;
    color: #fff;
  }

  .button.primary:hover {
    background: #2b2f57;
  }

  .button.simulate {
    border-style: dashed;
    border-color: #b9bccd;
    background: transparent;
    color: #6b6f8f;
    font-weight: 500;
  }

  .recognised {
    margin: 0;
    font-size: 0.9rem;
    color: rgba(26, 26, 46, 0.65);
    text-align: center;
  }

  .recognised code {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.85rem;
    color: #393286;
    word-break: break-all;
  }

  .steps {
    list-style: none;
    margin: 1rem 0 0 0;
    padding: 0;
    width: 100%;
    max-width: 720px;
    display: grid;
    gap: 1.5rem;
  }

  .step {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  .step-number {
    flex: none;
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #393d6c;
    color: #f5c542;
    font-family: "Merriweather Sans", sans-serif;
    font-weight: 700;
  }

  .step-body {
    display: grid;
    gap: 0.45rem;
  }

  .step-title {
    margin: 0;
    font-family: "Merriweather Sans", sans-serif;
    font-size: clamp(1.05rem, 2.4vw, 1.25rem);
    font-weight: 700;
    color: #393d6c;
  }

  .step-text {
    margin: 0;
    font-size: 1rem;
    line-height: 1.65;
    color: rgba(26, 26, 46, 0.72);
  }

  .step-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.6rem;
    margin-top: 0.15rem;
  }

  .step-link {
    display: inline-block;
    padding: 0.65rem 1.35rem;
    border-radius: 8px;
    background: #f5c542;
    color: #331153;
    font-weight: 700;
    text-decoration: none;
    transition:
      background 0.2s,
      transform 0.1s;
  }

  .step-link:hover {
    background: #ffd763;
    transform: translateY(-1px);
  }

  .copy-button {
    padding: 0.65rem 1.1rem;
    border: 1px solid rgba(26, 26, 46, 0.18);
    border-radius: 8px;
    background: #fff;
    color: #393d6c;
    font-family: inherit;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
  }

  .copy-button:hover {
    background: #f4f4fa;
  }

  .step-url {
    margin: 0;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.82rem;
    color: #6b6f8f;
    word-break: break-all;
  }

  /* Explanation under the camera feed, kept with the widget so the demo carries its own copy
     wherever it is mounted. */
  .demo-intro {
    width: 100%;
    max-width: 660px;
    margin-top: 0.5rem;
    text-align: left;
  }

  .intro {
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.7;
    color: rgba(26, 26, 46, 0.72);
  }

  @media (max-width: 560px) {
    .step {
      gap: 0.75rem;
    }

    .stage-badge {
      bottom: 0.85rem;
    }

    .stage-hint {
      font-size: 0.78rem;
    }
  }
</style>
