"use client";

import Image from "next/image";
import { Shield, Star, CheckCircle, Phone, ArrowRight } from "lucide-react";

const trustPoints = [
  "No Hidden Costs",
  "Eco-Friendly Products",
  "Same-Day Quotes",
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-[#0D2137] flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-[#1D8FD8] rounded-full opacity-5 blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#7DC242] rounded-full opacity-5 blur-3xl translate-y-1/2" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Copy */}
          <div className="order-1 lg:order-1">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <Shield className="w-4 h-4 text-[#7DC242]" />
              <span className="text-white/90 text-sm font-medium">
                Fully Insured &amp; Professionally Vetted Staff
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6">
              {"Gauteng's Most"}
              <span className="block text-[#7DC242] mt-1">Trusted Cleaning</span>
              <span className="block">Professionals</span>
            </h1>

            {/* Sub-copy */}
            <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-xl">
              From Johannesburg to Pretoria and every suburb in between —{" "}
              <strong className="text-white font-semibold">
                {"Briany's Cleaning Services"}
              </strong>{" "}
              has been delivering spotless results for homes, offices, hotels, and
              events across all of Gauteng for over 15 years.
            </p>

            {/* Trust checklist */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 text-white/70 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#7DC242] flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#7DC242] hover:bg-[#5fa030] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Request a Free Quote
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+27785231743"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10"
              >
                <Phone className="w-4 h-4" />
                Call Us Now
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-4 pt-10 border-t border-white/10">
              <div className="flex -space-x-2">
                {["T", "M", "A", "P"].map((initial) => (
                  <div
                    key={initial}
                    className="w-9 h-9 rounded-full bg-[#1D8FD8]/30 border-2 border-[#0D2137] flex items-center justify-center"
                  >
                    <span className="text-white text-xs font-bold">{initial}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/60 text-xs">
                  <span className="text-white font-semibold">4.9/5</span> from 200+ clients across Gauteng
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — Image */}
          <div className="order-2 lg:order-2 relative flex justify-center lg:justify-end">
            {/* Main image frame */}
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#1D8FD8]/20 to-[#7DC242]/20 blur-xl" />

              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none">
                <Image
                  src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=85"
                  alt="Professional cleaner in blue gloves providing expert cleaning service"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 500px"
                />
                {/* Dark gradient at bottom for badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2137]/60 via-transparent to-transparent" />
              </div>

              {/* Floating badge — years */}
              <div className="absolute -top-4 -left-4 lg:-left-6 bg-[#7DC242] text-white rounded-2xl px-5 py-4 shadow-xl">
                <div className="text-3xl font-extrabold leading-none">15+</div>
                <div className="text-xs font-semibold opacity-90 mt-0.5">Years of</div>
                <div className="text-xs font-semibold opacity-90">Excellence</div>
              </div>

              {/* Floating badge — satisfaction */}
              <div className="absolute -bottom-4 -right-4 lg:-right-6 bg-white rounded-2xl px-5 py-4 shadow-xl">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="text-[#0D2137] text-xs font-bold">2,000+ Happy</div>
                <div className="text-[#0D2137] text-xs font-bold">Clients</div>
              </div>

              {/* WhatsApp floating pill */}
              <a
                href="https://wa.me/27767843136"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-lg transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 60L48 51.8C96 43.7 192 27.3 288 22.5C384 17.7 480 24.3 576 30.8C672 37.3 768 43.7 864 43.7C960 43.7 1056 37.3 1152 32.2C1248 27 1344 23.7 1392 22L1440 20.3V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
