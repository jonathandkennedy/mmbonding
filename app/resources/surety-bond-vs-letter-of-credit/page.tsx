import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("surety-bond-vs-letter-of-credit")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "A surety bond and a bank letter of credit both guarantee an obligation, but differ on capital, cost, and risk. Why contractors usually prefer the bond.",
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
    q: "What is the difference between a surety bond and a letter of credit?",
    a: "A surety bond is a three-party guarantee backed by a surety company, priced as a small annual premium, and paid only after the surety confirms a valid claim. A letter of credit (LOC) is a bank instrument that ties up your credit line and pays the beneficiary on demand, often without proving default.",
  },
  {
    q: "Why do contractors prefer a surety bond over a letter of credit?",
    a: "Because a bond does not tie up your borrowing capacity. An LOC reduces the bank credit you could use for payroll, equipment, or growth, while a bond costs a premium and leaves your bank line intact. A bond also adds a claims review, where an LOC can be drawn on demand.",
  },
  {
    q: "Does a letter of credit tie up my cash?",
    a: "Effectively, yes. A bank issues an LOC against your credit facility or cash collateral, so the full face amount is no longer available to your business. A surety bond leaves that capital free.",
  },
  {
    q: "Can I use a surety bond instead of a letter of credit?",
    a: "Often, if the obligee accepts a bond. Many owners and agencies take either one. When they do, a bond usually preserves more capital and cash flow. We can quote a bond so you can compare it against the LOC your bank offered.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="A surety bond and a letter of credit both guarantee an obligation, but they work differently. A bond is a three-party guarantee priced as a small premium, paid only on a verified claim, and it leaves your bank credit intact. A letter of credit ties up your credit line and pays on demand. Contractors usually prefer the bond."
      intro="When an owner or agency wants security, you may be able to satisfy it with a surety bond or a bank letter of credit. They look similar on paper and behave very differently for your business. Here is how they compare on capital, cost, and risk."
      faqs={faqs}
      related={[
        { label: "Contract Bonds", href: "/contract-bonds" },
        { label: "Bonding capacity", href: "/resources/surety-bond-capacity" },
        { label: "Surety bond collateral", href: "/resources/surety-bond-collateral" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <StatGrid
        heading="Bond vs. letter of credit by the numbers"
        items={pickStats(["usSuretyPremium", "caContractors", "caLicenseBond"])}
      />

      <Prose>
        <h2>Two guarantees, built differently</h2>
        <p>
          Both instruments promise a third party that an obligation will be met. A{" "}
          <strong>surety bond</strong> is a three-party guarantee: you, the obligee, and a surety
          company that underwrites you and stands behind the obligation. A{" "}
          <strong>letter of credit (LOC)</strong> is a two-party bank product: your bank promises to
          pay the beneficiary, and it holds your credit line or cash to back that promise. The
          difference in structure is what drives the difference in cost and risk.
        </p>
      </Prose>

      <div className="my-8 overflow-x-auto rounded-2xl border border-ink-200">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-surface text-left">
              <th className="p-4 font-semibold text-navy-900"></th>
              <th className="p-4 font-display font-bold text-navy-900">Surety bond</th>
              <th className="p-4 font-display font-bold text-navy-900">Letter of credit</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            <tr>
              <td className="p-4 font-semibold text-navy-900">Backed by</td>
              <td className="p-4 text-ink-700">A surety company</td>
              <td className="p-4 text-ink-700">Your bank</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Your capital</td>
              <td className="p-4 text-ink-700">Bank credit line stays free</td>
              <td className="p-4 text-ink-700">Ties up your credit line or cash</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Cost</td>
              <td className="p-4 text-ink-700">Annual premium, a percentage of the amount</td>
              <td className="p-4 text-ink-700">Bank fees plus reduced borrowing power</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">On a default</td>
              <td className="p-4 text-ink-700">Surety investigates before paying a valid claim</td>
              <td className="p-4 text-ink-700">Often paid to the beneficiary on demand</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">You repay</td>
              <td className="p-4 text-ink-700">The surety, under your indemnity agreement</td>
              <td className="p-4 text-ink-700">The bank, immediately</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Prose>
        <h2>Capital is the real difference</h2>
        <p>
          The biggest practical gap is what each does to your{" "}
          <strong>borrowing capacity</strong>. A bank issues an LOC against your credit facility, so
          the full face amount is no longer available to fund payroll, materials, or a new job. A
          surety bond does not touch that line. For a growing contractor, keeping the bank credit free
          is often worth more than the premium difference. It is the same reason a bond usually beats
          the <Link href="/resources/surety-bond-vs-cslb-cash-deposit">cash deposit</Link> a state
          will accept in lieu of a license bond.
        </p>

        <h2>Cost and risk</h2>
        <p>
          A bond costs an <strong>annual premium</strong>, a percentage of the bond amount set by
          underwriting. An LOC costs bank fees plus the opportunity cost of the credit it locks up.
          On a default the two also behave differently: a surety <strong>investigates</strong> a
          claim before paying, which can protect you from an unfair draw, while many letters of credit
          are drawn <strong>on demand</strong> with little review. Either way you ultimately repay,
          the surety under your indemnity agreement, or the bank the moment the LOC is drawn.
        </p>

        <h2>When each makes sense</h2>
        <p>
          Some obligees specify one or the other; many accept either. When you have the choice, a bond
          usually preserves more capital and cash flow, which is why contractors lean toward it,
          especially as their <Link href="/resources/surety-bond-capacity">bonding capacity</Link>{" "}
          grows. An LOC can still fit a specific banking relationship or a requirement that only a
          bank instrument satisfies.
        </p>
        <p>
          If an owner offered you the choice, or your bank quoted an LOC, let us price the bond next
          to it. Start a <Link href="/get-a-quote">quote</Link> and we will show you the real
          numbers, capital impact included.
        </p>
      </Prose>
    </GuidePage>
  );
}
