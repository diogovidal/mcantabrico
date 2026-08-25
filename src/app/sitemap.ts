import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { services } from "@/content/services";
import { tips } from "@/content/tips";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/servicios",
    "/taller",
    "/contacto",
    "/consejos",
    "/aviso-legal",
    "/privacidad",
    "/cookies",
  ];

  const serviceRoutes = services.map((service) => `/servicios/${service.slug}`);
  const tipRoutes = tips.map((tip) => `/consejos/${tip.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...tipRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));
}
