import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import Reveal from "@/components/Reveal";
import { HOTEL_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-playfair", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-poppins", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: HOTEL_NAME, template: `%s | ${HOTEL_NAME}` },
  applicationName: HOTEL_NAME,
  authors: [{ name: HOTEL_NAME, url: SITE_URL }],
  creator: HOTEL_NAME,
  publisher: HOTEL_NAME,
  formatDetection: { telephone: true, address: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: { icon: "/images/favicon.svg", apple: "/images/favicon.svg" },
  // Paste your Google Search Console code in a GOOGLE_SITE_VERIFICATION environment variable
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
  other: {
    "geo.region": "PK-PB",
    "geo.placename": "Bahria Town Phase 4, Rawalpindi",
  },
};

export const viewport: Viewport = {
  themeColor: "#121621",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-PK" className={`${playfair.variable} ${poppins.variable}`}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileBar />
        <Reveal />
      </body>
    </html>
  );
}
