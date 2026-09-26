import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { modelId } from "./obf";

// Source models live OUTSIDE public/ so raw .glb files are never published.
// Read on demand so a newly added file is picked up without restarting the dev server.
const dir = join(process.cwd(), "src", "models3d");
export type ModelFile = { file: string; id: string; url: string; bytes: () => Uint8Array };
export function modelFiles(): ModelFile[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).filter((f) => /\.glb$/i.test(f)).sort().map((f) => {
    const id = modelId(f);
    return { file: f, id, url: `/3d/m/${id}.bin`, bytes: () => new Uint8Array(readFileSync(join(dir, f))) };
  });
}
export const modelByFile = (f: string) => modelFiles().find((m) => m.file === f);
