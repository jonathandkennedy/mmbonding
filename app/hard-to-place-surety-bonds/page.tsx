import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  ChevronRight,
  CreditCard,
  FileWarning,
  Sprout,
  TriangleAlert,
  Gavel,
  ShieldCheck,
  Check,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/reveal";
import { Slashes } from "@/components/slashes";
import { Faq } from "@/components/faq";
import { ReviewedBy } from "@/components/reviewed-by";
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/jsonld";
import { site } from "@/lib/site";
import { hreflangFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Hard-to-Place & Bad Credit Surety Bonds",
  description:
    "Declined elsewhere? We place hard-to-place surety bonds: bad credit, prior claims, new contractors, and high-risk classes. A licensed California broker that shops multiple markets. CA DOI #6009105.",
  alternates: {
    canonical: "/hard-to-place-surety-bonds",
    languages: hreflangFor("/hard-to-place-surety-bonds", "/es/fianzas-mal-credito"),
  },
};

const weePlace = [
  { icon: CreditCard, title: "Bad or no credit", body: "Low scores, thin files, collections, or no credit history at all." },
  { icon: FileWarning, title: "Prior claims or losses", body: "A past surety loss or claim that has you locked out elsewhere." },
  { icon: Sprout, title: "New contractors", body: "Brand-new businesses with no track record yet to point to." },
  { icon: TriangleAlert, title: "High-risk classes", body: "Trades and bond types that automated programs simply will not write." },
  { icon: Gavel, title: "Disciplinary history", body: "Reinstatements and disciplinary bonds for licensees with a record." },
];

const honest = [
  "We shop multiple hard-to-place surety markets, not a single program",
  "We work with credit challenges, prior losses, and high-risk files",
  "We tell you what underwriting needs to say yes, in plain English",
  "We never promise guaranteed approval or pretend there is no underwriting",
];

const faqs = [
  {
    q: "I was declined online. Can you still get me bonded?",
    a: "Often, yes. Instant-issue sites run one program and decline anything outside it. As a broker we shop multiple markets, including those that specialize in credit challenges and tougher files. Underwriting still applies, but a decline at one door is not a decline everywhere.",
  },
  {
    q: "Do you guarantee approval?",
    a: "No, and you should be cautious of anyone who does. Every surety bond goes through underwriting. What we promise is that we will work your file across the markets that handle hard-to-place cases and be straight with you about what it takes.",
  },
  {
    q: "Will it cost more if I have bad credit?",
    a: "Usually, yes. Tougher credit means a higher premium rate. The trade-off is getting placed at all, and getting a path to better rates as your credit and track record improve.",
  },
  {
    q: "What do you need from me to start?",
    a: "Just the basics to begin: the bond type and amount, your license or application number if you have one, and a candid picture of the credit or claim situation. No card or SSN to get a quote.",
  },
];

const crumbs = [
  { name: "Home", url: "/" },
  { name: "Hard-to-Place", url: "/hard-to-place-surety-bonds" },
];

export default function Page() {
  return (
    <>
      <JsonLd
        schema={[
          serviceSchema({
            name: "Hard-to-Place Surety Bonds",
            description:
              "Surety bonds for bad credit, prior claims, new contractors, and high-risk classes, placed by a California broker across multiple markets.",
            url: "/hard-to-place-surety-bonds",
          }),
          faqSchema(faqs),
          breadcrumbSchema(crumbs),
        ]}
      />

      {/* Hero — navy, differentiator */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <Slashes size="lg" tone="white" className="pointer-events-none absolute right-10 top-16 opacity-20" />
        <Container size="wide" className="py-14 lg:py-20">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-navy-300">
              <li>
                <Link href="/" className="hover:text-azure-300">
                  Home
                </Link>
              </li>
              <ChevronRight className="size-3.5 text-navy-400" aria-hidden="true" />
              <li className="font-medium text-white" aria-current="page">
                Hard-to-Place
              </li>
            </ol>
          </nav>
          <div className="mt-6 max-w-3xl">
            <Eyebrow tone="dark">Our specialty</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              Declined elsewhere? <span className="italic text-azure-400">That&apos;s what we do.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-200">
              Bad credit, prior claims, new businesses, high-risk classes. The files instant-issue
              sites reject are the ones we are built to place.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/get-a-quote?path=hard-to-place" variant="primary" size="lg">
                Place my tough case
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button href={site.phone.href} variant="white" size="lg" data-callrail="phone">
                <Phone className="size-4 text-azure-500" aria-hidden="true" />
                <span className="tabular">{site.phone.display}</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* What we place */}
      <section className="py-16">
        <Container size="wide">
          <Reveal className="max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              What we place that others won&apos;t
            </h2>
            <p className="mt-3 text-lg text-muted">
              Five situations that get auto-declined online, and that we work to place by hand.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {weePlace.map((w, i) => {
              const Icon = w.icon;
              return (
                <Reveal as="div" key={w.title} delay={(i % 3) * 60}>
                  <div className="flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-6">
                    <span className="grid size-11 place-items-center rounded-xl bg-azure-50 text-azure-600">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-navy-900">
                      {w.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{w.body}</p>
                  </div>
                </Reveal>
              );
            })}
            <Reveal delay={120}>
              <Link
                href="/hard-to-place-surety-bonds/no-credit-check-contractor-bond"
                className="group flex h-full flex-col justify-between rounded-2xl bg-navy-900 p-6 text-white transition-shadow hover:shadow-lg"
              >
                <div>
                  <ShieldCheck className="size-7 text-azure-300" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-lg font-bold tracking-tight">
                    No-credit-check contractor bond
                  </h3>
                  <p className="mt-2 text-sm text-navy-200">
                    See how no-credit-check options actually work, and where the limits are.
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-azure-300 transition-transform duration-200 ease-out group-hover:translate-x-1">
                  Read the guide
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Honest process — the guardrail */}
      <section className="bg-surface py-16">
        <Container size="wide" className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Honest process</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              No false promises. Just a broker who keeps working.
            </h2>
            <p className="mt-4 text-lg text-muted">
              Hard-to-place does not mean no underwriting. We will not promise guaranteed approval,
              because that is not how surety works and you deserve the truth. What we will do is shop
              the markets that say yes to tough files.
            </p>
            <div className="mt-7">
              <ReviewedBy />
            </div>
          </Reveal>
          <Reveal delay={80} className="rounded-2xl border border-ink-200 bg-white p-7">
            <ul className="space-y-4">
              {honest.map((h) => (
                <li key={h} className="flex gap-3 text-navy-800">
                  <Check className="mt-0.5 size-5 shrink-0 text-success" aria-hidden="true" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <Container size="wide" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900">
              Hard-to-place FAQs
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <Faq items={faqs} />
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-16">
        <Container size="wide">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 px-7 py-10 text-center text-white sm:flex-row sm:text-left sm:px-10">
            <div>
              <h2 className="font-display text-2xl font-extrabold tracking-tight">
                Got a tough case? Let&apos;s place it.
              </h2>
              <p className="mt-1 text-navy-200">A real underwriter, multiple markets, straight answers.</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button href="/get-a-quote?path=hard-to-place" variant="primary" size="lg">
                Start now
              </Button>
              <Button href={site.phone.href} variant="white" size="lg" data-callrail="phone">
                <Phone className="size-4 text-azure-500" aria-hidden="true" />
                Call us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
