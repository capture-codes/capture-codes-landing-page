<script>
  import { onMount } from "svelte";
  import logo from "./assets/logos/capture-codes-full-line-logo.svg";
  import { loadBrevoForms } from "./brevo.js";

  onMount(loadBrevoForms);
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
        <div class="sib-form">
          <div id="sib-form-container-footer" class="sib-form-container">
            <div
              id="error-message-footer"
              class="sib-form-message-panel"
              style="font-family:inherit; font-size:0.85rem; text-align:left; color:#661d1d; background-color:#ffeded; border-color:#ff4949; border-radius:6px;"
            >
              <div
                class="sib-form-message-panel__text sib-form-message-panel__text--center"
              >
                <svg
                  viewBox="0 0 512 512"
                  class="sib-icon sib-notification__icon"
                >
                  <path
                    d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z"
                  />
                </svg>
                <span class="sib-form-message-panel__inner-text">
                  Your subscription could not be saved. Please try again.
                </span>
              </div>
            </div>
            <div
              id="success-message-footer"
              class="sib-form-message-panel"
              style="font-family:inherit; font-size:0.85rem; text-align:left; color:#085229; background-color:#e7faf0; border-color:#13ce66; border-radius:6px;"
            >
              <div
                class="sib-form-message-panel__text sib-form-message-panel__text--center"
              >
                <svg
                  viewBox="0 0 512 512"
                  class="sib-icon sib-notification__icon"
                >
                  <path
                    d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z"
                  />
                </svg>
                <span class="sib-form-message-panel__inner-text">
                  Your subscription has been successful.
                </span>
              </div>
            </div>
            <div
              id="sib-container-footer"
              class="sib-container--large sib-container--vertical"
            >
              <form
                id="sib-form-footer"
                method="POST"
                action="https://8661365e.sibforms.com/serve/MUIFAAn3YPr-NqTlfwi5YV9aB5So8bsipI26OjjAgD8T6rbRl1UXMtxK9dQtayr4L1iTm20_RYHC-TB4oUZerdzZUiCWRBDevyEIe5GOvqhV1B06jDHUH2cHd04UROQ-HQRVh85Wb0vJE-mnYvMmFzHxnv2QzYrLmH9AXfOubKggHCbTKOVBdXEGQxono-qJpQBne7ck9zsEIVA8TQ=="
                data-type="subscription"
              >
                <h4>Newsletter</h4>
                <p class="footer-newsletter-label">
                  Signup to be notified when we launch
                </p>
                <div class="footer-newsletter-form">
                  <div class="sib-input sib-form-block">
                    <div class="form__entry entry_block">
                      <div class="form__label-row">
                        <div class="entry__field">
                          <input
                            class="input"
                            type="text"
                            id="EMAIL_FOOTER"
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
                        for="EMAIL_FOOTER"
                        class="entry__error entry__error--primary"
                        style="font-family:inherit; font-size:0.8rem; text-align:left; color:#661d1d; background-color:#ffeded; border-color:#ff4949; border-radius:6px;"
                      ></label>
                    </div>
                  </div>
                  <div class="sib-form-block footer-newsletter-submit">
                    <button
                      class="sib-form-block__button sib-form-block__button-with-loader"
                      form="sib-form-footer"
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
                      Submit
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

  /* Strip Brevo's own container chrome so the yellow card stays the card */
  .footer-newsletter :global(.sib-form) {
    padding: 0;
    margin: 0;
    background: transparent;
    text-align: left;
  }

  .footer-newsletter :global(.sib-form-container) {
    max-width: 100%;
  }

  .footer-newsletter :global(.sib-container--large) {
    max-width: 100%;
    padding: 0;
    background: transparent;
    border: 0;
    text-align: left;
    direction: ltr;
  }

  .footer-newsletter :global(form) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .footer-newsletter :global(.sib-form-block) {
    padding: 0;
    margin: 0;
  }

  .footer-newsletter h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0;
    color: #331153;
  }

  .footer-newsletter .footer-newsletter-label {
    font-size: 0.9rem;
    color: #4a1e6b;
    margin: 0;
  }

  .footer-newsletter-form {
    display: flex;
    gap: 0.5rem;
  }

  .footer-newsletter-form :global(.sib-input) {
    flex: 1;
    min-width: 0;
  }

  .footer-newsletter-form :global(.form__entry),
  .footer-newsletter-form :global(.form__label-row),
  .footer-newsletter-form :global(.entry__field) {
    width: 100%;
    margin: 0;
  }

  .footer-newsletter-form input {
    width: 100%;
    padding: 0.65rem 0.75rem;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    background: #fff;
    color: #1a1a2e;
    font-family: inherit;
    font-size: 0.9rem;
    outline: none;
    box-shadow: none;
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
    font-family: inherit;
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.2;
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

    .footer-newsletter-form .footer-newsletter-submit,
    .footer-newsletter-form button {
      width: 100%;
    }
  }
</style>
