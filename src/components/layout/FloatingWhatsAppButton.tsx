import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { whatsappHref } from "@/lib/config";

export function FloatingWhatsAppButton() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#075E54] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 lg:flex"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
