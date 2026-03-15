import { Ship, Anchor, Building2, Factory, Fish, Container } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "References | Diclas Waste Oil Management",
  description:
    "Trusted by vessel operators, port authorities, and industrial clients across Namibia. See who relies on Diclas for marine waste management and environmental services.",
};

const clientCategories = [
  {
    icon: Ship,
    category: "Commercial Shipping",
    desc: "We provide waste management, tank cleaning, and ship repair services to commercial cargo and container vessel operators calling at Namibian ports.",
    clients: [
      "International cargo vessel operators",
      "Regional shipping lines",
      "Container vessel fleets",
      "Bulk carrier operators",
    ],
  },
  {
    icon: Fish,
    category: "Fishing Industry",
    desc: "Namibia's fishing industry relies on us for vessel waste removal, sewage discharge, tank cleaning, and ongoing maintenance support.",
    clients: [
      "Commercial fishing fleets",
      "Processing vessel operators",
      "Fishing industry contractors",
      "Cold storage and port-side operations",
    ],
  },
  {
    icon: Anchor,
    category: "Offshore & Marine",
    desc: "Offshore support vessels and marine service providers trust Diclas for reliable waste handling, fuel storage, and workforce supply.",
    clients: [
      "Offshore supply vessel operators",
      "Marine towing and salvage companies",
      "Subsea and diving service providers",
      "Port service operators",
    ],
  },
  {
    icon: Building2,
    category: "Port & Government",
    desc: "We work closely with port authorities and government agencies to deliver compliant waste management and environmental protection services.",
    clients: [
      "Namibian Ports Authority (NamPort)",
      "Port-side service providers",
      "Regulatory and compliance bodies",
      "Municipal waste coordination",
    ],
  },
  {
    icon: Factory,
    category: "Industrial & Energy",
    desc: "Industrial operators in the Walvis Bay region rely on our hazardous waste disposal, fuel storage, and environmental services.",
    clients: [
      "Oil and gas service companies",
      "Industrial manufacturing operators",
      "Energy sector contractors",
      "Construction and demolition operations",
    ],
  },
  {
    icon: Container,
    category: "Logistics & Transport",
    desc: "Transport and logistics companies operating in the port zone use our waste removal and tank cleaning services to maintain compliance.",
    clients: [
      "Freight and logistics operators",
      "Tank container service providers",
      "Transport fleet operators",
      "Warehousing and distribution companies",
    ],
  },
];

const testimonials = [
  {
    quote:
      "Diclas has been our go-to partner for vessel waste management services. Their response times are excellent and their documentation is always thorough.",
    source: "Commercial Vessel Operator",
    role: "Fleet Operations Manager",
  },
  {
    quote:
      "Reliable, professional, and always compliant. We trust Diclas to handle our hazardous waste disposal with the care and certification required.",
    source: "Industrial Client",
    role: "HSE Manager",
  },
  {
    quote:
      "Their tank cleaning team is efficient and follows strict safety protocols. We've never had a compliance issue since working with Diclas.",
    source: "Fishing Fleet Operator",
    role: "Technical Superintendent",
  },
];

export default function ReferencesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-light">
              Client References
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Trusted Across Industries
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              From vessel operators and fishing fleets to port authorities and
              industrial clients — Diclas has built a strong reputation for
              reliable, compliant, and professional service delivery.
            </p>
          </div>
        </div>
      </section>

      {/* CLIENT CATEGORIES */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal">
              Industries We Serve
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Client Sectors &amp; References
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {clientCategories.map((cat) => (
              <div
                key={cat.category}
                className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5">
                  <cat.icon className="h-6 w-6 text-navy" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-navy">
                  {cat.category}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-gray-500">
                  {cat.desc}
                </p>
                <ul className="space-y-2">
                  {cat.clients.map((client) => (
                    <li
                      key={client}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                      {client}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal">
              Client Feedback
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.source}
                className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mb-6 text-sm leading-relaxed text-gray-600 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="text-sm font-bold text-navy">{t.source}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Join Our Growing Client Base
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Experience the reliability and professionalism that makes Diclas
            the trusted choice for marine waste management and environmental
            services in Namibia.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-teal px-8 py-4 text-base font-semibold text-white transition-all hover:bg-teal-dark hover:shadow-xl"
            >
              Get in Touch <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
