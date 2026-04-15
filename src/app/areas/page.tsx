import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { areas } from "@/data/areas";
import { locationServices } from "@/data/services";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cleaning Services Across Gauteng | All Areas | Briany's Cleaning",
  description:
    "Briany's Cleaning Services covers all of Gauteng — from Johannesburg and Sandton to Pretoria, Centurion, Midrand, and every major suburb in between. Find your area and book a free quote.",
  alternates: { canonical: "/areas" },
};

export default function AreasIndexPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#0D2137] pt-36 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[#7DC242] font-semibold text-sm uppercase tracking-widest">
              Where We Operate
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Cleaning Services Across Gauteng
            </h1>
            <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              {"Briany's Cleaning Services"} operates in every major city and suburb across
              Gauteng. Select your area to see services available near you.
            </p>
          </div>
        </section>

        {/* Areas grid */}
        <section className="bg-[#F4F7FA] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#1D8FD8]/20 group hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1D8FD8]/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#1D8FD8]" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#1D8FD8] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h2 className="text-lg font-bold text-[#0D2137] mb-1">
                    {area.name}
                  </h2>
                  <p className="text-[#7DC242] text-xs font-semibold mb-3">
                    {area.tagline}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                    {area.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1">
                    {locationServices.slice(0, 3).map((s) => (
                      <span
                        key={s.slug}
                        className="text-xs bg-[#F4F7FA] text-gray-500 px-2 py-0.5 rounded-full"
                      >
                        {s.shortName}
                      </span>
                    ))}
                    <span className="text-xs bg-[#F4F7FA] text-gray-500 px-2 py-0.5 rounded-full">
                      +{locationServices.length - 3} more
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Services quick links */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-[#0D2137] mb-2">
              Browse by Service
            </h2>
            <p className="text-gray-500 mb-8">
              Jump straight to a specific service available in your area.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {locationServices.map((service) => (
                <div key={service.slug} className="bg-[#F4F7FA] rounded-xl p-4">
                  <h3 className="font-bold text-[#0D2137] text-sm mb-3">
                    {service.name}
                  </h3>
                  <ul className="space-y-1">
                    {areas.slice(0, 5).map((area) => (
                      <li key={area.slug}>
                        <Link
                          href={`/areas/${area.slug}/${service.slug}`}
                          className="text-xs text-[#1D8FD8] hover:underline"
                        >
                          {service.shortName} in {area.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <span className="text-xs text-gray-400">
                        + {areas.length - 5} more areas
                      </span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
