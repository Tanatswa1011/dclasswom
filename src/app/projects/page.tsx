import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Projects | Diclas Waste Oil Management | Completed Work Gallery",
  description:
    "View our completed projects in tank cleaning, waste removal, and marine environmental services. Field-proven capabilities across Namibia and the region.",
};

const projects = [
  {
    id: 1,
    title: "HFO Tank Cleaning — Bulk Carrier",
    category: "Tank Cleaning",
    description: "Full tank cleaning and sludge removal for a bulk carrier at Walvis Bay.",
    img: "https://images.unsplash.com/photo-1581091226033-d5c89720dc52?w=800&q=80",
  },
  {
    id: 2,
    title: "Industrial Waste Handling — Port Facility",
    category: "Waste Management",
    description: "Waste collection and disposal services for a major port facility.",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
  },
  {
    id: 3,
    title: "Sewage Discharge — Fishing Vessel",
    category: "Sewage Services",
    description: "Compliant sewage discharge and tank supply for fishing fleet operations.",
    img: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&q=80",
  },
  {
    id: 4,
    title: "Contaminated Water Disposal — Offshore Support",
    category: "Liquid Waste",
    description: "Oily water and contaminated water disposal for offshore support vessels.",
    img: "https://images.unsplash.com/photo-1568667256549-094345857637?w=800&q=80",
  },
  {
    id: 5,
    title: "Fuel Tank Cleaning — Tanker",
    category: "Tank Cleaning",
    description: "Fuel tank cleaning and preparation for a tanker vessel.",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
  },
  {
    id: 6,
    title: "Solid Waste Removal — Marine Operations",
    category: "Solid Waste",
    description: "Comprehensive solid waste removal and disposal for marine clients.",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Projects
          </h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl">
            Field-proven capabilities. Our completed work demonstrates our
            expertise in marine environmental and waste management services.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-teal-accent rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-semibold text-navy-900 text-lg">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-slate-600 text-sm">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-navy-900">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-slate-600">
            Contact us to discuss how we can support your operational needs.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
