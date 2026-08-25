import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/content/services";

export function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  return (
    <div className="divide-y divide-border rounded-card border border-border bg-surface-elevated">
      {faqs.map((faq) => (
        <details key={faq.question} className="group p-5 open:pb-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-text-primary marker:content-none">
            {faq.question}
            <ChevronDown
              className="h-5 w-5 shrink-0 text-text-secondary transition-transform group-open:rotate-180"
              aria-hidden
            />
          </summary>
          <p className="mt-3 text-sm text-text-secondary">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
