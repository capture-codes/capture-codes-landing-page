<script>
  import heroBg from "../lib/assets/landing-pages/event-organisers/hero-event-organisers.jpg";
  import howItWorks1 from "../lib/assets/landing-pages/event-organisers/how-it-works-1.jpg";
  import howItWorks2 from "../lib/assets/landing-pages/event-organisers/how-it-works-2.jpg";
  import howItWorks3 from "../lib/assets/landing-pages/event-organisers/how-it-works-3.jpg";
  import musicDemo from "../lib/assets/videos/cc-music-demo.mp4";
  import logo from "../lib/assets/logos/capture-codes-full-line-logo.svg";
  import Footer from "../lib/Footer.svelte";
  import PieMenu from "../lib/PieMenu.svelte";
  import { BREVO_ACTION, subscribeToNewsletter } from "../lib/brevo.js";

  let status = $state("idle"); // idle | sending | success | error
  let message = $state("");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    status = "sending";
    try {
      message = await subscribeToNewsletter(form);
      status = "success";
      form.reset();
    } catch (error) {
      message = error.message;
      status = "error";
    }
  }
</script>

<PieMenu />

<main>
  <section class="hero">
    <img class="hero-bg" src={heroBg} alt="Event crowd" />
    <img class="logo" src={logo} alt="Capture Codes" />
    <div class="hero-copy">
      <p class="hero-eyebrow">Event Organisers</p>
      <h1 class="hero-heading">Send photos & videos without contact details</h1>
    </div>

    <!-- Brevo newsletter form -->
    <div class="hero-newsletter">
      <div class="hero-cta-col">
        <h3>Ready to simplify your event media?</h3>
        <p class="hero-cta-label">Signup to be notified when we launch.</p>
        <form
          class="hero-cta-form"
          method="POST"
          action={BREVO_ACTION}
          onsubmit={handleSubmit}
        >
          <input
            type="email"
            name="EMAIL"
            placeholder="Enter your email"
            autocomplete="email"
            aria-label="Email address"
            required
          />
          <!-- Brevo spam trap: must stay present and empty -->
          <input
            type="text"
            name="email_address_check"
            value=""
            class="newsletter-honeypot"
            tabindex="-1"
            autocomplete="off"
            aria-hidden="true"
          />
          <input type="hidden" name="locale" value="en" />
          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Subscribe"}
          </button>
        </form>
        {#if status === "success" || status === "error"}
          <p
            class="newsletter-message"
            class:is-error={status === "error"}
            role={status === "error" ? "alert" : "status"}
          >
            {message}
          </p>
        {/if}
      </div>
    </div>
  </section>

  <section class="video-demo">
    <h2 class="video-demo-title">Watch it in action</h2>
    <!-- Silent, decorative loop: muted + playsinline are what allow autoplay -->
    <video
      class="video-demo-player"
      src={musicDemo}
      autoplay
      loop
      muted
      playsinline
      disablepictureinpicture
      aria-label="Capture Codes delivering media to attendees at a music event"
    ></video>
  </section>

  <section class="how-it-works">
    <h2>How it works</h2>
    <div class="steps-grid">
      <div class="step">
        <img src={howItWorks1} alt="Generate a quick QR code" />
        <p><b>Attendees get a unique code</b></p>
      </div>
      <div class="step">
        <img src={howItWorks2} alt="Media is captured at the event" />
        <p><b>Your photographers capture the event</b></p>
      </div>
      <div class="step">
        <img src={howItWorks3} alt="Media auto-delivered to attendees" />
        <p><b>Media is automatically delivered</b></p>
      </div>
    </div>
    <p class="how-it-works-detail">
      Capture Codes connect the attendee with their photo or video. When the
      attendee signs up their photos are automatically sent to them.
    </p>
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
            email addresses, or personal data collected.
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
    min-height: 70vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    color: #fff;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 3rem), 0 100%);
    margin-bottom: -3rem;
  }

  .hero::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    background: radial-gradient(
        120% 90% at 50% 20%,
        rgba(26, 26, 46, 0) 0%,
        rgba(26, 26, 46, 0.4) 55%,
        rgba(26, 26, 46, 0.78) 100%
      ),
      linear-gradient(
        160deg,
        rgba(118, 35, 196, 0.38) 0%,
        rgba(26, 26, 46, 0.28) 50%,
        rgba(26, 26, 46, 0.72) 100%
      );
  }

  .hero::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
    opacity: 0.05;
    mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    filter: saturate(1.05) contrast(1.03);
    animation: hero-zoom 22s ease-out forwards;
  }

  @keyframes hero-zoom {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.08);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-bg {
      animation: none;
    }
  }

  .logo {
    position: relative;
    z-index: 2;
    max-width: 320px;
    width: 100%;
    height: auto;
    padding: 2rem;
    padding-top: 3rem;
  }

  .hero-copy {
    position: relative;
    z-index: 2;
    max-width: 760px;
    margin: auto 0;
    padding: 1.5rem;
  }

  .hero-eyebrow {
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #f5c542;
    margin-bottom: 0.9rem;
  }

  .hero-heading {
    font-size: clamp(1.5rem, 3vw, 3rem);
    font-family: "Merriweather Sans", sans-serif;
    font-weight: 600;
    letter-spacing: 0.03em;
    color: #fff;
    text-shadow: 0 2px 24px rgba(0, 0, 0, 0.45);
    text-wrap: balance;
  }

  /* ── Video demo ── */
  .video-demo {
    background: #fff;
    padding: 3rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.75rem;
  }

  .video-demo-title {
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    text-align: center;
    color: rgb(91, 83, 89);
  }

  .video-demo-player {
    display: block;
    width: 100%;
    max-width: 960px;
    height: auto;
    aspect-ratio: 16 / 9;
    border-radius: 12px;
    background: #fff;
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

  /* ── Hero newsletter ── */
  .hero-newsletter {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 540px;
    padding: 0 1.5rem 3rem 1.5rem;
    text-align: left;
  }

  .hero-cta-col {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    background: rgba(255, 255, 255, 0.08);
    padding: 1.25rem;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 16px;
    backdrop-filter: blur(14px) saturate(140%);
    -webkit-backdrop-filter: blur(14px) saturate(140%);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
    color: #fff;
  }

  .hero-cta-col h3 {
    font-size: clamp(1.15rem, 2.2vw, 1.4rem);
    font-weight: 700;
    line-height: 1.35;
    color: #fff;
  }

  .hero-cta-label {
    font-size: 0.95rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.9);
  }

  .hero-cta-form {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    width: 100%;
  }

  .newsletter-honeypot {
    display: none;
  }

  .newsletter-message {
    padding: 0.55rem 0.7rem;
    border-radius: 8px;
    background: #e7faf0;
    color: #085229;
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .newsletter-message.is-error {
    background: #ffeded;
    color: #661d1d;
  }

  .hero-cta-form input {
    flex: 1;
    min-width: 0;
    padding: 0.75rem 1rem;
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.95);
    font-family: inherit;
    font-size: 1rem;
    color: #1a1a2e;
    outline: none;
    box-shadow: none;
    transition: border-color 0.2s;
  }

  .hero-cta-form input::placeholder {
    color: #8b8b9e;
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
    font-family: inherit;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.2;
    cursor: pointer;
    white-space: nowrap;
    transition:
      background 0.2s,
      transform 0.1s;
  }

  .hero-cta-form button:hover {
    background: #333;
    transform: translateY(-1px);
  }

  .hero-cta-form button:active {
    transform: translateY(0);
  }

  .hero-cta-form button:disabled {
    opacity: 0.75;
    cursor: default;
    transform: none;
  }

  @media (max-width: 480px) {
    .hero-cta-form {
      flex-direction: column;
    }

    .hero-cta-form button {
      width: 100%;
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

  .how-it-works-detail {
    max-width: 700px;
    margin: 2rem auto 0 auto;
    font-size: 1rem;
    line-height: 1.7;
    color: rgba(26, 26, 46, 0.7);
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
