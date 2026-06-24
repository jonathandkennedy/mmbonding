import Link from "next/link";
import {
  ArrowRight,
  Phone,
  BadgeCheck,
  Zap,
  HeartHandshake,
  MapPin,
  Check,
  X,
  Linkedin,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Slashes } from "@/components/slashes";
import { Reveal } from "@/components/reveal";
import { Faq } from "@/components/faq";
import { QuoteStarter } from "@/components/quote/quote-starter";
import { JsonLd, faqSchema } from "@/lib/jsonld";
import { site } from "@/lib/site";
import { bonds, facts } from "@/lib/regulatory";
import { usd } from "@/lib/utils";
import type { Metadata } from "next";
import { hreflangFor } from "@/lib/i18n";

export const metadata: Metadata = {
  alternates: { canonical: "/", languages: hreflangFor("/", "/es") },
};

const homeFaqs = [
  {
    q: "How much does a California contractor license bond cost?",
    a: `The bond amount is fixed at ${usd(facts.licenseBondAmount)} under ${facts.licenseBondStatute}. You pay a premium, not the full amount, usually a small percentage driven by your credit. Strong credit can start in the low hundreds per year; tougher credit costs more. We quote your exact rate fast.`,
  },
  {
    q: "Can I get bonded with bad credit or a prior claim?",
    a: "Often, yes. Hard-to-place is our specialty. Instant-issue sites decline tough credit; we shop multiple markets and work with credit challenges, prior losses, new businesses, and high-risk classes. Underwriting still applies and we never promise guaranteed approval, but we place cases others turn away.",
  },
  {
    q: "How fast can I get bonded?",
    a: `Qualifying license and permit bonds are often issued the same day. Your surety e-files with the CSLB, and filings typically post within ${facts.filingWindow}. Contract bonds take a short underwriting review, then issue quickly.`,
  },
  {
    q: "Are you an insurance company?",
    a: `No. ${site.shortName} is a licensed California surety broker (CA DOI #${site.doiLicense}). We represent you, shop multiple top-rated surety markets, and place the bond that fits, instead of issuing from a single program like an instant-quote website.`,
  },
  {
    q: "What bonds do you place besides the license bond?",
    a: "Bid, performance, and payment bonds for public and private work; the $100,000 LLC employee/worker bond; the Bond of Qualifying Individual; disciplinary bonds; and a range of commercial bonds. Not sure which you need? We will tell you.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd schema={faqSchema(homeFaqs)} />
      <Hero />
      <TrustBar />
      <BondPaths />
      <HowItWorks />
      <WhyBroker />
      <HardToPlaceBand />
      <BondsWePlace />
      <ExpertSpotlight />
      <FaqSection />
      <FinalCta />
    </>
  );
}

/* ------------------------------------------------------------------ Hero */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-100 bg-white">
      {/* Brand accents: soft azure wash + navy glow, no neon */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60rem 30rem at 85% -10%, rgba(0,144,216,0.10), transparent 60%), radial-gradient(40rem 24rem at 0% 110%, rgba(0,32,64,0.06), transparent 60%)",
        }}
      />
      <Slashes
        size="lg"
        className="pointer-events-none absolute -left-2 top-28 hidden opacity-[0.12] lg:flex"
      />
      <Container size="wide" className="grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-surface px-3.5 py-1.5 text-sm font-medium text-navy-800">
            <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
            California surety bonds, licensed CA DOI #{site.doiLicense}
          </span>
          <h1 className="mt-5 font-display text-[2.7rem] font-extrabold leading-[1.04] tracking-tight text-navy-900 sm:text-6xl">
            Get the right bond.{" "}
            <span className="italic text-azure-500">Fast.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            California surety bonds from a real broker. Issued fast when you qualify, and placed for
            the tough cases when you don&apos;t.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/get-a-quote" size="lg">
              Get a Quote
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button href={site.phone.href} variant="outline" size="lg" data-callrail="phone">
              <Phone className="size-4 text-azure-500" aria-hidden="true" />
              <span className="tabular">{site.phone.display}</span>
            </Button>
          </div>
        </div>

        <Reveal className="lg:pl-6">
          <QuoteStarter />
        </Reveal>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------- Trust bar */
