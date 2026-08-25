"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import {
  getCookieConsent,
  getCookieConsentServerSnapshot,
  setCookieConsent,
  subscribeCookieConsent,
} from "@/lib/cookie-consent";

export function CookieConsentBanner() {
  const consent = useSyncExternalStore(
    subscribeCookieConsent,
    getCookieConsent,
    getCookieConsentServerSnapshot,
  );

  if (consent !== null) return null;

  return (
    <div className="fixed inset-x-0 bottom-16 z-50 px-4 pb-4 lg:bottom-0 lg:pb-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-card-lg border border-border bg-surface-elevated p-5 shadow-xl shadow-black/10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-text-secondary">
          Usamos cookies técnicas necesarias y, al mostrar el mapa, contenido
          de Google que puede establecer sus propias cookies. Consulta nuestra{" "}
          <Link href="/cookies" className="underline hover:text-brand-accent">
            política de cookies
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => setCookieConsent("rejected")}
            className="rounded-btn border border-border px-4 py-2 text-sm font-semibold text-text-primary hover:bg-surface"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={() => setCookieConsent("accepted")}
            className="rounded-btn bg-brand-accent px-4 py-2 text-sm font-semibold text-white hover:bg-brand-accent/90"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
