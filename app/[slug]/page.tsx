import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContactForm, PageHero, SectionIntro } from "@/components/site-shell";
import {
  aboutContent,
  company,
  contactCallout,
  csrContent,
  environmentalContent,
  projects,
  references,
  seoDescriptions,
  serviceCategories,
  services,
} from "@/lib/site-data";

const supportedSlugs = ["about", "services", "projects", "references", "contact"] as const;
type SupportedSlug = (typeof supportedSlugs)[number];

const pageSettings: Record<
  SupportedSlug,
  { title: string; description: string; image: string }
> = {
  about: {
    title: "About Diclas",
    description:
      "A clearer view of the company, its operating strengths, and its service position in Walvis Bay.",
    image: "/site-images/dockside-support.jpg",
  },
  services: {
    title: "Services",
    description:
      "Waste management, tank cleaning, ship repair support, and related environmental services for business clients.",
    image: "/site-images/project-port-workers.jpg",
  },
  projects: {
    title: "Projects",
    description:
      "Operational photos from completed work presented as proof of marine and environmental service experience.",
    image: "/site-images/project-dockside-transfer.jpg",
  },
  references: {
    title: "References",
    description:
      "Client references from the current Diclas site, presented in a cleaner and more professional format.",
    image: "/site-images/hero-shipyard.jpg",
  },
  contact: {
    title: "Contact",
    description:
      "Reach the Diclas team for quotations, operational support, and site or vessel service requirements.",
    image: "/site-images/project-marine-barge.jpg",
  },
};

