// Per-industry editorial content for /industries/[slug].
// `recommended` holds catalogue slugs, left empty for now; fill 4 per industry later.
export interface IndustryContent {
  overview: string;
  needs: string[];
  solutions: string[];
  recommended: string[];
}

export const industryContent: Record<string, IndustryContent> = {
  automotive: {
    overview:
      "Mechanics and technicians spend the day in a mix of engine oil, grease, brake fluid, fuel and solvents, handling sharp tools, fasteners and hot components. A glove that slips or tears mid-job costs time and makes a mess.",
    needs: [
      "A confident grip on oily tools, bolts and parts",
      "Resistance to oils, fuels, grease and solvents",
      "Puncture and tear resistance around sharp edges",
      "Enough dexterity for small fasteners and clips",
    ],
    solutions: [
      "Our Diamond and Micro Diamond textures bite through oil for a sure grip, wet or dry",
      "High-grade nitrile shrugs off automotive fluids where thin gloves break down",
      "Thicker 6–8 mil gauges resist snags, so one pair survives the whole job",
      "No cheap fillers means the film stays strong instead of tearing when it matters",
    ],
    recommended: ["micro-diamond-8-nitrile", "tyre-tread-7-nitrile", "zig-8-nitrile", "diamond-8-nitrile"], // automotive
  },
  manufacturing: {
    overview:
      "Assembly lines, machine shops, fabrication and MRO put hands through repetitive handling, lubricants, sharp components and long shifts. Consistency and comfort matter as much as raw protection.",
    needs: [
      "Reliable grip on parts and hand tools",
      "Durability that lasts across long shifts",
      "Dexterity for assembly, inspection and fine work",
      "All-day comfort that reduces hand fatigue",
    ],
    solutions: [
      "Zig and Micro Diamond grip keep components secure whether they're dry or oily",
      "Tough, filler-free nitrile stands up to repetitive handling",
      "Thin, form-fitting options preserve fingertip feel for precise tasks",
      "A comfortable, flexible fit keeps hands working shift after shift",
    ],
    recommended: ["micro-diamond-6-nitrile", "zig-6-bio-nitrile", "micro-diamond-8-nitrile", "fully-textured-6-nitrile"], // manufacturing
  },
  "oil-gas": {
    overview:
      "Upstream and downstream work means hydrocarbons, drilling fluids, greases and harsh weather, often far from a fresh pair of gloves. Protection has to be rugged and go beyond the wrist.",
    needs: [
      "Grip on oily, wet equipment and tools",
      "Chemical and hydrocarbon resistance",
      "Extended cuff coverage for the wrist and forearm",
      "Rugged, long-lasting protection in tough conditions",
    ],
    solutions: [
      "Aggressive Tyre Tread and Diamond grip hold fast on slick, oily surfaces",
      "Nitrile resists oils and many chemicals, with per-product EN ISO 374 data",
      "Long-cuff 290–300 mm options protect beyond the wrist",
      "Heavy 8–14 mil gauges take abuse without giving up",
    ],
    recommended: ["micro-diamond-9-nitrile-long", "tyre-tread-7-nitrile-long", "diamond-9-nitrile-long", "zig-8-nitrile"], // oil-gas
  },
  chemical: {
    overview:
      "Handling acids, bases, solvents and peroxides demands documented, tested protection, not guesswork. The right glove depends on the specific chemical and how long it's in contact.",
    needs: [
      "Verified permeation and degradation data",
      "The right glove matched to the specific chemical",
      "Splash protection and extended cuff coverage",
      "Dependable, consistent barrier integrity",
    ],
    solutions: [
      "Gloves classified to EN ISO 374-1, -4 and -5 with data on every product page",
      "Nitrile and latex options performing across different chemical families",
      "Long-cuff variants add splash protection up the forearm",
      "Independently tested so you can specify with confidence",
    ],
    recommended: ["micro-diamond-9-nitrile-long", "diamond-9-nitrile-long", "fully-textured-8-nitrile-long", "zig-8-nitrile"], // chemical
  },
  "food-processing": {
    overview:
      "Food handling needs certified food-contact safety, a secure grip on wet and slippery product, and colour options that help prevent cross-contamination.",
    needs: [
      "Certified food-contact compliance",
      "Grip on wet, slippery product",
      "Dexterity for prep, portioning and packing",
      "Colour coding to support hygiene zoning",
    ],
    solutions: [
      "Certified to US FDA 21 CFR 177.2600 and EU Regulation 10/2011",
      "Textured grips handle wet and slippery product securely",
      "Thin, dexterous gauges keep precise control for detailed work",
      "A wide colour range supports zoning and visual detection",
    ],
    recommended: ["micro-diamond-9-nitrile", "micro-diamond-6-nitrile-long", "diamond-14-latex-long", "diamond-9-nitrile-long"], // food-processing
  },
  construction: {
    overview:
      "On site, hands meet cement, adhesives, sealants, rough materials and sharp edges, in every kind of weather. Gloves have to grip hard and take punishment.",
    needs: [
      "Maximum grip in wet and dry conditions",
      "Puncture and abrasion resistance",
      "Durability against rough, abrasive materials",
      "Extended protection for demanding tasks",
    ],
    solutions: [
      "Patented Zig and Tyre Tread textures grip hard whether it's wet or dry",
      "Heavy 8 mil+ nitrile resists punctures and abrasion",
      "Filler-free film means fewer tears and blow-outs on the job",
      "Long-cuff options guard the wrist on rougher work",
    ],
    recommended: ["micro-diamond-8-nitrile", "tyre-tread-7-nitrile", "zig-8-nitrile", "diamond-8-nitrile"], // construction
  },
  medical: {
    overview:
      "Examination and care settings require certified, reliable barrier protection with a comfortable, precise fit for hours of continuous wear.",
    needs: [
      "Medical-grade certification and documentation",
      "Dependable, consistent barrier integrity",
      "Tactile sensitivity for careful work",
      "Comfort for all-day wear",
    ],
    solutions: [
      "Manufactured to EN 455 and under an EN ISO 13485 quality system",
      "Consistent, independently tested barrier performance",
      "Thin, finger-textured options for excellent tactile feel",
      "Powder-free and comfortable for extended use",
    ],
    recommended: ["fully-textured-4-bio-nitrile", "fully-textured-5-nitrile", "finger-textured-4-nitrile-long", "textured-14-latex-long"], // medical
  },
  laboratory: {
    overview:
      "Labs combine chemical handling, delicate instruments and contamination control at a single bench, so gloves must protect without sacrificing feel.",
    needs: [
      "Chemical splash protection",
      "Fine dexterity for instruments and pipetting",
      "Contamination control for sensitive samples",
      "Documented compliance for audits",
    ],
    solutions: [
      "EN ISO 374-tested nitrile against common laboratory reagents",
      "Thin, finger-textured gloves for precise handling",
      "Powder-free films help protect samples from contamination",
      "Examination-grade options with the documentation labs need",
    ],
    recommended: ["fully-textured-4-bio-nitrile", "fully-textured-5-nitrile", "finger-textured-4-nitrile-long", "textured-14-latex-long"], // laboratory
  },
  cleaning: {
    overview:
      "Cleaning and janitorial work means constant wet contact with detergents, bleaches and sanitisers, often for hours at a stretch.",
    needs: [
      "Resistance to common cleaning chemicals",
      "Grip on wet surfaces, bottles and cloths",
      "Comfort for repeated, prolonged wet work",
      "Durability for reuse and lower waste",
    ],
    solutions: [
      "Nitrile and latex options resist everyday cleaning agents",
      "Textured grips keep hold of wet handles and cloths",
      "A comfortable, flexible fit suits repetitive tasks",
      "Durable, reusable gauges, including biodegradable nitrile",
    ],
    recommended: ["diamond-14-latex-long", "fully-textured-8-nitrile-long", "textured-14-latex-long", "micro-diamond-9-nitrile"], // cleaning
  },
  agriculture: {
    overview:
      "Farming and horticulture combine soil, water, fertilisers, agrochemicals and rough handling, usually outdoors and all day.",
    needs: [
      "Resistance to agrochemicals and fertilisers",
      "Grip in wet and muddy conditions",
      "Durability for rough outdoor handling",
      "Cost-effective options for daily use",
    ],
    solutions: [
      "Nitrile resists many agrochemicals better than natural rubber",
      "Aggressive grip textures work in wet and muddy conditions",
      "Tough gauges withstand rough, repetitive handling",
      "Economical everyday options, plus biodegradable nitrile",
    ],
    recommended: ["diamond-8-nitrile", "zig-8-nitrile", "micro-diamond-8-nitrile", "fully-textured-6-nitrile"], // agriculture
  },
  painting: {
    overview:
      "Painters and decorators handle solvents, thinners, paints and fillers, needing clean, precise and protected hands that don't mark the work.",
    needs: [
      "Resistance to solvents, thinners and paints",
      "Fine dexterity for detailed work",
      "A comfortable fit for long jobs",
      "Clean handling with no transfer to the finish",
    ],
    solutions: [
      "Nitrile resists solvents and thinners better than latex",
      "Thin, textured gloves keep a precise, controlled touch",
      "A snug, comfortable fit suits detailed decorating",
      "Powder-free options avoid contaminating finishes",
    ],
    recommended: ["fully-textured-5-nitrile", "micro-diamond-6-nitrile", "zig-6-bio-nitrile", "smooth-8-latex"], // painting
  },
  "general-purpose": {
    overview:
      "For everyday tasks across countless settings, you need a dependable, cost-effective glove that simply works, in the size, colour and material you want.",
    needs: [
      "All-round protection for varied tasks",
      "A comfortable everyday fit",
      "Reliable value that lasts",
      "Wide size, colour and material choice",
    ],
    solutions: [
      "A broad nitrile and latex range covers almost any task",
      "Comfortable, flexible fit for daily wear",
      "Durable, filler-free build delivers genuine value",
      "Extensive sizes, colours and biodegradable options",
    ],
    recommended: ["fully-textured-4-bio-nitrile", "fully-textured-5-nitrile", "fully-textured-6-nitrile", "micro-diamond-6-nitrile"], // general-purpose
  },
};

// "Gloves in action" photos per industry, real ones where we have them; the page
// pads to 2 tiles with labelled placeholders so there's space to add more later.
export const industryPhotos: Record<string, string[]> = {
  automotive: ["/images/ind-automotive-cover.jpg", "/images/ind-automotive.jpg"],
  manufacturing: ["/images/ind-manufacturing.jpg"],
  laboratory: ["/images/ind-laboratory.webp"],
  agriculture: ["/images/ind-agriculture.jpg"],
  painting: ["/images/ind-painting.jpg"],
  chemical: ["/images/ind-chemical.jpg"],
  "general-purpose": ["/images/ind-general-purpose.jpg"],
  "oil-gas": ["/images/ind-oil.jpg"],
  "food-processing": ["/images/ind-food.jpg", "/images/ind-food-2.webp"],
  construction: ["/images/ind-construction.jpg"],
  medical: ["/images/ind-medical.jpg"],
  cleaning: ["/images/ind-cleaning.jpg"],
};
