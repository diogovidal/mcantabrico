import Image from "next/image";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GoogleMapEmbed } from "@/components/ui/GoogleMapEmbed";
import { siteConfig } from "@/lib/config";

export function WorkshopLocation() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card-lg">
          <Image
            src="/images/nave2.jpg"
            alt="Interior de la nave del taller EMCantábrico"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="mb-4 text-xs font-bold tracking-widest text-brand-accent uppercase">
            Nuestra oficina
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            Tu taller en el centro de Asturias
          </h2>
          <p className="mt-5 flex items-start gap-2 text-text-secondary">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
            {siteConfig.address.full}
          </p>

          <div className="mt-6 aspect-video w-full overflow-hidden rounded-card border border-border">
            <GoogleMapEmbed address={siteConfig.address.full} />
          </div>

          <Button href="/taller" size="lg" className="mt-6">
            Conoce el taller
          </Button>
        </div>
      </Container>
    </section>
  );
}
