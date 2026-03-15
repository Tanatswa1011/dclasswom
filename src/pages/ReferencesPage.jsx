import { references } from '../data/siteContent';

function ReferencesPage() {
  return (
    <>
      <section className="page-hero references-hero">
        <div className="container">
          <p className="eyebrow">References</p>
          <h1>Trusted by Established Industry Clients</h1>
          <p>
            We are proud to support companies across marine, logistics, engineering, and industrial sectors.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Client References</h2>
          </div>

          <div className="reference-grid">
            {references.map((client) => (
              <article key={client} className="reference-card">
                <span>{client}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ReferencesPage;
