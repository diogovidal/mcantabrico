import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { getFeaturedServices } from "@/content/services";

export function FeaturedServices() {
  const featured = getFeaturedServices();

  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            Nuestros servicios
          </h2>
          <p className="mt-3 text-text-secondary">
            Mecánica, electromecánica y mantenimiento para tu vehículo, con
            explicación clara en cada paso.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service) => (
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

        <div className="mt-10 text-center">
          <Button href="/servicios" variant="ghost" size="lg">
            Ver todos los servicios
          </Button>
        </div>
      </Container>
    </section>
  );
}
