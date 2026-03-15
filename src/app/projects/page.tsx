import { Anchor } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Diclas Waste Oil Management",
  description:
    "View completed projects and field operations by Diclas Waste Oil Management — tank cleaning, waste disposal, ship repair, and environmental services across Namibia.",
};

const categories = [
  "All",
  "Tank Cleaning",
  "Waste Management",
  "Ship Repair",
  "Environmental",
  "Fuel & Storage",
];

const projects = [
  {
    title: "Commercial Vessel HFO Tank Cleaning",
    category: "Tank Cleaning",
    desc: "Complete heavy fuel oil tank cleaning for a fleet of commercial cargo vessels at the Port of Walvis Bay. Included gas-free certification and certified sludge disposal.",
    scope: "5 vessels serviced over 3 weeks",
    location: "Walvis Bay Port",
  },
  {
    title: "Fishing Fleet Waste Removal",
    category: "Waste Management",
    desc: "Scheduled waste collection and removal services for a large fishing fleet, handling oily residues, solid waste, and sewage across multiple berthing rotations.",
    scope: "Ongoing contract — 15+ vessels",
    location: "Walvis Bay Harbour",
  },
  {
    title: "Vessel Structural & Hull Repair",
    category: "Ship Repair",
    desc: "Emergency structural repairs and hull maintenance on a commercial vessel requiring rapid turnaround to meet sailing schedule.",
    scope: "Completed in 5 working days",
    location: "Walvis Bay",
  },
  {
    title: "Port-Side Hazardous Waste Disposal",
    category: "Environmental",
    desc: "Collection, transport, and certified disposal of hazardous waste materials from port-side industrial operations, including chemical containers and contaminated materials.",
    scope: "Full chain-of-custody documentation",
    location: "Walvis Bay Industrial Area",
  },
  {
    title: "Marine Sewage Discharge Operations",
    category: "Environmental",
    desc: "Licensed sewage pump-out and compliant discharge services for cargo and passenger vessels entering Walvis Bay for scheduled port calls.",
    scope: "Ongoing service contract",
    location: "Walvis Bay Port",
  },
  {
    title: "Fuel Storage Facility Management",
    category: "Fuel & Storage",
    desc: "Secure storage and inventory management of marine fuel for vessel operators, including spill containment monitoring and regulatory compliance reporting.",
    scope: "Continuous operations",
    location: "Walvis Bay",
  },
  {
    title: "Industrial Wastewater Disposal",
    category: "Waste Management",
    desc: "Safe collection and disposal of contaminated wastewater from marine vessel bilge and ballast operations, with full environmental compliance.",
    scope: "Multiple vessel servicing",
    location: "Walvis Bay Port",
  },
  {
    title: "Vessel Fuel & Water Tank Cleaning",
    category: "Tank Cleaning",
    desc: "Comprehensive cleaning of diesel fuel tanks and freshwater tanks on a mid-size cargo vessel, including residue removal, cleaning, and tank inspection preparation.",
    scope: "Completed in 48 hours",
    location: "Walvis Bay",
  },
  {
    title: "Offshore Support Vessel Services",
    category: "Ship Repair",
    desc: "Multi-service contract for an offshore support vessel including engine maintenance, tank cleaning, waste removal, and crew supply during extended port stay.",
    scope: "Full-service engagement — 2 weeks",
    location: "Walvis Bay Offshore Terminal",
  },
  {
    title: "Solid Waste Collection — Industrial Zone",
    category: "Waste Management",
    desc: "Systematic collection and certified disposal of solid waste from multiple industrial operators in the Walvis Bay port zone.",
    scope: "Monthly service contract",
    location: "Walvis Bay Industrial Area",
  },
  {
    title: "Contaminated Water Processing",
    category: "Environmental",
    desc: "Processing and safe disposal of contaminated water from vessel operations, including assessment, treatment, and environmental reporting.",
    scope: "Per-vessel service",
    location: "Walvis Bay Port",
  },
  {
    title: "Workforce Deployment — Port Operations",
    category: "Waste Management",
    desc: "Supply of trained workers for port-side waste handling, vessel cleaning, and general marine operations during peak operational periods.",
    scope: "Seasonal deployment — 20+ workers",
    location: "Walvis Bay",
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-light">
              Our Projects
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Proven Track Record in the Field
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              Every project we complete reinforces our expertise and
              reliability. Explore a selection of our completed operations —
              from large-scale tank cleaning to hazardous waste disposal and
              vessel maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="border-b border-gray-200 bg-white sticky top-18 lg:top-20 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`shrink-0 cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  cat === "All"
                    ? "bg-navy text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-navy/10 to-teal/10 flex items-center justify-center">
                  <Anchor className="h-12 w-12 text-navy/15" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-2 inline-block w-fit rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold text-teal">
                    {project.category}
                  </span>
                  <h3 className="mb-2 text-base font-bold text-navy">
                    {project.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-500">
                    {project.desc}
                  </p>
                  <div className="border-t border-gray-100 pt-4 space-y-1">
                    <p className="text-xs text-gray-400">
                      <span className="font-semibold text-gray-500">Scope:</span>{" "}
                      {project.scope}
                    </p>
                    <p className="text-xs text-gray-400">
                      <span className="font-semibold text-gray-500">Location:</span>{" "}
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
