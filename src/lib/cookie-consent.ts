export const COOKIE_CONSENT_KEY = "emcantabrico-cookie-consent";
export const COOKIE_CONSENT_EVENT = "emcantabrico-cookie-consent-changed";

export type CookieConsentValue = "accepted" | "rejected";

export function getCookieConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  return value === "accepted" || value === "rejected" ? value : null;
}

export function setCookieConsent(value: CookieConsentValue) {
  window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: value }));
}

export function subscribeCookieConsent(callback: () => void) {
  window.addEventListener(COOKIE_CONSENT_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(COOKIE_CONSENT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

export function getCookieConsentServerSnapshot(): CookieConsentValue | null {
  return null;
}
