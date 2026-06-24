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

export type CommercialCategory = "Permit & Site Improvement" | "Commercial & Specialty";

export const commercialCategories: CommercialCategory[] = [
  "Permit & Site Improvement",
  "Commercial & Specialty",
];

export type CommercialBond = {
  slug: string;
  /** Defaults to "Commercial & Specialty" when omitted. */
  category?: CommercialCategory;
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
  {
    slug: "freight-broker-bond",
    name: "Freight Broker Bond (BMC-84)",
    shortName: "Freight Broker Bond",
    intro:
      "Freight brokers and forwarders must file a $75,000 BMC-84 surety bond with the FMCSA to get and keep their operating authority. We place them, credit challenges included.",
    amountLabel: "$75,000",
    authority: "FMCSA (federal)",
    statute: "49 U.S.C. §13906",
    whatItIs:
      "The BMC-84 bond guarantees that a freight broker or forwarder meets its financial obligations to the motor carriers and shippers it works with. The FMCSA requires it to issue and maintain broker or forwarder authority. It protects the parties you broker for, not you.",
    whoNeedsIt: [
      "New freight brokers applying for FMCSA authority",
      "Freight forwarders required to file financial security",
      "Brokers renewing or replacing an existing BMC-84",
    ],
    faqs: [
      {
        q: "How much does a freight broker bond cost?",
        a: "You pay a premium that is a percentage of the $75,000, set by underwriting and driven mostly by credit. Strong credit pays the least; we shop markets to find your best rate, including for newer brokers.",
      },
      {
        q: "Can I get a BMC-84 with bad credit?",
        a: "Often, yes. Credit affects the rate, not your eligibility outright. We work the markets that write credit-challenged brokers rather than declining at the door. Underwriting still applies.",
      },
    ],
  },
  {
    slug: "fidelity-bond",
    name: "Fidelity Bond (Employee Dishonesty)",
    shortName: "Fidelity Bond",
    intro:
      "A fidelity bond protects your business from losses caused by employee theft or fraud. Contracts and clients sometimes require it, and many businesses carry it by choice. We place them fast.",
    amountLabel: "Set by your coverage level",
    authority: "Required by contracts, or carried voluntarily",
    whatItIs:
      "A fidelity bond (also called an employee dishonesty bond) reimburses your business if a covered employee steals money, property, or commits fraud against you. Unlike a business service bond, which protects your clients, a fidelity bond protects you, the employer.",
    whoNeedsIt: [
      "Businesses whose employees handle cash, payments, or client funds",
      "Companies a contract or client requires to carry employee-dishonesty coverage",
      "Owners who want to protect the business against internal theft",
    ],
    faqs: [
      {
        q: "What is the difference between a fidelity bond and a business service bond?",
        a: "A fidelity bond protects your business against your own employees' theft. A business service (janitorial) bond protects your clients if your employee steals from them. Many service businesses consider both.",
      },
      {
        q: "How much fidelity coverage do I need?",
        a: "There is no fixed amount. You choose a coverage level based on your exposure or what a contract requires. We will help you size it and quote it.",
      },
    ],
  },
  {
    slug: "subdivision-bond",
    category: "Permit & Site Improvement",
    name: "Subdivision & Site Improvement Bond",
    shortName: "Subdivision Bond",
    intro:
      "Cities and counties require a subdivision (site improvement) bond to guarantee the public improvements in your development get built. We place them for developers and site contractors.",
    amountLabel: "Set by the public agency",
    authority: "Required by the city or county",
    whatItIs:
      "When you develop land, the local agency requires a bond guaranteeing you will complete the required public improvements (streets, curbs, gutters, sewers, drainage) to standard. If the work is not finished, the agency can draw on the bond to complete it. The amount is set by the agency from the engineer's estimate.",
    whoNeedsIt: [
      "Developers and subdividers recording a map",
      "Contractors building the public improvements in a subdivision",
      "Anyone an agency requires to bond site improvements before approval",
    ],
    faqs: [
      {
        q: "How much is a subdivision bond?",
        a: "The bond amount equals the agency's approved cost estimate for the required improvements, so it varies by project. You pay a premium that is a percentage of that amount, set by underwriting.",
      },
      {
        q: "Can a newer developer or builder get one?",
        a: "Often, yes, though larger improvement bonds are underwritten on financials and capacity. We build the program and shop markets, including for credit-challenged and growing builders.",
      },
    ],
  },
  {
    slug: "encroachment-bond",
    category: "Permit & Site Improvement",
    name: "Encroachment Permit Bond",
    shortName: "Encroachment Bond",
    intro:
      "Working in the public right-of-way? Cities, counties, and Caltrans require an encroachment permit bond guaranteeing you restore the area and meet permit conditions. We issue them fast.",
    amountLabel: "Set by the permit",
    authority: "Required by the city, county, or Caltrans",
    whatItIs:
      "An encroachment bond guarantees that work you perform in the public right-of-way (sidewalks, streets, utility cuts) is completed to standard and the area is restored. The permitting agency sets the bond amount as a condition of the encroachment permit.",
    whoNeedsIt: [
      "Contractors and utilities working in the public right-of-way",
      "Anyone pulling an encroachment permit from a city, county, or Caltrans",
    ],
    faqs: [
      {
        q: "How much is an encroachment bond?",
        a: "The agency sets the amount with the permit, based on the scope and the cost to restore the right-of-way. We quote the premium once you have the required amount.",
      },
      {
        q: "How fast can I get one?",
        a: "Encroachment bonds are usually small and quick. Tell us the agency, the amount, and your business details, and we can often turn it around the same day.",
      },
    ],
  },
  {
    slug: "street-improvement-bond",
    category: "Permit & Site Improvement",
    name: "Street Improvement & Grading Bond",
    shortName: "Street Improvement Bond",
    intro:
      "Grading, paving, and street-improvement permits often require a bond guaranteeing the work and any required restoration. We place them for site and grading contractors.",
    amountLabel: "Set by the permit estimate",
    authority: "Required by the local agency",
    whatItIs:
      "These bonds guarantee that permitted grading, paving, or street-improvement work is completed to the agency's standards, including erosion control and restoration. The amount follows the permit's engineer estimate.",
    whoNeedsIt: [
      "Grading, paving, and site-work contractors pulling agency permits",
      "Contractors required to bond improvements as a permit condition",
    ],
    faqs: [
      {
        q: "Is this different from a subdivision bond?",
        a: "They are close cousins. A subdivision bond covers the full set of improvements in a development; a street improvement or grading bond covers the specific permitted work. Both guarantee completion to the agency's standard.",
      },
      {
        q: "How much does it cost?",
        a: "You pay a premium that is a percentage of the bonded amount, set by underwriting. We shop markets for your best rate, newer and credit-challenged contractors included.",
      },
    ],
  },
  {
    slug: "cannabis-bond",
    name: "California Cannabis Surety Bond",
    shortName: "Cannabis Bond",
    intro:
      "Every California cannabis licensee must file a $5,000 surety bond payable to the state. It is a small, fast bond, and we place it for licensees of every type.",
    amountLabel: "$5,000",
    authority: "California Department of Cannabis Control",
    whatItIs:
      "California requires each cannabis license to carry a $5,000 surety bond payable to the state, which covers the cost of destroying cannabis goods if that becomes necessary. It is required to obtain and maintain your license with the Department of Cannabis Control.",
    whoNeedsIt: [
      "Cannabis cultivators, manufacturers, and distributors",
      "Cannabis retailers and microbusinesses",
      "Any California cannabis licensee maintaining a state license",
    ],
    faqs: [
      {
        q: "How much does a cannabis bond cost?",
        a: "The bond amount is $5,000, and you pay only a small annual premium, not the full amount. It is one of the most affordable bonds we place.",
      },
      {
        q: "Do I need a separate bond for each license?",
        a: "Generally each license must carry its own bond. Tell us how many licenses you hold and we will quote them together.",
      },
    ],
  },
  {
    slug: "utility-street-cut-bond",
    category: "Permit & Site Improvement",
    name: "Utility & Street Cut Bond",
    shortName: "Street Cut Bond",
    intro:
      "Cutting into a public street to run or repair utilities? Cities require a street cut bond guaranteeing you restore the pavement to standard. We issue them fast.",
    amountLabel: "Set by the permit",
    authority: "Required by the city or county",
    whatItIs:
      "A street cut or utility bond guarantees that when you open a public street or right-of-way for utility work, you patch and restore it to the agency's standard. The city sets the amount with the permit.",
    whoNeedsIt: [
      "Utility, underground, and excavation contractors cutting public streets",
      "Plumbers and contractors running laterals into the right-of-way",
      "Anyone pulling a street-cut or utility-encroachment permit",
    ],
    faqs: [
      {
        q: "How much is a street cut bond?",
        a: "The agency sets the amount with the permit, based on the cut size and restoration cost. The premium is a small percentage of that, and these bonds are usually quick to issue.",
      },
    ],
  },
  {
    slug: "well-drilling-bond",
    category: "Permit & Site Improvement",
    name: "Water Well Drilling Bond",
    shortName: "Well Drilling Bond",
    intro:
      "County well permits require a water well drilling bond guaranteeing you construct and seal wells to code. We place them for C-57 well contractors.",
    amountLabel: "Set by the county",
    authority: "Required by the county",
    whatItIs:
      "A well drilling bond guarantees that water wells are constructed, sealed, and when needed destroyed per the county's standards and state well standards. The county sets the bond with the drilling permit.",
    whoNeedsIt: [
      "C-57 water well drilling contractors",
      "Pump and well-service contractors a county requires to bond",
    ],
    faqs: [
      {
        q: "Why do counties require a well bond?",
        a: "Wells affect groundwater, so counties require the bond to guarantee proper construction and sealing. The amount is set by the county; we quote the premium once you have it.",
      },
    ],
  },
  {
    slug: "demolition-bond",
    category: "Permit & Site Improvement",
    name: "Demolition Permit Bond",
    shortName: "Demolition Bond",
    intro:
      "Demolition permits often require a bond guaranteeing safe demolition, utility disconnects, and site cleanup. We issue them quickly for demo contractors.",
    amountLabel: "Set by the permit",
    authority: "Required by the city or county",
    whatItIs:
      "A demolition bond guarantees that a permitted demolition is completed safely and the site is cleared and restored per the agency's conditions, including capping utilities and removing debris. The agency sets the amount.",
    whoNeedsIt: [
      "Demolition (C-21) contractors",
      "General contractors pulling demolition permits",
    ],
    faqs: [
      {
        q: "How fast can I get a demolition bond?",
        a: "Usually quickly. Give us the agency, the required amount, and your business details, and we can often turn it around the same day.",
      },
    ],
  },
  {
    slug: "talent-agency-bond",
    name: "California Talent Agency Bond",
    shortName: "Talent Agency Bond",
    intro:
      "California talent agencies must file a $50,000 surety bond to be licensed. We place them for new and established agencies.",
    amountLabel: "$50,000",
    authority: "California Labor Commissioner",
    statute: "Labor Code §1700.15",
    whatItIs:
      "The talent agency bond protects artists and clients against violations of California's Talent Agencies Act. It is required to obtain and keep a talent agency license from the Labor Commissioner.",
    whoNeedsIt: [
      "New talent agencies applying for a California license",
      "Agencies renewing their license",
    ],
    faqs: [
      {
        q: "How much does the talent agency bond cost?",
        a: "You pay a premium that is a percentage of the $50,000, set by underwriting and driven mostly by credit. We shop markets for your best rate.",
      },
    ],
  },
  {
    slug: "debt-collector-bond",
    name: "California Debt Collector Bond",
    shortName: "Debt Collector Bond",
    intro:
      "California licenses debt collectors, and the license requires a $25,000 surety bond filed with the DFPI. We place them for new and renewing licensees.",
    amountLabel: "$25,000",
    authority: "California DFPI",
    statute: "Debt Collection Licensing Act",
    whatItIs:
      "Under California's Debt Collection Licensing Act, debt collectors must be licensed by the Department of Financial Protection and Innovation and file a $25,000 surety bond protecting consumers.",
    whoNeedsIt: [
      "Debt collectors and collection agencies licensing with the DFPI",
      "Licensees renewing under the Debt Collection Licensing Act",
    ],
    faqs: [
      {
        q: "Is this the same as an old collection agency bond?",
        a: "California now licenses debt collectors through the DFPI under the Debt Collection Licensing Act, with a $25,000 bond. We place the current bond for new and renewing licensees.",
      },
    ],
  },
  {
    slug: "seller-of-travel-bond",
    name: "California Seller of Travel Bond",
    shortName: "Seller of Travel Bond",
    intro:
      "California sellers of travel must register and meet the state's consumer-protection requirements, which can include a surety bond. We help you place it.",
    amountLabel: "Varies by the program",
    authority: "California Attorney General, Seller of Travel program",
    whatItIs:
      "California's Seller of Travel law protects consumers who buy travel. Registered sellers must meet the program's consumer-protection requirements, and a surety bond can be part of satisfying them. We quote the bond for your situation.",
    whoNeedsIt: [
      "Travel agencies and sellers of travel registering in California",
      "Sellers a contract or the program requires to post a bond",
    ],
    faqs: [
      {
        q: "Do all sellers of travel need a bond?",
        a: "Not always; the Seller of Travel program has specific requirements and options. Tell us your situation and we will confirm whether a bond fits and quote it.",
      },
    ],
  },
  {
    slug: "farm-labor-contractor-bond",
    name: "California Farm Labor Contractor Bond",
    shortName: "Farm Labor Contractor Bond",
    intro:
      "California farm labor contractors must be licensed and post a surety bond protecting workers' wages. We place them, ag credit challenges included.",
    amountLabel: "Set by the FLC license",
    authority: "California Labor Commissioner",
    whatItIs:
      "The farm labor contractor (FLC) bond guarantees payment of wages and compliance with California's farm labor laws. It is required to hold an FLC license from the Labor Commissioner. The required amount is set by the licensing requirement.",
    whoNeedsIt: [
      "Farm labor contractors licensing in California",
      "FLC licensees renewing their registration",
    ],
    faqs: [
      {
        q: "Can a farm labor contractor with thin credit get bonded?",
        a: "Often, yes. Ag and seasonal businesses are squarely in our hard-to-place wheelhouse. We shop markets that write credit-challenged files rather than declining at the door.",
      },
    ],
  },
];

export function getCommercialBond(slug: string): CommercialBond | undefined {
  return commercialBonds.find((b) => b.slug === slug);
}
