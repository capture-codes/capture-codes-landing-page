<script>
  import heroBg from "../lib/assets/landing-pages/event-photographers/festival-videographer.jpg";
  import howItWorks1 from "../lib/assets/landing-pages/event-photographers/how-it-works-1.jpg";
  import howItWorks2 from "../lib/assets/landing-pages/event-photographers/how-it-works-2.jpg";
  import howItWorks3 from "../lib/assets/landing-pages/event-photographers/how-it-works-3.jpg";
  import logo from "../lib/assets/logos/capture-codes-full-line-logo.svg";
  import cloudSvg from "../lib/assets/landing-pages/shared/capture-codes-cloud.svg";
  import Footer from "../lib/Footer.svelte";
  import PieMenu from "../lib/PieMenu.svelte";
</script>

<PieMenu />

<main>
  <section class="hero">
    <img class="hero-bg" src={heroBg} alt="Event crowd" />
    <img class="logo" src={logo} alt="Capture Codes" />
    <h1 class="hero-heading">Effortless media delivery for events</h1>
  </section>

  <section class="slant-section">
    <div class="slant-content">
      <h1>Who are you?</h1>
      <div class="audience-cards">
        <a href="/event-photographers/" class="audience-card">
          <div class="card-icon">📸</div>
          <h2>Event Photographers & Videographers</h2>
          <p>
            Share photos and videos without collecting contact details.
            Auto-deliver footage directly to your clients.
          </p>
          <span class="card-link">Learn more →</span>
        </a>
        <a href="/event-organisers/" class="audience-card">
          <div class="card-icon">🎪</div>
          <h2>Event Organisers</h2>
          <p>
            Deliver media to every attendee effortlessly. No data compliance
            headaches, no manual distribution.
          </p>
          <span class="card-link">Learn more →</span>
        </a>
      </div>
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
    justify-content: center;
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
    margin-bottom: 1.5rem;
  }

  .hero-heading {
    position: relative;
    z-index: 2;
    font-size: clamp(1.5rem, 3vw, 3rem);
    font-family: "Merriweather Sans", sans-serif;
    font-weight: 600;
    letter-spacing: 0.03em;
    color: #fff;
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

  /* ── Audience cards ── */
  .audience-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .audience-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    padding: 2.5rem 2rem;
    text-decoration: none;
    color: #fff;
    transition:
      background 0.3s,
      border-color 0.3s,
      transform 0.2s;
  }

  .audience-card:hover {
    background: rgba(255, 255, 255, 0.18);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-4px);
  }

  .card-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .audience-card h2 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }

  .audience-card p {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .card-link {
    font-weight: 600;
    font-size: 0.95rem;
    color: #f5c542;
  }

  @media (max-width: 768px) {
    .audience-cards {
      grid-template-columns: 1fr;
      gap: 1.5rem;
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

  /* ── More Information ── */
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
</style>
