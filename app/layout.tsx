import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/FooterSection";

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
    "Maintenance Management System",
    "Work Order Management",
    "Inventory Management Software",
    "Smart Facility Management",
    "Enterprise Facility Operations",
    "Visitor Management System",
    "Facility Automation Platform",
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

  alternates: {
    canonical: "https://fusionedge.io",
  },

  openGraph: {
    type: "website",

    locale: "en_US",

    url: "https://fusionedge.io",

    siteName: "FusionEdge",

    title: "FusionEdge | Intelligent Facility Management Platform",

    description:
      "Streamline facility operations, asset management, maintenance scheduling, inventory tracking, and workplace services through one intelligent platform.",

    images: [
      {
        url: "https://fusionedge.io/WhiteBG_Logo.jpg",
        width: 1200,
        height: 630,
        alt: "FusionEdge Intelligent Facility Management Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "FusionEdge | Intelligent Facility Management Platform",

    description:
      "Smart facility management software for modern enterprises.",

    images: [
      "https://fusionedge.io/WhiteBG_Logo.jpg",
    ],

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
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/fe_logo.png",
        type: "image/x-icon",
      },
    ],

    apple: "/fe_logo.png",

    shortcut: "/fe_logo.png",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="/fe_logo.png"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "SoftwareApplication",

              name: "FusionEdge",

              applicationCategory: "BusinessApplication",

              operatingSystem: "Web",

              description:
                "Intelligent facility management platform for enterprise operations, maintenance tracking, asset management, and workplace optimization.",

              offers: {
                "@type": "Offer",

                url: "https://fusionedge.io",
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

      <body className="min-h-full flex flex-col bg-[#EFE9E3] text-[#1e2a38] overflow-x-hidden">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
