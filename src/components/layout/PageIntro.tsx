import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import {
  Breadcrumb,
  type BreadcrumbItem,
} from "@/components/layout/Breadcrumb";

export function PageIntro({
  breadcrumb,
  eyebrow,
  title,
  description,
  children,
}: {
  breadcrumb: readonly BreadcrumbItem[];
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border/70 bg-gradient-to-b from-surface to-background">
      <Container className="py-10 sm:py-14">
        <Breadcrumb items={breadcrumb} />
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-soft-foreground">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.85rem] lg:leading-[1.12]">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
        {children ? <div className="mt-6">{children}</div> : null}
      </Container>
    </section>
  );
}
