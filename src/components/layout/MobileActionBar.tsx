import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { siteConfig, telHref, whatsappHref } from "@/lib/config";

export function MobileActionBar() {
  return (
    <nav
      aria-label="Acciones rápidas"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-surface-elevated shadow-[0_-4px_16px_rgba(0,0,0,0.06)] lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={telHref()}
        className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-text-primary"
      >
        <Phone className="h-5 w-5" aria-hidden />
        Llamar
      </a>
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 border-l border-border bg-[#075E54] py-3 text-xs font-semibold text-white"
      >
        <WhatsAppIcon className="h-5 w-5" />
        WhatsApp
      </a>
      <span className="sr-only">{siteConfig.phoneDisplay}</span>
    </nav>
  );
}
