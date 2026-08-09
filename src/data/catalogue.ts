import raw from "./catalogue.json";

export interface Glove {
  slug: string;
  name: string;
  fullName: string;
  material: string; // Nitrile | Bio Nitrile | Latex
  bio: boolean;
  texture: string;
  treatment: string;
  thickness: number | null;
  length: number | null;
  longCuff: boolean;
  grade: string; // Disposable | Examination
  colours: string[];
  sizes: string[];
  patent: string;
  img?: string; // real box render, where we have one
}

// Colour name -> swatch. `light: true` means it needs dark text/pattern on top.
export const COLOURS: Record<string, { hex: string; light?: boolean }> = {
  "Black": { hex: "#1c1c1c" },
  "White": { hex: "#eceee9", light: true },
  "Blue": { hex: "#2f6fb0" },
  "Light Blue": { hex: "#8fc0de", light: true },
  "Dark Blue": { hex: "#1e2f63" },
  "Navy Blue": { hex: "#1b294f" },
  "Royal Blue": { hex: "#20489b" },
  "Arctic Blue": { hex: "#82b8d8", light: true },
  "Majestic Blue": { hex: "#274fa0" },
  "Reflex Green": { hex: "#5fb246" },
  "Green": { hex: "#39973a" },
  "Military Green": { hex: "#4c5228" },
  "Orange": { hex: "#e8720c" },
  "Red": { hex: "#c0392b" },
  "Bloody Red": { hex: "#7f1618" },
  "Yellow": { hex: "#f1c40f", light: true },
  "Violet": { hex: "#7a4fbf" },
  "Purple": { hex: "#6a3d9a" },
  "Blue and White": { hex: "#2f6fb0" },
  "Dual Tone (Black and Green)": { hex: "#1c1c1c" },
};
export const colourHex = (name: string) => COLOURS[name]?.hex || "#7a807a";
export const colourLight = (name: string) => !!COLOURS[name]?.light;

// Two-tone colourways get a split swatch instead of a single dot.
export const DUAL_TONE: Record<string, [string, string]> = {
  "Dual Tone (Black and Green)": ["#1c1c1c", "#5fb246"],
  "Blue and White": ["#2f6fb0", "#eceee9"],
  "Orange and White": ["#e8720c", "#eceee9"],
};
// Returns a CSS `background` value: a diagonal split for dual tones, a flat hex otherwise.
export const colourSwatch = (name: string) => {
  const dt = DUAL_TONE[name];
  return dt ? `linear-gradient(135deg, ${dt[0]} 0 50%, ${dt[1]} 50% 100%)` : colourHex(name);
};

// Texture -> CSS pattern key for the generated card visual
export const texPattern: Record<string, string> = {
  "Micro Diamond": "micro",
  "Diamond": "raised",
  "Zig": "zig",
  "Tyre Tread": "tread",
  "Fully Textured": "full",
  "Finger Textured": "finger",
  "Textured": "full",
  "Smooth": "smooth",
};

// Which technology page (if any) a texture links to
export const texTechSlug: Record<string, string> = {
  "Micro Diamond": "micro-diamond",
  "Diamond": "raised-diamond",
  "Zig": "zig-grip",
  "Tyre Tread": "tyre-tread",
};

// Real glove photos (no boxes) -> the catalogue families each one represents,
// matched by texture + colour + cuff. Families without a photo fall back to the
// generated colour+texture card in GloveVisual. More photos added as we shoot them.
const GC = "/images/glovecatalog/";
const photoBySlug: Record<string, string> = {};
const assign = (img: string, slugs: string[]) => { for (const s of slugs) photoBySlug[s] = GC + img; };

