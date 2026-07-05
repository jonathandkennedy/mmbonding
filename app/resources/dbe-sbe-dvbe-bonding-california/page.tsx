import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { getGuide } from "@/lib/guides";
import { sba } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

const guide = getGuide("dbe-sbe-dvbe-bonding-california")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "How DBE, SBE, and DVBE certified firms get bonded for California public work. The certifications help you win, but you still need contract bonds.",
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
    q: "Is a DBE, SBE, or DVBE certification a bond?",
    a: "No. Those are certifications that help you compete for and win California public contracts. They do not satisfy a bonding requirement. A certified firm still furnishes the same bid, performance, and payment bonds as anyone else.",
  },
  {
    q: "What is DBE versus SBE versus DVBE?",
    a: "DBE is the Disadvantaged Business Enterprise program, certified through the Caltrans-led California Unified Certification Program. SBE is Small Business Enterprise and DVBE is Disabled Veteran Business Enterprise, both certified through the Department of General Services. Confirm current rules with each program.",
  },
  {
    q: "Which programs help a certified firm get bonded?",
    a: `The SBA Surety Bond Guarantee program backs bonds on contracts up to ${usd(sba.contractLimit)}, or ${usd(sba.federalContractLimit)} on some federal contracts, and pairs well with funds control for newer firms. Underwriting still applies, and no honest broker guarantees approval.`,
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={`DBE, SBE, and DVBE are certifications that help you win California public work, not bonds, so certified firms still need the standard bid, performance, and payment bonds. The SBA Surety Bond Guarantee program (up to ${usd(sba.contractLimit)}, or ${usd(sba.federalContractLimit)} on some federal jobs) and funds control help small and emerging firms qualify. We build the program.`}
      intro="DBE, SBE, and DVBE certifications open doors on public work, but they are not bonds. Here is why certified firms still need contract bonds, and the programs that help you qualify for them."
      faqs={faqs}
      related={[
        { label: "SBA Surety Bonds", href: "/sba-surety-bonds" },
        { label: "Funds control", href: "/resources/funds-control-for-contractors" },
        { label: "Contract Bonds", href: "/contract-bonds" },
      ]}
    >
      <Prose>
        <h2>Certification is not a bond</h2>
        <p>
          DBE, SBE, and DVBE are certifications, not bonds. They help you compete for and win public
          contracts, often through goals and set-asides, but they do not satisfy a bonding
          requirement. Think of certification as a door opener and the bond as a separate box the
          contract still makes you check.
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>DBE, Disadvantaged Business Enterprise.</strong> Certified through the
              Caltrans-led California Unified Certification Program.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>SBE, Small Business Enterprise, and DVBE, Disabled Veteran Business
              Enterprise.</strong>{" "}
              Certified through the California Department of General Services.
            </span>
          </li>
        </ul>
        <p>
          Programs and rules change, so confirm current eligibility and process with the certifying
          agency.
        </p>

        <h2>You still need contract bonds</h2>
        <p>
          A certified firm furnishes the same <Link href="/contract-bonds">contract bonds</Link> as
          everyone else on a public job.
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>A bid bond</strong> to submit a bid.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>A performance bond</strong> to guarantee the work.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>A payment bond</strong> to guarantee your subs and suppliers get paid.
            </span>
          </li>
        </ul>

        <h2>Programs that help you qualify</h2>
        <p>
          Certification does not bond you, but two tools help small and emerging certified firms
          qualify for the bonds they need.
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>
                The <Link href="/sba-surety-bonds">SBA Surety Bond Guarantee program</Link>.
              </strong>{" "}
              It backs bonds on contracts up to {usd(sba.contractLimit)}, and up to{" "}
              {usd(sba.federalContractLimit)} on some federal contracts when the contracting officer
              certifies it is needed.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>
                <Link href="/resources/funds-control-for-contractors">Funds control</Link>.
              </strong>{" "}
              A neutral third party disburses job funds as work is verified, which lowers the
              surety&apos;s risk and can unlock a bond that credit alone could not.
            </span>
          </li>
        </ul>

        <h2>How we build your program</h2>
        <p>
          We take your certifications, your financials, and the job in front of you, then shop the
          file to the markets most likely to say yes, including the SBA program where it fits.
          Underwriting still applies and we never promise guaranteed approval, but we work the file.
          Start with a <Link href="/get-a-quote">quote</Link>.
        </p>
      </Prose>
    </GuidePage>
  );
}
