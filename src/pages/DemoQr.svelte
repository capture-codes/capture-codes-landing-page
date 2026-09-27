<script>
  // Phone-side companion to /demo/: the one fixed QR code that every visitor shows to their
  // webcam. Kept deliberately bare (no PieMenu, no Footer) because it is a full-bleed screen
  // that has to be held up to a camera.
  import demoQr from "../lib/assets/demo/demo-qr.svg";
  import logo from "../lib/assets/logos/capture-codes-full-line-logo.svg";
</script>

<main class="qr-page">
  <img class="logo" src={logo} alt="Capture Codes" />

  <h1 class="heading">Your demo QR code</h1>
  <p class="lead">Hold this screen up to the webcam on your computer.</p>

  <div class="qr-card">
    <img class="qr" src={demoQr} alt="Capture Codes demo QR code" />
  </div>

  <p class="tip">
    Turn your brightness up and hold the phone steady, roughly 15–30 cm from the
    webcam.
  </p>

  <p class="note">
    This is the same demo code for everyone and isn't linked to a real account.
  </p>

  <a class="back" href="/demo/">Back to the demo</a>
</main>

<style>
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: "Merriweather Sans";
    src: url("/fonts/MerriweatherSans-Bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
  }

  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif;
    color: #1a1a2e;
    background: #1a1a2e;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .qr-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 2rem 1.25rem 2.5rem 1.25rem;
    text-align: center;
    color: #fff;
    background:
      radial-gradient(
        120% 100% at 50% 0%,
        rgba(118, 35, 196, 0.45) 0%,
        rgba(26, 26, 46, 0) 65%
      ),
      #1a1a2e;
  }

  .logo {
    width: 200px;
    max-width: 55vw;
    height: auto;
  }

  .heading {
    font-family: "Merriweather Sans", sans-serif;
    font-size: clamp(1.3rem, 5vw, 1.9rem);
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  .lead {
    max-width: 30ch;
    font-size: 1rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.78);
  }

  .qr-card {
    margin: 0.5rem 0;
    padding: 1rem;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4);
  }

  /* Big enough to decode from across a desk, but capped by viewport height so the whole
     card stays on one screen on a phone. */
  .qr {
    display: block;
    width: min(76vw, 52vh, 340px);
    height: auto;
  }

  .tip {
    max-width: 34ch;
    font-size: 0.95rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.82);
  }

  .note {
    max-width: 36ch;
    font-size: 0.82rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.55);
  }

  .back {
    margin-top: 0.25rem;
    padding: 0.7rem 1.5rem;
    border-radius: 8px;
    background: #f5c542;
    color: #331153;
    font-size: 0.95rem;
    font-weight: 700;
    text-decoration: none;
    transition: background 0.2s;
  }

  .back:hover {
    background: #ffd763;
  }
</style>
