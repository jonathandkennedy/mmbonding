import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { getGuide } from "@/lib/guides";
import { facts } from "@/lib/regulatory";
import { usd, clampDescription } from "@/lib/utils";

const guide = getGuide("california-llc-contractor-requirements")!;

export const metadata: Metadata = {
  title: guide.title,
  description: clampDescription(`A California LLC contractor needs the ${usd(facts.licenseBondAmount)} license bond plus the ${usd(facts.llcWorkerBondAmount)} LLC employee/worker bond, and typically general liability insurance. Reviewed by a licensed broker.`),
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
    q: "Why does an LLC need two bonds?",
    a: `An LLC carries the standard ${usd(facts.licenseBondAmount)} license bond like any contractor, plus a separate ${usd(facts.llcWorkerBondAmount)} bond under ${facts.llcWorkerBondStatute} that protects employee wages and benefits. The second bond exists because of the LLC structure.`,
  },
  {
    q: "Do I also need insurance?",
    a: "Almost always. LLC contractors typically carry general liability insurance on top of the two bonds. Bonds protect the public and your workers; insurance protects your business from its own losses.",
  },
  {
    q: "Can you set all of this up at once?",
    a: "Yes. We place the license bond, the LLC employee/worker bond, and general liability together so you are not chasing three providers. One file, one point of contact.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={`A California LLC contractor needs two bonds: the ${usd(facts.licenseBondAmount)} contractor license bond every contractor carries, plus the ${usd(facts.llcWorkerBondAmount)} LLC employee/worker bond under ${facts.llcWorkerBondStatute} that protects employee wages and benefits. Most LLC contractors also carry general liability insurance. We can place all three together.`}
      intro={`A California LLC contractor needs more than the standard license bond. You carry the ${usd(facts.licenseBondAmount)} bond plus a ${usd(facts.llcWorkerBondAmount)} employee/worker bond, and typically general liability insurance. Here is how the pieces fit.`}
      faqs={faqs}
      related={[
        { label: "LLC Employee/Worker Bond", href: "/llc-employee-worker-bond" },
        { label: "Contractor License Bond", href: "/contractor-license-bond" },
        { label: "General Liability", href: "/insurance/contractor-general-liability" },
      ]}
    >
      <Prose>
        <h2>The two bonds an LLC needs</h2>
        <p>
          Every licensed California contractor carries the{" "}
          <strong>{usd(facts.licenseBondAmount)}</strong> contractor license bond. An LLC carries
          that one too, and then a second bond on top of it: the{" "}
          <strong>{usd(facts.llcWorkerBondAmount)}</strong> LLC employee/worker bond, required under{" "}
          <code>{facts.llcWorkerBondStatute}</code>.
        </p>
        <p>
          The extra requirement exists for a reason. An LLC limits the owners&apos; personal
          liability, so the state requires a larger bond to <strong>protect employee wages and
          benefits</strong> if the company cannot pay. The second bond fills the gap the LLC
          structure creates.
        </p>

        <h2>Plus liability insurance</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>{usd(facts.licenseBondAmount)} license bond.</strong> The baseline every
              contractor carries.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>{usd(facts.llcWorkerBondAmount)} employee/worker bond.</strong> The LLC-only
              bond that protects your workers.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>General liability insurance.</strong> Typically required of LLC contractors,
              and it protects your business from its own losses, which bonds do not.
            </span>
          </li>
        </ul>

        <h2>How we handle it together</h2>
        <p>
          You do not need three separate relationships. We place the{" "}
          <Link href="/contractor-license-bond">license bond</Link>, the{" "}
          <Link href="/llc-employee-worker-bond">LLC employee/worker bond</Link>, and{" "}
          <Link href="/insurance/contractor-general-liability">general liability insurance</Link> as
          one package, so your LLC is fully covered without the runaround.
        </p>
      </Prose>
    </GuidePage>
  );
}
