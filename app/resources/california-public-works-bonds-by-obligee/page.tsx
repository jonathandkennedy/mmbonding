import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("california-public-works-bonds-by-obligee")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "What bonds Caltrans, DGS, and California local agencies require: a bid bond to bid, then performance and payment bonds to build. Broker-reviewed.",
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
    q: "Which bonds does a California public works job require?",
    a: "Usually the full contract program. You furnish a bid bond to submit a bid, then performance and payment bonds if you win, commonly up to 100% of the contract. The agency sets the exact requirement in the solicitation.",
  },
  {
    q: "Who decides the bond amount?",
    a: "The obligee does, meaning the public agency that owns the project. The amount and the bond forms are written into the contract and the solicitation, so read those documents and confirm with the agency before you bid.",
  },
  {
    q: "Do Caltrans, DGS, and the City and County of LA all work this way?",
    a: "Yes, they follow the same bid, performance, and payment bond pattern. The exact amounts, forms, and thresholds vary by agency and by project, so always confirm the specific solicitation rather than assuming it matches the last one.",
  },
  {
    q: "Do I need DIR registration to bid?",
    a: "Yes. In California you must register with the Department of Industrial Relations before you bid or work on public works. It is separate from your bonds and does not replace them.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="Major California public owners like Caltrans, DGS, and the City and County of LA require the standard contract program: a bid bond to bid, then performance and payment bonds to build, commonly up to 100% of the contract. The agency, as obligee, sets the amounts in the solicitation. You also need DIR registration to bid public work."
      intro="Major California public owners run their bonding the same way. Here is the standard bid, performance, and payment bond program, who sets the amounts, and why DIR registration comes first."
      faqs={faqs}
      related={[
        { label: "Contract Bonds", href: "/contract-bonds" },
        { label: "How to bid public works", href: "/resources/how-to-bid-public-works-in-california" },
        { label: "DIR registration", href: "/resources/dir-registration-for-contractors" },
      ]}
    >
      <StatGrid
        heading="California public works by the numbers"
        items={pickStats([
          "bidSecurity",
          "millerActThreshold",
          "caContractors",
          "usSuretyPremium",
        ])}
      />

      <Prose>
        <h2>Public works means bonded work</h2>
        <p>
          When a California public agency builds something, it protects public money by requiring
          surety bonds. Bid a public job and you will be asked to furnish the standard contract bond
          program. The details sit in the solicitation, but the shape is the same across nearly every
          public owner in the state.
        </p>

        <h2>The standard program</h2>
        <p>
          Almost every California public works solicitation asks for the same three{" "}
          <Link href="/contract-bonds">contract bonds</Link>, in two stages.
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>
                A <Link href="/contract-bonds/bid-bond">bid bond</Link> to bid.
              </strong>{" "}
              It backs your bid and your promise to furnish the final bonds if you win, commonly 5 to
              10% of the bid.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>
                A <Link href="/contract-bonds/performance-bond">performance bond</Link> to build.
              </strong>{" "}
              It guarantees you finish the work per the contract, commonly up to 100% of the contract
              amount.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>
                A <Link href="/contract-bonds/payment-bond">payment bond</Link> to build.
              </strong>{" "}
              It guarantees your subcontractors and suppliers get paid, also commonly up to 100% of
              the contract.
            </span>
          </li>
        </ul>

        <h2>How the obligee sets it</h2>
        <p>
          The obligee is the party the bond protects, and on public works that is the agency that
          owns the project. The obligee sets the requirement: which bonds, at what percentage, on
          which forms, and by when. Those terms live in the contract and the bid documents, so read
          them closely and confirm anything unclear with the agency before you rely on it.
        </p>

        <h2>Caltrans, DGS, and local agencies</h2>
        <p>
          Big or small, California public owners follow this pattern. What changes between them is the
          fine print, not the framework.
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Caltrans</strong> for state highway and transportation work.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>The Department of General Services (DGS)</strong> for state buildings and many
              statewide programs.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>The City and County of Los Angeles</strong> and other local agencies for local
              infrastructure.
            </span>
          </li>
        </ul>
        <p>
          Treat agency names as general guidance. Exact amounts, forms, and thresholds vary by agency
          and by project, so always confirm the specific solicitation rather than assuming it matches
          the last one.
        </p>

        <h2>Do not forget DIR registration</h2>
        <p>
          Bonds are not the only gate. To bid or work public works in California you must register
          with the Department of Industrial Relations, and you register before you bid. It is separate
          from your bonds and does not replace them. See{" "}
          <Link href="/resources/dir-registration-for-contractors">DIR registration</Link> and our
          guide to{" "}
          <Link href="/resources/how-to-bid-public-works-in-california">
            how to bid public works in California
          </Link>
          .
        </p>
      </Prose>
    </GuidePage>
  );
}
