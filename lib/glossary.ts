/**
 * Surety bond glossary. A California-anchored, interlinked reference that the
 * national competitors' generic glossaries don't localize. Powers
 * /surety-bond-glossary and its DefinedTermSet schema. Where a term maps to a
 * money page, `link` drives internal linking (the point of a glossary).
 */

export type GlossaryTerm = {
  term: string;
  /** Anchor id. */
  slug: string;
  def: string;
  /** Optional internal link to the relevant page. */
  link?: { label: string; href: string };
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Aggregate limit",
    slug: "aggregate-limit",
    def: "The total amount of bonded work a surety will back for you at one time, across all open projects. Together with the single limit, it defines your bonding capacity.",
    link: { label: "Bonding capacity", href: "/resources/surety-bond-capacity" },
  },
  {
    term: "A.M. Best rating",
    slug: "am-best-rating",
    def: "A financial-strength grade for insurers and sureties. Obligees on public and larger private work often require an A-rated surety. We place your bond with strong, admitted markets.",
  },
  {
    term: "Bid bond",
    slug: "bid-bond",
    def: "A contract bond that guarantees you will honor your bid and furnish the performance and payment bonds if you win. Usually carries no separate premium as part of your program.",
    link: { label: "Bid bonds", href: "/contract-bonds/bid-bond" },
  },
  {
    term: "Bond amount (penal sum)",
    slug: "penal-sum",
    def: "The face amount of the bond, the most a valid claim can pay out. It is not what you pay. Your cost is the premium, a percentage of this figure.",
  },
  {
    term: "Bonding capacity",
    slug: "bonding-capacity",
    def: "How much bonded work a surety will support for you, expressed as a single-job limit and an aggregate limit. Set from your financials, experience, and track record.",
    link: { label: "Surety bonding capacity", href: "/resources/surety-bond-capacity" },
  },
  {
    term: "Cancellation",
    slug: "cancellation",
    def: "Ending a bond before its term is up. Many bonds are non-cancelable or refund on a prorated basis, and license bonds usually require notice to the obligee. Terms vary by bond.",
    link: { label: "Refunds & cancellations", href: "/resources/surety-bond-refunds-and-cancellations" },
  },
  {
    term: "Claim",
    slug: "claim",
    def: "A demand for payment under a bond, made by the obligee or a protected party. If the surety pays a valid claim, you reimburse the surety under your indemnity agreement.",
    link: { label: "Claims & lapses", href: "/resources/contractor-bond-claims-and-lapses" },
  },
  {
    term: "Collateral",
    slug: "collateral",
    def: "Security a surety may require on a higher-risk file, such as cash or an irrevocable letter of credit, held against potential loss and released when the risk clears.",
    link: { label: "Surety bond collateral", href: "/resources/surety-bond-collateral" },
  },
  {
    term: "Commercial bond",
    slug: "commercial-bond",
    def: "A broad category of non-contract surety bonds required by a government agency or by contract, such as license, permit, notary, and court bonds.",
    link: { label: "Commercial & specialty bonds", href: "/commercial-bonds" },
  },
  {
    term: "Contract bond",
    slug: "contract-bond",
    def: "A surety bond tied to a specific construction contract: bid, performance, and payment bonds. Guarantees the job and the payment of subs and suppliers.",
    link: { label: "Contract bonds", href: "/contract-bonds" },
  },
  {
    term: "Contractor license bond",
    slug: "contractor-license-bond",
    def: "The $25,000 surety bond every CSLB-licensed California contractor must carry under BPC §7071.6. Protects consumers and employees, not the contractor.",
    link: { label: "Contractor license bond", href: "/contractor-license-bond" },
  },
  {
    term: "Court (judicial) bond",
    slug: "court-bond",
    def: "A bond a court requires in a legal proceeding, such as a probate, guardianship, conservatorship, or appeal bond, guaranteeing a party performs a court-ordered duty.",
    link: { label: "Court & probate bonds", href: "/commercial-bonds/probate-bond" },
  },
  {
    term: "CSLB",
    slug: "cslb",
    def: "The Contractors State License Board, California's licensing authority for contractors. It sets license requirements and receives the contractor license bond on Form 13b-1.",
  },
  {
    term: "CA DOI",
    slug: "ca-doi",
    def: "The California Department of Insurance, which licenses surety bond brokers. MM Bonding holds CA DOI License #6009105.",
  },
  {
    term: "Disciplinary bond",
    slug: "disciplinary-bond",
    def: "A bond the CSLB Registrar requires to reinstate a license after a disciplinary action. At least $25,000, up to ten times the license bond, held for at least two years.",
    link: { label: "Disciplinary bond", href: "/disciplinary-bond" },
  },
  {
    term: "Fidelity bond",
    slug: "fidelity-bond",
    def: "Coverage that protects a business against loss from employee dishonesty or theft. Unlike most surety bonds, it protects the bondholder rather than a third party.",
    link: { label: "Fidelity bonds", href: "/commercial-bonds/fidelity-bond" },
  },
  {
    term: "Funds control",
    slug: "funds-control",
    def: "A neutral third party that disburses a job's funds to labor and suppliers as work progresses. It lowers the surety's risk and can unlock a bond a file couldn't get alone.",
    link: { label: "Funds control", href: "/resources/funds-control-for-contractors" },
  },
  {
    term: "Indemnity agreement",
    slug: "indemnity-agreement",
    def: "The contract you sign with the surety agreeing to reimburse it for any valid claim it pays. Owners typically sign a personal guarantee as indemnitors.",
    link: { label: "Indemnity agreement, explained", href: "/resources/surety-bond-indemnity-agreement" },
  },
  {
    term: "Indemnitor",
    slug: "indemnitor",
    def: "A person or company that signs the indemnity agreement and is responsible for reimbursing the surety. Business owners and sometimes their spouses sign as indemnitors.",
  },
  {
    term: "License bond",
    slug: "license-bond",
    def: "A bond required to hold a license, guaranteeing you follow the laws that govern your trade. The contractor license bond is the best-known California example.",
    link: { label: "Contractor license bond", href: "/contractor-license-bond" },
  },
  {
    term: "Obligee",
    slug: "obligee",
    def: "The party a bond protects and who can make a claim, such as the CSLB, a project owner, or a government agency. One of the three parties to every surety bond.",
  },
  {
    term: "Payment bond",
    slug: "payment-bond",
    def: "A contract bond that guarantees subcontractors, laborers, and suppliers get paid. Usually issued alongside a performance bond on public and larger private work.",
    link: { label: "Payment bonds", href: "/contract-bonds/payment-bond" },
  },
  {
    term: "Performance bond",
    slug: "performance-bond",
    def: "A contract bond that guarantees the project owner you will complete the work per the contract. If you default, the surety ensures completion, up to the bond amount.",
    link: { label: "Performance bonds", href: "/contract-bonds/performance-bond" },
  },
  {
    term: "Permit bond",
    slug: "permit-bond",
    def: "A bond a city, county, or agency requires to pull a permit, guaranteeing you meet the permit's conditions, such as restoring the public right-of-way after the work.",
    link: { label: "Permit bond requirements", href: "/resources/california-permit-bond-requirements" },
  },
  {
    term: "Premium",
    slug: "premium",
    def: "What you actually pay for a bond: a percentage of the bond amount, set by underwriting and driven mostly by credit. Not the bond amount itself.",
    link: { label: "Estimate your premium", href: "/surety-bond-cost-calculator" },
  },
  {
    term: "Principal",
    slug: "principal",
    def: "The party who buys the bond and must perform the underlying obligation, that is, you, the contractor or business. One of the three parties to a surety bond.",
  },
  {
    term: "Rider",
    slug: "rider",
    def: "An amendment to an existing bond, used to change the bond amount, the name, or another term without issuing a brand-new bond.",
  },
  {
    term: "Soft vs. hard credit pull",
    slug: "credit-pull",
    def: "Most surety quotes use a soft credit pull, which does not affect your score. A hard pull, which can, is rarely needed for standard license bonds.",
    link: { label: "How credit checks work", href: "/resources/how-surety-bond-credit-checks-work" },
  },
  {
    term: "Surety",
    slug: "surety",
    def: "The company that backs the bond and pays valid claims, then seeks reimbursement from you. The third party, alongside the principal and the obligee.",
  },
  {
    term: "Surety bond",
    slug: "surety-bond",
    def: "A three-party guarantee among the principal, the obligee, and the surety. It protects the obligee and the public, not the principal, and you repay any valid claim.",
    link: { label: "How surety bonds work", href: "/how-surety-bonds-work" },
  },
  {
    term: "T-listing (Treasury listed)",
    slug: "t-listing",
    def: "A surety approved by the U.S. Treasury (listed in Circular 570) with a set underwriting limit. Federal contracts require a Treasury-listed surety.",
  },
  {
    term: "Underwriting",
    slug: "underwriting",
    def: "How a surety evaluates your bond: reviewing credit, experience, and financials to set approval, price, and any conditions. It applies to every bond.",
  },
];
