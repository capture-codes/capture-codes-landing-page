<script>
  import heroBg from "../lib/assets/landing-pages/event-organisers/hero-event-organisers.jpg";
  import howItWorks1 from "../lib/assets/landing-pages/event-organisers/how-it-works-1.jpg";
  import howItWorks2 from "../lib/assets/landing-pages/event-organisers/how-it-works-2.jpg";
  import howItWorks3 from "../lib/assets/landing-pages/event-organisers/how-it-works-3.jpg";
  import musicDemo from "../lib/assets/videos/cc-music-demo.mp4";
  import logo from "../lib/assets/logos/capture-codes-full-line-logo.svg";
  import albumIcon from "../lib/assets/icons/decorative/album-icon.svg";
  import linkedCameraIcon from "../lib/assets/icons/decorative/linked-camera-icon.svg";
  import cinemaIcon from "../lib/assets/icons/decorative/cinema-icon.svg";
  import imageIcon from "../lib/assets/icons/decorative/imge-icon.svg";
  import garethGriffiths from "../lib/assets/images/gareth-griffiths.jpg";
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
        <p class="hero-cta-label">Signup to be notified when we launch</p>
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
    <div class="video-demo-media">
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
      <p class="video-demo-note">Temporary AI video to be replaced.</p>
    </div>
  </section>

  <section class="how-it-works">
    <h2>How it works</h2>
    <div class="steps-grid">
      <div class="step">
        <img src={howItWorks1} alt="Generate a quick QR code" />
        <div class="step-text">
          <h3>QR Code</h3>
          <p>
            Attendees get a unique QR code. Its automatically generated and they
            can signup later.
          </p>
        </div>
      </div>
      <div class="step step--reverse">
        <img src={howItWorks2} alt="Media is captured at the event" />
        <div class="step-text">
          <h3>Photos &amp; Videos</h3>
          <p>
            The photographer captures photos and videos ensuring the QR code is
            visible.
          </p>
        </div>
      </div>
      <div class="step">
        <img src={howItWorks3} alt="Media auto-delivered to attendees" />
        <div class="step-text">
          <h3>Automated Sending</h3>
          <p>
            Once the footage is uploaded to Capture Codes the system
            automatically sends it to the registered users.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="slant-section">
    <div class="slant-content">
      <h1>Why Capture Codes?</h1>
      <div class="benefits-grid">
        <div class="benefit-card">
          <img class="benefit-icon" src={albumIcon} alt="" />
          <h3>No need for contact info</h3>
          <p>
            Attendees use a QR code to receive their media. The QR code links
            their account with the footage so there's no need to take phone
            numbers, email addresses, or social handles. It's fast and hassle
            free.
          </p>
        </div>
        <div class="benefit-card">
          <img class="benefit-icon" src={linkedCameraIcon} alt="" />
          <h3>Self-service registration</h3>
          <p>
            Attendees generate their own unique code via the web app during or
            after the event. Content is then automatically linked to them.
          </p>
        </div>
        <div class="benefit-card">
          <img class="benefit-icon" src={cinemaIcon} alt="" />
          <h3>Automated editing & delivery</h3>
          <p>
            Automated framing, edits and logo insertion. Or take it up a level
            with generative AI. Once the edits are completed the system
            automatically sends the footage.
          </p>
        </div>
        <div class="benefit-card">
          <img class="benefit-icon" src={imageIcon} alt="" />
          <h3>Organic growth</h3>
          <p>
            You capture hundreds of moments, but only a few make it to your
            social media. Capture Codes automatically delivers personal photos
            and videos directly to your attendees. Your event's reach grows
            organically.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="contact" id="contact">
    <div class="contact-grid">
      <div class="contact-card contact-info">
        <svg
          class="contact-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
          />
        </svg>
        <h2>Contact</h2>
        <p class="contact-intro">
          Have questions or want to learn more? We'd love to hear from you.
        </p>
        <a class="contact-email" href="mailto:hello@capture.codes"
          >hello@capture.codes</a
        >
      </div>

      <div class="contact-card founder">
        <img
          class="founder-photo"
          src={garethGriffiths}
          alt="Gareth Griffiths, founder of Capture Codes"
        />
        <h3>Meet the founder</h3>
        <p class="founder-bio">
          Capture Codes was founded by Gareth Griffiths to make event media
          delivery effortless. If you'd like to chat about the product or
          partner on an event, connect with Gareth on LinkedIn.
        </p>
        <a
          class="founder-linkedin"
          href="https://www.linkedin.com/in/gngriffiths/"
          target="_blank"
          rel="noopener"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
          </svg>
          Connect on LinkedIn
        </a>
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
    color: #393d6c;
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

  .video-demo-media {
    width: 100%;
    max-width: 960px;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .video-demo-note {
    margin: 0;
    font-size: 0.85rem;
    line-height: 1.4;
    color: #9ca3af;
    text-align: left;
  }

  /* ── Slant section ── */
  .slant-section {
    background: linear-gradient(180deg, #9fa2c2 0%, #282a3f 100%);
    color: #fff;
    padding: 4rem 1.5rem calc(4rem + 75px);
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
    align-self: left;
    width: 32px;
    height: 32px;
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
    margin-bottom: 50px;
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
    overflow: hidden;
  }

  .how-it-works h2 {
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    font-weight: 700;
    margin-bottom: 3rem;
    letter-spacing: -0.02em;
    color: #393d6c;
  }

  .how-it-works-detail {
    max-width: 700px;
    margin: 2rem auto 0 auto;
    font-size: 1rem;
    line-height: 1.7;
    color: rgba(26, 26, 46, 0.7);
  }

  .steps-grid {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    max-width: 960px;
    margin: 0 auto;
  }

  .step {
    display: flex;
    align-items: stretch;
    text-align: left;
  }

  .step--reverse {
    flex-direction: row-reverse;
  }

  .step img {
    position: relative;
    z-index: 1;
    flex: 0 0 50%;
    width: 50%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 12px;
  }

  .step-text {
    position: relative;
    z-index: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: -15px -30px;
    padding: 2.5rem;
    background: #8185b2;
  }

  .step-text h3 {
    font-size: 1.35rem;
    font-weight: 700;
    margin: 40px 40px 0;
    color: rgb(255, 255, 255);
  }

  .step-text p {
    font-size: 1.05rem;
    font-weight: 400;
    line-height: 1.6;
    margin: 40px;
    color: rgba(252, 252, 253, 0.7);
  }

  @media (max-width: 768px) {
    .step {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .step img {
      flex: none;
      width: 90%;
      max-width: 378px;
    }

    .step-text {
      display: block;
      width: 100%;
      max-width: 420px;
      margin: -100px 0 0 0;
      padding: 120px 2.5rem 2.5rem;
      background: #8185b2;
    }

    .step-text h3 {
      margin: 0 0 0.5rem 0;
    }

    .step-text p {
      margin: 0;
    }
  }

  /* ── Contact ── */
  .contact {
    background: #f9f9fb;
    padding: 5rem 1.5rem 4rem 1.5rem;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
    max-width: 1000px;
    margin: 0 auto;
  }

  .contact-card {
    background: #fff;
    border: 1px solid rgba(26, 26, 46, 0.06);
    border-radius: 16px;
    box-shadow: 0 20px 50px rgba(26, 26, 46, 0.08);
    padding: 2.75rem;
  }

  /* ── Contact info (email side) ── */
  .contact-info {
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    text-align: justify;
  }

  .contact-icon {
    width: 140px;
    height: 140px;
    color: #f5c542;
    margin-bottom: 1.25rem;
  }

  .contact-info h2 {
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #393d6c;
    margin-bottom: 0.75rem;
  }

  .contact-intro {
    font-size: 1.05rem;
    line-height: 1.7;
    color: rgba(26, 26, 46, 0.7);
    margin-bottom: 1.5rem;
  }

  .contact-email {
    font-size: clamp(1.3rem, 3vw, 1.8rem);
    font-weight: 700;
    color: #393286;
    text-decoration: none;
    padding-bottom: 0.2rem;
    transition:
      color 0.2s,
      border-color 0.2s;
  }

  .contact-email:hover {
    color: #3c4068;
    border-color: #3c4068;
  }

  .contact-note {
    font-size: 0.9rem;
    color: rgba(26, 26, 46, 0.5);
    margin: 1.25rem 0 0 0;
  }

  /* ── Founder ── */
  .founder {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .founder h3 {
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #393d6c;
    margin-bottom: 1.25rem;
  }

  .founder-photo {
    display: block;
    width: 140px;
    height: 140px;
    object-fit: cover;
    border-radius: 50%;
    margin: 0 auto 1.25rem auto;
  }

  .founder-bio {
    font-size: 1rem;
    line-height: 1.7;
    color: rgba(26, 26, 46, 0.7);
    margin: 0 auto 1.5rem auto;
    max-width: 400px;
    text-align: justify;
  }

  .founder-linkedin {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    background: #0a66c2;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    transition:
      background 0.2s,
      transform 0.1s;
  }

  .founder-linkedin:hover {
    background: #0a55a3;
    transform: translateY(-1px);
  }

  .founder-linkedin:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    .contact-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
