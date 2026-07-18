import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { BarChart } from "@/components/bar-chart";
import { getGuide } from "@/lib/guides";
import { pickStats, sources } from "@/lib/stats";

const guide = getGuide("california-contractor-bonding-cost-report-2026")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "What California contractors actually pay to get bonded in 2026: license bond and contract bond premiums by credit tier, bond type, and job size.",
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
    q: "How much does it cost to get bonded as a contractor in California?",
    a: "You pay a premium, not the full bond amount. The required $25,000 contractor license bond typically runs about $100 to $400 a year for a contractor with solid credit, and more when credit is challenged. Contract bonds like performance and payment bonds run about 1% to 3% of the contract value.",
  },
  {
    q: "Why did California license bond premiums go up?",
    a: "The required bond amount rose. On January 1, 2023, California raised the contractor license bond from $15,000 to $25,000. Because the premium is a percentage of the bond amount, a larger required bond means a higher premium for the same contractor.",
  },
  {
    q: "Why does one contractor pay more than another for the same bond?",
    a: "Credit and financial strength, more than the bond size, set the rate. The same $25,000 license bond can cost around $100 for strong credit and several times that for challenged credit. Underwriters price the risk of the individual, not just the bond.",
  },
  {
    q: "How much is a performance bond in California?",
    a: "A performance bond is usually about 1% to 3% of the contract amount, driven by your credit, experience, and financial statements. On a $500,000 job that is roughly $5,000 to $15,000. See our performance bond cost guide for the full breakdown.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="In California you pay a premium, not the full bond amount. The required $25,000 contractor license bond typically runs about $100 to $400 a year for solid credit, and more when credit is challenged. Contract bonds like performance and payment bonds run about 1% to 3% of the contract. Credit and financials, not just bond size, set what you pay. This 2026 report breaks the ranges down by credit tier and bond type."
      intro="How much does it actually cost to get bonded in California? We pulled together the statutory bond amounts, public industry data, and the real premium ranges we see placing bonds for California contractors. Here is what contractors pay in 2026, broken down by credit tier, bond type, and job size."
      faqs={faqs}
      related={[
        { label: "Cost calculator", href: "/surety-bond-cost-calculator" },
        { label: "License bond cost", href: "/resources/contractor-license-bond-cost" },
        { label: "Performance bond cost", href: "/resources/performance-bond-cost" },
        { label: "Cost by credit score", href: "/resources/surety-bond-cost-by-credit-score" },
      ]}
    >
      <StatGrid
        heading="California bonding, by the numbers"
        items={pickStats([
          "caLicenseBond",
          "priorLicenseBond",
          "caContractors",
          "usSuretyPremium",
        ])}
      />

      <Prose>
        <h2>The headline: you pay a premium, not the bond amount</h2>
        <p>
          The single biggest misconception about getting bonded is the number itself. A{" "}
          <strong>$25,000</strong> license bond does not cost $25,000. That figure is the{" "}
          <strong>coverage</strong>, the most a valid claim could pay. What you actually pay is an
          annual <strong>premium</strong>, a fraction of the bond amount set by your credit and the
          type of bond. For a well-qualified contractor, the $25,000{" "}
          <Link href="/contractor-license-bond">license bond</Link> often costs about the price of a
          nice dinner for the year.
        </p>
        <p>The key findings from the 2026 numbers:</p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>The $25,000 license bond</strong> typically runs about $100 to $400 a year for
              solid credit, and more when credit is challenged.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Credit is the biggest lever.</strong> The same bond can cost 10x or more
              between the strongest and weakest credit tiers.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Contract bonds</strong> (performance and payment) run about 1% to 3% of the
              contract, priced on your finances and experience, not just the job size.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>The 2023 increase</strong> from a $15,000 to a $25,000 required license bond
              raised premiums proportionally, since the premium is a percentage of the bond.
            </span>
          </li>
        </ul>
      </Prose>

      <BarChart
        title="Typical annual premium on the $25,000 California license bond, by credit tier"
        data={[
          { label: "Excellent (720+)", value: 150, display: "$100-$150" },
          { label: "Good (680-719)", value: 250, display: "$150-$250" },
          { label: "Fair (640-679)", value: 500, display: "$250-$500" },
          { label: "Challenged (<640)", value: 2000, display: "$750-$3,750", emphasis: true },
        ]}
        caption="Illustrative annual premium ranges for the $25,000 license bond, based on bonds MM Bonding places for California contractors. Ranges, not quotes; your number depends on your full profile."
      />

      <Prose>
        <h2>Credit is the biggest lever, not bond size</h2>
        <p>
          Two contractors carrying the identical $25,000 bond can pay very different premiums. The
          license bond is priced mostly on <strong>personal credit</strong>, so it can run from a
          minimum near $100 for excellent credit up to <strong>1% to 15%</strong> of the bond for
          challenged credit. That is the widest spread in California bonding, and it is why a broker
          who shops multiple markets matters most for contractors with thin or bruised credit. Even a
          declined file is usually placeable, just at a higher rate. See{" "}
          <Link href="/resources/surety-bond-cost-by-credit-score">cost by credit score</Link> for
          the tier-by-tier detail.
        </p>

        <h2>Cost by bond type</h2>
        <p>
          The type of bond matters as much as the amount. Here is how the common California bonds are
          typically priced.
        </p>
      </Prose>

      <div className="my-8 overflow-x-auto rounded-2xl border border-ink-200">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-surface text-left">
              <th className="p-4 font-display font-bold text-navy-900">Bond type</th>
              <th className="p-4 font-display font-bold text-navy-900">Typical premium</th>
              <th className="p-4 font-display font-bold text-navy-900">What sets the rate</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            <tr>
              <td className="p-4 font-semibold text-navy-900">Contractor license bond ($25,000)</td>
              <td className="p-4 text-ink-700">~$100 to $400 (up to 1% to 15% of bond)</td>
              <td className="p-4 text-ink-700">Personal credit</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Performance &amp; payment bond</td>
              <td className="p-4 text-ink-700">~1% to 3% of the contract</td>
              <td className="p-4 text-ink-700">Credit, financials, experience</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Bid bond</td>
              <td className="p-4 text-ink-700">Often no premium, or nominal</td>
              <td className="p-4 text-ink-700">Issued with the bond line</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">LLC employee/worker bond ($100,000)</td>
              <td className="p-4 text-ink-700">Roughly $400 to $1,200</td>
              <td className="p-4 text-ink-700">Credit</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Small commercial / permit bonds</td>
              <td className="p-4 text-ink-700">Often a minimum near $100</td>
              <td className="p-4 text-ink-700">Low risk, flat minimum</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Prose>
        <p className="text-sm text-muted">
          Ranges reflect reasonable-to-strong credit and are illustrative, not quotes. Strong credit
          lands at the low end; challenged credit costs more but is still placeable.
        </p>

        <h2>The 2023 jump that reset the baseline</h2>
        <p>
          A big part of why bonding costs more today than a few years ago is not the rate, it is the
          required bond amount. Effective <strong>January 1, 2023</strong>, California raised the
          contractor license bond from <strong>$15,000 to $25,000</strong>, a 67% increase in the
          coverage every licensed contractor must carry. Because premium is a percentage of the bond,
          the same contractor pays more for the larger required bond.
        </p>
      </Prose>

      <BarChart
        title="California required contractor license bond amount"
        data={[
          { label: "Through 2022", value: 15000, display: "$15,000" },
          { label: "2023 to now", value: 25000, display: "$25,000", emphasis: true },
        ]}
        source={sources.bpc}
        caption="California raised the required contractor license bond from $15,000 to $25,000 effective January 1, 2023 (Business & Professions Code)."
      />

      <Prose>
        <h2>Methodology and sources</h2>
        <p>
          This report combines two kinds of data. <strong>Statutory and public figures</strong>, the
          required bond amounts, the licensed-contractor count, and industry premium volume, come
          from the{" "}
          <a href={sources.cslb.url} target="_blank" rel="nofollow noopener">
            CSLB
          </a>
          , the{" "}
          <a href={sources.bpc.url} target="_blank" rel="nofollow noopener">
            California Business &amp; Professions Code
          </a>
          , and the{" "}
          <a href={sources.sfaa.url} target="_blank" rel="nofollow noopener">
            Surety &amp; Fidelity Association of America
          </a>
          , each linked above. <strong>Premium ranges</strong> are illustrative and reflect surety
          bonds MM Bonding places for California contractors across credit tiers. They are ranges, not
          quotes; underwriting sets the final number, and no honest broker promises a specific premium
          sight unseen.
        </p>

        <h2>Find your actual number</h2>
        <p>
          Ranges are useful for planning, but your real cost comes from your file. For a fast
          estimate, use our{" "}
          <Link href="/surety-bond-cost-calculator">surety bond cost calculator</Link>. For the exact
          number you qualify for, <Link href="/get-a-quote">get a quote</Link>. We shop multiple
          markets and bring back the real premium, credit challenges included. Members of the press or
          fellow contractors are welcome to cite this report with a link back to this page.
        </p>
      </Prose>
    </GuidePage>
  );
}
