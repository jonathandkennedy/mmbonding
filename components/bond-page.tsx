import Link from "next/link";
import { ArrowRight, Phone, ChevronRight, ShieldCheck } from "lucide-react";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { Eyebrow } from "./ui/eyebrow";
import { Slashes } from "./slashes";
import { Reveal } from "./reveal";
import { Faq } from "./faq";
import { ReviewedBy } from "./reviewed-by";
import {
  JsonLd,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
  type FaqItem,
} from "@/lib/jsonld";
import { site } from "@/lib/site";
import { bonds, type BondDef, type BondKey } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

export type BondPageProps = {
  bond: BondDef;
  eyebrow?: string;
  h1: string;
  intro: string;
  heroFacts?: { label: string; value: string }[];
  children: React.ReactNode;
  faqs: FaqItem[];
  related?: BondKey[];
  showHardToPlace?: boolean;
  /** Extra breadcrumb between Home and this page, e.g. Contract Bonds hub. */
  parent?: { name: string; href: string };
};

export function BondPage({
  bond,
  eyebrow,
  h1,
  intro,
  heroFacts,
  children,
  faqs,
  related,
  showHardToPlace = true,
  parent,
}: BondPageProps) {
  const crumbs = [
    { name: "Home", url: "/" },
    ...(parent ? [{ name: parent.name, url: parent.href }] : []),
    { name: bond.name, url: bond.href },
  ];

  const facts: { label: string; value: string }[] =
    heroFacts ??
    [
      bond.amount
        ? { label: "Bond amount", value: usd(bond.amount) }
        : bond.amountCaption
          ? { label: "Bond amount", value: bond.amountCaption }
          : null,
      bond.statute ? { label: "Statute", value: bond.statute } : null,
      bond.form ? { label: "CSLB form", value: bond.form } : null,
    ].filter(Boolean) as { label: string; value: string }[];

  return (
    <>
      <JsonLd
        schema={[
          serviceSchema({ name: bond.name, description: intro, url: bond.href }),
          faqSchema(faqs),
          breadcrumbSchema(crumbs),
        ]}
      />

      {/* Hero */}
      <section className="border-b border-ink-100 bg-surface">
        <Container size="wide" className="py-12 lg:py-16">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl">
                {h1}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{intro}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href={`/get-a-quote?bond=${bond.key}`} size="lg">
                  Quote this bond
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
                <Button href={site.phone.href} variant="outline" size="lg" data-callrail="phone">
                  <Phone className="size-4 text-azure-500" aria-hidden="true" />
                  <span className="tabular">{site.phone.display}</span>
                </Button>
              </div>
            </div>

            {facts.length > 0 && (
              <Reveal className="rounded-2xl border border-ink-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-navy-900">
                  <Slashes size="sm" /> Key facts
                </div>
                <dl className="mt-4 divide-y divide-ink-100">
                  {facts.map((f) => (
                    <div key={f.label} className="flex items-baseline justify-between gap-4 py-3">
                      <dt className="text-sm text-muted">{f.label}</dt>
                      <dd className="font-mono text-base font-semibold text-navy-900 tabular">
                        {f.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-xs leading-relaxed text-muted">
                  Premium is a percentage of the bond amount, set by underwriting. The figures above
                  are statutory amounts, not what you pay.
                </p>
              </Reveal>
            )}
          </div>
          <ReviewedBy className="mt-10 max-w-2xl" />
        </Container>
      </section>

      {/* Body + sidebar */}
      <section className="py-16">
        <Container size="wide" className="grid gap-12 lg:grid-cols-[1fr_20rem]">
          <article>{children}</article>
          <Sidebar bond={bond} related={related} />
        </Container>
      </section>

      {showHardToPlace && <HardToPlaceCallout />}

      {/* FAQ */}
      <section className="bg-surface py-16">
        <Container size="wide" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900">
              {bond.name} FAQs
            </h2>
            <p className="mt-4 text-muted">
              Reviewed by {site.founder.name}, {site.founder.title}. Figures verified against CSLB and
              CA DOI sources.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <Faq items={faqs} />
          </Reveal>
        </Container>
      </section>

      <FinalCta bondName={bond.name} bondKey={bond.key} />
    </>
  );
}

function Breadcrumbs({ crumbs }: { crumbs: { name: string; url: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
        {crumbs.map((c, i) => (
          <li key={c.url} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="size-3.5 text-ink-300" aria-hidden="true" />}
            {i < crumbs.length - 1 ? (
              <Link href={c.url} className="hover:text-azure-600">
                {c.name}
              </Link>
            ) : (
              <span className="font-medium text-navy-800" aria-current="page">
                {c.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function Sidebar({ bond, related }: { bond: BondDef; related?: BondKey[] }) {
  const rel = (related ?? []).map((k) => bonds[k]).filter((b) => b.key !== bond.key);
  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
      <div className="overflow-hidden rounded-2xl bg-navy-900 p-6 text-white">
        <Slashes tone="white" className="opacity-40" />
        <h2 className="mt-4 font-display text-xl font-bold tracking-tight">
          Need this bond?
        </h2>
        <p className="mt-2 text-sm text-navy-200">
          Start a quote in two minutes, or call and talk to a real underwriter.
        </p>
        <div className="mt-5 flex flex-col gap-2.5">
          <Button href={`/get-a-quote?bond=${bond.key}`} variant="primary" className="w-full">
            Quote this bond
          </Button>
          <a
            href={site.phone.href}
            data-callrail="phone"
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/15 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Phone className="size-4 text-azure-300" aria-hidden="true" />
            <span className="tabular">{site.phone.display}</span>
          </a>
        </div>
      </div>

      {rel.length > 0 && (
        <div className="rounded-2xl border border-ink-200 bg-white p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-navy-900">
            Related bonds
          </h2>
          <ul className="mt-4 space-y-1">
            {rel.map((b) => (
              <li key={b.key}>
                <Link
                  href={b.href}
                  className="group flex items-center justify-between gap-3 rounded-lg px-2 py-2 text-sm transition-colors hover:bg-surface"
                >
                  <span className="font-medium text-navy-800">{b.name}</span>
                  <ArrowRight className="size-4 shrink-0 text-ink-300 transition-transform group-hover:translate-x-0.5 group-hover:text-azure-500" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}

function HardToPlaceCallout() {
  return (
    <section className="py-4">
      <Container size="wide">
        <Reveal className="flex flex-col items-start gap-6 rounded-2xl border border-azure-200 bg-azure-50/60 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-azure-500 text-white">
              <ShieldCheck className="size-6" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-xl font-bold tracking-tight text-navy-900">
                Bad credit or a prior claim? We place it.
              </h2>
              <p className="mt-1 max-w-xl text-sm text-ink-700">
                Declined by an instant-issue site does not mean declined everywhere. We shop
                hard-to-place markets and work with credit challenges. Underwriting still applies.
              </p>
            </div>
          </div>
          <Button href="/hard-to-place-surety-bonds" variant="navy" className="shrink-0">
            How we place tough cases
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

function FinalCta({ bondName, bondKey }: { bondName: string; bondKey: string }) {
  return (
    <section className="py-16">
      <Container size="wide">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 px-7 py-10 text-white sm:flex-row sm:px-10">
          <div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight">
              Ready for your {bondName.toLowerCase()}?
            </h2>
            <p className="mt-1 text-navy-200">Get the right bond fast, with a real underwriter on your side.</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button href={`/get-a-quote?bond=${bondKey}`} variant="primary" size="lg">
              Get a Quote
            </Button>
            <Button href={site.phone.href} variant="white" size="lg" data-callrail="phone">
              <Phone className="size-4 text-azure-500" aria-hidden="true" />
              Call now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
