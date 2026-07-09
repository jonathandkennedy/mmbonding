import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { facts } from "@/lib/regulatory";
import { pickStats } from "@/lib/stats";
import { usd } from "@/lib/utils";

const guide = getGuide("contractor-license-bond-cost")!;

export const metadata: Metadata = {
  title: guide.title,
  description: `What a California contractor license bond costs: you pay a premium, usually ${facts.licensePremiumRange.lowPct}% to ${facts.licensePremiumRange.highPct}% of the ${usd(facts.licenseBondAmount)} bond, driven by credit. Reviewed by a licensed broker.`,
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
    q: "Do I pay the full $25,000?",
    a: `No. ${usd(facts.licenseBondAmount)} is the bond's face amount, not your cost. You pay an annual premium that is a percentage of it, usually ${facts.licensePremiumRange.lowPct}% to ${facts.licensePremiumRange.highPct}%, based mostly on your credit.`,
  },
  {
    q: "What is the cheapest a license bond can be?",
    a: "With strong credit, the annual premium can land in the low hundreds of dollars. Exact pricing depends on the market and your credit, which is why a broker quote beats a guess.",
  },
  {
    q: "Why is my quote higher than the advertised rate?",
    a: "Teaser rates usually assume excellent credit. Real pricing reflects your actual credit and history. If yours is challenged, a broker shops multiple markets to find your best available rate instead of declining you.",
  },
  {
    q: "Does the bond cost the same every year?",
    a: "It renews annually, and the premium can change with your credit. As your credit improves, we can re-shop the bond for a better rate at renewal.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={`A California contractor license bond costs an annual premium, not the full ${usd(facts.licenseBondAmount)}. Expect roughly ${facts.licensePremiumRange.lowPct}% to ${facts.licensePremiumRange.highPct}% of the bond amount, driven mostly by credit. Strong credit can start in the low hundreds per year; tougher credit costs more. We quote your exact rate fast.`}
      intro={`The California contractor license bond has a fixed ${usd(facts.licenseBondAmount)} face amount, but that is not what you pay. Here is how the premium actually works and what moves it.`}
      faqs={faqs}
      related={[
        { label: "Contractor License Bond", href: "/contractor-license-bond" },
        { label: "Get a Quote", href: "/get-a-quote" },
        { label: "Bad credit? We place it", href: "/hard-to-place-surety-bonds" },
      ]}
    >
      <StatGrid
        heading="License bond, by the numbers"
        items={pickStats([
          "caLicenseBond",
          "priorLicenseBond",
          "caContractors",
          "usSuretyPremium",
        ])}
      />

      <Prose>
        <h2>Premium, not face amount</h2>
        <p>
          The number people fixate on, <strong>{usd(facts.licenseBondAmount)}</strong>, is the bond&apos;s
          penal sum: the maximum a valid claim could pay out. You do not pay that. You pay an annual{" "}
          <strong>premium</strong>, which is a percentage of the bond amount set by underwriting.
        </p>
        <p>
          For the California license bond, that premium is typically{" "}
          <strong>
            {facts.licensePremiumRange.lowPct}% to {facts.licensePremiumRange.highPct}%
          </strong>{" "}
          of the {usd(facts.licenseBondAmount)}, driven mostly by your personal credit.
        </p>

        <h2>What moves the price</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Credit.</strong> The single biggest factor. Strong credit earns the lowest
              rates; challenged credit costs more but is still very placeable.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>The market.</strong> Different sureties price the same file differently, which
              is exactly why shopping it as a broker matters.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>History.</strong> Prior claims or a disciplinary record move you into
              hard-to-place territory, where we specialize.
            </span>
          </li>
        </ul>

        <h2>A realistic range</h2>
        <p>
          With strong credit, the annual premium can start in the <strong>low hundreds of dollars</strong>.
          As credit weakens, the rate climbs toward the upper end of the range. We never publish a
          fake teaser number; we quote your actual rate. Start with a real{" "}
          <Link href="/get-a-quote">quote</Link>, or read the full{" "}
          <Link href="/contractor-license-bond">contractor license bond</Link> page.
        </p>

        <h2>Bad credit?</h2>
        <p>
          A low score does not mean no bond. It means a higher rate and, sometimes, a different
          market. That is our specialty. See{" "}
          <Link href="/hard-to-place-surety-bonds">hard-to-place surety bonds</Link> for how we place
          credit-challenged files.
        </p>
      </Prose>
    </GuidePage>
  );
}
