import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { getLatestTips } from "@/content/tips";

export function LatestTips() {
  const latest = getLatestTips(3);

  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            Consejos
          </h2>
          <p className="mt-3 text-text-secondary">
            Información práctica para entender mejor a tu coche.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {latest.map((tip) => (
            <Card key={tip.slug} className="flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-text-primary">{tip.title}</h3>
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
  );
}
