<script>
  import festivalVideographer from "../lib/assets/landing-pages/event-photographers/event-photographers/festival-videographer.jpg";
  import howItWorks1 from "../lib/assets/landing-pages/event-photographers/how-it-works-1.jpg";
  import howItWorks2 from "../lib/assets/landing-pages/event-photographers/how-it-works-2.jpg";
  import howItWorks3 from "../lib/assets/landing-pages/event-photographers/how-it-works-3.jpg";
  import logo from "../lib/assets/logos/capture-codes-full-line-logo.svg";
  import cloudSvg from "../lib/assets/landing-pages/shared/shared/capture-codes-cloud.svg";
  import Footer from "../lib/Footer.svelte";
  import PieMenu from "../lib/PieMenu.svelte";
</script>

<PieMenu />

<main>
  <section class="hero">
    <img
      class="hero-bg"
      src={festivalVideographer}
      alt="Festival videographer filming"
    />
    <img class="logo" src={logo} alt="Capture Codes" />
    <h1 class="hero-heading">
      Easily share photos & videos <br />without contact details
    </h1>
    <div class="hero-newsletter">
      <div class="hero-cta-col">
        <h3>Newsletter</h3>
        <p class="hero-cta-label">Want to hear when we launch?</p>
        <div class="hero-cta-form">
          <input type="email" placeholder="Enter your email" />
          <button type="button">Submit</button>
        </div>
      </div>
    </div>
  </section>
  <section class="slant-section">
    <div class="slant-content">
      <!-- Content can go here -->
    </div>
  </section>

  <section class="how-it-works">
    <h2>How it works</h2>
    <div class="steps-grid">
      <div class="step">
        <img src={howItWorks1} alt="Generate a quick QR code" />
        <p><b>Code is shown to camera</b></p>
      </div>
      <div class="step">
        <img src={howItWorks2} alt="Flash your code before filming" />
        <p><b>Upload video to Capture Codes</b></p>
      </div>
      <div class="step">
        <img src={howItWorks3} alt="Receive your video automatically" />
        <p><b>Video is automatically received</b></p>
      </div>
    </div>
  </section>

  <section class="slant-section">
    <div class="slant-content">
      <h1>More Information</h1>
      <div class="info-columns">
        <div class="info-left">
          <img src={cloudSvg} alt="Capture Codes cloud" />
        </div>
        <div class="info-right">
          <p>
            Attendees generate a unique code in the web app, registration can be
            completed later. When it's time to record, they briefly flash their
            code to the camera.
          </p>
          <br />
          <p>
            Once the footage is captured, it can be edited manually or
            auto-edited through Capture Codes.
          </p>
          <br />
          <p>
            From there, the system detects the QR code and automatically
            delivers the finished video directly to the attendee's Capture Codes
            account.
          </p>
        </div>
      </div>
    </div>
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

  /* ── Hero ── */
  .hero {
    position: relative;
    width: 100%;
    height: 66vh;
    min-height: 34vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    color: #fff;
  }

  .hero::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .logo {
    position: relative;
    z-index: 2;
    max-width: 320px;
    width: 100%;
    height: auto;
    padding: 2rem;
  }

  .hero-heading {
    position: relative;
    z-index: 2;
    font-size: clamp(1.5rem, 3vw, 3rem);
    font-family: "Merriweather Sans", sans-serif;
    font-weight: 600;
    letter-spacing: 0.03em;
    color: #fff;
    margin-top: auto;
    margin-bottom: auto;
  }

  .hero-newsletter {
    position: relative;
    z-index: 2;
    max-width: 500px;
    width: 100%;
    padding: 0 1.5rem 3rem 1.5rem;
  }

  .hero-cta-col {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    background: #7623c4cc;
    padding: 0.5rem;
    border-radius: 12px;
    color: #fff;
    text-align: left;
  }

  .hero-cta-label {
    font-size: 1.1rem;
    font-weight: 400;
    letter-spacing: 0.02em;
    color: #fff;
  }

  .hero-cta-form {
    display: flex;
    gap: 0.5rem;
    width: 100%;
  }

  .hero-cta-form input {
    flex: 1;
    padding: 0.75rem 1rem;
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.95);
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s;
  }

  .hero-cta-form input:focus {
    border-color: #fff;
  }

  .hero-cta-form button {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    background: #1a1a2e;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition:
      background 0.2s,
      transform 0.1s;
    white-space: nowrap;
  }

  .hero-cta-form button:hover {
    background: #333;
    transform: translateY(-1px);
  }

  .hero-cta-form button:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    .hero-cta-form {
      flex-direction: column;
    }

    .hero-cta-form button {
      width: 100%;
    }
  }

  /* ── Slant section ── */
  .slant-section {
    background: #7623c4;
    color: #fff;
    padding: 4rem 1.5rem;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 3rem), 0 100%);
    margin-bottom: -3rem;
  }

  .slant-content {
    max-width: 960px;
    margin: 0 auto;
  }

  .slant-content h1 {
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    font-weight: 700;
    margin-bottom: 2rem;
    letter-spacing: -0.02em;
    text-align: center;
  }

  .info-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
  }

  .info-left {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .info-left img {
    max-width: 60%;
    height: auto;
  }

  .info-right p {
    font-size: 1rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.95);
  }

  @media (max-width: 768px) {
    .info-columns {
      grid-template-columns: 1fr;
    }

    .info-left {
      order: -1;
    }
  }

  /* ── How it works ── */
  .how-it-works {
    padding: 2.5rem 1.5rem 3.5rem 1.5rem;
    text-align: center;
    background: #f9f9fb;
  }

  .how-it-works h2 {
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    font-weight: 700;
    margin-bottom: 3rem;
    letter-spacing: -0.02em;
    color: rgb(91, 83, 89);
  }

  .steps-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 960px;
    margin: 0 auto;
  }

  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .step img {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 1rem;
  }

  .step p {
    font-size: 1rem;
    font-weight: 500;
    color: rgb(91, 83, 89);
  }

  @media (max-width: 768px) {
    .steps-grid {
      grid-template-columns: 1fr;
      max-width: 420px;
    }
  }
</style>
