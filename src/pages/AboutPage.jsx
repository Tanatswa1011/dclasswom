import { companyInfo, strengths } from '../data/siteContent';

function AboutPage() {
  return (
    <>
      <section className="page-hero about-hero">
        <div className="container">
          <p className="eyebrow">About Diclas</p>
          <h1>Namibian-Owned, Operationally Focused, Client-Driven</h1>
          <p>
            Diclas Waste Oil Management CC is a Namibian-owned company providing marine environmental and waste
            management services to clients that require safe, practical, and reliable execution.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container text-grid">
          <article>
            <h2>Company Overview</h2>
            <p>
              From our Walvis Bay base, we support marine, industrial, and mining clients with service solutions that
              match operational realities in the field. Our approach is direct: understand the requirement, execute to
              scope, and deliver quality work on time.
            </p>
            <p>
              We focus on long-term business relationships by helping clients reduce procurement pressure while
              improving end-user outcomes.
            </p>
          </article>
          <article>
            <h2>Vision and Mission</h2>
            <h3>Vision</h3>
            <p>
              To be a trusted and established service partner that consistently accommodates client requirements and
              grows through reliable performance.
            </p>
            <h3>Mission</h3>
            <p>
              To customize services around each client’s needs and create measurable commercial value through safe
              execution, dependable response, and quality delivery.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Operational Strengths</p>
            <h2>Built for Service Reliability</h2>
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
        <div className="container text-grid">
          <article>
            <h2>Location and Service Area</h2>
            <p>{companyInfo.locationSummary}</p>
            <p>
              We primarily support the marine industry and also serve industrial and mining clients requiring cleaning
              and waste management solutions.
            </p>
          </article>
          <article className="info-panel">
            <h3>Head Office Address</h3>
            <p>{companyInfo.addressLines.join(', ')}</p>
            <h3>Main Contacts</h3>
            <p>{companyInfo.primaryContact}</p>
            <p>{companyInfo.secondaryContact}</p>
          </article>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
