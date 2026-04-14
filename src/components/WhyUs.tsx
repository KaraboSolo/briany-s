import {
  ShieldCheck,
  Leaf,
  ClipboardList,
  Clock,
  BadgeCheck,
  Handshake,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Fully Insured & Bonded",
    description:
      "Every member of our team is fully insured, so you can have complete peace of mind knowing your property is in safe hands.",
  },
  {
    icon: BadgeCheck,
    title: "Vetted & Trained Staff",
    description:
      "All our cleaners undergo thorough background checks and ongoing training to ensure consistently high standards of service.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description:
      "We use environmentally responsible, non-toxic cleaning solutions that are safe for your family, pets, and the planet.",
  },
  {
    icon: ClipboardList,
    title: "Tailored Cleaning Plans",
    description:
      "No two spaces are the same. We create a bespoke cleaning plan that fits your specific needs, schedule, and budget.",
  },
  {
    icon: Clock,
    title: "Reliable & Punctual",
    description:
      "We value your time. Our teams arrive on schedule, complete the job efficiently, and never leave until the work is done right.",
  },
  {
    icon: Handshake,
    title: "Transparent Pricing",
    description:
      "No hidden fees, no surprise charges. You receive a clear, itemised quote upfront — and that is exactly what you pay.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="bg-white py-20 lg:py-28"
      aria-labelledby="whyus-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column — text */}
          <div>
            <span className="text-[#7DC242] font-semibold text-sm uppercase tracking-widest">
              Why Choose Us
            </span>
            <h2
              id="whyus-heading"
              className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D2137] leading-tight"
            >
              The {"Briany's"} Difference
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Over 15 years in the industry have taught us that the details matter.
              We do not cut corners, we do not make excuses, and we do not stop until
              every space we touch meets our exacting standards.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Whether it is a once-off spring clean or a recurring commercial
              contract, you get the same dedicated service — because our reputation
              is built one spotless room at a time.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 bg-[#1D8FD8] hover:bg-[#1470b0] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Book a Clean Today
            </a>
          </div>

          {/* Right column — grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="flex gap-4 p-5 rounded-xl bg-[#F4F7FA] hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-100"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#1D8FD8]/10 flex items-center justify-center mt-0.5">
                    <Icon className="w-5 h-5 text-[#1D8FD8]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0D2137] text-sm mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