export function generateStaticParams() {
  return supportedSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (!supportedSlugs.includes(slug as SupportedSlug)) {
    return {};
  }

  const page = pageSettings[slug as SupportedSlug];

  return {
    title: page.title,
    description: seoDescriptions[slug as keyof typeof seoDescriptions],
  };
}

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the company"
        title={pageSettings.about.title}
        description={pageSettings.about.description}
        image={pageSettings.about.image}
        compact
        cta={{ href: "/contact#quote-form", label: "Request a Quote" }}
      />

      <section className="page-section">
        <div className="container split-section">
          <div className="content-block">
            <span className="eyebrow">Company overview</span>
            <h2>Namibian-owned operational support for marine and waste-management work</h2>
            {aboutContent.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="image-frame">
            <img
              src="/site-images/dockside-support.jpg"
              alt="Diclas support vehicle positioned dockside"
            />
          </div>
        </div>
      </section>

      <section className="page-section alt-surface">
        <div className="container">
          <div className="feature-grid">
            <article className="card">
              <span className="card-tag">Vision</span>
              <h3>Built for dependable long-term client relationships</h3>
              <p>{aboutContent.vision}</p>
            </article>
            <article className="card">
              <span className="card-tag">Mission</span>
              <h3>Focused on value, responsiveness, and service quality</h3>
              <p>{aboutContent.mission}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container info-grid">
          <article className="callout-panel">
            <span className="eyebrow">Operational strengths</span>
            <h3>Positioned to support work close to the customer</h3>
            <ul className="contact-list">
              {aboutContent.strengths.map((strength) => (
                <li key={strength}>{strength}</li>
              ))}
            </ul>
          </article>
          <article className="callout-panel">
            <span className="eyebrow">Location and service area</span>
            <h3>Walvis Bay base with marine, industrial, and mining alignment</h3>
            <p>{company.locationSummary}</p>
            <p>{aboutContent.serviceArea}</p>
          </article>
        </div>
      </section>

      <section className="page-section dark-surface">
        <div className="container">
          <div className="band-cta">
            <div>
              <span className="eyebrow">Corporate responsibility</span>
              <h2>{csrContent.title}</h2>
              <p>{csrContent.description}</p>
            </div>
            <Link href="/contact" className="button button-secondary">
              Speak with the team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Business services"
        title={pageSettings.services.title}
        description={pageSettings.services.description}
        image={pageSettings.services.image}
        compact
        cta={{ href: "/contact#quote-form", label: "Request a Quote" }}
      />

      <section className="page-section">
        <div className="container">
          <SectionIntro
            eyebrow="Core scope"
            title="Marine, waste-management, and tank-cleaning services"
            description="Each service below is grounded in the original Diclas website content and rewritten into clearer business English for procurement and operations teams."
          />
          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="card">
                <span className="card-tag">Service</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section alt-surface">
        <div className="container">
          <SectionIntro
            eyebrow="Service groups"
            title="Structured for industrial and marine decision-makers"
            description="The service mix can be understood across four practical categories that align with the company's current market position."
          />
          <div className="feature-grid">
            {serviceCategories.map((category) => (
              <article key={category.title} className="card">
                <h3>{category.title}</h3>
                <p>{category.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section dark-surface">
        <div className="container">
          <div className="band-cta">
            <div>
              <span className="eyebrow">Operational response</span>
              <h2>Need waste handling, tank cleaning, or ship-side support?</h2>
              <p>{contactCallout}</p>
            </div>
            <Link href="/contact#quote-form" className="button button-primary">
              Request service support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Completed work"
        title={pageSettings.projects.title}
        description={pageSettings.projects.description}
        image={pageSettings.projects.image}
        compact
        cta={{ href: "/contact#quote-form", label: "Discuss a Project" }}
      />

      <section className="page-section">
        <div className="container">
          <SectionIntro
            eyebrow="Proof of field experience"
            title="A more professional gallery layout for real operational imagery"
            description="These images are drawn from the existing Diclas project album and now presented with cleaner categorisation and captions to support trust with business clients."
          />
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-card-body">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section alt-surface">
        <div className="container split-section">
          <div className="content-block">
            <span className="eyebrow">Project value</span>
            <h2>Field imagery that supports credibility</h2>
            <p>
              For a service business in the marine and waste-management space,
              visible proof of real operating conditions matters. This gallery
              shifts the presentation from an outdated album into a clearer
              business case for capability and experience.
            </p>
            <ul>
              <li>Marine support activity in and around port operations</li>
              <li>Tank cleaning and associated handling work</li>
              <li>Operational waste transfer and environmental service tasks</li>
            </ul>
          </div>
          <div className="image-frame">
            <img
              src="/site-images/project-dockside-transfer.jpg"
              alt="Dockside transfer equipment and support vehicle"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ReferencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Reference clients"
        title={pageSettings.references.title}
        description={pageSettings.references.description}
        image={pageSettings.references.image}
        compact
        cta={{ href: "/contact#quote-form", label: "Request a Quote" }}
      />

      <section className="page-section">
        <div className="container">
          <SectionIntro
            eyebrow="Client references"
            title="Presented in a cleaner and more credible format"
            description="The current Diclas website lists clients across marine, fishing, engineering, port, and industrial-related work. Here, they are displayed as a polished reference grid to reinforce trust."
          />
          <div className="reference-grid">
            {references.map((reference) => (
              <article key={reference} className="reference-card">
                <h3>{reference}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section dark-surface">
        <div className="container">
          <div className="band-cta">
            <div>
              <span className="eyebrow">Why references matter</span>
              <h2>Business clients need visible proof before they enquire</h2>
              <p>
                A reference section should help buyers understand that Diclas is
                already known by operators in the market. This layout gives that
                proof more weight than the original brochure-style presentation.
              </p>
            </div>
            <Link href="/projects" className="button button-secondary">
              View project gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact the team"
        title={pageSettings.contact.title}
        description={pageSettings.contact.description}
        image={pageSettings.contact.image}
        compact
      />

      <section className="page-section">
        <div className="container info-grid">
          <article className="contact-panel">
            <span className="eyebrow">Direct contact details</span>
            <h3>Operational enquiries, planned work, and quotations</h3>
            <p>{contactCallout}</p>
            <ul className="contact-list">
              {company.contacts.map((contact) => (
                <li key={contact.email}>
                  <strong>
                    {contact.name} - {contact.role}
                  </strong>
                  <a href={`tel:${contact.phone.replace(/\s+/g, "")}`}>
                    {contact.phone}
                  </a>
                  <br />
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
              ))}
            </ul>
            <ul className="contact-list">
              {company.address.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </article>

          <article className="contact-panel">
            <span className="eyebrow">Request a quote</span>
            <h3>Tell Diclas about your requirement</h3>
            <ContactForm />
          </article>
        </div>
      </section>

      <section className="page-section alt-surface">
        <div className="container info-grid">
          <article className="callout-panel">
            <span className="eyebrow">Location and service area</span>
            <h3>Walvis Bay industrial area</h3>
            <p>{company.locationSummary}</p>
            <p>
              {environmentalContent.description} For urgent matters, the current
              site states that the team is available 24/7.
            </p>
          </article>
          <div className="map-frame">
            <iframe
              src={company.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Diclas Waste Oil Management location map"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default async function DetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!supportedSlugs.includes(slug as SupportedSlug)) {
    notFound();
  }

  switch (slug as SupportedSlug) {
    case "about":
      return <AboutPage />;
    case "services":
      return <ServicesPage />;
    case "projects":
      return <ProjectsPage />;
    case "references":
      return <ReferencesPage />;
    case "contact":
      return <ContactPage />;
    default:
      notFound();
  }
}
