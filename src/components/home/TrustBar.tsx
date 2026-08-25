import { Container } from "@/components/ui/Container";

// PENDING_OWNER_INPUT: "Servicio multimarca" se incluirá aquí solo cuando el
// propietario confirme que el taller trabaja de forma multimarca (spec 5.2).
const items = ["Diagnosis avanzada", "Mecánica", "Electromecánica", "Mantenimiento"];

export function TrustBar() {
  return (
    <div className="border-y border-border bg-background-dark py-4">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-bold tracking-widest text-text-on-dark-primary/80 uppercase">
          {items.map((item, i) => (
            <span key={item} className="flex items-center gap-8">
              {item}
              {i < items.length - 1 && (
                <span className="hidden text-text-on-dark-primary/40 sm:inline" aria-hidden>
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </Container>
    </div>
  );
}
