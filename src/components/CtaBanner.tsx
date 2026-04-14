import { ArrowRight, Phone } from "lucide-react";

export default function CtaBanner() {
  return (
    <section
      className="relative overflow-hidden py-20"
      aria-label="Call to action"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1D8FD8] via-[#1470b0] to-[#0D2137]" />

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7DC242] rounded-full opacity-10 blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-5 blur-3xl -translate-x-1/2 translate-y-1/2" />

      {/* Diagonal sweep */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
          Ready for a Spotless Space?
          <span className="block text-[#7DC242] mt-1">Get Your Free Quote Today.</span>
        </h2>
        <p className="text-white/75 text-lg mb-10 max-w-2xl mx-auto">
          Join over 2,000 satisfied clients across Gauteng. No obligation, no hidden
          costs — just a straight-forward quote from a team that takes pride in its work.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-[#7DC242] hover:bg-[#5fa030] text-white font-bold text-base px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Request a Quote
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="tel:+27785231743"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold text-base px-10 py-4 rounded-full transition-all duration-300 hover:bg-white/10"
          >
            <Phone className="w-5 h-5" />
            Call +27 78 523 1743
          </a>
        </div>
      </div>
    </section>
  );
}
