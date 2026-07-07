import Link from "next/link";
import { ArrowRight, Phone, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Slashes } from "@/components/slashes";
import { site } from "@/lib/site";

const helpfulLinks = [
  { label: "Contractor License Bond", href: "/contractor-license-bond" },
  { label: "Contract Bonds", href: "/contract-bonds" },
  { label: "Hard-to-Place Bonds", href: "/hard-to-place-surety-bonds" },
  { label: "Commercial & Specialty", href: "/commercial-bonds" },
  { label: "Locations", href: "/surety-bonds" },
  { label: "Resources", href: "/resources" },
];

export default function NotFound() {
  return (
    <section className="bg-surface">
      <Container
        size="wide"
        className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center"
      >
        <Slashes size="lg" className="mb-6" />
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl">
          We couldn&apos;t find that page.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. If you need a bond,
          the fastest way forward is a quick quote or a call to a licensed California broker.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/get-a-quote" size="lg">
            Get a Quote
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
          <Button href={site.phone.href} variant="outline" size="lg" data-callrail="phone">
            <Phone className="size-4 text-azure-500" aria-hidden="true" />
            <span className="tabular">{site.phone.display}</span>
          </Button>
        </div>
        <div className="mt-12 w-full max-w-2xl border-t border-ink-100 pt-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted">Popular pages</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2.5">
            {helpfulLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-semibold text-navy-800 transition-colors hover:border-azure-300 hover:text-azure-700"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-azure-600 hover:text-azure-700"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to home
          </Link>
        </div>
      </Container>
    </section>
  );
}
