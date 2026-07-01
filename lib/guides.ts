/**
 * Resource guides registry. Powers the /resources hub, sitemap, and
 * cross-links. The body of each guide lives in its page file (bespoke,
 * E-E-A-T-rich prose); this registry is the listing metadata.
 *
 * These pages target the informational keyword gap from the plan (cost guides,
 * how-to guides, licensing guides) and feed the money pages.
 */

export type GuideCategory = "Bond Costs" | "How-To" | "Licensing" | "Underwriting";

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
];
