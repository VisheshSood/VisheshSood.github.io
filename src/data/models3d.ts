// Products shown on /3d. Each looks for /3d/<slug>.glb (and /3d/<slug>--<colour>.glb per colour, when present).
export type Hotspot = { n: number; title: string; text: string; at: [number, number, number] }; // at = fraction of bounding box, -0.5..0.5
export type Stat = { value: string; label: string; icon: "layers" | "ruler" | "shield" | "refresh" | "leaf" | "grip" | "drop" };
export type Colour = { slug: string; name: string };
export type Product3D = {
  slug: string; eyebrow: string; family: string; name: string; intro: string;
  stats: Stat[]; hotspots: Hotspot[]; notes: string[]; colours: Colour[]; bestFor: string; sizes: string;
};

export const products: Product3D[] = [
  {
    slug: "silverlined-17-mil", eyebrow: "Flagship", family: "Diamond Latex", name: "17 mil Silverlined Latex",
    intro: "17 mil Silverlined natural latex with a long cuff, on the raised diamond texture we invented in 2011.",
    stats: [
      { value: "17 mil", label: "20 mil at palm", icon: "layers" },
      { value: "300 mm", label: "Long cuff", icon: "ruler" },
      { value: "2-layer", label: "Tear indicator", icon: "shield" },
      { value: "Reusable", label: "Lasts beyond a disposable", icon: "refresh" },
      { value: "100%", label: "Natural latex, powder-free", icon: "leaf" },
    ],
    hotspots: [
      { n: 1, title: "Raised diamond texture", text: "The diamond texture we invented in 2011, on 17 mil natural latex, 20 mil at the palm.", at: [0, 0.05, 0.5] },
      { n: 2, title: "Two-layer tear indicator", text: "Coloured outer over a white inner, so a crack shows white straight away.", at: [-0.2, 0.3, 0.5] },
      { n: 3, title: "300 mm long cuff", text: "Beaded cuff stops liquid running down the arm.", at: [0, -0.42, 0.5] },
    ],
    notes: [
      "Ambidextrous: replace only the torn glove, not the pair",
      "Roomy fit goes over a cotton liner in cold rooms",
      "100% natural latex, powder-free",
      "EN ISO 374-1 Type B chemical and EN ISO 374-5 virus protection",
      "Contains natural rubber latex",
    ],
    colours: [
      { slug: "orange-silverlined", name: "Orange Silverlined" }, { slug: "blue-silverlined", name: "Blue Silverlined" },
      { slug: "green-silverlined", name: "Green Silverlined" }, { slug: "blue", name: "Blue" },
    ],
    bestFor: "Meat and poultry processing, dishwashing, cleaning and janitorial, gardening, painting, automotive", sizes: "S–XXL (7–11)",
  },
  {
    slug: "dual-tone-zig-8-mil", eyebrow: "Flagship", family: "Patented Zig", name: "8 mil Dual Tone Zig",
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
      { n: 3, title: "Beaded cuff", text: "Latex-free, powder-free, ambidextrous. EN ISO 374-1 Type B and EN ISO 374-5 virus protection; food-contact tested.", at: [0, -0.42, 0.5] },
    ],
    notes: [
      "Heavy-duty 8 mil nitrile, widely used in automotive workshops",
      "Latex-free, powder-free, ambidextrous, beaded cuff",
      "EN ISO 374-1 Type B chemical and EN ISO 374-5 virus protection; food-contact tested",
    ],
    colours: [{ slug: "dual-tone", name: "Dual Tone (Black and Green)" }],
    bestFor: "Automotive and mechanics, maintenance, oil and gas, construction", sizes: "S–XXL",
  },
  {
    slug: "gripper-7-mil", eyebrow: "Patented", family: "Tyre Tread", name: "7 mil Gripper",
    intro: "Tyre-tread texture across palm and fingers, engineered to shed oil and water.",
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
    notes: [
      "Ambidextrous, powder free, polymer coated",
      "EN ISO 374-1 Type B chemical and EN ISO 374-5 virus protection",
    ],
    colours: [{ slug: "black", name: "Black" }, { slug: "orange", name: "Orange" }, { slug: "red", name: "Red" }],
    bestFor: "Oil and gas, automotive and mechanics, heavy industry", sizes: "S–XXL",
  },
  {
    slug: "micro-diamond-8-mil", eyebrow: "Patented", family: "Micro Diamond", name: "8 mil Micro Diamond",
    intro: "A dense grid of small raised diamonds. The highest wet grip of all our textures.",
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
      { n: 3, title: "Polymer-coated inner", text: "Powder free, ambidextrous. Sizes S to 3XL.", at: [0, -0.42, 0.5] },
    ],
    notes: [
      "Small raised diamonds across palm and fingers",
      "Sizes S to 3XL; 240, 280 and 290 mm lengths across the family",
      "EN ISO 374-1 Type B chemical and EN ISO 374-5 virus protection; food-contact tested",
    ],
    colours: [{ slug: "black", name: "Black" }, { slug: "parrot-green", name: "Parrot Green" }, { slug: "orange", name: "Orange" }],
    bestFor: "Mechanics and automotive, food processing, general industry", sizes: "S–3XL",
  },
  {
    slug: "diamond-8-mil", eyebrow: "Invented 2011", family: "Diamond", name: "8 mil Diamond",
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
    colours: [{ slug: "orange", name: "Orange" }, { slug: "black", name: "Black" }, { slug: "green", name: "Green" }, { slug: "yellow", name: "Yellow" }],
    bestFor: "Construction, automotive, chemical handling (long cuff), general industry", sizes: "S–3XL",
  },
];
