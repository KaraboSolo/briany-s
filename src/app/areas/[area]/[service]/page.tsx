import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Contact from "@/components/Contact";
import { areas, getArea } from "@/data/areas";
import { locationServices, getService, t } from "@/data/services";
import {
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  MapPin,
  ChevronDown,
} from "lucide-react";

const SITE_URL = "https://www.brianyscleaning.co.za";

interface Props {
  params: Promise<{ area: string; service: string }>;
}

export async function generateStaticParams() {
  const params: { area: string; service: string }[] = [];
  for (const area of areas) {
    for (const service of locationServices) {
      params.push({ area: area.slug, service: service.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area: areaSlug, service: serviceSlug } = await params;
  const area = getArea(areaSlug);
  const service = getService(serviceSlug);
  if (!area || !service) return {};
  return {
    title: t(service.metaTitleTemplate, area),
    description: t(service.metaDescriptionTemplate, area),
    alternates: { canonical: `/areas/${area.slug}/${service.slug}` },
    openGraph: {
      title: t(service.metaTitleTemplate, area),
      description: t(service.metaDescriptionTemplate, area),
      images: [{ url: area.heroImage, alt: area.heroImageAlt }],
    },
  };
}

export default async function AreaServicePage({ params }: Props) {
  const { area: areaSlug, service: serviceSlug } = await params;
  const area = getArea(areaSlug);
  const service = getService(serviceSlug);
  if (!area || !service) notFound();

  const relatedServices = locationServices.filter((s) =>
    service.relatedServices.includes(s.slug)
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/areas/${area.slug}/${service.slug}#service`,
    name: `${service.name} in ${area.name}`,
    description: t(service.metaDescriptionTemplate, area),
    provider: {
      "@type": "LocalBusiness",
      name: "Briany's Cleaning Services",
      url: SITE_URL,
      telephone: "+27785231743",
      email: "info@brianyscleaning.co.za",
      image: `${SITE_URL}/images/No Background Logo.png`,
      address: {
        "@type": "PostalAddress",
        addressLocality: area.name,
        addressRegion: "Gauteng",
        addressCountry: "ZA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: area.coordinates.lat,
        longitude: area.coordinates.lng,
      },
      areaServed: {
        "@type": "City",
        name: area.name,
        containedInPlace: { "@type": "State", name: "Gauteng" },
      },
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "14:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "200",
        bestRating: "5",
      },
    },
    serviceType: service.schemaType,
    areaServed: {
      "@type": "City",
      name: area.name,
      containedInPlace: { "@type": "State", name: "Gauteng" },
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "ZAR",
        unitText: "per visit",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero */}
        <section className="relative min-h-[65vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={area.heroImage}
              alt={area.heroImageAlt}
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D2137] via-[#0D2137]/75 to-[#0D2137]/20" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-14 pt-32">
            <Breadcrumb
              items={[
                { label: "Areas", href: "/areas" },
                { label: area.name, href: `/areas/${area.slug}` },
                { label: service.shortName },
              ]}
            />
            <div className="flex items-center gap-2 mt-4 mb-4">
              <MapPin className="w-4 h-4 text-[#7DC242]" />
              <span className="text-white/70 text-sm">
                {area.name}, Gauteng
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl">
              {service.name} in{" "}
              <span className="text-[#7DC242]">{area.name}</span>
            </h1>
            <p className="mt-4 text-white/75 text-lg max-w-2xl leading-relaxed">
              {t(service.heroSubTemplate, area)}
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
                Call +27 78 523 1743
              </a>
            </div>
          </div>
        </section>

        {/* Intro copy */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <span className="text-[#7DC242] font-semibold text-sm uppercase tracking-widest">
                  {service.name} · {area.name}
                </span>
                <h2 className="mt-2 text-3xl font-extrabold text-[#0D2137] leading-tight">
                  Professional {service.name} for {area.name}
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                  {t(service.introTemplate, area)}
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {t(service.areaBodyTemplate, area)}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Fully Insured",
                    "Vetted Staff",
                    "Eco-Friendly",
                    "Same-Day Quotes",
                    "Flexible Scheduling",
                  ].map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1.5 bg-[#F4F7FA] text-[#2D3748] text-xs font-semibold px-3 py-1.5 rounded-full"
                    >
                      <CheckCircle className="w-3 h-3 text-[#7DC242]" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sidebar quick info */}
              <div className="flex flex-col gap-4">
                <div className="bg-[#0D2137] rounded-2xl p-6 text-white">
                  <div className="flex mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-white/80 text-sm italic leading-relaxed mb-4">
                    &ldquo;Outstanding {service.shortName.toLowerCase()} service
                    in {area.name}. Professional, thorough, and always on time.
                    Highly recommended to anyone in the area.&rdquo;
                  </p>
                  <div className="text-white/50 text-xs">
                    — Verified client, {area.name}
                  </div>
                </div>

                <div className="bg-[#F4F7FA] rounded-2xl p-6">
                  <h3 className="font-bold text-[#0D2137] mb-4 text-sm">
                    Quick Contact
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+27785231743"
                      className="flex items-center gap-3 text-[#1D8FD8] hover:text-[#1470b0] font-medium text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      +27 78 523 1743
                    </a>
                    <a
                      href="https://wa.me/27767843136"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[#25D366] hover:text-[#1ebe57] font-medium text-sm"
                    >
                      <svg
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp Us
                    </a>
                  </div>
                  <a
                    href="#contact"
                    className="mt-4 block text-center bg-[#7DC242] hover:bg-[#5fa030] text-white font-bold py-3 rounded-xl transition-colors text-sm"
                  >
                    Request a Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-[#F4F7FA] py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-extrabold text-[#0D2137]">
                What&apos;s Included
              </h2>
              <p className="mt-3 text-gray-600">
                Everything covered in our {service.name.toLowerCase()} service
                for {area.name} clients.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#7DC242] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-[#0D2137] text-sm mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white py-16 lg:py-20" id="faq">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-[#0D2137]">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-gray-600">
                Common questions about {service.name.toLowerCase()} in{" "}
                {area.name}.
              </p>
            </div>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-[#F4F7FA] rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-[#0D2137] list-none">
                    <span className="pr-4">{faq.question}</span>
                    <ChevronDown className="w-4 h-4 text-[#1D8FD8] flex-shrink-0 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related services & nearby areas */}
        <section className="bg-[#F4F7FA] py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Related services */}
              <div>
                <h2 className="text-xl font-extrabold text-[#0D2137] mb-6">
                  Other Services in {area.name}
                </h2>
                <div className="space-y-3">
                  {relatedServices.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/areas/${area.slug}/${related.slug}`}
                      className="flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                    >
                      <div>
                        <div className="font-semibold text-[#0D2137] text-sm">
                          {related.name}
                        </div>
                        <div className="text-gray-500 text-xs mt-0.5">
                          Available in {area.name}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#1D8FD8] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                  <Link
                    href={`/areas/${area.slug}`}
                    className="flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                  >
                    <div>
                      <div className="font-semibold text-[#0D2137] text-sm">
                        View All Services in {area.name}
                      </div>
                      <div className="text-gray-500 text-xs mt-0.5">
                        See every service we offer
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#1D8FD8] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Same service, nearby areas */}
              <div>
                <h2 className="text-xl font-extrabold text-[#0D2137] mb-6">
                  {service.name} in Nearby Areas
                </h2>
                <div className="space-y-3">
                  {area.nearbyAreas.map((slug) => {
                    const nearby = areas.find((a) => a.slug === slug);
                    return nearby ? (
                      <Link
                        key={slug}
                        href={`/areas/${slug}/${service.slug}`}
                        className="flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                      >
                        <div>
                          <div className="font-semibold text-[#0D2137] text-sm">
                            {service.name} in {nearby.name}
                          </div>
                          <div className="text-gray-500 text-xs mt-0.5">
                            {nearby.tagline}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#1D8FD8] group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ) : null;
                  })}
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
