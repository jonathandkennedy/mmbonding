import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("bid-bond-vs-performance-bond")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "A bid bond backs your proposal before award. A performance bond guarantees you finish the job after you win. How they differ and why you need both.",
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
    q: "Is a bid bond the same as a performance bond?",
    a: "No. A bid bond backs your proposal during bidding and guarantees you will honor your bid and post the final bonds if you win. A performance bond is issued after award and guarantees you complete the work. Different stages, different promises.",
  },
  {
    q: "Does a bid bond turn into a performance bond if I win?",
    a: "No. They are separate bonds. When you win, the surety issues new performance and payment bonds for the contract, and the bid bond simply falls away once it has done its job.",
  },
  {
    q: "Do I pay for a bid bond?",
    a: "Usually there is no separate premium for a bid bond. It is issued as part of your bonding program, because the surety is really deciding whether it will back your final bonds. The premium sits on the performance and payment bonds.",
  },
  {
    q: "How much is a bid bond written for?",
    a: "Bid bonds are typically written for 5% to 10% of your bid amount, set by the bid documents. The performance bond that follows is usually 100% of the awarded contract value.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={
        "A bid bond guarantees that if you win, you will sign the contract and post the final bonds. A performance bond, issued on award, guarantees you complete the work. The bid bond covers the bidding stage; the performance bond covers the build. Public bids usually require the bid bond up front and the performance bond on award."
      }
      intro={
        "The bid bond and the performance bond come at different stages of the same job. A bid bond backs your proposal and promises you will stand behind your bid if you win. A performance bond, issued after award, guarantees you finish the work. Together they carry you from bid to completion."
      }
      faqs={faqs}
      related={[
        { label: "Bid Bond", href: "/contract-bonds/bid-bond" },
        { label: "Performance Bond", href: "/contract-bonds/performance-bond" },
        { label: "Payment Bond", href: "/contract-bonds/payment-bond" },
        {
          label: "How to Bid Public Works",
          href: "/resources/how-to-bid-public-works-in-california",
        },
      ]}
    >
      <StatGrid
        heading="Bid and performance bonds by the numbers"
        items={pickStats([
          "bidSecurity",
          "millerActThreshold",
          "caContractors",
          "usSuretyPremium",
        ])}
      />

      <Prose>
        <h2>Same job, two stages</h2>
        <p>
          The bid bond and the performance bond are not competing choices. They are sequential. The
          bid bond lives during the bidding stage. The performance bond takes over once you win. On a
          public job you will usually provide the bid bond with your proposal, then a performance
          bond and a payment bond after award.
        </p>
      </Prose>

      <div className="my-8 overflow-x-auto rounded-2xl border border-ink-200">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-surface text-left">
              <th className="p-4 font-semibold text-navy-900"></th>
              <th className="p-4 font-display font-bold text-navy-900">Bid bond</th>
              <th className="p-4 font-display font-bold text-navy-900">Performance bond</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            <tr>
              <td className="p-4 font-semibold text-navy-900">Stage</td>
              <td className="p-4 text-ink-700">Bidding, before award</td>
              <td className="p-4 text-ink-700">After award, during the build</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Guarantees</td>
              <td className="p-4 text-ink-700">You honor your bid and post the final bonds</td>
              <td className="p-4 text-ink-700">You complete the contract</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Typical amount</td>
              <td className="p-4 text-ink-700">5% to 10% of the bid</td>
              <td className="p-4 text-ink-700">Up to 100% of the contract</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">If you fail</td>
              <td className="p-4 text-ink-700">Surety pays the bid-spread difference</td>
              <td className="p-4 text-ink-700">Surety completes the work or pays the owner</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Separate premium</td>
              <td className="p-4 text-ink-700">Usually none</td>
              <td className="p-4 text-ink-700">Yes, a percentage of the contract</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Prose>
        <h2>Bid bond: stand behind your number</h2>
        <p>
          A <Link href="/contract-bonds/bid-bond">bid bond</Link> guarantees that if you are the
          winning bidder, you will enter into the contract at your bid price and provide the required
          performance and payment bonds. If you win and then walk away or cannot bond the job, the
          surety pays the obligee the difference between your bid and the next viable bid, up to the
          bond amount. It protects the owner from a lowball bid that falls through.
        </p>

        <h2>Performance bond: deliver the work</h2>
        <p>
          A{" "}
          <Link href="/contract-bonds/performance-bond">performance bond</Link> is issued after award
          and guarantees you complete the contract. If you default during the job, the surety
          arranges completion or compensates the owner, up to the penal sum, usually 100% of the
          contract value. It is paired with a{" "}
          <Link href="/contract-bonds/payment-bond">payment bond</Link> that protects your
          subcontractors and suppliers.
        </p>

        <h2>Does the bid bond turn into the performance bond?</h2>
        <p>
          No. They are separate bonds. Winning the bid does not convert the bid bond into a
          performance bond. When you are awarded the job, the bid bond has done its work, and the
          surety issues fresh performance and payment bonds for the contract. The bid bond simply
          falls away.
        </p>

        <h2>What they cost</h2>
        <p>
          A bid bond usually carries no separate premium. It is issued on the strength of your
          bonding program, because the surety is really deciding whether it will stand behind your
          final bonds. The premium sits on the performance bond, priced as a percentage of the
          contract on a sliding scale. See our note on{" "}
          <Link href="/resources/bid-bond-cost">what a bid bond costs</Link> for more.
        </p>

        <h2>One capacity decision</h2>
        <p>
          Because the bid bond is really a promise to provide the final bonds, a surety underwrites
          both as a single capacity decision: can this contractor complete and pay for the job it is
          bidding? If bidding public work is new to you, start with{" "}
          <Link href="/resources/how-to-bid-public-works-in-california">
            how to bid public works in California
          </Link>
          . If credit or a thin track record makes the capacity hard to place, that is the kind of
          file we work through our{" "}
          <Link href="/hard-to-place-surety-bonds">hard-to-place</Link> markets.
        </p>
      </Prose>
    </GuidePage>
  );
}
