import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Diclas | Marine Environmental & Waste Management | Namibia",
  description:
    "Learn about Diclas Waste Oil Management — our vision, mission, operational strengths, and service area across Namibia and the southern African coast.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative py-24 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1568667256549-094345857637?w=1920&q=80"
            alt="Marine operations"
            fill
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy-900/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About Diclas
          </h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl">
            Marine environmental and waste management services built on
            experience, compliance, and operational excellence.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="section-heading">Company Overview</h2>
              <p className="text-slate-600 leading-relaxed mt-4">
                Diclas Waste Oil Management delivers specialised marine
                environmental and waste management services to vessels, port
                operators, and industrial clients across Namibia and the
                southern African coast. We combine technical expertise with
                rigorous safety and environmental standards to support
                maritime and industrial operations.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                Our services span tank cleaning, waste removal and disposal,
                ship repair, fuel storage, and sewage handling — providing
                clients with a single, dependable partner for their
                environmental and waste management needs.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1581091226033-d5c89720dc52?w=800&q=80"
                alt="Industrial operations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-16">
            Vision & Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-card">
              <h3 className="text-xl font-semibold text-navy-900 mb-4">
                Our Vision
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To be the trusted partner of choice for marine environmental
                and waste management services across the region, known for
                reliability, safety, and environmental responsibility.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-card">
              <h3 className="text-xl font-semibold text-navy-900 mb-4">
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To deliver safe, compliant, and efficient waste management and
                environmental support services that meet the highest industry
                standards, while protecting the marine environment and
                supporting our clients&apos; operational success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-16">
            Operational Strengths
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Trained Personnel",
                desc: "Skilled crews with documented training in safety procedures and waste handling.",
              },
              {
                title: "Compliance & Documentation",
                desc: "Full adherence to environmental and maritime regulations, with certificates and audit support.",
              },
              {
                title: "Equipment & Infrastructure",
                desc: "Dedicated equipment for tank cleaning, waste collection, and fuel storage.",
              },
              {
                title: "Rapid Response",
                desc: "Available to support vessels and clients when and where they need us.",
              },
              {
                title: "Proven Experience",
                desc: "Years of field experience serving shipping and industrial clients.",
              },
              {
                title: "Environmental Stewardship",
                desc: "Processes designed to minimise environmental impact and support sustainability.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-slate-200 hover:border-teal-accent/30 transition-colors"
              >
                <h3 className="font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-white text-center mb-12">
            Location & Service Area
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-slate-300 text-lg leading-relaxed">
                Based in Walvis Bay, Namibia, we serve port and marine
                operations along the Namibian coast and the wider southern
                African region. Our location positions us to respond quickly
                to vessels calling at Walvis Bay and neighbouring ports.
              </p>
              <p className="mt-4 text-slate-300 text-lg leading-relaxed">
                We work with shipping lines, port authorities, offshore
                operators, and industrial clients who require professional
                waste management and environmental services.
              </p>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-navy-800">
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                alt="Walvis Bay port"
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-navy-900">
            Want to Learn More?
          </h2>
          <p className="mt-4 text-slate-600">
            Explore our services or get in touch for a detailed discussion.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="btn-primary">
              View Services
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
