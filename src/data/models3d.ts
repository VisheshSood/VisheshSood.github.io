// Products shown on /3d, in tab order. Each looks for src/models3d/<slug>.glb and <slug>--<colour>.glb.
// Copy mirrors the 2026 print catalogue. Grip figures are nitrile-only and never shown on latex.
export type Hotspot = { n: number; title: string; text: string; at: [number, number, number]; view?: { orbit: string; target?: [number, number, number] }; photo?: string }; // photo may contain {colour}, replaced by the selected colour slug // at/target = fraction of bounding box, -0.5..0.5, front = +z
export type Stat = { value: string; label: string; icon: "layers" | "ruler" | "shield" | "refresh" | "leaf" | "grip" | "drop" };
// look: per-colour lighting. Dark gloves hide their texture under even light; a studio environment and a slightly
// glossier surface make the relief readable.
export type Look = { exposure?: number; environment?: string; toneMapping?: string; roughness?: number };
export const studioLook: Look = { exposure: 1.4, environment: "legacy", toneMapping: "aces", roughness: 0.4 };
export type Colour = { slug: string; name: string; look?: Look; note?: string; codes?: string };
export type Product3D = {
  slug: string; eyebrow: string; family: string; name: string; intro: string;
  stats: Stat[]; hotspots: Hotspot[]; notes: string[]; colours: Colour[]; bestFor: string; sizes: string;
};

