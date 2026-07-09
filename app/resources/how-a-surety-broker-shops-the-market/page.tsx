import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("how-a-surety-broker-shops-the-market")!;

export const metadata: Metadata = {
  title: guide.title,
  description: `How does a broker beat one online quote? A single quote is one surety's price. A broker shops your file across markets for a better rate or a yes.`,
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
    q: "Why do sureties give different answers on the same file?",
    a: `Each surety has its own appetite, pricing model, and target classes. One may love your trade and credit profile while another avoids it. That is why a single instant quote is one market's opinion, not the market's verdict, and why shopping the file matters.`,
  },
  {
    q: "What does packaging my file actually mean?",
    a: "A broker assembles your application, credit, experience, financials where relevant, and a short narrative explaining anything unusual, then presents it the way underwriters want to see it. A well-packaged file earns better rates and fewer declines than a bare online form.",
  },
  {
    q: "Will shopping multiple markets hurt my credit?",
    a: "No. Surety prequalification typically uses a soft credit pull that does not affect your score, and a broker can market your file to several sureties without triggering multiple hard inquiries. You get competing looks without the credit hit.",
  },
  {
    q: "Is my rate really better through a broker?",
    a: "Often, yes, especially on tougher files. Because sureties price the same application differently, a broker can put them in competition for a lower premium. Underwriting still applies, so results vary, but one online quote rarely represents your best available rate.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={`A single instant quote reflects just one surety's appetite and pricing. A broker packages your file and submits it to multiple markets, which price and accept the same application differently, then negotiates. That is how the same file gets a better rate, or gets placed at all when one market says no.`}
      intro={`One instant online quote is one surety's opinion of your file, not your best rate. Here is how a broker works multiple markets to place and price the same application.`}
      faqs={faqs}
      related={[
        { label: "Why use a surety broker", href: "/why-use-a-surety-broker" },
        { label: "Hard-to-Place Bonds", href: "/hard-to-place-surety-bonds" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <StatGrid
        heading="Shopping the market by the numbers"
        items={pickStats([
          "usSuretyPremium",
          "caContractors",
          "caLicenseBond",
          "sbaGuarantee",
        ])}
      />

      <Prose>
        <h2>One online quote is one market&apos;s opinion</h2>
        <p>
          An instant quote feels like the answer, but it is really just one surety&apos;s answer.
          That single price reflects that one company&apos;s appetite, its pricing model, and the
          classes it likes on that particular day. Change the market and the same application can
          get a very different number, or a yes where the first said no.
        </p>
        <p>
          A broker exists to work that gap. Instead of accepting the first opinion, we put your
          file in front of several markets and let them compete.
        </p>

        <h2>How a broker packages your file</h2>
        <p>
          Underwriters respond to a clear, complete story, not a bare web form. Packaging the file
          means:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Assembling the full picture.</strong> Your application, credit, experience,
              and financials where they matter, gathered in one place.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Explaining the exceptions.</strong> A short narrative for anything unusual, a
              past claim, a credit event, a new entity, so an underwriter sees context, not a red
              flag.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Matching file to market.</strong> We send it to the sureties whose appetite
              fits your trade, size, and history, instead of one generic queue.
            </span>
          </li>
        </ul>

        <h2>Why the same file gets different answers</h2>
        <p>
          Sureties are not interchangeable. Each one has its own target classes, its own view of
          risk, and its own pricing, so the very same application lands differently from one to
          the next:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Appetite differs.</strong> One surety may specialize in your trade while
              another quietly avoids it.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Pricing differs.</strong> The same credit profile can earn a lower rate at a
              market that is hungry for your class.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Tolerance differs.</strong> A file one market declines, another writes by
              hand, sometimes with funds control or collateral.
            </span>
          </li>
        </ul>

        <h2>What this means for your rate and approval</h2>
        <p>
          Shopping the file has two payoffs. On price, competition between markets tends to push
          your premium down rather than up. On approval, a file that one market rejects can still
          be placed somewhere else. Underwriting still applies, so nothing is guaranteed and
          results vary, but one online quote is rarely your best available rate, and it is never
          the whole market.
        </p>
        <p>
          See <Link href="/why-use-a-surety-broker">why a surety broker helps</Link>, how we
          handle <Link href="/hard-to-place-surety-bonds">hard-to-place bonds</Link>, or start a
          real <Link href="/get-a-quote">quote</Link>.
        </p>
      </Prose>
    </GuidePage>
  );
}
