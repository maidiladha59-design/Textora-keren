import { BrandMark } from "@/components/ui/BrandMark";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <BrandMark />
      <span className="font-display text-lg font-bold tracking-[0.16em] text-foreground">
        TEXTORA
      </span>
    </span>
  );
}
