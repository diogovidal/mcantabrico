import { siteConfig } from "@/lib/config";

const PLACES_API_BASE = "https://places.googleapis.com/v1";
const FIELD_MASK = [
  "id",
  "displayName",
  "rating",
  "userRatingCount",
  "googleMapsUri",
  "reviews",
  "photos",
].join(",");

export interface NormalizedReview {
  id: string;
  authorName: string;
  authorPhotoUrl?: string;
  authorUri?: string;
  rating: number;
  relativeTime: string;
  text: string;
  publishTime: string;
}

export interface NormalizedPhoto {
  name: string;
  widthPx: number;
  heightPx: number;
  attributions: string[];
}

export interface NormalizedPlaceData {
  displayName: string;
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews: NormalizedReview[];
  photos: NormalizedPhoto[];
}

interface RawPlaceReview {
  name: string;
  relativePublishTimeDescription: string;
  rating: number;
  text?: { text: string; languageCode: string };
  originalText?: { text: string; languageCode: string };
  authorAttribution?: { displayName: string; uri?: string; photoUri?: string };
  publishTime: string;
}

interface RawPlacePhoto {
  name: string;
  widthPx: number;
  heightPx: number;
  authorAttributions?: { displayName: string }[];
}

interface RawPlaceDetails {
  displayName?: { text: string };
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: RawPlaceReview[];
  photos?: RawPlacePhoto[];
}

export function isGooglePlacesConfigured() {
  return Boolean(process.env.GOOGLE_MAPS_API_KEY && siteConfig.googlePlaceId);
}

/**
 * Consulta Place Details (New) usando el FieldMask mínimo necesario.
 * Devuelve null si no hay credenciales configuradas o si la llamada falla,
 * para que los componentes puedan aplicar su fallback sin romper el build.
 */
export async function fetchPlaceDetails(): Promise<NormalizedPlaceData | null> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = siteConfig.googlePlaceId;

  if (!apiKey || !placeId) {
    return null;
  }

  try {
    const response = await fetch(`${PLACES_API_BASE}/places/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": FIELD_MASK,
      },
      // Revalidación periódica: respeta un cache corto, sin persistir el
      // contenido indefinidamente (spec 9.1).
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as RawPlaceDetails;
    return normalizePlaceData(data);
  } catch {
    return null;
  }
}

export function normalizePlaceData(raw: RawPlaceDetails): NormalizedPlaceData {
  return {
    displayName: raw.displayName?.text ?? siteConfig.legalName,
    rating: raw.rating,
    userRatingCount: raw.userRatingCount,
    googleMapsUri: raw.googleMapsUri,
    reviews: (raw.reviews ?? []).map((review) => ({
      id: review.name,
      authorName: review.authorAttribution?.displayName ?? "Cliente de Google",
      authorPhotoUrl: review.authorAttribution?.photoUri,
      authorUri: review.authorAttribution?.uri,
      rating: review.rating,
      relativeTime: review.relativePublishTimeDescription,
      text: review.text?.text ?? review.originalText?.text ?? "",
      publishTime: review.publishTime,
    })),
    photos: (raw.photos ?? []).map((photo) => ({
      name: photo.name,
      widthPx: photo.widthPx,
      heightPx: photo.heightPx,
      attributions: (photo.authorAttributions ?? []).map((a) => a.displayName),
    })),
  };
}

/**
 * Construye la URL de un medio de foto de Places API (New).
 * `photoName` es el campo `name` devuelto en photos (p. ej. "places/xxx/photos/yyy").
 */
export function getPlacePhotoUrl(photoName: string, maxWidthPx = 1024) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  return `${PLACES_API_BASE}/${photoName}/media?maxWidthPx=${maxWidthPx}&key=${apiKey}`;
}
