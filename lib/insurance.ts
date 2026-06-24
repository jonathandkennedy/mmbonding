/**
 * Insurance REFERRAL products (plan §3, §7). These are monetized lead pages:
 * MM Bonding is a broker, not the insurer. Every page must read as "we connect
 * you with a licensed partner," never "you are insured." Keep the compliance
 * framing in `disclaimer` on every page.
 */

export type InsuranceProduct = {
  slug: string;
  name: string;
  shortName: string;
  h1: string;
  intro: string;
  whatItIs: string;
  whoNeeds: string[];
  faqs: { q: string; a: string }[];
};

export const insuranceDisclaimer =
  "MM Bonding & Insurance Services connects California contractors with a licensed insurance partner. We are not the insurer, this is not an offer of coverage, and submitting the form does not bind any policy. Your partner agent will follow up with options.";

export const insuranceProducts: InsuranceProduct[] = [
  {
    slug: "contractor-general-liability",
    name: "Contractor General Liability Insurance",
    shortName: "General Liability",
    h1: "Contractor General Liability Insurance in California",
    intro:
      "General liability protects your business when a job leads to third-party property damage or bodily injury. We connect California contractors with a licensed insurance partner to get quoted and covered.",
    whatItIs:
      "General liability (GL) is the core policy most contractors carry. It responds to third-party claims, like damaging a client's property or an injury on the jobsite, up to your policy limits. Many California clients, GCs, and LLC license requirements expect proof of GL before you start work.",
    whoNeeds: [
      "Contractors who want protection from third-party property damage and injury claims",
      "Anyone a general contractor or client requires to carry coverage before working",
      "LLC contractors, who face specific insurance expectations alongside the $100,000 bond",
      "Trades bidding work that requires a certificate of insurance",
    ],
    faqs: [
      {
        q: "Do California contractors have to carry general liability insurance?",
        a: "The CSLB does not require GL for most license types on its own, but clients, general contractors, and many project owners do, and LLC contractors face additional insurance expectations. In practice, most working contractors carry it.",
      },
      {
        q: "Is MM Bonding the insurance company?",
        a: "No. We are a surety broker that also connects contractors with a licensed insurance partner for general liability. We are not the insurer; the partner agency quotes and binds the coverage.",
      },
      {
        q: "How does the referral work?",
        a: "Tell us a little about your business and the coverage you need. We route you to our licensed insurance partner, who follows up with options. There is no cost to be connected.",
      },
    ],
  },
  {
    slug: "workers-compensation",
    name: "Workers' Compensation Insurance",
    shortName: "Workers' Compensation",
    h1: "Workers' Compensation Insurance for California Contractors",
    intro:
      "If you have employees in California, workers' compensation is mandatory. We connect contractors with a licensed insurance partner to get covered and stay compliant.",
    whatItIs:
      "Workers' compensation covers medical costs and lost wages when an employee is hurt on the job. In California it is legally required the moment you have employees, and contractors face specific rules tied to their license. It protects your workers and shields your business from the cost of a workplace injury.",
    whoNeeds: [
      "Any California contractor with one or more employees (it is mandatory)",
      "Contractors adding their first W-2 employee",
      "Businesses a GC or client requires to show a workers' comp certificate",
      "Contractors who need coverage in place to keep a license active",
    ],
    faqs: [
      {
        q: "Is workers' compensation required for California contractors?",
        a: "Yes. California law requires workers' compensation as soon as you have employees. Certain license classifications must carry it regardless. Operating without it when required carries serious penalties.",
      },
      {
        q: "Do I need workers' comp if it's just me?",
        a: "Sole owners with no employees often are not required to carry it, though some clients still ask for it. Rules vary by license type and structure, so confirm your situation. Our partner agent can help you sort it out.",
      },
      {
        q: "Does MM Bonding sell the workers' comp policy?",
        a: "No. We connect you with a licensed insurance partner who quotes and binds workers' compensation. We are the referral, not the insurer.",
      },
    ],
  },
];

export function getInsuranceProduct(slug: string): InsuranceProduct | undefined {
  return insuranceProducts.find((p) => p.slug === slug);
}
