import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Diclas Waste Oil Management | Marine Environmental & Waste Services | Namibia",
  description:
    "Trusted marine environmental and waste management services in Namibia. Tank cleaning, waste removal, ship repair, and environmental support for vessels and port operations.",
  keywords: [
    "waste oil management",
    "marine environmental services",
    "tank cleaning",
    "Namibia",
    "Walvis Bay",
    "ship repair",
    "waste removal",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
