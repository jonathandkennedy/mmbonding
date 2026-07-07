import type { Metadata } from "next";
import { clampDescription } from "@/lib/utils";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { getGuide } from "@/lib/guides";

const guide = getGuide("funds-control-for-contractors")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    clampDescription("Funds control is a neutral third party that holds a job's funds and pays labor and suppliers as work is verified, which lowers surety risk and can unlock a bond."),
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
    q: "Is funds control the same as funds administration?",
    a: "Yes. Funds control, funds administration, and funds disbursement all describe the same arrangement: a neutral third party holds the project's money and releases it to labor and suppliers as work is verified.",
  },
  {
    q: "Does funds control guarantee I get the bond?",
    a: "No. It strengthens a file by removing the surety's biggest worry, that money will not reach the right places, but underwriting still applies. It is a tool that helps, not a guarantee of approval.",
  },
  {
    q: "Who pays for funds control?",
    a: "The contractor typically pays the funds control fee, often a small percentage of the contract. On many jobs the cost is minor next to being able to bond and win the work at all.",
  },
  {
    q: "Do I lose control of my money?",
    a: "You direct the work and approve payments, but a neutral administrator disburses funds against verified progress and lien releases. It adds a step, and in exchange it gives the surety the comfort to say yes.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="Funds control is a neutral third party that holds a job's funds and pays labor and suppliers as work is verified. Because it guarantees the money reaches the right places, it lowers the surety's risk and can unlock a performance bond that credit alone could not. It is common for newer contractors."
      intro="Funds control, also called funds administration, is one of the most useful tools for getting bonded when your credit or track record is thin. Here is what it is, how it works on a job, and when it makes sense."
      faqs={faqs}
      related={[
        { label: "Hard-to-Place Bonds", href: "/hard-to-place-surety-bonds" },
        { label: "SBA Surety Bonds", href: "/sba-surety-bonds" },
        { label: "Contract Bonds", href: "/contract-bonds" },
      ]}
    >
      <Prose>
        <h2>What funds control is</h2>
        <p>
          Funds control (you will also hear <strong>funds administration</strong> or funds
          disbursement) is a service where a neutral third party holds the money for a construction
          job and pays it out to the right people as the work gets done. Instead of the contract
          funds flowing straight to the contractor, they flow through an independent administrator
          who releases them against verified progress.
        </p>
        <p>
          The point is simple: it makes sure the job&apos;s money actually reaches labor and
          suppliers, rather than getting spent somewhere else. That single assurance is what makes it
          so valuable to a surety.
        </p>

        <h2>How it works on a job</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Funds are deposited with the administrator.</strong> Contract payments go into a
              controlled account instead of straight to the contractor.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Work is verified.</strong> As tasks are completed, the administrator confirms
              progress before releasing money.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Labor and suppliers get paid directly.</strong> Payroll, subcontractors, and
              material suppliers are paid from the account, often against lien releases.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>The contractor is paid their margin.</strong> What remains after job costs flows
              to you, on a documented and orderly basis.
            </span>
          </li>
        </ul>

        <h2>Why it unlocks bonds</h2>
        <p>
          A surety&apos;s biggest fear on a contract bond is that the money will not make it to the
          people who finish the job, which is exactly what triggers a claim. Funds control removes
          that fear. Because the administrator guarantees the money reaches the right places, the
          surety&apos;s risk drops, and a{" "}
          <Link href="/contract-bonds/performance-bond">performance bond</Link> that credit alone
          could not support suddenly becomes workable.
        </p>
        <p>
          That is why funds control is so common for newer or credit-challenged contractors on{" "}
          <Link href="/contract-bonds">contract bonds</Link>. It is one of the go-to tools we reach
          for on a <Link href="/hard-to-place-surety-bonds">hard-to-place file</Link>, alongside the
          SBA program and, when needed, collateral. Underwriting still applies, but funds control
          often turns a decline into an approval.
        </p>

        <h2>The tradeoffs</h2>
        <p>
          Funds control is not free, and it is not effortless. Two honest tradeoffs to weigh:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>A fee.</strong> The administrator charges for the service, often a small
              percentage of the contract. On most bonded jobs that cost is minor next to the value of
              being able to bond at all.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Added paperwork and a step in the payment cycle.</strong> Disbursements run
              through the administrator, so there is more documentation and slightly less direct
              control over cash flow.
            </span>
          </li>
        </ul>

        <h2>Is it right for you</h2>
        <p>
          Funds control tends to make sense when your credit or financials are not yet strong enough
          to bond a project on their own, when you are newer and building a track record, or when a
          job is larger than your current capacity would normally allow. If a surety comes back
          hesitant, offering funds control can be the difference between winning the work and walking
          away.
        </p>
        <p>
          The best way to know is to have a broker look at the specific job and file. Start a{" "}
          <Link href="/get-a-quote">quote</Link> and we will tell you honestly whether funds control
          is the right lever, or whether you can bond without it.
        </p>
      </Prose>
    </GuidePage>
  );
}
