import Link from "next/link";

import { PageHero, SectionIntro } from "@/components/site-shell";
import {
  contactCallout,
  environmentalContent,
  featuredReferences,
  homeHero,
  homeIntro,
  projects,
  quickFacts,
  serviceCategories,
  services,
  whyChooseDiclas,
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow={homeHero.eyebrow}
        title={homeHero.title}
        description={homeHero.description}
        image={homeHero.image}
        cta={homeHero.primaryCta}
        secondaryCta={homeHero.secondaryCta}
      />

      <section className="page-section">
        <div className="container">
          <div className="stat-grid">
            {quickFacts.map((fact) => (
              <article key={fact.value} className="stat-card">
                <strong>{fact.value}</strong>
                <p>{fact.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section dark-surface">
        <div className="container">
          <SectionIntro
            eyebrow="Trusted by clients from the existing Diclas reference list"
            title="A stronger digital presence built on real operational proof"
            description="The current Diclas website lists reference clients across port, marine, engineering, fishing, and industrial sectors. That client mix is now presented in a clearer, more credible B2B format."
          />
          <div className="logo-strip">
            {featuredReferences.map((reference) => (
              <div key={reference} className="logo-pill">
                {reference}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section alt-surface">
        <div className="container">
          <SectionIntro
            eyebrow="Services overview"
            title={homeIntro.title}
            description={homeIntro.description}
          />
          <div className="service-grid">
            {services.slice(0, 6).map((service) => (
              <article key={service.title} className="card">
                <span className="card-tag">Service</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <Link href="/services" className="button button-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionIntro
            eyebrow="Why choose Diclas"
            title="Reliable field execution with a direct, practical service approach"
            description="Diclas was originally positioned around customising client requirements, creating commercial value, and improving service quality. The redesigned brand sharpens that message into clear B2B decision points."
          />
          <div className="feature-grid">
            {whyChooseDiclas.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section alt-surface">
        <div className="container">
          <SectionIntro
            eyebrow="Projects gallery"
            title="Completed work that reinforces field experience"
            description="The project gallery uses operational photos from the existing Diclas website and presents them as proof of marine support, tank cleaning, and waste-handling experience."
          />
          <div className="project-grid">
            {projects.slice(0, 3).map((project) => (
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
          <div style={{ marginTop: "1.5rem" }}>
            <Link href="/projects" className="button button-primary">
              View Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container split-section">
          <div className="content-block">
            <span className="eyebrow">Environmental responsibility</span>
            <h2>{environmentalContent.title}</h2>
            <p>{environmentalContent.description}</p>
            <ul>
              {environmentalContent.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="service-grid">
              {serviceCategories.slice(0, 2).map((category) => (
                <article key={category.title} className="card">
                  <h3>{category.title}</h3>
                  <p>{category.text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="image-frame">
            <img
              src="/site-images/project-marine-barge.jpg"
              alt="Marine support vessel at port in Walvis Bay"
            />
          </div>
        </div>
      </section>

      <section className="page-section dark-surface">
        <div className="container">
          <div className="band-cta">
            <div>
              <span className="eyebrow">Contact Diclas</span>
              <h2>Need dependable support for a vessel, site, or waste-handling requirement?</h2>
              <p>{contactCallout}</p>
            </div>
            <div className="hero-actions">
              <Link href="/contact#quote-form" className="button button-primary">
                Request a Quote
              </Link>
              <Link href="/contact" className="button button-secondary">
                Contact Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
