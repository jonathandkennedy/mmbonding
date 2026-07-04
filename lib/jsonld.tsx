/**
 * JSON-LD schema helpers. Bond pages get Service + FAQPage + BreadcrumbList;
 * the site gets Organization + FinancialService. Keep figures sourced from
 * regulatory.ts and identity from site.ts so structured data never drifts
 * from the visible page.
 */
import { site } from "./site";
import { REGULATORY_REVIEWED } from "./regulatory";

const ORG_ID = `${site.url}/#organization`;

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
    telephone: site.phone.href.replace("tel:", ""),
    email: site.email,
    areaServed: { "@type": "State", name: "California" },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
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
    sameAs: site.sameAs,
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/about#michael-melshenker`,
    name: site.founder.name,
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
