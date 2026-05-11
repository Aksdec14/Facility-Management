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
  metadataBase: new URL("https://fusionedge.io"),

  title: {
    default: "FusionEdge | Intelligent Facility Management Platform",
    template: "%s | FusionEdge",
  },

  description:
    "FusionEdge is an intelligent facility management platform that helps organizations streamline operations and manage assets through real-time insights.",

  // FIXED: Removed the SVG type from the .ico file and linked the PNG for Apple
  icons: {
    icon: [
      { url: "/favicon.ico" }, // Standard favicon
      { url: "/logo.png", type: "image/png" }, // Backup icon
    ],
    apple: "/logo.png", // Use the PNG for Apple touch icons
  },

  openGraph: {
    title: "FusionEdge | Intelligent Facility Management Platform",
    description: "Streamline facility operations and asset management.",
    url: "https://fusionedge.io",
    siteName: "FusionEdge",
    images: [
      {
        url: "/logo.png", // This matches your file tree exactly
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
    images: ["/logo.png"],
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
        "@id": "https://fusionedge.io/#organization",
        "name": "FusionEdge",
        "url": "https://fusionedge.io",
        // FIXED: Changed .png to .jpg to match your WhiteBG_Logo.jpg file
        "logo": "https://fusionedge.io/WhiteBG_Logo.jpg", 
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
