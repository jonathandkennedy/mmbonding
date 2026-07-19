import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("california-tax-preparer-bond-ctec")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "California registered tax preparers must carry a $5,000 CTEC surety bond and renew it each year. What the bond is, who needs it, and what it costs.",
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
    q: "How much is the CTEC tax preparer bond?",
    a: "The bond amount is $5,000. You do not pay $5,000; you pay a small annual premium, often a low flat rate. It is one of the most affordable surety bonds there is.",
  },
  {
    q: "Who needs the tax preparer bond?",
    a: "California registered tax preparers (CRTPs). To register with CTEC and to prepare tax returns for a fee in California, you must maintain an active $5,000 surety bond that protects your clients.",
  },
  {
    q: "Is the bond required every year?",
    a: "Yes. You must keep an active $5,000 bond on file to register and to renew your CTEC registration each year. Letting it lapse can put your registration at risk.",
  },
  {
    q: "Can I get it with bad credit?",
    a: "Almost always. The tax preparer bond is small and low-risk, so it is rarely credit-sensitive. Even challenged credit is usually no obstacle, and we can issue it fast.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="California registered tax preparers (CRTPs) must carry a $5,000 CTEC surety bond and keep it active to register and renew each year. It protects your clients, not you. You pay a small annual premium, often a low flat rate, not the $5,000. It is one of the cheapest bonds there is, and rarely credit-sensitive."
      intro="If you prepare tax returns for a fee in California, CTEC requires you to carry a surety bond. Here is what the tax preparer bond is, why you renew it every year, and how little it costs."
      faqs={faqs}
      related={[
        { label: "Tax Preparer Bond", href: "/commercial-bonds/tax-preparer-bond" },
        { label: "Commercial & Specialty Bonds", href: "/commercial-bonds" },
        { label: "Fast & same-day bonds", href: "/fast-surety-bonds" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <StatGrid
        heading="CTEC tax preparer bond by the numbers"
        items={pickStats([
          "ctecBond",
          "minEarnedPremium",
          "premiumDeductible",
          "usSuretyPremium",
        ])}
      />

      <Prose>
        <h2>What the CTEC bond is</h2>
        <p>
          California requires registered tax preparers (CRTPs) to maintain a{" "}
          <strong>$5,000</strong>{" "}
          <Link href="/commercial-bonds/tax-preparer-bond">surety bond</Link> that protects their
          clients. You file it with <strong>CTEC</strong> (the California Tax Education Council) to
          register, and you keep it active to prepare returns for a fee. Like other{" "}
          <Link href="/resources/types-of-surety-bonds">license bonds</Link>, it protects the public,
          not you; if a valid claim is paid, you reimburse the surety.
        </p>

        <h2>You renew it every year</h2>
        <p>
          The tax preparer bond is <strong>required each year</strong>. You must have an active $5,000
          bond on file to register and to renew your CTEC registration annually, so most preparers
          carry a multi-year term or renew on a simple annual cycle. Letting it lapse can jeopardize
          your registration right at filing season.
        </p>

        <h2>What it costs</h2>
        <p>
          Very little. The $5,000 amount is the coverage, not your cost. You pay a small annual{" "}
          <strong>premium</strong>, often a low flat rate, and it is rarely credit-sensitive, so even
          challenged credit is usually no obstacle. We can issue it{" "}
          <Link href="/fast-surety-bonds">fast</Link>, so a lapsed or last-minute bond is easy to fix.{" "}
          <Link href="/get-a-quote">Get a quote</Link> and we will have you covered.
        </p>
      </Prose>
    </GuidePage>
  );
}
