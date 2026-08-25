/**
 * Único ponto de verdade para dados de contacto e marca.
 * Todos os dados aqui são os confirmados no site atual (emcantabrico.es).
 * Não alterar sem confirmação do proprietário.
 */

export const siteConfig = {
  name: "EMCantábrico",
  legalName: "Electromecánica del Cantábrico",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://emcantabrico.es",
  description:
    "Taller de electromecánica en Asturias. Diagnosis, electromecánica, mantenimiento y reparación profesional en el centro de Asturias.",
  phone: "613053009",
  phoneDisplay: "613 053 009",
  email: "info@emcantabrico.es",
  address: {
    line1: "Bobes 30, Entrada por AS17, Nave 4",
    postalCode: "33429",
    city: "Asturias",
    region: "Asturias",
    country: "ES",
    full: "Bobes 30, Entrada por AS17, Nave 4, 33429, Asturias",
  },
  // PENDING_OWNER_INPUT: o site atual só linka para as home genéricas das
  // redes (facebook.com, instagram.com, linkedin.com), sem perfil configurado.
  // Preencher com o handle real assim que o proprietário confirmar.
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
  },
  googlePlaceId: process.env.GOOGLE_PLACE_ID ?? "",
} as const;

export function telHref() {
  return `tel:+34${siteConfig.phone}`;
}

export function whatsappHref(message?: string) {
  const defaultMessage =
    "Hola, quiero solicitar una cita en EMCantábrico.";
  const text = encodeURIComponent(message ?? defaultMessage);
  return `https://wa.me/34${siteConfig.phone}?text=${text}`;
}

export function mailtoHref() {
  return `mailto:${siteConfig.email}`;
}
