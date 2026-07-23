"use client";

import { useState } from "react";
import { Phone, Mail, Clock, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    label: "Telephone",
    value: "+27 78 523 1743",
    href: "tel:+27785231743",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us on WhatsApp",
    href: "https://wa.me/27767843136",
  },
  {
    icon: Mail,
    label: "Email",
    value: "brianphephenyane136@gmail.com",
    href: "mailto:brianphephenyane136@gmail.com",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "All of Gauteng, South Africa",
    href: null,
  },
  {
    icon: Clock,
    label: "Operating Hours",
    value: "Mon–Fri: 07:00–18:00  |  Sat: 08:00–14:00",
    href: null,
  },
];

const serviceOptions = [
  "Commercial Cleaning",
  "Office & House Cleaning",
  "Hotel & Hall Cleaning",
  "Pre & Post Event Cleaning",
  "Carpet Cleaning",
  "Regular Contract",
  "Other",
];


export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData(e.currentTarget);
      const params = new URLSearchParams();
      data.forEach((value, key) => params.append(key, value.toString()));
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="bg-[#F4F7FA] py-20 lg:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#7DC242] font-semibold text-sm uppercase tracking-widest">
            Get in Touch
          </span>
          <h2
            id="contact-heading"
            className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D2137] leading-tight"
          >
            Request a Free Quote
          </h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Tell us about your cleaning needs and we will get back to you within
            the same business day with a clear, no-obligation quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact details — left */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-[#0D2137] rounded-2xl p-8 text-white">
              <h3 className="font-bold text-xl mb-6">Contact Details</h3>
              <div className="flex flex-col gap-6">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;
                  const content = (
                    <div className="flex gap-4 group">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#7DC242] transition-colors">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white/50 text-xs mb-0.5">{detail.label}</div>
                        <div className="text-white text-sm font-medium">{detail.value}</div>
                      </div>
                    </div>
                  );
                  return detail.href ? (
                    <a
                      key={detail.label}
                      href={detail.href}
                      target={detail.href.startsWith("http") ? "_blank" : undefined}
                      rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={detail.label}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* WhatsApp CTA card */}
            <a
              href="https://wa.me/27767843136"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1ebe57] transition-colors rounded-2xl p-6 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-bold">Chat on WhatsApp</div>
                <div className="text-white/80 text-sm">
                  Get a quote instantly — available 7 days a week
                </div>
              </div>
            </a>
          </div>

          {/* Form — right */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-2xl p-12 shadow-sm text-center h-full flex flex-col items-center justify-center min-h-96">
                <div className="w-20 h-20 rounded-full bg-[#7DC242]/15 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-[#7DC242]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0D2137] mb-3">
                  Message Received!
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-sm">
                  Thank you for reaching out. A member of our team will contact
                  you within the same business day.
                </p>
                <a
                  href="https://wa.me/27767843136"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Or chat with us on WhatsApp
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                name="contact"
                className="bg-white rounded-2xl p-8 shadow-sm"
                noValidate
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-[#2D3748] mb-2"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D8FD8] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-[#2D3748] mb-2"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="071 000 0000"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D8FD8] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-[#2D3748] mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D8FD8] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-semibold text-[#2D3748] mb-2"
                    >
                      Service Required <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D8FD8] focus:border-transparent transition-all text-gray-700"
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-[#2D3748] mb-2"
                    >
                      Tell Us More
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your space, how often you need cleaning, any specific requirements..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D8FD8] focus:border-transparent transition-all resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 w-full bg-[#7DC242] hover:bg-[#5fa030] disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send My Request
                    </>
                  )}
                </button>
                <p className="mt-3 text-center text-xs text-gray-400">
                  We respond within one business day. Your information is kept
                  strictly confidential in accordance with POPIA.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
