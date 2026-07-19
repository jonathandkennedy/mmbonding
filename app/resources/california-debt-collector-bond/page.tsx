import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("california-debt-collector-bond")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "California's Debt Collection Licensing Act requires a $25,000 surety bond filed with the DFPI. Who needs it, what it protects, and how to get bonded.",
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
    q: "How much is the California debt collector bond?",
    a: "The bond amount is $25,000, filed with the DFPI. You do not pay $25,000; you pay an annual premium that is a percentage of it, set mostly by your credit.",
  },
  {
    q: "Who needs the debt collector bond?",
    a: "Debt collectors and collection agencies licensing with the California Department of Financial Protection and Innovation (DFPI) under the Debt Collection Licensing Act. It is required to obtain and renew the license.",
  },
  {
    q: "Is this the old collection agency bond?",
    a: "California now licenses debt collectors through the DFPI under the Debt Collection Licensing Act, with a $25,000 bond that protects consumers. It replaced the older patchwork, and we place the current bond for new and renewing licensees.",
  },
  {
    q: "Can I get bonded with challenged credit?",
    a: "Often, yes. Credit affects the rate, not your eligibility outright. We work the markets that write credit-challenged files rather than declining at the door. Underwriting still applies.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="California's Debt Collection Licensing Act requires debt collectors to be licensed by the DFPI and to file a $25,000 surety bond that protects consumers. You pay an annual premium, a percentage of the $25,000, set mostly by credit, not the full amount. It is required to get and renew the license."
      intro="If you collect debts in California, the state licenses you through the DFPI and requires a surety bond. Here is what the debt collector bond is, who needs it, and how to get bonded, credit challenges included."
      faqs={faqs}
      related={[
        { label: "Debt Collector Bond", href: "/commercial-bonds/debt-collector-bond" },
        { label: "Commercial & Specialty Bonds", href: "/commercial-bonds" },
        { label: "Surety bonds with bad credit", href: "/resources/surety-bonds-with-bad-credit" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <StatGrid
        heading="Debt collector bond by the numbers"
        items={pickStats([
          "debtCollectorBond",
          "usSuretyPremium",
          "minEarnedPremium",
          "premiumDeductible",
        ])}
      />

      <Prose>
        <h2>What the bond is</h2>
        <p>
          Under California&apos;s <strong>Debt Collection Licensing Act</strong>, debt collectors and
          collection agencies must be licensed by the <strong>DFPI</strong> and file a{" "}
          <strong>$25,000</strong>{" "}
          <Link href="/commercial-bonds/debt-collector-bond">surety bond</Link> that protects
          consumers. Like other <Link href="/resources/types-of-surety-bonds">license bonds</Link>, it
          protects the public, not you; if a valid claim is paid, you reimburse the surety.
        </p>

        <h2>Who needs it</h2>
        <p>
          Any business that collects consumer debt in California: collection agencies, debt buyers,
          and collectors licensing or renewing with the DFPI. The bond must be on file to obtain the
          license and to keep it active.
        </p>

        <h2>What it costs, and getting bonded</h2>
        <p>
          You pay an annual <strong>premium</strong>, a percentage of the $25,000, set mostly by your{" "}
          <strong>credit</strong>. Strong credit pays the least; challenged credit costs more but is
          still placeable, and{" "}
          <Link href="/resources/surety-bonds-with-bad-credit">bad-credit files</Link> are our
          specialty. Tell us your license status and we will{" "}
          <Link href="/get-a-quote">quote the exact bond</Link>. Underwriting still applies, and no
          honest broker promises guaranteed approval.
        </p>
      </Prose>
    </GuidePage>
  );
}
