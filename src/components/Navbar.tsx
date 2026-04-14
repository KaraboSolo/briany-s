"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
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

  return (
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
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo.png"
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
            className="lg:hidden p-2 rounded-md text-[#2D3748] hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="bg-white border-t border-gray-100 px-4 pt-4 pb-6 flex flex-col gap-1"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 px-4 text-[#2D3748] font-medium rounded-lg hover:bg-[#F4F7FA] hover:text-[#1D8FD8] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-3">
            <a
              href="tel:+27785231743"
              className="flex items-center gap-2 py-3 px-4 text-[#2D3748] font-medium"
            >
              <Phone className="w-4 h-4 text-[#7DC242]" />
              +27 78 523 1743
            </a>
            <a
              href="#contact"
              className="bg-[#7DC242] hover:bg-[#5fa030] text-white font-semibold text-center py-3 px-6 rounded-full transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get a Free Quote
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
