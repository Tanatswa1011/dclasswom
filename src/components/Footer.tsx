import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Anchor,
  ArrowUpRight,
} from "lucide-react";

const services = [
  "Ship Repair",
  "Waste Removal",
  "Tank Cleaning",
  "Sewage Discharge",
  "Hazardous Waste Disposal",
  "Fuel Storage",
  "Worker Supply",
];

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/projects", label: "Projects" },
  { href: "/references", label: "References" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal font-bold text-lg text-white">
                D
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight">DICLAS</span>
                <span className="block text-[10px] font-medium uppercase tracking-widest text-gray-400">
                  Waste Oil Management
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              Namibia&apos;s trusted partner for marine waste management, ship
              services, and environmental solutions. Operating from Walvis Bay
              with national reach.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Anchor className="h-4 w-4" />
              <span>Serving Namibia&apos;s Maritime Industry Since Establishment</span>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-teal-light"
                  >
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-gray-400 transition-colors hover:text-teal-light"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-teal" />
                <span className="text-sm text-gray-400">
                  Walvis Bay, Erongo Region, Namibia
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 shrink-0 text-teal" />
                <div className="text-sm text-gray-400">
                  <a href="tel:+264811221907" className="hover:text-white block">
                    +264 81 122 1907
                  </a>
                  <a href="tel:+264812771907" className="hover:text-white block">
                    +264 81 277 1907
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 shrink-0 text-teal" />
                <a
                  href="mailto:info@diclaswom.com"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  info@diclaswom.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Diclas Waste Oil Management (Pty) Ltd. All
              rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/contact" className="text-xs text-gray-500 hover:text-gray-300">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-xs text-gray-500 hover:text-gray-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
