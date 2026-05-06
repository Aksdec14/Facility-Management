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
        url: "/logo.png",
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

    images: ["/logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
      <body className="min-h-screen bg-[#EFE9E3] text-[#1e2a38] flex flex-col overflow-x-hidden">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}