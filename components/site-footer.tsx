import Link from "next/link";
import { Phone, Clock, MapPin } from "lucide-react";
import { Wordmark } from "./wordmark";
import { Container } from "./ui/container";
import { site, primaryNav } from "@/lib/site";
import { bonds } from "@/lib/regulatory";

const footerCols: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Bonds",
    links: [
      { label: bonds["contractor-license-bond"].name, href: bonds["contractor-license-bond"].href },
      { label: "Contract Bonds", href: "/contract-bonds" },
      { label: bonds["bond-of-qualifying-individual"].name, href: bonds["bond-of-qualifying-individual"].href },
      { label: bonds["llc-employee-worker-bond"].name, href: bonds["llc-employee-worker-bond"].href },
      { label: bonds["disciplinary-bond"].name, href: bonds["disciplinary-bond"].href },
    ],
  },
  {
    heading: "Hard-to-Place",
    links: [
      { label: "Bad Credit & Tough Cases", href: "/hard-to-place-surety-bonds" },
      { label: "No-Credit-Check Bond", href: "/hard-to-place-surety-bonds/no-credit-check-contractor-bond" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Get a Quote", href: "/get-a-quote" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-navy-950 text-navy-100">
      <Container size="wide" className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
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
              <li className="flex items-center gap-2.5 text-navy-200">
                <MapPin className="size-4 shrink-0 text-azure-400" aria-hidden="true" />
                Serving all of {site.areaServed}
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
          <div className="mt-5 flex flex-col gap-3 text-xs text-navy-300 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <p className="font-mono">{site.tagline}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
