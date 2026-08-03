<script>
  import heroBg from "../lib/assets/landing-pages/event-photographers/festival-videographer.jpg";
  import logo from "../lib/assets/logos/capture-codes-full-line-logo.svg";
  import Footer from "../lib/Footer.svelte";
  import PieMenu from "../lib/PieMenu.svelte";
</script>

<PieMenu />

<main>
  <section class="hero">
    <img class="hero-bg" src={heroBg} alt="Contact Capture Codes" />
    <img class="logo" src={logo} alt="Capture Codes" />
    <h1 class="hero-heading">Contact Us</h1>
  </section>

  <section class="slant-section">
    <div class="slant-content">
      <h2>Get in Touch</h2>
      <p class="intro">
        Have questions about Capture Codes? We'd love to hear from you.
      </p>
      <div class="contact-info">
        <div class="contact-card">
          <div class="contact-icon">✉️</div>
          <h3>Email</h3>
          <p><a href="mailto:hello@capture.codes">hello@capture.codes</a></p>
        </div>
        <div class="contact-card">
          <div class="contact-icon">🐦</div>
          <h3>Social Media</h3>
          <p>Follow us for updates and announcements.</p>
          <div class="social-links">
            <a
              href="https://twitter.com/capturecodes"
              target="_blank"
              rel="noopener">Twitter / X</a
            >
            <a
              href="https://instagram.com/capturecodes"
              target="_blank"
              rel="noopener">Instagram</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="content-section">
    <div class="content-container">
      <h2>Want to hear when we launch?</h2>
      <p>Sign up to our newsletter to stay in the loop.</p>
      <div class="newsletter-form">
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
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
  }

  .slant-content h2 {
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    font-weight: 700;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
  }

  .intro {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2.5rem;
  }

  .contact-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    text-align: left;
  }

  .contact-card {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .contact-icon {
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }

  .contact-card h3 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .contact-card p {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.6;
  }

  .contact-card a {
    color: #f5c542;
    text-decoration: none;
    font-weight: 600;
  }

  .contact-card a:hover {
    text-decoration: underline;
  }

  .social-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  @media (max-width: 768px) {
    .contact-info {
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }
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

  .newsletter-form {
    display: flex;
    gap: 0.75rem;
    justify-content: center;
  }

  .newsletter-form input {
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

  .newsletter-form input:focus {
    border-color: #7623c4;
  }

  .newsletter-form button {
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

  .newsletter-form button:hover {
    background: #8b35de;
    transform: translateY(-1px);
  }

  .newsletter-form button:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    .newsletter-form {
      flex-direction: column;
      align-items: center;
    }

    .newsletter-form input {
      max-width: 100%;
      width: 100%;
    }

    .newsletter-form button {
      width: 100%;
    }
  }
</style>
