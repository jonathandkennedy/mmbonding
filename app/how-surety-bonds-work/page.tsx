import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  ArrowDown,
  HardHat,
  Landmark,
  ShieldCheck,
  FileText,
  Search,
  Stamp,
  RefreshCw,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Slashes } from "@/components/slashes";
import { Reveal } from "@/components/reveal";
import { Faq } from "@/components/faq";
import { ReviewedBy } from "@/components/reviewed-by";
import { TldrCard } from "@/components/tldr-card";
import { JsonLd, faqSchema, breadcrumbSchema } from "@/lib/jsonld";
import { site } from "@/lib/site";
import { facts, REGULATORY_REVIEWED } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

export const metadata: Metadata = {
  title: "How Surety Bonds Work: A Visual Guide",
  description:
    "How a surety bond works, explained visually: the three parties, what you actually pay, how a claim works, and the steps to get bonded. Reviewed by a licensed California broker, CA DOI #6009105.",
  alternates: { canonical: "/how-surety-bonds-work" },
};

const parties = [
  {
    icon: HardHat,
    name: "You, the Principal",
    tone: "azure",
    body: "The contractor or business that buys the bond and must perform the underlying obligation.",
  },
  {
    icon: Landmark,
    name: "The Obligee",
    tone: "plain",
    body: "The party the bond protects and who can file a claim: the CSLB, a project owner, or an agency.",
  },
  {
    icon: ShieldCheck,
    name: "The Surety",
    tone: "navy",
    body: "The company that backs the bond and pays a valid claim, then looks to you for reimbursement.",
  },
];

const steps = [
  {
    icon: FileText,
    title: "Apply",
    body: "You submit a short application. For most license bonds there is no full financial package, and the credit check is a soft pull.",
  },
  {
    icon: Search,
    title: "Underwriting",
    body: "The surety reviews credit, experience, and, on larger bonds, financials to set approval and price. A broker shops multiple markets for your best rate.",
  },
  {
    icon: Stamp,
    title: "Issue & file",
    body: `You pay the premium and the bond is issued. For the contractor license bond, the surety e-files it with the CSLB, usually within ${facts.filingWindow}.`,
  },
  {
    icon: RefreshCw,
    title: "Renew",
    body: "The bond runs for its term, then renews. As your credit improves, the premium can drop, and we re-shop it for you.",
  },
];

