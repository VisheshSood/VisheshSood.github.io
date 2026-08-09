// Central site data, nav (with dropdowns), technologies, industries, products.
// Header, Footer and dynamic pages all read from here so links stay consistent.

export interface NavChild { label: string; href: string; }
export interface NavGroup { label: string; href: string; children?: NavChild[]; }

export const mainNav: NavGroup[] = [
  {
    label: "Gloves", href: "/gloves",
    children: [
      { label: "All Gloves", href: "/gloves" },
      { label: "Find Your Gloves", href: "/glove-finder" },
      { label: "Grip Technologies", href: "/technologies" },
      { label: "Heavy Duty", href: "/gloves/heavy-duty" },
      { label: "Biodegradable", href: "/technologies/biodegradable" },
      { label: "Nitrile", href: "/gloves/nitrile" },
      { label: "Latex", href: "/gloves/latex" },
    ],
  },
  {
    label: "Industries", href: "/industries",
    children: [
      { label: "Automotive & Mechanical", href: "/industries/automotive" },
      { label: "Manufacturing & Engineering", href: "/industries/manufacturing" },
      { label: "Oil & Gas", href: "/industries/oil-gas" },
      { label: "Chemical", href: "/industries/chemical" },
      { label: "Food Processing", href: "/industries/food-processing" },
      { label: "Construction", href: "/industries/construction" },
      { label: "Medical", href: "/industries/medical" },
      { label: "Laboratory", href: "/industries/laboratory" },
      { label: "Cleaning & Janitorial", href: "/industries/cleaning" },
      { label: "Agriculture", href: "/industries/agriculture" },
      { label: "Painting", href: "/industries/painting" },
      { label: "General Purpose", href: "/industries/general-purpose" },
    ],
  },
  {
    label: "Manufacturing", href: "/manufacturing",
    children: [
      { label: "Manufacturing Overview", href: "/manufacturing" },
      { label: "Quality & Testing", href: "/manufacturing/quality" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Certifications", href: "/certifications" },
    ],
  },
  {
    label: "About", href: "/about",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Why Innovative Gloves", href: "/why-innovative" },
      { label: "25 Years", href: "/about/history" },
      { label: "Reviews", href: "/reviews" },
      { label: "OEM / Private Label", href: "/private-label" },
      { label: "Recognition", href: "/recognition" },
    ],
  },
  {
    label: "Resources", href: "/resources",
    children: [
      { label: "Catalog", href: "/catalog.pdf" },
      { label: "Certificates", href: "/certifications" },
      { label: "Glove Guides", href: "/resources/guides" },
    ],
  },
];

