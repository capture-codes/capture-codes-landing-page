<script>
  import logo from "./assets/logos/capture-codes-full-line-logo.svg";
</script>

<footer>
  <div class="footer-container">
    <div class="footer-left">
      <a href="/" class="footer-logo-link">
        <img class="footer-logo" src={logo} alt="Capture Codes" />
      </a>
      <p class="footer-tagline">
        Easily share photos & videos without contact details
      </p>
      <div class="footer-newsletter">
        <h4>Newsletter</h4>
        <p class="footer-newsletter-label">
          Signup to be notified when we launch
        </p>
        <div class="footer-newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button type="button">Submit</button>
        </div>
      </div>
    </div>
    <div class="footer-right">
      <ul class="footer-links">
        <li><a href="/privacy/">Privacy Policy</a></li>
        <li><a href="/terms/">Terms of Website</a></li>
      </ul>
      <p class="footer-copyright">
        &copy; {new Date().getFullYear()} Capture Codes. All rights reserved.
      </p>
    </div>
  </div>
</footer>

<style>
  footer {
    background: #331153;
    color: #fff;
    padding: 3rem 1.5rem;
    margin-top: -3rem;
    padding-top: calc(3rem + 3rem);
  }

  .footer-container {
    max-width: 960px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  .footer-left {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .footer-logo-link {
    display: inline-block;
  }

  .footer-logo {
    max-width: 220px;
    height: auto;
  }

  .footer-tagline {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
  }

  .footer-newsletter {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background: #f5c542;
    padding: 1.5rem;
    border-radius: 12px;
  }

  .footer-newsletter h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0;
    color: #331153;
  }

  .footer-newsletter-label {
    font-size: 0.9rem;
    color: #4a1e6b;
    margin: 0;
  }

  .footer-newsletter-form {
    display: flex;
    gap: 0.5rem;
  }

  .footer-newsletter-form input {
    flex: 1;
    padding: 0.65rem 0.75rem;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    background: #fff;
    color: #1a1a2e;
    font-size: 0.9rem;
    outline: none;
    transition: border-color 0.2s;
  }

  .footer-newsletter-form input::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }

  .footer-newsletter-form input:focus {
    border-color: #7623c4;
  }

  .footer-newsletter-form button {
    padding: 0.65rem 1.25rem;
    border: none;
    border-radius: 6px;
    background: #7623c4;
    color: #fff;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition:
      background 0.2s,
      transform 0.1s;
    white-space: nowrap;
  }

  .footer-newsletter-form button:hover {
    background: #8b35de;
    transform: translateY(-1px);
  }

  .footer-newsletter-form button:active {
    transform: translateY(0);
  }

  .footer-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
  }

  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    text-align: right;
  }

  .footer-links a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.2s;
  }

  .footer-links a:hover {
    color: #fff;
  }

  .footer-copyright {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
    margin-top: 0.5rem;
  }

  @media (max-width: 768px) {
    .footer-container {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

  }

  @media (max-width: 480px) {
    .footer-newsletter-form {
      flex-direction: column;
    }

    .footer-newsletter-form button {
      width: 100%;
    }
  }
</style>
