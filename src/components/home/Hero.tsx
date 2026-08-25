import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig, telHref, whatsappHref } from "@/lib/config";

export function Hero() {
  return (
    <section className="overflow-hidden bg-surface">
      <Container className="grid grid-cols-1 items-center gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div>
          <p className="mb-4 text-xs font-bold tracking-widest text-brand-accent uppercase">
            Taller de electromecánica en Asturias
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-5xl">
            Tu coche, en manos de especialistas.
          </h1>
          <p className="mt-5 max-w-lg text-lg text-text-secondary">
            Diagnosis, electromecánica, mantenimiento y reparación profesional
            en el centro de Asturias.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={whatsappHref()} target="_blank" rel="noopener noreferrer" size="lg">
              Pedir cita por WhatsApp
            </Button>
            <Button href="/servicios" size="lg" variant="ghost">
              Ver servicios
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-text-secondary">
            <a href={telHref()} className="flex items-center gap-2 hover:text-brand-accent">
              <Phone className="h-4 w-4" aria-hidden />
              {siteConfig.phoneDisplay}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden />
              {siteConfig.address.full}
            </span>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card-lg lg:aspect-[5/4]">
          <Image
            src="/images/nave.jpg"
            alt="Nave del taller EMCantábrico en Asturias"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            style={{ objectPosition: "60% 50%" }}
          />
        </div>
      </Container>
    </section>
  );
}
