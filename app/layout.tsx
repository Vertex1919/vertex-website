import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

import Cursor from "@/components/cursor/Cursor";
import SmoothScroll from "@/components/smooth-scroll/SmoothScroll";
import PageTransition from "@/components/page-transition/PageTransition";

export const metadata: Metadata = {

  title:
    "Vertex Construction & Services",

  description:
    "Premium construction, marble, waterproofing, painting and interior execution environments crafted through precision, trust and architectural excellence.",

  keywords: [
    "Vertex Construction",
    "Luxury Interiors",
    "Marble Services",
    "Waterproofing",
    "Painting",
    "Interior Design",
    "Construction Services",
  ],

  openGraph: {

    title:
      "Vertex Construction & Services",

    description:
      "Premium architectural execution environments crafted through luxury, precision and intelligent execution.",

    url:
      "https://vertexconstructionservices.in",

    siteName:
      "Vertex Construction & Services",

    images: [

      {
        url:
          "/images/seo/og-image.webp",

        width: 1200,
        height: 630,

        alt:
          "Vertex Construction & Services",
      },

    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {

    card: "summary_large_image",

    title:
      "Vertex Construction & Services",

    description:
      "Premium architectural execution environments crafted through luxury, precision and intelligent execution.",

    images: [
      "/images/seo/og-image.webp",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">

      <body>

        {/* SMOOTH SCROLL */}
        <SmoothScroll />

        {/* CUSTOM CURSOR */}
        <Cursor />

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE TRANSITION */}
        <PageTransition>

          {children}

        </PageTransition>

        {/* FOOTER */}
        <Footer />

      </body>

    </html>
  );
}
