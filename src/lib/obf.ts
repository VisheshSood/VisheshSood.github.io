// Reversible byte scrambler shared by the build-time endpoint and the browser.
// Obfuscation, not encryption: it stops casual downloads, nothing more.
const SECRET = "ig-3d-2026-hatyai";
function seed(id: string): number {
  let h = 0x811c9dc5;
  for (const ch of SECRET + ":" + id) { h ^= ch.charCodeAt(0); h = Math.imul(h, 0x01000193) >>> 0; }
  return h || 0x9e3779b9;
}
export function scramble(bytes: Uint8Array, id: string): Uint8Array {
  let x = seed(id); const out = new Uint8Array(bytes.length);
  for (let i = 0; i < bytes.length; i++) { x ^= x << 13; x >>>= 0; x ^= x >>> 17; x ^= x << 5; x >>>= 0; out[i] = bytes[i] ^ (x & 0xff); }
  return out;
}
export function modelId(file: string): string {
  let h = 0x811c9dc5; for (const ch of SECRET + "/" + file) { h ^= ch.charCodeAt(0); h = Math.imul(h, 0x01000193) >>> 0; }
  return h.toString(36) + (h >>> 5).toString(36);
}
