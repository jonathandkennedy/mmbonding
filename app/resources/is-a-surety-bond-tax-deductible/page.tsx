import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { getGuide } from "@/lib/guides";

const guide = getGuide("is-a-surety-bond-tax-deductible")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "A surety bond premium is generally a deductible business expense. How the deduction works, what is treated differently, and why to confirm with your CPA.",
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
    q: "Is a surety bond premium tax-deductible?",
    a: "Generally yes. For a business that needs the bond to operate or hold a license, the premium is usually an ordinary and necessary business expense. This is general information, not tax advice, so confirm your specifics with a CPA.",
  },
  {
    q: "Where does the premium go on my tax return?",
    a: "That depends on your entity type and how you file, which is why a tax professional should place it. Keep your premium receipt so it is easy to record wherever it belongs.",
  },
  {
    q: "Can I deduct collateral or a claim I repaid?",
    a: "Those are treated differently from a premium. Collateral is a refundable deposit, not an expense, and repaying a claim under your indemnity agreement is its own question. Ask your accountant how to handle each.",
  },
  {
    q: "Do you give tax advice?",
    a: "No. We place and service surety bonds. For anything about deductions or filing, talk to a CPA or enrolled agent who can look at your full picture.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={`Is a surety bond premium tax-deductible? Generally yes. For a business that needs the bond to operate, the premium is usually an ordinary and necessary business expense you can deduct. Collateral and amounts you repay the surety for a claim are treated differently. This is general information, not tax advice, so confirm with your accountant.`}
      intro={`For most businesses, the premium you pay for a required bond is a normal cost of doing business, and normal business costs are generally deductible. Here is how that usually works, and the one conversation to have with your accountant first.`}
      faqs={faqs}
      related={[
        { label: "What the bond costs", href: "/resources/contractor-license-bond-cost" },
        { label: "Surety bond collateral", href: "/resources/surety-bond-collateral" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <Prose>
        <h2>The short answer</h2>
        <p>
          Generally, yes. If your business needs a surety bond to operate, hold a license, or win a
          contract, the premium you pay for that bond is usually an ordinary and necessary business
          expense. Ordinary and necessary expenses are the classic test for a deduction, and a
          required bond fits it cleanly.
        </p>
        <p>
          This guide is general information, not tax advice. Your situation can change the answer, so
          treat what follows as a starting point for a conversation with a qualified tax
          professional.
        </p>

        <h2>Why the premium usually qualifies</h2>
        <p>
          The premium is what you pay to keep the bond in force, and the bond is often a condition of
          doing business at all. A contractor cannot hold a CSLB license without one, and many
          commercial licenses work the same way. When a cost is that directly tied to operating, it
          generally reads as a deductible business expense rather than a personal one.
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>It is ordinary.</strong> Bonds are a routine, expected cost across regulated
              trades.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>It is necessary.</strong> The bond is often legally required to hold the
              license or win the work.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>It is a business cost.</strong> You carry it for the business, not for personal
              reasons, which is what a deduction turns on.
            </span>
          </li>
        </ul>

        <h2>What is not deductible</h2>
        <p>A few related costs are treated differently, and this is where people get tripped up.</p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Collateral is not an expense.</strong> If a surety holds collateral, that money
              is a deposit you can get back, not a cost you spent. Read more on{" "}
              <Link href="/resources/surety-bond-collateral">surety bond collateral</Link>.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Repaying a claim is different.</strong> If the surety pays a claim and you
              reimburse it under your indemnity agreement, that repayment is not a simple premium
              deduction. How it is treated depends on the facts, which is exactly a question for your
              accountant.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Personal bonds may not qualify.</strong> A bond you carry for a personal,
              non-business reason generally does not get the business-expense treatment.
            </span>
          </li>
        </ul>

        <h2>Confirm with your accountant</h2>
        <p>
          Tax treatment turns on details: your entity type, how you file, and the specific reason you
          carry the bond. A CPA or enrolled agent can confirm how to record the premium and where it
          belongs on your return. We are surety bond experts, not tax advisors, so we will not guess
          at your deduction.
        </p>
        <p>
          What we can do is get you the bond and a clear premium receipt for your records. Start with
          a <Link href="/get-a-quote">quote</Link>, or see{" "}
          <Link href="/resources/contractor-license-bond-cost">what the bond costs</Link> so you know
          the number you will be deducting.
        </p>
      </Prose>
    </GuidePage>
  );
}
