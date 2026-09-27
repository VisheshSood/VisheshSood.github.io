import { products } from "../data/models3d";
import { modelByFile } from "./models3d-files";

// Links from the rest of the site into /3d. A link only appears when that product
// (and ideally that colour) actually has a 3D model, so nothing ever points at an empty tab.
const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function liveColours(slug: string) {
  const p = products.find((x) => x.slug === slug);
  return p ? p.colours.filter((c) => modelByFile(`${slug}--${c.slug}.glb`) || modelByFile(`${slug}.glb`)) : [];
}

function tabFor(g: { material: string; texture: string; longCuff?: boolean; colours?: string[] }): string | null {
  if (g.material === "Nitrile" && g.texture === "Zig" && (g.colours ?? []).some((c) => /dual tone/i.test(c))) return "dual-tone-zig-8-mil";
  if (g.material === "Nitrile" && g.texture === "Diamond") return "diamond-8-mil";
  if (g.material === "Nitrile" && g.texture === "Micro Diamond") return "micro-diamond-8-mil";
  if (g.material === "Latex" && g.texture === "Diamond" && g.longCuff) return "diamond-silverlined-latex";
  if (g.material === "Latex" && g.texture === "Zig") return "zig-silverlined-latex";
  return null;
}

/** /3d link for a catalogue glove, opened on its product and, when possible, its colour. */
export function view3dForGlove(g: { material: string; texture: string; longCuff?: boolean; colours?: string[] }): string | null {
  const tab = tabFor(g);
  if (!tab) return null;
  const live = liveColours(tab);
  if (!live.length) return null;
  // Latex catalogue colours ("Orange", "Blue and White") map onto the Silverlined swatches.
  const alias = (c: string) => (c === "blue-and-white" ? "blue-silverlined" : c.startsWith("dual-tone") ? "dual-tone" : c);
  const colour = (g.colours ?? []).map((c) => alias(slugify(c)))
    .map((c) => live.find((l) => l.slug === c || l.slug === `${c}-silverlined`)?.slug)
    .find(Boolean);
  return colour ? `/3d?c=${colour}#${tab}` : `/3d#${tab}`;
}

const techTab: Record<string, string> = {
  "raised-diamond": "diamond-8-mil",
  "micro-diamond": "micro-diamond-8-mil",
  "zig-grip": "dual-tone-zig-8-mil",
  "tyre-tread": "gripper-7-mil",
};

/** /3d link for a grip-technology page, or null when that texture has no model yet. */
export function view3dForTech(techSlug: string): string | null {
  const tab = techTab[techSlug];
  return tab && liveColours(tab).length ? `/3d#${tab}` : null;
}
