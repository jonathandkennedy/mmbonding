/**
 * Resource guides registry. Powers the /resources hub, sitemap, and
 * cross-links. The body of each guide lives in its page file (bespoke,
 * E-E-A-T-rich prose); this registry is the listing metadata.
 *
 * These pages target the informational keyword gap from the plan (cost guides,
 * how-to guides, licensing guides) and feed the money pages.
 */

export type GuideCategory = "Bond Costs" | "How-To" | "Licensing";

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
];

export function guideHref(slug: string) {
  return `/resources/${slug}`;
}

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export const guideCategories: GuideCategory[] = ["Bond Costs", "How-To", "Licensing"];
