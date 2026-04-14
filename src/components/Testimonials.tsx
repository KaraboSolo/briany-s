import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Thandi Nkosi",
    location: "Sandton, Johannesburg",
    service: "Regular House Cleaning",
    rating: 5,
    text: "I have been using Briany's for over two years and honestly, I cannot imagine managing without them. They are thorough, reliable, and treat my home with genuine care. The team always goes above and beyond — I have recommended them to everyone in my complex.",
  },
  {
    name: "Marco da Silva",
    location: "Centurion, Pretoria",
    service: "Commercial Office Cleaning",
    rating: 5,
    text: "We brought Briany's in to handle our Centurion office after being badly let down by our previous cleaners. The difference was immediately noticeable. Our 80-person office is spotless every morning without fail. Their contract pricing is competitive and totally transparent.",
  },
  {
    name: "Ayasha Patel",
    location: "Midrand",
    service: "Post-Event Cleaning",
    rating: 5,
    text: "Hosted a 150-person function at our venue and the cleanup afterwards was absolutely seamless. The Briany's team arrived on time, worked efficiently, and left the place looking better than it did before the event. Will absolutely book them again.",
  },
  {
    name: "Pieter van der Berg",
    location: "Roodepoort",
    service: "Carpet Cleaning",
    rating: 5,
    text: "Our office carpets had years of wear on them and I was convinced they needed replacing. Briany's convinced me to try their deep-clean service first — and I am so glad I did. They look brand new. Brilliant value and an absolutely professional team.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#F4F7FA] py-20 lg:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#7DC242] font-semibold text-sm uppercase tracking-widest">
            Client Stories
          </span>
          <h2
            id="testimonials-heading"
            className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D2137] leading-tight"
          >
            What Our Clients Say
          </h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Don&apos;t take our word for it. Here is what Gauteng residents and
            businesses have to say about working with us.
          </p>
          {/* Google rating summary */}
          <div className="mt-6 inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-[#0D2137] font-bold">4.9</span>
            <span className="text-gray-500 text-sm">on Google Reviews</span>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#7DC242]/20 group relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-[#1D8FD8]" />
              </div>

              {/* Stars */}
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i <= t.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-200"
                    }`}
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-600 leading-relaxed text-sm mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Client info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#1D8FD8]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#1D8FD8] font-bold text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-[#0D2137] text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.location}</div>
                </div>
                <div className="ml-auto">
                  <span className="bg-[#7DC242]/10 text-[#5fa030] text-xs font-medium px-3 py-1 rounded-full">
                    {t.service}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
