import type { Metadata } from "next";
import { Phone, ShieldCheck, Zap, HeartHandshake, BadgeCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { QuoteForm } from "@/components/quote/quote-form";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Start a fast California surety bond quote. License and permit bonds, contract bonds, and hard-to-place cases. No payment or SSN to get a quote. CA DOI #6009105.",
  alternates: { canonical: "/get-a-quote" },
};

type Path = "license" | "contract" | "hard-to-place";
const validPaths: Path[] = ["license", "contract", "hard-to-place"];

const bondToPath: Record<string, Path> = {
  "contractor-license-bond": "license",
  "bond-of-qualifying-individual": "license",
  "llc-employee-worker-bond": "license",
  "disciplinary-bond": "hard-to-place",
  "bid-bond": "contract",
  "performance-bond": "contract",
  "payment-bond": "contract",
};

const trust = [
  { icon: BadgeCheck, text: `Licensed CA broker, DOI #${site.doiLicense}` },
  { icon: Zap, text: "Fast quotes, often same-day filing" },
  { icon: HeartHandshake, text: "Bad credit and tough cases welcome" },
  { icon: ShieldCheck, text: "No card or SSN to get a quote" },
];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ path?: string; bond?: string }>;
}) {
  const sp = await searchParams;
  const bond = sp.bond;
  let initialPath: Path = "license";
  if (sp.path && validPaths.includes(sp.path as Path)) initialPath = sp.path as Path;
  else if (bond && bondToPath[bond]) initialPath = bondToPath[bond];

  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Get a Quote", url: "/get-a-quote" },
        ])}
      />
      <section className="bg-surface">
        <Container size="wide" className="py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.85fr] lg:gap-14">
            <div>
              <Eyebrow>Get a quote</Eyebrow>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl">
                Start your bond in two minutes.
              </h1>
              <p className="mt-4 max-w-xl text-lg text-muted">
                Pick your path and tell us a little about the bond. A real, licensed underwriter takes
                it from there.
              </p>
              <div className="mt-8">
                <QuoteForm initialPath={initialPath} initialBond={bond} />
              </div>
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-ink-200 bg-white p-6">
                <h2 className="font-display text-lg font-bold tracking-tight text-navy-900">
                  Why contractors choose us
                </h2>
                <ul className="mt-5 space-y-4">
                  {trust.map((t) => {
                    const Icon = t.icon;
                    return (
                      <li key={t.text} className="flex items-start gap-3 text-sm text-navy-800">
                        <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-azure-50 text-azure-600">
                          <Icon className="size-4" aria-hidden="true" />
                        </span>
                        {t.text}
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-6 border-t border-ink-100 pt-5">
                  <p className="text-sm text-muted">Prefer to talk it through?</p>
                  <a
                    href={site.phone.href}
                    data-callrail="phone"
                    className="mt-2 inline-flex items-center gap-2 font-display text-lg font-bold tracking-tight text-navy-900 hover:text-azure-600"
                  >
                    <Phone className="size-5 text-azure-500" aria-hidden="true" />
                    <span className="tabular">{site.phone.display}</span>
                  </a>
                  <p className="mt-1 text-xs text-muted">{site.hours}</p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
