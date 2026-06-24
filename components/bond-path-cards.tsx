import Link from "next/link";
import { ArrowRight, HardHat, FileSignature, ShieldCheck } from "lucide-react";
import { usd } from "@/lib/utils";
import { facts } from "@/lib/regulatory";

const cards = [
  {
    href: "/contractor-license-bond",
    icon: HardHat,
    title: "License & Permit",
    body: `The ${usd(facts.licenseBondAmount)} contractor license bond, BQI, LLC, and disciplinary bonds.`,
    cta: "Quote a license bond",
    dark: false,
  },
  {
    href: "/contract-bonds",
    icon: FileSignature,
    title: "Contract Bonds",
    body: "Bid, performance, and payment bonds for public and private projects.",
    cta: "Talk to an underwriter",
    dark: false,
  },
  {
    href: "/hard-to-place-surety-bonds",
    icon: ShieldCheck,
    title: "Hard-to-Place",
    body: "Bad credit, prior claims, new contractors, high-risk classes. Declined elsewhere? Start here.",
    cta: "Place a tough case",
    dark: true,
  },
];

/** The three bond paths, reused on city pages and elsewhere. */
export function BondPathCards() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {cards.map((c) => {
        const Icon = c.icon;
        return (
          <Link
            key={c.href}
            href={c.href}
            className={
              c.dark
                ? "group flex flex-col justify-between rounded-2xl bg-navy-900 p-6 text-white transition-shadow duration-200 hover:shadow-lg"
                : "group flex flex-col justify-between rounded-2xl border border-ink-200 bg-white p-6 transition-[box-shadow,border-color] duration-200 hover:border-azure-300 hover:shadow-md"
            }
          >
            <div>
              <Icon className={c.dark ? "size-7 text-azure-300" : "size-7 text-azure-500"} aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl font-bold tracking-tight">{c.title}</h3>
              <p className={c.dark ? "mt-2 text-sm text-navy-200" : "mt-2 text-sm text-muted"}>{c.body}</p>
            </div>
            <span
              className={
                "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-transform duration-200 ease-out group-hover:translate-x-1 " +
                (c.dark ? "text-azure-300" : "text-azure-600")
              }
            >
              {c.cta}
              <ArrowRight className="size-4" aria-hidden="true" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
