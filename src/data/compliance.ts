// Per-glove "Performance Ratings" grid (product pages).
//
// Source of truth for what we may claim (confirmed by Vishesh, 2026-10-25):
//   Declared for our gloves: CE PPE Category III, EN ISO 374-1 (Type B or C, per glove test data),
//   EN ISO 374-5, food contact, ASTM D6319 (nitrile examination-glove standard, so NITRILE ONLY),
//   silicone free, REACH, SVHC, POPs/PFAS/PFOS, California Prop 65, RoHS.
//   NOT declared, never show: US FDA 510(k), BfR XXI, ISO 10993.
// Per-glove facts (EN ISO 374 type/letters, virus pass) come from chem-resistance.ts, never assumed.
import type { ChemResistance } from "./chem-resistance";

export interface Rating {
  icon: keyof typeof icons;
  label: string;
  sub?: string;
}

interface GloveLike {
  material: string;
  grade: string;
  bio: boolean;
}

export function ratingsFor(glove: GloveLike, chem: ChemResistance | undefined): Rating[] {
  const isNitrile = /nitrile/i.test(glove.material);
  const out: Rating[] = [{ icon: "ce", label: "PPE Category", sub: "CAT III" }];

  if (chem) {
    // Letters on the EN ISO 374-1 pictogram = chemicals tested at performance level 2 or higher.
    // Type C gloves carry no letters.
    const letters = chem.type === "Type C" ? "" : chem.chemicals.filter((c) => c.level >= 2).map((c) => c.code).join("");
    out.push({ icon: "flask", label: `EN ISO 374-1 (${chem.type})`, sub: letters || undefined });
    const passed = (re: RegExp) => !!chem.micro?.some((m) => re.test(m.label) && m.result === "Pass");
    if (passed(/bacteria|fungi/i)) {
      out.push({ icon: "bio", label: "EN ISO 374-5", sub: passed(/virus/i) ? "Bacteria, Fungi, Virus" : "Bacteria & Fungi" });
    }
  }

  out.push({ icon: "food", label: "Food Contact", sub: "EU 10/2011 · FDA 21 CFR 177.2600" });
  if (/examination/i.test(glove.grade)) out.push({ icon: "medical", label: "EN 455", sub: "Medical gloves" });
  if (isNitrile) out.push({ icon: "astm", label: "ASTM D6319" });
  out.push(
    { icon: "silicone", label: "Silicone Free" },
    { icon: "reach", label: "REACH", sub: "Compliant" },
    { icon: "svhc", label: "SVHC", sub: "Compliant" },
    { icon: "pfas", label: "POPs / PFAS / PFOS", sub: "Compliant" },
    { icon: "prop65", label: "Prop 65", sub: "Compliant" },
    { icon: "rohs", label: "RoHS", sub: "Compliant" },
    { icon: "iso", label: "Quality Systems", sub: "ISO 9001 · EN ISO 13485" },
  );
  if (glove.bio) out.push({ icon: "leaf", label: "Biodegradability", sub: "ASTM D5511 · ISO 15985" });
  return out;
}

// Monochrome line icons, drawn for the site (24×24, stroke = currentColor).
const ring = (txt: string, size = 6.2) =>
  `<circle cx="12" cy="12" r="10.2"/><text x="12" y="${12 + size * 0.36}" text-anchor="middle" font-size="${size}" font-weight="700" fill="currentColor" stroke="none" font-family="Inter, system-ui, sans-serif">${txt}</text>`;
export const icons = {
  ce: `<path d="M10.6 6.2a5.8 5.8 0 1 0 0 11.6"/><path d="M19.2 6.2a5.8 5.8 0 1 0 0 11.6M13.4 12h4.6"/>`,
  flask: `<path d="M12 2.5 4 5.5v6.2c0 4.6 3.4 8.3 8 9.8 4.6-1.5 8-5.2 8-9.8V5.5l-8-3Z"/><path d="M10.4 7.5h3.2M11 7.5v3l-2.6 4.6c-.4.8.1 1.6 1 1.6h5.2c.9 0 1.4-.8 1-1.6L13 10.5v-3"/>`,
  bio: `<path d="M12 2.5 4 5.5v6.2c0 4.6 3.4 8.3 8 9.8 4.6-1.5 8-5.2 8-9.8V5.5l-8-3Z"/><circle cx="12" cy="12.2" r="1.6"/><circle cx="12" cy="8.6" r="2"/><circle cx="8.9" cy="14" r="2"/><circle cx="15.1" cy="14" r="2"/>`,
  food: `<path d="M6 3h7l-.6 5.2A2.9 2.9 0 0 1 9.5 11 2.9 2.9 0 0 1 6.6 8.2L6 3Z"/><path d="M9.5 11v7.5M7 21h5"/><path d="M17 3v18M15.2 3v4.5c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V3"/>`,
  medical: `<rect x="3.5" y="3.5" width="17" height="17" rx="3"/><path d="M12 7.5v9M7.5 12h9"/>`,
  astm: `<rect x="2.5" y="4" width="19" height="16" rx="1.5"/><path d="M2.5 9.5h19"/><text x="12" y="8.1" text-anchor="middle" font-size="3.8" font-weight="700" fill="currentColor" stroke="none" font-family="Inter, system-ui, sans-serif">ASTM</text><text x="12" y="16.9" text-anchor="middle" font-size="4.9" font-weight="700" fill="currentColor" stroke="none" font-family="Inter, system-ui, sans-serif" textLength="15" lengthAdjust="spacingAndGlyphs">D6319</text>`,
  silicone: `<circle cx="12" cy="10" r="7.5"/><path d="M8.5 21 12 17.5 15.5 21"/><path d="M9 10.5c0-2.3 1.7-3.8 4.6-3.8-.2 2.6-1.6 4.4-4 4.4M9 13l2.8-2.6"/>`,
  reach: ring("REACH", 5.2),
  svhc: ring("SVHC", 5.8),
  pfas: ring("PFAS", 6),
  prop65: ring("P65", 6.6),
  rohs: ring("RoHS", 6),
  iso: ring("ISO", 7),
  leaf: `<path d="M5 19c0-9 5.5-13 14-14 .2 8.8-4.5 14-12.5 14"/><path d="M5 19c2.6-3.6 5.4-6.3 8.6-8.4"/>`,
} as const;
