import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("lease-guarantee-bond-vs-cash-deposit")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "A lease guarantee bond can replace a large cash security deposit on a commercial lease, freeing your working capital. How it compares, and what it costs.",
  alternates: { canonical: `/resources/${guide.slug}` },
  openGraph: {
    images: [
      {
        url: `/images/guides/${guide.slug}-hero.webp`,
        width: 1200,
        height: 675,
        alt: `Illustration for ${guide.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`/images/guides/${guide.slug}-hero.webp`],
  },
};

const faqs = [
  {
    q: "What is a lease guarantee bond?",
    a: "A commercial lease guarantee bond guarantees your obligations under a lease, chiefly the rent, up to a set amount. Instead of tying up months of cash in a security deposit, you post a bond. If you default, the landlord claims on it and you reimburse the surety.",
  },
  {
    q: "How is it different from a cash deposit?",
    a: "A cash deposit ties up your capital for the life of the lease. A bond gives the landlord the same recovery source while keeping your cash working in the business. You pay a premium instead of surrendering the full deposit.",
  },
  {
    q: "How much does a lease guarantee bond cost?",
    a: "You pay a premium that is a percentage of the bonded amount, set by underwriting and driven mostly by your credit and financials. It is usually far less than the cash a deposit would tie up.",
  },
  {
    q: "Will my landlord accept a bond instead of a deposit?",
    a: "Many will, since the bond gives them a guaranteed source to recover unpaid rent. Confirm the amount and bond form your landlord wants, and we will place it.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="A lease guarantee bond can stand in for a large cash security deposit on a commercial lease. It guarantees your lease obligations (mainly rent) up to a set amount, so the landlord keeps a recovery source while your capital stays in the business. You pay a premium, a percentage of the bonded amount, usually far less than the cash a deposit ties up."
      intro="A big cash security deposit locks up capital you could be using to run and grow your business. A lease guarantee bond is the alternative. Here is how it compares to a deposit, and what it costs."
      faqs={faqs}
      related={[
        { label: "Lease Guarantee Bond", href: "/commercial-bonds/lease-guarantee-bond" },
        { label: "Commercial & Specialty Bonds", href: "/commercial-bonds" },
        { label: "Surety bond vs letter of credit", href: "/resources/surety-bond-vs-letter-of-credit" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <StatGrid
        heading="Lease guarantee bonds by the numbers"
        items={pickStats([
          "usSuretyPremium",
          "minEarnedPremium",
          "financeDownPayment",
          "premiumDeductible",
        ])}
      />

      <Prose>
        <h2>Deposit vs bond, side by side</h2>
        <p>
          Both protect the landlord. The difference is what happens to your cash. A{" "}
          <strong>cash deposit</strong> sits with the landlord for the life of the lease, doing
          nothing for you. A{" "}
          <Link href="/commercial-bonds/lease-guarantee-bond">lease guarantee bond</Link> gives the
          landlord the same recovery source, but you keep your capital and pay only a{" "}
          <strong>premium</strong>.
        </p>
      </Prose>

      <div className="my-8 overflow-x-auto rounded-2xl border border-ink-200">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-surface text-left">
              <th className="p-4 font-semibold text-navy-900"></th>
              <th className="p-4 font-display font-bold text-navy-900">Cash deposit</th>
              <th className="p-4 font-display font-bold text-navy-900">Lease guarantee bond</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            <tr>
              <td className="p-4 font-semibold text-navy-900">Your cost up front</td>
              <td className="p-4 text-ink-700">The full deposit (often months of rent)</td>
              <td className="p-4 text-ink-700">A premium, a percentage of the amount</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Your working capital</td>
              <td className="p-4 text-ink-700">Tied up for the life of the lease</td>
              <td className="p-4 text-ink-700">Stays in the business</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Landlord protection</td>
              <td className="p-4 text-ink-700">Draws on the deposit</td>
              <td className="p-4 text-ink-700">Claims on the bond</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">If you default</td>
              <td className="p-4 text-ink-700">Deposit is applied</td>
              <td className="p-4 text-ink-700">Surety pays, you reimburse</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Prose>
        <h2>Who it fits</h2>
        <p>
          Tenants signing a commercial lease who would rather not surrender a large deposit, growing
          businesses that want their capital working, and startups a landlord asks to secure the
          lease. It is a close cousin of the{" "}
          <Link href="/resources/surety-bond-vs-letter-of-credit">letter of credit</Link>, but without
          freezing a chunk of your bank line.
        </p>

        <h2>What it costs</h2>
        <p>
          You pay a <strong>premium</strong>, a percentage of the bonded amount, set by underwriting
          and driven mostly by your credit and financials, and a qualifying single-year premium is
          generally a{" "}
          <Link href="/resources/is-a-surety-bond-tax-deductible">deductible business expense</Link>.
          Confirm the amount and bond form your landlord wants, then{" "}
          <Link href="/get-a-quote">get a quote</Link> and we will place it.
        </p>
      </Prose>
    </GuidePage>
  );
}
