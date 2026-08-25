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
    line1: "Aldea Bobes, 30, Nave 4",
    postalCode: "33429",
    city: "Bobes",
    region: "Asturias",
    country: "ES",
    full: "Aldea Bobes, 30, Nave 4, 33429 Bobes, Asturias",
  },
  social: {
    instagram: "https://www.instagram.com/emcantabrico/",
    facebook: "https://www.facebook.com/people/Electromec%C3%A1nica-del-Cant%C3%A1brico/100093624177526/",
    linkedin: "https://es.linkedin.com/company/electromec%C3%A1nica-del-cant%C3%A1brico",
  },
  googlePlaceId: process.env.GOOGLE_PLACE_ID ?? "",
} as const;

/**
 * Horario semanal del taller. `schemaDay` es el valor en inglés que exige
 * schema.org/OpeningHoursSpecification; `shifts` son los tramos horarios
 * del día (vacío = cerrado).
 */
export const weeklyHours = [
  { day: "Lunes", schemaDay: "Monday", shifts: [["08:00", "14:00"], ["15:00", "20:00"]] },
  { day: "Martes", schemaDay: "Tuesday", shifts: [["08:00", "14:00"], ["15:00", "20:00"]] },
  { day: "Miércoles", schemaDay: "Wednesday", shifts: [["08:00", "14:00"], ["15:00", "20:00"]] },
  { day: "Jueves", schemaDay: "Thursday", shifts: [["08:00", "14:00"], ["15:00", "20:00"]] },
  { day: "Viernes", schemaDay: "Friday", shifts: [["08:00", "14:00"]] },
  { day: "Sábado", schemaDay: "Saturday", shifts: [] },
  { day: "Domingo", schemaDay: "Sunday", shifts: [] },
] as const;

export function getDisplayHours() {
  return weeklyHours.map(({ day, shifts }) => ({
    day,
    hours: shifts.length ? shifts.map(([open, close]) => `${open}–${close}`).join(" y ") : "Cerrado",
  }));
}

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
