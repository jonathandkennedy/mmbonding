import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("auto-dealer-bond-cost")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "You pay a premium, not the full $50,000 California DMV dealer bond. What the premium runs, what moves it, and the $10,000 wholesale tier.",
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
    q: "How much does a California auto dealer bond cost?",
    a: "You pay an annual premium, not the full $50,000. With strong credit the premium can start around 1% of the bond amount per year; weaker credit costs more. We shop multiple markets to find your best available rate.",
  },
  {
    q: "Do all dealers post a $50,000 bond?",
    a: "No. Retail used and new vehicle dealers generally post $50,000, while motorcycle/ATV-only and small wholesale-only dealers can qualify for a $10,000 bond. Your DMV license class sets the amount, so confirm it before you file.",
  },
  {
    q: "Do I pay the full $50,000?",
    a: "No. The $50,000 is the bond's coverage amount, not your cost. You pay a percentage of it as an annual premium, set mostly by your personal credit.",
  },
  {
    q: "Can I get a dealer bond with bad credit?",
    a: "Usually yes. Weaker credit means a higher premium, not an automatic decline, because we shop the surety markets that write credit-challenged dealers. Underwriting still applies.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="A California auto dealer bond costs an annual premium, not the full $50,000. With strong credit it can start near 1% of the bond amount a year; weaker credit costs more. Retail dealers post $50,000, while motorcycle/ATV-only and small wholesale-only dealers can qualify for $10,000. We shop markets and place tougher credit too."
      intro="The California DMV dealer bond has a fixed face amount, but that is not what you pay. Here is what an auto dealer bond actually costs, what drives the premium, and the lower tier some dealer classes qualify for."
      faqs={faqs}
      related={[
        { label: "Auto Dealer Bond", href: "/commercial-bonds/auto-dealer-bond" },
        { label: "How to get a dealer license", href: "/resources/how-to-get-a-california-auto-dealer-license" },
        { label: "Dealer bonds by type", href: "/resources/used-car-dealer-bond-by-type" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <StatGrid
        heading="Dealer bond cost by the numbers"
        items={pickStats(["dealerBond", "dealerBondLow", "usSuretyPremium"])}
      />

      <Prose>
        <h2>Premium, not face amount</h2>
        <p>
          The number on the bond, <strong>$50,000</strong>, is the coverage the California DMV
          requires under Vehicle Code §11710, not your cost. You pay an annual{" "}
          <strong>premium</strong>, a percentage of that amount set by underwriting. With strong
          credit the premium can start around <strong>1%</strong> of the bond a year; as credit
          weakens, the rate climbs. We quote your real number rather than a teaser.
        </p>

        <h2>The amount depends on your dealer class</h2>
        <p>
          Not every dealer posts $50,000. The DMV sets the bond by license class, so confirm yours
          before you file.
        </p>
      </Prose>

      <div className="my-8 overflow-x-auto rounded-2xl border border-ink-200">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-surface text-left">
              <th className="p-4 font-display font-bold text-navy-900">Dealer class</th>
              <th className="p-4 font-display font-bold text-navy-900">Bond amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            <tr>
              <td className="p-4 font-semibold text-navy-900">Retail used or new vehicle dealer</td>
              <td className="p-4 text-ink-700">$50,000</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Wholesale-only (under 25 units)</td>
              <td className="p-4 text-ink-700">$10,000</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Motorcycle or ATV-only dealer</td>
              <td className="p-4 text-ink-700">$10,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Prose>
        <h2>What moves the premium</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Credit.</strong> The single biggest factor. Strong credit earns the lowest
              rate; challenged credit costs more but is still placeable.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Bond amount.</strong> A $10,000 wholesale bond costs less in dollars than a
              $50,000 retail bond at the same rate.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>The market.</strong> Different sureties price the same file differently, which
              is exactly why shopping it as a broker matters.
            </span>
          </li>
        </ul>

        <h2>Bad credit is still placeable</h2>
        <p>
          A low score means a higher premium, not a closed door. We shop the markets that write
          credit-challenged dealers instead of declining at the first no. See the full{" "}
          <Link href="/commercial-bonds/auto-dealer-bond">auto dealer bond</Link> page, or if you are
          still getting licensed, start with{" "}
          <Link href="/resources/how-to-get-a-california-auto-dealer-license">
            how to get a California auto dealer license
          </Link>
          . Ready now? <Link href="/get-a-quote">Get a quote</Link> and we will price your exact
          bond.
        </p>
      </Prose>
    </GuidePage>
  );
}
