import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { getGuide } from "@/lib/guides";
import { facts } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

const guide = getGuide("surety-bond-premium-financing")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "When financing a surety bond premium makes sense, when paying annually is cheaper, and the interest, down payment, and cancellation terms to watch.",
  alternates: { canonical: `/resources/${guide.slug}` },
};

const faqs = [
  {
    q: "Is financing a bond premium the same as a discount?",
    a: "No. Financing spreads the same premium into installments and adds a finance charge. It can help cash flow, but the total you pay is the premium plus interest, not less than the premium.",
  },
  {
    q: `Is premium financing worth it for the ${usd(facts.licenseBondAmount)} license bond?`,
    a: "Usually not. The premium on the license bond is often only a few hundred dollars a year, so the interest and fees can outweigh the benefit of spreading it. Paying annually is typically simpler and cheaper.",
  },
  {
    q: "What happens if I miss a payment on a financed bond?",
    a: "The finance company can cancel the bond for non-payment. For a licensed contractor, a lapsed license bond can jeopardize your license, so treat the installment schedule as seriously as the bond itself.",
  },
  {
    q: "Can you show me both options before I commit?",
    a: "Yes. We quote the full annual premium and, when it makes sense, a financing option, so you can compare the real numbers instead of guessing.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={`Is surety bond premium financing worth it? For a small license bond, usually not: the premium is low enough that paying annually beats the added interest and fees. For a large premium on a big contract or high-risk bond, a payment plan can ease cash flow. Watch the interest rate, down payment, and missed-payment terms.`}
      intro={`A premium payment plan spreads your bond cost into installments, but the convenience is not free. Here is when financing a surety bond premium pays off, and when paying in full is the cheaper move.`}
      faqs={faqs}
      related={[
        { label: "What the bond costs", href: "/resources/contractor-license-bond-cost" },
        { label: "Cost calculator", href: "/surety-bond-cost-calculator" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <Prose>
        <h2>What premium financing is</h2>
        <p>
          Premium financing is a payment plan for your bond. Instead of paying the full annual
          premium up front, you put a percentage down and a finance company covers the rest, then you
          repay it in monthly installments with interest. It is a loan against your premium, not a
          discount on it.
        </p>
        <p>
          The bond itself does not change. You are simply choosing to spread the cost, and you pay
          for that convenience through the finance charge.
        </p>

        <h2>When it helps</h2>
        <p>
          Financing earns its keep when the premium is large enough that paying it all at once would
          strain your cash. On a big contract or performance bond, or a high-risk bond priced toward
          the upper end of the range, the premium can run into the thousands. Spreading that over the
          term keeps working capital in the business, where it can fund payroll and materials.
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Large premiums.</strong> The bigger the premium, the more a down payment plus
              installments beats writing one large check.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Cash-flow timing.</strong> If the bond is due before the job funds it,
              financing bridges the gap.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Multiple bonds at once.</strong> Carrying several bonds in the same period can
              make one blended payment easier to manage.
            </span>
          </li>
        </ul>

        <h2>When paying annually is cheaper</h2>
        <p>
          For a small license bond, financing usually costs more than it saves. The premium on the{" "}
          {usd(facts.licenseBondAmount)} contractor license bond often lands in the low hundreds of
          dollars a year, so the interest and any setup fee can rival the benefit of spreading it
          out. Paying the year in full is simpler and, once the finance charge is counted, typically
          cheaper.
        </p>
        <p>
          A quick test: if you could comfortably write the check today, paying annually almost always
          wins on a small bond. See what the{" "}
          <Link href="/resources/contractor-license-bond-cost">bond actually costs</Link> before you
          decide.
        </p>

        <h2>What to watch for</h2>
        <p>
          If you do finance, read the agreement the way an underwriter reads a file. The convenience
          is real, but so are the terms.
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>The interest rate.</strong> Compare the annual percentage rate, not just the
              monthly figure, so you know the true cost of spreading the premium.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>The down payment.</strong> Most plans want a percentage up front. A smaller
              down payment means larger installments and more interest overall.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Missed payments.</strong> Miss an installment and the finance company can
              cancel the bond. For a contractor, a cancelled license bond can put your license at
              risk, so never let a plan lapse quietly.
            </span>
          </li>
        </ul>
        <p>
          Not sure which way to go? Run the numbers on our{" "}
          <Link href="/surety-bond-cost-calculator">cost calculator</Link>, then start a{" "}
          <Link href="/get-a-quote">quote</Link> and we will lay out the pay-in-full and financing
          options side by side.
        </p>
      </Prose>
    </GuidePage>
  );
}
