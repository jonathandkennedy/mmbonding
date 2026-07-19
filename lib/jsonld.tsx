/**
 * JSON-LD schema helpers. Bond pages get Service + FAQPage + BreadcrumbList;
 * the site gets Organization + FinancialService. Keep figures sourced from
 * regulatory.ts and identity from site.ts so structured data never drifts
 * from the visible page.
 */
import { site } from "./site";
import { REGULATORY_REVIEWED } from "./regulatory";

const ORG_ID = `${site.url}/#organization`;

/** Major California metros we actively place bonds in (areaServed enrichment). */
const AREA_CITIES: { name: string; sameAs: string }[] = [
  { name: "Los Angeles", sameAs: "https://en.wikipedia.org/wiki/Los_Angeles" },
  { name: "San Diego", sameAs: "https://en.wikipedia.org/wiki/San_Diego" },
  { name: "San Jose", sameAs: "https://en.wikipedia.org/wiki/San_Jose,_California" },
  { name: "San Francisco", sameAs: "https://en.wikipedia.org/wiki/San_Francisco" },
  { name: "Sacramento", sameAs: "https://en.wikipedia.org/wiki/Sacramento,_California" },
  { name: "Fresno", sameAs: "https://en.wikipedia.org/wiki/Fresno,_California" },
  { name: "Long Beach", sameAs: "https://en.wikipedia.org/wiki/Long_Beach,_California" },
  { name: "Anaheim", sameAs: "https://en.wikipedia.org/wiki/Anaheim,_California" },
  { name: "Riverside", sameAs: "https://en.wikipedia.org/wiki/Riverside,_California" },
  { name: "Bakersfield", sameAs: "https://en.wikipedia.org/wiki/Bakersfield,_California" },
];

/** Core service lines for the Organization hasOfferCatalog. */
const CORE_SERVICES: { name: string; description: string }[] = [
  {
    name: "Contractor License Bonds",
    description:
      "The $25,000 CSLB bond plus the LLC worker, qualifier, and disciplinary bonds California contractors need.",
  },
  {
    name: "Contract Bonds",
    description: "Bid, performance, and payment bonds for public and private construction.",
  },
  {
    name: "Hard-to-Place Surety Bonds",
    description: "Placement for bad credit, prior claims, new businesses, and high-risk classes.",
  },
  {
    name: "SBA Surety Bonds",
    description: "Bonding through the SBA guarantee program when standard markets decline.",
  },
  {
    name: "Commercial & Specialty Bonds",
    description:
      "Notary, auto dealer, freight broker, immigration consultant, and dozens of other license and permit bonds.",
  },
];

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["FinancialService", "InsuranceAgency"],
    "@id": ORG_ID,
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    description: site.description,
    slogan: site.tagline,
    foundingDate: site.founded,
    telephone: site.phone.href.replace("tel:", ""),
    email: site.email,
    areaServed: [
      { "@type": "State", name: "California", sameAs: "https://en.wikipedia.org/wiki/California" },
      ...AREA_CITIES.map((c) => ({ "@type": "City", name: c.name, sameAs: c.sameAs })),
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: site.hoursSpec.days,
        opens: site.hoursSpec.opens,
        closes: site.hoursSpec.closes,
      },
    ],
    priceRange: "Premiums typically 1% to 15% of the bond amount",
    knowsAbout: [
      "Surety bonds",
      "Contractor license bonds",
      "Bid bonds",
      "Performance bonds",
      "Payment bonds",
      "Hard-to-place surety bonds",
    ],
    identifier: {
      "@type": "PropertyValue",
      propertyID: "CA DOI License",
      value: site.doiLicense,
    },
    founder: { "@type": "Person", name: site.founder.name, jobTitle: site.founder.title },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Surety Bond Services",
      itemListElement: CORE_SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, description: s.description },
      })),
    },
    sameAs: site.sameAs,
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/about#michael-melshenker`,
    name: site.founder.name,
    image: `${site.url}/images/team/michael-melshenker.webp`,
    jobTitle: `${site.founder.title}, ${site.name}`,
    worksFor: { "@id": ORG_ID },
    knowsAbout: ["Surety bonding", "California contractor licensing", "Hard-to-place underwriting"],
    sameAs: [site.founder.linkedin],
  };
}

export function serviceSchema(opts: { name: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: `${site.url}${opts.url}`,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "State", name: "California" },
    dateModified: REGULATORY_REVIEWED.iso,
  };
}

export type FaqItem = { q: string; a: string };

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function breadcrumbSchema(crumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${site.url}${c.url}`,
    })),
  };
}

/**
 * ItemList for a hub/collection page that lists its members in order. Clarifies
 * the collection to search engines. `url` values are site-relative paths.
 */
export function itemListSchema(
  items: { name: string; url: string }[],
  opts?: { name?: string },
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    ...(opts?.name ? { name: opts.name } : {}),
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: `${site.url}${it.url}`,
    })),
  };
}

/** Render one or more schema objects as a single JSON-LD script tag. */
export function JsonLd({ schema }: { schema: object | object[] }) {
  const json = JSON.stringify(Array.isArray(schema) ? schema : [schema]);
  return (
    <script
      type="application/ld+json"
      // schema is built from typed, in-repo data — no user input
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
