import Link from "next/link";
import {
  AlertTriangle,
  BatteryWarning,
  ClipboardCheck,
  HelpCircle,
  TrendingDown,
  Volume2,
  Wind,
  Wrench,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { whatsappHref } from "@/lib/config";

const symptoms = [
  { label: "Se encendió un testigo", href: "/servicios/diagnosis-electronica", Icon: AlertTriangle },
  { label: "Escucho un ruido", href: "/servicios/mecanica", Icon: Volume2 },
  { label: "El coche no arranca", href: "/servicios/baterias", Icon: BatteryWarning },
  { label: "Pierde potencia", href: "/servicios/diagnosis-electronica", Icon: TrendingDown },
  { label: "Necesito mantenimiento", href: "/servicios/mantenimiento", Icon: Wrench },
  { label: "Problemas con el aire", href: "/servicios/aire-acondicionado", Icon: Wind },
  { label: "Preparar la ITV", href: "/servicios/pre-itv", Icon: ClipboardCheck },
  {
    label: "Otro problema",
    href: whatsappHref("Hola, tengo un problema con mi coche y no sé qué servicio necesito."),
    Icon: HelpCircle,
    external: true,
  },
];

export function SymptomsFinder() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            ¿Qué necesita tu coche?
          </h2>
          <p className="mt-3 text-text-secondary">
            Elige lo que te está pasando y te llevamos directos al servicio adecuado.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {symptoms.map(({ label, href, Icon, external }) => (
            <Link
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center gap-3 rounded-card border border-border bg-surface-elevated p-5 text-center transition-colors hover:border-brand-accent hover:bg-brand-accent/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-brand-accent group-hover:bg-brand-accent group-hover:text-white">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <span className="text-sm font-semibold text-text-primary">{label}</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
