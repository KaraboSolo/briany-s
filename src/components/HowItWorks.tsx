import { PhoneCall, CalendarCheck2, Sparkles } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Request a Free Quote",
    description:
      "Fill in our quick online form or give us a call. Tell us about your space, your needs, and when works best — and we will have a quote ready for you same day.",
  },
  {
    icon: CalendarCheck2,
    step: "02",
    title: "We Schedule & Clean",
    description:
      "Once you confirm, our vetted and fully-equipped team arrives at your door at the agreed time. We bring everything we need and get straight to work.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "You Enjoy a Spotless Space",
    description:
      "Walk into a space that gleams from top to bottom. If anything falls short of your expectations, we come back and sort it out — no questions asked.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#0D2137] py-20 lg:py-28 overflow-hidden relative"
      aria-labelledby="how-heading"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1D8FD8] rounded-full opacity-5 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7DC242] rounded-full opacity-5 blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#7DC242] font-semibold text-sm uppercase tracking-widest">
            Simple Process
          </span>
          <h2
            id="how-heading"
            className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight"
          >
            How It Works
          </h2>
          <p className="mt-4 text-white/60 text-lg leading-relaxed">
            Getting a professional clean has never been easier. Three simple
            steps is all it takes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-[#1D8FD8]/40 via-[#7DC242]/60 to-[#1D8FD8]/40" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="flex flex-col items-center text-center relative"
              >
                {/* Step number indicator */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#1D8FD8]/10 border-2 border-[#1D8FD8]/30 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-[#7DC242]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#7DC242] flex items-center justify-center">
                    <span className="text-white text-xs font-extrabold">
                      {index + 1}
                    </span>
                  </div>
                </div>

                <div className="text-xs text-[#7DC242]/60 font-bold tracking-widest mb-2">
                  STEP {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#7DC242] hover:bg-[#5fa030] text-white font-bold text-base px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get Your Free Quote Now
          </a>
        </div>
      </div>
    </section>
  );
}
