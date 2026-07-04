import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { getGuide } from "@/lib/guides";

const guide = getGuide("why-contract-bonds-are-not-instant")!;

export const metadata: Metadata = {
  title: guide.title,
  description: `Why can't you buy a performance bond instantly? Contract bonds are underwritten: the surety reviews financials, work-in-progress, and the job first.`,
  alternates: { canonical: `/resources/${guide.slug}` },
};

const faqs = [
  {
    q: "Why can I buy a license bond instantly but not a performance bond?",
    a: "A license bond is a fixed, standardized bond, so it can be priced by credit alone and filed in minutes. A performance bond guarantees you will finish a specific job, so the surety must review your finances, experience, and the project before it commits. That review cannot be skipped.",
  },
  {
    q: "What does a surety look at for a contract bond?",
    a: "Your financial statements and working capital, your work-in-progress schedule, your experience with similar jobs, your credit, and the specific contract. Together these set a bonding capacity, the single and aggregate limits the surety is comfortable backing.",
  },
  {
    q: "How long does contract bond approval take?",
    a: "With a complete file, a modest bond can move quickly, sometimes a day or two. Larger or first-time programs take longer because the surety is establishing your capacity. Having clean, current financials ready is the single biggest way to speed it up.",
  },
  {
    q: "Does a contract bond decline mean my business is in trouble?",
    a: "No. It usually means the surety needs more financial cushion, more history, or a smaller first bond. A broker can structure a starter program, add funds control, or find a market with more appetite, so you build capacity over time.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={`Because contract bonds are underwritten, not sold at a checkout. The surety reviews your financials, work-in-progress, experience, and the job to set a bonding capacity, then approves the specific bond. It is not a rejection of you, it is how contract surety works, and a broker who packages your file makes it fast.`}
      intro={`You can buy a license bond in minutes, but a performance or contract bond works differently. Here is what the surety actually underwrites, and why that review is normal, not a red flag.`}
      faqs={faqs}
      related={[
        { label: "Contract Bonds", href: "/contract-bonds" },
        { label: "Bonding capacity", href: "/resources/surety-bond-capacity" },
        { label: "SBA Surety Bonds", href: "/sba-surety-bonds" },
      ]}
    >
      <Prose>
        <h2>License bonds are instant; contract bonds are not</h2>
        <p>
          A contractor license bond is fixed and standardized. It is the same form and the same
          amount for everyone, so an automated market can price it on credit and file it in
          minutes. A contract bond is a different animal. A bid, performance, or payment bond
          guarantees a specific job, so the surety has to understand the job and the company
          behind it before it puts its name on the line.
        </p>
        <p>
          That is why there is no checkout button for a performance bond. It is not a rejection of
          you, it is simply how contract surety works.
        </p>

        <h2>What the surety actually underwrites</h2>
        <p>
          A contract bond is closer to a line of credit than a product on a shelf. Before it
          commits, the surety reviews:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Financials and working capital.</strong> Your balance sheet and cash position
              show whether you can carry the work.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Work-in-progress.</strong> Your current jobs and how much is left to finish on
              each, so the surety sees your real workload.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Experience.</strong> Your track record on similar work, at similar size, is
              the best predictor that you will finish this one.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>The specific job.</strong> The contract, the owner, the schedule, and the
              amount all factor into whether and how the bond is approved.
            </span>
          </li>
        </ul>

        <h2>Bonding capacity, not a single purchase</h2>
        <p>
          Contract surety is not a one-off sale. The surety sets a{" "}
          <Link href="/resources/surety-bond-capacity">bonding capacity</Link> for your company: a{" "}
          <strong>single limit</strong> for the largest one job it will bond, and an{" "}
          <strong>aggregate limit</strong> for all your bonded work at once. Once that program is
          in place, individual bonds inside your capacity move quickly. Approving the specific bond
          is the last step, not the whole process.
        </p>

        <h2>How to make it fast anyway</h2>
        <p>
          Contract bonds take more than a license bond, but you can move fast with a little prep:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Have your financials ready.</strong> Current, clean statements, ideally
              CPA-prepared for larger programs, are the single biggest speed lever.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Bring a work-in-progress schedule.</strong> An up-to-date list of open jobs
              saves a round of back-and-forth.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Use a broker who packages the file.</strong> We present your numbers the way
              underwriters expect, which shortens the review.
            </span>
          </li>
        </ul>
        <p>
          Ready to start? Read more on{" "}
          <Link href="/contract-bonds">contract bonds</Link>, see how{" "}
          <Link href="/sba-surety-bonds">SBA-backed bonds</Link> help newer contractors, or check
          your <Link href="/resources/surety-bond-capacity">bonding capacity</Link>.
        </p>
      </Prose>
    </GuidePage>
  );
}
