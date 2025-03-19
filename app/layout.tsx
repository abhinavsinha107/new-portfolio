import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhinav Sinha | FullStack Developer",
  description:
    "Discover the personal portfolio of Abhinav Sinha – a creative FullStack Developer producing great software.",
  openGraph: {
    title: "Abhinav Sinha | FullStack Developer",
    description:
      "Discover the personal portfolio of Abhinav Sinha – a creative FullStack Developer producing great software.",
    url: "https://abhinavsinha.vercel.app/",
    siteName: "Abhinav Sinha",
    images: [
      {
        url: "https://res.cloudinary.com/dsjohbtbs/image/upload/v1742412455/cixrlrc6g8omguequyhh.jpg",
        width: 1200,
        height: 630,
        alt: "Abhinav Sinha",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhinav Sinha | FullStack Web Developer",
    description:
      "Discover the personal portfolio of Abhinav Sinha – a creative FullStack Developer producing great software.",
    images:
      "https://res.cloudinary.com/dsjohbtbs/image/upload/v1742412455/cixrlrc6g8omguequyhh.jpg",
  },
  alternates: {
    canonical: "https://abhinavsinha.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abhinav Sinha",
              url: "https://abhinavsinha.vercel.app/",
              sameAs: [
                "https://github.com/abhinavsinha107",
                "https://x.com/abhinavsinha107",
                "https://www.linkedin.com/in/abhinav-sinha-1007as/",
                "https://www.instagram.com/abhinavsinha107/",
                "https://www.facebook.com/abhinavsinha107",
              ],
            }),
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <section className="z-10">{children}</section>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
