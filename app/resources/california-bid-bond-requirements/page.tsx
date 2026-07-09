import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { BarChart } from "@/components/bar-chart";
import { getGuide } from "@/lib/guides";
import { pickStats, sources } from "@/lib/stats";

const guide = getGuide("california-bid-bond-requirements")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "California requires bid security of at least 10% of your bid on public works, from an admitted surety. What the rule covers and when private jobs apply.",
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
    q: "Does California require a bid bond on every public works project?",
    a: "Most public agencies require bid security on advertised public works, commonly on contracts above a set dollar threshold. The bid documents are the final word, so read the instructions to bidders for the exact requirement on your job.",
  },
  {
    q: "How much is a California bid bond?",
    a: "The bond is written for the percentage the bid documents set, most often 10% of your bid amount. There is usually no separate premium for the bid bond itself, because the surety is really deciding whether it will back your performance and payment bonds if you win.",
  },
  {
    q: "Can I post a cashier's check instead of a bid bond?",
    a: "Yes. California lets you provide bid security as a bidder's bond from an admitted surety, or as cash, a cashier's check, or a certified check, usually equal to 10% of the bid. A bond keeps your cash free to run the job.",
  },
  {
    q: "What happens if I win and then do not sign the contract?",
    a: "You forfeit the bid security, up to the amount of the bond, and the agency can award to the next bidder. On many public jobs a bidder who forfeits its security can also be barred from bidding that project again.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={
        "On California public works, you post bid security with your proposal, almost always a bid bond for 10% of your bid from an admitted surety. It guarantees that if you win, you will sign the contract and furnish the performance and payment bonds. Back out and you forfeit the security. Private jobs set their own bid bond terms in the bid documents."
      }
      intro={
        "A bid bond is the entry ticket to most California public works. It rides along with your proposal and promises that if you are the low responsible bidder, you will sign the contract at your price and post the final bonds. Here is what California actually requires, who has to issue the bond, and what happens if you win and walk away."
      }
      faqs={faqs}
      related={[
        { label: "Bid Bond", href: "/contract-bonds/bid-bond" },
        { label: "Contract Bonds", href: "/contract-bonds" },
        {
          label: "How to Bid Public Works",
          href: "/resources/how-to-bid-public-works-in-california",
        },
        {
          label: "Public Works Bonds by Obligee",
          href: "/resources/california-public-works-bonds-by-obligee",
        },
      ]}
    >
      <StatGrid
        heading="Bid bonds by the numbers"
        items={pickStats([
          "bidSecurity",
          "millerActThreshold",
          "caContractors",
          "usSuretyPremium",
        ])}
      />

      <Prose>
        <h2>When California requires a bid bond</h2>
        <p>
          On public works, the requirement comes from the agency and the Public Contract Code, not
          from you. When a state or local agency advertises a project, its instructions to bidders
          almost always require every bid to arrive with{" "}
          <strong>bid security</strong>. State contracts set that trigger for work above a modest
          dollar threshold, and cities, counties, school and community college districts, and
          special districts follow the same pattern. If the bid documents call for security and your
          proposal shows up without it, the agency rejects the bid as nonresponsive. There is no
          appeal on that point.
        </p>

        <h2>The 10% rule</h2>
        <p>
          California sets bid security at a percentage of your bid, and the standard figure is{" "}
          <strong>at least 10%</strong> of the amount you bid. You can satisfy it in more than one
          way, but a <Link href="/contract-bonds/bid-bond">bid bond</Link> from a surety is the
          option nearly every contractor uses, because it does not tie up your cash while you wait
          for the award.
        </p>
      </Prose>

      <div className="my-8 overflow-x-auto rounded-2xl border border-ink-200">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-surface text-left">
              <th className="p-4 font-display font-bold text-navy-900">Form of bid security</th>
              <th className="p-4 font-display font-bold text-navy-900">Typical amount</th>
              <th className="p-4 font-display font-bold text-navy-900">Ties up cash?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            <tr>
              <td className="p-4 font-semibold text-navy-900">Bid bond (admitted surety)</td>
              <td className="p-4 text-ink-700">10% of the bid</td>
              <td className="p-4 text-ink-700">No</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Cashier's check</td>
              <td className="p-4 text-ink-700">10% of the bid</td>
              <td className="p-4 text-ink-700">Yes</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Certified check</td>
              <td className="p-4 text-ink-700">10% of the bid</td>
              <td className="p-4 text-ink-700">Yes</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Cash</td>
              <td className="p-4 text-ink-700">10% of the bid</td>
              <td className="p-4 text-ink-700">Yes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <BarChart
        title="Typical bond size, as a share of the job"
        data={[
          { label: "Bid bond", value: 10, display: "~10%", emphasis: true },
          { label: "Performance bond", value: 100, display: "up to 100%" },
          { label: "Payment bond", value: 100, display: "up to 100%" },
        ]}
        max={100}
        caption="Bid security is a fraction of your bid; the performance and payment bonds that follow can each run the full contract value."
        source={sources.caLeg}
      />

      <Prose>
        <h2>It has to come from an admitted surety</h2>
        <p>
          A bid bond only counts if it is written by an <strong>admitted surety insurer</strong>,
          meaning a company the California Insurance Commissioner has certified to transact surety
          business in the state. Agencies verify this, and a bond from a carrier that is not admitted
          in California will not be accepted. The A-rated markets we place through are all admitted,
          so this is handled for you when we issue the bond. If you are bidding federal work, a
          different list applies, the U.S. Treasury Circular 570 list of approved sureties.
        </p>

        <h2>What the bid bond actually guarantees</h2>
        <p>
          The bid bond backs a promise, not the work itself. It guarantees that if you are awarded
          the job, you will enter into the contract at your bid price and furnish the required{" "}
          <Link href="/contract-bonds/performance-bond">performance</Link> and{" "}
          <Link href="/contract-bonds/payment-bond">payment</Link> bonds. If you win and then cannot
          or will not do that, the surety pays the obligee the difference between your bid and the
          next viable bid, up to the penal sum of the bond. That is why underwriters treat the bid
          bond and the final bonds as one capacity decision: before it backs your bid, the surety is
          really deciding whether it will stand behind the whole job.
        </p>

        <h2>What happens if you win and back out</h2>
        <p>
          Failing to execute the contract on time is grounds for the agency to void the award and{" "}
          <strong>forfeit your bid security</strong>. If you posted a bid bond, the surety is on the
          hook for the bid spread up to the bond amount, and it will look to you to make it whole
          under your indemnity agreement. On many public projects a bidder who forfeits its security
          is also barred from bidding that project again. The lesson: only bid work you are prepared
          and able to bond and build.
        </p>

        <h2>Private projects set their own rules</h2>
        <p>
          On private construction, no statute forces a bid bond. Instead, the owner or the general
          contractor decides whether to require one and writes the terms into the bid documents.
          Private bid bonds are common on larger commercial jobs and are usually written for 5% to
          10% of the bid, mirroring the public works standard. Read the invitation to bid: if it
          calls for bid security, the amount and form are spelled out there.
        </p>

        <h2>What it costs, and how to get one</h2>
        <p>
          A bid bond usually carries <strong>no separate premium</strong>. It is issued on the
          strength of your bonding program, and the premium sits on the performance and payment bonds
          you post after award. See{" "}
          <Link href="/resources/bid-bond-cost">how much a bid bond costs</Link> for the detail. To
          get one, a surety needs to establish your bonding capacity: your experience, your financial
          statements, and your credit. If you are new to public work, start with{" "}
          <Link href="/resources/how-to-bid-public-works-in-california">
            how to bid public works in California
          </Link>{" "}
          and{" "}
          <Link href="/resources/dir-registration-for-contractors">DIR registration</Link>, both of
          which you need in place before you can bid. When credit or a thin track record makes the
          capacity hard to place, that is exactly the kind of file we work through our{" "}
          <Link href="/hard-to-place-surety-bonds">hard-to-place</Link> markets. When you are ready,{" "}
          <Link href="/get-a-quote">start a quote</Link> and we will size the bid bond to the job.
        </p>
      </Prose>
    </GuidePage>
  );
}
