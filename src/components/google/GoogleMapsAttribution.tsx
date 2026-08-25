export function GoogleMapsAttribution({ className }: { className?: string }) {
  return (
    <p className={`text-xs text-text-secondary ${className ?? ""}`}>
      Reseñas y fotos proporcionadas por{" "}
      <a
        href="https://maps.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium underline hover:text-brand-accent"
      >
        Google
      </a>
      .
    </p>
  );
}
