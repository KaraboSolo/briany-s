import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Contact from "@/components/Contact";
import { areas, getArea } from "@/data/areas";
import { locationServices } from "@/data/services";
import {
  MapPin,
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
} from "lucide-react";

const SITE_URL = "https://www.brianyscleaning.co.za";

interface Props {
  params: Promise<{ area: string }>;
}

export async function generateStaticParams() {
  return areas.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area: areaSlug } = await params;
  const area = getArea(areaSlug);
  if (!area) return {};
  return {
    title: `Cleaning Services in ${area.name} | Briany's Cleaning Services`,
    description: `Professional cleaning services in ${area.name}, Gauteng. Briany's Cleaning Services offers commercial, residential, carpet, event, and hotel cleaning across ${area.name}. Vetted staff, eco-friendly products. Get a free quote.`,
    alternates: { canonical: `/areas/${area.slug}` },
    openGraph: {
      title: `Cleaning Services in ${area.name} | Briany's Cleaning Services`,
      description: `Trusted professional cleaning in ${area.name} — offices, homes, hotels, carpets, and events. Serving ${area.name} and surrounding areas for over 15 years.`,
      images: [{ url: area.heroImage, alt: area.heroImageAlt }],
    },
  };
}

export default async function AreaOverviewPage({ params }: Props) {
  const { area: areaSlug } = await params;
  const area = getArea(areaSlug);
  if (!area) notFound();

  const areaSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HouseCleaning"],
    "@id": `${SITE_URL}/areas/${area.slug}#business`,
    name: "Briany's Cleaning Services",
    description: `Professional cleaning services in ${area.name}, Gauteng.`,
    url: `${SITE_URL}/areas/${area.slug}`,
    telephone: "+27785231743",
    email: "info@brianyscleaning.co.za",
    image: area.heroImage,
    areaServed: {
      "@type": "City",
      name: area.name,
      containedInPlace: { "@type": "State", name: "Gauteng" },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: area.coordinates.lat,
      longitude: area.coordinates.lng,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Cleaning Services in ${area.name}`,
      itemListElement: locationServices.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${s.name} in ${area.name}`,
          url: `${SITE_URL}/areas/${area.slug}/${s.slug}`,
        },
      })),
    },
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={area.heroImage}
              alt={area.heroImageAlt}
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D2137] via-[#0D2137]/70 to-[#0D2137]/30" />
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(areaSchema) }}
          />

          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 pt-32">
            <Breadcrumb
              items={[
                { label: "Areas", href: "/areas" },
                { label: area.name },
              ]}
            />
            <div className="flex items-center gap-2 mt-4 mb-4">
              <MapPin className="w-4 h-4 text-[#7DC242]" />
              <span className="text-white/70 text-sm">
                {area.name}, Gauteng
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl">
              Cleaning Services in{" "}
              <span className="text-[#7DC242]">{area.name}</span>
            </h1>
            <p className="mt-4 text-white/75 text-lg max-w-2xl leading-relaxed">
              {area.tagline} — professional cleaning for homes, offices, hotels,
              and events throughout {area.name} and surrounding areas.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-[#7DC242] hover:bg-[#5fa030] text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+27785231743"
                className="border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-full transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </section>

        {/* About this area */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-[#7DC242] font-semibold text-sm uppercase tracking-widest">
                  Serving {area.name}
                </span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0D2137] leading-tight">
                  Your Local Cleaning Partner in {area.name}
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  {area.description}
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {area.longDescription}
                </p>
                <div className="mt-6 flex items-start gap-3 p-4 bg-[#F4F7FA] rounded-xl">
                  <MapPin className="w-5 h-5 text-[#1D8FD8] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#0D2137] text-sm">
                      Also serving nearby areas
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {area.nearbyAreas.map((slug) => {
                        const nearby = areas.find((a) => a.slug === slug);
                        return nearby ? (
                          <Link
                            key={slug}
                            href={`/areas/${slug}`}
                            className="text-xs bg-white border border-gray-200 hover:border-[#1D8FD8] hover:text-[#1D8FD8] text-gray-600 px-3 py-1 rounded-full transition-colors"
                          >
                            {nearby.name}
                          </Link>
                        ) : null;
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "15+", label: "Years Experience" },
                  { stat: "2,000+", label: "Happy Clients" },
                  { stat: "100%", label: "Satisfaction Rate" },
                  { stat: "Same Day", label: "Quote Response" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-[#F4F7FA] rounded-2xl p-6 text-center"
                  >
                    <div className="text-3xl font-extrabold text-[#1D8FD8]">
                      {item.stat}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services for this area */}
        <section className="bg-[#F4F7FA] py-16 lg:py-24" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[#7DC242] font-semibold text-sm uppercase tracking-widest">
                Available Services
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0D2137]">
                What We Offer in {area.name}
              </h2>
              <p className="mt-4 text-gray-600">
                Every service is available throughout {area.name} and the
                surrounding areas. Click a service to learn more.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {locationServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/areas/${area.slug}/${service.slug}`}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#1D8FD8]/20 group hover:-translate-y-1"
                >
                  <h3 className="text-lg font-bold text-[#0D2137] mb-2 group-hover:text-[#1D8FD8] transition-colors">
                    {service.name} in {area.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {service.heroSubTemplate.replace(/\{area\.name\}/g, area.name)}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#1D8FD8]">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Landmarks / local context */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-extrabold text-[#0D2137] mb-4">
                  We Know {area.name}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {area.businessContext}
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {area.residentialContext}
                </p>
                <div className="mt-6 space-y-2">
                  {area.landmarks.map((lm) => (
                    <div key={lm} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-[#7DC242] flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        Cleaning near {lm}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#0D2137] rounded-2xl p-8 text-white">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                  <span className="ml-2 text-white/70 text-sm">
                    4.9 on Google Reviews
                  </span>
                </div>
                <blockquote className="text-white/80 italic leading-relaxed mb-6">
                  &ldquo;We have been using {"Briany's"} for our{" "}
                  {area.name} office for two years. The reliability
                  and quality have been outstanding throughout.&rdquo;
                </blockquote>
                <div className="text-sm text-white/60">
                  — Business client, {area.name}
                </div>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <a
                    href="#contact"
                    className="block text-center bg-[#7DC242] hover:bg-[#5fa030] text-white font-bold py-4 rounded-xl transition-colors"
                  >
                    Get a Free Quote in {area.name}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
