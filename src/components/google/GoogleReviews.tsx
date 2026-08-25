"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BadgeCheck, ChevronLeft, ChevronRight, Star } from "lucide-react";
import type { NormalizedReview } from "@/lib/google-places";

function ReviewCard({ review }: { review: NormalizedReview }) {
  const [avatarFailed, setAvatarFailed] = useState(false);

  return (
    <article className="flex h-full flex-col rounded-card border border-border bg-surface-elevated p-6">
      <div className="mb-3 flex items-center gap-3">
        {review.authorPhotoUrl && !avatarFailed ? (
          <Image
            src={review.authorPhotoUrl}
            alt={review.authorName}
            width={40}
            height={40}
            unoptimized
            className="h-10 w-10 rounded-full object-cover"
            onError={() => setAvatarFailed(true)}
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
              i < review.rating ? "fill-google-star text-google-star" : "text-border"
            }`}
          />
        ))}
      </div>

      <p className="line-clamp-6 text-sm text-text-secondary">{review.text}</p>

      <p className="mt-4 flex items-center gap-1.5 text-xs text-text-secondary">
        <BadgeCheck className="h-3.5 w-3.5 text-brand-accent" aria-hidden />
        Reseña verificada de Google
      </p>
    </article>
  );
}

export function GoogleReviews({ reviews }: { reviews: NormalizedReview[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  const scrollBy = (direction: 1 | -1) => {
    const next = Math.min(Math.max(activeIndex + direction, 0), reviews.length - 1);
    scrollToIndex(next);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const cards = Array.from(track.children) as HTMLElement[];
      const trackLeft = track.scrollLeft;
      let closest = 0;
      let closestDistance = Infinity;
      cards.forEach((card, i) => {
        const distance = Math.abs(card.offsetLeft - trackLeft);
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = i;
        }
      });
      setActiveIndex(closest);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <div
        ref={trackRef}
        role="region"
        aria-label="Reseñas de clientes en Google"
        className="scrollbar-hide flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            className="w-[85%] shrink-0 snap-start sm:w-[46%] lg:w-[31%]"
          >
            <ReviewCard review={review} />
          </div>
        ))}
      </div>

      {reviews.length > 1 && (
        <>
          <div className="mt-5 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              disabled={activeIndex === 0}
              aria-label="Reseña anterior"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface-elevated text-text-primary transition-opacity hover:border-brand-accent disabled:opacity-30"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden />
            </button>

            <div className="flex">
              {reviews.map((review, i) => (
                <button
                  key={review.id}
                  type="button"
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Ir a la reseña ${i + 1}`}
                  aria-current={i === activeIndex}
                  className="flex h-6 w-6 items-center justify-center"
                >
                  <span
                    className={`h-1.5 rounded-full transition-all ${
                      i === activeIndex ? "w-5 bg-brand-accent" : "w-1.5 bg-border"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollBy(1)}
              disabled={activeIndex === reviews.length - 1}
              aria-label="Siguiente reseña"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface-elevated text-text-primary transition-opacity hover:border-brand-accent disabled:opacity-30"
            >
              <ChevronRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
