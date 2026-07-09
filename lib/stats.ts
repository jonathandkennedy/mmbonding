/**
 * VETTED STATISTICS REGISTRY - single source of truth for cited data points.
 *
 * Every externally-sourced number used in stat callouts, charts, and prose
 * comes from here, each with a named source and URL so provenance is explicit
 * (content rule 6: verify external figures, state provenance). Statutory /
 * regulatory dollar amounts live in `regulatory.ts`; this file is for the
 * market, industry, and threshold data that gives pages fact density.
 *
 * VERIFY sources at build and quarterly. Do not add a number without a source.
 */

export type Source = {
  /** Short label shown in citations, e.g. "SFAA" or "CSLB". */
  name: string;
  /** Public URL backing the figure. */
  url: string;
};

export type Stat = {
  id: string;
  /** Display string for the headline number, e.g. "$8.6B" or "10%". */
  value: string;
  /** Short caption under the number. Keep it tight. */
  label: string;
  /** Provenance for the figure. */
  source: Source;
  /** Year or vintage of the figure, when relevant. */
  year?: string;
};

export const sources = {
  cslb: { name: "CSLB", url: "https://www.cslb.ca.gov/" },
  sfaa: { name: "SFAA", url: "https://surety.org/research-resources/research-statistics/" },
  sba: { name: "SBA", url: "https://www.sba.gov/funding-programs/surety-bonds" },
  far: { name: "Acquisition.gov (FAR 28.102)", url: "https://www.acquisition.gov/far/28.102-1" },
  caLeg: { name: "CA Public Contract Code", url: "https://leginfo.legislature.ca.gov/" },
  bpc: { name: "CA Business & Professions Code", url: "https://leginfo.legislature.ca.gov/" },
  bondExchange: { name: "BondExchange", url: "https://www.bondexchange.com/are-surety-bond-premiums-refundable/" },
  suretyBondsCom: { name: "SuretyBonds.com", url: "https://www.suretybonds.com/edu/surety-bond-premium-financing" },
  irs: { name: "IRS Pub. 535", url: "https://www.irs.gov/pub/irs-prior/p535--2022.pdf" },
  dcc: { name: "CA Dept. of Cannabis Control", url: "https://www.cannabis.ca.gov/resources/dcc-forms/form-8113/" },
  dir: { name: "CA DIR", url: "https://www.dir.ca.gov/public-works/contractor-registration.html" },
  bls: { name: "U.S. BLS", url: "https://www.bls.gov/bdm/bdmage.htm" },
} as const satisfies Record<string, Source>;

/** Keyed registry so pages reference a stat by id and never retype a number. */
export const stats = {
  caContractors: {
    id: "caContractors",
    value: "~290,000",
    label: "Licensed California contractors, across 44 classifications",
    source: sources.cslb,
    year: "2025",
  },
  usSuretyPremium: {
    id: "usSuretyPremium",
    value: "$8.6B",
    label: "U.S. surety direct written premium",
    source: sources.sfaa,
    year: "2022",
  },
  caLicenseBond: {
    id: "caLicenseBond",
    value: "$25,000",
    label: "California contractor license bond, required since Jan 1, 2023",
    source: sources.bpc,
    year: "2023",
  },
  priorLicenseBond: {
    id: "priorLicenseBond",
    value: "$15,000",
    label: "Prior license bond amount, before the 2023 increase",
    source: sources.bpc,
  },
  bidSecurity: {
    id: "bidSecurity",
    value: "10%",
    label: "Minimum bid security on California public works",
    source: sources.caLeg,
  },
  millerActThreshold: {
    id: "millerActThreshold",
    value: "$150,000",
    label: "Federal contract size that requires performance and payment bonds",
    source: sources.far,
  },
  sbaContractLimit: {
    id: "sbaContractLimit",
    value: "$9M",
    label: "Contract size the SBA will back a bond for ($14M on federal work)",
    source: sources.sba,
  },
  sbaGuarantee: {
    id: "sbaGuarantee",
    value: "80-90%",
    label: "Share of a surety's loss the SBA guarantees",
    source: sources.sba,
  },
  llcWorkerBond: {
    id: "llcWorkerBond",
    value: "$100,000",
    label: "Additional worker bond required of LLC contractors",
    source: sources.bpc,
  },
  minEarnedPremium: {
    id: "minEarnedPremium",
    value: "$100",
    label: "Common minimum-earned premium a surety keeps on a mid-term cancellation",
    source: sources.bondExchange,
  },
  cancellationNotice: {
    id: "cancellationNotice",
    value: "30-60 days",
    label: "Typical cancellation notice period that extends the surety's liability",
    source: sources.bondExchange,
  },
  financeDownPayment: {
    id: "financeDownPayment",
    value: "30-40%",
    label: "Typical down payment to finance a surety bond premium",
    source: sources.suretyBondsCom,
  },
  financeInstallments: {
    id: "financeInstallments",
    value: "4-6",
    label: "Monthly installments a financed premium is usually split into",
    source: sources.suretyBondsCom,
  },
  premiumDeductible: {
    id: "premiumDeductible",
    value: "100%",
    label: "Qualifying single-year bond premium generally deductible as a business expense",
    source: sources.irs,
  },
  contractorExperience: {
    id: "contractorExperience",
    value: "4 years",
    label: "Journey-level experience the CSLB generally requires to qualify for a license",
    source: sources.cslb,
  },
  cslbAppFee: {
    id: "cslbAppFee",
    value: "$450",
    label: "CSLB license application processing fee",
    source: sources.cslb,
  },
  cannabisBond: {
    id: "cannabisBond",
    value: "$5,000",
    label: "California state cannabis licensee surety bond, per licensed premises",
    source: sources.dcc,
  },
  dirRegistrationFee: {
    id: "dirRegistrationFee",
    value: "$400",
    label: "Annual California DIR public works contractor registration fee",
    source: sources.dir,
  },
  constructionSurvival: {
    id: "constructionSurvival",
    value: "~80%",
    label: "New U.S. construction businesses that survive their first year",
    source: sources.bls,
  },
} as const satisfies Record<string, Stat>;

export type StatKey = keyof typeof stats;

/** Pull a set of stats by key, in order, for a StatGrid. */
export function pickStats(keys: StatKey[]): Stat[] {
  return keys.map((k) => stats[k]);
}
