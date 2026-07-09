import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("surety-bonds-after-bankruptcy-or-tax-lien")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "Usually yes. A bankruptcy, tax lien, judgment, or prior bond claim raises your rate and narrows the markets, but it rarely blocks a license bond outright.",
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
    q: "Can I get a license bond with an open bankruptcy?",
    a: "Often, yes. An open bankruptcy narrows the markets and raises the rate more than a discharged one, but specialty sureties still write these files. A broker shops the carriers that are comfortable with it. Underwriting applies, so approval is not guaranteed.",
  },
  {
    q: "Does a tax lien stop me from getting bonded?",
    a: "Rarely on a license bond. A tax lien is a red flag underwriters weigh, and it can raise your rate, but it is not an automatic decline. Showing a payment plan or resolution in progress helps your case.",
  },
  {
    q: "I had a prior bond claim. Can I still get bonded?",
    a: "Usually. A prior claim moves you into hard-to-place territory and affects your rate, but the right market will still write it, sometimes with funds control or collateral. We place files other agents decline.",
  },
  {
    q: "Will my rate be higher because of this?",
    a: "Most likely, yes. A bankruptcy, lien, judgment, or claim signals added risk, so expect a rate above standard. As the event ages and your credit recovers, we can re-shop the bond for a better rate at renewal.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="Can you get a surety bond after a bankruptcy or tax lien? Usually yes. A bankruptcy, tax lien, or prior claim raises your rate and narrows the markets, but it rarely blocks a license bond outright. We shop the sureties that write tough files and use tools like funds control when needed. Underwriting still applies."
      intro="A bankruptcy, tax lien, judgment, or prior bond claim makes underwriting harder, not impossible. Here is how sureties view each one, what actually gets you placed, and what to expect on rate."
      faqs={faqs}
      related={[
        { label: "Bad credit surety bonds", href: "/resources/surety-bonds-with-bad-credit" },
        { label: "Hard-to-Place Bonds", href: "/hard-to-place-surety-bonds" },
        { label: "Funds control", href: "/resources/funds-control-for-contractors" },
      ]}
    >
      <StatGrid
        heading="Tough-file bonding by the numbers"
        items={pickStats([
          "caLicenseBond",
          "sbaGuarantee",
          "caContractors",
          "usSuretyPremium",
        ])}
      />

      <Prose>
        <h2>Yes, it is still placeable</h2>
        <p>
          A bankruptcy, tax lien, judgment, or prior bond claim on your record does not close the
          door. For a California{" "}
          <Link href="/contractor-license-bond">contractor license bond</Link>, these events raise
          your rate and narrow the list of sureties willing to write you, but they rarely block the
          bond outright.
        </p>
        <p>
          The difference between a decline and an approval is usually the market, not the borrower. A
          broker who works{" "}
          <Link href="/hard-to-place-surety-bonds">hard-to-place files</Link> knows which sureties are
          comfortable with a tough history and shops your file to them instead of stopping at the
          first no.
        </p>

        <h2>How sureties view a bankruptcy</h2>
        <p>
          Underwriters treat a bankruptcy as a signal about financial stability, and the biggest
          factor is whether it is open or discharged.
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Discharged.</strong> A completed, discharged bankruptcy is viewed more
              favorably. The further in the past, the less it weighs, and many standard-leaning
              markets will still consider the file.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Open.</strong> An open or recently filed bankruptcy narrows the markets more and
              usually carries a higher rate, but specialty sureties still write these files.
            </span>
          </li>
        </ul>

        <h2>Tax liens, judgments, and prior claims</h2>
        <p>
          Each of these is a red flag an underwriter will weigh, and each affects your rate, but none
          is an automatic decline on a license bond:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Tax liens.</strong> Federal or state liens raise concern, but showing a payment
              plan or an active resolution helps. Placement is still common.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Judgments.</strong> A civil judgment is context an underwriter reviews.
              Explaining it and showing it resolved, or being resolved, strengthens the file.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Prior bond claims.</strong> A past claim moves you firmly into hard-to-place
              territory, yet the right market will still write it, sometimes with added safeguards.
            </span>
          </li>
        </ul>

        <h2>What actually gets you placed</h2>
        <p>
          On a tough file, placement comes down to matching you with the right surety and, when
          needed, adding a safeguard that lowers their risk:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>The right market.</strong> Specialty sureties price tough files differently, so
              shopping your file across them is the single most important step.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Funds control.</strong> On contract bonds, a neutral third party can hold and
              disburse job funds, which reassures the surety. See{" "}
              <Link href="/resources/funds-control-for-contractors">funds control</Link>.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Collateral, sometimes.</strong> On the hardest files, posting collateral can
              secure an approval that would not happen otherwise.
            </span>
          </li>
        </ul>
        <p>
          None of these are guarantees. Underwriting still applies to every file. But together they
          turn most tough situations into a workable bond.
        </p>

        <h2>What to expect on rate</h2>
        <p>
          Be ready for a rate above standard. A bankruptcy, lien, judgment, or claim signals added
          risk, and the premium reflects it, similar to how pricing works on a{" "}
          <Link href="/resources/surety-bonds-with-bad-credit">bad-credit surety bond</Link>. The good
          news is that it is not permanent. As the event ages and your credit recovers, we can
          re-shop the bond and move you toward a better rate at renewal.
        </p>
        <p>
          The fastest way to know where you stand is to let us look. Start a{" "}
          <Link href="/get-a-quote">quote</Link> and we will tell you honestly what is placeable and
          at what rate.
        </p>
      </Prose>
    </GuidePage>
  );
}
