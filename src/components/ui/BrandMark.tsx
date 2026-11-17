import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "grid size-9 place-items-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 text-white shadow-[0_6px_18px_-8px_rgb(109_40_217_/_0.8)]",
        className,
      )}
    >
      <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
        <path d="M4 6.5h16v3h-6.5V19h-3V9.5H4v-3Z" fill="currentColor" />
      </svg>
    </span>
  );
}
