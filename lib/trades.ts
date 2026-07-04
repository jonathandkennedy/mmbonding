/**
 * Contractor bonds by trade / CSLB classification. Powers the
 * /contractor-license-bond/trades hub and the [trade] pages. Each page's angle:
 * every classification carries the same $25,000 license bond, but each trade has
 * its own common contract and permit bonds. This out-localizes the national
 * competitors, who stop at "contractor license bond."
 *
 * Bond amounts referenced in copy come from lib/regulatory.ts. The trade-level
 * "which bonds you also need" guidance is general; the exact requirement is set
 * by the project, agency, or contract.
 */

export type TradeBondLink = { label: string; href: string; note: string };

export type Trade = {
  slug: string;
  /** CSLB classification code, e.g. "C-10". */
  code: string;
  /** Full trade name, e.g. "Electrical". */
  name: string;
  /** Plural noun used in copy, e.g. "electrical contractors". */
  plural: string;
  keyword: string;
  /** Index-card blurb. */
  blurb: string;
  /** Hero paragraph. */
  intro: string;
  /** Answer-first TL;DR, under 60 words. */
  tldr: string;
  /** Trade-specific body paragraph on the bonding situation. */
  context: string;
  /** Bonds this trade commonly needs, with internal links. */
  bonds: TradeBondLink[];
  faqs: { q: string; a: string }[];
};

const LICENSE_BOND: TradeBondLink = {
  label: "Contractor License Bond ($25,000)",
  href: "/contractor-license-bond",
  note: "Required of every CSLB-licensed contractor, in every classification.",
};

const PERFORMANCE_PAYMENT: TradeBondLink = {
  label: "Performance & Payment Bonds",
  href: "/contract-bonds",
  note: "Required on most public and larger private jobs to guarantee the work and pay your subs and suppliers.",
};