// Diamond, black nitrile, short cuff
assign("gc-diamond-black.jpg", ["diamond-6-nitrile", "diamond-8-nitrile", "diamond-8-nitrile-2", "diamond-8-nitrile-3", "diamond-8-nitrile-4"]);
// Diamond, blue nitrile, long cuff / household
assign("gc-diamond-blue-long.jpg", ["diamond-6-nitrile-long", "diamond-8-nitrile-long", "diamond-9-nitrile-long", "diamond-8-5-nitrile-long", "diamond-5-nitrile-long"]);
// Micro Diamond, black short cuff; royal blue long/short cuff
assign("gc-microdiamond-black.png", ["micro-diamond-6-nitrile", "micro-diamond-8-nitrile"]);
assign("gc-microdiamond-blue-long.png", ["micro-diamond-9-nitrile-long", "micro-diamond-6-nitrile-long"]);
assign("gc-microdiamond-royalblue.png", ["micro-diamond-9-nitrile"]);
// Tyre Tread (Gripper)
assign("gc-gripper-black.png", ["tyre-tread-6-nitrile", "tyre-tread-7-nitrile"]);
assign("gc-gripper-orange.png", ["tyre-tread-7-nitrile-long"]);
// Zig, nitrile short (green); dual-tone 8 mil
assign("gc-zig-green.png", ["zig-6-nitrile", "zig-6-nitrile-2", "zig-8-nitrile-2", "zig-6-bio-nitrile", "zig-7-bio-nitrile"]);
assign("gc-zig-dualtone.png", ["zig-8-nitrile"]);
assign("gc-zig-latex-blue.png", ["zig-14-latex-long"]);
// Micro Diamond latex long cuff (blue); orange silverline household (diamond latex)
assign("gc-microdiamond-latex-blue.png", ["micro-diamond-14-latex-long"]);
assign("gc-silverline-orange.png", ["diamond-17-latex-long"]);
// Latex, black / white short cuff
assign("gc-latex-black.jpg", ["smooth-8-latex", "smooth-8-latex-2", "smooth-8-latex-3", "textured-8-latex"]);
assign("gc-latex-white.png", ["smooth-latex", "smooth-latex-2", "smooth-latex-3", "textured-latex", "textured-latex-2", "textured-latex-3", "textured-latex-4", "textured-latex-5", "textured-latex-6", "textured-7-latex", "textured-8-latex-2", "textured-9-latex", "textured-latex-long", "textured-latex-long-2"]);
// Latex, high-risk blue, long cuff
assign("gc-latex-blue-long.jpg", ["textured-10-latex-long", "textured-14-latex-long", "textured-14-latex-long-2"]);
// Finger textured, black (main family) / violet
assign("gc-finger-black.jpg", ["finger-textured-3-nitrile"]);
assign("gc-finger-violet.png", ["finger-textured-3-nitrile-2", "finger-textured-4-5-nitrile"]);
assign("gc-finger-blue-long.jpg", ["finger-textured-4-nitrile-long"]);
// Fully textured, blue photo covers EVERY blue fully-textured nitrile family
// (short/long cuff, disposable/exam, bio, same glove, just cuff/grade differs).
for (const g of raw as Glove[]) {
  if (/Nitrile/.test(g.material) && g.texture === "Fully Textured" && g.colours.includes("Blue")) {
    photoBySlug[g.slug] = GC + "gc-fully-blue.jpg";
  }
}
// The biodegradable 4 mil has its own dedicated photo (overrides the generic blue above).
assign("gc-bio-blue.png", ["fully-textured-4-bio-nitrile"]);
// The 6 mil fully-textured families (short + long) use a dedicated black photo.
assign("gc-fully-black.jpg", ["fully-textured-6-nitrile", "fully-textured-6-nitrile-long"]);

// Display name convention: [thickness] [texture] [material] [cuff].
// e.g. "9 mil Micro Diamond Nitrile Long Cuff". Generated from fields so it stays
// consistent across the whole catalogue. Powdered (corn-starch coated) variants keep
// a "· Powdered" suffix so they stay distinct from their powder-free siblings.
const displayName = (g: Glove): string => {
  const base = [g.thickness != null ? `${g.thickness} mil` : null, g.texture, g.material, g.longCuff ? "Long Cuff" : null]
    .filter(Boolean)
    .join(" ");
  return /corn starch/i.test(g.treatment || "") ? `${base} · Powdered` : base;
};

export const catalogue: Glove[] = (raw as Glove[]).map((g) => ({ ...g, img: photoBySlug[g.slug], name: displayName(g) }));

// Card badges: the flags we surface visually on a glove. Diamond is invented (not
// patented); Micro Diamond, Zig and Tyre Tread are patented. Ordered by priority.
export function gloveBadges(g: Glove): { label: string; kind: string }[] {
  const out: { label: string; kind: string }[] = [];
  if (g.texture === "Diamond") out.push({ label: "Invented", kind: "invented" });
  else if (["Micro Diamond", "Zig", "Tyre Tread"].includes(g.texture)) out.push({ label: "Patented", kind: "patented" });
  if (g.bio) out.push({ label: "Bio", kind: "bio" });
  if (g.longCuff) out.push({ label: "Long Cuff", kind: "long" });
  if ((g.thickness ?? 0) >= 8) out.push({ label: "Heavy Duty", kind: "heavy" });
  return out;
}

