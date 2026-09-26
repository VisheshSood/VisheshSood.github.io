import { readdirSync, readFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";
import { modelId } from "./obf";

// Source models live OUTSIDE public/ so raw .glb files are never published.
// Read on demand so a newly added file is picked up without restarting the dev server.
const dir = join(process.cwd(), "src", "models3d");
export type ModelFile = { file: string; id: string; url: string; bytes: () => Uint8Array };
export function modelFiles(): ModelFile[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).filter((f) => /\.glb$/i.test(f)).sort().map((f) => {
    // id = name hash + content hash, so the URL (and the browser cache) changes whenever the file changes
    const bytes = readFileSync(join(dir, f));
    const id = modelId(f) + createHash("sha1").update(bytes).digest("hex").slice(0, 6);
    return { file: f, id, url: `/3d/m/${id}.bin`, bytes: () => new Uint8Array(bytes) };
  });
}
export const modelByFile = (f: string) => modelFiles().find((m) => m.file === f);
