import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { services } from "@/content/services";
import { tips } from "@/content/tips";

export default function sitemap(): MetadataRoute.Sitemap {
  // Las páginas legales son noindex a propósito; se excluyen del sitemap
  // para no enviar una señal contradictoria a los buscadores.
  const staticRoutes = ["", "/servicios", "/taller", "/contacto", "/consejos"];

  const serviceRoutes = services.map((service) => `/servicios/${service.slug}`);
  const tipRoutes = tips.map((tip) => `/consejos/${tip.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...tipRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));
}
