import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cleaning Tips & Advice Blog | Briany's Cleaning Services",
  description:
    "Expert cleaning tips, industry insights, and local guides from Briany's Cleaning Services — helping Gauteng homes and businesses stay spotless.",
  alternates: {
    canonical: "/blog",
  },
};

const comingSoonPosts = [
  {
    title: "How Often Should You Deep Clean Your Office in Johannesburg?",
    category: "Commercial Cleaning",
    excerpt:
      "Regular cleaning keeps things tidy, but deep cleaning is what keeps your team healthy and productive. Here is our recommended schedule for Joburg offices.",
  },
  {
    title: "The Complete Carpet Cleaning Guide for South African Homes",
    category: "Carpet Cleaning",
    excerpt:
      "South African homes face unique challenges — dusty Highveld summers, Joburg's red dust, and high foot traffic. Learn how to keep your carpets pristine.",
  },
  {
    title: "Pre-Event Cleaning Checklist: What to Do Before Your Guests Arrive",
    category: "Event Cleaning",
    excerpt:
      "Hosting a function? Do not leave your venue prep to the last minute. Here is a comprehensive checklist from our experienced event cleaning team.",
  },
  {
    title: "Eco-Friendly Cleaning Products: Are They Actually Effective?",
    category: "Tips & Advice",
    excerpt:
      "The short answer is yes — when used correctly. We break down which eco-friendly products perform best and why we have made them our standard at Briany's.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page hero */}
        <section className="bg-[#0D2137] pt-40 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[#7DC242] font-semibold text-sm uppercase tracking-widest">
              Insights & Advice
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              The Briany&apos;s Blog
            </h1>
            <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Expert cleaning tips, local guides, and industry insights — helping
              Gauteng stay spotless, one read at a time.
            </p>
          </div>
        </section>

        {/* Blog posts grid */}
        <section className="py-20 bg-[#F4F7FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {comingSoonPosts.map((post) => (
                <article
                  key={post.title}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
                >
                  {/* Placeholder image area */}
                  <div className="h-48 bg-gradient-to-br from-[#1D8FD8]/10 to-[#7DC242]/10 flex items-center justify-center">
                    <span className="text-[#1D8FD8]/30 text-sm font-medium">
                      Article image coming soon
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="text-[#7DC242] font-semibold text-xs uppercase tracking-wider">
                      {post.category}
                    </span>
                    <h2 className="mt-2 text-lg font-bold text-[#0D2137] leading-tight mb-3">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-block text-sm font-semibold text-[#1D8FD8] opacity-50 cursor-not-allowed">
                      Coming Soon →
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
