import { Container } from "@/components/ui/Container";

const steps = [
  { title: "Pide cita", description: "Solicitas cita por teléfono o WhatsApp." },
  { title: "Revisamos tu vehículo", description: "Inspeccionamos el coche y escuchamos lo que nos cuentas." },
  { title: "Diagnosticamos el problema", description: "Localizamos el origen real de la avería antes de actuar." },
  { title: "Te explicamos la solución", description: "Te contamos qué hemos encontrado y qué opciones tienes." },
  { title: "Realizamos la intervención", description: "Ejecutamos la reparación o el mantenimiento acordado." },
];

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            Cómo funciona
          </h2>
        </div>

        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <li key={step.title} className="relative rounded-card border border-border bg-surface-elevated p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-accent text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-4 text-sm font-bold text-text-primary">{step.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
