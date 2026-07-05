import Link from "next/link";
import { Phone, Clock, MapPin } from "lucide-react";
import { Wordmark } from "./wordmark";
import { Container } from "./ui/container";
import { PreferredSource } from "./preferred-source";
import { site } from "@/lib/site";
import { bonds } from "@/lib/regulatory";
import { metros } from "@/lib/locations";
import { insuranceProducts } from "@/lib/insurance";

const footerCols: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Bonds",
    links: [
      { label: bonds["contractor-license-bond"].name, href: bonds["contractor-license-bond"].href },
      { label: "Contract Bonds", href: "/contract-bonds" },
      { label: "SBA Surety Bonds", href: "/sba-surety-bonds" },
      { label: "Fast & Same-Day", href: "/fast-surety-bonds" },
      { label: bonds["llc-employee-worker-bond"].name, href: bonds["llc-employee-worker-bond"].href },
      { label: bonds["disciplinary-bond"].name, href: bonds["disciplinary-bond"].href },
      { label: "Commercial & Specialty", href: "/commercial-bonds" },
      { label: "Bonds by Trade", href: "/contractor-license-bond/trades" },
      { label: "Hard-to-Place", href: "/hard-to-place-surety-bonds" },
    ],
  },
  {
    heading: "Locations",
    links: [
      ...metros.slice(0, 4).map((m) => ({
        label: m.name.replace(/^the /, ""),
        href: `/surety-bonds/${m.slug}`,
      })),
      { label: "All locations", href: "/surety-bonds" },
    ],
  },
  {
    heading: "Insurance",
    links: [
      ...insuranceProducts.map((p) => ({ label: p.shortName, href: `/insurance/${p.slug}` })),
      { label: "Bonding vs Insurance", href: "/bonding-vs-insurance" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Guides", href: "/resources" },
      { label: "How Bonds Work", href: "/how-surety-bonds-work" },
      { label: "Glossary", href: "/surety-bond-glossary" },
      { label: "Cost Calculator", href: "/surety-bond-cost-calculator" },
      { label: "Get Licensed", href: "/contractor-license-school" },
      { label: "Why a Broker", href: "/why-use-a-surety-broker" },
      { label: "Get a Quote", href: "/get-a-quote" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-navy-950 text-navy-100">
      <Container size="wide" className="py-16">
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          <div>
            <Wordmark tone="onDark" withTagline />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-200">
              A California surety broker that places the bonds the robots decline. When you qualify,
              we issue fast. When you do not, a real underwriter shops the market until it is done.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-azure-400" aria-hidden="true" />
                <a href={site.phone.href} data-callrail="phone" className="font-semibold text-white hover:text-azure-300">
                  {site.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-navy-200">
                <Clock className="size-4 shrink-0 text-azure-400" aria-hidden="true" />
                {site.hours}
              </li>
              <li className="flex items-start gap-2.5 text-navy-200">
                <MapPin className="mt-0.5 size-4 shrink-0 text-azure-400" aria-hidden="true" />
                <span>
                  {site.address.street}, {site.address.locality}, {site.address.region}{" "}
                  {site.address.postalCode}
                  <span className="mt-0.5 block text-navy-300">Serving all of {site.areaServed}</span>
                </span>
              </li>
            </ul>
          </div>

          {footerCols.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h2 className="font-display text-sm font-bold uppercase tracking-wider text-navy-300">
                {col.heading}
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-navy-100 transition-colors hover:text-azure-300">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-7">
          <p className="text-xs leading-relaxed text-navy-300">
            Bonds placed through {site.name}, CA DOI License #{site.doiLicense}. Bond amounts,
            statutes, and premiums shown are for general guidance and verified against CSLB and CA
            DOI sources. Underwriting applies to every bond. Insurance products are routed to
            licensed partner agencies; {site.shortName} does not underwrite insurance.
          </p>
          <p className="mt-4 text-xs text-navy-300">
            <PreferredSource variant="inline" className="font-medium text-navy-100" /> to keep our
            guides showing up for you in Google&apos;s AI results.
          </p>
          <div className="mt-5 flex flex-col gap-4 text-xs text-navy-300 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link href="/privacy-policy" className="transition-colors hover:text-azure-300">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="transition-colors hover:text-azure-300">
                Terms of Service
              </Link>
              <span className="font-mono text-navy-400">{site.tagline}</span>
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  );
}
