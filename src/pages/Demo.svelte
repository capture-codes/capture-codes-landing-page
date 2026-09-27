<script>
  import logo from "../lib/assets/logos/capture-codes-full-line-logo.svg";
  import Footer from "../lib/Footer.svelte";
  import PieMenu from "../lib/PieMenu.svelte";
  import WebcamDemo from "../lib/WebcamDemo.svelte";
</script>

<PieMenu />

<main>
  <header class="demo-header">
    <a class="logo-link" href="/" aria-label="Capture Codes home">
      <img class="logo" src={logo} alt="Capture Codes" />
    </a>
    <p class="eyebrow">Live demo</p>
    <h1 class="heading">See QR detection in action</h1>
    <p class="intro">
      This is the same QR detection the Capture Codes pipeline runs over event
      footage, decoded straight from the video feed. Everything happens in your
      browser — no photo or video ever leaves your device.
    </p>
  </header>

  <section class="demo-body">
    <WebcamDemo />
  </section>

  <section class="privacy">
    <h2>What this demo does (and doesn't) do</h2>
    <ul>
      <li>
        Your camera feed is decoded locally in this tab. Nothing is uploaded,
        recorded or stored.
      </li>
      <li>
        Camera access needs your permission and a secure connection (HTTPS or
        localhost). You can revoke it at any time from the browser's address bar.
      </li>
      <li>
        Frames are decoded with <code>jsqr</code>, the same library that scans
        real uploads, at a lower resolution than the production pipeline uses.
      </li>
      <li>
        The QR code is a shared demo code rather than a real attendee code, so it
        is never linked to an account.
      </li>
    </ul>
  </section>

  <Footer />
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
    background: #fff;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    width: 100%;
  }

  .demo-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.9rem;
    padding: 3.5rem 1.5rem 3rem 1.5rem;
    text-align: center;
    color: #fff;
    background:
      radial-gradient(
        120% 100% at 50% 0%,
        rgba(118, 35, 196, 0.45) 0%,
        rgba(26, 26, 46, 0) 65%
      ),
      #1a1a2e;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 3rem), 0 100%);
    margin-bottom: -3rem;
  }

  .logo-link {
    display: inline-block;
    line-height: 0;
  }

  .logo {
    width: 220px;
    max-width: 60vw;
    height: auto;
  }

  .eyebrow {
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #f5c542;
  }

  .heading {
    font-family: "Merriweather Sans", sans-serif;
    font-size: clamp(1.6rem, 3.4vw, 2.6rem);
    font-weight: 600;
    letter-spacing: 0.02em;
    text-wrap: balance;
  }

  .intro {
    max-width: 660px;
    font-size: 1.05rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
  }

  .demo-body {
    display: flex;
    justify-content: center;
    padding: 4.5rem 1.5rem 4rem 1.5rem;
  }

  .privacy {
    background: #f9f9fb;
    padding: 3rem 1.5rem 4rem 1.5rem;
  }

  .privacy h2 {
    max-width: 960px;
    margin: 0 auto 1.25rem auto;
    font-family: "Merriweather Sans", sans-serif;
    font-size: clamp(1.3rem, 2.6vw, 1.8rem);
    color: #393d6c;
    text-align: center;
  }

  .privacy ul {
    max-width: 760px;
    margin: 0 auto;
    padding-left: 1.25rem;
    display: grid;
    gap: 0.75rem;
    font-size: 1rem;
    line-height: 1.65;
    color: rgba(26, 26, 46, 0.72);
  }

  .privacy code {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.9rem;
    color: #393286;
  }

  @media (max-width: 560px) {
    .demo-header {
      padding: 2.5rem 1.25rem 3rem 1.25rem;
    }

    .demo-body {
      padding: 3.5rem 1.25rem 3rem 1.25rem;
    }
  }
</style>
