/**
 * Resource guides registry. Powers the /resources hub, sitemap, and
 * cross-links. The body of each guide lives in its page file (bespoke,
 * E-E-A-T-rich prose); this registry is the listing metadata.
 *
 * These pages target the informational keyword gap from the plan (cost guides,
 * how-to guides, licensing guides) and feed the money pages.
 */

export type GuideCategory =
  | "Bond Costs"
  | "How-To"
  | "Licensing"
  | "Underwriting"
  | "Public Works"
  | "For Homeowners";

export type Guide = {
  slug: string;
  /** Card/title used on the hub and in cross-links. */
  title: string;
  /** One-line listing excerpt. */
  excerpt: string;
  category: GuideCategory;
  /** Primary keyword target (for internal notes / intent). */
  keyword: string;
};

export const guides: Guide[] = [
  {
    slug: "contractor-license-bond-cost",
    title: "How Much Does a Contractor License Bond Cost?",
    excerpt:
      "What you actually pay for the $25,000 California license bond, and how credit moves the premium.",
    category: "Bond Costs",
    keyword: "contractor license bond cost",
  },
  {
    slug: "how-to-get-a-contractor-license-bond",
    title: "How to Get a Contractor License Bond in California",
    excerpt: "The step-by-step path to getting bonded for your CSLB license, fast.",
    category: "How-To",
    keyword: "how to get a contractor license bond",
  },
  {
    slug: "how-to-get-a-performance-bond",
    title: "How to Get a Performance Bond",
    excerpt:
      "What underwriters look at, what it costs, and where to get a performance bond for your project.",
    category: "How-To",
    keyword: "how to get a performance bond",
  },
  {
    slug: "reactivate-cslb-license",
    title: "How to Reactivate an Inactive CSLB License",
    excerpt: "Reactivating a California contractor license, and the bond you need to do it.",
    category: "Licensing",
    keyword: "reactivate cslb license",
  },
  {
    slug: "surety-bonds-with-bad-credit",
    title: "Can You Get a Surety Bond with Bad Credit?",
    excerpt: "Yes, usually. How bad-credit surety bonds work, what they cost, and how to get placed.",
    category: "Bond Costs",
    keyword: "surety bond bad credit",
  },
  {
    slug: "bid-bond-cost",
    title: "How Much Does a Bid Bond Cost?",
    excerpt: "Why most bid bonds carry no separate premium, and what actually drives the cost.",
    category: "Bond Costs",
    keyword: "bid bond cost",
  },
  {
    slug: "what-a-contractor-license-bond-covers",
    title: "What Does a Contractor License Bond Cover?",
    excerpt: "Who the bond protects, what a valid claim looks like, and what it does not cover.",
    category: "Licensing",
    keyword: "what does a contractor license bond cover",
  },
  {
    slug: "california-llc-contractor-requirements",
    title: "California LLC Contractor Bond Requirements",
    excerpt: "The two bonds (and the insurance) an LLC contractor needs, on top of the license bond.",
    category: "Licensing",
    keyword: "california llc contractor requirements",
  },
  {
    slug: "contractor-bond-claims-and-lapses",
    title: "Contractor Bond Claims & Lapses: What to Know",
    excerpt: "What happens when a claim is filed or your bond lapses, and how to protect your license.",
    category: "Licensing",
    keyword: "contractor bond claim",
  },
  {
    slug: "how-to-get-bonded-as-a-new-contractor",
    title: "How to Get Bonded as a New Contractor",
    excerpt: "No track record yet? The realistic path to getting bonded when you are just starting out.",
    category: "How-To",
    keyword: "how to get bonded new contractor",
  },
  {
    slug: "sba-surety-bond-eligibility",
    title: "SBA Surety Bond Eligibility: Do You Qualify?",
    excerpt: "Who qualifies for the SBA Surety Bond Guarantee program, and what it takes to apply.",
    category: "How-To",
    keyword: "sba surety bond eligibility",
  },
  {
    slug: "how-to-bid-public-works-in-california",
    title: "How to Bid Public Works in California",
    excerpt: "Finding bids, registering with the DIR, and the bonds you need to compete for public work.",
    category: "How-To",
    keyword: "how to bid public works california",
  },
  {
    slug: "dir-registration-for-contractors",
    title: "DIR Registration for California Contractors",
    excerpt: "What DIR registration is, who needs it for public works, and how it connects to bonding.",
    category: "Licensing",
    keyword: "dir registration contractors",
  },
  {
    slug: "contractor-license-bond-renewal",
    title: "Contractor License Bond Renewal in California",
    excerpt: "Why the license bond renews yearly, what changes at renewal, and how to keep your license active.",
    category: "Licensing",
    keyword: "contractor license bond renewal",
  },
  {
    slug: "surety-bond-vs-cslb-cash-deposit",
    title: "Surety Bond vs. the CSLB Cash Deposit",
    excerpt:
      "The $25,000 cash deposit most contractors never hear about, and why almost everyone picks the bond instead.",
    category: "Licensing",
    keyword: "cslb cash deposit vs bond",
  },
  {
    slug: "california-contractor-license-classifications",
    title: "California Contractor License Classifications (A, B & C)",
    excerpt:
      "What the A, B, and C-## classifications mean, and which bonds each class of contractor needs.",
    category: "Licensing",
    keyword: "california contractor license classifications",
  },
  {
    slug: "how-to-get-a-california-contractor-license",
    title: "How to Get a California Contractor License",
    excerpt:
      "The full path to a CSLB license: experience, the exam, fees, and the bond that finishes it.",
    category: "How-To",
    keyword: "how to get a california contractor license",
  },
  {
    slug: "california-permit-bond-requirements",
    title: "California Permit Bond Requirements by City & County",
    excerpt:
      "When cities, counties, and Caltrans require permit and encroachment bonds, and how to get them fast.",
    category: "Licensing",
    keyword: "california permit bond requirements",
  },
  {
    slug: "how-much-surety-bond-do-i-need",
    title: "How Much Surety Bond Do I Need?",
    excerpt:
      "How to size the right bond by license type and trade, with a quick premium estimate.",
    category: "How-To",
    keyword: "how much surety bond do i need",
  },
  {
    slug: "surety-bond-refunds-and-cancellations",
    title: "Surety Bond Refunds & Cancellations",
    excerpt:
      "When a bond premium is refundable, how cancellation works, and what a prorated return looks like.",
    category: "Bond Costs",
    keyword: "surety bond refund cancellation",
  },
  {
    slug: "how-surety-bond-credit-checks-work",
    title: "How Surety Bond Credit Checks Work",
    excerpt:
      "Soft pull vs. hard pull, what underwriters actually look at, and how credit sets your rate.",
    category: "Underwriting",
    keyword: "surety bond credit check",
  },
  {
    slug: "surety-bond-indemnity-agreement",
    title: "The Surety Bond Indemnity Agreement, Explained",
    excerpt:
      "What you sign, what a personal guarantee means, and who is on the hook if a claim is paid.",
    category: "Underwriting",
    keyword: "surety bond indemnity agreement",
  },
  {
    slug: "surety-bond-capacity",
    title: "Surety Bonding Capacity: Single & Aggregate Limits",
    excerpt:
      "How sureties set your bonding capacity, and the practical steps to increase it.",
    category: "Underwriting",
    keyword: "surety bonding capacity",
  },
  {
    slug: "funds-control-for-contractors",
    title: "Funds Control: Getting Bonded When Credit Won't",
    excerpt:
      "How funds control, also called funds administration, can unlock a bond when credit alone can't.",
    category: "Underwriting",
    keyword: "funds control surety bond",
  },
  {
    slug: "how-to-get-bonded-with-a-new-business",
    title: "How to Get Bonded with a Brand-New Business",
    excerpt:
      "No financials yet? The realistic path to a first surety bond for a brand-new company.",
    category: "How-To",
    keyword: "get bonded new business no financials",
  },
  {
    slug: "surety-bonds-after-bankruptcy-or-tax-lien",
    title: "Surety Bonds After a Bankruptcy, Tax Lien, or Claim",
    excerpt:
      "Still placeable. How sureties view a bankruptcy, lien, or prior claim, and how to get bonded anyway.",
    category: "Bond Costs",
    keyword: "surety bond after bankruptcy",
  },
  {
    slug: "surety-bond-collateral",
    title: "Surety Bond Collateral: When It's Required & How to Get It Back",
    excerpt:
      "When a surety asks for collateral, what forms it takes, and how to reduce or recover it.",
    category: "Underwriting",
    keyword: "surety bond collateral",
  },
  {
    slug: "instant-online-bond-vs-broker",
    title: "Instant Online Bond vs. a Surety Broker",
    excerpt:
      "When the buy-it-now button works, and when an automated decline means you need a broker who shops the market.",
    category: "Underwriting",
    keyword: "instant surety bond vs broker",
  },
  {
    slug: "why-was-my-surety-bond-declined",
    title: "Why Was My Surety Bond Declined?",
    excerpt:
      "The real reasons an online bond gets rejected, and how a broker places the file the robots turned down.",
    category: "Underwriting",
    keyword: "surety bond declined",
  },
  {
    slug: "why-contract-bonds-are-not-instant",
    title: "Why Contract & Performance Bonds Can't Be Bought Instantly",
    excerpt:
      "What underwriters review on a contract bond, and why real bonding capacity beats a checkout button.",
    category: "Underwriting",
    keyword: "how contract bond underwriting works",
  },
  {
    slug: "how-a-surety-broker-shops-the-market",
    title: "How a Surety Broker Shops the Market for Your Bond",
    excerpt:
      "Why one online quote isn't your best rate, and how a broker works multiple markets to place and price your bond.",
    category: "Underwriting",
    keyword: "how surety broker shops markets",
  },
  {
    slug: "get-bonded-with-a-disciplinary-history",
    title: "Getting Bonded with a CSLB Complaint or Disciplinary History",
    excerpt:
      "How a prior complaint, discipline, or claim affects bonding, and how we still place the file.",
    category: "Underwriting",
    keyword: "surety bond with disciplinary history",
  },
  {
    slug: "surety-bond-premium-financing",
    title: "Surety Bond Premium Financing: Is a Payment Plan Worth It?",
    excerpt:
      "When financing a bond premium makes sense, when paying annually is cheaper, and what to watch for.",
    category: "Bond Costs",
    keyword: "surety bond premium financing",
  },
  {
    slug: "is-a-surety-bond-tax-deductible",
    title: "Is a Surety Bond Premium Tax-Deductible?",
    excerpt:
      "How the premium is generally treated as a business expense, and what to confirm with your accountant.",
    category: "Bond Costs",
    keyword: "is surety bond tax deductible",
  },
  {
    slug: "surety-bond-cost-by-credit-score",
    title: "Surety Bond Cost by Credit Score",
    excerpt:
      "How each credit tier maps to your premium on the $25,000 license bond, with no fake teaser rates.",
    category: "Bond Costs",
    keyword: "surety bond cost by credit score",
  },
  {
    slug: "california-contractor-bond-requirements-by-city",
    title: "California Contractor Bond Requirements by City",
    excerpt:
      "The statewide $25,000 license bond, plus the local permit and encroachment bonds your city may add.",
    category: "Licensing",
    keyword: "contractor bond requirements by city california",
  },
  {
    slug: "rmo-vs-rme-california-license",
    title: "RMO vs. RME: Qualifying a California Contractor License",
    excerpt:
      "The difference between a Responsible Managing Officer and Employee, and the bond a qualifier needs.",
    category: "Licensing",
    keyword: "rmo vs rme california",
  },
  {
    slug: "used-car-dealer-bond-by-type",
    title: "California Used Car Dealer Bonds by Type",
    excerpt:
      "How the DMV motor vehicle dealer bond works for retail, wholesale, motorcycle, and other dealer types.",
    category: "Licensing",
    keyword: "california dealer bond by type",
  },
  {
    slug: "california-contractor-bond-stack",
    title: "The California Contractor Bond Stack: What You Need Together",
    excerpt:
      "License bond, LLC worker bond, workers' comp, and contract bonds: which ones your business actually needs.",
    category: "Licensing",
    keyword: "california contractor bond requirements list",
  },
  {
    slug: "surety-bond-with-itin-or-thin-credit",
    title: "Getting Bonded with an ITIN or Thin U.S. Credit",
    excerpt:
      "How new-to-the-country and thin-credit contractors get a surety bond, and the paths that work.",
    category: "How-To",
    keyword: "surety bond with itin",
  },
  {
    slug: "california-cannabis-bond-local-permits",
    title: "California Cannabis Bonds: The State $5,000, Plus Local Permits",
    excerpt:
      "The $5,000 state cannabis bond, plus the local permit bonds cities like Los Angeles and Oakland can require.",
    category: "How-To",
    keyword: "california cannabis bond local",
  },
  {
    slug: "surety-bond-application-checklist",
    title: "Surety Bond Application Checklist: What You Need",
    excerpt:
      "The documents and details that get you quoted and bonded fast, gathered in one place.",
    category: "How-To",
    keyword: "surety bond application requirements",
  },
  {
    slug: "california-public-works-bonds-by-obligee",
    title: "California Public Works Bonds by Obligee: Caltrans, DGS & LA",
    excerpt:
      "The bid, performance, and payment bonds major California public agencies require, and how they set the amounts.",
    category: "Public Works",
    keyword: "california public works bond requirements",
  },
  {
    slug: "dbe-sbe-dvbe-bonding-california",
    title: "DBE, SBE & DVBE Bonding for California Public Contracts",
    excerpt:
      "How certified disadvantaged, small, and disabled-veteran firms get bonded for public work, and the programs that help.",
    category: "Public Works",
    keyword: "dbe dvbe bonding california",
  },
  {
    slug: "how-to-verify-a-contractor-is-bonded",
    title: "How to Verify a Contractor Is Licensed & Bonded",
    excerpt:
      "How to check a California contractor's CSLB license and bond before you sign, in a few minutes.",
    category: "For Homeowners",
    keyword: "verify contractor bonded california",
  },
  {
    slug: "how-to-file-a-claim-against-a-contractor-bond",
    title: "How to File a Claim Against a Contractor's License Bond",
    excerpt:
      "The step-by-step way a homeowner files a claim on a California contractor's $25,000 license bond.",
    category: "For Homeowners",
    keyword: "file claim contractor license bond",
  },
  {
    slug: "what-a-contractor-bond-pays-a-homeowner",
    title: "What a Contractor's $25,000 Bond Actually Pays a Homeowner",
    excerpt:
      "What the license bond covers for consumers, its limits, and when insurance or the CSLB is the better path.",
    category: "For Homeowners",
    keyword: "what does contractor bond pay homeowner",
  },
];

export function guideHref(slug: string) {
  return `/resources/${slug}`;
}

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export const guideCategories: GuideCategory[] = [
  "Bond Costs",
  "How-To",
  "Licensing",
  "Underwriting",
  "Public Works",
  "For Homeowners",
];
