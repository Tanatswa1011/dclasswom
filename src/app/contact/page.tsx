"use client";

import { useState, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

function ContactContent() {
  const searchParams = useSearchParams();
  const isQuote = searchParams.get("action") === "quote";
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {isQuote ? "Request a Quote" : "Contact Us"}
          </h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl">
            {isQuote
              ? "Tell us about your requirements and we will provide a tailored quote."
              : "Get in touch for service details, support, or a general enquiry."}
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="section-heading">Get in Touch</h2>
              <p className="text-slate-600 mt-4 mb-8">
                We respond promptly to all enquiries. For urgent vessel or
                port-related support, please call us directly.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-navy-900">Address</h3>
                  <p className="text-slate-600 mt-1">
                    Walvis Bay
                    <br />
                    Namibia
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900">Phone</h3>
                  <p className="text-slate-600 mt-1">
                    +264 XX XXX XXXX
                    <br />
                    +264 XX XXX XXXX
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900">Email</h3>
                  <p className="text-slate-600 mt-1">info@diclaswom.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-card">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-teal-accent/10 flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-teal-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900">
                    Thank You
                  </h3>
                  <p className="mt-2 text-slate-600">
                    We have received your enquiry and will respond as soon as
                    possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-navy-900"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-teal-accent focus:ring-1 focus:ring-teal-accent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-navy-900"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formState.company}
                      onChange={(e) =>
                        setFormState({ ...formState, company: e.target.value })
                      }
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-teal-accent focus:ring-1 focus:ring-teal-accent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-navy-900"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-teal-accent focus:ring-1 focus:ring-teal-accent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-navy-900"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-teal-accent focus:ring-1 focus:ring-teal-accent"
                    />
                  </div>
                  {isQuote && (
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-navy-900"
                      >
                        Service Required
                      </label>
                      <select
                        id="service"
                        value={formState.service}
                        onChange={(e) =>
                          setFormState({ ...formState, service: e.target.value })
                        }
                        className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-teal-accent focus:ring-1 focus:ring-teal-accent"
                      >
                        <option value="">Select a service</option>
                        <option value="tank-cleaning">Tank Cleaning</option>
                        <option value="waste-removal">Waste Removal</option>
                        <option value="ship-repair">Ship Repair</option>
                        <option value="sewage">Sewage Discharge</option>
                        <option value="contaminated-water">
                          Contaminated Water Discharge
                        </option>
                        <option value="solid-waste">Solid Waste Disposal</option>
                        <option value="liquid-waste">Liquid Waste Disposal</option>
                        <option value="hazardous-waste">
                          Hazardous Waste Disposal
                        </option>
                        <option value="fuel-storage">Fuel Storage</option>
                        <option value="sewage-tanks">Sewage Tanks Supply</option>
                        <option value="workers">Workers Supply</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-navy-900"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-teal-accent focus:ring-1 focus:ring-teal-accent"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    {isQuote ? "Submit Quote Request" : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-8">Location</h2>
          <div className="relative aspect-[21/9] rounded-xl overflow-hidden bg-slate-200">
            <Image
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80"
              alt="Walvis Bay map"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-navy-900/30">
              <p className="text-white font-semibold text-lg">
                Walvis Bay, Namibia — Serving the southern African coast
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center">Loading...</div>}>
      <ContactContent />
    </Suspense>
  );
}
