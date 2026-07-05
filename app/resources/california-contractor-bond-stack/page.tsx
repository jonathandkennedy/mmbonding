import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { getGuide } from "@/lib/guides";
import { facts } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

const guide = getGuide("california-contractor-bond-stack")!;

export const metadata: Metadata = {
  title: guide.title,
  description: `The California contractor bond stack: the ${usd(facts.licenseBondAmount)} license bond, the ${usd(facts.llcWorkerBondAmount)} LLC worker bond, workers' comp, and contract bonds for your business.`,
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
    q: "Which bonds does every California contractor need?",
    a: `Every CSLB-licensed contractor needs the ${usd(facts.licenseBondAmount)} license bond under ${facts.licenseBondStatute}. That one is universal. Additional bonds depend on your structure and the work you take on.`,
  },
  {
    q: "What extra bond does an LLC contractor need?",
    a: `An LLC adds the ${usd(facts.llcWorkerBondAmount)} employee/worker bond under ${facts.llcWorkerBondStatute}, on top of the ${usd(facts.licenseBondAmount)} license bond. Corporations and sole proprietors do not carry it.`,
  },
  {
    q: `Do I need workers' compensation?`,
    a: `If you have employees, yes, California requires workers' compensation. Some contractor classifications must carry it even with no employees. It is insurance, not a bond, so confirm your requirement with the CSLB.`,
  },
  {
    q: "When do I need bid, performance, and payment bonds?",
    a: "On public works and most larger commercial projects, owners require these contract bonds job by job. They back a specific project, unlike the license bond, which covers your license itself.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={`Every licensed California contractor carries the ${usd(facts.licenseBondAmount)} license bond. An LLC adds the ${usd(facts.llcWorkerBondAmount)} worker bond. Employees require workers' compensation. Public and larger commercial work adds bid, performance, and payment bonds. Most contractors also carry general liability insurance. We place the bonds and point you to the rest.`}
      intro={`Every licensed California contractor needs the ${usd(facts.licenseBondAmount)} license bond. What you add on top, the LLC worker bond, workers' comp, contract bonds, and insurance, depends on your business. Here is the whole stack, by type.`}
      faqs={faqs}
      related={[
        { label: "Contractor License Bond", href: "/contractor-license-bond" },
        { label: "LLC Worker Bond", href: "/llc-employee-worker-bond" },
        { label: "Bonding vs insurance", href: "/bonding-vs-insurance" },
      ]}
    >
      <Prose>
        <h2>Every contractor: the license bond</h2>
        <p>
          There is one bond no California contractor can skip. Every CSLB-licensed contractor, sole
          proprietor or corporation, new or renewing, must carry the{" "}
          <strong>{usd(facts.licenseBondAmount)}</strong> license bond under{" "}
          <strong>{facts.licenseBondStatute}</strong>. It is the base of the stack, and it is the
          same for everyone. Start with the{" "}
          <Link href="/contractor-license-bond">contractor license bond</Link>.
        </p>

        <h2>If you are an LLC: add the worker bond</h2>
        <p>
          License your business as an LLC and California adds a second, larger bond on top of the
          license bond. The <strong>{usd(facts.llcWorkerBondAmount)}</strong> LLC employee/worker
          bond, required under <strong>{facts.llcWorkerBondStatute}</strong>, protects your
          employees&apos; wages and benefits. A corporation or sole proprietor does not carry it; an
          LLC does. See the <Link href="/llc-employee-worker-bond">LLC worker bond</Link>.
        </p>

        <h2>If you have employees: workers&apos; compensation</h2>
        <p>
          The moment you hire employees, California requires{" "}
          <strong>workers&apos; compensation</strong> coverage. It is not a surety bond; it is
          insurance, and it is mandatory for employers. Contractors in a few classifications must
          carry it even without employees, so verify your situation with the CSLB.
        </p>

        <h2>If you bid public or larger commercial work: contract bonds</h2>
        <p>
          Move into public works or larger commercial projects and owners will require{" "}
          <strong>contract bonds</strong>, project by project. These are not license bonds; they back
          a specific job.
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Bid bond.</strong> Guarantees you will honor your bid if you win the award.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Performance bond.</strong> Guarantees you finish the project per the contract.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Payment bond.</strong> Guarantees your subcontractors and suppliers get paid.
            </span>
          </li>
        </ul>

        <h2>And insurance</h2>
        <p>
          Bonds are not insurance for your business. Most contractors also carry{" "}
          <strong>general liability insurance</strong>, and many clients and general contractors
          require it before you set foot on site. It is standard, separate from your bonds, and worth
          having. Our <Link href="/bonding-vs-insurance">bonding vs. insurance</Link> guide explains
          the difference.
        </p>
        <p>Here is the stack by business type:</p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Sole proprietor, no employees:</strong> the {usd(facts.licenseBondAmount)}{" "}
              license bond, plus general liability insurance.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Corporation with employees:</strong> the license bond, workers&apos;
              compensation, and general liability insurance.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>LLC with employees:</strong> the license bond, the{" "}
              {usd(facts.llcWorkerBondAmount)} LLC worker bond, workers&apos; compensation, and
              general liability insurance.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Anyone bidding public or larger commercial work:</strong> add bid, performance,
              and payment bonds per project.
            </span>
          </li>
        </ul>
        <p>
          We place the bonds in this stack, license, LLC worker, and contract bonds, and point you to
          the right coverage for the rest. Underwriting still applies, and tougher credit is welcome.
        </p>
      </Prose>
    </GuidePage>
  );
}
