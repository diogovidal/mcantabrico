import type { NormalizedPhoto } from "@/lib/google-places";
import { getPlacePhotoUrl } from "@/lib/google-places";

export function GooglePhotoGallery({ photos }: { photos: NormalizedPhoto[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {photos.map((photo) => (
        <a
          key={photo.name}
          href={getPlacePhotoUrl(photo.name, 1600)}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block aspect-square overflow-hidden rounded-card border border-border"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- imagen servida vía redirect de Places API, no compatible con next/image */}
          <img
            src={getPlacePhotoUrl(photo.name, 640)}
            alt={photo.attributions.length ? `Foto de ${photo.attributions.join(", ")}` : "Foto del taller EMCantábrico"}
            className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
            loading="lazy"
          />
          {photo.attributions.length > 0 && (
            <span className="absolute bottom-0 left-0 right-0 bg-black/50 px-2 py-1 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100">
              Foto: {photo.attributions.join(", ")}
            </span>
          )}
        </a>
      ))}
    </div>
  );
}
