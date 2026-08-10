// Company news & insights. Body is an array of paragraphs, mirroring guides.ts.
// `date` is ISO (YYYY-MM-DD); the listing and article pages sort newest first.
// Articles are built around real company milestones (patents, audits, expansion,
// product launches, anniversary). Story copy is grounded in existing site facts;
// where an exact day isn't recorded we use the first of the given month.
export interface Article {
  slug: string;
  title: string;
  tag: string;
  date: string;      // ISO date, e.g. "2026-09-01"
  excerpt: string;
  image: string;     // hero / card image (existing asset)
  imageFit?: "cover" | "contain"; // "contain" for product shots on white; default "cover"
  body: string[];
}

export const articles: Article[] = [
  {
    slug: "we-invented-the-raised-diamond",
    title: "We Invented the Raised Diamond",
    tag: "Heritage",
    date: "2011-01-01",
    excerpt:
      "In 2011 we made the first raised diamond glove on the market, a grip texture the whole industry would go on to copy, and the foundation of every patent that followed.",
    image: "/images/news-diamond.jpg",
    imageFit: "contain",
    body: [
      "Every grip technology we've developed traces back to one idea in 2011: that a nitrile glove could have a raised, three-dimensional surface that channels away oil and water and holds on where smooth gloves slip. We built the first raised diamond glove on the market, and it changed what buyers expected from a work glove.",
      "It worked so well that it was widely copied. As the originators, we've spent more than a decade perfecting the process, the compound, the texture depth and the finish: the parts imitators can't simply photograph and reproduce. Our raised diamond still sets the benchmark because we own how it's actually made.",
      "Being copied taught us a lesson that shaped the company: protect the next breakthrough from the start. Everything that came after (Gripper, Micro Diamond, Zig Grip) was engineered as a deliberate improvement on the original, and patented. The raised diamond is where the Innovative story begins.",
    ],
  },
  {
    slug: "gripper-patented",
    title: "Our First Patent: The Gripper Glove",
    tag: "Patent",
    date: "2017-02-01",
    excerpt:
      "Inspired by the way tyres grip a wet road, the Gripper (Tyre Tread) glove became the first Innovative technology we protected with a patent.",
    image: "/images/tex-tyre-tread.jpg",
    body: [
      "In February 2017 we secured our first patent, for the Gripper glove, better known today as our Tyre Tread texture. The idea came from watching tyres bite into a wet road in the rain: deep channels and tall ridges that shed water and dig in under load.",
      "We translated that into an aggressive raised tread across the glove's grip zones, engineered to clear oil and water from the contact patch and hold firm in heavy-duty, high-force handling, the kind of work where grip absolutely cannot fail.",
      "Having pioneered the raised diamond in 2011 and watched the industry follow our lead, we knew this breakthrough deserved protection from day one. So the moment the idea proved itself, we patented it. Gripper was the first of what is now a family of patented grip technologies.",
    ],
  },
  {
    slug: "expanded-to-14-lines",
    title: "From 12 to 14: Two New State-of-the-Art Lines",
    tag: "Manufacturing",
    date: "2018-09-01",
    excerpt:
      "In September 2018 we expanded from 12 to 14 dipping lines, with the two new lines built to the latest production technology: more capacity, tighter consistency.",
    image: "/images/news-lines-13-14.jpg",
    body: [
      "In September 2018 we grew our production capacity from 12 dipping lines to 14. The two new lines weren't simply more of the same. They were built to the latest generation of glove-production technology, giving us finer process control and more consistent quality at higher volume.",
      "Running 24 hours a day, the additional lines let us take on larger orders and a wider product mix without compromising the standards our customers rely on. For a specialist manufacturer, capacity and consistency have to grow together, and this expansion was designed to deliver both.",
      "It reflects how we've always invested: deliberately, in the equipment and process improvements that make a measurably better glove. The expansion to 14 lines remains the backbone of our manufacturing today.",
    ],
  },
  {
    slug: "biodegradable-nitrile-launched",
    title: "Launching Biodegradable Nitrile",
    tag: "Product",
    date: "2019-05-01",
    excerpt:
      "In May 2019 we introduced a biodegradable nitrile engineered to break down far faster at end of life, with no compromise on grip or protection.",
    image: "/images/prod-bioblue-fully-textured-4.png",
    body: [
      "Protection shouldn't have to mean permanent waste. In May 2019 we launched our biodegradable nitrile: an additive technology that helps the glove break down significantly faster than standard nitrile in biologically active landfill conditions.",
      "Crucially, it performs like our standard nitrile in the hand. It isn't a gimmick and it isn't 'compostable' marketing. It's a measurable change in how the material breaks down at end of life, and it's available across our grip technologies rather than only on plain gloves.",
      "The technology is backed by independent testing to ASTM D5511 and ISO 15985. It gave our customers a genuine lower-footprint option years before sustainability became a checkbox in glove tenders: environmentally responsible, without a premium price.",
    ],
  },
  {
    slug: "micro-diamond-patented-successor",
    title: "Micro Diamond: The Patented Successor to the Raised Diamond",
    tag: "Patent",
    date: "2019-12-01",
    excerpt:
      "Patented in December 2019, Micro Diamond shrinks the diamond and packs far more grip points into the same area, our strongest hold yet in oily conditions.",
    image: "/images/tex-micro-diamond.jpg",
    body: [
      "Some of our best ideas come from the factory floor, and Micro Diamond is one of them. Our engineering bench vices gripped so powerfully thanks to the micro-diamond texture machined into their jaws, so we set out to recreate that same bite on a nitrile glove.",
      "The principle is simple. Where a conventional raised diamond relies on a handful of large ridges, Micro Diamond shrinks the diamond and packs many more grip points into the same area. More contact points and more surface area are exactly what improve grip in oily and wet conditions, without adding bulk, so the glove stays thin and touch-sensitive.",
      "In December 2019 we patented Micro Diamond worldwide as a superior successor to the raised diamond we invented in 2011. It's a natural fit for automotive, manufacturing and engineering, oil and gas, and general industrial work, anywhere grip has to hold when surfaces turn slick.",
    ],
  },
  {
    slug: "smeta-4-pillar-2022",
    title: "We Pass Our First SMETA 4-Pillar Audit",
    tag: "Certification",
    date: "2022-03-01",
    excerpt:
      "In March 2022 we passed a full SMETA 4-Pillar ethical audit, an independent check of labour standards, health & safety, environment and business ethics.",
    image: "/images/sus-greenery.jpg",
    body: [
      "In March 2022 Innovative Gloves passed its first SMETA 4-Pillar audit. SMETA, the Sedex Members Ethical Trade Audit, is one of the most widely recognised responsible-sourcing assessments in the world, and the 4-Pillar version is the most thorough: it examines labour standards, health and safety, the environment and business ethics.",
      "For us it was less about earning a badge and more about putting an independent lens on things we already believed in. The same care we put into our gloves goes into the people who make them, from workplace safety to the welfare programmes our team benefits from, including free rice for every employee and the fruit and fish from our own grounds shared with the surrounding villages.",
      "Passing a 4-Pillar audit told our customers something a marketing page can't: that a third party had looked closely at how we operate and found it sound. It set the standard we've held to ever since.",
    ],
  },
  {
    slug: "smeta-4-renewed-2024",
    title: "SMETA 4-Pillar: Renewed",
    tag: "Certification",
    date: "2024-03-01",
    excerpt:
      "Two years on, we renewed our SMETA 4-Pillar audit in March 2024, re-verifying our standards across labour, safety, environment and ethics.",
    image: "/images/news-smeta.jpg",
    body: [
      "Ethical standards aren't a one-time achievement, which is exactly why SMETA audits are repeated. In March 2024 we renewed our SMETA 4-Pillar certification, opening our operation back up to independent scrutiny across all four pillars: labour, health and safety, environment and business ethics.",
      "Renewal means demonstrating that the practices we were credited for in 2022 are still in place, and improved on. For our distributors and procurement partners, a current SMETA audit is often a requirement to supply; keeping ours renewed keeps those doors open.",
      "It's a discipline we're glad to keep. Being audited regularly holds us to our own promises about how we treat our people and our environment.",
    ],
  },
  {
    slug: "zig-grip-patented",
    title: "Zig Grip Earns Its Patent",
    tag: "Patent",
    date: "2025-04-01",
    excerpt:
      "Patented in April 2025, Zig Grip is the evolution of our Gripper glove: our best dry grip yet, proven in lab testing, with dedicated thumb texturing.",
    image: "/images/news-zig.jpg",
    body: [
      "In April 2025 we patented Zig Grip, the next generation of our Gripper glove. Five years of real-world use taught us exactly where Gripper could be pushed further, and Zig Grip is the answer: a refined zig-zag texture, a thicker and stronger build, and, crucially, dedicated texturing on the thumb, the part of the hand that does the most gripping work.",
      "The result is the best dry grip we've ever tested, verified in the lab rather than just claimed on a datasheet. It's built for manufacturing and engineering, automotive, maintenance and construction, where a secure dry hold on tools and components makes the difference.",
      "Zig Grip is the fourth grip technology in our patented family, alongside Tyre Tread and Micro Diamond, and the invented raised diamond that started it all. Each one exists because we kept asking how to make grip measurably better.",
    ],
  },
  {
    slug: "smeta-4-renewed-2026",
    title: "SMETA 4-Pillar: Renewed Again",
    tag: "Certification",
    date: "2026-03-01",
    excerpt:
      "In March 2026 we renewed our SMETA 4-Pillar audit once more, carrying our ethical-manufacturing standards into our 25th year.",
    image: "/images/sus-greenery.jpg",
    body: [
      "In March 2026 we renewed our SMETA 4-Pillar certification again, continuing an unbroken commitment to independent ethical auditing that began with our first pass in 2022.",
      "Arriving in the year we mark 25 years of manufacturing, this renewal is a fitting one. A quarter-century of building better gloves means little if it isn't matched by how we treat the people who make them and the environment we make them in, and SMETA's four pillars hold us to exactly that.",
      "For customers, it's simple assurance: our labour, safety, environmental and business-ethics standards are current, audited and verified as we head into our next chapter.",
    ],
  },
  {
    slug: "25-years",
    title: "Celebrating 25 Years of Innovative Gloves",
    tag: "Anniversary",
    date: "2026-09-01",
    excerpt:
      "This September marks 25 years since Innovative Gloves began, from a single family-owned factory in southern Thailand to a specialist manufacturer running 14 lines around the clock.",
    image: "/images/sus-aerial.jpg",
    body: [
      "This September, Innovative Gloves turns 25. What began in 2001 as a family-owned glove maker in southern Thailand has grown into a specialist international manufacturer, but the founding idea has never changed: build gloves that perform where ordinary disposables fall short.",
      "Today the factory runs 14 production lines, 24 hours a day, producing a range that spans roughly 4 to 14 mil across nitrile, latex, long-cuff, heavy-duty, chemical-protection and biodegradable gloves, supplied to industries worldwide.",
      "The last 25 years are written in the milestones along the way: inventing the raised diamond in 2011, our first patent in 2017, expanding to 14 lines in 2018, launching biodegradable nitrile in 2019, patenting Micro Diamond and then Zig Grip, and passing and renewing our SMETA ethical audits. Each one came from the same drive to keep improving.",
      "Being family-owned has shaped how we grew, investing in our own grip technologies, our own manufacturing, and our own people rather than competing on price alone. That's why a company of our size holds patents on multiple grip textures and keeps developing new ones.",
      "Twenty-five years is a milestone, not a finish line. The drive that produced the first raised diamond glove is still pushing new products, cleaner manufacturing and better protection for the people who wear our gloves every day. Here's to the next 25.",
    ],
  },
];

// Newest first, for both the listing and related-article ordering.
export const articlesByDate = [...articles].sort((a, b) => b.date.localeCompare(a.date));

export function formatArticleDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${months[m - 1]} ${d}, ${y}`;
}
