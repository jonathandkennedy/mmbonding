import type { Metadata, Viewport } from "next";
import { Archivo, Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { JsonLd, organizationSchema } from "@/lib/jsonld";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CookieConsent } from "@/components/cookie-consent";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-archivo",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} · ${site.tagline}`,
    template: `%s · ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.shortName,
  authors: [{ name: site.founder.name }],
  keywords: [
    "California surety bonds",
    "contractor license bond",
    "bid bond",
    "performance bond",
    "payment bond",
    "bad credit surety bond",
    "hard to place surety bond",
    "surety broker California",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.shortName} · ${site.tagline}`,
    description: site.description,
    url: site.url,
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${site.shortName} · ${site.tagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.shortName} · ${site.tagline}`,
    description: site.description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#002040",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${jakarta.variable} ${plexMono.variable}`}
    >
      <body className="min-h-[100dvh] antialiased">
        <JsonLd schema={organizationSchema()} />
        <a
          href="#main"
          className="sr-only rounded-lg bg-navy-900 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <CookieConsent />
      </body>
    </html>
  );
}
