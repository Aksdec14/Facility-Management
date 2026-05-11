import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fusionedge.io"),

  title: {
    default: "FusionEdge | Intelligent Facility Management Platform",
    template: "%s | FusionEdge",
  },

  description:
    "FusionEdge is an intelligent facility management platform that helps organizations streamline operations, manage assets, track maintenance, optimize inventory, and improve workplace efficiency through real-time insights and automation.",

  keywords: [
    "Facility Management Software",
    "Asset Management Platform",
    "Work Order Management",
    "Maintenance Management System",
    "Inventory Management Software",
    "Visitor Management System",
    "Facility Operations Platform",
    "Enterprise Facility Management",
    "Smart Facility Management",
    "FusionEdge",
  ],

  authors: [
    {
      name: "FusionEdge",
      url: "https://fusionedge.io",
    },
  ],

  creator: "FusionEdge",
  publisher: "FusionEdge",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "FusionEdge | Intelligent Facility Management Platform",

    description:
      "Streamline facility operations, asset management, maintenance scheduling, inventory tracking, and workplace services through one intelligent platform.",

    url: "https://fusionedge.io",

    siteName: "FusionEdge",

    images: [
      {
        url: "https://fusionedge.io/WhiteBG_Logo.jpg",
        width: 1200,
        height: 630,
        alt: "FusionEdge Facility Management Dashboard",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "FusionEdge | Intelligent Facility Management Platform",

    description:
      "Smart facility management software for modern enterprises.",

    images: [
      "https://fusionedge.io/WhiteBG_Logo.jpg",
    ],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  alternates: {
    canonical: "https://fusionedge.io",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon.ico"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "SoftwareApplication",

              name: "FusionEdge Digital Asset Register",

              applicationCategory: "BusinessApplication",

              operatingSystem: "Web",

              description:
                "A single, living record of every facility asset across every site. QR code tagging, document management, and multi-site portfolio management — built for facility managers.",

              offers: {
                "@type": "Offer",
                url: "https://fusionedge.io/digital-asset-register",
              },

              provider: {
                "@type": "Organization",

                name: "FusionEdge",

                url: "https://fusionedge.io",

                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "sales",
                  areaServed: ["IN", "SG"],
                },
              },
            }),
          }}
        />
      </head>

      <body className="min-h-screen bg-[#EFE9E3] text-[#1e2a38] flex flex-col overflow-x-hidden">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}