export const trades: Trade[] = [
  {
    slug: "electrical-c10",
    code: "C-10",
    name: "Electrical",
    plural: "electrical contractors",
    keyword: "c-10 electrical contractor bond",
    blurb: "The license bond every C-10 carries, plus the contract and permit bonds electrical work runs into.",
    intro:
      "Every C-10 electrical contractor in California carries the same $25,000 license bond. Beyond that, commercial and public electrical work often calls for performance, payment, and permit bonds. We place them all, fast, and we work tough credit.",
    tldr: "Do C-10 electrical contractors need a special bond? Every C-10 carries the same $25,000 CSLB license bond (BPC §7071.6). Commercial and public jobs may also need performance, payment, or encroachment bonds. We place them all fast, bad credit welcome.",
    context:
      "The license bond is the same for a C-10 as for any other classification. Where electrical contractors differ is the project bonds: service upgrades and tenant improvements on public or commercial jobs are frequently bonded, and running new service or conduit in the public right-of-way can trigger an encroachment or street-cut bond from the city.",
    bonds: [
      LICENSE_BOND,
      PERFORMANCE_PAYMENT,
      {
        label: "Encroachment Permit Bond",
        href: "/commercial-bonds/encroachment-bond",
        note: "For service and conduit work in the public right-of-way, when the city or county requires it.",
      },
    ],
    faqs: [
      {
        q: "Is the C-10 license bond different from other trades?",
        a: "No. Every CSLB classification, including the C-10, carries the same $25,000 license bond under BPC §7071.6. What changes by trade is the contract and permit bonds your specific jobs require.",
      },
      {
        q: "Do electrical contractors need performance bonds?",
        a: "On public works and many larger commercial jobs, yes. The owner requires a performance and payment bond to guarantee completion and payment to your subs and suppliers. We build that program for you.",
      },
    ],
  },
  {
    slug: "plumbing-c36",
    code: "C-36",
    name: "Plumbing",
    plural: "plumbing contractors",
    keyword: "c-36 plumbing contractor bond",
    blurb: "The license bond for C-36 plumbers, plus the street-cut and contract bonds plumbing work triggers.",
    intro:
      "Every C-36 plumbing contractor in California carries the same $25,000 license bond. Running laterals into the public right-of-way or working public and commercial jobs adds street-cut, performance, and payment bonds. We place them all, credit challenges included.",
    tldr: "Do C-36 plumbing contractors need a special bond? Every C-36 carries the same $25,000 CSLB license bond (BPC §7071.6). Cutting into public streets or bidding public work can add utility, performance, and payment bonds. We place them all fast, bad credit welcome.",
    context:
      "The $25,000 license bond is identical across classifications. Plumbers most often run into permit bonds: opening a public street to run or repair a lateral usually requires a utility or street-cut bond guaranteeing you restore the pavement. Public and larger commercial plumbing jobs are typically bonded with performance and payment bonds.",
    bonds: [
      LICENSE_BOND,
      {
        label: "Utility & Street Cut Bond",
        href: "/commercial-bonds/utility-street-cut-bond",
        note: "For opening a public street to run or repair laterals, when the city requires it.",
      },
      PERFORMANCE_PAYMENT,
    ],
    faqs: [
      {
        q: "Why would a plumber need a street cut bond?",
        a: "When you cut into a public street or right-of-way to run or repair a line, the city requires a bond guaranteeing you patch and restore the pavement to its standard. It is usually small and quick to issue.",
      },
      {
        q: "Is the plumbing license bond a different amount?",
        a: "No. The C-36 carries the same $25,000 license bond as every other classification. Your project and permit bonds are what vary by job.",
      },
    ],
  },
  {
    slug: "roofing-c39",
    code: "C-39",
    name: "Roofing",
    plural: "roofing contractors",
    keyword: "c-39 roofing contractor bond",
    blurb: "The license bond for C-39 roofers, and why roofing files sometimes need a hard-to-place broker.",
    intro:
      "Every C-39 roofing contractor in California carries the same $25,000 license bond. Roofing can be a credit-sensitive trade to underwrite, which is exactly where a broker earns its keep. We place license, performance, and payment bonds, tough credit included.",
    tldr: "Do C-39 roofing contractors need a special bond? Every C-39 carries the same $25,000 CSLB license bond (BPC §7071.6). Commercial re-roofs and public jobs may add performance and payment bonds. Roofing credit can be tricky, so we shop hard-to-place files fast.",
    context:
      "The license bond amount is the same for roofers as everyone else. What roofers notice is underwriting: some markets treat roofing as higher-risk, so credit-challenged roofing files can get declined by a single carrier. As a broker we shop multiple markets, which is why roofing is a trade where a hard-to-place specialist matters.",
    bonds: [
      LICENSE_BOND,
      PERFORMANCE_PAYMENT,
      {
        label: "Hard-to-Place & Bad Credit",
        href: "/hard-to-place-surety-bonds",
        note: "Roofing files with tough credit are our specialty; we shop the markets that write them.",
      },
    ],
    faqs: [
      {
        q: "Is it harder for roofers to get bonded?",
        a: "The license bond itself is very placeable, but some sureties view roofing as higher-risk, so a single carrier may decline a tough file. A broker shops multiple markets to find the one that will write you.",
      },
      {
        q: "How much is the C-39 license bond?",
        a: "The same $25,000 as every classification. You pay a premium on it, driven mostly by credit, not the full amount.",
      },
    ],
  },
  {
    slug: "hvac-c20",
    code: "C-20",
    name: "HVAC",
    plural: "HVAC contractors",
    keyword: "c-20 hvac contractor bond",
    blurb: "The license bond for C-20 HVAC contractors, plus the contract bonds commercial work requires.",
    intro:
      "Every C-20 HVAC contractor in California carries the same $25,000 license bond. Commercial and public HVAC jobs, from tenant improvements to retrofits, are often bonded with performance and payment bonds. We place them all, fast.",
    tldr: "Do C-20 HVAC contractors need a special bond? Every C-20 carries the same $25,000 CSLB license bond (BPC §7071.6). Commercial and public HVAC jobs may also need performance and payment bonds. We place them all fast, bad credit welcome.",
    context:
      "The license bond is identical for HVAC as for any classification. HVAC contractors most often add contract bonds: mechanical work on public buildings and larger commercial tenant improvements is regularly bonded, so as you move upmarket you will need a performance and payment program behind you.",
    bonds: [
      LICENSE_BOND,
      PERFORMANCE_PAYMENT,
      {
        label: "SBA Surety Bonds",
        href: "/sba-surety-bonds",
        note: "For growing HVAC contractors who need bonding capacity standard markets will not yet extend.",
      },
    ],
    faqs: [
      {
        q: "Do HVAC contractors need more than the license bond?",
        a: "For residential service, usually just the license bond. As you take public or larger commercial work, owners will require performance and payment bonds on those jobs. We set that up when you need it.",
      },
      {
        q: "How much is the C-20 license bond?",
        a: "The same $25,000 as every other classification, with a premium based mostly on credit.",
      },
    ],
  },
  {
    slug: "landscaping-c27",
    code: "C-27",
    name: "Landscaping",
    plural: "landscape contractors",
    keyword: "c-27 landscaping contractor bond",
    blurb: "The license bond for C-27 landscapers, plus the site and improvement bonds development work needs.",
    intro:
      "Every C-27 landscape contractor in California carries the same $25,000 license bond. Landscaping tied to public parks or new development often adds performance, payment, and site-improvement bonds. We place them all, fast.",
    tldr: "Do C-27 landscape contractors need a special bond? Every C-27 carries the same $25,000 CSLB license bond (BPC §7071.6). Public parks and development landscaping may add performance, payment, or subdivision bonds. We place them all fast, bad credit welcome.",
    context:
      "The license bond does not change by trade. Landscape contractors run into project bonds when work is part of a public job or a new development: parks and public grounds are bonded with performance and payment bonds, and landscaping inside a subdivision can fall under the developer's site-improvement bond.",
    bonds: [
      LICENSE_BOND,
      PERFORMANCE_PAYMENT,
      {
        label: "Subdivision & Site Improvement Bond",
        href: "/commercial-bonds/subdivision-bond",
        note: "When landscaping is part of the required public improvements in a development.",
      },
    ],
    faqs: [
      {
        q: "Do landscapers need a special bond?",
        a: "The license bond is the same $25,000 every contractor carries. Public and development landscaping adds project bonds like performance, payment, or site-improvement bonds, depending on the job.",
      },
      {
        q: "How fast can I get bonded as a landscaper?",
        a: "The license bond is usually same-day. Project bonds depend on the job and a quick underwriting review, which we turn around fast.",
      },
    ],
  },
  {
    slug: "solar-c46",
    code: "C-46",
    name: "Solar",
    plural: "solar contractors",
    keyword: "c-46 solar contractor bond",
    blurb: "The license bond for C-46 solar contractors, plus the capacity bigger solar projects demand.",
    intro:
      "Every C-46 solar contractor in California carries the same $25,000 license bond. Larger commercial and utility-scale solar leans on performance and payment bonds and real bonding capacity. We place the license bond fast and build the program as you scale.",
    tldr: "Do C-46 solar contractors need a special bond? Every C-46 carries the same $25,000 CSLB license bond (BPC §7071.6). Commercial and utility-scale solar also needs performance and payment bonds and bonding capacity. We place the license bond fast and grow the program with you.",
    context:
      "The license bond is the same across classifications. Solar is where bonding capacity matters most: commercial and utility-scale projects are bonded, and the surety underwrites your financials to set how large a single project and total backlog it will support. Growing solar contractors often use the SBA program to bridge that gap.",
    bonds: [
      LICENSE_BOND,
      PERFORMANCE_PAYMENT,
      {
        label: "SBA Surety Bonds",
        href: "/sba-surety-bonds",
        note: "Helps newer and growing solar contractors qualify for bonds standard markets will not yet write.",
      },
    ],
    faqs: [
      {
        q: "Do solar contractors need bonding for big projects?",
        a: "Commercial and utility-scale solar is regularly bonded with performance and payment bonds, and the surety sets your capacity from your financials. We build and grow that program as your projects get larger.",
      },
      {
        q: "How much is the C-46 license bond?",
        a: "The same $25,000 as every classification, with a premium driven mostly by credit.",
      },
    ],
  },
  {
    slug: "painting-c33",
    code: "C-33",
    name: "Painting",
    plural: "painting contractors",
    keyword: "c-33 painting contractor bond",
    blurb: "The license bond for C-33 painters, plus the contract bonds public and commercial jobs require.",
    intro:
      "Every C-33 painting contractor in California carries the same $25,000 license bond. Public and larger commercial painting jobs add performance and payment bonds. We place them all, fast, and we work tough credit.",
    tldr: "Do C-33 painting contractors need a special bond? Every C-33 carries the same $25,000 CSLB license bond (BPC §7071.6). Public and commercial painting jobs may also need performance and payment bonds. We place them all fast, bad credit welcome.",
    context:
      "The license bond is the same for painters as for every classification. Most residential painting needs only the license bond; as you take public or larger commercial contracts, the owner requires performance and payment bonds on those specific jobs, which we set up quickly.",
    bonds: [
      LICENSE_BOND,
      PERFORMANCE_PAYMENT,
      {
        label: "Hard-to-Place & Bad Credit",
        href: "/hard-to-place-surety-bonds",
        note: "Challenged credit is welcome; we shop the markets that write it rather than declining you.",
      },
    ],
    faqs: [
      {
        q: "Do painters need more than a license bond?",
        a: "For residential work, usually just the $25,000 license bond. Public and larger commercial jobs require performance and payment bonds, which we place per job.",
      },
      {
        q: "Can I get a C-33 bond with bad credit?",
        a: "Usually, yes. The license bond is very placeable even with credit challenges, and hard-to-place files are our specialty. Underwriting still applies.",
      },
    ],
  },
  {
    slug: "concrete-c8",
    code: "C-8",
    name: "Concrete",
    plural: "concrete contractors",
    keyword: "c-8 concrete contractor bond",
    blurb: "The license bond for C-8 concrete contractors, plus the permit and site bonds flatwork triggers.",
    intro:
      "Every C-8 concrete contractor in California carries the same $25,000 license bond. Curb, gutter, sidewalk, and site flatwork in the public right-of-way adds encroachment and improvement bonds. We place them all, fast.",
    tldr: "Do C-8 concrete contractors need a special bond? Every C-8 carries the same $25,000 CSLB license bond (BPC §7071.6). Public flatwork, curbs, and gutters may also need encroachment or street-improvement bonds. We place them all fast, bad credit welcome.",
    context:
      "The license bond is the same for concrete contractors as everyone else. Concrete work is permit-bond heavy: pouring curbs, gutters, sidewalks, and driveway approaches in the public right-of-way commonly requires an encroachment or street-improvement bond from the agency, and public and development flatwork is bonded with performance and payment bonds.",
    bonds: [
      LICENSE_BOND,
      {
        label: "Encroachment Permit Bond",
        href: "/commercial-bonds/encroachment-bond",
        note: "For curb, gutter, and sidewalk work in the public right-of-way.",
      },
      {
        label: "Street Improvement & Grading Bond",
        href: "/commercial-bonds/street-improvement-bond",
        note: "For permitted improvement work tied to a city or county estimate.",
      },
    ],
    faqs: [
      {
        q: "Why do concrete contractors run into permit bonds?",
        a: "Because so much concrete work happens in the public right-of-way. Curbs, gutters, sidewalks, and approaches usually require an encroachment or improvement bond guaranteeing the work meets the agency's standard.",
      },
      {
        q: "Is the C-8 license bond a different amount?",
        a: "No. It is the same $25,000 license bond every classification carries. The permit and project bonds are what vary by job.",
      },
    ],
  },
  {
    slug: "general-building-b",
    code: "B",
    name: "General Building",
    plural: "general building contractors",
    keyword: "class b general contractor bond",
    blurb: "The license bond for Class B general contractors, plus the full contract bond program GCs run on.",
    intro:
      "Every Class B general building contractor in California carries the same $25,000 license bond. As a GC, your real bonding life is contract bonds: bid, performance, and payment bonds, backed by real bonding capacity. We place the license bond fast and build the program.",
    tldr: "Do Class B general contractors need a special bond? Every Class B carries the same $25,000 CSLB license bond (BPC §7071.6). As a GC you also need bid, performance, and payment bonds and bonding capacity for bonded jobs. We place the license bond fast and build the program.",
    context:
      "The license bond is the baseline every contractor shares. As a general building contractor you carry the contract program: you post bid bonds to compete, performance and payment bonds when you win, and you rely on a bonding capacity the surety sets from your financials. Growing GCs often lean on the SBA program to reach their first larger bonded jobs.",
    bonds: [
      LICENSE_BOND,
      {
        label: "Bid, Performance & Payment Bonds",
        href: "/contract-bonds",
        note: "The core program for a GC bidding and building bonded public and private work.",
      },
      {
        label: "SBA Surety Bonds",
        href: "/sba-surety-bonds",
        note: "Bridges capacity for newer and growing general contractors.",
      },
    ],
    faqs: [
      {
        q: "What bonds does a general contractor need?",
        a: "The $25,000 license bond to hold the license, plus a contract bond program, bid, performance, and payment bonds, for the bonded jobs you bid and build. The surety sets your bonding capacity from your financials.",
      },
      {
        q: "How do I increase my bonding capacity?",
        a: "Clean financials, work in progress reporting, and a track record of completed bonded jobs. A broker packages your file to present it to the markets that will extend the most capacity.",
      },
    ],
  },
  {
    slug: "general-engineering-a",
    code: "A",
    name: "General Engineering",
    plural: "general engineering contractors",
    keyword: "class a engineering contractor bond",
    blurb: "The license bond for Class A engineering contractors, plus the heavy public-works bond program.",
    intro:
      "Every Class A general engineering contractor in California carries the same $25,000 license bond. Engineering contractors live in public works, which means bid, performance, and payment bonds, DIR registration, and serious bonding capacity. We place the license bond fast and build the rest.",
    tldr: "Do Class A engineering contractors need a special bond? Every Class A carries the same $25,000 CSLB license bond (BPC §7071.6). Public works also demands bid, performance, and payment bonds and real bonding capacity. We place the license bond fast and build the public-works program.",
    context:
      "The license bond is the same as every classification. Engineering contractors are the most bond-intensive trade because they build public infrastructure: nearly every job is competitively bid with a bid bond and built under performance and payment bonds, DIR registration is required to bid public work, and the surety sets a capacity large enough for heavy-civil backlogs.",
    bonds: [
      LICENSE_BOND,
      {
        label: "Bid, Performance & Payment Bonds",
        href: "/contract-bonds",
        note: "The standard program for competitively bid public works.",
      },
      {
        label: "SBA Surety Bonds",
        href: "/sba-surety-bonds",
        note: "Helps emerging engineering contractors reach their first larger public jobs.",
      },
    ],
    faqs: [
      {
        q: "Why do engineering contractors need so many bonds?",
        a: "Because they build public works. Public jobs are competitively bid with a bid bond and built under performance and payment bonds, and you must register with the DIR to bid them. We build that whole program with you.",
      },
      {
        q: "Is the Class A license bond different?",
        a: "No. It is the same $25,000 license bond every classification carries. The contract bonds and capacity are what make engineering bonding distinct.",
      },
    ],
  },
];

export function getTrade(slug: string): Trade | undefined {
  return trades.find((t) => t.slug === slug);
}
