<script>
  import heroBg from "../lib/assets/landing-pages/event-organisers/hero-event-organisers.jpg";
  import logo from "../lib/assets/logos/capture-codes-full-line-logo.svg";
  import Footer from "../lib/Footer.svelte";
  import PieMenu from "../lib/PieMenu.svelte";
</script>

<PieMenu />

<main>
  <section class="hero">
    <img class="hero-bg" src={heroBg} alt="FAQ" />
    <img class="logo" src={logo} alt="Capture Codes" />
    <h1 class="hero-heading">Frequently Asked Questions</h1>
  </section>

  <section class="slant-section">
    <div class="slant-content">
      <div class="faq-list">
        <div class="faq-item">
          <h3>What is Capture Codes?</h3>
          <p>
            Capture Codes is a platform that lets photographers and
            videographers share media with attendees without collecting any
            personal contact details. Attendees generate a unique code, flash it
            to the camera, and receive their media automatically.
          </p>
        </div>
        <div class="faq-item">
          <h3>How does it work?</h3>
          <p>
            An attendee generates a unique QR-style code in the web app. They
            show it to the camera at the event. The footage is uploaded to
            Capture Codes, which detects the code and automatically delivers the
            finished video or photo to the attendee's account.
          </p>
        </div>
        <div class="faq-item">
          <h3>Do attendees need to download an app?</h3>
          <p>
            No. Capture Codes works entirely through a web browser. Attendees
            can generate their code and receive their media without installing
            anything.
          </p>
        </div>
        <div class="faq-item">
          <h3>Is personal data collected?</h3>
          <p>
            No phone numbers, email addresses, or personal details are required
            for attendees to receive their media. The system uses the unique
            code to route media.
          </p>
        </div>
        <div class="faq-item">
          <h3>When will Capture Codes launch?</h3>
          <p>
            We're currently in development. Sign up to our newsletter to be the
            first to know when we launch!
          </p>
        </div>
        <div class="faq-item">
          <h3>How much does it cost?</h3>
          <p>
            Pricing details will be announced closer to launch. We're committed
            to offering flexible plans for event photographers, videographers,
            and organisers of all sizes.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="content-section">
    <div class="content-container">
      <h2>Still have questions?</h2>
      <p>Get in touch and we'll be happy to help.</p>
      <a href="/#contact" class="cta-button">Contact Us</a>
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
    height: 50vh;
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
    max-width: 280px;
    width: 100%;
    height: auto;
    padding: 2rem;
    margin-bottom: 0.5rem;
  }

  .hero-heading {
    position: relative;
    z-index: 2;
    font-size: clamp(1.5rem, 3vw, 2.5rem);
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
    max-width: 800px;
    margin: 0 auto;
  }

  /* ── FAQ list ── */
  .faq-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .faq-item {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    padding: 1.75rem 2rem;
  }

  .faq-item h3 {
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    color: #f5c542;
  }

  .faq-item p {
    font-size: 0.95rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.9);
  }

  /* ── Content section ── */
  .content-section {
    background: #f9f9fb;
    padding: 4rem 1.5rem;
    text-align: center;
  }

  .content-container {
    max-width: 600px;
    margin: 0 auto;
  }

  .content-container h2 {
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    font-weight: 700;
    color: rgb(91, 83, 89);
    margin-bottom: 0.75rem;
  }

  .content-container p {
    font-size: 1.05rem;
    color: rgba(26, 26, 46, 0.7);
    margin-bottom: 1.5rem;
  }

  .cta-button {
    display: inline-block;
    padding: 0.85rem 2rem;
    border-radius: 8px;
    background: #7623c4;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    transition:
      background 0.2s,
      transform 0.1s;
  }

  .cta-button:hover {
    background: #8b35de;
    transform: translateY(-1px);
  }

  .cta-button:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    .faq-item {
      padding: 1.25rem 1.5rem;
    }
  }
</style>