// Default catalogue ordering: lead with our flagship grip technologies (patented,
// then the invented Diamond), then textured, and everyday smooth gloves last, so the
// range never opens on commodity thin gloves.
const TEX_RANK: Record<string, number> = {
  "Micro Diamond": 0, "Zig": 1, "Tyre Tread": 2, "Diamond": 3,
  "Fully Textured": 5, "Finger Textured": 6, "Textured": 5, "Smooth": 9,
};
export const catalogueRanked = (): Glove[] =>
  [...catalogue].sort((a, b) => {
    const ra = TEX_RANK[a.texture] ?? 7, rb = TEX_RANK[b.texture] ?? 7;
    if (ra !== rb) return ra - rb;
    const ma = /Latex/.test(a.material) ? 1 : 0, mb = /Latex/.test(b.material) ? 1 : 0;
    if (ma !== mb) return ma - mb; // nitrile (incl. bio) leads latex within a texture
    return (b.thickness ?? 0) - (a.thickness ?? 0);
  });

// Studio BOX renders (packaged product shots), keyed by slug. Used by the homepage
// Flagship section and the industry recommendation cards. Adding box renders here
// never affects the catalogue, which always keeps its plain glove photos.
export const boxBySlug: Record<string, string> = {
  "micro-diamond-6-nitrile": "/images/prod-black-micro-diamond-6.png",
  "zig-8-nitrile": "/images/prod-dual-tone-zig-8.jpg",
  "diamond-8-nitrile": "/images/prod-orange-diamond-8.jpg",
  "fully-textured-6-nitrile": "/images/prod-barrier.jpg",
  "micro-diamond-9-nitrile-long": "/images/prod-royal-blue-micro-diamond-6.png",
  "zig-6-bio-nitrile": "/images/prod-green-zig-bio-6.jpg",
  "fully-textured-4-bio-nitrile": "/images/prod-bioblue-fully-textured-4.png",
  "diamond-17-latex-long": "/images/prod-silverlined-diamond-14.jpg",
  "micro-diamond-8-nitrile": "/images/prod-anaconda-microdiamond.jpg",
  "tyre-tread-7-nitrile": "/images/prod-orange-gripper.jpg",
  "tyre-tread-7-nitrile-long": "/images/prod-orange-gripper.jpg",
  "diamond-9-nitrile-long": "/images/prod-foodbuddy-diamond.jpg",
  "fully-textured-8-nitrile": "/images/prod-mammoth-8.png",
  "fully-textured-8-nitrile-long": "/images/prod-mammoth-8.png",
  "micro-diamond-9-nitrile": "/images/prod-royal-blue-micro-diamond-6.png",
  "micro-diamond-6-nitrile-long": "/images/prod-royal-blue-micro-diamond-6.png",
  "finger-textured-4-nitrile-long": "/images/prod-avi-skinpro.jpg",
  "fully-textured-5-nitrile": "/images/prod-nitrihand.jpg",
  "textured-14-latex-long": "/images/prod-highrisk.jpg",
  "smooth-8-latex": "/images/prod-beauty.jpg",
};

// Homepage Flagship Products, in a fixed running order.
const flagshipOrder = ["micro-diamond-6-nitrile", "zig-8-nitrile", "diamond-8-nitrile", "fully-textured-6-nitrile", "micro-diamond-9-nitrile-long", "zig-6-bio-nitrile", "fully-textured-4-bio-nitrile", "diamond-17-latex-long"];
export const flagship: { glove: Glove; box: string }[] = flagshipOrder
  .map((slug) => ({ glove: catalogue.find((g) => g.slug === slug)!, box: boxBySlug[slug] }))
  .filter((x) => x.glove);

const uniq = <T,>(a: T[]) => [...new Set(a)];
export const facets = {
  textures: uniq(catalogue.map((g) => g.texture)).sort(),
  materials: uniq(catalogue.map((g) => g.material)).sort(),
  grades: uniq(catalogue.map((g) => g.grade)).sort(),
  thicknesses: uniq(catalogue.map((g) => g.thickness).filter(Boolean) as number[]).sort((a, b) => a - b),
  lengths: uniq(catalogue.map((g) => g.length).filter(Boolean) as number[]).sort((a, b) => a - b),
  colours: uniq(catalogue.flatMap((g) => g.colours)).sort(),
};
