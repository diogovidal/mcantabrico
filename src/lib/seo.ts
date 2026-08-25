import { siteConfig, weeklyHours } from "@/lib/config";
import type { FaqItem, Service } from "@/content/services";
import type { Tip } from "@/content/tips";

function getOpeningHoursSpecification() {
  return weeklyHours
    .filter((day) => day.shifts.length > 0)
    .flatMap((day) =>
      day.shifts.map(([opens, closes]) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: day.schemaDay,
        opens,
        closes,
      })),
    );
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    telephone: `+34${siteConfig.phone}`,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    openingHoursSpecification: getOpeningHoursSpecification(),
  };
}

export function getServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.navLabel,
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "AutoRepair",
      name: siteConfig.legalName,
      telephone: `+34${siteConfig.phone}`,
    },
    areaServed: "Asturias",
    url: `${siteConfig.url}/servicios/${service.slug}`,
  };
}

export function getFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getArticleSchema(tip: Tip) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: tip.title,
    description: tip.excerpt,
    datePublished: tip.publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.legalName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
    },
    mainEntityOfPage: `${siteConfig.url}/consejos/${tip.slug}`,
  };
}

export function jsonLdScript(data: object) {
  return { __html: JSON.stringify(data) };
}
