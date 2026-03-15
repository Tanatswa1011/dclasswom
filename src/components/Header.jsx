import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { companyInfo, navLinks } from '../data/siteContent';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="site-header">
      <div className="container header-row">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-title">Diclas</span>
          <span className="brand-subtitle">Waste Oil Management</span>
        </Link>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen((current) => !current)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`main-nav ${mobileOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact#quote" className="btn btn-small" onClick={closeMenu}>
            Request a Quote
          </Link>
        </nav>
      </div>
      <div className="top-bar">
        <div className="container top-bar-content">
          <span>{companyInfo.tagline}</span>
          <span>{companyInfo.phoneNumbers[0]}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
