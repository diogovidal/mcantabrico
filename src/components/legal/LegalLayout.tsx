import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export function LegalLayout({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Breadcrumb items={[{ label: title }]} />
      <article className="py-14 sm:py-20">
        <Container className="max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-text-secondary">Última actualización: {updatedAt}</p>

          <div className="mt-6 rounded-card border border-dashed border-border bg-surface p-5 text-sm text-text-secondary">
            Este texto es una plantilla legal genérica generada como punto de
            partida. Antes de publicar el sitio, debe ser revisado y
            completado por un profesional legal y por el propietario del
            negocio (datos fiscales, inscripción registral y cualquier
            particularidad no cubierta aquí).
          </div>

          <div className="prose-legal mt-8 space-y-6 text-sm leading-relaxed text-text-secondary [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-text-primary [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1">
            {children}
          </div>
        </Container>
      </article>
    </>
  );
}
