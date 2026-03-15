import Link from "next/link";

export const metadata = {
  title: "Services | Diclas Waste Oil Management | Marine Environmental Services",
  description:
    "Marine and industrial services: tank cleaning, waste removal, ship repair, sewage discharge, fuel storage, and more. Full-service support for vessels and port operations.",
};

const services = [
  {
    id: "ship-repair",
    title: "Ship Repair",
    description:
      "Professional ship repair and maintenance support for vessels calling at port. Our trained teams provide reliable repair services to keep your operations running smoothly.",
  },
  {
    id: "waste-removal",
    title: "Waste Removal",
    description:
      "Comprehensive waste removal services for vessels and industrial sites. We collect, transport, and handle all waste streams in compliance with environmental regulations.",
  },
  {
    id: "tank-cleaning",
    title: "Tank Cleaning",
    description:
      "Specialised tank cleaning for HFO (Heavy Fuel Oil), fuel, water, and sewage tanks. Safe, thorough cleaning with documented procedures and environmental compliance.",
  },
  {
    id: "discharging-sewage",
    title: "Discharging of Sewage",
    description:
      "Regulated sewage discharge services for vessels. We ensure compliant handling and disposal in accordance with maritime and environmental standards.",
  },
  {
    id: "discharging-contaminated-water",
    title: "Discharging of Contaminated Water",
    description:
      "Safe disposal of oily and contaminated water from vessels and industrial facilities. Full documentation and regulatory compliance for every discharge.",
  },
  {
    id: "solid-waste",
    title: "Disposal of Solid Waste",
    description:
      "Efficient disposal of solid waste from vessels and industrial operations. Segregation, collection, and compliant disposal of all solid waste streams.",
  },
  {
    id: "liquid-waste",
    title: "Disposal of Liquid Waste",
    description:
      "Professional handling and disposal of liquid waste. We manage oily water, slops, and other liquid waste streams with full environmental compliance.",
  },
  {
    id: "hazardous-waste",
    title: "Disposal of Hazardous Waste",
    description:
      "Specialised disposal of hazardous waste in compliance with international and local regulations. Safe handling, transport, and certified disposal.",
  },
  {
    id: "fuel-storage",
    title: "Storage of Fuel",
    description:
      "Secure fuel storage solutions for vessels and industrial clients. Reliable storage infrastructure with proper safety and environmental controls.",
  },
  {
    id: "sewage-tanks",
    title: "Supply of Sewage Tanks",
    description:
      "Supply of sewage tanks and related equipment for vessels and facilities. We provide the infrastructure you need for compliant sewage handling.",
  },
  {
    id: "workers-supply",
    title: "Supply of Workers",
    description:
      "Supply of trained workers for maritime and industrial operations. Skilled personnel for tank cleaning, waste handling, and general support services.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Our Services
          </h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl">
            End-to-end marine environmental and waste management services for
            vessels and port-based operations. Safe, compliant, and reliable.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24 bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                  <span className="text-4xl font-bold text-teal-accent/30 mb-4 md:mb-0 md:w-16 text-center md:text-left">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold text-navy-900">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-navy-900">
            Need a Custom Solution?
          </h2>
          <p className="mt-4 text-slate-600">
            Contact us to discuss your specific requirements and receive a
            tailored quote.
          </p>
          <div className="mt-8">
            <Link href="/contact?action=quote" className="btn-primary">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
