"use client";

import { RotateCcw, TriangleAlert } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button, ButtonLink } from "@/components/ui/Button";
import { dictionary } from "@/lib/i18n/id";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <Container className="flex min-h-[65vh] flex-col items-center justify-center py-16 text-center">
      <span className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary-soft-foreground">
        <TriangleAlert className="size-6" aria-hidden="true" />
      </span>
      <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {dictionary.errors.errorTitle}
      </h1>
      <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
        {dictionary.errors.errorDescription}
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Button onClick={reset}>
          <RotateCcw className="size-4" aria-hidden="true" />
          {dictionary.errors.retry}
        </Button>
        <ButtonLink href="/" variant="secondary">
          {dictionary.common.backHome}
        </ButtonLink>
      </div>
    </Container>
  );
}
