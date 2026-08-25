import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/config";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ label: "Inicio", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${siteConfig.url}${item.href}` : undefined,
    })),
  };

  return (
    <nav aria-label="Migas de pan" className="border-b border-border bg-surface">
      <Container>
        <ol className="flex flex-wrap items-center gap-1.5 py-3 text-xs text-text-secondary">
          {allItems.map((item, index) => (
            <li key={item.label} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden />}
              {item.href && index < allItems.length - 1 ? (
                <Link href={item.href} className="hover:text-brand-accent">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="font-medium text-text-primary">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}
