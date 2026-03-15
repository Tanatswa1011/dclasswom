"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Walvis Bay, Erongo Region, Namibia",
    href: "https://maps.google.com/?q=Walvis+Bay+Namibia",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+264 81 122 1907",
    href: "tel:+264811221907",
    extra: "+264 81 277 1907",
    extraHref: "tel:+264812771907",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@diclaswom.com",
    href: "mailto:info@diclaswom.com",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "24/7 — Available around the clock",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-light">
              Contact Us
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Let&apos;s Discuss Your Requirements
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              Whether you need a quote, have a question about our services, or
              want to discuss a project — our team is ready to help. Reach out
              by phone, email, or use the form below.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* INFO COLUMN */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy mb-6">
                Get in Touch
              </h2>
              <p className="text-base text-gray-500 mb-8">
                Our team is available 24/7 to respond to enquiries and provide
                support for marine waste management, ship services, and
                environmental solutions.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal/10">
                      <item.icon className="h-5 w-5 text-teal" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block text-sm font-medium text-navy hover:text-teal"
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-medium text-navy">
                          {item.value}
                        </p>
                      )}
                      {item.extra && (
                        <a
                          href={item.extraHref}
                          className="block text-sm text-gray-500 hover:text-teal"
                        >
                          {item.extra}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FORM COLUMN */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm lg:p-10">
                <h2 className="text-2xl font-bold text-navy mb-2">
                  Request a Quote
                </h2>
                <p className="text-sm text-gray-500 mb-8">
                  Fill out the form below and our team will respond within 24
                  hours with a detailed quotation.
                </p>

                {submitted ? (
                  <div className="py-16 text-center">
                    <CheckCircle2 className="mx-auto h-16 w-16 text-teal" />
                    <h3 className="mt-4 text-xl font-bold text-navy">
                      Message Sent Successfully
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Thank you for your enquiry. Our team will review your
                      message and respond within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-dark"
                    >
                      Send another message <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                          placeholder="Company name"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                          placeholder="you@company.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                          placeholder="+264..."
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Service Required
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                      >
                        <option value="">Select a service...</option>
                        <option>Ship Repair</option>
                        <option>Waste Removal</option>
                        <option>Tank Cleaning</option>
                        <option>Sewage Discharge</option>
                        <option>Contaminated Water Discharge</option>
                        <option>Solid Waste Disposal</option>
                        <option>Liquid Waste Disposal</option>
                        <option>Hazardous Waste Disposal</option>
                        <option>Fuel Storage</option>
                        <option>Sewage Tank Supply</option>
                        <option>Worker Supply</option>
                        <option>Multiple Services</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal resize-none"
                        placeholder="Describe your requirements, vessel details, and timeline..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal px-8 py-4 text-base font-semibold text-white transition-all hover:bg-teal-dark hover:shadow-xl sm:w-auto"
                    >
                      <Send className="h-5 w-5" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal">
              Our Location
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Based in Walvis Bay, Namibia
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
              Strategically located at Namibia&apos;s primary commercial port,
              providing rapid response and direct access to vessels and
              port-side operations.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57763.26580905789!2d14.476097!3d-22.9576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c7657ae9bf83ba9%3A0x63c498e3e0b3fa44!2sWalvis%20Bay%2C%20Namibia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Diclas Waste Oil Management Location — Walvis Bay, Namibia"
            />
          </div>
        </div>
      </section>
    </>
  );
}
