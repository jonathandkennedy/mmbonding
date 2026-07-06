/**
 * Single source of truth for company identity (NAP), licensing, and contact.
 * NAP must match the Google Business Profile exactly. Values marked TODO need
 * confirmation from Michael before launch (see plan §13 "Inputs still needed").
 */
export const site = {
  name: "MM Bonding & Insurance Services, Inc.",
  shortName: "MM Bonding",
  tagline: "Get The Right Bond Fast",
  url: "https://mmbonding.com",
  // IndexNow key (Bing, Yandex, Seznam, Naver, ...). Public by design: it is
  // served at `${url}/${indexNowKey}.txt`. Changing it means renaming that file.
  indexNowKey: "1e3bbed70cd9e39c61d36b3821068a70",
  description:
    "California surety bond broker. Contractor license bonds, bid, performance and payment bonds, and hard-to-place bonds for bad credit and tough cases. Licensed CA DOI #6009105.",
  doiLicense: "6009105",
  founder: {
    name: "Michael Melshenker",
    title: "CEO",
    linkedin: "https://www.linkedin.com/in/mike-melshenker-64869722/",
  },
  // Tracking number is swapped client-side by CallRail; this is the fallback.
  phone: {
    display: "(805) 752-8600",
    href: "tel:+18057528600",
  },
  email: "letstalk@mmbonding.com",
  address: {
    street: "699 Hampshire Rd Ste 107C",
    locality: "Westlake Village",
    region: "CA",
    postalCode: "91361",
    country: "US",
  },
  hours: "Mon-Sat, 9:00am-5:00pm PT",
  // Structured hours for openingHoursSpecification (24h clock, local time).
  hoursSpec: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "17:00",
  },
  // Office coordinates for LocalBusiness geo. Approximate; confirm against the
  // Google Business Profile map pin once live so the schema matches GBP exactly.
  geo: { latitude: 34.1466, longitude: -118.8055 },
  founded: "2022",
  areaServed: "California",
  sameAs: [
    "https://www.linkedin.com/in/mike-melshenker-64869722/",
    // TODO: add GBP profile URL once live
  ] as string[],
  /** Confirmed direct surety appointments. Named as a real trust signal. */
  carriers: [
    "CNA Surety",
    "Merchants Bonding Company",
    "Liberty Mutual Surety",
    "TMHCC Surety",
  ] as string[],
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; blurb?: string }[];
};

/** Primary navigation — kept to a single row at desktop (≤ 5 groups). */
export const primaryNav: NavItem[] = [
  {
    label: "Bonds",
    href: "/contractor-license-bond",
    children: [
      {
        label: "Contractor License Bond",
        href: "/contractor-license-bond",
        blurb: "The $25,000 CSLB bond every California contractor needs.",
      },
      {
        label: "Contract Bonds",
        href: "/contract-bonds",
        blurb: "Bid, performance & payment bonds for public and private work.",
      },
      {
        label: "SBA Surety Bonds",
        href: "/sba-surety-bonds",
        blurb: "Get bonded through the SBA program when standard markets say no.",
      },
      {
        label: "Bond of Qualifying Individual",
        href: "/bond-of-qualifying-individual",
        blurb: "The $25,000 BQI for RME / minority-owner qualifiers.",
      },
      {
        label: "LLC Employee/Worker Bond",
        href: "/llc-employee-worker-bond",
        blurb: "The $100,000 bond required of LLC contractors.",
      },
      {
        label: "Disciplinary Bond",
        href: "/disciplinary-bond",
        blurb: "Reinstate a license after a CSLB disciplinary action.",
      },
      {
        label: "Commercial & Specialty Bonds",
        href: "/commercial-bonds",
        blurb: "Notary, auto dealer, immigration consultant, and more.",
      },
    ],
  },
  {
    label: "Hard-to-Place",
    href: "/hard-to-place-surety-bonds",
  },
  {
    label: "Locations",
    href: "/surety-bonds",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "About",
    href: "/about",
  },
];
