import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { getGuide } from "@/lib/guides";

const guide = getGuide("surety-bond-indemnity-agreement")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "What a surety bond indemnity agreement is, who signs the personal guarantee, and why it only costs you if a valid claim is actually paid.",
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
    q: "What is a surety bond indemnity agreement?",
    a: "It is the contract you sign with the surety, often called a General Indemnity Agreement (GIA), promising to reimburse the surety for any valid claim it pays plus its costs. It is standard on nearly every bond.",
  },
  {
    q: "Do I have to sign a personal guarantee?",
    a: "For most small-business bonds, yes. Owners sign as indemnitors, which is a personal guarantee. On larger contract programs, a surety may also ask spouses or affiliated companies to sign.",
  },
  {
    q: "Is signing an indemnity agreement risky?",
    a: "Only if a legitimate claim is actually paid. If you do the work and meet your obligations, the agreement never costs you a dollar. It is a promise to make the surety whole, not a fee.",
  },
  {
    q: "Can I get a bond without signing one?",
    a: "Rarely. Indemnity is how surety works: the surety backs you publicly, and you agree to stand behind valid claims. A handful of small bonds waive it, but expect to sign one.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={
        "What is a surety bond indemnity agreement? It is the contract you sign promising to reimburse the surety for any valid claim it pays, plus costs. Business owners sign a personal guarantee as indemnitors. It is standard on nearly every bond, and it only costs you money if a legitimate claim is actually paid."
      }
      intro={
        "Before a surety issues your bond, it asks you to sign an indemnity agreement. It looks intimidating, but it is normal and, if you do the work, harmless. Here is exactly what you are agreeing to."
      }
      faqs={faqs}
      related={[
        { label: "Claims & lapses", href: "/resources/contractor-bond-claims-and-lapses" },
        { label: "Glossary", href: "/surety-bond-glossary" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <Prose>
        <h2>What the indemnity agreement is</h2>
        <p>
          The document is usually called a <strong>General Indemnity Agreement</strong>, or GIA. It is
          the contract between you and the surety that makes the whole arrangement work. A surety bond
          is a three-party promise: the surety guarantees your obligation to whoever requires the bond,
          and in return you promise to stand behind that guarantee.
        </p>
        <p>
          In plain terms, the GIA says that if the surety has to pay a valid claim on your behalf, you
          will pay the surety back. It is a reimbursement promise, not a cost of the bond.
        </p>

        <h2>Who has to sign</h2>
        <p>
          On most small-business bonds, the business owners sign as <strong>indemnitors</strong>. Signing
          personally is called a <strong>personal guarantee</strong>, and it means the obligation
          reaches your personal assets, not just the company&apos;s, if a claim is paid.
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Owners.</strong> Nearly always required to sign personally.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Spouses.</strong> Sometimes requested on larger contract programs, since marital
              assets can be shared.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Affiliated companies.</strong> Related entities may be added as indemnitors on
              bigger files.
            </span>
          </li>
        </ul>

        <h2>What you are agreeing to</h2>
        <p>
          By signing, you agree to reimburse the surety for a <strong>valid claim</strong> it pays,
          plus the costs of investigating and resolving it, such as legal and adjusting fees. The key
          word is valid. The surety does not pay just because someone complains. It investigates, and it
          pays only when a claim is legitimate under the terms of the bond.
        </p>
        <p>
          If a claim is ever paid, you owe the surety, not the third party directly. To learn how claims
          get filed and handled, see{" "}
          <Link href="/resources/contractor-bond-claims-and-lapses">contractor bond claims and lapses</Link>.
        </p>

        <h2>Why sureties require it</h2>
        <p>
          A surety is lending you its credit and reputation, not a pot of money it expects to spend. The
          indemnity agreement keeps the arrangement fair: the surety fronts a valid payment quickly so
          the public is protected, and you make the surety whole afterward. Without it, sureties could
          not price bonds affordably.
        </p>

        <h2>Is it risky?</h2>
        <p>
          For an honest operator, the practical risk is low. The agreement only costs you money if a
          legitimate claim is actually paid. Do the work you promised, meet your obligations, and the
          GIA sits in a drawer and never touches your finances. It is a safety net for the public, not a
          trap for you.
        </p>
        <p>
          Want the short definitions of the terms above? Browse the{" "}
          <Link href="/surety-bond-glossary">surety bond glossary</Link>, or start a{" "}
          <Link href="/get-a-quote">quote</Link> when you are ready.
        </p>
      </Prose>
    </GuidePage>
  );
}
