import type { Metadata } from "next";
import { Orbitron, Space_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "../components/StructuredData";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gigitech.me"),
  title: "GiGiTech - Full Stack & Mobile Developer Portfolio | Gigi Wang",
  icons: {
    icon: "/logo.svg",
  },
  description:
    "Explore Gigi Wang's portfolio showcasing expertise in full stack, mobile, and web development. View projects, skills, and experience.",
  keywords:
    "GiGiTech, Full Stack Developer, Mobile Developer, Web Developer, React, Next.js, Flutter, Android, iOS",
  authors: [{ name: "Gigi Wang", url: "https://www.gigitech.me" }],
  openGraph: {
    title: "GiGiTech - Full Stack & Mobile Developer Portfolio | Gigi Wang",
    description:
      "Explore Gigi Wang's portfolio showcasing expertise in full stack, mobile, and web development. View projects, skills, and experience.",
    type: "website",
    url: "https://www.gigitech.me",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GiGiTech Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@gigitech",
    creator: "@gigitech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${spaceMono.variable}`}>
      <head>
        <StructuredData />
        {/* Google tag (gtag.js) */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-8LZ9MEJ5LV"
        />
        <Script id="google-analytics-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8LZ9MEJ5LV');
          `}
        </Script>
      </head>
      <body className="font-mono">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
