import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";
import { facts } from "@/lib/regulatory";
import { usd, clampDescription } from "@/lib/utils";

const guide = getGuide("how-to-get-a-california-contractor-license")!;

export const metadata: Metadata = {
  title: guide.title,
  description: clampDescription(`The full path to a CSLB license: four years of experience, the CSLB application, the law and trade exams, fingerprinting and fees, then the ${usd(facts.licenseBondAmount)} license bond that finishes it.`),
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
    q: "How do you get a California contractor license?",
    a: `Prove four years of journey-level experience, apply to the CSLB, pass the law and trade exams, complete fingerprinting and fees, then file the ${usd(facts.licenseBondAmount)} license bond. The bond is the final step before your license issues.`,
  },
  {
    q: "How much experience do I need for a CSLB license?",
    a: "Generally four years of journey-level experience in the trade you are applying for, within the last ten years. Related education or apprenticeship can count toward some of that requirement.",
  },
  {
    q: "What bonds do I need to get licensed?",
    a: `Every licensee files the ${usd(facts.licenseBondAmount)} contractor license bond. If you license as an LLC you also need the ${usd(facts.llcWorkerBondAmount)} LLC employee/worker bond, plus workers' compensation coverage if you have employees.`,
  },
  {
    q: "How fast can the bond be filed?",
    a: `Once you approve your quote, the surety e-files the bond with the CSLB, typically within ${facts.filingWindow}. We handle that step so it does not hold up your license.`,
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={`Prove four years of journey-level experience, apply to the CSLB, pass the law and trade exams, complete fingerprinting and fees, then file the ${usd(facts.licenseBondAmount)} license bond (plus workers' comp if you have employees). The bond is the last step, and we handle it fast.`}
      intro={`Getting a California contractor license runs through the CSLB in a set order: experience, application, exams, fingerprinting, and bonding. The bond is the final step, and it is ours. Here is the whole path.`}
      faqs={faqs}
      related={[
        { label: "Get licensed (exam prep)", href: "/contractor-license-school" },
        { label: "Contractor License Bond", href: "/contractor-license-bond" },
        { label: "Bonded as a new contractor", href: "/resources/how-to-get-bonded-as-a-new-contractor" },
      ]}
    >
      <StatGrid
        heading="Getting licensed by the numbers"
        items={pickStats([
          "contractorExperience",
          "cslbAppFee",
          "caLicenseBond",
          "caContractors",
        ])}
      />

      <Prose>
        <h2>Step 1: Meet the experience requirement</h2>
        <p>
          The CSLB expects roughly <strong>four years of journey-level experience</strong> in the
          trade you are applying for, generally earned within the last ten years. That means work at
          the level of a journeyman, foreman, supervisor, or owner-builder, not entry-level labor.
          Some approved education or apprenticeship can count toward part of the requirement.
        </p>

        <h2>Step 2: Apply to the CSLB</h2>
        <p>
          Next you submit an application to the Contractors State License Board for the classification
          you qualify for, whether that is a general class or a specialty. This is where you name your
          qualifying individual and pay an application and licensing fee. If you are unsure which
          classification fits, our{" "}
          <Link href="/resources/california-contractor-license-classifications">
            classifications guide
          </Link>{" "}
          walks through A, B, and the C-## trades.
        </p>

        <h2>Step 3: Pass the exams</h2>
        <p>
          Most applicants sit for two exams: a <strong>law and business</strong> exam that every
          classification shares, and a <strong>trade</strong> exam specific to your classification.
          Preparation matters here, and it is the step that trips people up. An exam-prep course can
          make the difference. See{" "}
          <Link href="/contractor-license-school">contractor license exam prep</Link> to get ready.
        </p>

        <h2>Step 4: Fingerprinting and fees</h2>
        <p>
          After you pass, the CSLB requires <strong>fingerprinting</strong> for a background check,
          along with the applicable licensing fees. This is a routine clearance step, but it has to
          be complete before your license can issue.
        </p>

        <h2>Step 5: Get bonded and insured</h2>
        <p>
          The final requirement is bonding. Every licensee must file the{" "}
          <strong>{usd(facts.licenseBondAmount)}</strong>{" "}
          <Link href="/contractor-license-bond">contractor license bond</Link> under{" "}
          <code>{facts.licenseBondStatute}</code>. On top of that:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Licensing as an LLC?</strong> You also file the{" "}
              {usd(facts.llcWorkerBondAmount)} LLC employee/worker bond under{" "}
              <code>{facts.llcWorkerBondStatute}</code>.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Have employees?</strong> California requires{" "}
              <strong>workers&apos; compensation</strong> insurance before your license activates.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Just starting out?</strong> A thin track record does not stop you from getting
              bonded. See{" "}
              <Link href="/resources/how-to-get-bonded-as-a-new-contractor">
                getting bonded as a new contractor
              </Link>
              .
            </span>
          </li>
        </ul>
        <p>
          The bond is where we come in. Once you approve your quote, the surety e-files it with the
          CSLB, usually within {facts.filingWindow}, so this last step does not stall your license.
          Underwriting still applies, but we shop it to find your best available rate. Start a{" "}
          <Link href="/get-a-quote">quote</Link> when you reach this step.
        </p>
      </Prose>
    </GuidePage>
  );
}
