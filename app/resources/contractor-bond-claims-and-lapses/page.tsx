import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { getGuide } from "@/lib/guides";
import { facts } from "@/lib/regulatory";
import { usd } from "@/lib/utils";

const guide = getGuide("contractor-bond-claims-and-lapses")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "What happens when a claim is filed on your contractor bond, what happens if it lapses, and how to keep an active bond on file so the CSLB does not suspend your license. Reviewed by a licensed broker.",
  alternates: { canonical: `/resources/${guide.slug}` },
};

const faqs = [
  {
    q: "What happens after a claim is filed?",
    a: `The surety investigates the claim. If it is valid, the surety pays it up to the ${usd(facts.licenseBondAmount)} bond amount, and then you reimburse the surety in full. A bond is a guarantee, not insurance for you.`,
  },
  {
    q: "Can my license be suspended if my bond lapses?",
    a: "Yes. The CSLB requires an active bond on file at all times. If your bond lapses, the CSLB can suspend your license until a valid bond is reinstated, which stops you from working legally.",
  },
  {
    q: "How do I keep my license safe?",
    a: "Renew on time and keep the bond active without a gap. Set a reminder before your renewal date, and let us re-shop the bond at renewal so you are never tempted to let it drop over price.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={`When a claim is filed, the surety investigates and, if it is valid, pays up to the ${usd(facts.licenseBondAmount)} bond amount, then you reimburse the surety in full. If your bond lapses, the CSLB can suspend your license until it is reinstated. Renew on time and keep coverage continuous to stay protected.`}
      intro={`A claim or a lapsed bond can put your license at risk. Here is what the surety does when a claim is filed, what the CSLB does if your bond lapses, and how to protect your license.`}
      faqs={faqs}
      related={[
        { label: "Contractor License Bond", href: "/contractor-license-bond" },
        { label: "Disciplinary Bond", href: "/disciplinary-bond" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <Prose>
        <h2>When a claim is filed</h2>
        <p>
          A claim does not pay out automatically. The <strong>surety investigates</strong> first. If
          the claim is valid, the surety pays it, up to the{" "}
          <strong>{usd(facts.licenseBondAmount)}</strong> bond amount. Then you{" "}
          <strong>reimburse the surety</strong> in full, because a bond guarantees your obligations to
          others, it is not insurance that absorbs your loss.
        </p>
        <p>
          A paid claim is also a mark on your record, which can raise your rate or move you into
          hard-to-place territory at renewal.
        </p>

        <h2>If your bond lapses</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>The CSLB can suspend your license.</strong> An active bond on file is a
              condition of holding your license.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>You cannot work legally while suspended.</strong> Jobs stall and clients walk
              until the bond is reinstated.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Reinstating takes time.</strong> A gap is far more expensive than the premium
              you skipped, so do not let the bond drop.
            </span>
          </li>
        </ul>

        <h2>Protecting your license</h2>
        <p>
          The fix is simple: <strong>renew on time</strong> and <strong>keep the bond active</strong>{" "}
          with no gap. We track your renewal and re-shop the bond so price is never a reason to let it
          lapse. If you are already past a disciplinary action, see the{" "}
          <Link href="/disciplinary-bond">disciplinary bond</Link>, and the{" "}
          <Link href="/contractor-license-bond">contractor license bond</Link> page covers keeping
          your standard bond current.
        </p>
      </Prose>
    </GuidePage>
  );
}
