import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card } from "@/components/ui/Card";
import { getLatestTips } from "@/content/tips";

export const metadata: Metadata = {
  title: "Consejos",
  description:
    "Consejos prácticos sobre mantenimiento, averías y revisiones del automóvil, explicados con claridad por EMCantábrico.",
  alternates: { canonical: "/consejos" },
};

export default function ConsejosPage() {
  const tips = getLatestTips(50);

  return (
    <>
      <Breadcrumb items={[{ label: "Consejos" }]} />

      <section className="py-14 sm:py-20">
        <Container>
          <h1 className="text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
            Consejos
          </h1>
          <p className="mt-4 max-w-xl text-lg text-text-secondary">
            Información práctica para entender mejor a tu coche y anticiparte
            a las averías más comunes.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tips.map((tip) => (
              <Card key={tip.slug} className="flex flex-col justify-between">
                <div>
                  <time
                    dateTime={tip.publishedAt}
                    className="text-xs font-semibold text-text-secondary"
                  >
                    {new Date(tip.publishedAt).toLocaleDateString("es-ES", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <h2 className="mt-2 text-lg font-bold text-text-primary">{tip.title}</h2>
                  <p className="mt-2 text-sm text-text-secondary">{tip.excerpt}</p>
                </div>
                <Link
                  href={`/consejos/${tip.slug}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-accent"
                >
                  Leer más
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
