import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, shares, and protects your information, plus your California privacy rights. Licensed California surety broker, CA DOI #${site.doiLicense}.`,
  alternates: { canonical: "/privacy-policy" },
};

const EFFECTIVE = "June 29, 2026";

const collectGiven = [
  "Identity and contact details: name, business name, email, phone number, and mailing address.",
  "Bond request details: the type and amount of bond you need, your trade or license classification, CSLB or other license number, and information about your business, project, or the obligation being bonded.",
  "Underwriting information for certain bonds: business financials, credit history, and, where a surety requires it, an owner's date of birth or Social Security number. Sensitive items like these are gathered through secure underwriting channels, not collected by the forms on this website.",
  "Anything else you choose to include when you message us.",
];

const collectAuto = [
  "Device and usage data such as IP address, browser and device type, the pages you view, and the page that referred you.",
  "Marketing attribution parameters such as UTM tags and a Google click identifier (gclid), so we can tell which campaign a request came from.",
  "Call data where a tracking phone number is shown, such as the number dialed and the time of the call.",
];

const useList = [
  "Respond to your request and prepare bond quotes.",
  "Submit your application to surety companies and, for insurance, to licensed partner agencies, so they can quote and place coverage.",
  "Communicate with you about your request, quote, bond, or account.",
  "Operate, secure, troubleshoot, and improve the website.",
  "Measure marketing performance and let you know about services that may be relevant to you.",
  "Meet our legal, licensing, and regulatory obligations as a California broker.",
];

const shareList: { lead: string; text: string }[] = [
  {
    lead: "Surety companies and insurers",
    text: "to obtain quotes and place your bond, or to refer your insurance, we share your application with the carriers and licensed partner agencies appropriate to your request. This is the core function of a broker.",
  },
  {
    lead: "Service providers",
    text: "vendors who run the site and our operations on our behalf, such as our form and email delivery provider, hosting, analytics, and call tracking. They may use the information only to provide those services to us.",
  },
  {
    lead: "Legal and safety",
    text: "when required by law, regulation, subpoena, or court order, to establish or defend legal claims, or to protect the rights, property, or safety of any person.",
  },
  {
    lead: "Business transfers",
    text: "in connection with a merger, financing, acquisition, or sale of all or part of our business, your information may be among the assets transferred.",
  },
];

const rightsList = [
  "Know and access the personal information we have collected about you.",
  "Correct inaccurate personal information.",
  "Delete personal information, subject to exceptions such as records we must keep as a licensed broker.",
  "Opt out of the sale or sharing of personal information. We do not sell your personal information, and we do not share it for cross-context behavioral advertising.",
  "Limit the use of sensitive personal information to what is necessary to provide the services you requested.",
  "Be free from discrimination for exercising any of these rights.",
];

