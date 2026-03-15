import Link from "next/link";
import {
  Wrench,
  Trash2,
  Container,
  Droplets,
  FlaskConical,
  Fuel,
  Users,
  Ship,
  Waves,
  ArrowRight,
  Phone,
  CircleDot,
  Package,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Diclas Waste Oil Management",
  description:
    "Explore the full range of marine waste management, ship repair, tank cleaning, and environmental services offered by Diclas in Walvis Bay, Namibia.",
};

const services = [
  {
    icon: Wrench,
    title: "Ship Repair",
    slug: "ship-repair",
    desc: "Professional vessel repair and maintenance services for commercial, fishing, and industrial fleets. Our experienced technicians handle structural repairs, mechanical work, and general maintenance to minimize vessel downtime and ensure seaworthiness.",
    features: [
      "Hull and structural repairs",
      "Engine and mechanical maintenance",
      "Deck equipment servicing",
      "Emergency repair response",
      "Pre-survey preparation",
    ],
  },
  {
    icon: Trash2,
    title: "Waste Removal",
    slug: "waste-removal",
    desc: "Comprehensive waste collection and removal services for vessels and industrial facilities. We safely handle all categories of marine and industrial waste — from oily residues and sludge to general operational waste — with full regulatory compliance.",
    features: [
      "Marine vessel waste collection",
      "Industrial site waste removal",
      "Oily residue and sludge handling",
      "Waste categorization and sorting",
      "Certified waste disposal documentation",
    ],
  },
  {
    icon: Container,
    title: "Tank Cleaning",
    slug: "tank-cleaning",
    desc: "Specialized cleaning of fuel, HFO, water, and sewage tanks on vessels and shore-side installations. Our tank cleaning operations follow strict safety protocols and environmental standards, with certified disposal of all residues and cleaning materials.",
    features: [
      "HFO (Heavy Fuel Oil) tank cleaning",
      "Fuel and diesel tank cleaning",
      "Water tank cleaning and sanitization",
      "Sewage tank cleaning",
      "Confined space entry and gas-free certification",
    ],
  },
  {
    icon: Droplets,
    title: "Discharging of Sewage",
    slug: "sewage-discharge",
    desc: "Licensed and compliant sewage discharge services for vessels and marine installations. We handle the collection, transport, and authorized discharge of sewage in accordance with Namibian environmental regulations.",
    features: [
      "Vessel sewage pump-out",
      "Shore-side sewage collection",
      "Compliant discharge operations",
      "Full documentation and certification",
      "Environmental monitoring",
    ],
  },
  {
    icon: Waves,
    title: "Discharging of Contaminated Water",
    slug: "contaminated-water",
    desc: "Safe discharge and disposal of contaminated water from vessel operations, tank cleaning, and industrial processes. All operations are conducted under strict environmental controls with complete documentation.",
    features: [
      "Bilge water discharge",
      "Ballast water handling",
      "Industrial wastewater disposal",
      "Contamination assessment",
      "Regulatory compliance documentation",
    ],
  },
  {
    icon: Package,
    title: "Disposal of Solid Waste",
    slug: "solid-waste",
    desc: "Safe collection, transport, and disposal of solid waste from marine and industrial operations. We handle packaging materials, operational debris, and other solid waste streams with proper segregation and certified disposal.",
    features: [
      "Marine solid waste collection",
      "Industrial debris removal",
      "Waste segregation and categorization",
      "Licensed transport and disposal",
      "Disposal certificates issued",
    ],
  },
  {
    icon: CircleDot,
    title: "Disposal of Liquid Waste",
    slug: "liquid-waste",
    desc: "Professional handling and disposal of liquid waste including waste oils, chemical solutions, and other liquid by-products from marine and industrial operations.",
    features: [
      "Waste oil collection and disposal",
      "Chemical liquid waste handling",
      "Slop and residue disposal",
      "Secure transport and containment",
      "Environmental compliance documentation",
    ],
  },
  {
    icon: FlaskConical,
    title: "Disposal of Hazardous Waste",
    slug: "hazardous-waste",
    desc: "Certified handling, transport, and disposal of hazardous waste materials. Our trained personnel follow stringent safety protocols to manage hazardous substances from marine, industrial, and commercial sources.",
    features: [
      "Hazardous material identification and classification",
      "Safe packaging and containment",
      "Licensed hazardous waste transport",
      "Certified disposal at approved facilities",
      "Full chain-of-custody documentation",
    ],
  },
  {
    icon: Fuel,
    title: "Storage of Fuel",
    slug: "fuel-storage",
    desc: "Secure fuel storage solutions for vessel operators and industrial clients. Our storage facilities are maintained to the highest safety and environmental standards, providing reliable fuel handling for marine and commercial operations.",
    features: [
      "Secure tank farm storage",
      "Fuel quality monitoring",
      "Spill containment systems",
      "Inventory management",
      "Regulatory compliance",
    ],
  },
  {
    icon: Ship,
    title: "Supply of Sewage Tanks",
    slug: "sewage-tanks",
    desc: "Provision of sewage holding tanks and related equipment for vessels and marine installations. We supply, deliver, and install tanks that meet operational requirements and regulatory standards.",
    features: [
      "Sewage tank procurement",
      "Custom sizing and specification",
      "Delivery and installation",
      "Maintenance and inspection",
      "Compliance certification",
    ],
  },
  {
    icon: Users,
    title: "Supply of Workers",
    slug: "worker-supply",
    desc: "Provision of skilled and semi-skilled workers for marine, industrial, and waste management operations. Our personnel are trained, safety-certified, and ready for deployment across a range of operational environments.",
    features: [
      "Marine operations personnel",
      "Industrial labor supply",
      "Safety-trained workers",
      "Short and long-term deployment",
      "Workforce management support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-light">
              Our Services
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Complete Marine &amp; Environmental Service Solutions
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              From ship repair and tank cleaning to hazardous waste disposal and
              workforce supply — Diclas provides the full range of services
              needed to keep marine and industrial operations running safely and
              efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, idx) => (
              <div
                key={service.slug}
                id={service.slug}
                className={`rounded-2xl border border-gray-200 bg-white p-8 shadow-sm lg:p-10 ${
                  idx % 2 === 0 ? "" : "bg-gray-50"
                }`}
              >
                <div className="grid gap-8 lg:grid-cols-3">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10">
                        <service.icon className="h-6 w-6 text-teal" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                          Service {String(idx + 1).padStart(2, "0")}
                        </span>
                        <h2 className="text-xl font-bold text-navy">
                          {service.title}
                        </h2>
                      </div>
                    </div>
                    <p className="text-base leading-relaxed text-gray-600">
                      {service.desc}
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
                      Capabilities
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Need a Service Tailored to Your Operation?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Contact our team to discuss your requirements. We provide
            customized solutions, competitive pricing, and rapid response
            times for all marine and industrial waste management needs.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-teal px-8 py-4 text-base font-semibold text-white transition-all hover:bg-teal-dark hover:shadow-xl"
            >
              Request a Quote <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:+264811221907"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-navy transition-all hover:border-navy hover:shadow-md"
            >
              <Phone className="h-5 w-5" />
              Call Us Directly
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
