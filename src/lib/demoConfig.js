// Single source of truth for the interactive demo (/demo/) and the phone-side QR page
// (/demo/qr/) it points at. Anything a maintainer is likely to want to tweak lives here.

/**
 * The value the demo QR code encodes. DEMO_QR_MATCH controls how strictly a decoded frame is
 * compared with it, and the committed asset `src/lib/assets/demo/demo-qr.svg` is a pre-rendered
 * copy of this exact string.
 *
 * Regenerate the asset if this changes (same `qrcode` package the web app already uses):
 *   npx qrcode -o src/lib/assets/demo/demo-qr.svg -w 512 -m 4 "<new payload>"
 *
 * Keep the payload in the shape the real product uses: the processing app reads the trailing
 * path segment as a numeric id (processing-app/src/services/qr-service.ts). That id must NOT be
 * a live profiles.numeric_id, so the demo code can never resolve to a real account.
 */
export const DEMO_QR_PAYLOAD = "https://capture.codes/invite/100001";

/**
 * Where the "open your QR code" link under the webcam points. Root-absolute with a trailing
 * slash, like every other route on the site (see vite.config.js).
 */
export const DEMO_QR_PAGE_URL = "/demo/qr/";

/**
 * Canonical public origin of the deployed site.
 *
 * The QR page is opened on a phone, so the address the demo prints and copies has to be
 * reachable from another device. Whatever host the page is actually served from (this custom
 * domain, the github.io URL, a LAN address or a tunnel) already is, so it is used as-is. Only a
 * loopback dev host — an address that exists solely on the machine running `npm run dev` —
 * falls back to this origin.
 */
export const SITE_ORIGIN = "https://capture.codes";

/** Hostnames that only resolve on the machine running the dev server. */
const DEV_HOSTNAMES = new Set(["localhost", "127.0.0.1", "0.0.0.0", "::1", "[::1]"]);

/**
 * @param {string} hostname
 * @returns {boolean} true when the hostname can only be reached from the dev machine.
 */
export function isDevHost(hostname) {
  return !hostname || DEV_HOSTNAMES.has(hostname) || hostname.endsWith(".localhost");
}

/**
 * Absolute, phone-reachable URL of the QR page: what the demo's "Copy link" button writes to
 * the clipboard and what the address underneath it reads.
 *
 * @param {{ hostname: string, origin: string }} pageLocation Usually `window.location`.
 * @returns {string}
 */
export function absoluteQrPageUrl(pageLocation) {
  const base = isDevHost(pageLocation?.hostname) ? SITE_ORIGIN : pageLocation.origin;
  return new URL(DEMO_QR_PAGE_URL, base).href;
}

/**
 * How a decoded value is compared with DEMO_QR_PAYLOAD:
 *   "exact"  — must equal it (default, so a ticket or poster QR won't start the countdown)
 *   "prefix" — must start with it
 *   "any"    — any QR code in frame starts the countdown
 */
export const DEMO_QR_MATCH = "exact";

/** Overlay timings, in milliseconds. */
export const DETECT_HOLD_MS = 700;
export const COUNTDOWN_FROM = 3;
export const COUNTDOWN_STEP_MS = 1000;
export const FLASH_MS = 260;

/**
 * Scanning: how often the video is sampled, and how far it is downscaled before decoding.
 * jsQR gets slow on large frames (the processing app caps its own scans at 1000px); 640px is
 * ample for a phone screen held up to a webcam.
 */
export const SCAN_INTERVAL_MS = 250;
export const SCAN_MAX_EDGE = 640;

/** Longest edge of the captured still, to keep the in-memory photo reasonable. */
export const PHOTO_MAX_EDGE = 1280;
