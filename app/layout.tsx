import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    default: "FusionEdge Helpdesk | Smart Facility Support Management",
    template: "%s | FusionEdge Helpdesk",
  },
  description:
    "FusionEdge Helpdesk centralizes every facility service request into one intelligent platform. Log, assign, track, and resolve maintenance, cleaning, IT, and infrastructure issues — faster.",
  keywords: [
    "facility helpdesk software",
    "service request management",
    "facility management platform",
    "maintenance ticketing system",
    "multi-site facility support",
    "SLA monitoring",
    "FusionEdge",
  ],
  authors: [{ name: "FusionEdge", url: "https://fusionedge.io" }],
  creator: "FusionEdge",
  metadataBase: new URL("https://fusionedge.io"),
  alternates: {
    canonical: "/helpdesk",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://fusionedge.io/helpdesk",
    siteName: "FusionEdge",
    title: "FusionEdge Helpdesk | Smart Facility Support Management",
    description:
      "Centralize every facility service request. Log, assign, track, and resolve issues faster with FusionEdge Helpdesk — built for enterprise facility teams.",
    images: [
      {
        url: "/WhiteBG_Logo.png",
        width: 1200,
        height: 630,
        alt: "FusionEdge Helpdesk Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FusionEdge Helpdesk | Smart Facility Support Management",
    description:
      "Stop losing facility requests to emails and spreadsheets. FusionEdge Helpdesk gives you full visibility and control — across every site.",
    images: ["/WhiteBG_Logo.png"],
    creator: "@fusionedge",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/WhiteBG_Logo.png", type: "image/svg+xml" },
      { url: "/WhiteBG_Logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/WhiteBG_Logo.png",
    shortcut: "/WhiteBG_Logo.png",
  },
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
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="/fe_logo.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "FusionEdge Helpdesk",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "Centralized facility service request management platform for enterprise teams.",
              offers: {
                "@type": "Offer",
                url: "https://fusionedge.io/helpdesk",
              },
              provider: {
                "@type": "Organization",
                name: "FusionEdge",
                url: "https://fusionedge.io",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
