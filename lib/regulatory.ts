/**
 * REGULATORY FACTS — single source of truth.
 *
 * Every dollar amount, statute, and form number on the site comes from here.
 * Never hardcode a regulatory figure inline in a page. A rule change is a
 * one-line edit here.
 *
 * VERIFY against cslb.ca.gov and the CA DOI at build and quarterly, then bump
 * REGULATORY_REVIEWED below.
 */

export const REGULATORY_REVIEWED = {
  /** Human-readable "Updated" label shown in bylines. */
  label: "June 2026",
  /** ISO date for schema dateModified. */
  iso: "2026-06-01",
} as const;

export const facts = {
  /** CA contractor license bond — SB 607, effective Jan 1, 2023. */
  licenseBondAmount: 25000,
  licenseBondStatute: "BPC §7071.6",
  licenseBondForm: "CSLB 13b-1",

  /** Additional bond required of LLC contractors (BPC §7071.6.5). */
  llcWorkerBondAmount: 100000,
  llcWorkerBondStatute: "BPC §7071.6.5",

  /** Bond of Qualifying Individual (RME, or RMO owning <10% of stock). */
  bqiAmount: 25000,
  bqiStatute: "BPC §7071.9",

  /** Disciplinary bond — amount set by the Registrar. */
  disciplinaryMin: 25000,
  disciplinaryMaxMultiple: 10, // up to 10× the license bond
  disciplinaryMinYears: 2,

  /** Premium guidance (credit-driven). Display as a range, not a promise. */
  licensePremiumRange: { lowPct: 1, highPct: 15 },

  /** Surety e-files with CSLB; allow this window. */
  filingWindow: "24 to 48 business hours",

  /** Largest licensee population in the U.S. — authority framing. */
  caActiveLicensees: 325000,
} as const;

/**
 * SBA Surety Bond Guarantee (SBG) Program — FEDERAL figures, not CA. The SBA
 * guarantees a share of the surety's loss so sureties can bond small, new, and
 * credit-challenged contractors. Verify against sba.gov/funding-programs/surety-bonds
 * at build and quarterly (statutory limits adjust). Source: SBA.gov, 2024 increase.
 */
export const sba = {
  /** Max contract size the SBA will guarantee a bond for. */
  contractLimit: 9_000_000,
  /** Higher limit for federal contracts when a contracting officer certifies. */
  federalContractLimit: 14_000_000,
  /** SBA covers this share of a surety's loss for most contracts. */
  guaranteeLowPct: 80,
  /** Higher share: contracts up to the threshold below, and for 8(a)/HUBZone/veteran/disadvantaged firms. */
  guaranteeHighPct: 90,
  guaranteeHighThreshold: 100_000,
} as const;

export type BondKey =
  | "contractor-license-bond"
  | "bid-bond"
  | "performance-bond"
  | "payment-bond"
  | "bond-of-qualifying-individual"
  | "llc-employee-worker-bond"
  | "disciplinary-bond";

export type BondDef = {
  key: BondKey;
  /** Site-relative URL. */
  href: string;
  /** Short name used in nav, cards, breadcrumbs. */
  name: string;
  /** One-line plain-language summary. */
  summary: string;
  /** Fixed face amount, when statutory. Null = project-based / variable. */
  amount: number | null;
  /** Amount caption for variable bonds (e.g. "Set by the contract"). */
  amountCaption?: string;
  statute?: string;
  form?: string;
  /** Who is required to carry it. */
  whoNeedsIt: string;
};

/**
 * Canonical bond catalog. Pages and cards render from these so names,
 * amounts, and statutes stay consistent everywhere.
 */
export const bonds: Record<BondKey, BondDef> = {
  "contractor-license-bond": {
    key: "contractor-license-bond",
    href: "/contractor-license-bond",
    name: "Contractor License Bond",
    summary:
      "The $25,000 bond every licensed California contractor must carry under BPC §7071.6.",
    amount: facts.licenseBondAmount,
    statute: facts.licenseBondStatute,
    form: facts.licenseBondForm,
    whoNeedsIt:
      "Every CSLB-licensed contractor, new, renewing, or reactivating. No exemptions.",
  },
  "bid-bond": {
    key: "bid-bond",
    href: "/contract-bonds/bid-bond",
    name: "Bid Bond",
    summary:
      "Guarantees you will honor your bid and furnish the required bonds if awarded the job.",
    amount: null,
    amountCaption: "Typically 5 to 10% of the bid",
    whoNeedsIt: "Contractors bidding public works and most private projects.",
  },
  "performance-bond": {
    key: "performance-bond",
    href: "/contract-bonds/performance-bond",
    name: "Performance Bond",
    summary:
      "Guarantees the project owner that the work will be completed per the contract.",
    amount: null,
    amountCaption: "Up to 100% of the contract",
    whoNeedsIt: "Contractors awarded bonded public or private construction work.",
  },
  "payment-bond": {
    key: "payment-bond",
    href: "/contract-bonds/payment-bond",
    name: "Payment Bond",
    summary:
      "Guarantees subcontractors and suppliers are paid. Usually paired with a performance bond.",
    amount: null,
    amountCaption: "Up to 100% of the contract",
    whoNeedsIt: "Prime contractors on public works and larger private jobs.",
  },
  "bond-of-qualifying-individual": {
    key: "bond-of-qualifying-individual",
    href: "/bond-of-qualifying-individual",
    name: "Bond of Qualifying Individual",
    summary:
      "A $25,000 bond required when a license is qualified by an RME, or an RMO owning under 10%.",
    amount: facts.bqiAmount,
    statute: facts.bqiStatute,
    whoNeedsIt:
      "Contractors qualified by a Responsible Managing Employee or minority-owner RMO.",
  },
  "llc-employee-worker-bond": {
    key: "llc-employee-worker-bond",
    href: "/llc-employee-worker-bond",
    name: "LLC Employee/Worker Bond",
    summary:
      "The $100,000 bond LLC contractors must carry in addition to the $25,000 license bond.",
    amount: facts.llcWorkerBondAmount,
    statute: facts.llcWorkerBondStatute,
    whoNeedsIt: "Every contractor licensed as an LLC, protecting employee wages and benefits.",
  },
  "disciplinary-bond": {
    key: "disciplinary-bond",
    href: "/disciplinary-bond",
    name: "Disciplinary Bond",
    summary:
      "Required to reinstate a license after a CSLB disciplinary action. Amount set by the Registrar.",
    amount: null,
    amountCaption: "≥ $25,000, up to 10× the license bond",
    whoNeedsIt: "Contractors reinstating a suspended or revoked license.",
  },
};

export const contractBondKeys: BondKey[] = ["bid-bond", "performance-bond", "payment-bond"];
