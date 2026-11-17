import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/content/articles";
import { formatDate } from "@/lib/format";
import { cn } from "@/lib/utils";

export function ArticleCard({
  article,
  headingLevel = "h3",
  className,
}: {
  article: Article;
  headingLevel?: "h2" | "h3";
  className?: string;
}) {
  const Heading = headingLevel;

  return (
    <Link
      href={`/articles/${article.slug}`}
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-card transition-[transform,box-shadow,border-color] duration-200 hover:border-border-strong hover:shadow-lift motion-safe:hover:-translate-y-0.5",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3 text-[11px] font-medium text-muted-foreground">
        <span className="rounded-full bg-primary-soft px-2.5 py-1 font-semibold text-primary-soft-foreground">
          {article.category}
        </span>
        <span>{article.readingMinutes} menit baca</span>
      </div>
      <Heading className="mt-4 font-display text-lg font-semibold leading-snug text-foreground">
        {article.title}
      </Heading>
      <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
        {article.description}
      </p>
      <div className="mt-5 flex items-center justify-between gap-3 text-xs text-muted-foreground">
        <time dateTime={article.publishedAt}>
          {formatDate(article.publishedAt)}
        </time>
        <span className="inline-flex items-center gap-1.5 font-semibold text-primary-soft-foreground">
          Baca
          <ArrowRight
            className="size-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
