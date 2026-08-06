<script>
  import heroBg from "../lib/assets/landing-pages/event-organisers/hero-event-organisers.jpg";
  import howItWorks1 from "../lib/assets/landing-pages/event-photographers/how-it-works-1.jpg";
  import howItWorks2 from "../lib/assets/landing-pages/event-photographers/how-it-works-2.jpg";
  import howItWorks3 from "../lib/assets/landing-pages/event-photographers/how-it-works-3.jpg";
  import logo from "../lib/assets/logos/capture-codes-full-line-logo.svg";
  import Footer from "../lib/Footer.svelte";
  import HowItWorks from "../lib/HowItWorks.svelte";
  import PieMenu from "../lib/PieMenu.svelte";
</script>

<PieMenu />

<main>
  <section class="hero">
    <img class="hero-bg" src={heroBg} alt="Event crowd" />
    <img class="logo" src={logo} alt="Capture Codes" />
    <h1 class="hero-heading">Send photos & videos without contact details</h1>
  </section>

  <section class="slant-section">
    <div class="slant-content">
      <h1>Why Capture Codes?</h1>
      <div class="benefits-grid">
        <div class="benefit-card">
          <div class="benefit-icon">🔒</div>
          <h3>Zero Data Collection</h3>
          <p>
            Attendees use a QR code to receive their media — no phone numbers,
            email addresses, or personal data collected. Fully GDPR-friendly.
          </p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">🔄</div>
          <h3>Self-Service Registration</h3>
          <p>
            Attendees generate their own unique code via the web app before or
            during the event. No staff time required.
          </p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">⚡</div>
          <h3>Auto-Editing & Delivery</h3>
          <p>
            Footage can be auto-edited and automatically delivered to the right
            person. No manual sorting or distribution.
          </p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">🧑‍💼</div>
          <h3>Reduced Staff Overhead</h3>
          <p>
            Eliminate the post-event scramble of matching media to attendees.
            Let Capture Codes handle it automatically.
          </p>
        </div>
      </div>
    </div>
  </section>

  <HowItWorks
    steps={[
      {
        image: howItWorks1,
        alt: "Generate a quick QR code",
        title: "Attendees get a unique code",
      },
      {
        image: howItWorks2,
        alt: "Media is captured at the event",
        title: "Your photographers capture the event",
      },
      {
        image: howItWorks3,
        alt: "Media auto-delivered to attendees",
        title: "Media is automatically delivered",
      },
    ]}
  />

  <section class="cta-section">
    <div class="cta-container">
      <h2>Ready to simplify your event media?</h2>
      <p>
        Join the newsletter to be the first to know when Capture Codes launches.
      </p>
      <div class="cta-form">
        <input type="email" placeholder="Enter your email" />
        <button type="button">Submit</button>
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

  /* ── Benefits grid ── */
  .benefits-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .benefit-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    padding: 1.75rem;
  }

  .benefit-icon {
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }

  .benefit-card h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #fff;
  }

  .benefit-card p {
    font-size: 0.9rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);
  }

  @media (max-width: 768px) {
    .benefits-grid {
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }
  }

  /* ── CTA section ── */
  .cta-section {
    background: #f9f9fb;
    padding: 4rem 1.5rem;
    text-align: center;
  }

  .cta-container {
    max-width: 600px;
    margin: 0 auto;
  }

  .cta-container h2 {
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    font-weight: 700;
    color: rgb(91, 83, 89);
    margin-bottom: 0.75rem;
  }

  .cta-container p {
    font-size: 1.05rem;
    color: rgba(26, 26, 46, 0.7);
    margin-bottom: 1.5rem;
  }

  .cta-form {
    display: flex;
    gap: 0.75rem;
    justify-content: center;
  }

  .cta-form input {
    flex: 1;
    max-width: 340px;
    padding: 0.85rem 1rem;
    border: 2px solid rgba(118, 35, 196, 0.2);
    border-radius: 8px;
    background: #fff;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s;
  }

  .cta-form input:focus {
    border-color: #7623c4;
  }

  .cta-form button {
    padding: 0.85rem 1.75rem;
    border: none;
    border-radius: 8px;
    background: #7623c4;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition:
      background 0.2s,
      transform 0.1s;
    white-space: nowrap;
  }

  .cta-form button:hover {
    background: #8b35de;
    transform: translateY(-1px);
  }

  .cta-form button:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    .cta-form {
      flex-direction: column;
      align-items: center;
    }

    .cta-form input {
      max-width: 100%;
      width: 100%;
    }

    .cta-form button {
      width: 100%;
    }
  }
</style>
