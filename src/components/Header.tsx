"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/references", label: "References" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-navy/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between lg:h-20">
          <Link href="/" className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-lg font-bold text-lg ${
                scrolled ? "bg-navy text-white" : "bg-teal text-white"
              }`}
            >
              D
            </div>
            <div>
              <span
                className={`text-lg font-bold tracking-tight ${
                  scrolled ? "text-navy" : "text-white"
                }`}
              >
                DICLAS
              </span>
              <span
                className={`block text-[10px] font-medium uppercase tracking-widest ${
                  scrolled ? "text-gray-500" : "text-gray-300"
                }`}
              >
                Waste Oil Management
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  scrolled
                    ? "text-gray-700 hover:text-navy hover:bg-gray-100"
                    : "text-gray-200 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+264811221907"
              className={`flex items-center gap-2 text-sm font-medium ${
                scrolled ? "text-gray-600" : "text-gray-300"
              }`}
            >
              <Phone className="h-4 w-4" />
              +264 81 122 1907
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-teal px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-teal-dark hover:shadow-lg"
            >
              Request a Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-md ${
              scrolled ? "text-navy" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl">
          <nav className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-base font-medium text-gray-700 hover:text-navy hover:bg-gray-50 rounded-md"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 border-t border-gray-200 pt-4 flex flex-col gap-3">
              <a
                href="tel:+264811221907"
                className="flex items-center gap-2 px-4 text-sm font-medium text-gray-600"
              >
                <Phone className="h-4 w-4" />
                +264 81 122 1907
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-lg bg-teal px-5 py-3 text-sm font-semibold text-white"
              >
                Request a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
