<script>
  import logo from "./assets/logos/capture-codes-full-line-logo.svg";
  import { BREVO_ACTION, subscribeToNewsletter } from "./brevo.js";

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

<footer>
  <div class="footer-container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="/" class="footer-logo-link" aria-label="Capture Codes home">
          <img class="footer-logo" src={logo} alt="Capture Codes" />
        </a>
        <p class="footer-tagline">
          Easily share photos & videos without contact details
        </p>
      </div>

      <div class="footer-col footer-newsletter">
        <h4 class="footer-col-title">Stay in the loop</h4>
        <p class="footer-newsletter-label">
          Signup to be notified when we launch
        </p>
        <form
          class="footer-newsletter-form"
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
            {status === "sending" ? "Sending…" : "Submit"}
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

      <nav class="footer-col footer-col--right" aria-label="Explore">
        <h4 class="footer-col-title">Explore</h4>
        <ul class="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/faq/">FAQ</a></li>
          <li><a href="/#contact">Contact</a></li>
          <li><a href="/privacy/">Privacy Policy</a></li>
          <li><a href="/terms/">Terms of Website</a></li>
        </ul>
      </nav>
    </div>

    <div class="footer-bottom">
      <p class="footer-copyright">
        &copy; {new Date().getFullYear()} Capture Codes. All rights reserved.
      </p>
    </div>
  </div>
</footer>

<style>
  footer {
    background: #282b4a;
    color: #fff;
    padding: 4rem 1.5rem 2rem;
  }

  .footer-container {
    max-width: 1120px;
    margin: 0 auto;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 1.6fr 1.4fr 1fr;
    gap: 3rem;
    padding-bottom: 2.5rem;
  }

  .footer-brand {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .footer-logo-link {
    display: inline-block;
    width: fit-content;
  }

  .footer-logo {
    width: 200px;
    max-width: 100%;
    height: auto;
  }

  .footer-tagline {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.65);
    margin: 0;
    max-width: 24rem;
    line-height: 1.6;
  }

  .footer-col {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }

  .footer-col--right {
    text-align: right;
  }

  .footer-col-title {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.45);
    margin: 0;
  }

  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .footer-links a {
    color: rgba(255, 255, 255, 0.78);
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.2s;
  }

  .footer-links a:hover {
    color: #f5c542;
  }

  .footer-newsletter {
    gap: 0.6rem;
  }

  .footer-newsletter-label {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.65);
    margin: 0;
  }

  .footer-newsletter-form {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.25rem;
  }

  .newsletter-honeypot {
    display: none;
  }

  .newsletter-message {
    margin: 0;
    padding: 0.5rem 0.65rem;
    border-radius: 6px;
    background: #e7faf0;
    color: #085229;
    font-size: 0.85rem;
    line-height: 1.4;
  }

  .newsletter-message.is-error {
    background: #ffeded;
    color: #661d1d;
  }

  .footer-newsletter-form input {
    flex: 1;
    min-width: 0;
    padding: 0.7rem 0.85rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.06);
    color: #fff;
    font-family: inherit;
    font-size: 0.9rem;
    outline: none;
    box-shadow: none;
    transition:
      border-color 0.2s,
      background 0.2s;
  }

  .footer-newsletter-form input::placeholder {
    color: rgba(255, 255, 255, 0.45);
  }

  .footer-newsletter-form input:focus {
    border-color: #f5c542;
    background: rgba(255, 255, 255, 0.1);
  }

  .footer-newsletter-form button {
    padding: 0.7rem 1.25rem;
    border: none;
    border-radius: 8px;
    background: #f5c542;
    color: #331153;
    font-family: inherit;
    font-size: 0.9rem;
    font-weight: 700;
    line-height: 1.2;
    cursor: pointer;
    white-space: nowrap;
    transition:
      background 0.2s,
      transform 0.1s;
  }

  .footer-newsletter-form button:hover {
    background: #ffd763;
    transform: translateY(-1px);
  }

  .footer-newsletter-form button:active {
    transform: translateY(0);
  }

  .footer-newsletter-form button:disabled {
    opacity: 0.75;
    cursor: default;
    transform: none;
  }

  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    padding-top: 1.5rem;
  }

  .footer-copyright {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
  }

  @media (max-width: 900px) {
    .footer-grid {
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
    }
  }

  @media (max-width: 560px) {
    .footer-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .footer-newsletter-form {
      flex-direction: column;
    }

    .footer-newsletter-form button {
      width: 100%;
    }
  }
</style>
