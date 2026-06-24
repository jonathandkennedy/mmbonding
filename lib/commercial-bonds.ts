/**
 * Commercial / specialty surety bonds (plan §5 Tier 3). These sit outside the
 * contractor world (different regulators), so amounts and statutes here are
 * GENERAL GUIDANCE and must be confirmed against the relevant agency. Keep the
 * `commercialReviewNote` visible on every page so the accuracy promise holds.
 *
 * Verify each figure against the listed authority at build and quarterly.
 */

export const commercialReviewNote =
  "Bond amounts and requirements are general guidance and can change. Confirm the current requirement with the listed agency before you file. We will quote your exact bond.";

export type CommercialBond = {
  slug: string;
  name: string;
  shortName: string;
  intro: string;
  /** Display label for the required amount (string, since some vary). */
  amountLabel: string;
  /** Regulator / who requires it. */
  authority: string;
  statute?: string;
  whatItIs: string;
  whoNeedsIt: string[];
  faqs: { q: string; a: string }[];
};

export const commercialBonds: CommercialBond[] = [
  {
    slug: "notary-bond",
    name: "California Notary Public Bond",
    shortName: "Notary Bond",
    intro:
      "California requires every notary public to file a $15,000 surety bond for their four-year commission. It is one of the most affordable bonds we place, and we issue it fast.",
    amountLabel: "$15,000",
    authority: "California Secretary of State",
    statute: "Gov. Code §8212",
    whatItIs:
      "The notary bond protects the public from financial harm caused by a notary's errors or misconduct. You file it with your county clerk for your four-year commission. It protects the public, not you, so many notaries also carry separate errors-and-omissions coverage.",
    whoNeedsIt: [
      "New notaries applying for a California commission",
      "Notaries renewing at the end of a four-year term",
      "Anyone the Secretary of State requires to file before commissioning",
    ],
    faqs: [
      {
        q: "How much is a California notary bond?",
        a: "The bond amount is $15,000 for the four-year commission. You pay a small one-time premium, not the $15,000. It is one of the cheapest surety bonds there is.",
      },
      {
        q: "Is the notary bond the same as E&O insurance?",
        a: "No. The bond protects the public; if a claim is paid, you reimburse the surety. Errors-and-omissions insurance protects you. Many notaries carry both.",
      },
      {
        q: "Can I get the bond with bad credit?",
        a: "Almost always. The notary bond is a small, low-risk bond and is rarely credit-sensitive, so even challenged credit is usually no obstacle.",
      },
    ],
  },
  {
    slug: "auto-dealer-bond",
    name: "California Motor Vehicle Dealer Bond",
    shortName: "Auto Dealer Bond",
    intro:
      "California auto dealers must file a $50,000 motor vehicle dealer bond with the DMV to get or keep a dealer license. We place them, including for newer dealers and tougher credit.",
    amountLabel: "$50,000",
    authority: "California DMV",
    statute: "Veh. Code §11710",
    whatItIs:
      "The motor vehicle dealer bond guarantees that you operate within California's vehicle code and pay what you owe, protecting customers and the state. It is required to obtain and renew most retail dealer licenses.",
    whoNeedsIt: [
      "Retail used and new car dealers licensed by the DMV",
      "Dealers renewing an existing license",
      "Operators the DMV requires to bond before licensing",
    ],
    faqs: [
      {
        q: "How much does a $50,000 dealer bond cost?",
        a: "You pay a premium that is a percentage of the $50,000, set by underwriting and driven mostly by credit. Strong credit pays the least; we shop multiple markets to find your best rate.",
      },
      {
        q: "Do wholesale-only dealers need the same bond?",
        a: "Bond requirements can differ by dealer type. Tell us your license class and we will confirm the correct amount and place the right bond.",
      },
      {
        q: "Can a new dealer with limited credit get bonded?",
        a: "Often, yes. Newer dealers and credit-challenged files are exactly what we shop across markets. Underwriting still applies.",
      },
    ],
  },
  {
    slug: "immigration-consultant-bond",
    name: "California Immigration Consultant Bond",
    shortName: "Immigration Consultant Bond",
    intro:
      "California immigration consultants must file a $100,000 surety bond with the Secretary of State. We place these specialty bonds, credit challenges included.",
    amountLabel: "$100,000",
    authority: "California Secretary of State",
    statute: "BPC §22443.1",
    whatItIs:
      "The immigration consultant bond protects clients against violations of California's immigration consultant law. It is required to register and operate as an immigration consultant in the state.",
    whoNeedsIt: [
      "New immigration consultants registering with the Secretary of State",
      "Consultants renewing their registration",
    ],
    faqs: [
      {
        q: "Why is the immigration consultant bond so large?",
        a: "The $100,000 amount reflects the consumer-protection purpose of the law. You do not pay $100,000; you pay a premium, a percentage of it set by underwriting.",
      },
      {
        q: "Is this a hard bond to get?",
        a: "It is a specialty bond, which is where a broker helps. We shop the markets that write it and work credit challenges rather than declining at the door.",
      },
    ],
  },
  {
    slug: "business-service-bond",
    name: "Business Service & Janitorial Bond",
    shortName: "Business Service Bond",
    intro:
      "Janitorial, cleaning, and home-service businesses often need a business service bond to win contracts. It reassures clients their property is protected. We place them fast.",
    amountLabel: "Set by your client or contract",
    authority: "Required by clients and contracts",
    whatItIs:
      "A business service bond (often called a janitorial bond) protects your clients if a covered employee steals from them. It is not legally mandated; clients and contracts require it as a condition of doing business, and carrying it helps you win work.",
    whoNeedsIt: [
      "Janitorial and commercial cleaning companies",
      "Home-service businesses entering clients' properties",
      "Any service business a client requires to be bonded",
    ],
    faqs: [
      {
        q: "How much business service bond do I need?",
        a: "There is no statutory amount. You choose a coverage level, often based on what your clients or contracts require. We will help you pick the right amount and quote it.",
      },
      {
        q: "Does it protect my business or my client?",
        a: "Your client. It covers them against theft by a covered employee. To protect your own business you would carry insurance, like general liability.",
      },
    ],
  },
];

export function getCommercialBond(slug: string): CommercialBond | undefined {
  return commercialBonds.find((b) => b.slug === slug);
}
