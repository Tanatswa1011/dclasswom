import { Link } from 'react-router-dom';
import { companyInfo } from '../data/siteContent';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>{companyInfo.shortName}</h3>
          <p>
            Professional waste oil management and marine environmental services delivered from Walvis Bay for
            marine, industrial, and mining clients.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/references">References</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p>{companyInfo.addressLines.join(', ')}</p>
          <p>{companyInfo.phoneNumbers.join(' / ')}</p>
          <p>{companyInfo.emails.join(' / ')}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-row">
          <span>© {new Date().getFullYear()} Diclas Waste Oil Management CC. All rights reserved.</span>
          <Link to="/contact#quote" className="btn btn-outline-light btn-small">
            Request Service Support
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
