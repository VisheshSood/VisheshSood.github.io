import type { APIRoute } from "astro";
import { modelFiles } from "../../../lib/models3d-files";
import { scramble } from "../../../lib/obf";

export function getStaticPaths() {
  return modelFiles().map((m) => ({ params: { id: m.id }, props: { file: m.file } }));
}
export const GET: APIRoute = ({ params }) => {
  const m = modelFiles().find((x) => x.id === params.id)!;
  return new Response(scramble(m.bytes(), m.id), { headers: { "Content-Type": "application/octet-stream", "Cache-Control": "public, max-age=31536000, immutable" } });
};
