import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  ChevronRight,
  Zap,
  ClipboardList,
  FileCheck,
  MapPin,
  Check,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/reveal";
import { Slashes } from "@/components/slashes";
import { Faq } from "@/components/faq";
import { ReviewedBy } from "@/components/reviewed-by";
import { TldrCard } from "@/components/tldr-card";
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/jsonld";
import { site } from "@/lib/site";
import { facts } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Fast & Same-Day Surety Bonds in California",
  description: `Get bonded fast. License, permit, and small commercial bonds can be issued same day, and we serve every California city. Honest quotes, no card or SSN to start. CA DOI #${site.doiLicense}.`,
  alternates: { canonical: "/fast-surety-bonds" },
};

const sameDay = [
  {
    icon: ShieldCheck,
    title: "Contractor license bond",
    body: `The ${usd(facts.licenseBondAmount)} CSLB bond every California contractor carries. For most applicants this is a same-day issue.`,
    href: "/contractor-license-bond",
    cta: "Contractor license bond",
  },
  {
    icon: ShieldCheck,
    title: "Bond of Qualifying Individual",
    body: `The ${usd(facts.bqiAmount)} BQI required when an RME, or an RMO owning under 10%, qualifies the license. Same-day for most files.`,
    href: "/bond-of-qualifying-individual",
    cta: "Bond of Qualifying Individual",
  },
  {
    icon: ClipboardList,
    title: "Permit bonds",
    body: "Encroachment, subdivision, and other municipal permit bonds. Many issue the same day once we have the obligee requirement.",
    href: "/commercial-bonds",
    cta: "Permit & commercial bonds",
  },
  {
    icon: FileCheck,
    title: "Small commercial bonds",
    body: "Notary, cannabis, and similar small specialty bonds are typically fixed-amount and fast to issue.",
    href: "/commercial-bonds",
    cta: "Commercial & specialty bonds",
  },
];

const steps = [
  {
    title: "Quick quote, no card or SSN",
    body: "Tell us the bond you need and a few details about you. Starting a quote takes about two minutes and never asks for a card or Social Security number.",
  },
  {
    title: "We shop multiple markets",
    body: "We place your bond across several surety markets at once, including the hard-to-place ones, so a tough file gets a real shot instead of a single decline.",
  },
  {
    title: "Your surety e-files with the CSLB",
    body: `Once you are approved and the premium is paid, your surety issues the bond and e-files it with the CSLB. Allow ${facts.filingWindow} for the filing to post.`,
  },
];

const faqs = [
  {
    q: "How fast can I get a surety bond?",
    a: `It depends on the bond. License and permit bonds and small commercial bonds, like the ${usd(facts.licenseBondAmount)} contractor license bond, can often be issued the same day. Contract bonds (bid, performance, and payment) require a short underwriting review, so they are fast but not instant. We move as quickly as the bond type allows and tell you the realistic timeline up front.`,
  },
  {
    q: "Can I get a bond the same day?",
    a: "Yes, for many bonds. Qualifying license and permit bonds and small, fixed-amount commercial bonds are commonly issued the same day once we have your details and payment. Underwriting still applies, and we never promise guaranteed approval, but for these bonds same-day is the normal case, not the exception.",
  },
  {
    q: "Is there an instant surety bond quote?",
    a: "You can start a quote in about two minutes with no card and no Social Security number. For straightforward license and commercial bonds the price is quick to confirm. Contract bonds are quoted after a brief underwriting look, since the rate depends on the contract and your financials, so the number is honest rather than a placeholder.",
  },
  {
    q: "Do you serve my city?",
    a: "Almost certainly. We are a California surety broker and we serve every city and metro in the state, from Los Angeles and San Diego to the Bay Area, Sacramento, Fresno, and the Inland Empire. See our locations hub at /surety-bonds.",
  },
];

const crumbs = [
  { name: "Home", url: "/" },
  { name: "Fast Surety Bonds", url: "/fast-surety-bonds" },
];

