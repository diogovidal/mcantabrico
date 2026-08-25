import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const points = [
  "Lectura de códigos de error de las centralitas del vehículo",
  "Contraste de los códigos con los síntomas reales del coche",
  "Verificación de los sensores y actuadores implicados",
  "Explicación clara del problema antes de presupuestar nada",
];

export function DiagnosisSpotlight() {
  return (
    <section className="bg-background-dark py-16 text-text-on-dark-secondary sm:py-24">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-4 text-xs font-bold tracking-widest text-brand-accent-on-dark uppercase">
            Diagnosis electrónica
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-text-on-dark-primary sm:text-4xl">
            Encontrar la avería es el primer paso para repararla correctamente.
          </h2>
          <p className="mt-5 text-base leading-relaxed">
            Una diagnosis adecuada ayuda a identificar el origen real del
            problema antes de sustituir cualquier componente. Así se evita
            cambiar piezas que no eran la causa de la avería y se llega a la
            solución de forma más directa.
          </p>
          <Button href="/servicios/diagnosis-electronica" variant="outline-on-dark" size="lg" className="mt-7">
            Saber más sobre diagnosis
          </Button>
        </div>

        <ul className="space-y-4">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3 rounded-card border border-border-on-dark bg-white/5 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent-on-dark" aria-hidden />
              <span className="text-sm text-text-on-dark-primary">{point}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
