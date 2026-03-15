import { companyInfo } from '../data/siteContent';

function ContactPage() {
  return (
    <>
      <section className="page-hero contact-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Get in Touch with Diclas</h1>
          <p>
            We are available to support your operational requirements. Contact us for urgent service requests,
            quotations, and long-term support planning.
          </p>
        </div>
      </section>

      <section className="section" id="quote">
        <div className="container contact-grid">
          <article>
            <h2>Contact Details</h2>
            <p>
              <strong>Address:</strong> {companyInfo.addressLines.join(', ')}
            </p>
            <p>
              <strong>Phone:</strong> {companyInfo.phoneNumbers.join(' / ')}
            </p>
            <p>
              <strong>Email:</strong> {companyInfo.emails.join(' / ')}
            </p>
            <p>
              <strong>Managing Director:</strong> {companyInfo.primaryContact}
            </p>
            <p>
              <strong>Safety Officer:</strong> {companyInfo.secondaryContact}
            </p>
          </article>

          <article>
            <h2>Request a Quote</h2>
            <form className="contact-form">
              <label htmlFor="company">Company Name</label>
              <input id="company" name="company" type="text" placeholder="Your company" required />

              <label htmlFor="name">Contact Person</label>
              <input id="name" name="name" type="text" placeholder="Your name" required />

              <label htmlFor="email">Email Address</label>
              <input id="email" name="email" type="email" placeholder="name@company.com" required />

              <label htmlFor="phone">Phone Number</label>
              <input id="phone" name="phone" type="tel" placeholder="+264 ..." />

              <label htmlFor="service">Service Required</label>
              <input id="service" name="service" type="text" placeholder="e.g., Tank cleaning and waste removal" required />

              <label htmlFor="message">Project Details</label>
              <textarea id="message" name="message" rows="5" placeholder="Tell us about your scope, location, and timing." required />

              <button type="submit" className="btn">
                Send Request
              </button>
            </form>
          </article>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-header">
            <h2>Map</h2>
            <p>Our head office and operations base in Walvis Bay.</p>
          </div>
          <div className="map-wrapper">
            <iframe
              title="Diclas Walvis Bay location map"
              src="https://www.google.com/maps?q=Langer+Heinrich+Crescent+ERF+4442+Industrial+Area+Walvis+Bay+Namibia&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