const sections: LegalSection[] = [
  {
    id: "overview",
    heading: "Overview",
    body: (
      <>
        <p>{`${site.name} ("MM Bonding," "we," "us," or "our") is a licensed California surety bond broker, CA Department of Insurance License #${site.doiLicense}. This Privacy Policy explains what information we collect when you use ${site.url.replace("https://", "")} or ask us for a quote, how we use and share it, how long we keep it, and the privacy rights you have under California law.`}</p>
        <p>
          {`By using this website or submitting a request, you agree to this Privacy Policy. It works alongside our `}
          <Link href="/terms-of-service">Terms of Service</Link>
          {`. If you do not agree, please do not use the site.`}
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    heading: "Information we collect",
    body: (
      <>
        <p>{`We collect information in three ways: what you give us, what we collect automatically, and what comes from the surety and underwriting process.`}</p>
        <h3>Information you give us</h3>
        <ul>
          {collectGiven.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <h3>Information collected automatically</h3>
        <ul>
          {collectAuto.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <p>{`You do not have to give us underwriting or sensitive information to browse the site. You only provide it when you choose to apply for a bond that requires it.`}</p>
      </>
    ),
  },
  {
    id: "how-we-use",
    heading: "How we use your information",
    body: (
      <>
        <p>{`We use the information we collect to:`}</p>
        <ul>
          {useList.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "how-we-share",
    heading: "How we share your information",
    body: (
      <>
        <p>{`We share your information only as needed to do the job you asked us to do, and as described below. We do not sell your personal information.`}</p>
        <ul>
          {shareList.map((s) => (
            <li key={s.lead}>
              <strong>{s.lead}:</strong> {s.text}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "communications",
    heading: "Calls, texts, and email consent",
    body: (
      <p>{`When you give us your phone number and submit a form, you agree that we and the carriers handling your request may contact you by phone, text, and email about that request, including by automated dialing or texting technology where applicable. Consent to marketing contact is not a condition of obtaining any bond. Message and data rates may apply. You can opt out of texts by replying STOP, or opt out of marketing email using the unsubscribe link, and we will still contact you as needed about an active request or bond.`}</p>
    ),
  },
  {
    id: "cookies",
    heading: "Cookies and analytics",
    body: (
      <p>{`We use cookies and similar technologies to keep the site working, remember your preferences, measure traffic, and understand which marketing brought you here. Analytics and call tracking providers may set their own cookies. You can control or block cookies in your browser settings, though some parts of the site may not work as well without them. Where supported, we honor recognized opt-out signals such as the Global Privacy Control.`}</p>
    ),
  },
  {
    id: "retention",
    heading: "How long we keep information",
    body: (
      <p>{`We keep your information for as long as we need it to provide our services, maintain the records a licensed surety broker is required to keep, resolve disputes, and meet our legal and regulatory obligations. When we no longer need it, we delete it or remove the details that identify you.`}</p>
    ),
  },
  {
    id: "security",
    heading: "How we protect information",
    body: (
      <p>{`We use reasonable administrative, technical, and physical safeguards designed to protect your information, and we limit access to people who need it to do their work. No website or method of transmission is completely secure, so we cannot guarantee absolute security. Please do not send full Social Security numbers or other highly sensitive details by ordinary email; ask us for a secure way to share them.`}</p>
    ),
  },
  {
    id: "your-rights",
    heading: "Your California privacy rights",
    body: (
      <>
        <p>{`If you are a California resident, the California Consumer Privacy Act, as amended, gives you the right to:`}</p>
        <ul>
          {rightsList.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <p>
          {`To exercise a right, contact us using the details in the `}
          <a href="#contact">Contact us</a>
          {` section below. We will verify your identity before acting on your request, and you may use an authorized agent. We will not treat you differently for exercising your rights.`}
        </p>
      </>
    ),
  },
  {
    id: "children",
    heading: "Children's privacy",
    body: (
      <p>{`This website is intended for businesses and adults seeking surety bonds. It is not directed to children, and we do not knowingly collect personal information from anyone under 16. If you believe a child has given us information, contact us and we will delete it.`}</p>
    ),
  },
  {
    id: "third-party",
    heading: "Third-party links",
    body: (
      <p>{`Our site links to outside resources such as the CSLB, the California Department of Insurance, the SBA, and surety company sites. We do not control those sites, and this policy does not cover them. Review the privacy policy of any site you visit.`}</p>
    ),
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    body: (
      <p>{`We may update this Privacy Policy from time to time. When we do, we will change the "last updated" date at the top of the page, and for significant changes we will take reasonable steps to let you know. Your continued use of the site after an update means you accept the revised policy.`}</p>
    ),
  },
  {
    id: "contact",
    heading: "Contact us",
    body: (
      <>
        <p>{`Questions about this policy or the information we hold about you? Reach us at:`}</p>
        <ul>
          <li>
            {site.name}, CA DOI License #{site.doiLicense}
          </li>
          <li>
            Phone:{" "}
            <a href={site.phone.href} data-callrail="phone">
              {site.phone.display}
            </a>
          </li>
          <li>
            Email: <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
          <li>{`Serving contractors across ${site.areaServed}.`}</li>
        </ul>
      </>
    ),
  },
];

export default function Page() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated={EFFECTIVE}
      breadcrumbLabel="Privacy Policy"
      breadcrumbHref="/privacy-policy"
      intro="Your information helps us get you the right bond. Here is exactly what we collect, why, who we share it with, and the choices you have."
      summary="MM Bonding collects the details you submit (name, contact, and bond request information) to prepare quotes and place your bond with surety companies. We share your application only with the carriers, partner agencies, and service providers needed to do that. We do not sell your personal information. California residents have access, correction, and deletion rights."
      sections={sections}
    />
  );
}
