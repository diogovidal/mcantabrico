import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { GoogleMapEmbed } from "@/components/ui/GoogleMapEmbed";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { mailtoHref, siteConfig, telHref, whatsappHref } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con EMCantábrico: teléfono, WhatsApp, email y dirección del taller en Asturias.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Contacto" }]} />

      <section className="py-14 sm:py-20">
        <Container>
          <h1 className="text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
            Contacto
          </h1>
          <p className="mt-4 max-w-xl text-lg text-text-secondary">
            Llámanos o escríbenos por WhatsApp para pedir cita. Estamos en el
            centro de Asturias.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-card border border-border bg-surface-elevated p-5 hover:border-brand-accent"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#075E54]/10 text-[#075E54]">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-text-secondary">WhatsApp</p>
                  <p className="font-semibold text-text-primary">Pedir cita o consultar</p>
                </div>
              </a>

              <a
                href={telHref()}
                className="flex items-center gap-4 rounded-card border border-border bg-surface-elevated p-5 hover:border-brand-accent"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-sm text-text-secondary">Teléfono</p>
                  <p className="font-semibold text-text-primary">{siteConfig.phoneDisplay}</p>
                </div>
              </a>

              <a
                href={mailtoHref()}
                className="flex items-center gap-4 rounded-card border border-border bg-surface-elevated p-5 hover:border-brand-accent"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                  <Mail className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-sm text-text-secondary">Email</p>
                  <p className="font-semibold text-text-primary">{siteConfig.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-card border border-border bg-surface-elevated p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-sm text-text-secondary">Dirección</p>
                  <p className="font-semibold text-text-primary">{siteConfig.address.full}</p>
                </div>
              </div>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-card-lg border border-border lg:aspect-auto lg:h-full lg:min-h-[320px]">
              <GoogleMapEmbed address={siteConfig.address.full} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
