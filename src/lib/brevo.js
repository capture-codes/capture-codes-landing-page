// Shared runtime loader for the Brevo (Sendinblue) embedded newsletter forms.
//
// Any component that renders a Brevo form calls loadBrevoForms() from onMount.
// The work is guarded so the stylesheet, translation config and main.js are
// each injected exactly once per page, however many forms are on it.
//
// main.js is appended only after the calling component has mounted, so every
// form already exists in the DOM by the time Brevo initialises and binds them.

const STYLESHEET_URL =
  "https://sibforms.com/forms/end-form/build/sib-styles.css";
const SCRIPT_URL = "https://sibforms.com/forms/end-form/build/main.js";

const INVALID_MESSAGE =
  "The information provided is invalid. Please review the field format and try again.";

let requested = false;

export function loadBrevoForms() {
  if (typeof document === "undefined" || requested) return;
  requested = true;

  if (!document.querySelector(`link[href="${STYLESHEET_URL}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = STYLESHEET_URL;
    document.head.appendChild(link);
  }

  // Brevo reveals these panels itself once a submission resolves, so they start
  // hidden. :where() keeps the specificity at zero so Brevo's own rules win.
  const style = document.createElement("style");
  style.textContent = `
    :where(.sib-form-message-panel) { display: none; }
    :where(.sib-form-message-panel .sib-notification__icon) {
      width: 20px;
      height: 20px;
    }
  `;
  document.head.appendChild(style);

  window.REQUIRED_CODE_ERROR_MESSAGE = "Please choose a country code";
  window.LOCALE = "en";
  window.EMAIL_INVALID_MESSAGE = INVALID_MESSAGE;
  window.SMS_INVALID_MESSAGE = INVALID_MESSAGE;
  window.GENERIC_INVALID_MESSAGE = INVALID_MESSAGE;
  window.INVALID_NUMBER = INVALID_MESSAGE;
  window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";
  window.INVALID_DATE = "Please enter a valid date";
  window.REQUIRED_MULTISELECT_MESSAGE = "Please select at least 1 option";
  window.translation = {
    common: {
      selectedList: "{quantity} list selected",
      selectedLists: "{quantity} lists selected",
      selectedOption: "{quantity} selected",
      selectedOptions: "{quantity} selected",
    },
  };
  window.AUTOHIDE = Boolean(0);

  const script = document.createElement("script");
  script.src = SCRIPT_URL;
  document.body.appendChild(script);
}