// Chemical levels are EN ISO 374-1 permeation levels from the catalogue's chemical-resistance table (page 26).
const latexNotes = [
  "Natural rubber latex: soft, stretchy and close-fitting, with a natural feel for fine work",
  "Stays flexible and comfortable through long shifts",
  "Ambidextrous: replace only the torn glove, not the pair",
  "Chlorinated finish: less tacky, easy to put on and take off",
  "Roomy fit goes over a cotton liner in cold rooms",
  "EN ISO 374-1 Type B: level 6 against 37% formaldehyde, level 5 against 30% hydrogen peroxide",
  "EN ISO 374-5 protection against bacteria, fungi and viruses",
  "Contains natural rubber latex",
];
const diamondNitrileNotes = [
  "Latex-free nitrile: no natural rubber proteins, safe for latex-sensitive users",
  "Holds up to oils, greases and fuels, with strong puncture resistance",
  "8 mil heavy duty: twice the thickness of a standard 4 mil glove",
  "Ambidextrous: replace only the torn glove, not the pair",
  "Powder-free, polymer-coated inner slides on easily and leaves no residue",
  "EN ISO 374-1 Type B: level 6 against 40% sodium hydroxide, level 5 against 37% formaldehyde",
  "EN ISO 374-5 protection against bacteria, fungi and viruses; food-contact tested",
];
// Colour notes: why the colour matters on the job.
const hiVis = "High visibility: easy to see on the hand and easy to spot if a torn piece lands in product";
const blackNote = "Hides grease and grime, so gloves look clean for longer";
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
      { n: 3, title: "300 mm long cuff", text: "Covers the forearm; the beaded rim stops liquid running down the arm.", at: [0, -0.42, 0.5], view: { orbit: "20deg 85deg 70%", target: [0, -0.3, 0] } },
    ],
    notes: latexNotes,
    colours: [
      { slug: "blue-silverlined", name: "Blue Silverlined", codes: "14514SL290", note: "Blue is the food-industry colour: it stands out against meat, poultry and produce" },
      { slug: "orange-silverlined", name: "Orange Silverlined", codes: "14514SO290", note: hiVis },
      { slug: "green-silverlined", name: "Green Silverlined", codes: "14514SG290", note: "Bright green is easy to spot; use it to colour-code tasks or areas" },
    ],
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
      { n: 1, title: "Zig dry grip", text: "Raised zig ridges across palm and fingers. Our best dry grip, and it holds in wet and oily conditions.", at: [0, 0.08, 0.5], photo: "/3d/features/zig-silverlined-latex--1.webp" },
      { n: 2, title: "Thumb grip", text: "Extra zig grip on the index-facing side of the thumb, for tools and pinch grip.", at: [-0.36, 0.06, 0.4], view: { orbit: "-60deg 80deg 45%", target: [-0.3, 0.05, 0] }, photo: "/3d/features/zig-silverlined-latex--2.webp" },
      { n: 3, title: "Silverlined tear indicator", text: "Blue outer over a white inner, so a crack shows white straight away.", at: [0.18, -0.26, 0.5], view: { orbit: "0deg 150deg 65%", target: [0, -0.5, 0] }, photo: "/3d/features/zig-silverlined-latex--3.webp" },
      { n: 4, title: "300 mm long cuff", text: "Beaded cuff stops liquid running down the arm and covers the forearm.", at: [0, -0.44, 0.5], view: { orbit: "20deg 85deg 70%", target: [0, -0.3, 0] }, photo: "/3d/features/zig-silverlined-latex--4.webp" },
    ],
    notes: [...latexNotes, "100% natural latex, powder-free"],
    colours: [{ slug: "blue-silverlined", name: "Blue Silverlined", codes: "14714SL290", note: "Blue is the food-industry colour: it stands out against meat, poultry and produce" }],
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
    colours: [{ slug: "dual-tone", name: "Dual Tone (Black and Green)", look: studioLook, codes: "32707TT240", note: "Black outside, green inside: when the black wears through, it is time to change" }],
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
      { n: 1, title: "Micro diamond texture", text: "Small raised diamonds across palm and fingers.", at: [0, 0.05, 0.5], photo: "/3d/features/micro-diamond-8-mil--{colour}--1.webp" },
      { n: 2, title: "Fingertip grip", text: "Texture runs to the fingertips.", at: [0.1, 0.42, 0.5] },
      { n: 3, title: "Polymer-coated inner", text: "Powder-free and ambidextrous; slides on easily with no residue.", at: [0, -0.42, 0.5], photo: "/3d/features/micro-diamond-8-mil--{colour}--3.webp" },
    ],
    notes: [
      ...diamondNitrileNotes,
      "Sizes S to 3XL; 240, 280 and 290 mm lengths across the family",
    ],
    colours: [
      { slug: "black", name: "Black", look: studioLook, codes: "32807BK240 · 32808BK240", note: blackNote },
      { slug: "orange", name: "Orange", codes: "32807OR240", note: hiVis },
    ],
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
    colours: [{ slug: "black", name: "Black", look: studioLook, codes: "32607BK240", note: blackNote }, { slug: "orange", name: "Orange", codes: "32607OR240", note: hiVis }],
    bestFor: "Oil and gas, automotive and mechanics, heavy industry", sizes: "S–XXL",
  },
  {
    slug: "diamond-8-mil", eyebrow: "Invented 2011", family: "Diamond", name: "Diamond",
    intro: "The raised diamond texture we invented in 2011, on 8 mil nitrile.",
    stats: [
      { value: "+75.0%", label: "Dry grip vs bare hand", icon: "grip" },
      { value: "+181.9%", label: "Wet grip vs bare hand", icon: "drop" },
      { value: "8 mil", label: "Nitrile", icon: "layers" },
      { value: "240 mm", label: "Beaded cuff", icon: "ruler" },
      { value: "Type B", label: "EN ISO 374-1 · 374-5 virus · food contact", icon: "shield" },
    ],
    hotspots: [
      { n: 1, title: "Raised diamond texture", text: "Raised diamonds across palm and fingers; oil and water run off between them.", at: [0, 0.05, 0.5] },
      { n: 2, title: "Fingertip grip", text: "Texture runs to the fingertips.", at: [0.1, 0.42, 0.5] },
      { n: 3, title: "Beaded cuff", text: "Polymer-coated inner, powder free, ambidextrous.", at: [0, -0.42, 0.5] },
    ],
    notes: [
      ...diamondNitrileNotes,
      "5 to 9 mil across the family, from 240 mm up to 300 mm long cuff; sizes S to 3XL",
    ],
    colours: [
      { slug: "orange", name: "Orange", codes: "32407OR240 · 32408OR240", note: hiVis },
      { slug: "black", name: "Black", look: studioLook, codes: "32408BK240 · 36408BK240 · 32408BK290 (290 mm long cuff)", note: blackNote },
      { slug: "yellow", name: "Yellow", codes: "32407YL240", note: hiVis },
      { slug: "green", name: "Green", codes: "32407GR240", note: "Bright green is easy to spot; use it to colour-code tasks or areas" },
    ],
    bestFor: "Construction, automotive, chemical handling (long cuff), general industry", sizes: "S–3XL",
  },
];
