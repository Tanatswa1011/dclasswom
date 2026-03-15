import Link from "next/link";
import {
  Anchor,
  Ship,
  Trash2,
  Droplets,
  Shield,
  Fuel,
  Users,
  FlaskConical,
  ArrowRight,
  CheckCircle2,
  Clock,
  Award,
  Leaf,
  Phone,
  ChevronRight,
  Globe,
  Wrench,
  Container,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Ship Repair",
    desc: "Comprehensive vessel repair and maintenance services for commercial and industrial fleets operating along the Namibian coast.",
  },
  {
    icon: Trash2,
    title: "Waste Removal",
    desc: "Safe and compliant collection and removal of marine and industrial waste, including oily residues, sludge, and operational waste.",
  },
  {
    icon: Container,
    title: "Tank Cleaning",
    desc: "Professional cleaning of HFO, fuel, water, and sewage tanks to international standards with certified disposal of residues.",
  },
  {
    icon: Droplets,
    title: "Sewage & Water Discharge",
    desc: "Licensed discharge of sewage and contaminated water in full compliance with Namibian environmental regulations.",
  },
  {
    icon: FlaskConical,
    title: "Hazardous Waste Disposal",
    desc: "Handling, transport, and certified disposal of hazardous, liquid, and solid industrial waste materials.",
  },
  {
    icon: Fuel,
    title: "Fuel Storage & Supply",
    desc: "Secure fuel storage facilities and reliable supply of sewage tanks and essential marine operational equipment.",
  },
];

const strengths = [
  {
    icon: Clock,
    title: "Rapid Response",
    desc: "24/7 availability with fast mobilization to vessels and facilities across Walvis Bay and the Namibian coast.",
  },
  {
    icon: Shield,
    title: "Safety & Compliance",
    desc: "All operations adhere to strict environmental and safety regulations with full documentation and certification.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    desc: "Years of successful operations serving vessel operators, port authorities, and industrial clients throughout Namibia.",
  },
  {
    icon: Users,
    title: "Skilled Workforce",
    desc: "Experienced, trained personnel ready for deployment across marine, waste management, and industrial operations.",
  },
  {
    icon: Globe,
    title: "Regional Reach",
    desc: "Strategic Walvis Bay location provides access to one of Southern Africa's most important commercial ports.",
  },
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    desc: "Committed to minimizing environmental impact through proper waste handling, recycling, and certified disposal practices.",
  },
];

const projects = [
  {
    title: "Port Vessel Tank Cleaning",
    category: "Tank Cleaning",
    desc: "Complete HFO and fuel tank cleaning for multiple commercial vessels at Walvis Bay port.",
  },
  {
    title: "Industrial Waste Removal",
    category: "Waste Management",
    desc: "Large-scale hazardous waste collection and certified disposal for port-side industrial operations.",
  },
  {
    title: "Marine Sewage Processing",
    category: "Environmental",
    desc: "Compliant discharge and processing of sewage from fishing and cargo vessels.",
  },
  {
    title: "Ship Hull & Engine Repair",
    category: "Ship Repair",
    desc: "Structural and mechanical repairs for commercial fleet vessels requiring rapid turnaround.",
  },
];

