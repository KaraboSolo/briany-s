import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = process.env.SITE_URL || "https://www.brianyscleaningservices.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Briany's Cleaning Services | Professional Cleaning in Gauteng",
    template: "%s | Briany's Cleaning Services",
  },
  description:
    "Briany's Cleaning Services provides professional commercial, residential, carpet, and event cleaning across all of Gauteng — Johannesburg, Pretoria, Sandton, Midrand and beyond. Get a free quote today.",
  keywords: [
    "cleaning services Gauteng",
    "commercial cleaning Johannesburg",
    "office cleaning Pretoria",
    "house cleaning Sandton",
    "carpet cleaning Midrand",
    "event cleaning Gauteng",
    "cleaning company South Africa",
    "professional cleaners Johannesburg",
  ],
  authors: [{ name: "Briany's Cleaning Services" }],
  creator: "Briany's Cleaning Services",
  publisher: "Briany's Cleaning Services",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: SITE_URL,
    siteName: "Briany's Cleaning Services",
    title: "Briany's Cleaning Services | Gauteng's Most Trusted Cleaners",
    description:
      "Professional cleaning for homes, offices, hotels, and events across all of Gauteng. Fully insured, vetted staff, eco-friendly products.",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Briany's Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Briany's Cleaning Services | Gauteng's Most Trusted Cleaners",
    description:
      "Professional cleaning for homes, offices, hotels, and events across all of Gauteng.",
    images: ["/images/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HouseCleaning"],
  "@id": `${SITE_URL}/#business`,
  name: "Briany's Cleaning Services",
  description:
    "Professional commercial, residential, carpet, and event cleaning services across all of Gauteng, South Africa.",
  url: SITE_URL,
  telephone: "+27785231743",
  email: "info@brianyscleaning.co.za",
  priceRange: "$$",
  currenciesAccepted: "ZAR",
  paymentAccepted: "Cash, EFT, Credit Card",
  image: `${SITE_URL}/images/logo.webp`,
  logo: `${SITE_URL}/images/logo.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gauteng",
    addressLocality: "Johannesburg",
    addressRegion: "Gauteng",
    postalCode: "2000",
    addressCountry: "ZA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -26.2041,
    longitude: 28.0473,
  },
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
  areaServed: [
    "Johannesburg",
    "Pretoria",
    "Sandton",
    "Midrand",
    "Centurion",
    "Soweto",
    "Germiston",
    "Boksburg",
    "Benoni",
    "Roodepoort",
    "Randburg",
    "Krugersdorp",
    "Alberton",
    "Ekurhuleni",
    "Tshwane",
    "East Rand",
    "West Rand",
    "Fourways",
    "Sunninghill",
    "Rosebank",
    "Bryanston",
    "Woodmead",
    "Edenvale",
    "Springs",
    "Kempton Park",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cleaning Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Cleaning",
          description: "Comprehensive commercial cleaning for offices, warehouses, and business premises.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Office & House Cleaning",
          description: "Thorough residential and office cleaning tailored to your schedule.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hotel & Hall Cleaning",
          description: "Professional-grade cleaning for hospitality venues and event halls.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pre & Post Event Cleaning",
          description: "Full setup and cleanup services before and after any event.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Carpet Cleaning",
          description: "Deep carpet cleaning using professional equipment and eco-friendly solutions.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Regular Contracts",
          description: "Flexible recurring cleaning contracts for homes and businesses.",
        },
      },
    ],
  },
  sameAs: [
    "https://www.facebook.com/brianyscleaning",
    "https://www.instagram.com/brianyscleaning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1D8FD8" />
        <meta name="geo.region" content="ZA-GP" />
        <meta name="geo.placename" content="Gauteng, South Africa" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
