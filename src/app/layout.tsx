import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Diclas Waste Oil Management | Marine & Environmental Services | Namibia",
  description:
    "Diclas Waste Oil Management provides professional marine waste management, ship repair, tank cleaning, and environmental services from Walvis Bay, Namibia. Trusted by vessel operators and industrial clients across Southern Africa.",
  keywords: [
    "waste oil management",
    "marine services",
    "Namibia",
    "Walvis Bay",
    "ship repair",
    "tank cleaning",
    "hazardous waste disposal",
    "environmental services",
    "sewage discharge",
    "fuel storage",
  ],
  openGraph: {
    title: "Diclas Waste Oil Management | Namibia",
    description:
      "Professional marine waste management, ship services, and environmental solutions from Walvis Bay, Namibia.",
    type: "website",
    locale: "en_NA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
