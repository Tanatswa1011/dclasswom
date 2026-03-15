import Link from "next/link";

export const metadata = {
  title: "References | Diclas Waste Oil Management | Client References",
  description:
    "Trusted by shipping lines, port authorities, and industrial clients. View our client references and proven track record.",
};

const references = [
  {
    name: "Shipping Lines",
    description: "Major shipping and maritime operators",
  },
  {
    name: "Port Authorities",
    description: "Port management and harbour authorities",
  },
  {
    name: "Marine Operators",
    description: "Offshore and marine service providers",
  },
  {
    name: "Industrial Clients",
    description: "Industrial and manufacturing facilities",
  },
  {
    name: "Fishing Fleet",
    description: "Commercial fishing and vessel operators",
  },
  {
    name: "Offshore Support",
    description: "Offshore support vessel operators",
  },
];

export default function ReferencesPage() {
  return (
    <>
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            References
          </h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl">
            Trusted by industry leaders across shipping, ports, and industrial
            operations. We deliver reliable service when it matters.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-16">
            Diclas serves shipping lines, port authorities, marine operators,
            and industrial clients across Namibia and the southern African
            coast. Our clients rely on us for safe, compliant, and timely
            waste management and environmental services.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {references.map((ref) => (
              <div
                key={ref.name}
                className="bg-white rounded-xl p-8 shadow-card border border-slate-100 hover:border-teal-accent/20 transition-colors"
              >
                <div className="h-16 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-teal-accent/40">
                    {ref.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-navy-900 text-center">
                  {ref.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600 text-center">
                  {ref.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-navy-900">
            Become a Reference Client
          </h2>
          <p className="mt-4 text-slate-600">
            Contact us to discuss how we can support your operations and join
            our roster of satisfied clients.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
            <Link href="/services" className="btn-secondary">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
