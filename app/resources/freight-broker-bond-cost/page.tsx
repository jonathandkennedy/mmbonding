import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("freight-broker-bond-cost")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "You pay a premium, not the full $75,000 BMC-84. Typical rates run 1% to 10% of the bond by credit, and how BMC-84 compares to a BMC-85 trust.",
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
    q: "How much does a freight broker bond cost?",
    a: "You pay an annual premium, not the full $75,000. Premiums typically run 1% to 10% of the bond amount, set mostly by credit. Brokers with strong credit generally land at the low end; newer or credit-challenged brokers pay more. We shop markets for your best rate.",
  },
  {
    q: "Do I pay the full $75,000?",
    a: "No. The $75,000 is the FMCSA's required coverage, not your cost. You pay a percentage of it as an annual premium based on your credit, finances, and experience.",
  },
  {
    q: "What is the difference between a BMC-84 and a BMC-85?",
    a: "Both satisfy the FMCSA's $75,000 requirement. A BMC-84 is a surety bond: you pay a small premium and keep your capital. A BMC-85 is a trust that ties up the full $75,000 in cash or assets. Most brokers choose the BMC-84 to keep their money working.",
  },
  {
    q: "Can I get a BMC-84 with bad credit?",
    a: "Often, yes. Credit affects the rate, not your eligibility outright. We work the markets that write credit-challenged and newer brokers rather than declining at the door. Underwriting still applies.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="A freight broker bond (BMC-84) costs an annual premium, not the full $75,000. Premiums typically run 1% to 10% of the bond amount, driven mostly by credit, so strong-credit brokers pay the least. It satisfies the FMCSA requirement while keeping your capital free, unlike a BMC-85 trust. We place credit-challenged and new brokers too."
      intro="The FMCSA requires a $75,000 BMC-84 bond to get and keep freight broker authority, but that is not what you pay. Here is what the bond actually costs, what drives the premium, and how the BMC-84 compares to a BMC-85 trust."
      faqs={faqs}
      related={[
        { label: "Freight Broker Bond", href: "/commercial-bonds/freight-broker-bond" },
        { label: "Bad credit surety bonds", href: "/resources/surety-bonds-with-bad-credit" },
        { label: "Commercial Bonds", href: "/commercial-bonds" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <StatGrid
        heading="Freight broker bond cost by the numbers"
        items={pickStats(["freightBrokerBond", "usSuretyPremium"])}
      />

      <Prose>
        <h2>Premium, not the full $75,000</h2>
        <p>
          The FMCSA requires a <strong>$75,000</strong> BMC-84 bond before it will issue your MC
          operating authority, but you do not post $75,000. You pay an annual{" "}
          <strong>premium</strong>, a percentage of the bond amount. Premiums typically run{" "}
          <strong>1% to 10%</strong> of the $75,000, set mostly by your personal credit, with
          finances and experience factoring in. Strong-credit brokers land near the low end; newer or
          credit-challenged brokers pay more.
        </p>

        <h2>What drives your rate</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Credit.</strong> The biggest lever. It largely decides where in the 1% to 10%
              range you land.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Experience and finances.</strong> An established brokerage with clean financials
              is an easier file than a brand-new authority.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>The market.</strong> Sureties price freight bonds differently, so shopping the
              file matters, especially on tougher credit.
            </span>
          </li>
        </ul>

        <h2>BMC-84 vs. BMC-85</h2>
        <p>
          The FMCSA lets you meet the $75,000 requirement two ways. A <strong>BMC-84</strong> is a
          surety bond: you pay a small premium and keep your capital free to run the business. A{" "}
          <strong>BMC-85</strong> is a trust fund that locks up the full $75,000 in cash or assets.
          Most brokers choose the BMC-84 so their money stays working, the same capital logic behind a{" "}
          <Link href="/resources/surety-bond-vs-letter-of-credit">bond versus a letter of credit</Link>.
        </p>

        <h2>Newer or credit-challenged?</h2>
        <p>
          A thin file or rough credit means a higher rate, not an automatic decline. We shop the
          markets that write these brokers. See the full{" "}
          <Link href="/commercial-bonds/freight-broker-bond">freight broker bond</Link> page and how
          we place <Link href="/resources/surety-bonds-with-bad-credit">bad-credit surety bonds</Link>,
          then <Link href="/get-a-quote">start a quote</Link> for your exact rate.
        </p>
      </Prose>
    </GuidePage>
  );
}
