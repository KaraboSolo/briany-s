"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, MessageCircle, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Areas" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <>
      {/* ─── Sticky header bar ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md py-2"
            : "bg-white/95 backdrop-blur-sm py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0" onClick={close}>
              <Image
                src="/images/No Background Logo.png"
                alt="Briany's Cleaning Services Logo"
                width={160}
                height={70}
                className="h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#2D3748] font-medium text-sm hover:text-[#1D8FD8] transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7DC242] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+27785231743"
                className="flex items-center gap-2 text-sm font-medium text-[#2D3748] hover:text-[#1D8FD8] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#7DC242]" />
                <span>+27 78 523 1743</span>
              </a>
              <a
                href="#contact"
                className="bg-[#7DC242] hover:bg-[#5fa030] text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Get a Free Quote
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden relative z-[60] p-2 rounded-md transition-colors"
              style={{ color: isOpen ? "#ffffff" : "#2D3748" }}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"
                }`}
              >
                <X className="w-6 h-6" />
              </span>
              <span
                className={`flex items-center justify-center transition-all duration-300 ${
                  isOpen ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
                }`}
              >
                <Menu className="w-6 h-6" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ─── Mobile full-screen overlay ─── */}

      {/* Backdrop — fades in/out */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-400 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
        onClick={close}
        aria-hidden="true"
      >
        {/* Dark navy tinted layer */}
        <div className="absolute inset-0 bg-[#0D2137]/90" />
      </div>

      {/* Slide-in panel — comes from the right */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
        aria-hidden={!isOpen}
      >
        {/* Panel background */}
        <div className="absolute inset-0 bg-[#0D2137]/95 backdrop-blur-xl border-l border-white/10" />

        {/* Panel content */}
        <nav
          className="relative h-full flex flex-col px-8 pt-28 pb-10 overflow-y-auto"
          aria-label="Mobile navigation"
        >
          {/* Nav links */}
          <div className="flex flex-col gap-1 flex-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className={`group flex items-center justify-between py-4 border-b border-white/10 text-white/80 hover:text-white transition-all duration-300 ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen ? `${80 + i * 60}ms` : "0ms",
                  transitionProperty: "transform, opacity, color",
                }}
              >
                <span className="text-2xl font-bold tracking-tight">{link.label}</span>
                <ArrowRight className="w-5 h-5 text-[#7DC242] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Bottom contact actions */}
          <div
            className={`mt-10 flex flex-col gap-4 transition-all duration-500 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: isOpen ? "420ms" : "0ms" }}
          >
            {/* Quote CTA */}
            <a
              href="#contact"
              onClick={close}
              className="flex items-center justify-center gap-2 bg-[#7DC242] hover:bg-[#5fa030] text-white font-bold text-base px-6 py-4 rounded-2xl transition-colors shadow-lg"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Phone */}
            <a
              href="tel:+27785231743"
              className="flex items-center justify-center gap-3 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-medium py-3.5 px-6 rounded-2xl transition-colors"
            >
              <Phone className="w-4 h-4 text-[#7DC242]" />
              +27 78 523 1743
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/27767843136"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] font-medium py-3.5 px-6 rounded-2xl transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>

            {/* Subtle tagline */}
            <p className="text-center text-white/30 text-xs mt-2">
              Serving all of Gauteng since 2009
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}
