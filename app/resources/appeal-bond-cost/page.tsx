import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("appeal-bond-cost")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "A California appeal bond is 1.5x the judgment via an admitted surety. The premium is a small percentage, and the surety usually requires collateral.",
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
    q: "What is a supersedeas bond?",
    a: "A supersedeas bond, also called an appeal bond, stays enforcement of a money judgment while you appeal. It guarantees the other side that if the judgment is affirmed, they will be paid, so the court holds collection during the appeal.",
  },
  {
    q: "How much is a California appeal bond?",
    a: "Under Code of Civil Procedure section 917.1, when an admitted surety issues the bond it must be 1.5 times the amount of the judgment. Other forms, like a cash deposit or personal surety, are set at double the judgment.",
  },
  {
    q: "How much does an appeal bond cost?",
    a: "The premium is typically 1% to 3% of the bond amount per year. Because the bond is 1.5x a large judgment, the premium can still be substantial, and the appeal usually lasts more than a year.",
  },
  {
    q: "Do I need collateral for an appeal bond?",
    a: "Usually, yes. Sureties generally require collateral for close to the full bond amount, in cash or a bank letter of credit, unless the appellant has significant net worth and liquid assets. It is one of the more collateral-heavy bonds.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="A California appeal (supersedeas) bond is set at 1.5 times the judgment when issued by an admitted surety, under CCP section 917.1. The premium is typically 1% to 3% of the bond amount per year, and the surety usually requires collateral, cash or a letter of credit, for most of the amount. It stays enforcement of the judgment while you appeal."
      intro="An appeal bond, or supersedeas bond, lets you pause collection on a money judgment while you appeal. It is one of the larger and more collateral-heavy court bonds. Here is how California sets the amount, what the premium runs, and why collateral usually comes up."
      faqs={faqs}
      related={[
        { label: "Appeal Bond", href: "/commercial-bonds/appeal-bond" },
        { label: "Surety bond collateral", href: "/resources/surety-bond-collateral" },
        { label: "Probate bond cost", href: "/resources/probate-bond-cost" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <StatGrid
        heading="Appeal bonds by the numbers"
        items={pickStats(["appealBondMultiple", "usSuretyPremium"])}
      />

      <Prose>
        <h2>What it does</h2>
        <p>
          A <Link href="/commercial-bonds/appeal-bond">supersedeas bond</Link>, commonly called an
          appeal bond, <strong>stays enforcement</strong> of a money judgment while you appeal it. It
          guarantees the winning party that if the judgment is upheld, they will be paid, which is why
          the court holds collection during the appeal.
        </p>

        <h2>How California sets the amount</h2>
        <p>
          Under <strong>Code of Civil Procedure section 917.1</strong>, an appeal bond issued by an{" "}
          <strong>admitted surety</strong> must be <strong>1.5 times</strong> the amount of the
          judgment. Other forms, such as a cash deposit or a personal surety, are set at{" "}
          <strong>double</strong> the judgment, which is one reason most appellants use an admitted
          surety bond.
        </p>
      </Prose>

      <div className="my-8 overflow-x-auto rounded-2xl border border-ink-200">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-surface text-left">
              <th className="p-4 font-display font-bold text-navy-900">Judgment</th>
              <th className="p-4 font-display font-bold text-navy-900">Bond amount (1.5x)</th>
              <th className="p-4 font-display font-bold text-navy-900">Typical annual premium</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            <tr>
              <td className="p-4 font-semibold text-navy-900">$100,000</td>
              <td className="p-4 text-ink-700">$150,000</td>
              <td className="p-4 text-ink-700">Roughly $1,500 to $4,500</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">$500,000</td>
              <td className="p-4 text-ink-700">$750,000</td>
              <td className="p-4 text-ink-700">Roughly $7,500 to $22,500</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">$1,000,000</td>
              <td className="p-4 text-ink-700">$1,500,000</td>
              <td className="p-4 text-ink-700">Roughly $15,000 to $45,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Prose>
        <h2>Collateral is usually required</h2>
        <p>
          Appeal bonds are among the most <strong>collateral-heavy</strong> bonds. A surety generally
          wants collateral for close to the full bond amount, in <strong>cash or a bank letter of
          credit</strong>, unless the appellant has substantial net worth and liquid assets relative
          to the bond. See <Link href="/resources/surety-bond-collateral">surety bond collateral</Link>{" "}
          for how that works and how to reduce it.
        </p>

        <h2>Get it placed on a deadline</h2>
        <p>
          Appeal bonds run on court deadlines, so start early. We place them, coordinate with your
          attorney, and work through the collateral question. Start a{" "}
          <Link href="/get-a-quote">quote</Link> with your judgment amount and we will size the bond
          and the premium.
        </p>
      </Prose>
    </GuidePage>
  );
}
