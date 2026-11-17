import { BrandMark } from "@/components/ui/BrandMark";

export default function Loading() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-4">
      <div className="flex animate-pulse items-center gap-2.5 motion-reduce:animate-none">
        <BrandMark className="size-10 rounded-2xl" />
        <span className="font-display text-xl font-bold tracking-[0.16em]">
          TEXTORA
        </span>
      </div>
      <p role="status" aria-live="polite" className="text-sm text-muted-foreground">
        Memuat halaman…
      </p>
    </div>
  );
}
