import type { Metadata } from "next";
import Link from "next/link";
import { GuidePage } from "@/components/guide-page";
import { Prose } from "@/components/prose";
import { StatGrid } from "@/components/stat-grid";
import { getGuide } from "@/lib/guides";
import { pickStats } from "@/lib/stats";

const guide = getGuide("types-of-surety-bonds")!;

export const metadata: Metadata = {
  title: guide.title,
  description:
    "The four main types of surety bonds, contract, license, court, and fidelity: what each guarantees, who requires it, and which one your situation needs.",
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
    q: "What are the main types of surety bonds?",
    a: "Most surety bonds fall into four families: contract (construction) bonds, license and permit bonds, court and probate bonds, and fidelity bonds. Each guarantees a different obligation to a different protected party.",
  },
  {
    q: "What is the most common surety bond?",
    a: "For businesses, the license and permit bond is the most common, because so many trades and professions must post one to get licensed. In California, the $25,000 contractor license bond is the classic example.",
  },
  {
    q: "Are all surety bonds three-party agreements?",
    a: "Yes. Every surety bond involves the principal (you), the obligee (the party you must perform for), and the surety (the company that backs you). What changes across bond types is the obligation being guaranteed.",
  },
  {
    q: "How do I know which surety bond I need?",
    a: "The party requiring the bond, an agency, a court, or a project owner, names it, usually on a form or in a statute. Tell us that requirement and we place the exact bond. When in doubt, start with a quote and we will identify it.",
  },
];

