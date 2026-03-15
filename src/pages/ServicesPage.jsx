import { Link } from 'react-router-dom';
import { services } from '../data/siteContent';

function ServicesPage() {
  return (
    <>
      <section className="page-hero services-hero">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1>Industrial-Grade Support Across Waste and Marine Operations</h1>
          <p>
            We provide an extensive range of waste management and marine support services designed to keep operations
            safe, compliant, and efficient.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Complete Service Scope</h2>
            <p>Solutions aligned to day-to-day operational requirements in marine, industrial, and mining sectors.</p>
          </div>
          <div className="card-grid card-grid-3">
            {services.map((service) => (
              <article key={service.title} className="card service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container cta-box compact">
          <h2>Need a Service Plan Tailored to Your Site?</h2>
          <p>
            Tell us your operational requirements and timelines. We will prepare a practical support plan and quotation.
          </p>
          <Link to="/contact#quote" className="btn">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
