import {
  Anchor,
  Target,
  Eye,
  Shield,
  MapPin,
  Users,
  Clock,
  Award,
  CheckCircle2,
  Globe,
  Truck,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Diclas Waste Oil Management",
  description:
    "Learn about Diclas Waste Oil Management — Namibia's trusted marine waste management and environmental services company based in Walvis Bay.",
};

const operationalStrengths = [
  {
    icon: Shield,
    title: "Full Regulatory Compliance",
    desc: "Every operation is conducted in accordance with Namibian environmental laws and maritime safety standards, with complete documentation and waste disposal certificates.",
  },
  {
    icon: Clock,
    title: "24/7 Operational Readiness",
    desc: "Our teams are available around the clock to respond to vessel arrivals, emergency waste handling, and time-critical marine service requirements.",
  },
  {
    icon: Users,
    title: "Experienced Personnel",
    desc: "Our workforce brings hands-on expertise in marine waste management, ship repair, tank cleaning, and hazardous material handling.",
  },
  {
    icon: Truck,
    title: "Equipped for Scale",
    desc: "We maintain a fleet of service vehicles, specialized equipment, and storage facilities to handle projects of any size efficiently.",
  },
  {
    icon: Award,
    title: "Quality-Driven Approach",
    desc: "We hold ourselves to the highest standards of service quality, from initial consultation through to final waste certification and reporting.",
  },
  {
    icon: Globe,
    title: "Regional Capability",
    desc: "While based in Walvis Bay, our operational reach extends across the Namibian coastline and inland industrial zones as required.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5">
              <Anchor className="h-4 w-4 text-teal-light" />
              <span className="text-sm font-medium text-teal-light">About Diclas</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Built on Operational Excellence &amp; Environmental Responsibility
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              Diclas Waste Oil Management (Pty) Ltd is a Namibian company
              specializing in marine waste management, ship services, and
              environmental solutions. Operating from Walvis Bay — the
              country&apos;s premier commercial port — we serve vessel
              operators, industrial clients, and port-side businesses with
              professionalism, reliability, and care for the environment.
            </p>
          </div>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-teal">
                Our Company
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                A Namibian Company Serving the Maritime Industry
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-600">
                <p>
                  Diclas Waste Oil Management was established to address the
                  growing need for professional, compliant waste management
                  services in Namibia&apos;s maritime and industrial sectors.
                  Based in Walvis Bay — home to one of Southern Africa&apos;s
                  busiest deep-water ports — we are uniquely positioned to serve
                  the vessels and industries that drive the regional economy.
                </p>
                <p>
                  Our services span the full lifecycle of marine and industrial
                  waste: from collection and removal through to transport,
                  treatment, and certified disposal. We also provide ship repair,
                  tank cleaning, fuel storage, and workforce supply — making us a
                  single point of contact for vessel operators and port-side
                  businesses.
                </p>
                <p>
                  Every project we undertake is guided by our commitment to
                  safety, environmental protection, and client satisfaction. We
                  work in close partnership with our clients to deliver tailored
                  solutions that meet their operational requirements while
                  ensuring full regulatory compliance.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-gray-50 p-8 lg:p-10">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10">
                      <Target className="h-5 w-5 text-teal" />
                    </div>
                    <h3 className="text-lg font-bold text-navy">Our Mission</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600">
                    To provide safe, efficient, and environmentally responsible
                    waste management and marine services that meet the highest
                    industry standards — protecting Namibia&apos;s natural
                    resources while supporting the operational needs of our
                    clients.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10">
                      <Eye className="h-5 w-5 text-teal" />
                    </div>
                    <h3 className="text-lg font-bold text-navy">Our Vision</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600">
                    To be Namibia&apos;s leading marine waste management and
                    environmental services provider — recognized for operational
                    excellence, environmental stewardship, and an unwavering
                    commitment to the communities and ecosystems we serve.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10">
                      <Shield className="h-5 w-5 text-teal" />
                    </div>
                    <h3 className="text-lg font-bold text-navy">Our Values</h3>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Safety in every operation",
                      "Environmental protection first",
                      "Integrity and transparency",
                      "Client-focused service delivery",
                      "Continuous improvement",
                    ].map((v) => (
                      <li key={v} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-teal" />
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPERATIONAL STRENGTHS */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal">
              Operational Strengths
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              What Sets Us Apart
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Our capabilities are built on experience, equipment, and an
              uncompromising approach to quality and safety.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {operationalStrengths.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <s.icon className="mb-4 h-8 w-8 text-teal" />
                <h3 className="mb-3 text-base font-bold text-navy">{s.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-teal">
                Location &amp; Service Area
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Strategically Based in Walvis Bay
              </h2>
              <p className="mt-6 text-base leading-relaxed text-gray-600">
                Our headquarters in Walvis Bay places us at the heart of
                Namibia&apos;s maritime industry. The Port of Walvis Bay is the
                country&apos;s largest commercial port and a critical gateway for
                Southern African trade — handling cargo, fishing, and offshore
                operations year-round.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                This strategic location enables us to provide rapid response
                times, efficient logistics, and direct access to vessels and
                port-side facilities. Our service area extends across the
                Namibian coastline and inland to industrial sites as needed.
              </p>
            </div>

            <div className="rounded-2xl bg-navy p-8 lg:p-10">
              <div className="space-y-6">
                {[
                  {
                    label: "Head Office",
                    value: "Walvis Bay, Erongo Region, Namibia",
                  },
                  {
                    label: "Primary Port",
                    value: "Port of Walvis Bay",
                  },
                  {
                    label: "Service Coverage",
                    value: "Namibian coastline, Walvis Bay, Lüderitz, and inland industrial zones",
                  },
                  {
                    label: "Availability",
                    value: "24 hours / 7 days a week",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 border-b border-white/10 pb-6 last:border-0 last:pb-0"
                  >
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal-light" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm text-white">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