export default function Page() {
  return (
    <GuidePage
      guide={guide}
      tldr="Surety bonds come in four families. Contract bonds guarantee construction work (bid, performance, payment). License and permit bonds let businesses get licensed. Court and probate bonds back duties in litigation and estates. Fidelity bonds cover employee dishonesty. All three-party guarantees; the obligee decides which you need."
      intro="Nearly every surety bond fits into one of four families, sorted by what it guarantees and who it protects. Here is the map: the four types, what each one does, and where your bond fits, with links to the specific bonds we place."
      faqs={faqs}
      related={[
        { label: "Contract Bonds", href: "/contract-bonds" },
        { label: "Contractor License Bond", href: "/contractor-license-bond" },
        { label: "Commercial & Court Bonds", href: "/commercial-bonds" },
        { label: "Surety Bond Glossary", href: "/surety-bond-glossary" },
      ]}
    >
      <StatGrid
        heading="Surety bonds by the numbers"
        items={pickStats([
          "caContractors",
          "usSuretyPremium",
          "millerActThreshold",
          "caLicenseBond",
        ])}
      />

      <Prose>
        <h2>One structure, four jobs</h2>
        <p>
          Every surety bond is the same three-party promise: you (the{" "}
          <strong>principal</strong>) will meet an obligation to a{" "}
          <strong>obligee</strong>, and a <strong>surety</strong> guarantees it. What separates the
          types is the obligation itself. Sort by that, and the whole surety world falls into four
          families.
        </p>
      </Prose>

      <div className="my-8 overflow-x-auto rounded-2xl border border-ink-200">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-surface text-left">
              <th className="p-4 font-display font-bold text-navy-900">Family</th>
              <th className="p-4 font-display font-bold text-navy-900">Guarantees</th>
              <th className="p-4 font-display font-bold text-navy-900">Who requires it</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            <tr>
              <td className="p-4 font-semibold text-navy-900">Contract</td>
              <td className="p-4 text-ink-700">A construction project is bid, built, and paid</td>
              <td className="p-4 text-ink-700">Project owners and public agencies</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">License & permit</td>
              <td className="p-4 text-ink-700">A business follows the laws of its trade</td>
              <td className="p-4 text-ink-700">State and local licensing agencies</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Court & probate</td>
              <td className="p-4 text-ink-700">A duty in litigation or an estate is met</td>
              <td className="p-4 text-ink-700">Courts</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-navy-900">Fidelity</td>
              <td className="p-4 text-ink-700">Against employee theft or dishonesty</td>
              <td className="p-4 text-ink-700">Employers (and some clients)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Prose>
        <h2>1. Contract (construction) bonds</h2>
        <p>
          Contract bonds guarantee a construction project. They travel in a set: a{" "}
          <Link href="/contract-bonds/bid-bond">bid bond</Link> backs your proposal, a{" "}
          <Link href="/contract-bonds/performance-bond">performance bond</Link> guarantees you finish
          the work, and a <Link href="/contract-bonds/payment-bond">payment bond</Link> guarantees
          your subcontractors and suppliers get paid. Public works almost always require them. See
          the <Link href="/contract-bonds">contract bonds</Link> hub for how they fit together. On
          union work, a contractor may also post a{" "}
          <Link href="/commercial-bonds/wage-welfare-bond">wage and welfare bond</Link> guaranteeing
          the fringe-benefit contributions owed to the trust funds.
        </p>

        <h2>2. License and permit bonds</h2>
        <p>
          These let a business get and keep a license by guaranteeing it will follow the rules of its
          trade. The <Link href="/contractor-license-bond">California contractor license bond</Link>{" "}
          is the headline example, but the family is huge: notary, auto dealer, freight broker,
          cannabis, and dozens of other{" "}
          <Link href="/commercial-bonds">commercial and permit bonds</Link>. They are the most common
          bonds because so many trades require one to operate.
        </p>
        <p>
          The family reaches well beyond the trades. Whole professions post their own license bond,
          from a <Link href="/commercial-bonds/tax-preparer-bond">tax preparer bond</Link> and{" "}
          <Link href="/commercial-bonds/immigration-consultant-bond">immigration consultant bond</Link>{" "}
          to a <Link href="/commercial-bonds/talent-agency-bond">talent agency bond</Link>,{" "}
          <Link href="/commercial-bonds/debt-collector-bond">debt collector bond</Link>, and{" "}
          <Link href="/commercial-bonds/farm-labor-contractor-bond">farm labor contractor bond</Link>.
          Consumer-facing and financial businesses have theirs too: the{" "}
          <Link href="/commercial-bonds/money-transmitter-bond">money transmitter bond</Link>,{" "}
          <Link href="/commercial-bonds/seller-of-travel-bond">seller of travel bond</Link>, and{" "}
          <Link href="/commercial-bonds/lease-guarantee-bond">lease guarantee bond</Link>, plus the{" "}
          <Link href="/commercial-bonds/health-studio-bond">health studio bond</Link>,{" "}
          <Link href="/commercial-bonds/ticket-seller-bond">ticket seller bond</Link>, and{" "}
          <Link href="/commercial-bonds/telephonic-seller-bond">telephonic seller bond</Link> that
          protect the customers who pay them in advance.
        </p>

        <h2>3. Court and probate bonds</h2>
        <p>
          Court bonds back a duty inside the legal system. Judicial bonds like an{" "}
          <Link href="/commercial-bonds/appeal-bond">appeal bond</Link> come up in litigation, while
          probate and fiduciary bonds like a{" "}
          <Link href="/commercial-bonds/probate-bond">probate bond</Link>,{" "}
          <Link href="/commercial-bonds/guardianship-bond">guardianship bond</Link>, or{" "}
          <Link href="/commercial-bonds/conservatorship-bond">conservatorship bond</Link> guarantee
          that an executor, administrator, guardian, or conservator handles an estate or a
          person&apos;s affairs honestly.
        </p>

        <h2>4. Fidelity bonds</h2>
        <p>
          Fidelity bonds protect a business from its own people: theft, embezzlement, or fraud by an
          employee. A <Link href="/commercial-bonds/fidelity-bond">fidelity (employee dishonesty)
          bond</Link> covers general staff, and an{" "}
          <Link href="/commercial-bonds/erisa-bond">ERISA bond</Link> is the federally required
          version protecting a retirement plan. Its client-facing mirror, the{" "}
          <Link href="/commercial-bonds/business-service-bond">business service (janitorial) bond</Link>
          , protects your customers instead, covering them if one of your employees steals on their
          property. Strictly, fidelity bonds are insurance-like coverage, but they are placed through
          the same surety markets.
        </p>

        <h2>Which one do you need?</h2>
        <p>
          You rarely choose. The <strong>obligee</strong>, the agency, court, or owner requiring the
          bond, names it in a statute or on a bond form. Your job is to read that requirement; ours is
          to place the exact bond fast and at the best rate. Not sure which family you are in? The{" "}
          <Link href="/surety-bond-glossary">glossary</Link> defines the terms, and a{" "}
          <Link href="/get-a-quote">quote</Link> gets you the specific bond identified and priced.
        </p>
      </Prose>
    </GuidePage>
  );
}
