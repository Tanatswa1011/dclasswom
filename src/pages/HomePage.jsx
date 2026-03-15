import { Link } from 'react-router-dom';
import { projects, services, strengths, trustStripClients } from '../data/siteContent';

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow">Namibia | Marine & Industrial Waste Solutions</p>
          <h1>Reliable Waste Oil Management and Marine Environmental Services</h1>
          <p>
            Diclas Waste Oil Management supports business clients with safe, responsive, and compliant services
            across marine, industrial, and mining operations.
          </p>
          <div className="hero-actions">
            <Link to="/contact#quote" className="btn">
              Request a Quote
            </Link>
            <Link to="/services" className="btn btn-outline-light">
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Client trust references">
        <div className="container trust-grid">
          <span className="trust-label">Trusted by marine and industrial clients:</span>
          {trustStripClients.map((client) => (
            <span key={client} className="trust-item">
              {client}
            </span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">What We Do</p>
            <h2>Core Services for Marine and Industrial Operations</h2>
          </div>
          <div className="card-grid card-grid-3">
            {services.slice(0, 6).map((service) => (
              <article key={service.title} className="card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
          <div className="center-actions">
            <Link to="/services" className="btn btn-outline-dark">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Why Diclas</p>
            <h2>Operational Strength You Can Depend On</h2>
          </div>
          <div className="card-grid card-grid-2">
            {strengths.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header split-header">
            <div>
              <p className="eyebrow">Projects</p>
              <h2>Field Experience Across Critical Operations</h2>
            </div>
            <Link to="/projects" className="text-link">
              View Full Gallery
            </Link>
          </div>
          <div className="project-preview-grid">
            {projects.slice(0, 3).map((project) => (
              <article key={project.title} className="project-card">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-info">
                  <p className="tag">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section environmental-section">
        <div className="container environmental-grid">
          <div>
            <p className="eyebrow">Environmental Responsibility</p>
            <h2>Safety and Environmental Care in Every Operation</h2>
            <p>
              Our goals are to deliver services that are safe and environmentally sound, conduct operations in an
              environmentally responsible manner, and maintain work environments where teams and clients can operate
              injury-free.
            </p>
            <p>
              We work together with customers to protect and improve the environment while upholding environmental
              principles in our day-to-day service delivery.
            </p>
          </div>
          <img src="/assets/images/environmental.jpg" alt="Environmental and marine service operation" loading="lazy" />
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-box">
          <h2>Need Fast, Dependable Waste Management Support?</h2>
          <p>
            Speak to our team about scheduled service, urgent operational support, or long-term waste management
            requirements.
          </p>
          <div className="hero-actions">
            <Link to="/contact#quote" className="btn">
              Request a Quote
            </Link>
            <Link to="/contact" className="btn btn-outline-dark">
              Contact Diclas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
