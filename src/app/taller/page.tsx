import type { Metadata } from "next";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { GooglePhotoGallery } from "@/components/google/GooglePhotoGallery";
import { GoogleMapsAttribution } from "@/components/google/GoogleMapsAttribution";
import { GoogleMapEmbed } from "@/components/ui/GoogleMapEmbed";
import { fetchPlaceDetails } from "@/lib/google-places";
import { siteConfig, whatsappHref } from "@/lib/config";

export const metadata: Metadata = {
  title: "El taller",
  description:
    "Conoce el taller EMCantábrico en el centro de Asturias: instalaciones, filosofía de trabajo y localización.",
  alternates: { canonical: "/taller" },
};

export default async function TallerPage() {
  const place = await fetchPlaceDetails();
  const photos = place?.photos.slice(0, 6) ?? [];

  return (
    <>
      <Breadcrumb items={[{ label: "Taller" }]} />

      <section className="relative overflow-hidden bg-surface">
        <Container className="grid grid-cols-1 items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="mb-4 text-xs font-bold tracking-widest text-brand-accent uppercase">
              Nuestro taller
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
              Tu taller en el centro de Asturias
            </h1>
            <p className="mt-5 max-w-lg text-lg text-text-secondary">
              Un taller de electromecánica pensado para explicarte lo que le
              pasa a tu coche con claridad, y resolverlo con criterio técnico.
            </p>
            <Button
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="mt-7"
            >
              Pedir cita por WhatsApp
            </Button>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card-lg">
            <Image
              src="/images/taller.jpg"
              alt="Entrada del taller EMCantábrico"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold text-text-primary">Nuestra historia</h2>
          <div className="mt-4 rounded-card border border-dashed border-border bg-surface p-6 text-sm text-text-secondary">
            <p>
              Esta sección está reservada para la historia real del taller
              (año de inicio, trayectoria y experiencia del equipo). Se
              actualizará con la información que confirme el propietario, sin
              publicar datos estimados.
            </p>
          </div>

          <h2 className="mt-10 text-2xl font-bold text-text-primary">Filosofía de trabajo</h2>
          <p className="mt-4 leading-relaxed text-text-secondary">
            En EMCantábrico priorizamos entender el problema antes de
            intervenir: escuchamos lo que describe el cliente, lo contrastamos
            con una revisión mecánica y, cuando es necesario, con una diagnosis
            electrónica. El objetivo es explicar con claridad qué se ha
            encontrado y qué opciones existen antes de reparar nada.
          </p>
        </Container>
      </section>

      <section className="bg-surface py-14 sm:py-16">
        <Container>
          <h2 className="text-2xl font-bold text-text-primary">Instalaciones</h2>
          {photos.length > 0 ? (
            <div className="mt-6">
              <GooglePhotoGallery photos={photos} />
              <GoogleMapsAttribution className="mt-3" />
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-card">
                <Image
                  src="/images/taller-hero.jpg"
                  alt="Instalaciones del taller EMCantábrico"
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex aspect-[4/3] items-center justify-center rounded-card border border-dashed border-border bg-surface-elevated p-6 text-center text-sm text-text-secondary">
                Más fotos de las instalaciones se añadirán próximamente.
              </div>
            </div>
          )}
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold text-text-primary">
            Equipamiento y capacidades técnicas
          </h2>
          <div className="mt-4 rounded-card border border-dashed border-border bg-surface p-6 text-sm text-text-secondary">
            <p>
              El detalle de equipamiento y capacidades técnicas confirmadas se
              publicará aquí una vez validado por el propietario del taller.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-background-dark py-14 text-center text-text-on-dark-secondary">
        <Container>
          <p className="flex items-center justify-center gap-2 text-text-on-dark-primary">
            <MapPin className="h-5 w-5 text-brand-accent-on-dark" aria-hidden />
            {siteConfig.address.full}
          </p>
          <div className="mx-auto mt-6 aspect-video w-full max-w-2xl overflow-hidden rounded-card border border-border-on-dark">
            <GoogleMapEmbed address={siteConfig.address.full} />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={whatsappHref()} target="_blank" rel="noopener noreferrer" size="lg">
              Pedir cita por WhatsApp
            </Button>
            <Button href="/contacto" size="lg" variant="outline-on-dark">
              Ven a conocernos
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
