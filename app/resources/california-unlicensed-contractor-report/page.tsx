import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats, sources } from "@/lib/stats";

const guide = getGuide("california-unlicensed-contractor-report")!;

export const metadata: Metadata = {
  title: "Unlicensed Contractors in California: The Data",
  description:
    "Unlicensed contractors carry no license, no bond, and no insurance, and feed a $60B to $140B underground economy. The data, and how to protect yourself.",
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
    q: "How big is the unlicensed contractor problem in California?",
    a: "Unlicensed contracting is part of California's estimated $60 billion to $140 billion annual underground economy (CA EDD). Against roughly 290,000 licensed contractors, an unknown but large number operate without a license, and therefore without a bond or insurance.",
  },
  {
    q: "When does California require a licensed contractor?",
    a: "For most construction or improvement work where the combined labor and materials cost is $1,000 or more, or where a building permit is required. Below that, a limited handyman exemption can apply, but the person still cannot advertise as a licensed contractor.",
  },
  {
    q: "What is the risk of hiring an unlicensed contractor?",
    a: "They carry no CSLB license, no $25,000 contractor license bond, and typically no liability or workers' compensation insurance. If the work is defective, abandoned, or someone is injured, you often have no bond to claim against and limited recourse. You can also be liable as the employer.",
  },
  {
    q: "How do I check that a contractor is licensed and bonded?",
    a: "Use the CSLB license lookup to confirm the license is active and the bond is on file, and confirm the bond directly with the surety. Licensed, bonded, and insured is the baseline; verify all three before you pay a deposit.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="Unlicensed contractors carry no CSLB license, no $25,000 contractor license bond, and usually no insurance. They are part of California's estimated $60 billion to $140 billion annual underground economy. California requires a licensed contractor for most work valued at $1,000 or more, or needing a permit. Hiring unlicensed means little recourse if the job goes wrong. Verify license, bond, and insurance before you pay."
      intro="Unlicensed contracting is one of the biggest hidden risks in home improvement, and in California it is big business. This report pulls together the public data on the scale of the problem, what protections you lose by hiring unlicensed, and how to check that a contractor is the real thing."
      faqs={faqs}
      related={[
        { label: "How to verify a contractor is bonded", href: "/resources/how-to-verify-a-contractor-is-bonded" },
        { label: "Licensed, bonded & insured", href: "/resources/licensed-bonded-and-insured" },
        { label: "Verify your bond is real", href: "/resources/how-to-verify-your-surety-bond-is-real" },
        { label: "Contractor License Bond", href: "/contractor-license-bond" },
      ]}
    >
      <StatGrid
        heading="Unlicensed contracting, by the numbers"
        items={pickStats([
          "caContractors",
          "undergroundEconomy",
          "caLicenseBond",
          "unlicensedThreshold",
        ])}
      />

      <Prose>
        <h2>The scale of the problem</h2>
        <p>
          California licenses roughly <strong>290,000</strong> active contractors across{" "}
          <strong>44</strong> classifications through the CSLB. Alongside that legitimate market runs a
          large <strong>underground economy</strong>: unlicensed operators who take cash work off the
          books. The state estimates its total underground economy at{" "}
          <strong>$60 billion to $140 billion a year</strong> (CA EDD), and unlicensed contracting is a
          significant piece of it, money that skips taxes, licensing, bonding, and insurance.
        </p>

        <h2>What "unlicensed" actually means for you</h2>
        <p>
          The license is not just a credential. It is the gateway to a stack of consumer protections
          that an unlicensed contractor does not carry. Here is the difference.
        </p>
      </Prose>

      <div className="my-8 overflow-x-auto rounded-2xl border border-ink-200">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-surface text-left">
              <th className="p-4 font-semibold text-navy-900"></th>
              <th className="p-4 font-display font-bold text-navy-900">Licensed contractor</th>
              <th className="p-4 font-display font-bold text-navy-900">Unlicensed</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            <tr>
              <td className="p-4 font-semibold text-navy-900">CSLB license</td>
              <td className="p-4 text-ink-700">Verified experience and exam</td>
              <td className="p-4 text-ink-700">None</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Contractor license bond</td>
              <td className="p-4 text-ink-700">$25,000 bond you can claim against</td>
              <td className="p-4 text-ink-700">None</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Liability insurance</td>
              <td className="p-4 text-ink-700">Typically carried</td>
              <td className="p-4 text-ink-700">Usually none</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Workers' comp</td>
              <td className="p-4 text-ink-700">Required with employees</td>
              <td className="p-4 text-ink-700">Often none (you may be liable)</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Your recourse if it goes wrong</td>
              <td className="p-4 text-ink-700">CSLB complaint, bond claim, insurance</td>
              <td className="p-4 text-ink-700">Limited; often court only</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Prose>
        <h2>When California requires a license</h2>
        <p>
          You need a licensed contractor for most construction or improvement work where the combined
          labor and materials cost is <strong>$1,000 or more</strong>, or where a building permit is
          required. Below that, a limited handyman exemption can apply, but that person still may not
          advertise as licensed. Anyone bidding larger jobs without a license is operating illegally,
          and the state runs stings (the SWIFT program) to catch it.
        </p>

        <h2>The bonding angle</h2>
        <p>
          The single clearest line between licensed and unlicensed is the{" "}
          <Link href="/contractor-license-bond">$25,000 contractor license bond</Link>. Every licensed
          California contractor carries one; it is a fund a harmed consumer can make a claim against.
          An unlicensed contractor carries nothing, so if the work is defective or abandoned, there is
          no bond behind them. That is the protection you give up, and it is the reason{" "}
          <Link href="/resources/licensed-bonded-and-insured">
            "licensed, bonded, and insured"
          </Link>{" "}
          is the phrase that matters.
        </p>

        <h2>How to protect yourself</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Verify the license</strong> on the CSLB lookup, active and in the right
              classification.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Confirm the bond</strong> is on file and real. Our guide on{" "}
              <Link href="/resources/how-to-verify-a-contractor-is-bonded">
                how to verify a contractor is bonded
              </Link>{" "}
              walks through it.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Ask for proof of insurance</strong>, liability and, if they have employees,
              workers' comp.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Never pay large cash deposits</strong> to someone you have not verified.
            </span>
          </li>
        </ul>

        <h2>Methodology and sources</h2>
        <p>
          Figures are drawn from public data: the licensed-contractor count and classification system
          from the{" "}
          <a href={sources.cslb.url} target="_blank" rel="nofollow noopener">
            CSLB
          </a>
          , the underground-economy estimate and the $1,000 licensing threshold context from the{" "}
          <a href={sources.edd.url} target="_blank" rel="nofollow noopener">
            California EDD
          </a>{" "}
          and CSLB, and the $25,000 license bond amount from the California Business &amp; Professions
          Code. Members of the press and fellow professionals are welcome to cite this report with a
          link back to this page.
        </p>
      </Prose>
    </GuidePage>
  );
}
