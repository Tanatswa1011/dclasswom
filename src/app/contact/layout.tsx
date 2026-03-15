import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Diclas Waste Oil Management | Request a Quote",
  description:
    "Contact Diclas for marine environmental and waste management services. Request a quote, get support, or enquire about our services in Walvis Bay, Namibia.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
