"use client";

import { Sparkles, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { dictionary } from "@/lib/i18n/id";

export function EmptyState({
  onUseSample,
  title = dictionary.generator.emptyTitle,
  description = dictionary.generator.emptyDescription,
  sampleLabel = dictionary.generator.sample,
}: {
  onUseSample: () => void;
  title?: string;
  description?: string;
  sampleLabel?: string;
}) {
  return (
    <div className="rounded-3xl border border-dashed border-border-strong bg-surface/60 px-6 py-10 text-center">
      <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary-soft-foreground">
        <Wand2 className="size-5" aria-hidden="true" />
      </span>
      <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
        {title}
      </h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
        {description}
      </p>
      <Button
        variant="secondary"
        size="md"
        onClick={onUseSample}
        className="mt-5"
      >
        <Sparkles className="size-4" aria-hidden="true" />
        {sampleLabel}
      </Button>
    </div>
  );
}
