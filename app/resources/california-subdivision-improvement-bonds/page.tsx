import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide, guideHero } from "@/lib/guides";
import { subdivision } from "@/lib/regulatory";
import { pickStats } from "@/lib/stats";
import { clampDescription } from "@/lib/utils";

const guide = getGuide("california-subdivision-improvement-bonds")!;

export const metadata: Metadata = {
  title: guide.title,
  description: clampDescription(
    "California subdivision improvement bonds: how the agency sets the amount from the engineer's estimate, the securities a project posts, and how to get them exonerated. Reviewed by a licensed broker.",
  ),
  alternates: { canonical: `/resources/${guide.slug}` },
  openGraph: {
    images: [
      {
        url: guideHero(guide.slug),
        width: 1200,
        height: 675,
        alt: `Illustration for ${guide.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [guideHero(guide.slug)],
  },
};

const faqs = [
  {
    q: "How much does a subdivision improvement bond cost?",
    a: "You pay an annual premium, a percentage of the bond amount, not the bond amount itself. The bond amount is not negotiable: it is the agency's approved cost estimate for the required improvements. The premium is set by underwriting, driven by your financial statements, experience, and credit.",
  },
  {
    q: "Can I post cash instead of a bond?",
    a: "Usually yes. The Subdivision Map Act lets a subdivider secure the improvements with a surety bond, a cash deposit, or an instrument of credit. Most developers choose the bond because a cash deposit locks up capital for the length of the project plus the warranty period, while a bond costs a fraction of the amount each year.",
  },
  {
    q: "When do I get my subdivision bond back?",
    a: "After the improvements are complete, the agency formally accepts them, and any warranty period expires. Acceptance is usually a council or board action, not a field sign-off. Exoneration is rarely automatic, so plan to ask for it in writing and follow up.",
  },
  {
    q: "Can a newer developer get a subdivision bond?",
    a: "Often, though it is underwritten more like a contract bond than a license bond. Sureties look at your balance sheet, your experience with similar improvements, and how much bonded work you already carry. Newer and credit-challenged files are placeable in the right markets, but underwriting always applies and we never promise guaranteed approval.",
  },
  {
    q: "Does the bond protect me if the improvements fail?",
    a: "No. Like every surety bond, it protects the agency and the public, not you. If the surety pays a claim, you reimburse the surety in full under your indemnity agreement. If you want protection for your own losses, that is insurance, and it is a separate product.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="A subdivision improvement bond guarantees the public improvements in your development actually get built. The agency sets the amount from the engineer's approved cost estimate, and most projects post performance and labor-and-material security up front, then a smaller warranty bond after acceptance. Getting the bonds exonerated is where most developers strand their bonding capacity."
      intro="Before a California city or county records your final map, it wants security that the streets, curbs, sewers, and drainage will actually get built. That security is usually a bond. Here is how the amount is set, which bonds a project posts, and the part nobody explains: how to get them released."
      faqs={faqs}
      related={[
        { label: "Subdivision Bond", href: "/commercial-bonds/subdivision-bond" },
        { label: "Contract Bonds hub", href: "/contract-bonds" },
        { label: "Get a Quote", href: "/get-a-quote?path=contract" },
        { label: "Tough file? We place it", href: "/hard-to-place-surety-bonds" },
      ]}
    >
      <StatGrid
        heading="Subdivision bonding by the numbers"
        items={pickStats([
          "caContractors",
          "bidSecurity",
          "usSuretyPremium",
          "constructionSurvival",
        ])}
      />

      <Prose>
        <h2>Why the agency asks for one</h2>
        <p>
          Under the <strong>{subdivision.mapAct}</strong> ({subdivision.mapActCode}), a local agency
          can approve your final map on the condition that the required public improvements get
          built. The agency is not going to take that on faith, and it is not going to record the
          map and hope. It requires <strong>security</strong> first.
        </p>
        <p>
          {subdivision.securityStatute} gives you three ways to post it: a surety bond, a cash
          deposit, or an instrument of credit. Most developers choose the bond for a simple reason.
          A cash deposit ties up the full improvement cost for the length of the project and the
          warranty period behind it, while a bond costs a percentage of that amount per year and
          leaves your capital deployable. It is the same trade-off as{" "}
          <Link href="/resources/surety-bond-collateral">posting collateral</Link> on any other
          bond.
        </p>

        <h2>The amount is the engineer&apos;s estimate, not your revenue</h2>
        <p>
          This surprises first-time subdividers. You do not negotiate the bond amount and it has
          nothing to do with the size of your company. It is the{" "}
          <strong>agency-approved cost estimate</strong> for the required public improvements,
          prepared by the project engineer and signed off by the agency&apos;s engineering
          department. Streets, curbs and gutters, sidewalks, sewer and storm drain, street lights,
          and often landscaping in the public right-of-way.
        </p>
        <p>
          What you actually pay is a <strong>premium</strong>, a percentage of that amount, set by
          underwriting. A $2 million improvement estimate does not mean $2 million out of pocket. It
          means a bond written at $2 million and an annual premium that is a fraction of it.
        </p>

        <h2>The securities a project usually posts</h2>
        <p>
          Most California agencies ask for more than one instrument, and they do different jobs:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Faithful performance security.</strong> Guarantees the improvements get built
              to the approved plans. This is the big one, commonly written at the full approved
              estimate.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Labor and material security.</strong> Protects the subcontractors and
              suppliers who build the improvements, the same job a{" "}
              <Link href="/resources/payment-bond-vs-performance-bond">payment bond</Link> does on a
              contract.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Warranty or maintenance security.</strong> Posted at acceptance and held
              through a warranty period, covering defects that show up after the agency takes the
              improvements over. Much smaller than the performance security.
            </span>
          </li>
        </ul>
        <p>
          The percentages attached to each are set by local ordinance and genuinely vary between
          agencies, so read the conditions of approval rather than assuming a standard. Your city
          engineer&apos;s office is the authority on your project&apos;s numbers, the same way{" "}
          <Link href="/resources/california-public-works-bonds-by-obligee">
            each public obligee sets its own bond requirements
          </Link>{" "}
          on contract work.
        </p>

        <h2>How they get released, and why most developers wait too long</h2>
        <p>
          This is the part that costs money quietly. A subdivision bond does not fall off when the
          work looks finished. It stays on your <strong>aggregate bonding capacity</strong> until
          the agency formally <strong>exonerates</strong> it, and every dollar still tied up in a
          finished tract is a dollar you cannot bond on the next one. The sequence usually runs:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>1. Complete the improvements</strong> to the approved plans and request final
              inspection.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>2. Get formal acceptance.</strong> Acceptance is generally a council or board
              action, not a field sign-off from an inspector. Until it is on an agenda and voted,
              your bond is still live.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>3. Swap to the warranty security.</strong> On acceptance the performance
              security is typically released or reduced, and the smaller warranty bond takes its
              place for the warranty period.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>4. Ask for exoneration in writing</strong> when the warranty period ends.
              Agencies rarely release security on their own initiative, and a bond nobody asked
              about can sit for years.
            </span>
          </li>
        </ul>
        <p>
          Two practical moves. First, ask early whether your agency will{" "}
          <strong>reduce the security in phases</strong> as portions of the improvements are
          accepted, because many will and few volunteer it. Second, calendar the warranty expiry
          the day you post the warranty bond, and send the exoneration request yourself. Recovering
          capacity is the cheapest bonding you will ever do, since it costs a letter rather than a
          premium.
        </p>

        <h2>What underwriters look at</h2>
        <p>
          Treat this as a contract-bond underwrite, not a quick license bond. Nobody issues a
          seven-figure subdivision bond off a soft credit pull, and{" "}
          <Link href="/resources/why-contract-bonds-are-not-instant">
            there are good reasons this kind of bond cannot be instant
          </Link>
          .
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Financial statements.</strong> Working capital and net worth against the size
              of the improvements. Larger projects often want CPA-prepared statements.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Experience.</strong> Whether you have built improvements of this type and
              scale before.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Work on hand.</strong> Everything already bonded counts against your{" "}
              <Link href="/resources/surety-bond-capacity">single and aggregate limits</Link>, which
              is exactly why stale, unexonerated bonds hurt.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Credit.</strong> Personal and business credit shape the rate and the size of
              the program, and{" "}
              <Link href="/resources/how-surety-bond-credit-checks-work">
                how that credit check runs
              </Link>{" "}
              is worth understanding before you apply.
            </span>
          </li>
        </ul>

        <h2>If your file is tougher than your project</h2>
        <p>
          Newer developers, thin balance sheets, and bruised credit are exactly where the automated
          markets stop and a broker starts.{" "}
          <Link href="/resources/funds-control-for-contractors">Funds control</Link> can unlock a
          program that credit alone will not, by satisfying the surety that the improvement money
          reaches the people building the improvements. If a market has already told you no, a{" "}
          <Link href="/resources/why-was-my-surety-bond-declined">decline</Link> from one surety is
          not the whole market&apos;s answer.
        </p>
        <p>
          We place subdivision and site improvement bonds for developers and the site contractors
          building the improvements, alongside the{" "}
          <Link href="/resources/california-permit-bond-requirements">
            encroachment and permit bonds
          </Link>{" "}
          the same project usually needs. Send us the conditions of approval and the engineer&apos;s
          estimate and we will size it and shop it. Start a{" "}
          <Link href="/get-a-quote?path=contract">quote</Link>, or read the full{" "}
          <Link href="/commercial-bonds/subdivision-bond">subdivision bond</Link> page. Underwriting
          always applies, and we never promise guaranteed approval.
        </p>
      </Prose>
    </GuidePage>
  );
}
