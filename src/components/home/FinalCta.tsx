import { MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig, telHref, whatsappHref } from "@/lib/config";

export function FinalCta() {
  return (
    <section className="bg-brand-primary py-16 text-white sm:py-20">
      <Container className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          ¿Necesitas revisar tu coche?
        </h2>
        <p className="mt-3 text-white/80">
          Pide cita o contacta directamente con el taller en {siteConfig.address.city}.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={whatsappHref()} target="_blank" rel="noopener noreferrer" size="lg">
            <MessageCircle className="h-4 w-4" aria-hidden />
            Pedir cita por WhatsApp
          </Button>
          <Button href={telHref()} size="lg" variant="outline-on-dark">
            <Phone className="h-4 w-4" aria-hidden />
            Llamar
          </Button>
        </div>
      </Container>
    </section>
  );
}
