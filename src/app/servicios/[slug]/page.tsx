import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/services/FaqAccordion";
import { getServiceBySlug, serviceGroups, services } from "@/content/services";
import { getFaqSchema, getServiceSchema, jsonLdScript } from "@/lib/seo";
import { whatsappHref } from "@/lib/config";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.seoTitle,
    description: service.metaDescription,
    alternates: { canonical: `/servicios/${service.slug}` },
    openGraph: {
      title: service.seoTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const groupLabel = serviceGroups.find((g) => g.id === service.group)?.label ?? "";

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Servicios", href: "/servicios" },
          { label: service.navLabel },
        ]}
      />

      <section className="bg-surface py-12 sm:py-16">
        <Container>
          <p className="mb-3 text-xs font-bold tracking-widest text-brand-accent uppercase">
            {groupLabel}
          </p>
          <h1 className="max-w-2xl text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-text-secondary">{service.benefit}</p>
          <Button
            href={whatsappHref(`Hola, quiero pedir cita para: ${service.navLabel}.`)}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="mt-7"
          >
            Pedir cita por WhatsApp
          </Button>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold text-text-primary">¿En qué consiste?</h2>
          <p className="mt-4 leading-relaxed text-text-secondary">{service.intro}</p>
        </Container>
      </section>

      <section className="bg-surface py-12 sm:py-16">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="flex items-center gap-2 text-xl font-bold text-text-primary">
              <AlertCircle className="h-5 w-5 text-brand-accent" aria-hidden />
              Síntomas habituales
            </h2>
            <ul className="mt-4 space-y-3">
              {service.symptoms.map((symptom) => (
                <li key={symptom} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                  {symptom}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="flex items-center gap-2 text-xl font-bold text-text-primary">
              <CheckCircle2 className="h-5 w-5 text-brand-accent" aria-hidden />
              Qué revisamos o realizamos
            </h2>
            <ul className="mt-4 space-y-3">
              {service.scope.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <h2 className="text-2xl font-bold text-text-primary">Cómo funciona el proceso</h2>
          <ol className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <li key={step.title} className="rounded-card border border-border bg-surface-elevated p-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-accent text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-3 text-sm font-bold text-text-primary">{step.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-surface py-12 sm:py-16">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold text-text-primary">Preguntas frecuentes</h2>
          <div className="mt-6">
            <FaqAccordion faqs={service.faqs} />
          </div>
        </Container>
      </section>

      <section className="bg-brand-primary py-14 text-center text-white">
        <Container>
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            ¿Necesitas este servicio para tu coche?
          </h2>
          <Button
            href={whatsappHref(`Hola, quiero pedir cita para: ${service.navLabel}.`)}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="mt-6"
          >
            Pedir cita por WhatsApp
          </Button>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(getServiceSchema(service))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(getFaqSchema(service.faqs))}
      />
    </>
  );
}
