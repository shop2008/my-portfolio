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
  title: "GiGiTech | Gigi Wang - Full Stack Developer Portfolio",
  alternates: {
    canonical: "https://www.gigitech.me",
  },
  icons: {
    icon: "/logo.svg",
  },
  description:
    "Explore Gigi Wang's portfolio, a Full Stack Developer specializing in web and mobile development. Find Gigi's latest projects and technical expertise.",
  keywords:
    "GiGiTech, Gigi Wang, Gigi Developer, GigiWang, GigiWang Developer, Full Stack Developer, Mobile Developer, Web Developer, React, Next.js, Flutter, Android, iOS",
  authors: [{ name: "Gigi Wang", url: "https://www.gigitech.me" }],
  creator: "Gigi Wang",
  openGraph: {
    title: "GigiTech | Gigi Wang - Full Stack Developer Portfolio",
    description:
      "GiGiTech is the professional portfolio of Gigi Wang, a Full Stack Developer specializing in web and mobile development. Find Gigi's latest projects and technical expertise.",
    type: "website",
    url: "https://www.gigitech.me",
    siteName: "GiGiTech",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GiGiTech - Gigi Wang's Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@gigitech",
    creator: "@gigitech",
    title: "GigiTech | Gigi Wang - Full Stack Developer",
    description:
      "Full Stack Developer specializing in web and mobile development",
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
        <Script id="clarity" strategy="afterInteractive">
          {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "otuifs0ewo");
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
