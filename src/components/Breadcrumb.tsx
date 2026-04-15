import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: Props) {
  const all = [{ label: "Home", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: item.href
        ? `https://www.brianyscleaning.co.za${item.href}`
        : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-white/60 max-w-7xl mx-auto">
          {all.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              {i === 0 && <Home className="w-3.5 h-3.5" />}
              {item.href && i < all.length - 1 ? (
                <Link
                  href={item.href}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={i === all.length - 1 ? "text-white/90" : ""}>
                  {item.label}
                </span>
              )}
              {i < all.length - 1 && (
                <ChevronRight className="w-3 h-3 text-white/30" />
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
