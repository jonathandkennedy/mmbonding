import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/reveal";
import { Slashes } from "@/components/slashes";
import { Faq } from "@/components/faq";
import { ReviewedBy } from "@/components/reviewed-by";
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/jsonld";
import { site } from "@/lib/site";
import { bonds, contractBondKeys } from "@/lib/regulatory";
import { hreflangFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Contract Bonds (Bid, Performance & Payment)",
  description:
    "California contract surety bonds for public and private construction: bid, performance, and payment bonds. Capacity built by a broker, including hard-to-place. CA DOI #6009105.",
  alternates: {
    canonical: "/contract-bonds",
    languages: hreflangFor("/contract-bonds", "/es/fianzas-de-contrato"),
  },
};

const children = contractBondKeys.map((k) => bonds[k]);

const lifecycle = [
  { phase: "Bid", body: "A bid bond backs your proposal and promises you will furnish the contract bonds if you win." },
  { phase: "Award", body: "You win the job. Now the owner requires performance and payment bonds before you start." },
  { phase: "Build", body: "The performance bond guarantees completion; the payment bond guarantees your subs and suppliers are paid." },
];

const faqs = [
  {
    q: "What is the difference between bid, performance, and payment bonds?",
    a: "A bid bond backs your proposal. A performance bond guarantees you finish the job. A payment bond guarantees your subcontractors and suppliers get paid. On most public works you will need all three across the life of a project.",
  },
  {
    q: "Why use a broker for contract bonds instead of an instant site?",
    a: "Contract surety is underwritten on your financials, experience, and capacity, not a one-click algorithm. A broker builds and grows your bonding line, shops multiple markets, and can place credit-challenged or newer contractors that automated sites decline.",
  },
  {
    q: "Can you bond a job bigger than my current limit?",
    a: "Often, yes, with the right preparation. We work your financials and story across markets to build single-job and aggregate capacity. Start the conversation early, before the bid is due.",
  },
];

const crumbs = [
  { name: "Home", url: "/" },
  { name: "Contract Bonds", url: "/contract-bonds" },
];

export default function Page() {
  return (
    <>
      <JsonLd
        schema={[
          serviceSchema({
            name: "Contract Surety Bonds",
            description:
              "Bid, performance, and payment bonds for California public and private construction.",
            url: "/contract-bonds",
          }),
          faqSchema(faqs),
          breadcrumbSchema(crumbs),
        ]}
      />

      {/* Hero */}
      <section className="border-b border-ink-100 bg-surface">
        <Container size="wide" className="py-12 lg:py-16">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-muted">
              <li>
                <Link href="/" className="hover:text-azure-600">
                  Home
                </Link>
              </li>
              <ChevronRight className="size-3.5 text-ink-300" aria-hidden="true" />
              <li className="font-medium text-navy-800" aria-current="page">
                Contract Bonds
              </li>
            </ol>
          </nav>
          <div className="mt-6 max-w-3xl">
            <Eyebrow>Contract surety</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl">
              Bid, performance &amp; payment bonds, built around your bonding line.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Contract bonds are a program, not a checkout. We set up and grow your capacity, shop
              multiple markets, and place the files that automated sites decline.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/get-a-quote?path=contract" size="lg">
                Talk to an underwriter
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button href={site.phone.href} variant="outline" size="lg" data-callrail="phone">
                <Phone className="size-4 text-azure-500" aria-hidden="true" />
                <span className="tabular">{site.phone.display}</span>
              </Button>
            </div>
          </div>
          <ReviewedBy className="mt-10 max-w-2xl" />
        </Container>
      </section>

      {/* The three bonds */}
      <section className="py-16">
        <Container size="wide">
          <Reveal className="max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-900">
              The three contract bonds
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {children.map((b, i) => (
              <Reveal as="div" key={b.key} delay={i * 70}>
                <Link
                  href={b.href}
                  className="group flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-6 transition-[box-shadow,border-color] duration-200 hover:border-azure-300 hover:shadow-md"
                >
                  <Slashes size="sm" />
                  <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-navy-900">
                    {b.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{b.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-azure-600 transition-transform duration-200 ease-out group-hover:translate-x-1">
                    Learn more
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Lifecycle */}
      <section className="bg-navy-900 py-16 text-white">
        <Container size="wide">
          <Reveal className="max-w-2xl">
            <Eyebrow tone="dark">The project lifecycle</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight">
              One project, three moments you need a bond.
            </h2>
          </Reveal>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {lifecycle.map((l, i) => (
              <Reveal as="li" key={l.phase} delay={i * 70}>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-semibold text-azure-300">0{i + 1}</span>
                  <span className="h-px flex-1 bg-gradient-to-r from-azure-400/60 to-transparent" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight">{l.phase}</h3>
                <p className="mt-2 text-navy-200">{l.body}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-16">
        <Container size="wide" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900">
              Contract bond FAQs
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <Faq items={faqs} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