const trust = [
  { icon: BadgeCheck, title: "Licensed CA broker", sub: `CA DOI #${site.doiLicense}, active` },
  { icon: Zap, title: "Issued fast", sub: "Same day on qualifying bonds" },
  { icon: HeartHandshake, title: "Tough cases welcome", sub: "Bad credit, prior claims, new" },
  { icon: MapPin, title: "All of California", sub: `${facts.caActiveLicensees.toLocaleString()}+ licensee market` },
];

function TrustBar() {
  return (
    <section className="bg-surface">
      <Container size="wide" className="py-8">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-7 lg:grid-cols-4">
          {trust.map((t) => {
            const Icon = t.icon;
            return (
              <li key={t.title} className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-azure-500 shadow-sm">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-display text-sm font-bold tracking-tight text-navy-900">
                    {t.title}
                  </span>
                  <span className="block text-sm text-muted">{t.sub}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------ Bond paths */
function BondPaths() {
  const license = bonds["contractor-license-bond"];
  return (
    <section className="py-20">
      <Container size="wide">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Three ways in. One broker who places them all.
          </h2>
          <p className="mt-3 text-lg text-muted">
            Pick your path. We route you to a fast quote or a real underwriter, whichever the bond
            needs.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
          {/* Flagship — tall, wide */}
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <Link
              href={license.href}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-ink-200 bg-white p-7 transition-shadow duration-200 hover:shadow-lg sm:p-9"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 size-48 rounded-full bg-azure-50 opacity-70 blur-2xl"
              />
              <div className="relative">
                <Eyebrow>Flagship</Eyebrow>
                <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-navy-900 sm:text-3xl">
                  Contractor License Bond
                </h3>
                <p className="mt-3 max-w-md text-muted">
                  The bond every CSLB-licensed contractor must carry. New, renewing, or reactivating,
                  we issue it fast and quote bad credit honestly.
                </p>
              </div>
              <div className="relative mt-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="font-mono text-4xl font-semibold tracking-tight text-navy-900 tabular">
                    {usd(license.amount!)}
                  </div>
                  <div className="mt-1 text-sm text-muted">
                    Required under {license.statute} · Form {license.form}
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 font-display font-semibold text-azure-600 transition-transform duration-200 ease-out group-hover:translate-x-1">
                  Start here
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Contract */}
          <Reveal delay={60}>
            <Link
              href="/contract-bonds"
              className="group flex h-full flex-col justify-between rounded-2xl border border-ink-200 bg-white p-6 transition-shadow duration-200 hover:shadow-md"
            >
              <div>
                <Building2 className="size-7 text-azure-500" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-navy-900">
                  Contract Bonds
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Bid, performance, and payment bonds for public and private projects. Capacity built
                  by a broker, not a bot.
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-azure-600 transition-transform duration-200 ease-out group-hover:translate-x-1">
                Talk to an underwriter
                <ArrowRight className="size-4" aria-hidden="true" />
              </span>
            </Link>
          </Reveal>

          {/* Hard-to-place — differentiator, navy fill */}
          <Reveal delay={120}>
            <Link
              href="/hard-to-place-surety-bonds"
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-navy-900 p-6 text-white transition-shadow duration-200 hover:shadow-lg"
            >
              <Slashes
                tone="white"
                className="pointer-events-none absolute right-4 top-4 opacity-30"
              />
              <div>
                <ShieldCheck className="size-7 text-azure-300" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight">
                  Hard-to-Place
                </h3>
                <p className="mt-2 text-sm text-navy-200">
                  Declined elsewhere? That is exactly what we do. Bad credit, prior claims, new
                  contractors, high-risk classes.
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-azure-300 transition-transform duration-200 ease-out group-hover:translate-x-1">
                See how we place it
                <ArrowRight className="size-4" aria-hidden="true" />
              </span>
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ----------------------------------------------------------- How it works */
const steps = [
  {
    title: "Tell us about the bond",
    body: "Two minutes, no card or SSN. Your bond type, amount, and a few quick questions about your situation.",
  },
  {
    title: "We shop multiple markets",
    body: "A licensed underwriter works your file across top-rated sureties, including the markets that handle credit challenges.",
  },
  {
    title: "Get bonded, often same day",
    body: "We e-file with the CSLB and send your bond. Qualifying license bonds can be done the same business day.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-surface py-20">
      <Container size="wide">
        <Reveal className="max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            A real broker, start to bonded.
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 70} className="relative">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-semibold text-azure-600">0{i + 1}</span>
                <span className="h-px flex-1 bg-gradient-to-r from-azure-300 to-transparent" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-navy-900">
                {s.title}
              </h3>
              <p className="mt-2 text-muted">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------- Why broker */
const brokerWins = [
  "A licensed underwriter shops multiple surety markets",
  "Bad credit, prior claims, and new businesses get placed",
  "Bonding capacity built for growth, not a one-size program",
  "A real person who answers when a deadline is tomorrow",
];
const vendingLoses = [
  "One program, one algorithm, one yes-or-no",
  "Tough credit is auto-declined at the door",
  "No capacity strategy for bigger contracts",
  "A form, a wait, and nobody to call",
];

function WhyBroker() {
  return (
    <section className="py-20">
      <Container size="wide" className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Why a broker beats an instant-issue site.
          </h2>
          <p className="mt-4 text-lg text-muted">
            Vending-machine bond sites are fast until your file is not perfect. Then they decline and
            move on. A broker works the whole market for you, and keeps working when it gets hard.
          </p>
          <div className="mt-7">
            <Button href="/hard-to-place-surety-bonds" variant="navy">
              See the hard-to-place difference
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </Reveal>

        <Reveal delay={80} className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-azure-200 bg-azure-50/60 p-5">
            <div className="font-display text-sm font-bold uppercase tracking-wider text-azure-700">
              MM Bonding broker
            </div>
            <ul className="mt-4 space-y-3">
              {brokerWins.map((w) => (
                <li key={w} className="flex gap-2.5 text-sm text-navy-800">
                  <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-ink-200 bg-white p-5">
            <div className="font-display text-sm font-bold uppercase tracking-wider text-ink-500">
              Instant-issue site
            </div>
            <ul className="mt-4 space-y-3">
              {vendingLoses.map((w) => (
                <li key={w} className="flex gap-2.5 text-sm text-muted">
                  <X className="mt-0.5 size-4 shrink-0 text-ink-400" aria-hidden="true" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ----------------------------------------------------- Hard-to-place band */
function HardToPlaceBand() {
  return (
    <section className="bg-navy-900 py-16 text-white">
      <Container size="wide" className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <Reveal className="max-w-2xl">
          <Eyebrow tone="dark">Our specialty</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Declined elsewhere? That&apos;s what we do.
          </h2>
          <p className="mt-4 text-navy-200">
            We shop hard-to-place markets and work with credit challenges, prior losses, and
            high-risk classes. Underwriting still applies and we never promise guaranteed approval. We
            just get tough cases placed when others won&apos;t.
          </p>
        </Reveal>
        <Reveal delay={80} className="shrink-0">
          <Button href="/hard-to-place-surety-bonds" variant="white" size="lg">
            Place my tough case
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

/* --------------------------------------------------------- Bonds we place */
function BondsWePlace() {
  const list = [
    bonds["contractor-license-bond"],
    bonds["bid-bond"],
    bonds["performance-bond"],
    bonds["payment-bond"],
    bonds["bond-of-qualifying-individual"],
    bonds["llc-employee-worker-bond"],
    bonds["disciplinary-bond"],
  ];
  return (
    <section className="py-20">
      <Container size="wide">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <Eyebrow>Bonds we place</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              California contractor bonds, covered.
            </h2>
          </div>
          <Link
            href="/contract-bonds"
            className="inline-flex items-center gap-1.5 font-semibold text-azure-600 hover:text-azure-700"
          >
            Browse contract bonds
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((b, i) => (
            <Reveal as="div" key={b.key} delay={(i % 3) * 60}>
              <Link
                href={b.href}
                className="group flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-5 transition-[box-shadow,border-color] duration-200 hover:border-azure-300 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold tracking-tight text-navy-900">
                    {b.name}
                  </h3>
                  <ArrowRight className="size-4 text-ink-300 transition-[color,transform] duration-200 group-hover:translate-x-0.5 group-hover:text-azure-500" aria-hidden="true" />
                </div>
                <p className="mt-2 flex-1 text-sm text-muted">{b.summary}</p>
                <div className="mt-4 font-mono text-sm font-semibold text-azure-700 tabular">
                  {b.amount ? usd(b.amount) : b.amountCaption}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------- Expert spotlight */
function ExpertSpotlight() {
  return (
    <section className="bg-surface py-20">
      <Container size="wide" className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-navy-900 p-8 text-white">
            <Slashes tone="white" size="lg" className="absolute right-6 top-6 opacity-20" />
            <span
              aria-hidden="true"
              className="grid size-16 place-items-center rounded-2xl bg-azure-500 font-display text-xl font-extrabold tracking-tight text-white"
            >
              MM
            </span>
            <div className="mt-6 font-display text-2xl font-extrabold tracking-tight">
              {site.founder.name}
            </div>
            <div className="text-azure-300">
              {site.founder.title}, {site.shortName}
            </div>
            <dl className="mt-6 grid gap-3 border-t border-white/10 pt-6 text-sm">
              <div className="flex items-center justify-between gap-4">
                <dt className="text-navy-300">CA DOI License</dt>
                <dd className="font-mono font-semibold text-white">#{site.doiLicense}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-navy-300">Reviews every bond guide</dt>
                <dd className="inline-flex items-center gap-1.5 font-semibold text-success">
                  <BadgeCheck className="size-4" aria-hidden="true" /> Verified
                </dd>
              </div>
            </dl>
            <a
              href={site.founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Linkedin className="size-4 text-azure-300" aria-hidden="true" />
              Connect on LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            A real, licensed underwriter behind every bond.
          </h2>
          <p className="mt-4 text-lg text-muted">
            {site.shortName} is founded and run by {site.founder.name}, a licensed California producer
            who personally works the hard-to-place cases. The license number is public, the guidance
            on every page is reviewed and dated, and the person who quotes your bond is the person who
            places it.
          </p>
          <p className="mt-4 text-muted">
            That is the difference between a named expert and an anonymous form: accountability you
            can verify, on bonds that protect your livelihood.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href="/about" variant="navy">
              Meet the team
            </Button>
            <Button href="/contact" variant="outline">
              Talk to us
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------- FAQ + CTA */
function FaqSection() {
  return (
    <section className="py-20">
      <Container size="wide" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <Eyebrow>Common questions</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Straight answers, sourced and dated.
          </h2>
          <p className="mt-4 text-muted">
            Every figure here is verified against CSLB and CA DOI sources and reviewed by{" "}
            {site.founder.name}.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <Faq items={homeFaqs} />
        </Reveal>
      </Container>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="pb-4">
      <Container size="wide">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-navy-900 to-navy-800 px-6 py-14 text-center text-white sm:px-12 sm:py-16">
          <Slashes tone="white" size="lg" className="pointer-events-none absolute left-8 top-8 opacity-20" />
          <Slashes tone="white" size="lg" className="pointer-events-none absolute bottom-8 right-8 opacity-20" />
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
            Get the right bond. <span className="italic text-azure-400">Fast.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-200">
            Start a quote in two minutes, or call and talk to a real underwriter today.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/get-a-quote" variant="primary" size="lg">
              Get a Quote
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
  );
}
