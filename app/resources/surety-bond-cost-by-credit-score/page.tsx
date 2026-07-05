import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { getGuide } from "@/lib/guides";
import { facts } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

const guide = getGuide("surety-bond-cost-by-credit-score")!;

export const metadata: Metadata = {
  title: guide.title,
  description: `How your credit tier sets the premium on the ${usd(facts.licenseBondAmount)} license bond, from ${facts.licensePremiumRange.lowPct}% to ${facts.licensePremiumRange.highPct}%, with no fake teaser rates.`,
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
    q: "Does my credit score set the exact bond price?",
    a: "Credit is the biggest factor, but not the only one. The bond type, your history, and the market all feed the final rate. Credit mostly decides where you land in the range.",
  },
  {
    q: "What credit score do I need for the lowest rate?",
    a: "There is no single cutoff. Stronger credit generally earns a rate nearer the low end of the range, while challenged credit moves toward the top. We shop the file either way.",
  },
  {
    q: "Can I get a bond with a low credit score?",
    a: "Yes. A low score usually means a higher premium and sometimes a specialty market, not a decline. Underwriting still applies, but a low score alone rarely stops a license bond.",
  },
  {
    q: "Why won't you just tell me a rate?",
    a: "Because a rate without your file would be a guess. We would rather pull your real information and give you a number that holds up. Use the calculator for a quick estimate, then a quote for the firm rate.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={`How much is a surety bond at your credit score? On the ${usd(facts.licenseBondAmount)} license bond, the premium runs ${facts.licensePremiumRange.lowPct}% to ${facts.licensePremiumRange.highPct}%, set mostly by credit. Excellent credit lands near the low end, often the low hundreds per year; challenged credit costs more but stays placeable. We quote your real rate, never a fake teaser.`}
      intro={`Your credit is the single biggest lever on a surety bond premium. Here is how each credit tier tends to land within the standard range on the ${usd(facts.licenseBondAmount)} license bond, and why we quote your real number instead of a teaser.`}
      faqs={faqs}
      related={[
        { label: "What the bond costs", href: "/resources/contractor-license-bond-cost" },
        { label: "Cost calculator", href: "/surety-bond-cost-calculator" },
        { label: "Bad credit bonds", href: "/resources/surety-bonds-with-bad-credit" },
      ]}
    >
      <Prose>
        <h2>Credit sets your rate, within a range</h2>
        <p>
          On the {usd(facts.licenseBondAmount)} California contractor license bond, you do not pay
          the full amount. You pay an annual premium, and that premium runs from about{" "}
          {facts.licensePremiumRange.lowPct}% to {facts.licensePremiumRange.highPct}% of the bond.
          Where you land in that range is set mostly by your personal credit.
        </p>
        <p>
          Same bond, same face amount, very different price depending on the file. Credit is the
          lever that moves it the most, though prior claims and history matter too.
        </p>

        <h2>Roughly, by credit tier</h2>
        <p>
          These are general tendencies, not quotes. They show how the range tends to sort by credit,
          and every real rate still depends on your actual file and the market that day.
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Excellent credit.</strong> Lands near the low end of the range. On the license
              bond, that can start in the low hundreds of dollars a year.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Good credit.</strong> Low to mid range. Still very competitive, with plenty of
              markets competing for the file.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Fair credit.</strong> Around the middle of the range. Placeable in the standard
              market, just at a higher rate than top-tier credit.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Challenged credit.</strong> Toward the upper end, and sometimes a specialty
              market, but still placeable. A low score means a higher rate, not an automatic no.
            </span>
          </li>
        </ul>

        <h2>Why we won&apos;t quote a fake number</h2>
        <p>
          Anyone can advertise a rock-bottom rate. Those teaser numbers almost always assume perfect
          credit and a clean history, which is not most people. Publishing one as if it were your
          price would be dishonest, and it sets you up for a surprise when the real quote comes back
          higher.
        </p>
        <p>
          Real pricing needs your real file: your credit, the bond type, and the market. That is the
          only way to land on a number you can actually count on. If your credit is rough, see how we
          handle{" "}
          <Link href="/resources/surety-bonds-with-bad-credit">surety bonds with bad credit</Link>,
          where the whole point is placing the file, not declining it.
        </p>

        <h2>Get your real number</h2>
        <p>
          Instead of guessing your tier, get the actual figure. Our{" "}
          <Link href="/surety-bond-cost-calculator">cost calculator</Link> gives you a fast estimate
          by bond and credit band, and a <Link href="/get-a-quote">quote</Link> gets you the firm
          rate underwriting will honor. Either way, the number you see is a real one.
        </p>
      </Prose>
    </GuidePage>
  );
}
