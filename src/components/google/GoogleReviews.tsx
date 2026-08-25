import Image from "next/image";
import { Star } from "lucide-react";
import type { NormalizedReview } from "@/lib/google-places";

export function GoogleReviews({ reviews }: { reviews: NormalizedReview[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      {reviews.map((review) => (
        <article
          key={review.id}
          className="flex flex-col rounded-card border border-border bg-surface-elevated p-6"
        >
          <div className="mb-3 flex items-center gap-3">
            {review.authorPhotoUrl ? (
              <Image
                src={review.authorPhotoUrl}
                alt={review.authorName}
                width={40}
                height={40}
                unoptimized
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-sm font-bold text-text-secondary">
                {review.authorName.charAt(0)}
              </div>
            )}
            <div>
              <p className="text-sm font-semibold text-text-primary">{review.authorName}</p>
              <p className="text-xs text-text-secondary">{review.relativeTime}</p>
            </div>
          </div>

          <div className="mb-2 flex gap-0.5" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < review.rating ? "fill-brand-accent text-brand-accent" : "text-border"
                }`}
              />
            ))}
          </div>

          <p className="line-clamp-5 text-sm text-text-secondary">{review.text}</p>
        </article>
      ))}
    </div>
  );
}
