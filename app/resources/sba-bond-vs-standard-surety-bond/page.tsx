import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("sba-bond-vs-standard-surety-bond")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "Both are real bid, performance, and payment bonds. The SBA program adds a federal guarantee that gets you bonded when standard surety credit cannot.",
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
    q: "Is an SBA bond a real performance bond?",
    a: "Yes. An SBA-backed bond is a normal bid, performance, or payment bond issued by a surety. The only difference is that the SBA guarantees part of the surety's risk. The obligee gets the same protection either way.",
  },
  {
    q: "Is an SBA bond more expensive than a standard bond?",
    a: "Pricing is comparable to standard surety premiums, plus a modest SBA fee. The program is about access, not a discount, and for a contractor who cannot get standard bonding, a slightly higher cost is far better than no bond at all.",
  },
  {
    q: "Can I move to standard surety later?",
    a: "Usually, yes. The SBA program is often a stepping stone. As you complete bonded jobs and build financial strength, your broker can move you to standard surety credit with more capacity and simpler pricing.",
  },
  {
    q: "When should I use the SBA program instead of standard surety?",
    a: "When standard surety has declined you or offered too little capacity, typically because you are new, small, or credit-challenged. If you already qualify for strong standard credit, you may not need the SBA route.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="An SBA-backed bond and a standard surety bond are the same product, a real bid, performance, or payment bond. The difference is the federal guarantee behind the SBA bond, which lets a surety say yes to small, new, or credit-challenged contractors that standard credit would decline. Cost is comparable plus a modest SBA fee, and many contractors graduate to standard surety as they grow."
      intro="If a standard surety has turned you down, the SBA program is not a lesser bond, it is the same bond with a federal guarantee behind it. Here is how the two compare, and when the SBA route is the one that gets you bonded."
      faqs={faqs}
      related={[
        { label: "SBA Surety Bonds", href: "/sba-surety-bonds" },
        { label: "How to get a performance bond", href: "/resources/how-to-get-a-performance-bond" },
        { label: "Bonding capacity", href: "/resources/surety-bond-capacity" },
        { label: "Hard-to-Place Bonds", href: "/hard-to-place-surety-bonds" },
      ]}
    >
      <StatGrid
        heading="SBA vs. standard bonding by the numbers"
        items={pickStats([
          "sbaGuarantee",
          "sbaContractLimit",
          "usSuretyPremium",
          "caContractors",
        ])}
      />

      <Prose>
        <h2>Same bond, different backing</h2>
        <p>
          The most important thing to know is that an <strong>SBA-backed bond is a real bond</strong>.
          It is a normal <Link href="/contract-bonds/bid-bond">bid</Link>,{" "}
          <Link href="/contract-bonds/performance-bond">performance</Link>, or{" "}
          <Link href="/contract-bonds/payment-bond">payment</Link> bond, issued by a surety, giving
          the project owner the same protection as any other. The difference is behind the scenes: on
          an SBA bond, the federal government guarantees part of the surety&apos;s risk, which is what
          unlocks access.
        </p>
      </Prose>

      <div className="my-8 overflow-x-auto rounded-2xl border border-ink-200">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-surface text-left">
              <th className="p-4 font-semibold text-navy-900"></th>
              <th className="p-4 font-display font-bold text-navy-900">SBA-backed bond</th>
              <th className="p-4 font-display font-bold text-navy-900">Standard surety bond</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            <tr>
              <td className="p-4 font-semibold text-navy-900">Who qualifies</td>
              <td className="p-4 text-ink-700">Small, new, or credit-challenged firms</td>
              <td className="p-4 text-ink-700">Established firms with strong credit and financials</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Backing</td>
              <td className="p-4 text-ink-700">Surety plus an 80% to 90% SBA guarantee</td>
              <td className="p-4 text-ink-700">Surety alone</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Contract limit</td>
              <td className="p-4 text-ink-700">Up to $9M ($14M certified federal)</td>
              <td className="p-4 text-ink-700">Set by your bonding capacity</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Cost</td>
              <td className="p-4 text-ink-700">Comparable premium, plus a modest SBA fee</td>
              <td className="p-4 text-ink-700">Standard premium</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Best for</td>
              <td className="p-4 text-ink-700">Getting bonded when standard says no</td>
              <td className="p-4 text-ink-700">Contractors who already qualify</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Prose>
        <h2>When the SBA route is the right one</h2>
        <p>
          Use the <Link href="/sba-surety-bonds">SBA program</Link> when standard surety has declined
          you or offered too little capacity, usually because you are new, small, or credit-challenged.
          If you already qualify for strong standard credit, you may not need it. The program shines
          exactly where standard surety stops.
        </p>

        <h2>A stepping stone, not a ceiling</h2>
        <p>
          For most contractors the SBA program is a <strong>bridge</strong>. You use it to get bonded
          and win work, then, as you complete jobs and build financial strength, your broker moves you
          toward standard surety credit with more{" "}
          <Link href="/resources/surety-bond-capacity">capacity</Link> and simpler pricing. Either
          way, the goal is the same: get you bonded now. If a surety has already told you no, that is
          the file we work, start a <Link href="/get-a-quote?path=hard-to-place">quote</Link> and we
          will find the path.
        </p>
      </Prose>
    </GuidePage>
  );
}
