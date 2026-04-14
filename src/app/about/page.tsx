import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About Us | Briany's Cleaning Services",
  description:
    "Learn about Briany's Cleaning Services — Gauteng's most trusted cleaning company with over 15 years of experience serving homes, offices, and venues across the province.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page hero */}
        <section className="bg-[#0D2137] pt-40 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[#7DC242] font-semibold text-sm uppercase tracking-widest">
              Our Story
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              About {"Briany's Cleaning Services"}
            </h1>
            <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Over 15 years of trusted, professional cleaning across all of Gauteng.
              Our story is one of hard work, attention to detail, and an unwavering
              commitment to our clients.
            </p>
          </div>
        </section>

        {/* Content placeholder */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-[#F4F7FA] rounded-2xl p-12">
              <p className="text-gray-500 text-lg">
                Full about page content coming soon.
              </p>
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
