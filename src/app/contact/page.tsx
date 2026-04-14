import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us | Briany's Cleaning Services Gauteng",
  description:
    "Get in touch with Briany's Cleaning Services for a free, no-obligation cleaning quote. Serving all of Gauteng — call, email, or WhatsApp us today.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page hero */}
        <section className="bg-[#0D2137] pt-40 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[#7DC242] font-semibold text-sm uppercase tracking-widest">
              Get in Touch
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Contact {"Briany's Cleaning"}
            </h1>
            <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Ready for a cleaner space? Reach out and we will have a free,
              personalised quote back to you within the same business day.
            </p>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
