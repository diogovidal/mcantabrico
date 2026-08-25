import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { serviceGroups, services } from "@/content/services";
import { whatsappHref } from "@/lib/config";

export const metadata: Metadata = {
  title: "Servicios de taller en Asturias",
  description:
    "Diagnosis electrónica, mecánica, electromecánica y mantenimiento del automóvil en Asturias. Descubre todos los servicios de EMCantábrico.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Servicios" }]} />

      <section className="bg-surface py-14 sm:py-20">
        <Container className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
            Servicios
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
            Mecánica, electromecánica y mantenimiento del automóvil en Asturias,
            explicado con claridad en cada paso.
          </p>
        </Container>
      </section>

      {serviceGroups.map((group) => (
        <section key={group.id} className="py-12 sm:py-14">
          <Container>
            <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-text-primary">
              {group.label}
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services
                .filter((s) => s.group === group.id)
                .map((service) => (
                  <Card key={service.slug} className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-text-primary">{service.navLabel}</h3>
                      <p className="mt-2 text-sm text-text-secondary">{service.benefit}</p>
                    </div>
                    <Link
                      href={`/servicios/${service.slug}`}
                      className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-accent"
                    >
                      Ver servicio
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </Card>
                ))}
            </div>
          </Container>
        </section>
      ))}

      <section className="bg-background-dark py-14 text-center text-text-on-dark-secondary">
        <Container>
          <HelpCircle className="mx-auto h-9 w-9 text-brand-accent-on-dark" aria-hidden />
          <h2 className="mt-4 text-2xl font-extrabold text-text-on-dark-primary">
            ¿No sabes qué servicio necesitas?
          </h2>
          <p className="mx-auto mt-2 max-w-md">
            Cuéntanos qué le pasa a tu coche y te orientamos hacia el servicio adecuado.
          </p>
          <Button
            href={whatsappHref("Hola, no sé qué servicio necesito, ¿me podéis orientar?")}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="mt-6"
          >
            Contarnos el problema por WhatsApp
          </Button>
        </Container>
      </section>
    </>
  );
}
