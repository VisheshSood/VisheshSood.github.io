// Per-glove EN ISO 374 chemical & microbial protection data.
// Keyed by catalogue slug, only gloves we have test data for appear.
export interface ChemResult {
  name: string;
  code: string;                 // EN ISO 374 chemical letter code
  level: number;                // permeation performance level (0–6)
  degradation: number | string; // EN ISO 374-4 degradation % (can be negative), or a note e.g. "Fully Disintegrated"
}
export interface ChemResistance {
  type: string;            // e.g. "Type C"
  permStandard: string;    // EN ISO 374-1 revision
  degStandard: string;     // EN ISO 374-4 revision
  chemicals: ChemResult[];
  microStandard?: string;  // EN ISO 374-5 revision
  micro?: { label: string; result: string }[];
}

// Shared profile, every latex glove meets these standards.
const LATEX: ChemResistance = {
  type: "Type B",
  permStandard: "EN ISO 374-1:2016+A1:2018",
  degStandard: "EN ISO 374-4:2019",
  chemicals: [
    { name: "40% Sodium Hydroxide", code: "K", level: 4, degradation: -45.8 },
    { name: "96% Sulphuric Acid", code: "L", level: 1, degradation: 94.5 },
    { name: "30% Hydrogen Peroxide", code: "P", level: 5, degradation: -1.1 },
    { name: "37% Formaldehyde", code: "T", level: 6, degradation: -61.5 },
  ],
  microStandard: "EN ISO 374-5:2016",
  micro: [
    { label: "Bacteria & Fungi", result: "Pass" },
    { label: "Viruses", result: "Pass" },
  ],
};

// Shared profile, fully-textured & finger-textured nitrile gloves, 5 mil and thicker.
const TEXTURED_5PLUS: ChemResistance = {
  type: "Type B",
  permStandard: "EN ISO 374-1:2016+A1:2018",
  degStandard: "EN ISO 374-4:2019",
  chemicals: [
    { name: "40% Sodium Hydroxide", code: "K", level: 6, degradation: 1.3 },
    { name: "25% Ammonium Hydroxide", code: "O", level: 1, degradation: 7.8 },
    { name: "96% Sulphuric Acid", code: "L", level: 1, degradation: "Fully Disintegrated" },
    { name: "30% Hydrogen Peroxide", code: "P", level: 2, degradation: 17.3 },
    { name: "37% Formaldehyde", code: "T", level: 5, degradation: 16.0 },
  ],
  microStandard: "EN ISO 374-5:2016",
  micro: [
    { label: "Bacteria & Fungi", result: "Pass" },
    { label: "Viruses", result: "Pass" },
  ],
};

// Shared profile, all nitrile gloves thinner than 5 mil.
const NITRILE_THIN: ChemResistance = {
  type: "Type C",
  permStandard: "EN ISO 374-1:2016+A1:2018",
  degStandard: "EN ISO 374-4:2019",
  chemicals: [
    { name: "n-Heptane", code: "J", level: 1, degradation: 47.1 },
    { name: "40% Sodium Hydroxide", code: "K", level: 6, degradation: -20.8 },
    { name: "37% Formaldehyde", code: "T", level: 5, degradation: -6.0 },
    { name: "30% Hydrogen Peroxide", code: "P", level: 1, degradation: 14.4 },
  ],
  microStandard: "EN ISO 374-5:2016",
  micro: [
    { label: "Bacteria & Fungi", result: "Pass" },
    { label: "Viruses", result: "Pass" },
  ],
};

// Shared profile, all Diamond & Micro Diamond nitrile gloves (bio or not).
const DIAMOND: ChemResistance = {
  type: "Type B",
  permStandard: "EN ISO 374-1:2016+A1:2018",
  degStandard: "EN ISO 374-4:2019",
  chemicals: [
    { name: "40% Sodium Hydroxide", code: "K", level: 6, degradation: 7.3 },
    { name: "25% Ammonium Hydroxide", code: "O", level: 2, degradation: 6.1 },
    { name: "96% Sulphuric Acid", code: "L", level: 1, degradation: 100.0 },
    { name: "37% Formaldehyde", code: "T", level: 5, degradation: 0.9 },
    { name: "30% Hydrogen Peroxide", code: "P", level: 2, degradation: 10.5 },
  ],
  microStandard: "EN ISO 374-5:2016",
  micro: [
    { label: "Bacteria & Fungi", result: "Pass" },
    { label: "Viruses", result: "Pass" },
  ],
};

// Shared profile, all Zig & Tyre Tread (Gripper) nitrile gloves (bio or not).
const ZIG_GRIPPER: ChemResistance = {
  type: "Type B",
  permStandard: "EN ISO 374-1:2016+A1:2018",
  degStandard: "EN ISO 374-4:2019",
  chemicals: [
    { name: "n-Heptane", code: "J", level: 2, degradation: 51.1 },
    { name: "40% Sodium Hydroxide", code: "K", level: 6, degradation: -17.4 },
    { name: "25% Ammonium Hydroxide", code: "O", level: 1, degradation: 88.6 },
    { name: "37% Formaldehyde", code: "T", level: 6, degradation: 21.4 },
    { name: "30% Hydrogen Peroxide", code: "P", level: 2, degradation: 20.0 },
  ],
  microStandard: "EN ISO 374-5:2016",
  micro: [
    { label: "Bacteria & Fungi", result: "Pass" },
    { label: "Viruses", result: "Pass" },
  ],
};

// Slug-specific test data (takes priority over any material default).
export const chemResistance: Record<string, ChemResistance> = {
  "fully-textured-4-bio-nitrile": {
    type: "Type C",
    permStandard: "EN ISO 374-1:2016+A1:2018",
    degStandard: "EN ISO 374-4:2019",
    chemicals: [
      { name: "n-Heptane", code: "J", level: 1, degradation: 13.3 },
      { name: "40% Sodium Hydroxide", code: "K", level: 6, degradation: -36.3 },
      { name: "30% Hydrogen Peroxide", code: "P", level: 1, degradation: 23.7 },
      { name: "37% Formaldehyde", code: "T", level: 3, degradation: 7.1 },
    ],
    microStandard: "EN ISO 374-5:2016",
    micro: [
      { label: "Bacteria & Fungi", result: "Pass" },
      { label: "Viruses", result: "Pass" },
    ],
  },
};

// Resolve the applicable protection data for a glove: slug-specific first,
// then the latex material default.
export function chemFor(glove: { slug: string; material: string; texture: string; thickness: number | null }): ChemResistance | undefined {
  if (chemResistance[glove.slug]) return chemResistance[glove.slug];
  if (glove.material === "Latex") return LATEX;
  // nitrile (incl. bio nitrile) from here
  if (glove.texture === "Diamond" || glove.texture === "Micro Diamond") return DIAMOND;
  if (glove.texture === "Zig" || glove.texture === "Tyre Tread") return ZIG_GRIPPER;
  if (glove.thickness != null && glove.thickness < 5) return NITRILE_THIN;
  const textured = glove.texture === "Fully Textured" || glove.texture === "Finger Textured";
  if (textured && glove.thickness != null && glove.thickness >= 5) return TEXTURED_5PLUS;
  return undefined;
}
