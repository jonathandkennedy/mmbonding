import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose, Bullet } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("how-to-get-a-cannabis-license-in-california")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "California cannabis businesses need both a local permit and a DCC state license. The two-step path, the license types and fees, and the $5,000 bond.",
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
    q: "Do I need both a state and a local cannabis license in California?",
    a: "Yes. You need local approval from your city or county and a state license from the Department of Cannabis Control (DCC). You get the local permit first, and you cannot operate until both are in place.",
  },
  {
    q: "How much does a California cannabis license cost?",
    a: "DCC fees vary widely by license type, from $1,000 for retail, distribution, and testing to $1,500 to $75,000 for manufacturing and up to about $77,905 for large cultivation. Application fees and local permit fees are separate.",
  },
  {
    q: "What bond do I need for a cannabis license?",
    a: "California requires a $5,000 surety bond payable to the state for each licensed premises. It is a small, low-cost bond, and we place it. It is separate from your license fees.",
  },
  {
    q: "Where do I start?",
    a: "With your local jurisdiction. Confirm your city or county allows your cannabis activity, check zoning, and complete local permitting before you apply to the DCC. Local rules are the most common thing that stops an application.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="A California cannabis business needs two approvals: a local permit from your city or county, then a state license from the Department of Cannabis Control (DCC). Get the local approval first. DCC fees run from $1,000 for retail up to tens of thousands for large cultivation, and the state requires a $5,000 surety bond per licensed premises. We place the bond."
      intro="Licensing a cannabis business in California is a two-step process: local first, then state. The rules are strict and change often. Here is the path through local approval and the DCC, the license types and fees, and the bond the state requires."
      faqs={faqs}
      related={[
        { label: "Cannabis Bond", href: "/commercial-bonds/cannabis-bond" },
        { label: "Cannabis bond & local permits", href: "/resources/california-cannabis-bond-local-permits" },
        { label: "Commercial Bonds", href: "/commercial-bonds" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ]}
    >
      <StatGrid
        heading="California cannabis licensing by the numbers"
        items={pickStats(["cannabisBond", "cannabisRetailFee", "usSuretyPremium"])}
      />

      <Prose>
        <h2>Two licenses, local first</h2>
        <p>
          Every California cannabis business needs <strong>two</strong> approvals: a{" "}
          <strong>local permit</strong> from the city or county where you will operate, and a{" "}
          <strong>state license</strong> from the Department of Cannabis Control (DCC). You must
          secure the local approval <strong>first</strong>, and you cannot operate until both are in
          place. Local rules are the single most common reason an application stalls.
        </p>

        <h2>The path, step by step</h2>
        <ul>
          <li>
            <Bullet />
            <span>
              <strong>1. Check your local jurisdiction.</strong> Confirm your city or county allows
              your cannabis activity, and check zoning for your proposed location.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>2. Get local permits.</strong> Complete the local permitting process and secure
              the approvals your jurisdiction requires.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>3. Gather documents and apply to the DCC.</strong> Prepare your business,
              premises, and owner information and submit your state application.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>4. Pay fees and post the bond.</strong> Pay the DCC license fee and file the{" "}
              $5,000 state cannabis bond for the premises.
            </span>
          </li>
          <li>
            <Bullet />
            <span>
              <strong>5. DCC review and approval.</strong> The DCC reviews your application, confirms
              local compliance, and checks owner background before issuing the license.
            </span>
          </li>
        </ul>
      </Prose>

      <div className="my-8 overflow-x-auto rounded-2xl border border-ink-200">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-surface text-left">
              <th className="p-4 font-display font-bold text-navy-900">License type</th>
              <th className="p-4 font-display font-bold text-navy-900">DCC annual license fee</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            <tr>
              <td className="p-4 font-semibold text-navy-900">Retail</td>
              <td className="p-4 text-ink-700">$1,000</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Distribution</td>
              <td className="p-4 text-ink-700">$1,000</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Testing laboratory</td>
              <td className="p-4 text-ink-700">$1,000</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Manufacturing</td>
              <td className="p-4 text-ink-700">$1,500 to $75,000</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Cultivation</td>
              <td className="p-4 text-ink-700">$1,205 to about $77,905, by size</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Prose>
        <h2>The $5,000 state bond</h2>
        <p>
          The state also requires a <strong>$5,000</strong>{" "}
          <Link href="/commercial-bonds/cannabis-bond">cannabis surety bond</Link> payable to
          California for each licensed premises. It is small and low-cost, and it is the piece we
          handle. For how the state and local bond requirements fit together, see our guide to the{" "}
          <Link href="/resources/california-cannabis-bond-local-permits">
            cannabis bond and local permits
          </Link>
          .
        </p>

        <h2>Confirm the current rules</h2>
        <p>
          Cannabis licensing changes frequently. Provisional licenses have been phased out, fees are
          updated periodically, and local rules differ everywhere. Confirm the current requirements
          with the DCC and your local jurisdiction before you rely on them. When you reach the bond
          step, <Link href="/get-a-quote">start a quote</Link> and we will issue your $5,000 bond fast.
        </p>
      </Prose>
    </GuidePage>
  );
}
