import type { ReactNode } from "react";
import { Clock3 } from "lucide-react";
import { dictionary } from "@/lib/i18n/id";
import { cn } from "@/lib/utils";

export function StatusNotice({
  title = dictionary.common.inDevelopment,
  children,
  className,
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      role="note"
      aria-label={dictionary.status.label}
      className={cn(
        "flex gap-3 rounded-2xl border border-border bg-surface-muted/70 p-4 sm:p-5",
        className,
      )}
    >
      <Clock3
        className="mt-0.5 size-5 shrink-0 text-primary-soft-foreground"
        aria-hidden="true"
      />
      <div>
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <div className="mt-1 text-sm leading-6 text-muted-foreground">
          {children}
        </div>
      </div>
    </div>
  );
}
