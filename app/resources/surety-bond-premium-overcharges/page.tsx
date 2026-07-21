import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("surety-bond-premium-overcharges")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "Your surety bond premium is set by the carrier, not a hidden markup. How bond pricing works, what a fair charge looks like, and how to spot an overcharge.",
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
    q: "How is a surety bond premium set?",
    a: "The surety carrier sets it. The premium is a percentage of the bond amount, based mostly on your credit and the type of bond, and the rate the carrier quotes is the price. A broker places the bond at that rate; the broker does not invent the premium.",
  },
  {
    q: "Can a broker add fees on top of the premium?",
    a: "A legitimate broker charges the carrier's premium, sometimes with a small, clearly disclosed fee for a service like filing. What is not legitimate is stacking undisclosed markups on top of the premium the carrier actually quoted. If you cannot see what you are paying for, ask.",
  },
  {
    q: "How do I know if I am overpaying for a surety bond?",
    a: "Three checks: know the typical range for your bond and credit, ask to see the carrier's quoted premium broken out from any fee, and get a quote from more than one broker. If one number is far above the others with no explanation, dig in.",
  },
  {
    q: "Is a minimum premium an overcharge?",
    a: "No. Small, low-risk bonds often hit a minimum premium, commonly around $100, because there is a floor on what a carrier will write a bond for. That is standard pricing, not a markup.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="Your surety bond premium is set by the carrier, a percentage of the bond amount based on your credit and the bond type. A broker places the bond at that rate. A legitimate broker charges the carrier's premium plus, at most, a small disclosed fee, not undisclosed markups on top of the quoted premium. To check you are paying fairly: know the typical range, ask for the premium broken out, and compare more than one quote."
      intro="Almost every broker prices bonds honestly. But because you rarely see the carrier's rate yourself, it is worth understanding how surety pricing actually works, so you can tell a fair charge from an overcharge. Here is how the premium is set, and how to check you are paying the right number."
      faqs={faqs}
      related={[
        { label: "CA bonding cost report", href: "/resources/california-contractor-bonding-cost-report-2026" },
        { label: "How much does a surety bond cost", href: "/resources/how-much-does-a-surety-bond-cost" },
        { label: "Verify your bond is real", href: "/resources/how-to-verify-your-surety-bond-is-real" },
        { label: "Why use a surety broker", href: "/why-use-a-surety-broker" },
      ]}
    >
      <StatGrid
        heading="Surety bond pricing by the numbers"
        items={pickStats([
          "caLicenseBond",
          "minEarnedPremium",
          "usSuretyPremium",
          "caContractors",
        ])}
      />

      <Prose>
        <h2>The premium comes from the carrier, not the middleman</h2>
        <p>
          Here is the part that protects you once you understand it: the{" "}
          <strong>surety carrier</strong> sets the premium. It is a percentage of the bond amount,
          driven mostly by your <Link href="/resources/surety-bond-cost-by-credit-score">credit</Link>{" "}
          and the type of bond, and the rate the carrier quotes <em>is</em> the price. A broker&apos;s
          job is to shop carriers and place your bond at that rate, not to invent a number. When
          someone charges well above the carrier&apos;s quoted premium and does not explain why, that
          is the problem.
        </p>

        <h2>What a real case looks like</h2>
        <p>
          In <strong>February 2026</strong>, the Louisiana Department of Insurance announced that a
          Metairie surety bond producer and his agency agreed to <strong>refund more than $1.2
          million</strong> in premiums and pay a <strong>$250,000</strong> fine, the maximum civil
          penalty, after the department found they had added <strong>unlawful fees on top of the
          premiums the carriers actually quoted</strong>, overcharging construction clients who
          relied on the firm to place required commercial surety bonds. Sources:{" "}
          <a
            href="https://www.insurancebusinessmag.com/us/news/risk-compliance-legal/louisiana-surety-broker-to-refund-1-2-million-in-premiums-over-fraudulent-charges-564309.aspx"
            target="_blank"
            rel="nofollow noopener"
          >
            Insurance Business
          </a>{" "}
          and{" "}
          <a
            href="https://www.legalnewsline.com/louisiana-record/la-announces-1m-in-repayments-fine-for-bond-producer/article_3e504af0-9fd2-4423-8a6a-36bd4ad34843.html"
            target="_blank"
            rel="nofollow noopener"
          >
            Louisiana Record
          </a>
          .
        </p>
        <p>
          It is a rare outcome, and the regulators caught it. But it is a clean reminder of why
          knowing how pricing works matters: the clients did not know what the carrier had actually
          quoted, so they could not see the markup.
        </p>

        <h2>How to tell if you are being overcharged</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Know the typical range.</strong> Before you buy, get a sense of the ballpark for
              your bond and credit. Our{" "}
              <Link href="/resources/california-contractor-bonding-cost-report-2026">
                bonding cost report
              </Link>{" "}
              and <Link href="/resources/how-much-does-a-surety-bond-cost">cost guide</Link> lay out
              the ranges, and the{" "}
              <Link href="/surety-bond-cost-calculator">cost calculator</Link> gives a quick estimate.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Ask for the premium broken out.</strong> A straight answer to &quot;what is the
              carrier&apos;s premium, and what, if anything, is a separate fee?&quot; is a good sign. A
              vague lump sum with unexplained &quot;fees&quot; is worth questioning.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Compare more than one quote.</strong> A second quote from another broker is the
              fastest reality check. If one number towers over the others with no reason, dig in.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Know that a minimum premium is normal.</strong> Small bonds often hit a floor
              near $100. That is standard pricing, not a markup.
            </span>
          </li>
        </ul>

        <h2>Transparency is the whole point</h2>
        <p>
          The fix for overcharging is not suspicion; it is transparency. Work with a broker who will
          show you the carrier&apos;s rate, explain any fee, and put the number in writing. That is
          part of <Link href="/why-use-a-surety-broker">what a broker is for</Link>, and it pairs with
          knowing how to{" "}
          <Link href="/resources/how-to-verify-your-surety-bond-is-real">
            verify your bond is real and filed
          </Link>
          . If you want a second look at a quote you were given, <Link href="/get-a-quote">reach
          out</Link> and we will tell you honestly whether it is in line.
        </p>
      </Prose>
    </GuidePage>
  );
}
