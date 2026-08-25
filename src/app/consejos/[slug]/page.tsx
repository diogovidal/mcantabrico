import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { getServiceBySlug } from "@/content/services";
import { getTipBySlug, tips } from "@/content/tips";
import { getArticleSchema, jsonLdScript } from "@/lib/seo";
import { whatsappHref } from "@/lib/config";

export function generateStaticParams() {
  return tips.map((tip) => ({ slug: tip.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tip = getTipBySlug(slug);
  if (!tip) return {};

  return {
    title: tip.title,
    description: tip.excerpt,
    alternates: { canonical: `/consejos/${tip.slug}` },
    openGraph: { title: tip.title, description: tip.excerpt },
  };
}

export default async function TipPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tip = getTipBySlug(slug);
  if (!tip) notFound();

  const relatedService = tip.relatedService ? getServiceBySlug(tip.relatedService) : undefined;

  return (
    <>
      <Breadcrumb items={[{ label: "Consejos", href: "/consejos" }, { label: tip.title }]} />

      <article className="py-14 sm:py-20">
        <Container className="max-w-2xl">
          <time dateTime={tip.publishedAt} className="text-xs font-semibold text-text-secondary">
            {new Date(tip.publishedAt).toLocaleDateString("es-ES", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            {tip.title}
          </h1>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-text-secondary">
            {tip.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {relatedService && (
            <div className="mt-10 rounded-card border border-border bg-surface p-6">
              <p className="text-sm text-text-secondary">¿Necesitas este servicio?</p>
              <p className="mt-1 font-bold text-text-primary">{relatedService.navLabel}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button href={`/servicios/${relatedService.slug}`} variant="ghost">
                  Ver servicio
                </Button>
                <Button
                  href={whatsappHref(`Hola, quiero pedir cita para: ${relatedService.navLabel}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pedir cita por WhatsApp
                </Button>
              </div>
            </div>
          )}
        </Container>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(getArticleSchema(tip))} />
    </>
  );
}
