import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import ServiceAreas from "@/components/ServiceAreas";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Professional Cleaning Services in Gauteng | Briany's Cleaning",
  description:
    "Briany's Cleaning Services offers professional commercial, residential, carpet, and event cleaning across all of Gauteng. Fully insured, vetted staff, transparent pricing. Get a free quote today.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <HowItWorks />
        <Testimonials />
        <ServiceAreas />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
