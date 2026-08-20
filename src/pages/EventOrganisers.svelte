<script>
  import heroBg from "../lib/assets/landing-pages/event-organisers/hero-event-organisers.jpg";
  import howItWorks1 from "../lib/assets/landing-pages/event-organisers/how-it-works-1.jpg";
  import howItWorks2 from "../lib/assets/landing-pages/event-organisers/how-it-works-2.jpg";
  import howItWorks3 from "../lib/assets/landing-pages/event-organisers/how-it-works-3.jpg";
  import logo from "../lib/assets/logos/capture-codes-full-line-logo.svg";
  import Footer from "../lib/Footer.svelte";
  import PieMenu from "../lib/PieMenu.svelte";
</script>

<PieMenu />

<main>
  <section class="hero">
    <img class="hero-bg" src={heroBg} alt="Event crowd" />
    <img class="logo" src={logo} alt="Capture Codes" />
    <h1 class="hero-heading">Send photos & videos without contact details</h1>

    <!-- Brevo newsletter form -->
    <div class="hero-newsletter">
      <div class="sib-form" style="background-color: transparent;">
        <div id="sib-form-container" class="sib-form-container">
          <div
            id="error-message"
            class="sib-form-message-panel"
            style="font-family:inherit; font-size:15px; text-align:left; color:#661d1d; background-color:#ffeded; border-color:#ff4949; border-radius:8px;"
          >
            <div
              class="sib-form-message-panel__text sib-form-message-panel__text--center"
            >
              <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
                <path
                  d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z"
                />
              </svg>
              <span class="sib-form-message-panel__inner-text">
                Your subscription could not be saved. Please try again.
              </span>
            </div>
          </div>
          <div></div>
          <div
            id="success-message"
            class="sib-form-message-panel"
            style="font-family:inherit; font-size:15px; text-align:left; color:#085229; background-color:#e7faf0; border-color:#13ce66; border-radius:8px;"
          >
            <div
              class="sib-form-message-panel__text sib-form-message-panel__text--center"
            >
              <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
                <path
                  d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z"
                />
              </svg>
              <span class="sib-form-message-panel__inner-text">
                Your subscription has been successful.
              </span>
            </div>
          </div>
          <div></div>
          <div
            id="sib-container"
            class="sib-container--large sib-container--vertical"
            style="text-align:left; background-color:rgba(118,35,196,0.8); border-width:0px; border-radius:12px; direction:ltr"
          >
            <form
              id="sib-form"
              method="POST"
              action="https://8661365e.sibforms.com/serve/MUIFAAn3YPr-NqTlfwi5YV9aB5So8bsipI26OjjAgD8T6rbRl1UXMtxK9dQtayr4L1iTm20_RYHC-TB4oUZerdzZUiCWRBDevyEIe5GOvqhV1B06jDHUH2cHd04UROQ-HQRVh85Wb0vJE-mnYvMmFzHxnv2QzYrLmH9AXfOubKggHCbTKOVBdXEGQxono-qJpQBne7ck9zsEIVA8TQ=="
              data-type="subscription"
            >
              <div class="sib-form-block hero-form-heading">
                <h3>Ready to simplify your event media?</h3>
              </div>

              <div class="sib-form-block hero-form-text">
                <div class="sib-text-form-block">
                  <p>
                    Join the newsletter to be the first to know when Capture
                    Codes launches.
                  </p>
                </div>
              </div>

              <div class="hero-cta-form">
                <div class="sib-input sib-form-block">
                  <div class="form__entry entry_block">
                    <div class="form__label-row">
                      <div class="entry__field">
                        <input
                          class="input"
                          type="text"
                          id="EMAIL"
                          name="EMAIL"
                          autocomplete="email"
                          value=""
                          placeholder="Enter your email"
                          data-required="true"
                          required
                        />
                      </div>
                    </div>
                    <label
                      for="EMAIL"
                      class="entry__error entry__error--primary"
                      style="font-family:inherit; font-size:14px; text-align:left; color:#661d1d; background-color:#ffeded; border-color:#ff4949; border-radius:6px;"
                    ></label>
                  </div>
                </div>

                <div class="sib-form-block hero-cta-submit">
                  <button
                    class="sib-form-block__button sib-form-block__button-with-loader"
                    style="font-family:inherit; font-size:1rem; font-weight:600; color:#FFFFFF; background-color:#1a1a2e; border-width:0px; border-radius:8px;"
                    form="sib-form"
                    type="submit"
                  >
                    <svg
                      class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"
                      />
                    </svg>
                    Subscribe
                  </button>
                </div>
              </div>

              <input
                type="text"
                name="email_address_check"
                value=""
                class="input--hidden"
              />
              <input type="hidden" name="locale" value="en" />
            </form>
          </div>
        </div>
      </div>
    </div>
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
      attendee signs up their photos are automatically sent to them. There's no
      need for GDPR.
    </p>
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
    min-height: 66vh;
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
    padding-top: 3rem;
  }

  .hero-heading {
    position: relative;
    z-index: 2;
    font-size: clamp(1.5rem, 3vw, 3rem);
    font-family: "Merriweather Sans", sans-serif;
    font-weight: 600;
    letter-spacing: 0.03em;
    color: #fff;
    margin: auto 0;
    padding: 1.5rem;
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

  /* ── Hero newsletter (Brevo) ── */
  .hero-newsletter {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 540px;
    padding: 0 1.5rem 3rem 1.5rem;
    text-align: left;
  }

  .hero-newsletter :global(.sib-form) {
    padding: 0;
  }

  .hero-newsletter :global(.sib-form-container) {
    max-width: 100%;
  }

  .hero-newsletter :global(#sib-container) {
    max-width: 100%;
    padding: 1.25rem;
  }

  .hero-newsletter :global(#sib-form) {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }

  .hero-newsletter :global(.sib-form-block) {
    padding: 0;
  }

  .hero-newsletter :global(.hero-form-heading h3) {
    font-size: clamp(1.15rem, 2.2vw, 1.4rem);
    font-weight: 700;
    line-height: 1.35;
    color: #fff;
  }

  .hero-newsletter :global(.hero-form-text p) {
    font-size: 0.95rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.9);
  }

  .hero-newsletter :global(.hero-cta-form) {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    width: 100%;
  }

  .hero-newsletter :global(.hero-cta-form .sib-input) {
    flex: 1;
    min-width: 0;
  }

  .hero-newsletter :global(.hero-cta-form .form__entry),
  .hero-newsletter :global(.hero-cta-form .form__label-row),
  .hero-newsletter :global(.hero-cta-form .entry__field) {
    width: 100%;
    margin: 0;
  }

  .hero-newsletter :global(.hero-cta-form input.input) {
    width: 100%;
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

  .hero-newsletter :global(.hero-cta-form input.input:focus) {
    border-color: #fff;
  }

  .hero-newsletter :global(.sib-form-block__button) {
    padding: 0.75rem 1.5rem;
    line-height: 1.2;
    cursor: pointer;
    white-space: nowrap;
    transition:
      background 0.2s,
      transform 0.1s;
  }

  .hero-newsletter :global(.sib-form-block__button:hover) {
    background: #333 !important;
    transform: translateY(-1px);
  }

  .hero-newsletter :global(.sib-form-block__button:active) {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    .hero-newsletter :global(.hero-cta-form) {
      flex-direction: column;
    }

    .hero-newsletter :global(.hero-cta-submit),
    .hero-newsletter :global(.hero-cta-form .sib-form-block__button) {
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
