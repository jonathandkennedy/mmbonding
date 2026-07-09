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
} as const satisfies Record<string, Stat>;

export type StatKey = keyof typeof stats;

/** Pull a set of stats by key, in order, for a StatGrid. */
export function pickStats(keys: StatKey[]): Stat[] {
  return keys.map((k) => stats[k]);
}
