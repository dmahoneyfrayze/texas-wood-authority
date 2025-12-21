import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://liveedgeguide.com"),
  title: "Live Edge Guide - The Authority on Custom Tables",
  description: "Your complete guide to live edge furniture, Parota wood, and sustainable slab sourcing in Texas.",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-stone-50 text-stone-900 flex flex-col min-h-screen`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LL2HZL1R1E"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-LL2HZL1R1E');
          `}
        </Script>
        <Script
          src="https://link.shopkovara.com/js/external-tracking.js"
          data-tracking-id="tk_a653e50cc2e14130b1914cc89498b8a5"
          strategy="lazyOnload"
        />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
