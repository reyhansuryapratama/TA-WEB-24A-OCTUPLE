// ============================================================
// PAHAWANG WISATA — Root Layout + SEO Metadata
// ============================================================

import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "Pahawang Wisata — Surga Bahari Lampung",
    template: "%s | Pahawang Wisata",
  },
  description:
    "Destinasi wisata bahari terbaik di Lampung. Snorkeling, diving, island hopping di Kepulauan Pahawang dengan pemandu profesional bersertifikat. Booking sekarang!",
  keywords: [
    "wisata pahawang",
    "pantai lampung",
    "snorkeling pahawang",
    "pulau pahawang",
    "wisata bahari lampung",
    "open trip pahawang",
    "diving lampung",
    "gosong sekopong",
    "tanjung putus",
    "paket wisata pahawang",
  ],
  authors: [{ name: "Pahawang Wisata Team" }],
  creator: "Pahawang Wisata",
  publisher: "Pahawang Wisata",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://pahawangwisata.com",
    siteName: "Pahawang Wisata",
    title: "Pahawang Wisata — Surga Bahari Lampung",
    description:
      "Destinasi wisata bahari terbaik di Lampung. Snorkeling, diving, island hopping di Kepulauan Pahawang.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pahawang Wisata — Surga Bahari Lampung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pahawang Wisata — Surga Bahari Lampung",
    description:
      "Destinasi wisata bahari terbaik di Lampung. Snorkeling, diving, island hopping.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://pahawangwisata.com",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#125077" },
    { media: "(prefers-color-scheme: dark)", color: "#061d2e" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="font-body antialiased">
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}