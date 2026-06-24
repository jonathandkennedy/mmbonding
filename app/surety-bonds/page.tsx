import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/reveal";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";
import { metros } from "@/lib/locations";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "California Surety Bonds by Location",
  description:
    "Surety bonds for contractors across California: Los Angeles, Orange County, the Inland Empire, San Diego, the Bay Area, Sacramento, and Fresno. Licensed broker, CA DOI #6009105.",
  alternates: { canonical: "/surety-bonds" },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Locations", url: "/surety-bonds" },
        ])}
      />
      <section className="border-b border-ink-100 bg-surface">
        <Container size="wide" className="py-14 lg:py-16">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-muted">
              <li>
                <Link href="/" className="hover:text-azure-600">
                  Home
                </Link>
              </li>
              <ChevronRight className="size-3.5 text-ink-300" aria-hidden="true" />
              <li className="font-medium text-navy-800" aria-current="page">
                Locations
              </li>
            </ol>
          </nav>
          <div className="mt-6 max-w-2xl">
            <Eyebrow>Statewide, served locally</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl">
              California surety bonds, in your market.
            </h1>
            <p className="mt-4 text-lg text-muted">
              We bond contractors across {site.areaServed}. Find your metro for local context, or get
              a quote from anywhere in the state.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container size="wide">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {metros.map((m, i) => (
              <Reveal as="div" key={m.slug} delay={(i % 3) * 60}>
                <Link
                  href={`/surety-bonds/${m.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-6 transition-[box-shadow,border-color] duration-200 hover:border-azure-300 hover:shadow-md"
                >
                  <div className="flex items-center gap-2 text-azure-500">
                    <MapPin className="size-5" aria-hidden="true" />
                    <span className="font-mono text-xs uppercase tracking-wider text-azure-700">
                      {m.region}
                    </span>
                  </div>
                  <h2 className="mt-3 font-display text-xl font-bold tracking-tight text-navy-900">
                    {m.name}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-muted">{m.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-azure-600 transition-transform duration-200 ease-out group-hover:translate-x-1">
                    Surety bonds in {m.name}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
