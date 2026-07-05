import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { getGuide } from "@/lib/guides";
import { facts } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

const guide = getGuide("reactivate-cslb-license")!;

export const metadata: Metadata = {
  title: guide.title,
  description: `How to reactivate an inactive California contractor license, including the ${usd(facts.licenseBondAmount)} license bond you need on file. Fast bonding from a licensed broker, CA DOI #6009105.`,
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
    q: "Do I need a new bond to reactivate my license?",
    a: `You need an active ${usd(facts.licenseBondAmount)} contractor license bond on file with the CSLB. If yours lapsed while the license was inactive, you will put a current bond in place as part of reactivating.`,
  },
  {
    q: "How fast can I reactivate?",
    a: `The bond piece is quick: once quoted and paid, your surety e-files with the CSLB, typically posting within ${facts.filingWindow}. The CSLB then processes your reactivation request.`,
  },
  {
    q: "My license was disciplined, not just inactive. What then?",
    a: "That can require a disciplinary bond instead of, or in addition to, the standard license bond. Those files are hard-to-place by nature, which is our specialty.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={`To reactivate an inactive California license, file a reactivation request with the CSLB and put an active ${usd(facts.licenseBondAmount)} contractor license bond on file. The bond is the fast part: once quoted and paid, your surety e-files within ${facts.filingWindow}. A disciplined license may need a disciplinary bond instead.`}
      intro="Letting a license go inactive is common. Bringing it back is straightforward, and the bond is the fast part. Here is what reactivation takes."
      faqs={faqs}
      related={[
        { label: "Contractor License Bond", href: "/contractor-license-bond" },
        { label: "Disciplinary Bond", href: "/disciplinary-bond" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <Prose>
        <h2>What reactivation involves</h2>
        <p>
          To reactivate an inactive California license, you file a reactivation request with the CSLB
          and make sure your required records are current, including an active{" "}
          <strong>{usd(facts.licenseBondAmount)}</strong>{" "}
          <Link href="/contractor-license-bond">contractor license bond</Link>. If your bond lapsed
          while the license sat inactive, you will put a fresh one in place.
        </p>

        <h2>The bond step</h2>
        <ul>
          <li>
            <Bullet />
            <span>Get a quote for a current license bond (no card or SSN to quote).</span>
          </li>
          <li>
            <Bullet />
            <span>Accept and pay the premium.</span>
          </li>
          <li>
            <Bullet />
            <span>Your surety e-files the bond with the CSLB, typically within {facts.filingWindow}.</span>
          </li>
        </ul>

        <h2>If there was a disciplinary action</h2>
        <p>
          Reactivating after a suspension or revocation is different. The CSLB may require a{" "}
          <Link href="/disciplinary-bond">disciplinary bond</Link>, with an amount set by the
          Registrar. Those applicants have history by definition, which is exactly the kind of file we
          place when others will not.
        </p>

        <h2>Get the bond handled</h2>
        <p>
          Start a <Link href="/get-a-quote">quote</Link> and we will get the bond piece done fast so
          you can complete your reactivation.
        </p>
      </Prose>
    </GuidePage>
  );
}