export default function Home() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative min-h-[90vh] flex items-center bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-dark/50 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5">
              <Anchor className="h-4 w-4 text-teal-light" />
              <span className="text-sm font-medium text-teal-light">
                Walvis Bay, Namibia
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Marine Waste Management{" "}
              <span className="text-teal-light">&amp; Environmental</span>{" "}
              Services You Can Trust
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              Diclas Waste Oil Management delivers professional ship services,
              waste handling, tank cleaning, and environmental solutions to
              vessel operators and industrial clients across Namibia.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal px-8 py-4 text-base font-semibold text-white transition-all hover:bg-teal-dark hover:shadow-xl hover:shadow-teal/20"
              >
                Request a Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
              >
                View Services
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-3xl font-bold text-white">11+</p>
                <p className="mt-1 text-sm text-gray-400">Core Services</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="mt-1 text-sm text-gray-400">Availability</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="mt-1 text-sm text-gray-400">Compliant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TRUST STRIP ========== */}
      <section className="border-b border-gray-200 bg-gray-50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <p className="text-sm font-medium uppercase tracking-wider text-gray-400">
              Trusted by vessel operators &amp; industrial clients
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {[
                "NamPort",
                "Fishing Vessels",
                "Cargo Operators",
                "Oil & Gas",
                "Marine Fleet",
              ].map((client) => (
                <div
                  key={client}
                  className="flex items-center gap-2 text-sm font-semibold text-gray-400"
                >
                  <Ship className="h-4 w-4" />
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES GRID ========== */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Comprehensive Marine &amp; Environmental Services
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              From ship repair to hazardous waste disposal, we provide the full
              spectrum of marine waste management and environmental services.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-teal/30 hover:shadow-lg hover:shadow-teal/5"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 text-navy transition-colors group-hover:bg-teal/10 group-hover:text-teal">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-navy">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {service.desc}
                </p>
                <Link
                  href="/services"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-teal transition-colors hover:text-teal-dark"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE DICLAS ========== */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-teal">
                Why Choose Us
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Operational Excellence Backed by Commitment
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-500">
                Diclas Waste Oil Management combines deep industry knowledge with
                a relentless focus on safety, compliance, and client
                satisfaction. Based in Walvis Bay — Namibia&apos;s primary
                commercial port — we are strategically positioned to serve
                vessels and industries across the region.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Licensed and compliant with all Namibian environmental regulations",
                  "Experienced team with marine and industrial waste expertise",
                  "Fast mobilization and 24/7 operational readiness",
                  "Complete documentation and waste disposal certification",
                  "Competitive pricing with transparent quoting",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-dark"
              >
                Learn more about our company <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {strengths.slice(0, 4).map((s) => (
                <div
                  key={s.title}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <s.icon className="mb-3 h-8 w-8 text-teal" />
                  <h3 className="mb-2 text-sm font-bold text-navy">{s.title}</h3>
                  <p className="text-xs leading-relaxed text-gray-500">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROJECTS PREVIEW ========== */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-teal">
                Our Work
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Projects &amp; Field Operations
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-dark"
            >
              View all projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-navy/10 to-teal/10 flex items-center justify-center">
                  <Anchor className="h-12 w-12 text-navy/20" />
                </div>
                <div className="p-5">
                  <span className="inline-block rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold text-teal">
                    {project.category}
                  </span>
                  <h3 className="mt-3 text-base font-bold text-navy">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ENVIRONMENTAL RESPONSIBILITY ========== */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5">
                <Leaf className="h-4 w-4 text-teal-light" />
                <span className="text-sm font-medium text-teal-light">
                  Environmental Commitment
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Protecting Namibia&apos;s Marine Environment
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-300">
                Environmental stewardship is at the core of everything we do. We
                ensure that all waste — from oily residues and hazardous
                materials to sewage and contaminated water — is handled,
                transported, and disposed of in strict compliance with national
                environmental standards.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-400">
                Our commitment extends beyond compliance. We actively work to
                minimize the environmental footprint of maritime and industrial
                operations through proper waste segregation, recycling where
                possible, and certified disposal practices that protect
                Namibia&apos;s coastline, marine ecosystems, and communities.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  stat: "100%",
                  label: "Regulatory Compliance",
                  sub: "All operations meet national standards",
                },
                {
                  stat: "Zero",
                  label: "Tolerance for Spills",
                  sub: "Strict containment protocols",
                },
                {
                  stat: "Full",
                  label: "Waste Documentation",
                  sub: "Complete audit trail for every job",
                },
                {
                  stat: "Active",
                  label: "Recycling Programme",
                  sub: "Waste oil recovery and recycling",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-2xl font-bold text-teal-light">
                    {item.stat}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT CTA ========== */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-br from-navy to-navy-light p-12 text-center shadow-2xl sm:p-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Work With a Trusted Partner?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
              Whether you need ship servicing, waste removal, tank cleaning, or
              environmental support — get in touch today for a professional
              consultation and competitive quote.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-teal px-8 py-4 text-base font-semibold text-white transition-all hover:bg-teal-dark hover:shadow-xl"
              >
                Request a Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:+264811221907"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                Call +264 81 122 1907
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
