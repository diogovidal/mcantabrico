import { Ear, MessageSquareText, Settings2, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";

const reasons = [
  {
    Icon: Ear,
    title: "Entendemos el problema",
    description:
      "Escuchamos cómo describes la avería y lo contrastamos con la revisión del vehículo antes de actuar.",
  },
  {
    Icon: MessageSquareText,
    title: "Te explicamos la solución",
    description:
      "Antes de reparar nada, te explicamos qué hemos encontrado y qué opciones tienes, en un lenguaje claro.",
  },
  {
    Icon: Settings2,
    title: "Diagnosis con criterio técnico",
    description:
      "Combinamos mecánica y electromecánica para no cambiar piezas que no son la causa real del problema.",
  },
  {
    Icon: Users,
    title: "Atención cercana",
    description:
      "Trato directo con el taller, sin intermediarios, en el centro de Asturias.",
  },
];

export function WhyUs() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            Por qué EMCantábrico
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ Icon, title, description }) => (
            <div key={title} className="rounded-card border border-border bg-surface-elevated p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 text-base font-bold text-text-primary">{title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
