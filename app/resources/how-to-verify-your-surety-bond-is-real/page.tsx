import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("how-to-verify-your-surety-bond-is-real")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "Confirm your surety bond is real: verify the bond with the surety, check it was filed with the obligee, and confirm your agent is licensed. A checklist.",
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
    q: "How do I know if my surety bond is real?",
    a: "Confirm three things: the bond exists on the surety company's records (call the surety, not just your agent, with the bond number), it was filed with the obligee that requires it (the CSLB, a court, an agency, or the project owner), and your agent or broker is licensed with the state. If all three check out, your bond is real.",
  },
  {
    q: "What happens if my agent never pays the surety?",
    a: "If the premium is not remitted, the bond can be canceled or never take effect, which can leave you exposed on a job or out of compliance with your license, even though you paid. That is exactly why you verify the bond directly with the surety and the obligee, not just with the person who sold it to you.",
  },
  {
    q: "How do I verify a California contractor license bond was filed?",
    a: "The CSLB shows a licensee's bond information on its public license lookup. Check your license record to confirm the bond is on file, active, and from an admitted surety. If it is missing or shows a gap, follow up immediately.",
  },
  {
    q: "How do I check that my agent or broker is licensed?",
    a: "Use your state insurance department's license lookup. In California, the Department of Insurance lets you verify an agent or broker's license by name or license number. Bonds should be placed by a licensed producer through an admitted surety.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="To confirm a surety bond is real: verify the bond and its number directly with the surety company, confirm it was actually filed with the obligee that requires it (the CSLB, a court, an agency, or the owner), and check that your agent or broker is licensed with the state. Premium theft is rare, but these three checks protect you from it, and they take minutes."
      intro="Almost every surety agent is honest. But because you hand over money for a promise you cannot see, it is worth knowing how to confirm that promise is real. Here is a short, practical checklist to verify your bond exists, is filed, and was placed by a licensed professional."
      faqs={faqs}
      related={[
        { label: "How to verify a contractor is bonded", href: "/resources/how-to-verify-a-contractor-is-bonded" },
        { label: "Why use a surety broker", href: "/why-use-a-surety-broker" },
        { label: "Contractor License Bond", href: "/contractor-license-bond" },
        { label: "Surety bond glossary", href: "/surety-bond-glossary" },
      ]}
    >
      <StatGrid
        heading="Surety bonds by the numbers"
        items={pickStats([
          "usSuretyPremium",
          "caContractors",
          "caLicenseBond",
          "minEarnedPremium",
        ])}
      />

      <Prose>
        <h2>Why this is worth five minutes</h2>
        <p>
          When you buy a surety bond, you pay a premium and receive a promise: a surety company stands
          behind you to whoever requires the bond. You rarely see the machinery behind that promise,
          which is what makes the rare bad actor possible.
        </p>
        <p>
          A 2026 Florida case is a clean, if uncomfortable, illustration. A Palm Beach Gardens agent
          was <strong>charged</strong> after investigators said she collected about{" "}
          <strong>$90,000</strong> in bond premiums from two construction companies, for bonds issued
          in a surety&apos;s name, but never remitted the money to the surety. It came to light only
          when the surety reported it had not been paid. (She is accused, not convicted, and is
          entitled to the presumption of innocence.) Sources:{" "}
          <a
            href="https://www.insurancejournal.com/news/southeast/2026/06/10/873245.htm"
            target="_blank"
            rel="nofollow noopener"
          >
            Insurance Journal
          </a>{" "}
          and{" "}
          <a
            href="https://cbs12.com/news/local/south-florida-news-insurance-agent-in-palm-beach-county-accused-of-keeping-90k-meant-for-coverage-department-of-financial-services-north-palm-beach-old-republic-surety-company-bonds-florida-department-of-financial-services-criminal-investigations"
            target="_blank"
            rel="nofollow noopener"
          >
            CBS12
          </a>
          .
        </p>
        <p>
          The lesson is not that surety is risky. It is that a few minutes of verification, which you
          can do on any bond, closes the door on this entirely. Here is how.
        </p>

        <h2>The three-check verification</h2>
        <p>
          A real, in-force bond passes all three of these. Run them on any new bond, especially a
          large one.
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>1. Verify with the surety, not just the agent.</strong> Get the bond number and
              the name of the surety company, then contact the surety directly to confirm the bond was
              issued and the premium was received. The surety, not the person who sold it to you, is
              the source of truth.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>2. Confirm it was filed with the obligee.</strong> The party that requires the
              bond should show it on file. For a California contractor license bond, the{" "}
              <strong>CSLB</strong> lists your bond on your public license record. For a court or
              agency bond, the court clerk or agency has it. If it is not on file, it is not doing its
              job.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>3. Confirm your agent is licensed and the surety is admitted.</strong> Look up
              the agent or broker on your state insurance department&apos;s license search (in
              California, the Department of Insurance), and confirm the surety is an{" "}
              <strong>admitted</strong> carrier authorized in your state.
            </span>
          </li>
        </ul>

        <h2>Red flags worth pausing on</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              Being asked to pay the premium to an <strong>individual</strong> or a personal account,
              rather than the agency or surety.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>No bond number,</strong> or an agent who cannot or will not let you verify the
              bond with the surety.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              The bond never appearing on your{" "}
              <Link href="/contractor-license-bond">CSLB record</Link> or with the obligee after you
              paid.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              Pressure to skip paperwork, a price that is far below every other quote, or a{" "}
              &quot;guaranteed approval&quot; promise. Real underwriting does not work that way.
            </span>
          </li>
        </ul>

        <h2>The simplest protection: a licensed broker</h2>
        <p>
          The reason this kind of case is rare is that the system is built on licensed producers and
          admitted sureties, with regulators watching. Working with a licensed broker who places your
          bond through a real surety, and who has no problem with you verifying every step, removes the
          risk almost entirely. It is the same reason you would{" "}
          <Link href="/resources/how-to-verify-a-contractor-is-bonded">
            verify that a contractor is bonded
          </Link>{" "}
          before hiring them, and it is a core part of{" "}
          <Link href="/why-use-a-surety-broker">what a broker is for</Link>. If you ever want a second
          set of eyes on a bond you were sold, <Link href="/get-a-quote">reach out</Link> and we will
          help you confirm it is real.
        </p>
      </Prose>
    </GuidePage>
  );
}
