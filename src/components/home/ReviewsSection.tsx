import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GoogleRating } from "@/components/google/GoogleRating";
import { GoogleReviews } from "@/components/google/GoogleReviews";
import { GoogleMapsAttribution } from "@/components/google/GoogleMapsAttribution";
import { fetchPlaceDetails } from "@/lib/google-places";
import { siteConfig } from "@/lib/config";

export async function ReviewsSection() {
  const place = await fetchPlaceDetails();
  const reviews = place?.reviews.slice(0, 5) ?? [];
  const mapsUri =
    place?.googleMapsUri ??
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address.full)}`;

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            Lo que dicen en Google
          </h2>
          {place?.rating && (
            <div className="mt-4 flex justify-center">
              <GoogleRating rating={place.rating} userRatingCount={place.userRatingCount} />
            </div>
          )}
        </div>

        {reviews.length > 0 ? (
          <>
            <GoogleReviews reviews={reviews} />
            <p className="mt-4 text-center text-xs text-text-secondary">
              Reseñas mostradas según el orden devuelto por Google.
            </p>
          </>
        ) : (
          <p className="mx-auto max-w-md text-center text-text-secondary">
            Todavía no hay reseñas disponibles a través de la API de Google
            para mostrar aquí. Puedes consultarlas directamente en Google Maps.
          </p>
        )}

        <div className="mt-8 flex flex-col items-center gap-3">
          <Button href={mapsUri} target="_blank" rel="noopener noreferrer" variant="ghost">
            Ver reseñas en Google
          </Button>
          <GoogleMapsAttribution />
        </div>
      </Container>
    </section>
  );
}
