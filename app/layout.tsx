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

export const viewport: Viewport = {
  themeColor: "#EFE9E3",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  // If you are developing locally, metadataBase can sometimes cause OG images 
  // not to show in local previews. It works perfectly once deployed.
  metadataBase: new URL("https://fusionedge.io"),

  title: {
    default: "FusionEdge | Intelligent Facility Management Platform",
    template: "%s | FusionEdge",
  },

  description:
    "FusionEdge is an intelligent facility management platform that helps organizations streamline operations and manage assets through real-time insights.",

  // I updated these paths to be more standard. 
  // ENSURE these files exist in your /public folder!
  icons: {
    icon: [
      { url: "/favicon.ico" }, 
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png", 
  },

  openGraph: {
    title: "FusionEdge | Intelligent Facility Management Platform",
    description: "Streamline facility operations and asset management.",
    url: "https://fusionedge.io",
    siteName: "FusionEdge",
    images: [
      {
        url: "/og-image.png", // Verify this file is in /public
        width: 1200,
        height: 630,
        alt: "FusionEdge Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "FusionEdge",
        "url": "https://fusionedge.io",
        "logo": "https://fusionedge.io/WhiteBG_Logo.png", // Must be a full URL
      },
      {
        "@type": "SoftwareApplication",
        "name": "FusionEdge Digital Asset Register",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "A single, living record of every facility asset.",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
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
