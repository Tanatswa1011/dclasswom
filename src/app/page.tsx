import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1568667256549-094345857637?w=1920&q=80"
            alt="Marine port operations"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy-900/70 z-10" />
        </div>
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Trusted Marine Environmental & Waste Management Services in Namibia
          </h1>
          <p className="mt-6 text-xl text-slate-200 max-w-2xl mx-auto">
            We deliver safe, compliant tank cleaning, waste removal, and
            environmental support for vessels and port operations. Reliable
            service, rapid response, and full regulatory compliance.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?action=quote" className="btn-primary">
              Request a Quote
            </Link>
            <Link href="/services" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-navy-900">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-slate-600 uppercase tracking-wider mb-8">
            Trusted by shipping lines, port authorities, and industrial clients
            across the southern African coast
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            <span className="text-lg font-semibold text-navy-800">Shipping Lines</span>
            <span className="text-lg font-semibold text-navy-800">Port Authorities</span>
            <span className="text-lg font-semibold text-navy-800">Marine Operators</span>
            <span className="text-lg font-semibold text-navy-800">Industrial Clients</span>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading">Comprehensive Marine & Industrial Services</h2>
          <p className="section-subheading mb-12">
            From tank cleaning and waste disposal to ship repair and fuel
            storage, we provide end-to-end solutions for vessels and
            port-based operations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Tank Cleaning",
                desc: "HFO, fuel, water, and sewage tanks — safe and compliant.",
                icon: "🛢️",
              },
              {
                title: "Waste Removal",
                desc: "Solid, liquid, and hazardous waste disposal services.",
                icon: "🗑️",
              },
              {
                title: "Ship Repair",
                desc: "Professional ship repair and maintenance support.",
                icon: "⚓",
              },
              {
                title: "Environmental Services",
                desc: "Sewage discharge, contaminated water, fuel storage.",
                icon: "🌊",
              },
            ].map((card) => (
              <Link
                key={card.title}
                href="/services"
                className="group bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-200 border border-slate-100 hover:border-teal-accent/20"
              >
                <span className="text-2xl mb-3 block">{card.icon}</span>
                <h3 className="font-semibold text-navy-900 group-hover:text-teal-accent transition-colors">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{card.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Diclas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading">Why Business Clients Choose Diclas</h2>
          <p className="section-subheading mb-16">
            We combine operational expertise with rigorous standards to deliver
            dependable service every time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Safety-First Operations",
                desc: "Trained crews and documented procedures for every job.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: "Regulatory Compliance",
                desc: "Full adherence to environmental and maritime regulations.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Rapid Response",
                desc: "Available when you need support at port or in transit.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Proven Track Record",
                desc: "Years of field experience in marine and industrial waste management.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-start"
              >
                <div className="p-3 rounded-lg bg-teal-accent/10 text-teal-accent">
                  {item.icon}
                </div>
                <h3 className="mt-4 font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading">Field-Proven Capabilities</h2>
          <p className="section-subheading mb-12">
            See how we support vessels and industrial clients with tank cleaning,
            waste removal, and environmental services across the region.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: "https://images.unsplash.com/photo-1581091226033-d5c89720dc52?w=600&q=80",
                title: "Tank Cleaning Operations",
                category: "Tank Cleaning",
              },
              {
                img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
                title: "Industrial Waste Handling",
                category: "Waste Management",
              },
              {
                img: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=600&q=80",
                title: "Port-Side Services",
                category: "Marine Support",
              },
            ].map((project) => (
              <Link
                key={project.title}
                href="/projects"
                className="group block rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/50 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <span className="text-xs font-medium text-teal-light uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="font-semibold mt-1">{project.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/projects" className="btn-primary">
              View Full Projects Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Environmental Responsibility */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Committed to Environmental Stewardship
              </h2>
              <p className="mt-6 text-slate-300 text-lg leading-relaxed">
                We handle every waste stream with care — from oily water and
                sewage to hazardous materials. Our processes meet international
                standards and support sustainable port and marine operations in
                Namibia and beyond.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Full compliance with environmental regulations",
                  "Safe handling and disposal of hazardous materials",
                  "Documented procedures for auditing and transparency",
                  "Support for sustainable maritime operations",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-teal-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80"
                alt="Environmental conservation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-teal-accent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Ready to Work Together?
          </h2>
          <p className="mt-4 text-teal-100 text-lg">
            Contact our team for a quote, service details, or site-specific
            support. We respond promptly and tailor solutions to your
            operational needs.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 font-semibold text-teal-accent bg-white rounded-lg hover:bg-slate-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/contact?action=quote"
              className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
