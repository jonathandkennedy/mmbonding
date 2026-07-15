import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("probate-bond-cost")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "The court sets a California probate bond's amount; you pay a small premium on a sliding scale, usually from the estate. What executors actually pay.",
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
    q: "How much does a California probate bond cost?",
    a: "The court sets the bond amount, usually tied to the value of the estate. You pay an annual premium, not the full amount, typically around 0.5% of the bond on a sliding scale that declines as the bond grows. The estate usually pays it.",
  },
  {
    q: "Who pays for the probate bond?",
    a: "In California the estate typically pays the premium, not the executor or administrator personally. It is treated as a cost of administering the estate.",
  },
  {
    q: "Do I always need a probate bond?",
    a: "Only when the court requires it. A will can waive the bond, and all heirs can agree to waive it. Small estates that fall under the state threshold often skip formal probate entirely, so no bond is needed.",
  },
  {
    q: "Does my credit affect the cost?",
    a: "Yes, especially on larger bonds. Credit is one factor the surety weighs alongside the estate. Challenged credit means a higher rate, not an automatic decline. We place tougher files.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="A California probate bond's amount is set by the court, usually based on the estate's value. You pay an annual premium, not the full amount, typically around 0.5% of the bond on a sliding scale, and the estate usually covers it. A will or all heirs can waive the bond, and small estates under the state threshold often avoid probate entirely."
      intro="A probate bond guarantees an executor or administrator handles an estate honestly. You do not choose its size, and you do not pay the full amount. Here is how a California probate bond is priced, who pays, and when one is even required."
      faqs={faqs}
      related={[
        { label: "Probate Bond", href: "/commercial-bonds/probate-bond" },
        { label: "Guardianship Bond", href: "/commercial-bonds/guardianship-bond" },
        { label: "Appeal Bond", href: "/commercial-bonds/appeal-bond" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <StatGrid
        heading="Probate bonds by the numbers"
        items={pickStats(["caSmallEstate", "usSuretyPremium"])}
      />

      <Prose>
        <h2>The court sets the amount, not you</h2>
        <p>
          A <Link href="/commercial-bonds/probate-bond">probate bond</Link> (also called an executor
          or administrator bond) has its amount set by the <strong>court</strong>, generally tied to
          the value of the estate the personal representative will handle. You do not pick the number,
          and you do not post the full amount. You pay an annual <strong>premium</strong>, a small
          percentage of it.
        </p>

        <h2>What you actually pay</h2>
        <p>
          Probate bond premiums run on a <strong>sliding scale</strong>, typically starting around{" "}
          <strong>0.5%</strong> of the bond amount and declining as the bond grows. These are general
          figures, not a quote, and your credit and the estate factor in.
        </p>
      </Prose>

      <div className="my-8 overflow-x-auto rounded-2xl border border-ink-200">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-surface text-left">
              <th className="p-4 font-display font-bold text-navy-900">Bond amount</th>
              <th className="p-4 font-display font-bold text-navy-900">Typical annual premium</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            <tr>
              <td className="p-4 font-semibold text-navy-900">Around $20,000</td>
              <td className="p-4 text-ink-700">Roughly $100 to $150</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Around $500,000</td>
              <td className="p-4 text-ink-700">Roughly $500 to $1,000</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Around $1,000,000</td>
              <td className="p-4 text-ink-700">Often near $2,800</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Prose>
        <h2>The estate usually pays</h2>
        <p>
          In California the <strong>estate</strong> typically pays the premium, not the executor out
          of pocket. It is a cost of administering the estate, and the bond generally stays in place
          only for the duration of the probate.
        </p>

        <h2>When a bond is required, and when it is not</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Waived by the will.</strong> Many wills expressly waive the bond for the named
              executor, so none is required.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Waived by the heirs.</strong> If all beneficiaries agree in writing, the court
              can waive the bond.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Small estates.</strong> Estates under the California small-estate threshold
              often avoid formal probate altogether, so no bond comes up.
            </span>
          </li>
        </ul>

        <h2>Getting it placed</h2>
        <p>
          When the court does require a bond, we place it fast, credit challenges included, and often
          coordinate with your attorney. See the full{" "}
          <Link href="/commercial-bonds/probate-bond">probate bond</Link> page, or if your matter is a{" "}
          <Link href="/commercial-bonds/guardianship-bond">guardianship</Link> or{" "}
          <Link href="/commercial-bonds/appeal-bond">appeal</Link>, we place those court bonds too.{" "}
          <Link href="/get-a-quote">Start a quote</Link> with the amount the court set.
        </p>
      </Prose>
    </GuidePage>
  );
}