export default function Page() {
  return (
    <>
      <JsonLd
        schema={[
          serviceSchema({
            name: "Fast Surety Bonds",
            description:
              "Fast and same-day California surety bonds. License, permit, and small commercial bonds can be issued same day; contract bonds are placed quickly after a short underwriting review. Serving every California city.",
            url: "/fast-surety-bonds",
          }),
          faqSchema(faqs),
          breadcrumbSchema(crumbs),
        ]}
      />

      {/* Hero: navy */}
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
                Fast Surety Bonds
              </li>
            </ol>
          </nav>
          <div className="mt-6 max-w-3xl">
            <Eyebrow tone="dark">Get the right bond fast</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              California surety bonds, issued{" "}
              <span className="italic text-azure-400">fast.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-200">
              License, permit, and small commercial bonds can go out the same day. Contract bonds need
              a short underwriting review, so they are fast but not instant. We tell you the real
              timeline up front and never promise guaranteed approval.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/get-a-quote" variant="primary" size="lg">
                Get a fast quote
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button href={site.phone.href} variant="white" size="lg" data-callrail="phone">
                <Phone className="size-4 text-azure-500" aria-hidden="true" />
                <span className="tabular">{site.phone.display}</span>
              </Button>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-8 lg:grid-cols-4">
            {[
              { v: "Same day", l: "Qualifying license bonds" },
              { v: facts.filingWindow, l: "CSLB e-file posting" },
              { v: "2 min", l: "To start a quote" },
              { v: "All of California", l: "Where we serve" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl font-extrabold tracking-tight text-white tabular sm:text-3xl">
                  {s.v}
                </div>
                <div className="mt-1 text-sm text-navy-300">{s.l}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What we can issue same-day */}
      <section className="py-16 lg:py-20">
        <Container size="wide">
          <TldrCard
            className="mb-10 max-w-3xl"
            text={`How fast? Qualifying license, permit, and small commercial bonds are often issued the same business day once we have your details and payment. CSLB filings typically post within ${facts.filingWindow}. Contract bonds need a short underwriting review, so they are fast but not instant.`}
          />
          <Reveal className="max-w-2xl">
            <Eyebrow>Same-day bonds</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              What we can issue same-day
            </h2>
            <p className="mt-3 text-lg text-muted">
              Fixed-amount license, permit, and small commercial bonds are the fast lane. For most
              applicants these go out the same day once we have your details and payment.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {sameDay.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal
                  as="div"
                  key={b.title}
                  delay={(i % 2) * 60}
                  className="flex flex-col rounded-2xl border border-ink-200 bg-white p-6"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-azure-50 text-azure-600">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-navy-900">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{b.body}</p>
                  <Link
                    href={b.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-azure-700 hover:text-azure-600"
                  >
                    {b.cta}
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <Reveal
            as="div"
            delay={80}
            className="mt-6 flex flex-col gap-3 rounded-2xl border border-ink-200 bg-surface p-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-navy-900 text-azure-300">
                <Zap className="size-4" aria-hidden="true" />
              </span>
              <p className="text-sm text-muted">
                Need a <strong className="text-navy-900">bid, performance, or payment bond?</strong>{" "}
                Contract bonds take a short underwriting review, so they are fast but not instant. We
                still move quickly and quote you an honest timeline.
              </p>
            </div>
            <Link
              href="/contract-bonds"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-azure-700 hover:text-azure-600"
            >
              Contract bonds
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* How we move fast */}
      <section className="bg-surface py-16 lg:py-20">
        <Container size="wide" className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow>How we move fast</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Speed without the runaround.
            </h2>
            <p className="mt-4 text-lg text-muted">
              Fast bonding is not a gimmick. It is a tight process: an easy quote, real shopping across
              markets, and a surety that e-files for you. Here is how a fast bond actually happens.
            </p>
            <p className="mt-4 text-muted">
              We will be straight about timing. License, permit, and small commercial bonds are usually
              same day. Contract bonds need underwriting, and no honest broker promises guaranteed
              approval. What we promise is a quick, real effort on your file.
            </p>
            <div className="mt-7">
              <ReviewedBy />
            </div>
          </Reveal>
          <Reveal delay={80} className="rounded-2xl bg-navy-900 p-8 text-white">
            <h3 className="font-display text-xl font-bold tracking-tight">Three steps to bonded</h3>
            <ol className="mt-6 space-y-6">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-azure-500 font-mono text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-display font-bold tracking-tight">{s.title}</div>
                    <p className="mt-1 text-sm text-navy-200">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-7 flex items-center gap-2 border-t border-white/10 pt-6 text-sm text-navy-200">
              <Check className="size-4 text-success" aria-hidden="true" />
              No card or SSN to get started.
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Fast, everywhere in California */}
      <section className="py-16 lg:py-20">
        <Container size="wide" className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <Eyebrow>Statewide</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Fast, everywhere in California
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Searching for a surety bond near you? We are a California broker and we serve every metro
              in the state. From Los Angeles, San Diego, and the Bay Area to Sacramento, Fresno, San
              Jose, Long Beach, and the Inland Empire, the same fast process applies wherever you work.
            </p>
            <p className="mt-4 text-muted">
              Your bond is filed with the CSLB or the relevant California obligee, so where you are in
              the state does not slow you down.
            </p>
            <div className="mt-7">
              <Button href="/surety-bonds" variant="outline" size="lg">
                <MapPin className="size-4 text-azure-500" aria-hidden="true" />
                Find your city
              </Button>
            </div>
          </Reveal>
          <Reveal delay={80} className="rounded-2xl border border-ink-200 bg-surface p-7">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-navy-900">
              Where we serve
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-navy-900">
              {[
                "Los Angeles",
                "San Diego",
                "San Francisco",
                "San Jose",
                "Sacramento",
                "Fresno",
                "Long Beach",
                "Inland Empire",
              ].map((city) => (
                <li key={city} className="flex items-center gap-2">
                  <MapPin className="size-4 shrink-0 text-azure-500" aria-hidden="true" />
                  {city}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-ink-200 pt-4 text-sm text-muted">
              Not listed? We still cover you.{" "}
              <Link href="/surety-bonds" className="font-semibold text-azure-700 hover:text-azure-600">
                See all California locations
              </Link>
              .
            </p>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-16">
        <Container size="wide" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900">
              Fast bond FAQs
            </h2>
            <p className="mt-4 text-muted">
              Honest timelines, no guaranteed-approval promises. Reviewed by {site.founder.name},{" "}
              {site.founder.title}.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <Faq items={faqs} />
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16">
        <Container size="wide">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 px-7 py-12 text-center text-white sm:px-12">
            <Slashes tone="white" size="lg" className="pointer-events-none absolute left-8 top-8 opacity-20" />
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Need a bond fast? Start now.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-navy-200">
              Get a quote in about two minutes, no card or SSN. Qualifying license and commercial bonds
              can be issued the same day.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/get-a-quote" variant="primary" size="lg">
                Get a fast quote
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button href={site.phone.href} variant="white" size="lg" data-callrail="phone">
                <Phone className="size-4 text-azure-500" aria-hidden="true" />
                Call now
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
