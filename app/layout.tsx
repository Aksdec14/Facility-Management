import type { Metadata, Viewport } from "next";
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

// 1. Separate Viewport configuration (Next.js 14+ standard)
export const viewport: Viewport = {
  themeColor: "#EFE9E3",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Good for accessibility while allowing zoom
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fusionedge.io"),

  title: {
    default: "FusionEdge | Intelligent Facility Management Platform",
    template: "%s | FusionEdge",
  },

  description:
    "FusionEdge is an intelligent facility management platform that helps organizations streamline operations, manage assets, track maintenance, and improve workplace efficiency through real-time insights.",

  // Keywords are optional as Google ignores them, but other engines (Baidu/Yandex) use them.
  keywords: [
    "Facility Management Software",
    "Asset Management Platform",
    "Work Order Management",
    "Maintenance Management System",
  ],

  authors: [{ name: "FusionEdge", url: "https://fusionedge.io" }],
  creator: "FusionEdge",
  publisher: "FusionEdge",

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
    title: "FusionEdge | Intelligent Facility Management Platform",
    description:
      "Streamline facility operations, asset management, and maintenance through one intelligent platform.",
    url: "https://fusionedge.io",
    siteName: "FusionEdge",
    images: [
      {
        url: "/og-image.png", // Pro tip: Use a dedicated OG image, not just your logo
        width: 1200,
        height: 630,
        alt: "FusionEdge Facility Management Dashboard Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "FusionEdge | Intelligent Facility Management Platform",
    description: "Smart facility management software for modern enterprises.",
    images: ["/og-image.png"],
  },

  // 2. Optimized Icons Section
  icons: {
    icon: [
      { url: "/favicon.ico" }, // Standard favicon
      { url: "/icon.svg", type: "image/svg+xml" }, // Modern browsers
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
  // 3. Expanded Schema.org Data (Organization + Software)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://fusionedge.io/#organization",
        "name": "FusionEdge",
        "url": "https://fusionedge.io",
        "logo": "https://fusionedge.io/WhiteBG_Logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "sales",
          "areaServed": ["IN", "SG"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://fusionedge.io/#website",
        "url": "https://fusionedge.io",
        "name": "FusionEdge",
        "publisher": { "@id": "https://fusionedge.io/#organization" },
      },
      {
        "@type": "SoftwareApplication",
        "name": "FusionEdge Digital Asset Register",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "A single, living record of every facility asset across every site.",
        "offers": {
          "@type": "Offer",
          "url": "https://fusionedge.io/pricing",
          "priceCurrency": "USD",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      {/* 4. Removed manual favicon links from head - Metadata API handles this now */}
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#EFE9E3] text-[#1e2a38] flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
