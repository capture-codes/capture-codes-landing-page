// Newsletter subscription against the Brevo (Sendinblue) form endpoint.
//
// We deliberately do NOT use Brevo's own main.js. That script binds only the
// single element with id="sib-form", so once the site had two forms on one page
// (the event-organisers hero plus the footer) the unbound one fell through to a
// native form POST and navigated the visitor to the raw JSON response on
// sibforms.com. Posting the form ourselves keeps any number of forms working,
// keeps the visitor on the site, and drops two third-party assets from the page.

export const BREVO_ACTION =
  "https://8661365e.sibforms.com/serve/MUIFAAn3YPr-NqTlfwi5YV9aB5So8bsipI26OjjAgD8T6rbRl1UXMtxK9dQtayr4L1iTm20_RYHC-TB4oUZerdzZUiCWRBDevyEIe5GOvqhV1B06jDHUH2cHd04UROQ-HQRVh85Wb0vJE-mnYvMmFzHxnv2QzYrLmH9AXfOubKggHCbTKOVBdXEGQxono-qJpQBne7ck9zsEIVA8TQ==";

const SUCCESS_MESSAGE = "Your subscription has been successful.";
const FAILURE_MESSAGE =
  "Your subscription could not be saved. Please try again.";

class SubscriptionError extends Error {}

/**
 * POSTs a newsletter form to Brevo and resolves with the message to display.
 * Throws a SubscriptionError carrying a displayable message on failure.
 *
 * @param {HTMLFormElement} form
 * @returns {Promise<string>}
 */
export async function subscribeToNewsletter(form) {
  // URLSearchParams sends application/x-www-form-urlencoded, matching what the
  // endpoint already accepts from a plain HTML form submission.
  const body = new URLSearchParams(new FormData(form));

  // Preferred path: if Brevo allows the cross-origin read we can surface its
  // own message (invalid address, already subscribed, and so on).
  try {
    const response = await fetch(form.action, { method: "POST", body });
    const result = await response.json();

    if (result?.success === false) {
      throw new SubscriptionError(result.message || FAILURE_MESSAGE);
    }

    return result?.message || SUCCESS_MESSAGE;
  } catch (error) {
    if (error instanceof SubscriptionError) throw error;
  }

  // Fallback: the response was unreadable (no CORS header) or not JSON. Repeat
  // the POST as a "simple" no-cors request, which always reaches Brevo but is
  // opaque, so a resolved fetch counts as accepted and only a genuine network
  // failure rejects. Brevo upserts by email address, so the repeat is harmless.
  try {
    await fetch(form.action, { method: "POST", mode: "no-cors", body });
    return SUCCESS_MESSAGE;
  } catch {
    throw new SubscriptionError(FAILURE_MESSAGE);
  }
}
