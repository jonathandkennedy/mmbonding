import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("california-health-studio-bond")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "California gyms and studios that sell prepaid memberships must post a health studio bond, starting at $50,000. Who needs it, the amount, and what it costs.",
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
    q: "Who needs a California health studio bond?",
    a: "Gyms, fitness studios, and health clubs that sell prepaid memberships or contracts. California's health studio law protects members who pay in advance, so studios that take that money must post a bond and file it with the Secretary of State.",
  },
  {
    q: "How much is the health studio bond?",
    a: "For a studio's first year of business in California, the bond is at least $50,000. From there it scales with your gross income from the business, and can run higher. You pay a premium on that amount, not the full sum.",
  },
  {
    q: "Do all gyms need one?",
    a: "It applies to studios that sell prepaid memberships or contracts. If you take money in advance for future services, the law generally requires the bond. If you only charge as-you-go, you may not. Tell us your setup and we will confirm.",
  },
  {
    q: "How much does it cost, and can I get it fast?",
    a: "You pay a premium that is a percentage of the bonded amount, set by underwriting. These are usually affordable, and we place them quickly once we have your required amount.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="California gyms and studios that sell prepaid memberships must post a health studio bond and file it with the Secretary of State (Civil Code 1812.80 et seq.). It starts at $50,000 for a studio's first year and scales with gross income. You pay an annual premium, a percentage of the bond, not the full amount. It protects members who pay in advance."
      intro="If your gym or studio sells memberships people pay for up front, California requires a bond that protects those members. Here is who needs the health studio bond, how the amount is set, and what it costs."
      faqs={faqs}
      related={[
        { label: "Health Studio Bond", href: "/commercial-bonds/health-studio-bond" },
        { label: "Commercial & Specialty Bonds", href: "/commercial-bonds" },
        { label: "How much does a surety bond cost", href: "/resources/how-much-does-a-surety-bond-cost" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <StatGrid
        heading="Health studio bond by the numbers"
        items={pickStats([
          "healthStudioBond",
          "minEarnedPremium",
          "usSuretyPremium",
          "premiumDeductible",
        ])}
      />

      <Prose>
        <h2>Why California requires it</h2>
        <p>
          California&apos;s health studio law (Civil Code 1812.80 et seq.) protects members who{" "}
          <strong>pay in advance</strong> for a gym or studio contract. If a studio closes or fails to
          deliver, members can recover against the{" "}
          <Link href="/commercial-bonds/health-studio-bond">health studio bond</Link>. Because it
          protects the public and not the studio, it is a classic{" "}
          <Link href="/resources/types-of-surety-bonds">license and permit bond</Link>, filed with the
          Secretary of State.
        </p>

        <h2>How the amount is set</h2>
        <p>
          For a studio&apos;s <strong>first year</strong> of doing business in California, the bond is
          at least <strong>$50,000</strong>. After that, the amount scales with your{" "}
          <strong>gross income</strong> from the business, which you report to the state, so a larger
          operation posts a larger bond. You pay a premium on that amount, never the full sum.
        </p>

        <h2>What it costs, and getting placed</h2>
        <p>
          Health studio bonds are usually affordable. You pay an annual <strong>premium</strong>, a
          percentage of the bonded amount set by underwriting, and for a small business a qualifying
          single-year premium is generally a <Link href="/resources/is-a-surety-bond-tax-deductible">deductible
          business expense</Link>. Tell us whether you sell prepaid memberships and your gross income,
          and we will confirm the amount and <Link href="/get-a-quote">quote it</Link>.
        </p>
      </Prose>
    </GuidePage>
  );
}
