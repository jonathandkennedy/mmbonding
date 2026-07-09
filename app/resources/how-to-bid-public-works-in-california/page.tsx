import type { Metadata } from "next";
import { clampDescription } from "@/lib/utils";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("how-to-bid-public-works-in-california")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    clampDescription("How to bid public works in California: where to find bids, why DIR registration is required, and the bid, performance, and payment bonds you need to compete. Reviewed by a licensed broker, CA DOI #6009105."),
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
    q: "Where do I find California public works to bid?",
    a: "The DIR public works database, Cal eProcure, and the project pages on local agency and city sites. Watch the ones that match your trade and region.",
  },
  {
    q: "Do I have to register with the DIR to bid?",
    a: "Yes. DIR registration is required to bid and work on public works in California. Prevailing wage and certified payroll also apply on these jobs.",
  },
  {
    q: "What bonds do I need for public works?",
    a: "You typically need a bid bond to submit a bid, then performance and payment bonds if you win the award. A broker sets up the bonding so you can bid and deliver.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="To bid public works in California: register with the DIR first, then find bids on the DIR public works database, Cal eProcure, and local agency sites. You need a bid bond to submit a bid, plus performance and payment bonds if you win. Prevailing wage and certified payroll also apply."
      intro="Public works can be steady, repeatable work, but the process has its own rules. Here is how to find bids in California, what you have to do before you bid, and the bonds you need to compete."
      faqs={faqs}
      related={[
        { label: "Contract Bonds", href: "/contract-bonds" },
        { label: "Bid Bond", href: "/contract-bonds/bid-bond" },
        { label: "DIR Registration", href: "/resources/dir-registration-for-contractors" },
      ]}
    >
      <StatGrid
        heading="Bidding public works by the numbers"
        items={pickStats([
          "dirRegistrationFee",
          "bidSecurity",
          "millerActThreshold",
          "caContractors",
        ])}
      />

      <Prose>
        <h2>Finding public works to bid</h2>
        <p>
          Public projects are posted, not hidden. The trick is watching the right sources for work
          that fits your trade and your region.
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>The DIR public works database.</strong> California&apos;s statewide listing of
              public works projects.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Cal eProcure.</strong> The state&apos;s procurement portal for solicitations.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Local agency sites.</strong> Cities, counties, and districts post their own
              bids; check the agencies you want to work with directly.
            </span>
          </li>
        </ul>

        <h2>Register, then bid</h2>
        <p>
          Before you can bid, you have to be registered.{" "}
          <strong>DIR registration is required to bid and work on public works</strong> in
          California, so handle it first. See the{" "}
          <Link href="/resources/dir-registration-for-contractors">DIR registration</Link> guide for
          what it is and who needs it.
        </p>
        <p>
          On public works, <strong>prevailing wage and certified payroll apply</strong>. Build those
          obligations into your bid and your back office before you commit to the job, not after.
        </p>

        <h2>The bonds you need</h2>
        <p>
          Public works are bonded work, and the bonds come in two stages. To bid, you typically need
          a <Link href="/contract-bonds/bid-bond">bid bond</Link>. If you win, you furnish a{" "}
          <Link href="/contract-bonds/performance-bond">performance bond</Link> and a{" "}
          <Link href="/contract-bonds/payment-bond">payment bond</Link> before the contract is
          signed.
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Bid bond.</strong> Guarantees you will honor your bid and furnish the required
              bonds if you are awarded the job.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Performance and payment bonds.</strong> Guarantee the work gets completed and
              that your subs and suppliers get paid.
            </span>
          </li>
        </ul>
        <p>
          Set the bonding up early. Start at the{" "}
          <Link href="/contract-bonds">contract bonds</Link> hub and we will build the capacity you
          need to bid and deliver.
        </p>
      </Prose>
    </GuidePage>
  );
}
