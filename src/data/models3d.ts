// Products shown on /3d, in tab order. Each looks for src/models3d/<slug>.glb and <slug>--<colour>.glb.
// Copy mirrors the 2026 print catalogue. Grip figures are nitrile-only and never shown on latex.
export type Hotspot = { n: number; title: string; text: string; at: [number, number, number]; view?: { orbit: string; target?: [number, number, number] } }; // at/target = fraction of bounding box, -0.5..0.5, front = +z
export type Stat = { value: string; label: string; icon: "layers" | "ruler" | "shield" | "refresh" | "leaf" | "grip" | "drop" };
export type Colour = { slug: string; name: string };
export type Product3D = {
  slug: string; eyebrow: string; family: string; name: string; intro: string;
  stats: Stat[]; hotspots: Hotspot[]; notes: string[]; colours: Colour[]; bestFor: string; sizes: string;
};

const latexNotes = [
  "Ambidextrous: replace only the torn glove, not the pair",
  "Roomy fit goes over a cotton liner in cold rooms",
  "EN ISO 374-1 Type B chemical and EN ISO 374-5 virus protection",
  "Contains natural rubber latex",
];
const latexStats: Stat[] = [
  { value: "17 mil", label: "Natural latex", icon: "layers" },
  { value: "300 mm", label: "Long cuff", icon: "ruler" },
  { value: "2-layer", label: "Tear indicator", icon: "shield" },
  { value: "Reusable", label: "Lasts beyond a disposable", icon: "refresh" },
  { value: "100%", label: "Natural latex, powder-free", icon: "leaf" },
];

