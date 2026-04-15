import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { areas } from "@/data/areas";
import { locationServices } from "@/data/services";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/areas", label: "Areas We Serve" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Split areas into two columns
  const areasMid = Math.ceil(areas.length / 2);
  const areasCol1 = areas.slice(0, areasMid);
  const areasCol2 = areas.slice(areasMid);

  return (
    <footer className="bg-[#0D2137] text-white" aria-label="Site footer">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/images/No Background Logo.png"
                alt="Briany's Cleaning Services"
                width={150}
                height={65}
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {"Gauteng's"} most trusted cleaning professionals. Serving homes,
              offices, and venues across the province with pride since 2009.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/brianyscleaning"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#1D8FD8] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/brianyscleaning"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#E1306C] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links + Services */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest text-white/50 mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3 mb-8">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#7DC242] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-bold text-sm uppercase tracking-widest text-white/50 mb-4">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {locationServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/areas/sandton/${service.slug}`}
                    className="text-white/70 hover:text-[#7DC242] text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Areas We Serve */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest text-white/50 mb-5">
              Areas We Serve
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {areasCol1.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="text-white/70 hover:text-[#7DC242] text-sm transition-colors"
                >
                  {area.name}
                </Link>
              ))}
              {areasCol2.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="text-white/70 hover:text-[#7DC242] text-sm transition-colors"
                >
                  {area.name}
                </Link>
              ))}
            </div>
            <Link
              href="/areas"
              className="inline-block mt-4 text-[#7DC242] text-xs font-semibold hover:underline"
            >
              View all areas →
            </Link>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest text-white/50 mb-5">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:+27785231743"
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 text-[#7DC242] flex-shrink-0 mt-0.5" />
                  <span className="text-sm">+27 78 523 1743</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@brianyscleaning.co.za"
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#7DC242] flex-shrink-0 mt-0.5" />
                  <span className="text-sm break-all">
                    info@brianyscleaning.co.za
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin className="w-4 h-4 text-[#7DC242] flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Gauteng, South Africa</span>
                </div>
              </li>
            </ul>

            <div className="mt-6 bg-white/5 rounded-xl p-4">
              <div className="text-xs font-bold text-white/50 uppercase tracking-wider mb-2">
                Operating Hours
              </div>
              <div className="text-sm text-white/70">
                Mon – Fri: 07:00 – 18:00
              </div>
              <div className="text-sm text-white/70">
                Saturday: 08:00 – 14:00
              </div>
              <div className="text-sm text-white/40">Sunday: Closed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Area × Service links — SEO internal linking grid */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-6">
            All Services by Area
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-4">
            {areas.map((area) => (
              <div key={area.slug}>
                <Link
                  href={`/areas/${area.slug}`}
                  className="text-white/60 hover:text-[#7DC242] text-xs font-semibold transition-colors block mb-1.5"
                >
                  {area.name}
                </Link>
                <ul className="space-y-1">
                  {locationServices.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/areas/${area.slug}/${service.slug}`}
                        className="text-white/30 hover:text-white/70 text-xs transition-colors leading-relaxed"
                      >
                        {service.shortName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {currentYear} {"Briany's Cleaning Services"}. All rights reserved.
          </p>
          <p className="text-white/30 text-xs text-center">
            Your personal information is processed in accordance with the
            Protection of Personal Information Act (POPIA).
          </p>
        </div>
      </div>
    </footer>
  );
}
