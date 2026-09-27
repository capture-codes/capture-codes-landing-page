// Browser-side frame grabbing and QR decoding for the interactive demo.
//
// The processing app decodes uploaded footage with the same library (jsqr — see
// processing-app/src/services/qr-service.ts), so the demo exercises the decoder that actually
// runs over real event media. Deliberately free of Svelte/component concerns.
import jsQR from "jsqr";
import {
  DEMO_QR_MATCH,
  DEMO_QR_PAYLOAD,
  PHOTO_MAX_EDGE,
  SCAN_MAX_EDGE,
} from "./demoConfig.js";

/**
 * A reusable offscreen canvas + context pair. Reusing one canvas — and asking the browser for
 * `willReadFrequently`, since the scan loop calls getImageData on every tick — keeps decoding
 * cheap.
 *
 * @returns {{ canvas: HTMLCanvasElement, context: CanvasRenderingContext2D }}
 */
export function createScanSurface() {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d", { willReadFrequently: true });
  return { canvas, context };
}

/**
 * Draws the video's current frame into `surface`, downscaled so its longest edge is at most
 * `maxEdge` (never upscaled), and returns the pixels to decode.
 *
 * The video element is mirrored with CSS for a natural selfie preview. That transform is not
 * part of the pixel data, so the frame read here is the camera's unmirrored output — which is
 * what the decoder needs and what a real capture would record.
 *
 * @param {HTMLVideoElement | null} video
 * @param {{ canvas: HTMLCanvasElement, context: CanvasRenderingContext2D }} surface
 * @param {number} [maxEdge]
 * @returns {ImageData | null} null until the video has decodable dimensions.
 */
export function grabFrame(video, surface, maxEdge = SCAN_MAX_EDGE) {
  const sourceWidth = video?.videoWidth ?? 0;
  const sourceHeight = video?.videoHeight ?? 0;
  if (!sourceWidth || !sourceHeight) return null;

  const scale = Math.min(1, maxEdge / Math.max(sourceWidth, sourceHeight));
  const width = Math.max(1, Math.round(sourceWidth * scale));
  const height = Math.max(1, Math.round(sourceHeight * scale));

  if (surface.canvas.width !== width) surface.canvas.width = width;
  if (surface.canvas.height !== height) surface.canvas.height = height;

  surface.context.drawImage(video, 0, 0, width, height);
  return surface.context.getImageData(0, 0, width, height);
}

/**
 * Decodes a QR code from frame pixels.
 *
 * `inversionAttempts: "dontInvert"` skips the extra inverted pass the library would otherwise
 * run: a phone screen showing a normal QR code is never inverted, and the scan loop wants the
 * cheapest decode it can get.
 *
 * @param {ImageData | null} imageData
 * @returns {string | null} decoded text, or null when no code was found.
 */
export function decodeQr(imageData) {
  if (!imageData) return null;
  const result = jsQR(imageData.data, imageData.width, imageData.height, {
    inversionAttempts: "dontInvert",
  });
  return result?.data ?? null;
}

/**
 * Compares a decoded value with the fixed demo code, per DEMO_QR_MATCH.
 *
 * @param {string | null} value
 * @returns {boolean}
 */
export function matchesDemoCode(value) {
  if (typeof value !== "string" || value.length === 0) return false;
  if (DEMO_QR_MATCH === "any") return true;
  if (DEMO_QR_MATCH === "prefix") return value.startsWith(DEMO_QR_PAYLOAD);
  return value === DEMO_QR_PAYLOAD;
}

/**
 * Captures the video's current frame at (at most) full usable resolution for the still photo.
 *
 * @param {HTMLVideoElement | null} video
 * @param {number} [maxEdge]
 * @returns {HTMLCanvasElement | null}
 */
export function grabFullFrame(video, maxEdge = PHOTO_MAX_EDGE) {
  const sourceWidth = video?.videoWidth ?? 0;
  const sourceHeight = video?.videoHeight ?? 0;
  if (!sourceWidth || !sourceHeight) return null;

  const scale = Math.min(1, maxEdge / Math.max(sourceWidth, sourceHeight));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(sourceWidth * scale));
  canvas.height = Math.max(1, Math.round(sourceHeight * scale));

  const context = canvas.getContext("2d");
  if (!context) return null;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  return canvas;
}

/**
 * Encodes a canvas as a JPEG blob, for the on-page photo and the download link.
 *
 * @param {HTMLCanvasElement} canvas
 * @param {string} [type]
 * @param {number} [quality]
 * @returns {Promise<Blob | null>}
 */
export function canvasToBlob(canvas, type = "image/jpeg", quality = 0.92) {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), type, quality);
  });
}
