import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { getGuide } from "@/lib/guides";
import { facts } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

const guide = getGuide("contractor-license-bond-renewal")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "Your California contractor license bond renews every year. What changes at renewal, how to avoid a lapse that can suspend your license, and how we re-shop for a better rate. Licensed broker, CA DOI #6009105.",
  alternates: { canonical: `/resources/${guide.slug}` },
};

const faqs = [
  {
    q: "How often does the contractor license bond renew?",
    a: "Every year. The bond is written for an annual term, and the CSLB requires continuous coverage to keep your license active, so it renews each year for as long as you are licensed.",
  },
  {
    q: "Does the renewal cost change?",
    a: `The bond amount stays ${usd(facts.licenseBondAmount)}, but your premium can change at renewal, mostly with your credit. Better credit can lower it; a rough year can raise it. As a broker we can re-shop the bond to keep your rate competitive.`,
  },
  {
    q: "What happens if my bond lapses at renewal?",
    a: "A lapse in your bond can lead the CSLB to suspend your license, which stops you from legally contracting. Renewing on time keeps your coverage continuous and your license in good standing.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      intro={`The ${usd(facts.licenseBondAmount)} contractor license bond is not a one-time purchase. It renews every year, and a missed renewal can put your license at risk. Here is how to stay ahead of it.`}
      faqs={faqs}
      related={[
        { label: "Contractor License Bond", href: "/contractor-license-bond" },
        { label: "What it costs", href: "/resources/contractor-license-bond-cost" },
        { label: "Claims & lapses", href: "/resources/contractor-bond-claims-and-lapses" },
      ]}
    >
      <Prose>
        <h2>Why it renews every year</h2>
        <p>
          The California contractor license bond is written for a one-year term. Because the CSLB
          requires <strong>continuous</strong> bond coverage to keep your license active, the bond
          renews annually for as long as you hold the license. Think of it like your license itself:
          ongoing, not one-and-done.
        </p>

        <h2>What changes at renewal</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>The amount stays the same.</strong> It remains a{" "}
              {usd(facts.licenseBondAmount)} bond under {facts.licenseBondStatute}.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Your premium can move.</strong> Renewal pricing tracks your credit, so it can go
              down as your credit improves or up after a tough year.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>We can re-shop it.</strong> As a broker we are not locked to one market, so at
              renewal we can quote other markets to keep your rate sharp.
            </span>
          </li>
        </ul>

        <h2>Do not let it lapse</h2>
        <p>
          A lapse in coverage is the real risk. If your bond lapses, the CSLB can{" "}
          <Link href="/resources/contractor-bond-claims-and-lapses">suspend your license</Link>, which
          stops you from legally contracting until it is cured. Renew on time, keep coverage
          continuous, and your license stays in good standing.
        </p>

        <h2>Renew with us</h2>
        <p>
          Whether your bond is with us or somewhere else, we can take over the renewal and re-shop your
          rate. Start with a quick{" "}
          <Link href="/get-a-quote">quote</Link> or read the full{" "}
          <Link href="/contractor-license-bond">contractor license bond</Link> page.
        </p>
      </Prose>
    </GuidePage>
  );
}
