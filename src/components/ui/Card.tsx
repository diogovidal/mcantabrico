import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-card border border-border bg-surface-elevated p-6 sm:p-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