export const products: Product3D[] = [
  {
    slug: "diamond-silverlined-latex", eyebrow: "Flagship", family: "Diamond Latex", name: "Diamond Silverlined Latex",
    intro: "17 mil Silverlined natural latex with a long cuff, on the raised diamond texture we invented in 2011.",
    stats: [{ value: "17 mil", label: "20 mil at palm", icon: "layers" }, ...latexStats.slice(1)],
    hotspots: [
      { n: 1, title: "Raised diamond texture", text: "The diamond texture we invented in 2011, on 17 mil natural latex, 20 mil at the palm.", at: [0, 0.05, 0.5] },
      { n: 2, title: "Two-layer tear indicator", text: "Coloured outer over a white inner, so a crack shows white straight away.", at: [-0.2, 0.3, 0.5], view: { orbit: "0deg 150deg 65%", target: [0, -0.5, 0] } },
      { n: 3, title: "300 mm long cuff", text: "Beaded cuff stops liquid running down the arm.", at: [0, -0.42, 0.5], view: { orbit: "20deg 85deg 70%", target: [0, -0.3, 0] } },
    ],
    notes: latexNotes,
    colours: [{ slug: "orange-silverlined", name: "Orange Silverlined" }, { slug: "blue-silverlined", name: "Blue Silverlined" }, { slug: "green-silverlined", name: "Green Silverlined" }],
    bestFor: "Meat and poultry processing, dishwashing, cleaning and janitorial, gardening, painting, automotive", sizes: "S–XXL (7–11)",
  },
  {
    slug: "zig-silverlined-latex", eyebrow: "Patented", family: "Zig Latex", name: "Zig Silverlined Latex",
    intro: "17 mil Silverlined natural latex with a long cuff, on our patented Zig texture, the best dry grip we make.",
    stats: [
      { value: "Zig", label: "Our best dry-grip texture", icon: "grip" },
      { value: "17 mil", label: "Natural latex", icon: "layers" },
      { value: "300 mm", label: "Long cuff", icon: "ruler" },
      { value: "Silverlined", label: "White inner, tear indicator", icon: "shield" },
      { value: "Reusable", label: "Lasts beyond a disposable", icon: "refresh" },
    ],
    hotspots: [
      { n: 1, title: "Zig dry grip", text: "Raised zig ridges across palm and fingers. Our best dry grip, and it holds in wet and oily conditions.", at: [0, 0.08, 0.5] },
      { n: 2, title: "Thumb grip", text: "Extra zig grip on the index-facing side of the thumb, for tools and pinch grip.", at: [-0.36, 0.06, 0.4], view: { orbit: "-60deg 80deg 45%", target: [-0.3, 0.05, 0] } },
      { n: 3, title: "Silverlined tear indicator", text: "Blue outer over a white inner, so a crack shows white straight away.", at: [0.18, -0.26, 0.5], view: { orbit: "0deg 150deg 65%", target: [0, -0.5, 0] } },
      { n: 4, title: "300 mm long cuff", text: "Beaded cuff stops liquid running down the arm and covers the forearm.", at: [0, -0.44, 0.5], view: { orbit: "20deg 85deg 70%", target: [0, -0.3, 0] } },
    ],
    notes: [...latexNotes, "100% natural latex, powder-free"],
    colours: [{ slug: "blue-silverlined", name: "Blue Silverlined" }],
    bestFor: "Chemical handling, oil and gas, janitorial, heavy industry", sizes: "S–3XL",
  },
  {
    slug: "dual-tone-zig-8-mil", eyebrow: "Flagship", family: "Patented Zig", name: "Dual Tone Zig",
    intro: "Two bonded layers, black outside and green inside, on our patented Zig texture. Our best dry grip.",
    stats: [
      { value: "+148.5%", label: "Dry grip vs bare hand", icon: "grip" },
      { value: "+215.1%", label: "Wet grip vs bare hand", icon: "drop" },
      { value: "8 mil", label: "Nitrile", icon: "layers" },
      { value: "240 mm", label: "Beaded cuff", icon: "ruler" },
      { value: "2-layer", label: "Wear indicator", icon: "shield" },
    ],
    hotspots: [
      { n: 1, title: "Patented Zig texture", text: "Raised zig ridges across palm and fingers, with extra grip at the thumb for tools.", at: [0, 0.05, 0.5] },
      { n: 2, title: "Two-layer wear indicator", text: "When the black wears through, the green shows, so you know when to change gloves.", at: [-0.2, 0.3, 0.5] },
      { n: 3, title: "Beaded cuff", text: "Latex-free, powder-free, ambidextrous.", at: [0, -0.42, 0.5] },
    ],
    notes: [
      "Heavy-duty 8 mil nitrile, widely used in automotive workshops",
      "EN ISO 374-1 Type B chemical and EN ISO 374-5 virus protection; food-contact tested",
    ],
    colours: [{ slug: "dual-tone", name: "Dual Tone (Black and Green)" }],
    bestFor: "Automotive and mechanics, maintenance, oil and gas, construction", sizes: "S–XXL",
  },
  {
    slug: "micro-diamond-8-mil", eyebrow: "Patented", family: "Micro Diamond", name: "Micro Diamond",
    intro: "A dense grid of small raised diamonds on 8 mil nitrile. The highest wet grip of all our textures.",
    stats: [
      { value: "+141.7%", label: "Dry grip vs bare hand", icon: "grip" },
      { value: "+262.9%", label: "Wet grip vs bare hand", icon: "drop" },
      { value: "8 mil", label: "Nitrile", icon: "layers" },
      { value: "240 mm", label: "Beaded cuff", icon: "ruler" },
      { value: "Type B", label: "EN ISO 374-1 · 374-5 virus · food contact", icon: "shield" },
    ],
    hotspots: [
      { n: 1, title: "Micro diamond texture", text: "Small raised diamonds across palm and fingers.", at: [0, 0.05, 0.5] },
      { n: 2, title: "Fingertip grip", text: "Texture runs to the fingertips.", at: [0.1, 0.42, 0.5] },
      { n: 3, title: "Polymer-coated inner", text: "Powder free, ambidextrous.", at: [0, -0.42, 0.5] },
    ],
    notes: [
      "Sizes S to 3XL; 240, 280 and 290 mm lengths across the family",
      "EN ISO 374-1 Type B chemical and EN ISO 374-5 virus protection; food-contact tested",
    ],
    colours: [{ slug: "black", name: "Black" }, { slug: "orange", name: "Orange" }],
    bestFor: "Mechanics and automotive, food processing, general industry", sizes: "S–3XL",
  },
  {
    slug: "gripper-7-mil", eyebrow: "Patented", family: "Tyre Tread", name: "Gripper",
    intro: "Tyre-tread texture across palm and fingers on 7 mil nitrile, engineered to shed oil and water.",
    stats: [
      { value: "+115.9%", label: "Dry grip vs bare hand", icon: "grip" },
      { value: "+221.3%", label: "Wet grip vs bare hand", icon: "drop" },
      { value: "7 mil", label: "Nitrile", icon: "layers" },
      { value: "240 mm", label: "Beaded cuff", icon: "ruler" },
      { value: "Type B", label: "EN ISO 374-1 · 374-5 virus", icon: "shield" },
    ],
    hotspots: [
      { n: 1, title: "Tyre-tread texture", text: "Directional tread across palm and fingers sheds oil and water.", at: [0, 0.05, 0.5] },
      { n: 2, title: "Fingertip grip", text: "Tread continues to the fingertips for tools and fasteners.", at: [0.1, 0.42, 0.5] },
      { n: 3, title: "Polymer-coated inner", text: "Powder free, ambidextrous, easy on and off.", at: [0, -0.42, 0.5] },
    ],
    notes: ["EN ISO 374-1 Type B chemical and EN ISO 374-5 virus protection"],
    colours: [{ slug: "black", name: "Black" }, { slug: "orange", name: "Orange" }],
    bestFor: "Oil and gas, automotive and mechanics, heavy industry", sizes: "S–XXL",
  },
  {
    slug: "diamond-8-mil", eyebrow: "Invented 2011", family: "Diamond", name: "Diamond",
    intro: "The raised diamond texture we invented in 2011, on 8 mil nitrile.",
    stats: [
      { value: "+75.0%", label: "Dry grip vs bare hand", icon: "grip" },
      { value: "+181.9%", label: "Wet grip vs bare hand", icon: "drop" },
      { value: "8 mil", label: "Nitrile", icon: "layers" },
      { value: "240 mm", label: "Beaded cuff · 290 mm long cuff available", icon: "ruler" },
      { value: "Type B", label: "EN ISO 374-1 · 374-5 virus · food contact", icon: "shield" },
    ],
    hotspots: [
      { n: 1, title: "Raised diamond texture", text: "Raised diamonds across palm and fingers.", at: [0, 0.05, 0.5] },
      { n: 2, title: "Fingertip grip", text: "Texture runs to the fingertips.", at: [0.1, 0.42, 0.5] },
      { n: 3, title: "Beaded cuff", text: "Polymer-coated inner, powder free, ambidextrous.", at: [0, -0.42, 0.5] },
    ],
    notes: [
      "5 to 9 mil across the family, from 240 mm up to 300 mm long cuff",
      "EN ISO 374-1 Type B chemical and EN ISO 374-5 virus protection; food-contact tested",
      "Sizes S to 3XL",
    ],
    colours: [{ slug: "orange", name: "Orange" }, { slug: "black", name: "Black" }, { slug: "yellow", name: "Yellow" }, { slug: "green", name: "Green" }],
    bestFor: "Construction, automotive, chemical handling (long cuff), general industry", sizes: "S–3XL",
  },
];
