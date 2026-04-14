import { MapPin } from "lucide-react";

const areas = [
  "Johannesburg CBD",
  "Sandton",
  "Rosebank",
  "Randburg",
  "Roodepoort",
  "Soweto",
  "Alberton",
  "Germiston",
  "Boksburg",
  "Benoni",
  "Kempton Park",
  "Edenvale",
  "Springs",
  "Ekurhuleni",
  "Pretoria CBD",
  "Centurion",
  "Midrand",
  "Fourways",
  "Sunninghill",
  "Bryanston",
  "Woodmead",
  "Krugersdorp",
  "Randfontein",
  "Westonaria",
  "Brakpan",
  "Vereeniging",
  "Vanderbijlpark",
  "Tshwane East",
  "Atteridgeville",
  "Soshanguve",
];

export default function ServiceAreas() {
  return (
    <section
      id="service-areas"
      className="bg-white py-20 lg:py-28"
      aria-labelledby="areas-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <span className="text-[#7DC242] font-semibold text-sm uppercase tracking-widest">
              Where We Operate
            </span>
            <h2
              id="areas-heading"
              className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D2137] leading-tight"
            >
              Proudly Serving All of Gauteng
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              From the bustling corridors of the Johannesburg CBD to the leafy
              suburbs of Pretoria, {"Briany's Cleaning Services"} operates across the
              entire Gauteng province.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Not sure if we cover your area? Give us a ring or drop us a message
              — if you are in Gauteng, chances are we are already nearby.
            </p>
            <div className="mt-8 flex items-center gap-3 p-4 bg-[#F4F7FA] rounded-xl">
              <MapPin className="w-8 h-8 text-[#1D8FD8] flex-shrink-0" />
              <div>
                <div className="font-bold text-[#0D2137] text-sm">
                  Based in Gauteng, South Africa
                </div>
                <div className="text-gray-500 text-xs mt-0.5">
                  Serving 30+ cities and suburbs province-wide
                </div>
              </div>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 bg-[#1D8FD8] hover:bg-[#1470b0] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Check Your Area
            </a>
          </div>

          {/* Right — area tags */}
          <div>
            <div className="bg-[#F4F7FA] rounded-2xl p-8">
              <h3 className="font-bold text-[#0D2137] mb-6 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#7DC242]" />
                Areas We Cover
              </h3>
              <div className="flex flex-wrap gap-2">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="bg-white text-[#2D3748] text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 hover:border-[#1D8FD8] hover:text-[#1D8FD8] hover:bg-blue-50 transition-colors cursor-default"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-gray-400 text-xs">
                + many more areas across Gauteng
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
