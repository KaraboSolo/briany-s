import { Building2, Home, Hotel, CalendarCheck, Layers, RefreshCw, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description:
      "We keep your business premises immaculate — warehouses, retail spaces, factories and more. Our commercial teams work around your operating hours to minimise disruption.",
    href: "/services#commercial",
    colour: "#1D8FD8",
  },
  {
    icon: Home,
    title: "Office & House Cleaning",
    description:
      "A clean workspace boosts productivity. A clean home restores peace of mind. Our trained teams handle both with the same professional care and attention to detail.",
    href: "/services#office-house",
    colour: "#7DC242",
  },
  {
    icon: Hotel,
    title: "Hotel & Hall Cleaning",
    description:
      "Guest experience starts with cleanliness. We provide fast, thorough turnaround cleaning for hotels, guesthouses, banquet halls, and conferencing facilities.",
    href: "/services#hotel-hall",
    colour: "#1D8FD8",
  },
  {
    icon: CalendarCheck,
    title: "Pre & Post Event Cleaning",
    description:
      "Planning an event? We set the stage with spotless preparation and take care of the cleanup afterwards — so you can enjoy every moment without the hassle.",
    href: "/services#event",
    colour: "#7DC242",
  },
  {
    icon: Layers,
    title: "Carpet Cleaning",
    description:
      "Restore the life to your carpets with our professional steam and dry-cleaning treatments. We remove deep-set stains, allergens, and odours using eco-friendly solutions.",
    href: "/services#carpet",
    colour: "#1D8FD8",
  },
  {
    icon: RefreshCw,
    title: "Regular Contracts",
    description:
      "Consistent cleanliness without the admin. We offer flexible daily, weekly, and monthly contracts for homes and businesses that need reliable, recurring service.",
    href: "/services#contracts",
    colour: "#7DC242",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#F4F7FA] py-20 lg:py-28"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#7DC242] font-semibold text-sm uppercase tracking-widest">
            What We Do
          </span>
          <h2
            id="services-heading"
            className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D2137] leading-tight"
          >
            Our Cleaning Services
          </h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            From once-off deep cleans to long-term contracts — {"Briany's"} has the
            expertise to handle every cleaning requirement across Gauteng.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 border border-transparent hover:border-gray-100"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${service.colour}15` }}
                >
                  <Icon
                    className="w-7 h-7"
                    style={{ color: service.colour }}
                  />
                </div>
                <h3 className="text-xl font-bold text-[#0D2137] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                  {service.description}
                </p>
                <a
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D8FD8] hover:text-[#1470b0] transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="/services"
            className="inline-flex items-center gap-2 bg-[#0D2137] hover:bg-[#132d4a] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
