export type NavLink = {
  href: string;
  label: string;
};

export type ServiceItem = {
  title: string;
  description: string;
};

export type ProjectItem = {
  title: string;
  category: string;
  summary: string;
  image: string;
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/references", label: "References" },
  { href: "/contact", label: "Contact" },
];

export const company = {
  name: "Diclas Waste Oil Management",
  legalName: "Diclas Waste Oil Management cc",
  tagline: "Marine Waste Management & Environmental Services",
  base: "Walvis Bay, Namibia",
  address: [
    "Langer Heinrich Crescent, ERF 4442",
    "Industrial Area",
    "P.O. Box 4209",
    "Walvis Bay",
    "Erongo Region",
    "Namibia",
  ],
  phones: ["+264 81 401 8823", "+264 85 732 8348", "+264 81 243 3377"],
  emails: ["management1922@gmail.com", "management@diclaswom.com"],
  contacts: [
    {
      name: "Mr. Diclas Damien Matheus",
      role: "Managing Director",
      phone: "+264 81 401 8823",
      email: "management1922@gmail.com",
    },
    {
      name: "Mr. Trofimus I. Matheus",
      role: "Safety Officer",
      phone: "+264 81 243 3377",
      email: "ivanmathews4@gmail.com",
    },
  ],
  locationSummary:
    "Based in Walvis Bay's industrial area, the company is positioned close to port and marine activity and supports marine, industrial, and mining-related clients.",
  mapEmbed:
    "https://www.google.com/maps?q=Langer%20Heinrich%20Crescent%20ERF%204442%20Industrial%20Area%20Walvis%20Bay%20Namibia&output=embed",
};

export const quickFacts = [
  {
    value: "Walvis Bay",
    label: "Operational base in Namibia's marine and industrial hub",
  },
  {
    value: "24/7",
    label: "Client availability highlighted on the current site",
  },
  {
    value: "18 Clients",
    label: "Reference clients listed from marine and industrial sectors",
  },
];

export const homeHero = {
  eyebrow: "Namibian marine support and waste management operator",
  title: "Marine Waste Management and Environmental Services You Can Rely On",
  description:
    "Diclas Waste Oil Management cc supports marine, industrial, and related operations from Walvis Bay with dependable waste handling, tank cleaning, ship repair support, and environmentally responsible service delivery.",
  primaryCta: { href: "/contact#quote-form", label: "Request a Quote" },
  secondaryCta: { href: "/services", label: "View Services" },
  image: "/site-images/hero-shipyard.jpg",
};

export const homeIntro = {
  title: "Operational support built around client requirements",
  description:
    "The business is grounded in the original company focus: tailoring each scope to client requirements, reducing operational friction, and delivering work on time with the required quality.",
};

export const aboutContent = {
  overview: [
    "Diclas Waste Oil Management cc is a Namibian-owned company based in Walvis Bay, supporting marine operations and related industrial clients with waste removal, tank cleaning, ship repair support, and practical environmental services.",
    "The company was established to deliver dependable operational support to clients who require responsive field execution, clear communication, and service quality aligned with the agreed scope of work.",
  ],
  vision:
    "To grow as a dependable service partner for marine and industrial clients by maintaining responsive support, practical capability, and service standards that clients can rely on.",
  mission:
    "To customise every job to client requirements, create clear commercial value, reduce procurement and operating delays, and strengthen client relationships through timely, quality-focused delivery.",
  strengths: [
    "Strategically located in Walvis Bay's industrial area within working distance of customers and port operations",
    "Workshop and equipment arranged to keep core services in house",
    "Trained team focused on compliance, quality, and completion to scope",
    "Service capability aligned to marine industry needs with potential support for industrial and mining clients",
  ],
  serviceArea:
    "Primary operations are based in Walvis Bay, with service positioning aimed at marine industry clients as well as industrial and mining-related work where cleaning and waste handling support is required.",
};

export const whyChooseDiclas = [
  {
    title: "Marine and port-side understanding",
    description:
      "The company supports marine industry work in Walvis Bay and understands the practical demands of vessel-side and industrial operations.",
  },
  {
    title: "Responsive operational support",
    description:
      "Diclas positions itself as available around the clock for client coordination, urgent support, and scheduled service work.",
  },
  {
    title: "Quality delivered to scope",
    description:
      "The business emphasises service delivery that aligns with the agreed scope of work, client requirements, and expected end quality.",
  },
  {
    title: "Environmental and safety focus",
    description:
      "Existing company messaging consistently centres on safe procedures, responsible handling, and protecting both people and the environment.",
  },
];