export const footerCols: { title: string; links: NavChild[] }[] = [
  {
    title: "Technologies",
    links: [
      { label: "Micro Diamond", href: "/technologies/micro-diamond" },
      { label: "Zig Grip", href: "/technologies/zig-grip" },
      { label: "Tyre Tread / Gripper", href: "/technologies/tyre-tread" },
      { label: "Biodegradable", href: "/technologies/biodegradable" },
      { label: "Innovation & R&D", href: "/innovation" },
    ],
  },
  {
    title: "Gloves",
    links: [
      { label: "All Gloves", href: "/gloves" },
      { label: "Find Your Glove", href: "/glove-finder" },
      { label: "Industries", href: "/industries" },
      { label: "OEM / Private Label", href: "/private-label" },
      { label: "Request Samples", href: "/request-samples" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "25 Years", href: "/about/history" },
      { label: "Why Innovative", href: "/why-innovative" },
      { label: "Manufacturing", href: "/manufacturing" },
      { label: "Sustainability", href: "/sustainability" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Catalog", href: "/catalog.pdf" },
      { label: "Certifications", href: "/certifications" },
      { label: "Glove Guides", href: "/resources/guides" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export interface Technology {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  icon: "diamond" | "zig" | "tread" | "raised" | "leaf";
  intro: string;
  difference: string;
  benefits: { title: string; desc: string }[];
  bestFor: string[];
  patentStatus: string;
  story?: string; // origin / narrative
  img: string; // hero image (macro texture or product render)
  imgFit?: "cover" | "contain"; // 'cover' for dark texture macros, 'contain' for product shots
  note?: string; // optional honest clarification (e.g. biodegradable)
}

export const technologies: Technology[] = [
  {
    slug: "micro-diamond",
    name: "Micro Diamond",
    shortName: "Micro Diamond",
    tagline: "Maximum grip. Especially with oils.",
    icon: "diamond",
    intro:
      "Micro Diamond is a high-density micro-textured surface embossed across the glove's grip zones. Thousands of tiny diamond points bite into the surface and channel away oil and liquid, delivering exceptional grip without the bulk of a heavy coating.",
    difference:
      "Where a conventional raised-diamond glove relies on a handful of large ridges, Micro Diamond shrinks the diamond and packs far more grip points into the same area, increasing surface area and contact points. That is exactly what improves grip in oily conditions. We patented it as a superior successor to the raised diamond.",
    benefits: [
      { title: "Grip on oil & liquid", desc: "Micro points channel fluids away for a secure hold on slick surfaces." },
      { title: "Superior dexterity", desc: "Thin, textured surface keeps touch sensitivity and fine control." },
      { title: "Minimal bulk", desc: "Feels like a second skin, grip without the padded feel." },
      { title: "Whole-hand coverage", desc: "Consistent texture across fingers and palm, not just fingertips." },
    ],
    bestFor: ["Automotive", "Manufacturing & Engineering", "Oil, Gas & Petrochemical", "General Industrial"],
    patentStatus: "Patented worldwide for mass production and global sale.",
    story:
      "After Tyre Tread came Micro Diamond. The inspiration struck on our own engineering floor, our bench vices gripped so powerfully thanks to the micro-diamond texture machined into their jaws. We recreated that texture on a nitrile glove and patented it as a superior successor to the raised diamond: shrinking the diamonds and packing many more into the same area increases surface area and contact points, which is what delivers noticeably better grip in oily conditions.",
    img: "/images/tex-micro-diamond.jpg",
  },
  {
    slug: "zig-grip",
    name: "Zig Grip",
    shortName: "Zig Grip",
    tagline: "Our best dry grip. Scientifically proven.",
    icon: "zig",
    intro:
      "Zig Grip is the next generation of our Gripper glove, a thicker, stronger build with a refined zig-zag texture and improved thumb grip, engineered to deliver the best dry grip we've ever tested.",
    difference:
      "Five years of real-world use taught us exactly where Gripper could be better. Zig Grip sharpens the texture and adds dedicated thumb texturing, the area that does the most work, in a thicker, stronger glove. The result is our highest dry-grip performance, proven in lab tests.",
    benefits: [
      { title: "Best dry grip", desc: "Our highest-performing dry grip, verified in lab testing." },
      { title: "Improved thumb grip", desc: "Extra texturing exactly where your thumb does the work." },
      { title: "Thicker & stronger", desc: "A more robust build for tougher, longer jobs." },
      { title: "Evolved from Gripper", desc: "Five years of field learning built into every glove." },
    ],
    bestFor: ["Manufacturing & Engineering", "Automotive", "Maintenance / MRO", "Construction"],
    patentStatus: "Patented worldwide, unique Zig texture.",
    story:
      "Zig Grip is the evolution of our Gripper glove. After five years of selling Gripper, our R&D team learned exactly how to push the grip further, refining the texture and, crucially, improving the thumb texturing where control matters most. The result is a thicker, stronger glove that delivers our best dry grip yet, proven in lab tests.",
    img: "/images/tex-zig-grip.png",
  },
  {
    slug: "tyre-tread",
    name: "Tyre Tread / Gripper",
    shortName: "Tyre Tread",
    tagline: "Aggressive grip for demanding conditions.",
    icon: "tread",
    intro:
      "Inspired by the way tyres grip wet roads in the rain, this aggressive raised tread channels away oil and water and digs in under load, maximum bite for when grip absolutely cannot fail.",
    difference:
      "Deeper channels and taller ridges than any standard texture, engineered to shed fluids and dig in under load. This is grip for heavy-duty work, not light assembly.",
    benefits: [
      { title: "Aggressive bite", desc: "Maximum grip under oil, water and load." },
      { title: "Sheds fluids fast", desc: "Deep channels clear oil and water from the contact patch." },
      { title: "Heavy-duty ready", desc: "Built for high-force, high-risk handling." },
      { title: "Rugged surface", desc: "Durable texture that holds up to abrasive work." },
    ],
    bestFor: ["Oil, Gas & Petrochemical", "Construction", "Automotive", "General Industrial"],
    patentStatus: "Our first patented glove.",
    story:
      "Tyre Tread was our first patented glove, and it came from a hard lesson. We had invented raised diamond back in 2011 but never patented it, and watched the market copy it. So when the idea for tyre tread struck, inspired by watching tyres grip wet roads in the rain, we patented it from day one. Available in 6 and 7 mil, in black, orange, red, green or custom shades.",
    img: "/images/tex-tyre-tread.jpg",
  },
  {
    slug: "raised-diamond",
    name: "Raised Diamond / Specialist Textures",
    shortName: "Raised Diamond",
    tagline: "The original raised diamond.",
    icon: "raised",
    intro:
      "The raised diamond texture that started it all. We invented it in 2011, the first raised diamond glove on the market. It has been widely copied since, but as the originators we still set the benchmark for quality.",
    difference:
      "Being first means we've had over a decade to perfect it. Imitators copied the look; we own the process, compound, texture depth and finish, so our raised diamond simply holds up better. And as a manufacturer that develops its own textures, we can create bespoke specialist patterns on request.",
    benefits: [
      { title: "The original", desc: "Invented by Innovative in 2011, the first raised diamond glove." },
      { title: "Unmatched quality", desc: "Over a decade of refinement the copies can't match." },
      { title: "Heavy-duty durability", desc: "A tough, proven surface built to last." },
      { title: "Custom textures", desc: "Bespoke specialist patterns developed on request." },
    ],
    bestFor: ["General Industrial", "Construction", "Automotive", "Maintenance / MRO"],
    patentStatus: "Not patented, but invented by Innovative in 2011. We remain the pioneers.",
    story:
      "We invented the raised diamond texture in 2011, the first of its kind. It has since been copied across the industry, but we remain the pioneers, and no one matches our quality. Buy raised diamond from Innovative and you're buying it from the company that created it.",
    img: "/images/tex-raised-diamond.webp",
  },
  {
    slug: "biodegradable",
    name: "Biodegradable Technology",
    shortName: "Biodegradable",
    tagline: "Advanced grip, lower footprint.",
    icon: "leaf",
    intro:
      "Our biodegradable nitrile uses an additive technology that helps the glove break down significantly faster than standard nitrile in biologically active landfill, without compromising the grip and protection you expect.",
    difference:
      "In the hand it performs like our standard nitrile. At end of life, it is engineered to biodegrade far faster. Not a gimmick and not 'compostable', a measurable change in how the material breaks down, backed by testing.",
    benefits: [
      { title: "No performance trade-off", desc: "Same grip and protection as standard nitrile." },
      { title: "Faster breakdown", desc: "Engineered to biodegrade faster in landfill conditions." },
      { title: "Across our textures", desc: "Available with our grip technologies, not just plain." },
      { title: "ASTM certified", desc: "Backed by ASTM biodegradation testing." },
    ],
    bestFor: ["Food Processing", "Cleaning & Janitorial", "Laboratory", "General Purpose"],
    patentStatus: "ASTM-certified biodegradable technology, test data available.",
    story:
      "Environmentally responsible without the premium price. Our biodegradable nitrile is ASTM certified and available across our grip technologies, so you get the same performance in a glove engineered to break down far faster at end of life.",
    img: "/images/prod-bioblue-fully-textured-4.png",
    imgFit: "contain",
    note: "What it does not mean: biodegradable nitrile still requires the right disposal conditions to break down. It is not compostable and should not be littered. We publish the testing so you can see exactly what it does, and does not, claim.",
  },
];

export interface Industry {
  slug: string;
  name: string;
  intro: string;
}

export const industries: Industry[] = [
  { slug: "automotive", name: "Automotive & Mechanical", intro: "Oils, grease, tools and sharp components demand grip, dexterity and puncture resistance." },
  { slug: "manufacturing", name: "Manufacturing & Engineering", intro: "Assembly, maintenance, machinery, fabrication, workshop use and MRO." },
  { slug: "oil-gas", name: "Oil, Gas & Petrochemical", intro: "Hydrocarbons, oils, grip and chemical protection with heavy-duty, long-cuff options." },
  { slug: "chemical", name: "Chemical Handling", intro: "Chemical resistance, EN ISO 374 selection and permeation data for safe handling." },
  { slug: "food-processing", name: "Food Processing", intro: "Food-contact suitability, wet handling, grip, dexterity and colour coding." },
  { slug: "construction", name: "Construction", intro: "Heavy-duty, high-grip gloves with puncture and tear resistance for tough sites." },
  { slug: "medical", name: "Medical & Healthcare", intro: "Examination and medical gloves with the right certifications and documentation." },
  { slug: "laboratory", name: "Laboratory", intro: "Dexterity, chemical handling and examination gloves for lab environments." },
  { slug: "cleaning", name: "Cleaning & Janitorial", intro: "Cleaning chemicals, wet work, household and janitorial applications." },
  { slug: "agriculture", name: "Agriculture", intro: "General-purpose and chemical-handling gloves with durable disposable options." },
  { slug: "painting", name: "Painting & Decorating", intro: "Solvent and paint handling with appropriate nitrile and latex products." },
  { slug: "general-purpose", name: "General Purpose", intro: "Everyday nitrile and latex for standard, cost-effective industrial use." },
];

export interface Product {
  slug: string;
  name: string;
  positioning: string;
  material: string;
  thickness: string;
  length: string;
  color: string;
  texture: string;
  img?: string; // box+glove render; omitted products fall back to a placeholder
}

// Sample flagship products, homepage cards + dynamic /gloves/[slug] pages.
// The full 60+ catalogue gets wired in later.
// The 8 flagship "Our Best" products.
export const products: Product[] = [
  { slug: "dual-tone-zig-8",           name: "Dual Tone Zig",            positioning: "Bold dual-tone finish with directional zig grip in a rugged 8-mil build.",        material: "Nitrile",     thickness: "8 mil",  length: "240 mm", color: "Dual Tone",  texture: "Zig",            img: "/images/prod-dual-tone-zig-8.jpg" },
  { slug: "black-micro-diamond-6",     name: "Black Micro Diamond",      positioning: "Micro-diamond grip for oily work in a sleek black 6-mil nitrile.",                material: "Nitrile",     thickness: "6 mil",  length: "240 mm", color: "Black",      texture: "Micro Diamond",  img: "/images/prod-black-micro-diamond-6.png" },
  { slug: "silverlined-diamond-14",    name: "Silverlined Diamond",      positioning: "Ultra heavy-duty 14-mil latex, silverlined, with diamond grip and a 300mm cuff.", material: "Latex",       thickness: "14 mil", length: "300 mm", color: "Silverlined", texture: "Diamond",       img: "/images/prod-silverlined-diamond-14.jpg" },
  { slug: "green-zig-bio-6",           name: "Green Zig Bio",            positioning: "Directional zig grip meets our biodegradable nitrile technology.",               material: "Bio Nitrile", thickness: "6 mil",  length: "240 mm", color: "Green",      texture: "Zig", img: "/images/prod-green-zig-bio-6.jpg" },
  { slug: "bioblue-fully-textured-4",  name: "BioBlue Fully Textured",   positioning: "Lightweight, fully-textured and biodegradable, everyday protection, lower footprint.", material: "Bio Nitrile", thickness: "4 mil",  length: "240 mm", color: "Blue",   texture: "Fully Textured", img: "/images/prod-bioblue-fully-textured-4.png" },
  { slug: "royal-blue-micro-diamond-6",name: "Royal Blue Micro Diamond", positioning: "Micro-diamond grip with an extended 290mm cuff in vivid royal blue.",             material: "Nitrile",     thickness: "6 mil",  length: "290 mm", color: "Royal Blue", texture: "Micro Diamond", img: "/images/prod-royal-blue-micro-diamond-6.png" },
  { slug: "orange-diamond-8",          name: "Orange Diamond",           positioning: "High-visibility orange with aggressive diamond grip for demanding jobs.",         material: "Nitrile",     thickness: "8 mil",  length: "240 mm", color: "Orange",     texture: "Diamond",        img: "/images/prod-orange-diamond-8.jpg" },
  { slug: "black-fully-textured-6",    name: "Black Fully Textured",     positioning: "All-over texture and dependable grip in a classic black 6-mil nitrile.",          material: "Nitrile",     thickness: "6 mil",  length: "240 mm", color: "Black",      texture: "Fully Textured", img: "/images/prod-black-fully-textured-6.png" },
];
