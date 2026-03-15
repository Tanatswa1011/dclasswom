"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";

import { company, navLinks, services } from "@/lib/site-data";

type HeroCta = {
  href: string;
  label: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  cta?: HeroCta;
  secondaryCta?: HeroCta;
  compact?: boolean;
};

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

const buttonClass = {
  primary: "button button-primary",
  secondary: "button button-secondary",
  ghost: "button button-ghost",
};

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">DWOM</span>
          <span>
            <strong>{company.name}</strong>
            <small>{company.tagline}</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? "nav-link active" : "nav-link"}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact#quote-form" className={buttonClass.primary}>
            Request a Quote
          </Link>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
          <span />
          <span className="sr-only">Toggle navigation</span>
        </button>
      </div>

      {menuOpen ? (
        <div id="mobile-menu" className="mobile-menu">
          <div className="container mobile-menu-inner">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={active ? "mobile-link active" : "mobile-link"}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact#quote-form"
              className={buttonClass.primary}
              onClick={() => setMenuOpen(false)}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">DWOM</span>
            <span>
              <strong>{company.name}</strong>
              <small>{company.tagline}</small>
            </span>
          </div>
          <p className="footer-copy">
            Dependable support for marine, industrial, and waste-management
            requirements in Walvis Bay.
          </p>
        </div>

        <div>
          <h3>Pages</h3>
          <ul className="footer-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Key Services</h3>
          <ul className="footer-list">
            {services.slice(0, 6).map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul className="footer-list footer-contact-list">
            <li>{company.address[0]}</li>
            <li>{company.address[1]}</li>
            <li>{company.address[3]}, {company.address[5]}</li>
            {company.phones.map((phone) => (
              <li key={phone}>
                <a href={`tel:${phone.replace(/\s+/g, "")}`}>{phone}</a>
              </li>
            ))}
            {company.emails.map((email) => (
              <li key={email}>
                <a href={`mailto:${email}`}>{email}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {company.legalName}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  cta,
  secondaryCta,
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={compact ? "page-hero compact" : "page-hero"}
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(9, 20, 31, 0.92) 0%, rgba(9, 20, 31, 0.82) 48%, rgba(9, 20, 31, 0.52) 100%), url(${image})`,
      }}
    >
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          {cta || secondaryCta ? (
            <div className="hero-actions">
              {cta ? (
                <Link href={cta.href} className={buttonClass.primary}>
                  {cta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link href={secondaryCta.href} className={buttonClass.secondary}>
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionIntroProps) {
  return (
    <div className={align === "center" ? "section-intro center" : "section-intro"}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const mailtoLink = useMemo(() => {
    const subject = encodeURIComponent(
      `Quote request from ${formState.company || formState.name || "website enquiry"}`,
    );

    const body = encodeURIComponent(
      [
        `Name: ${formState.name}`,
        `Company: ${formState.company}`,
        `Email: ${formState.email}`,
        `Phone: ${formState.phone}`,
        `Service required: ${formState.service}`,
        "",
        "Project details:",
        formState.message,
      ].join("\n"),
    );

    return `mailto:${company.emails[1]}?subject=${subject}&body=${body}`;
  }, [formState]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    window.location.href = mailtoLink;
  };

  return (
    <form className="contact-form" id="quote-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Full name
          <input
            type="text"
            name="name"
            required
            value={formState.name}
            onChange={(event) =>
              setFormState((state) => ({ ...state, name: event.target.value }))
            }
          />
        </label>
        <label>
          Company
          <input
            type="text"
            name="company"
            required
            value={formState.company}
            onChange={(event) =>
              setFormState((state) => ({ ...state, company: event.target.value }))
            }
          />
        </label>
        <label>
          Email address
          <input
            type="email"
            name="email"
            required
            value={formState.email}
            onChange={(event) =>
              setFormState((state) => ({ ...state, email: event.target.value }))
            }
          />
        </label>
        <label>
          Phone number
          <input
            type="tel"
            name="phone"
            value={formState.phone}
            onChange={(event) =>
              setFormState((state) => ({ ...state, phone: event.target.value }))
            }
          />
        </label>
      </div>

      <label>
        Service required
        <input
          type="text"
          name="service"
          placeholder="e.g. tank cleaning, waste removal, hazardous waste disposal"
          value={formState.service}
          onChange={(event) =>
            setFormState((state) => ({ ...state, service: event.target.value }))
          }
        />
      </label>

      <label>
        Project details
        <textarea
          name="message"
          rows={6}
          required
          placeholder="Tell us about your site, vessel, service requirement, timeline, and any urgent operational needs."
          value={formState.message}
          onChange={(event) =>
            setFormState((state) => ({ ...state, message: event.target.value }))
          }
        />
      </label>

      <div className="form-actions">
        <button type="submit" className={buttonClass.primary}>
          Send enquiry
        </button>
        <a href={mailtoLink} className={buttonClass.ghost}>
          Email directly
        </a>
      </div>

      {submitted ? (
        <p className="form-note">
          Your email client should open with the draft enquiry. If it does not,
          use the direct email button or call the Diclas team.
        </p>
      ) : (
        <p className="form-note">
          This form prepares an enquiry email to the Diclas team. For urgent
          matters, please call directly.
        </p>
      )}
    </form>
  );
}
