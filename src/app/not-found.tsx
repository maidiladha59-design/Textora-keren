import type { Metadata } from "next";
import { Compass } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { dictionary } from "@/lib/i18n/id";

export const metadata: Metadata = {
  title: dictionary.errors.notFoundTitle,
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[65vh] flex-col items-center justify-center py-16 text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-muted-foreground">
        <Compass className="size-3.5" aria-hidden="true" />
        Error 404
      </span>
      <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {dictionary.errors.notFoundTitle}
      </h1>
      <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
        {dictionary.errors.notFoundDescription}
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/">{dictionary.common.backHome}</ButtonLink>
        <ButtonLink href="/articles" variant="secondary">
          Baca artikel
        </ButtonLink>
      </div>
    </Container>
  );
}
