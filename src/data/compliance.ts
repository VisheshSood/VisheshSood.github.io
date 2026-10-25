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
  /** compact label for the chips under the product photo */
  short: string;
}

interface GloveLike {
  material: string;
  grade: string;
  bio: boolean;
}

export function ratingsFor(glove: GloveLike, chem: ChemResistance | undefined): Rating[] {
  const isNitrile = /nitrile/i.test(glove.material);
  const out: Rating[] = [{ icon: "ce", label: "PPE Category", sub: "CAT III", short: "CE · CAT III" }];

  if (chem) {
    // Letters on the EN ISO 374-1 pictogram = chemicals tested at performance level 2 or higher.
    // Type C gloves carry no letters.
    const letters = chem.type === "Type C" ? "" : chem.chemicals.filter((c) => c.level >= 2).map((c) => c.code).join("");
    out.push({ icon: "flask", label: `EN ISO 374-1 (${chem.type})`, sub: letters || undefined, short: `EN ISO 374-1 · ${chem.type}${letters ? " · " + letters : ""}` });
    const passed = (re: RegExp) => !!chem.micro?.some((m) => re.test(m.label) && m.result === "Pass");
    if (passed(/bacteria|fungi/i)) {
      out.push({ icon: "bio", label: "EN ISO 374-5", sub: passed(/virus/i) ? "Bacteria, Fungi, Virus" : "Bacteria & Fungi", short: passed(/virus/i) ? "EN ISO 374-5 · Virus" : "EN ISO 374-5" });
    }
  }

  out.push({ icon: "food", label: "Food Contact", sub: "EU 10/2011 · FDA 21 CFR 177.2600", short: "Food contact" });
  if (/examination/i.test(glove.grade)) out.push({ icon: "check", label: "EN 455", sub: "Medical gloves", short: "EN 455" });
  if (isNitrile) out.push({ icon: "check", label: "ASTM D6319", short: "ASTM D6319" });
  out.push(
    { icon: "check", label: "Silicone Free", short: "Silicone free" },
    { icon: "check", label: "REACH", sub: "Compliant", short: "REACH" },
    { icon: "check", label: "SVHC", sub: "Compliant", short: "SVHC" },
    { icon: "check", label: "POPs / PFAS / PFOS", sub: "Compliant", short: "PFAS / PFOS / POPs" },
    { icon: "check", label: "Prop 65", sub: "Compliant", short: "Prop 65" },
    { icon: "check", label: "RoHS", sub: "Compliant", short: "RoHS" },
    { icon: "check", label: "Quality Systems", sub: "ISO 9001 · EN ISO 13485", short: "ISO 9001 · ISO 13485" },
  );
  if (glove.bio) out.push({ icon: "check", label: "Biodegradability", sub: "ASTM D5511 · ISO 15985", short: "ASTM D5511 · ISO 15985" });
  return out;
}

// Icons. Official symbols only where one exists: the CE mark (artwork file, rendered as an <img>),
// the EN ISO 374-1 / 374-5 pictograms (ISO 7000 flask / biohazard in a shield; redrawn until the
// official files from our box/IFU artwork are supplied) and the EU food-contact glass-and-fork.
// Everything without an official symbol (REACH, RoHS, SVHC, PFAS, Prop 65, ASTM, ISO, EN 455…)
// gets a neutral check: no invented "logos".
export const CE_MARK_SRC = "/images/certs/cert-ce.png";
const SHIELD = "M12 1.8 3.6 4.9v6.6c0 5 3.6 9 8.4 10.7 4.8-1.7 8.4-5.7 8.4-10.7V4.9L12 1.8Z";
const at = (d: number, a: number) => { const r = (a * Math.PI) / 180; return [(d * Math.sin(r)).toFixed(2), (-d * Math.cos(r)).toFixed(2)]; };
// Biohazard trefoil (standard proportions); __ID__ must be replaced with a unique id per use (SVG mask).
const BIOHAZARD = `<g transform="translate(12 12.3) scale(0.215)"><defs><mask id="__ID__" maskUnits="userSpaceOnUse" x="-30" y="-30" width="60" height="60" stroke="none"><rect x="-30" y="-30" width="60" height="60" fill="#fff"/>${[0, 120, 240].map((a) => { const [x, y] = at(18, a); return `<circle cx="${x}" cy="${y}" r="10.5" fill="#000"/>`; }).join("")}<circle r="3" fill="#000"/></mask></defs><g mask="url(#__ID__)" fill="currentColor" stroke="none">${[0, 120, 240].map((a) => { const [x, y] = at(11, a); return `<circle cx="${x}" cy="${y}" r="15"/>`; }).join("")}<circle r="12.4" fill="none" stroke="currentColor" stroke-width="2.6"/></g></g>`;
export const icons = {
  ce: "", // rendered from CE_MARK_SRC
  flask: `<path d="${SHIELD}" stroke-width="1.4"/><path d="M10.2 6.9h3.6M10.9 6.9v3.6l-3.3 5.8c-.5.9.1 1.9 1.1 1.9h6.6c1 0 1.6-1 1.1-1.9l-3.3-5.8V6.9" stroke-width="1.4"/><path d="M8.7 15h6.6" stroke-width="1.1"/>`,
  bio: `<path d="${SHIELD}" stroke-width="1.4"/>${BIOHAZARD}`,
  food: `<path d="M5.6 3.2h7l-.5 4.9a3 3 0 0 1-6 0l-.5-4.9Z" stroke-width="1.5"/><path d="M9.1 11v7.6M6.4 20.8h5.4" stroke-width="1.5"/><path d="M17.4 3.2v17.6M15.4 3.2v4.7c0 1.1.9 2 2 2s2-.9 2-2V3.2" stroke-width="1.5"/>`,
  check: `<circle cx="12" cy="12" r="9.5" stroke-width="1.5"/><path d="M7.8 12.3l2.8 2.8 5.6-5.8" stroke-width="1.8"/>`,
} as const;

/** SVG inner markup for an icon, with a unique id for any mask it uses. */
export const iconSvg = (icon: keyof typeof icons, uid: string) => icons[icon].replaceAll("__ID__", `bh-${uid}`);
