import Link from "next/link";

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "References", href: "/references" },
  ],
  contact: [
    { label: "Contact", href: "/contact" },
    { label: "Request a Quote", href: "/contact?action=quote" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold text-white">Diclas</span>
            </Link>
            <p className="mt-3 text-sm text-slate-400 max-w-xs">
              Marine environmental and waste management services for vessels and
              port operations across Namibia and the southern African coast.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-teal-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2">
              {footerLinks.contact.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-teal-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Location
            </h4>
            <p className="text-sm text-slate-400">
              Walvis Bay, Namibia
              <br />
              Serving port and marine operations across the region
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Diclas Waste Oil Management. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
