import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { getGuide } from "@/lib/guides";

const guide = getGuide("surety-bond-capacity")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "What surety bonding capacity is, how sureties set your single-job and aggregate limits, and the practical steps to increase it.",
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
    q: "What is surety bonding capacity?",
    a: "It is how much bonded work a surety is willing to back for you at once. It is expressed as a single-job limit (the largest one project) and an aggregate limit (the total across all open bonded work).",
  },
  {
    q: "How do sureties decide my capacity?",
    a: "They read your financial statements, working capital, work-in-progress, and track record of completed bonded jobs. Stronger, better-documented financials support a larger program.",
  },
  {
    q: "How can I increase my bonding capacity?",
    a: "Provide reviewed or audited financial statements, keep clean work-in-progress reporting, build working capital and retained earnings, and complete bonded jobs successfully. Each strengthens your file.",
  },
  {
    q: "Does bonding capacity apply to license bonds?",
    a: "No. Capacity is a contract-surety concept for performance and payment bonds on projects. A fixed-amount license bond does not use a capacity limit.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={
        "What is surety bonding capacity? It is how much bonded work a surety will back for you, expressed as a single-job limit and a total aggregate limit. Sureties set it from your financials, working capital, and track record. You raise it with reviewed or audited statements, work-in-progress reporting, and completed bonded jobs."
      }
      intro={
        "Bonding capacity decides how big a bonded project you can chase and how much bonded work you can carry at once. It is a contract-surety concept, and it is something you can grow. Here is how it is set and how to increase it."
      }
      faqs={faqs}
      related={[
        { label: "SBA Surety Bonds", href: "/sba-surety-bonds" },
        { label: "Contract Bonds", href: "/contract-bonds" },
        { label: "Glossary", href: "/surety-bond-glossary" },
      ]}
    >
      <Prose>
        <h2>What bonding capacity means</h2>
        <p>
          Bonding capacity is the amount of bonded work a surety will support for you at a given time.
          It comes in two numbers:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Single-job limit.</strong> The largest single bonded project the surety will back
              for you.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Aggregate limit.</strong> The total of all your open bonded work at once, across
              every active project.
            </span>
          </li>
        </ul>
        <p>
          A surety might set, for example, a single-job limit and a larger aggregate limit so you can run
          several bonded jobs at the same time without exceeding the total. This applies to{" "}
          <Link href="/contract-bonds">contract bonds</Link>, not the fixed-amount license bond.
        </p>

        <h2>How sureties set your capacity</h2>
        <p>
          Underwriters build your program from the financial picture you can document. The stronger and
          cleaner the picture, the larger the program they will extend.
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Financial statements.</strong> The foundation. Quality and level of assurance
              matter as much as the numbers.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Working capital.</strong> Current assets minus current liabilities, a core gauge
              of whether you can fund the work.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Work-in-progress.</strong> A current WIP schedule shows how your open jobs are
              tracking to budget and completion.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Track record.</strong> A history of bonded jobs finished on time and on budget is
              powerful evidence of reliability.
            </span>
          </li>
        </ul>

        <h2>How to increase it</h2>
        <p>
          Capacity is not fixed. You grow it by giving the surety more reasons to trust you with bigger
          work. The most effective moves are:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Quality financial statements.</strong> Move from internal or compiled statements
              toward CPA-reviewed or audited statements to unlock a larger program.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Work-in-progress reporting.</strong> Keep an accurate, current WIP schedule so
              underwriters can see your open jobs are under control.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Working capital and retained earnings.</strong> Leave profit in the company and
              build cash reserves rather than draining them each year.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>A track record of completed bonded jobs.</strong> Every bonded project you finish
              cleanly makes the next, larger bond easier to justify.
            </span>
          </li>
        </ul>

        <h2>When to upgrade your accounting</h2>
        <p>
          If you are bumping against your limits, the accounting upgrade usually pays for itself. Moving
          up the assurance ladder, from internal statements to reviewed to audited, tends to be the single
          biggest step toward a larger program. It signals discipline and gives the surety confidence to
          extend more. New or growing firms can also lean on the{" "}
          <Link href="/sba-surety-bonds">SBA Surety Bond program</Link>, which helps sureties support
          contractors who are still building capacity.
        </p>
        <p>
          Not sure which terms mean what? The{" "}
          <Link href="/surety-bond-glossary">surety bond glossary</Link> breaks down working capital,
          aggregate limit, and the rest.
        </p>
      </Prose>
    </GuidePage>
  );
}