export const services: ServiceItem[] = [
  {
    title: "Ship repair support",
    description:
      "Practical ship repair support for marine clients requiring dependable field assistance at dockside and in active operational environments.",
  },
  {
    title: "Waste removal",
    description:
      "Collection and removal services that help clients manage operational waste efficiently and keep working areas clear.",
  },
  {
    title: "Tank cleaning",
    description:
      "Cleaning of HFO tanks, fuel tanks, water tanks, and sewage tanks as part of planned maintenance or response work.",
  },
  {
    title: "Sewage discharge",
    description:
      "Controlled discharging support for sewage handling requirements linked to marine and industrial operations.",
  },
  {
    title: "Contaminated water discharge",
    description:
      "Removal and discharge support for contaminated water in line with operational and environmental handling requirements.",
  },
  {
    title: "Solid waste disposal",
    description:
      "Disposal support for solid waste streams generated by marine and industrial activity.",
  },
  {
    title: "Liquid waste disposal",
    description:
      "Handling and disposal support for liquid waste requiring organised transport and site management.",
  },
  {
    title: "Hazardous waste disposal",
    description:
      "Hazardous waste handling support with a strong emphasis on safe practices and responsible site execution.",
  },
  {
    title: "Fuel storage",
    description:
      "Fuel storage support as part of the company's broader operational and waste management service capability.",
  },
  {
    title: "Supply of sewage tanks",
    description:
      "Supply arrangements for sewage tanks needed in support of operational waste handling work.",
  },
  {
    title: "Supply of workers",
    description:
      "Provision of workers for client scopes that require dependable manpower support in the field.",
  },
];

export const serviceCategories = [
  {
    title: "Marine support services",
    text: "Ship repair support, dockside response, worker supply, and vessel-side operational assistance.",
  },
  {
    title: "Waste handling and disposal",
    text: "Waste removal plus disposal support for solid, liquid, and hazardous waste streams.",
  },
  {
    title: "Tank and system cleaning",
    text: "Cleaning support for HFO, fuel, water, and sewage tanks as part of maintenance and waste management work.",
  },
  {
    title: "Environmental services",
    text: "Sewage and contaminated water discharge support delivered with environmental responsibility in mind.",
  },
];

export const environmentalContent = {
  title: "Safe procedures. Responsible handling. Practical environmental protection.",
  description:
    "The company's environmental position is clear: deliver services that are safe and environmentally sound, conduct operations responsibly, and support working environments where employees and customers can work injury free.",
  points: [
    "Environmentally responsible service delivery",
    "Health and safety awareness in day-to-day operations",
    "Commitment to working with clients to protect and enhance the environment",
  ],
};

export const csrContent = {
  title: "Community responsibility remains part of the business approach",
  description:
    "The original company content highlights a broader responsibility to the community, including support for people with limited access to opportunity, mentoring for young people interested in the tank-cleaning sector, and a 2020 donation of cleaning materials to Walvis Bay State Hospital in response to the national COVID-19 call for support.",
};

export const references = [
  "Total Namibia",
  "Blue Sea Fishing",
  "Kraatz Marine",
  "Prax Engineering",
  "Desert Air Power",
  "Concord Plant & Crane Hire Namibia",
  "Skeleton Coast",
  "Deep Ocean Processors",
  "Manship Fishing",
  "Spanam Fishing",
  "Namibian Ports Authority",
  "Namdock",
  "Mariscos Rotriguez",
  "Bourbon",
  "Tide Water",
  "Pescasierras L",
  "Grupo Maroliv",
  "NovaNam Group",
];

export const featuredReferences = [
  "Namibian Ports Authority",
  "Namdock",
  "Total Namibia",
  "Blue Sea Fishing",
  "Kraatz Marine",
  "Bourbon",
];

export const projects: ProjectItem[] = [
  {
    title: "Shipyard support mobilised at dockside",
    category: "Marine Support",
    summary:
      "Operational support positioned directly alongside vessel and port activity in Walvis Bay.",
    image: "/site-images/dockside-support.jpg",
  },
  {
    title: "Field team deployed at port",
    category: "Waste Handling",
    summary:
      "On-site personnel and equipment supporting marine-side handling and service execution.",
    image: "/site-images/project-port-workers.jpg",
  },
  {
    title: "Tank component handling",
    category: "Tank Cleaning",
    summary:
      "Preparation and handling work connected to tank cleaning and maintenance scopes.",
    image: "/site-images/project-tank-component.jpg",
  },
  {
    title: "Internal tank cleaning conditions",
    category: "Tank Cleaning",
    summary:
      "Visual evidence from inside a tank-cleaning environment, showing the nature of specialist cleaning work.",
    image: "/site-images/project-tank-interior.jpg",
  },
  {
    title: "Dockside transfer and site support",
    category: "Environmental Services",
    summary:
      "Equipment and transport positioned for operational waste handling and transfer activity.",
    image: "/site-images/project-dockside-transfer.jpg",
  },
  {
    title: "Marine support vessel alongside quay",
    category: "Marine Support",
    summary:
      "Completed field activity presented in the company's project album as proof of port-side experience.",
    image: "/site-images/project-marine-barge.jpg",
  },
];

export const contactCallout =
  "Speak with the Diclas team for planned work, urgent support, or a tailored service quotation.";

export const seoDescriptions = {
  home: "Diclas Waste Oil Management cc is a Walvis Bay based Namibian company providing marine waste management, tank cleaning, ship repair support, and environmental services.",
  about:
    "Learn about Diclas Waste Oil Management cc, its mission, vision, operating strengths, and Walvis Bay service base.",
  services:
    "Explore Diclas Waste Oil Management services including ship repair support, waste removal, tank cleaning, sewage discharge, and hazardous waste disposal.",
  projects:
    "View completed work from Diclas Waste Oil Management and see examples of marine support, tank cleaning, and waste handling operations.",
  references:
    "Review reference clients of Diclas Waste Oil Management from marine, industrial, and port-related sectors.",
  contact:
    "Contact Diclas Waste Oil Management in Walvis Bay for quotations, operational support, and service enquiries.",
};
