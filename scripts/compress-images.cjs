// One-off safe image compressor. Re-encodes oversized images IN PLACE, keeping
// the same filename + extension so no references change. JPEGs (including PNG
// data mislabelled as .jpg) become real mozjpeg; PNGs stay lossless PNG but get
// resized if huge. Originals are recoverable from git. Only overwrites when the
// result is actually smaller.
//
// Reads each file into a Buffer via fs first (releases the OS handle) to dodge
// Windows sharing-violation locks from file watchers / AV, then feeds the buffer
// to sharp. Retries a few times if a write still collides with a lock.
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const DIR = "public/images";
const MAX_EDGE = 1800;
const JPEG_Q = 82;
const MIN_SAVE = 0.03;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function readWithRetry(p, tries = 4) {
  for (let i = 0; i < tries; i++) {
    try { return fs.readFileSync(p); }
    catch (e) { if (i === tries - 1) throw e; await sleep(250); }
  }
}
async function writeWithRetry(p, buf, tries = 4) {
  for (let i = 0; i < tries; i++) {
    try { fs.writeFileSync(p, buf); return; }
    catch (e) { if (i === tries - 1) throw e; await sleep(250); }
  }
}

(async () => {
  const files = fs.readdirSync(DIR).filter((f) => /\.(jpe?g|png)$/i.test(f));
  let before = 0, after = 0, changed = 0;
  for (const f of files) {
    const p = path.join(DIR, f);
    const ext = path.extname(f).toLowerCase();
    let input;
    try { input = await readWithRetry(p); }
    catch (e) { console.log(`READ FAIL ${f}: ${e.code || e.message}`); continue; }
    const orig = input.length;
    before += orig;
    try {
      const m = await sharp(input).metadata();
      let pipe = sharp(input).rotate();
      if (Math.max(m.width, m.height) > MAX_EDGE) {
        pipe = pipe.resize({
          width: m.width >= m.height ? MAX_EDGE : null,
          height: m.height > m.width ? MAX_EDGE : null,
          withoutEnlargement: true,
        });
      }
      const buf = ext === ".png"
        ? await pipe.png({ compressionLevel: 9, effort: 10 }).toBuffer()
        : await pipe.jpeg({ quality: JPEG_Q, mozjpeg: true }).toBuffer();
      if (buf.length < orig * (1 - MIN_SAVE)) {
        await writeWithRetry(p, buf);
        after += buf.length;
        changed++;
        console.log(`${String(Math.round(orig/1024)).padStart(5)}KB -> ${String(Math.round(buf.length/1024)).padStart(5)}KB  ${f}`);
      } else {
        after += orig;
      }
    } catch (e) {
      after += orig;
      console.log(`skip ${f}: ${e.message}`);
    }
  }
  console.log(`\n${changed}/${files.length} recompressed`);
  console.log(`total ${(before/1048576).toFixed(1)}MB -> ${(after/1048576).toFixed(1)}MB  (saved ${((before-after)/1048576).toFixed(1)}MB, ${Math.round((1-after/before)*100)}%)`);
})();
