import { Star } from "lucide-react";

export function GoogleRating({
  rating,
  userRatingCount,
}: {
  rating: number;
  userRatingCount?: number;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < Math.round(rating) ? "fill-google-star text-google-star" : "text-border"
            }`}
          />
        ))}
      </div>
      <span className="text-sm font-bold text-text-primary">{rating.toFixed(1)}</span>
      {typeof userRatingCount === "number" && (
        <span className="text-sm text-text-secondary">({userRatingCount} reseñas)</span>
      )}
    </div>
  );
}