const faqs = [
  {
    q: "What are the three parties to a surety bond?",
    a: "The principal (you, who must perform), the obligee (the party protected, who can claim), and the surety (which backs the bond and pays valid claims, then seeks reimbursement from you).",
  },
  {
    q: "Does bonded mean insured?",
    a: "No. A bond protects your customers and the public, and you reimburse the surety for a paid claim. Insurance protects your own business. Most contractors carry both.",
  },
  {
    q: "What do I actually pay for a surety bond?",
    a: `Not the face amount. You pay a premium, a percentage of the bond amount set by underwriting and driven mostly by credit. The ${usd(facts.licenseBondAmount)} license bond, for example, costs a fraction of that per year.`,
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How Surety Bonds Work: A Visual Guide",
            description:
              "How a surety bond works: the three parties, what you pay, how a claim works, and how to get bonded.",
            author: { "@id": `${site.url}/about#michael-melshenker` },
            publisher: { "@id": `${site.url}/#organization` },
            datePublished: REGULATORY_REVIEWED.iso,
            dateModified: REGULATORY_REVIEWED.iso,
            mainEntityOfPage: `${site.url}/how-surety-bonds-work`,
          },
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "How Surety Bonds Work", url: "/how-surety-bonds-work" },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="border-b border-ink-100 bg-surface">
        <Container size="wide" className="py-12 lg:py-16">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
              <li>
                <Link href="/" className="hover:text-azure-600">
                  Home
                </Link>
              </li>
              <ChevronRight className="size-3.5 text-ink-300" aria-hidden="true" />
              <li className="font-medium text-navy-800" aria-current="page">
                How Surety Bonds Work
              </li>
            </ol>
          </nav>
          <div className="mt-6 max-w-3xl">
            <Eyebrow>Visual guide</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl">
              How a surety bond actually works.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              A surety bond is not insurance and it is not a deposit. It is a three-party guarantee.
              Here it is in one diagram, one process, and plain English.
            </p>
          </div>
          <ReviewedBy className="mt-10 max-w-2xl" />
        </Container>
      </section>

      {/* The diagram */}
      <section className="py-16">
        <Container size="wide">
          <TldrCard
            className="mb-12 max-w-3xl"
            text="A surety bond is a three-party guarantee. You (the principal) promise an obligation to the obligee, and the surety backs that promise. If you fail, the surety pays the obligee up to the bond amount, then you reimburse the surety. You pay a small premium, not the full bond amount."
          />

          <Reveal className="mx-auto max-w-4xl">
            <figure className="rounded-2xl border border-ink-200 bg-white p-6 shadow-sm sm:p-10">
              <figcaption className="mb-8 flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-navy-900">
                <Slashes size="sm" /> The three-party guarantee
              </figcaption>

              {/* Principal -> Obligee */}
              <div className="grid items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr]">
                <div className="rounded-2xl border border-azure-200 bg-azure-50/60 p-5">
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-10 place-items-center rounded-xl bg-azure-500 text-white">
                      <HardHat className="size-5" aria-hidden="true" />
                    </span>
                    <span className="font-display font-bold tracking-tight text-navy-900">
                      You (Principal)
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-navy-800">
                    Buy the bond and must perform the work or obligation.
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center px-2 text-center">
                  <span className="hidden text-xs font-semibold uppercase tracking-wider text-azure-700 sm:block">
                    guarantees
                  </span>
                  <ArrowRight
                    className="hidden size-6 text-azure-500 sm:block"
                    aria-hidden="true"
                  />
                  <ArrowDown className="size-6 text-azure-500 sm:hidden" aria-hidden="true" />
                </div>

                <div className="rounded-2xl border border-ink-200 bg-white p-5">
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-10 place-items-center rounded-xl bg-navy-100 text-navy-900">
                      <Landmark className="size-5" aria-hidden="true" />
                    </span>
                    <span className="font-display font-bold tracking-tight text-navy-900">
                      The Obligee
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-navy-800">
                    The protected party (CSLB, owner, agency) who can file a claim.
                  </p>
                </div>
              </div>

              {/* Surety backs it */}
              <div className="mt-4 flex flex-col items-center">
                <ArrowDown className="size-6 text-navy-400" aria-hidden="true" />
                <div className="mt-4 w-full rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 p-5 text-white sm:p-6">
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-10 place-items-center rounded-xl bg-white/10 text-azure-300">
                      <ShieldCheck className="size-5" aria-hidden="true" />
                    </span>
                    <span className="font-display font-bold tracking-tight">The Surety</span>
                  </div>
                  <p className="mt-3 text-sm text-navy-100">
                    Backs the promise. If you fail, it pays the obligee up to the bond amount, then
                    you reimburse the surety under your indemnity agreement.
                  </p>
                </div>
              </div>
            </figure>
          </Reveal>

          {/* Party cards */}
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {parties.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal
                  as="div"
                  key={p.name}
                  delay={i * 70}
                  className="rounded-2xl border border-ink-200 bg-white p-6"
                >
                  <span
                    className={
                      p.tone === "azure"
                        ? "grid size-11 place-items-center rounded-xl bg-azure-500 text-white"
                        : p.tone === "navy"
                          ? "grid size-11 place-items-center rounded-xl bg-navy-900 text-white"
                          : "grid size-11 place-items-center rounded-xl bg-azure-50 text-azure-600"
                    }
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 font-display text-lg font-bold tracking-tight text-navy-900">
                    {p.name}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{p.body}</p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-surface py-16">
        <Container size="wide">
          <Reveal className="max-w-2xl">
            <Eyebrow>Getting bonded</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              How you get a bond, step by step
            </h2>
            <p className="mt-3 text-lg text-muted">
              Four steps from application to an active bond. For most license bonds, the whole thing
              can happen the same day.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal
                  as="div"
                  key={s.title}
                  delay={i * 70}
                  className="relative rounded-2xl border border-ink-200 bg-white p-6"
                >
                  <span className="font-mono text-xs font-semibold text-azure-700">
                    Step {i + 1}
                  </span>
                  <span className="mt-3 grid size-11 place-items-center rounded-xl bg-azure-50 text-azure-600">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-navy-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{s.body}</p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Claim explainer + links */}
      <section className="py-16">
        <Container size="wide" className="grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-ink-200 bg-white p-7">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900">
              What happens in a claim
            </h2>
            <p className="mt-4 leading-relaxed text-ink-700">
              This is the part that surprises people. If a valid claim is filed and the surety pays
              the obligee, you reimburse the surety. A bond protects your customers and the public,
              not you. That is the key difference from insurance, and it is why underwriters care
              about credit and history.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/bonding-vs-insurance" variant="outline">
                Bonded vs. insured
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button href="/resources/contractor-bond-claims-and-lapses" variant="ghost">
                Claims &amp; lapses
              </Button>
            </div>
          </Reveal>

          <Reveal delay={80} className="rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 p-7 text-white">
            <h2 className="font-display text-2xl font-extrabold tracking-tight">
              Keep going
            </h2>
            <p className="mt-3 text-navy-200">A few good next stops:</p>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: "Estimate your premium with the calculator", href: "/surety-bond-cost-calculator" },
                { label: "Surety bond glossary", href: "/surety-bond-glossary" },
                { label: "The $25,000 contractor license bond", href: "/contractor-license-bond" },
                { label: "Bad credit? How we place hard-to-place files", href: "/hard-to-place-surety-bonds" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-navy-50 hover:text-white"
                  >
                    <ArrowRight className="size-4 shrink-0 text-azure-300 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-16">
        <Container size="wide" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900">
              Surety bond basics
            </h2>
            <p className="mt-4 text-muted">
              Reviewed by {site.founder.name}, {site.founder.title}. Updated {REGULATORY_REVIEWED.label}.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <Faq items={faqs} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
