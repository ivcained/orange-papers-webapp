import type { Metadata } from "next";
import { Inter, Fraunces, Lora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollNav } from "@/components/ScrollNav";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Orange Papers — Truth About Alcoholics Anonymous",
    template: "%s | The Orange Papers",
  },
  description:
    "A comprehensive series of pages about Substance Misuse Recovery Programs, Real Recovery, and an in-depth analysis of Alcoholics Anonymous by 'Orange'.",
  keywords: ["Alcoholics Anonymous", "AA", "12-step", "recovery", "cult", "Bill Wilson"],
  metadataBase: new URL("https://orangepapers.vercel.app"),
  openGraph: {
    type: "website",
    title: "The Orange Papers",
    description: "Truth about Alcoholics Anonymous and Twelve-Step Programs",
    siteName: "The Orange Papers",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${lora.variable}`}>
      <body>
        <ScrollNav />
        <Navbar />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
