import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { getGuide } from "@/lib/guides";

const guide = getGuide("surety-bond-application-checklist")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "What you need to apply for a surety bond, from business details and owner info for a license bond to financials for a contract bond, in one checklist.",
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
    q: "What do I need to apply for a license bond?",
    a: "Your legal business name and address, entity type, license number and classification (or the specific requirement for a non-contractor bond), owner information for a soft credit check, and the bond amount and obligee. That is usually enough to quote.",
  },
  {
    q: "Do I need financial statements for a license bond?",
    a: "No. License and small commercial bonds rarely need financials. Those come into play for contract and performance bonds, which are underwritten on your finances and track record.",
  },
  {
    q: "Will applying hurt my credit?",
    a: "For most license and small commercial bonds, no. The owner check is a soft pull that does not affect your score. Larger bonds can look deeper, but the first step is almost always a soft inquiry.",
  },
  {
    q: "How fast can I get bonded once I apply?",
    a: "With your details ready, a license or small commercial bond can often be quoted and issued the same day. Contract bonds take longer because there is more to review.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr={`What do you need to apply for a surety bond? For a license or small commercial bond: your legal business name, license or requirement details, owner info for a soft credit check, and the bond amount and obligee. Contract bonds add financial statements, a work-in-progress schedule, and your experience. Have it ready and we quote fast.`}
      intro={`The fastest way to get bonded is to have your details ready before you apply. Here is exactly what an underwriter needs for a license or small commercial bond, and what a contract bond adds on top.`}
      faqs={faqs}
      related={[
        { label: "How credit checks work", href: "/resources/how-surety-bond-credit-checks-work" },
        { label: "Get a Quote", href: "/get-a-quote" },
        { label: "Contractor License Bond", href: "/contractor-license-bond" },
      ]}
    >
      <Prose>
        <h2>For a license or small commercial bond</h2>
        <p>
          Most license and small commercial bonds are quick to place. Underwriting is light, and a
          soft credit check usually carries the file. Have these ready:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Legal business name and address.</strong> Exactly as registered, along with
              your entity type (sole proprietor, LLC, or corporation).
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>License number and classification.</strong> Or, for a non-contractor bond, the
              specific requirement or code section the obligee is asking you to bond.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Owner name and information.</strong> The owner or owners, with the details
              needed for a soft credit check.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Bond amount and obligee.</strong> The dollar amount required and the agency or
              entity requiring the bond.
            </span>
          </li>
        </ul>

        <h2>For a contract or performance bond, add</h2>
        <p>
          Contract bonds (bid, performance, and payment) are underwritten on your finances and track
          record, so they ask for more. On top of the items above, gather:
        </p>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>Business financial statements.</strong> The stronger the statement, the more
              capacity you unlock. Year-end and interim statements both help.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Work-in-progress schedule.</strong> Your open jobs, billings to date, and costs
              to complete, so the surety can see your current load.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>Resume of experience.</strong> A short history of similar jobs completed, which
              tells the underwriter you can deliver this one.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>The bid or contract.</strong> The specific job you are bonding, with its scope,
              dollar amount, and terms.
            </span>
          </li>
        </ul>

        <h2>How the credit check works</h2>
        <p>
          For most license and small commercial bonds, the owner check is a soft pull. It does not
          affect your credit score and it is not a hard inquiry. Larger or contract bonds can look
          deeper, but the first step is almost always the light-touch soft pull. If you want the full
          picture, read{" "}
          <Link href="/resources/how-surety-bond-credit-checks-work">how surety bond credit checks work</Link>.
        </p>

        <h2>Have it ready, get bonded faster</h2>
        <p>
          Gather the list that fits your bond and you can often be quoted the same day. Missing a
          piece is the most common thing that slows a file down, so a few minutes of prep up front
          saves the back-and-forth later.
        </p>
        <p>
          Ready when you are: start a <Link href="/get-a-quote">quote</Link>, or if you are bonding
          for your license, head straight to the{" "}
          <Link href="/contractor-license-bond">contractor license bond</Link> page.
        </p>
      </Prose>
    </GuidePage>
  );
}
