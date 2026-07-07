import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose } from "@/components/prose";
import { getGuide } from "@/lib/guides";

const guide = getGuide("payment-bond-vs-performance-bond")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "A performance bond guarantees you finish the job. A payment bond guarantees your subs and suppliers get paid. How they differ and why public work needs both.",
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
    q: "Do I need both a payment bond and a performance bond?",
    a: "On public work, almost always yes. Federal contracts above the Miller Act threshold, and most state and local jobs under a Little Miller Act, require both, usually each at 100% of the contract value. Private owners may ask for one, both, or neither.",
  },
  {
    q: "What is the difference between a payment bond and a performance bond?",
    a: "A performance bond protects the owner by guaranteeing the work gets completed. A payment bond protects your subcontractors, laborers, and suppliers by guaranteeing they get paid. Same job, different protected parties.",
  },
  {
    q: "Are payment and performance bonds issued together?",
    a: "Usually, yes. A surety approves your bonding capacity once and issues both bonds for a contract, often on a single form and as one premium, rather than as two separate approvals.",
  },
  {
    q: "How much do payment and performance bonds cost together?",
    a: "They are priced as one premium, a percentage of the contract value on a sliding scale, driven by your financials, experience, and the size of the job. They are not billed as two separate fees.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={
        "A performance bond protects the project owner by guaranteeing you finish the contract. A payment bond protects your subcontractors and suppliers by guaranteeing they get paid. They cover different parties, are almost always issued together on public work, and are underwritten as one bonding line."
      }
      intro={
        "Payment bonds and performance bonds are the two core contract bonds, and they protect different people. A performance bond guarantees the project gets finished. A payment bond guarantees the workers and suppliers get paid. On most public jobs, you carry both."
      }
      faqs={faqs}
      related={[
        { label: "Performance Bond", href: "/contract-bonds/performance-bond" },
        { label: "Payment Bond", href: "/contract-bonds/payment-bond" },
        { label: "Contract Bonds", href: "/contract-bonds" },
        { label: "How to Get a Performance Bond", href: "/resources/how-to-get-a-performance-bond" },
      ]}
    >
      <Prose>
        <h2>The short version</h2>
        <p>
          Both are contract surety bonds, and both are three-party guarantees between you (the
          principal), the party you are protecting (the obligee), and the surety that backs you. The
          difference is who they protect and what they promise. A performance bond is about finishing
          the work. A payment bond is about paying the people who help you do it.
        </p>
      </Prose>

      <div className="my-8 overflow-x-auto rounded-2xl border border-ink-200">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-surface text-left">
              <th className="p-4 font-semibold text-navy-900"></th>
              <th className="p-4 font-display font-bold text-navy-900">Performance bond</th>
              <th className="p-4 font-display font-bold text-navy-900">Payment bond</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            <tr>
              <td className="p-4 font-semibold text-navy-900">Protects</td>
              <td className="p-4 text-ink-700">The project owner</td>
              <td className="p-4 text-ink-700">Subcontractors, laborers, suppliers</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Guarantees</td>
              <td className="p-4 text-ink-700">The contract is completed</td>
              <td className="p-4 text-ink-700">Everyone below you gets paid</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Typical amount</td>
              <td className="p-4 text-ink-700">Up to 100% of the contract</td>
              <td className="p-4 text-ink-700">Up to 100% of the contract</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">A claim comes from</td>
              <td className="p-4 text-ink-700">The owner, if you default</td>
              <td className="p-4 text-ink-700">An unpaid sub or supplier</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Commonly required by</td>
              <td className="p-4 text-ink-700">Owners and public agencies</td>
              <td className="p-4 text-ink-700">Public agencies by statute</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Prose>
        <h2>Performance bond: finish the job</h2>
        <p>
          A{" "}
          <Link href="/contract-bonds/performance-bond">performance bond</Link> guarantees the owner
          that you will complete the contract according to its terms. If you default, the surety
          steps in to get the work finished or to compensate the owner for the loss, up to the
          bond&apos;s penal sum. It is the owner&apos;s protection against a contractor who cannot
          deliver.
        </p>

        <h2>Payment bond: pay the people below you</h2>
        <p>
          A <Link href="/contract-bonds/payment-bond">payment bond</Link> guarantees that your
          subcontractors, laborers, and material suppliers get paid for what they put into the job.
          On public projects, where a worker cannot place a mechanics lien against government
          property, the payment bond is what gives them a way to recover if you do not pay them.
        </p>

        <h2>Why public jobs require both</h2>
        <p>
          On federal work, the Miller Act requires both a performance bond and a payment bond on
          contracts above a set threshold. California and most other states have their own Little
          Miller Act that does the same for state and local public work. So on a public bid you are
          almost always providing both, usually each at 100% of the contract value.
        </p>

        <h2>Are they issued separately?</h2>
        <p>
          In practice, no. A surety underwrites your full bonding capacity once, then issues the
          performance and payment bonds together for a given contract, often on a single bond form.
          You qualify for the pair as one line, based on your financials, experience, and the size of
          the job.
        </p>

        <h2>What they cost</h2>
        <p>
          Contract bonds are priced as a percentage of the contract amount on a sliding scale, and
          the performance and payment bonds are quoted together as one premium rather than billed
          separately. If your credit or track record makes the pair hard to place, that is exactly
          the kind of file we work through our{" "}
          <Link href="/hard-to-place-surety-bonds">hard-to-place</Link> markets. Underwriting always
          applies, and we never promise guaranteed approval.
        </p>
      </Prose>
    </GuidePage>
  );
}
