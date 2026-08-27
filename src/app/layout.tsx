import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AdScript } from "./_components/AdScript";
import { ADSENSE_CLIENT } from "@/lib/ads";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Canonical site origin (canonical tags, OG, JSON-LD). Override per-env via NEXT_PUBLIC_SITE_URL
// (e.g. a preview origin); defaults to the production domain.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://neurantra.com";
const TITLE = "Neurantra — Calm AI for the moments where clarity matters";
const DESCRIPTION =
  "Neurantra is a small product studio building domain-specific AI assistants and AI-driven games. Currently shipping IyerSpine, Surgery Care, Pawcial, PlaneSane, Puzzlecub, and Chaturang.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Neurantra",
  title: {
    default: TITLE,
    template: "%s · Neurantra",
  },
  description: DESCRIPTION,
  keywords: [
    "domain-specific AI",
    "AI product studio",
    "AI assistants",
    "AI-driven games",
    "IyerSpine",
    "Surgery Care",
    "Pawcial",
    "PlaneSane",
    "flight reliability",
    "StaySane",
    "hotel scoring",
    "Puzzlecub",
    "Chaturang",
  ],
  authors: [{ name: "Neurantra" }],
  creator: "Neurantra",
  publisher: "Neurantra LLC",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Neurantra",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "A small product studio building domain-specific AI assistants and AI-driven games.",
  },
  // AdSense site-ownership verification (Meta-tag method) — always present, independent of whether ads
  // render, so Google can verify the publisher before ads are enabled and regardless of the ads.txt crawl.
  other: { "google-adsense-account": ADSENSE_CLIENT },
};

// schema.org structured data — helps search engines understand the studio + the products it ships.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Neurantra",
      description: DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#org` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: "Neurantra LLC",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.svg`,
      email: "hello@neurantra.com",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AdScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
