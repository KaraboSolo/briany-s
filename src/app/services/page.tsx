import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Cleaning Services in Gauteng | Briany's Cleaning Services",
  description:
    "Explore the full range of professional cleaning services offered by Briany's Cleaning Services in Gauteng — commercial, residential, carpet, event, hotel, and regular contract cleaning.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page hero */}
        <section className="bg-[#0D2137] pt-40 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[#7DC242] font-semibold text-sm uppercase tracking-widest">
              What We Offer
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Our Cleaning Services
            </h1>
            <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              From commercial contracts to once-off carpet cleans — {"Briany's"} delivers
              the same professional standard across every service we offer.
            </p>
          </div>
        </section>

        <Services />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
