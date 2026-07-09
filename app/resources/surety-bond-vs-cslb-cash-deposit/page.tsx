import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";
import { facts } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

const guide = getGuide("surety-bond-vs-cslb-cash-deposit")!;

export const metadata: Metadata = {
  title: guide.title,
  description: `California lets contractors post a ${usd(facts.licenseBondAmount)} cash deposit in lieu of the license bond. Here is how it works and why almost everyone chooses the bond instead.`,
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
    q: "Can I post a cash deposit instead of a contractor license bond?",
    a: `Yes. California accepts a ${usd(facts.licenseBondAmount)} cash deposit in lieu of the license bond. It satisfies the same requirement, but it ties up the full amount, so almost every contractor files the bond and pays a small annual premium instead.`,
  },
  {
    q: "How much is the CSLB cash deposit?",
    a: `The deposit matches the ${usd(facts.licenseBondAmount)} license bond amount. You post the entire sum with the state, where it sits idle for as long as your license is active.`,
  },
  {
    q: "Is the cash deposit safe from claims?",
    a: "No. The deposit stays exposed to valid claims the same way the bond does. If a claim is paid from it, your funds are used, and you must restore the balance to keep your license active.",
  },
  {
    q: "Can I switch from a cash deposit to a bond later?",
    a: "Yes. Many contractors start with a deposit, then file a bond to free up the capital. We can quote the bond so you can compare the small annual premium against the cash you have locked up.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={`Yes, you can. California lets you file a ${usd(facts.licenseBondAmount)} cash deposit in lieu of the contractor license bond. But it ties up the full ${usd(facts.licenseBondAmount)}, stays exposed to claims, and is slow to recover. Almost every contractor chooses the bond and pays a small annual premium instead.`}
      intro={`California gives contractors a choice most never hear about: post a ${usd(facts.licenseBondAmount)} cash deposit instead of a license bond. It is real, and it is legal. Here is why almost nobody uses it.`}
      faqs={faqs}
      related={[
        { label: "Contractor License Bond", href: "/contractor-license-bond" },
        { label: "What the bond costs", href: "/resources/contractor-license-bond-cost" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <StatGrid
        heading="Bond vs. cash deposit by the numbers"
        items={pickStats([
          "caLicenseBond",
          "filingWindow",
          "caContractors",
          "usSuretyPremium",
        ])}
      />

      <Prose>
        <h2>Yes, there is a cash-deposit alternative</h2>
        <p>
          Every licensed California contractor has to satisfy the{" "}
          <strong>{usd(facts.licenseBondAmount)}</strong> license bond requirement under{" "}
          <code>{facts.licenseBondStatute}</code>. What most people do not realize is that the state
          will accept a <strong>cash deposit in lieu of bond</strong> for the same amount. File the
          deposit and you meet the requirement without buying a bond.
        </p>
        <p>
          So the honest answer to &quot;can I post a cash deposit instead of a contractor license
          bond?&quot; is yes. The better question is whether you should, and for almost every
          contractor the answer is no.
        </p>

        <h2>How the cash deposit works</h2>
        <p>
          Instead of paying a premium to a surety, you hand the state the full{" "}
          {usd(facts.licenseBondAmount)} and it holds the money for as long as your license stays
          active. The deposit does the same job the bond does: it backs valid claims against your
          license. The difference is that the cash is yours, and it is locked.
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              You tie up the entire {usd(facts.licenseBondAmount)}, capital you could otherwise put
              into payroll, equipment, or a job.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              The deposit sits idle. It does not earn you anything useful while the state holds it.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              It stays exposed to claims. If a valid claim is paid from your deposit, that is your
              money, and you must top it back up to stay licensed.
            </span>
          </li>
        </ul>

        <h2>Why almost everyone chooses the bond</h2>
        <p>
          A <Link href="/contractor-license-bond">contractor license bond</Link> does the same legal
          job for a fraction of the cash. Rather than locking up {usd(facts.licenseBondAmount)}, you
          pay a small <strong>annual premium</strong>, typically a low percentage of the bond amount
          driven mostly by credit. Your capital stays in your business.
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>It frees your capital.</strong> The {usd(facts.licenseBondAmount)} stays in
              your account instead of the state&apos;s.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>It costs a premium, not {usd(facts.licenseBondAmount)}.</strong> See{" "}
              <Link href="/resources/contractor-license-bond-cost">what the bond costs</Link> for the
              real numbers.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Recovering a deposit is slow.</strong> When you close or change your license,
              getting the cash back from the state can take a long waiting period, well after a bond
              would have simply been cancelled.
            </span>
          </li>
        </ul>

        <h2>When a deposit might make sense</h2>
        <p>
          The deposit is a rare fit, not a common one. It can appeal to a contractor with excellent
          liquidity who would rather park cash than deal with underwriting, or someone who wants to
          skip credit-based review entirely. Even then, most compare the numbers and file the bond.
        </p>
        <p>
          If you are weighing the two, start with a real{" "}
          <Link href="/get-a-quote">quote</Link> so you can see the annual premium next to the{" "}
          {usd(facts.licenseBondAmount)} you would otherwise lock up. Underwriting still applies, and
          we will tell you exactly where you stand.
        </p>
      </Prose>
    </GuidePage>
  );
}
