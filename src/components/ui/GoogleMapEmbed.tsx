"use client";

import { useSyncExternalStore } from "react";
import { MapPin } from "lucide-react";
import {
  getCookieConsent,
  getCookieConsentServerSnapshot,
  setCookieConsent,
  subscribeCookieConsent,
} from "@/lib/cookie-consent";

export function GoogleMapEmbed({ address, className }: { address: string; className?: string }) {
  const consent = useSyncExternalStore(
    subscribeCookieConsent,
    getCookieConsent,
    getCookieConsentServerSnapshot,
  );

  if (consent !== "accepted") {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-3 rounded-card border border-dashed border-border bg-surface p-8 text-center ${className ?? ""}`}
      >
        <MapPin className="h-6 w-6 text-brand-accent" aria-hidden />
        <p className="text-sm text-text-secondary">
          El mapa se carga a través de Google y requiere tu consentimiento de
          cookies.
        </p>
        <button
          type="button"
          onClick={() => setCookieConsent("accepted")}
          className="rounded-btn bg-brand-accent px-4 py-2 text-sm font-semibold text-white hover:bg-brand-accent/90"
        >
          Aceptar y ver mapa
        </button>
      </div>
    );
  }

  return (
    <iframe
      title="Ubicación de EMCantábrico"
      src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
      className={`h-full w-full border-0 ${className ?? ""}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
