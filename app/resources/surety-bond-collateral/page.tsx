import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { getGuide } from "@/lib/guides";

const guide = getGuide("surety-bond-collateral")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "When a surety requires collateral, what forms it takes (cash or a letter of credit), and how to reduce, avoid, or get it back.",
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
    q: "When does a surety require collateral?",
    a: "On higher-risk files. Think large court or appeal bonds, or contract bonds where credit is tough. Most routine license and small commercial bonds need no collateral at all.",
  },
  {
    q: "What can I use as collateral?",
    a: "Usually cash or an irrevocable letter of credit (ILOC) from your bank. The surety holds it against a possible loss, not as a fee, and it stays your money.",
  },
  {
    q: "Do I get my collateral back?",
    a: "Yes, once the risk clears and no valid claim is outstanding. For a bonded obligation that ends cleanly, the surety releases the collateral back to you.",
  },
  {
    q: "How can I avoid posting collateral?",
    a: "Improve your credit, agree to funds control on contract jobs, and build a track record of completed bonded work. Each can reduce or remove a collateral requirement over time.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={
        "When does a surety require collateral? On higher-risk files: large court or appeal bonds, or contract bonds with tough credit. It is usually cash or an irrevocable letter of credit, held against potential loss and released once the risk clears. Improving credit, funds control, and a track record can reduce or remove it."
      }
      intro={
        "Most bonds need no collateral. But on higher-risk files a surety may ask you to secure the bond. Here is when collateral comes up, what forms it takes, and how you get it back."
      }
      faqs={faqs}
      related={[
        { label: "Funds control", href: "/resources/funds-control-for-contractors" },
        { label: "Hard-to-Place Bonds", href: "/hard-to-place-surety-bonds" },
        { label: "Appeal Bond", href: "/commercial-bonds/appeal-bond" },
      ]}
    >
      <Prose>
        <h2>When a surety asks for collateral</h2>
        <p>
          Collateral is not the norm. The large majority of license and small commercial bonds are
          written with no collateral at all. It comes up only when a file carries more risk than the
          premium alone can offset. The common triggers are:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Large court or appeal bonds.</strong> A big{" "}
              <Link href="/commercial-bonds/appeal-bond">appeal bond</Link> can equal the full judgment,
              so a surety often secures it.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Tough-credit contract bonds.</strong> When credit or financials fall short of the
              bond size, collateral can bridge the gap.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Limited track record.</strong> A new or unproven operator on a sizable bond may be
              asked to secure part of it.
            </span>
          </li>
        </ul>

        <h2>What counts as collateral</h2>
        <p>
          Collateral is something of value the surety can hold and, if it ever pays a valid claim, draw
          on to cover the loss. It stays your asset unless a legitimate claim is paid. The usual forms
          are:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Cash.</strong> The simplest option, held by the surety in a dedicated account.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Irrevocable letter of credit (ILOC).</strong> A commitment from your bank that the
              surety can draw on. It keeps your cash working elsewhere while still securing the bond.
            </span>
          </li>
        </ul>

        <h2>How it is held and released</h2>
        <p>
          The surety holds your collateral against a <strong>potential loss</strong>, not as a payment or
          a fee. Nothing is spent unless the surety actually pays a valid claim. As long as you meet your
          obligation, the money simply sits secured.
        </p>
        <p>
          When the risk clears, the surety releases it. That means the bonded obligation has ended and no
          valid claim is outstanding: the court matter concludes, or the bonded job is finished and the
          claim window has closed. At that point the cash comes back, or the letter of credit is released
          by your bank.
        </p>

        <h2>How to reduce or avoid it</h2>
        <p>
          Collateral is often negotiable, and it is rarely permanent. The levers that reduce or remove it
          are the same ones that make you a stronger risk overall:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Improve your credit.</strong> Better credit lowers the surety&apos;s perceived risk
              and can replace the need to secure the bond.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Use funds control.</strong> On contract jobs,{" "}
              <Link href="/resources/funds-control-for-contractors">funds control</Link> lets a neutral
              party disburse project money, which can satisfy a surety in place of collateral.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Build a track record.</strong> Completed bonded jobs prove reliability and make
              future bonds easier to write without security.
            </span>
          </li>
        </ul>
        <p>
          If a surety is asking for collateral you would rather not post, that is a good reason to work a
          file through a broker. See how we handle tricky risks on our{" "}
          <Link href="/hard-to-place-surety-bonds">hard-to-place surety bonds</Link> page. We do not
          promise a collateral-free bond, since underwriting still applies, but we know how to structure
          the file to minimize it.
        </p>
      </Prose>
    </GuidePage>
  );
}
