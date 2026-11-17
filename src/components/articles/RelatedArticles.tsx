import { ArticleCard } from "@/components/articles/ArticleCard";
import { getArticle } from "@/content/articles";
import type { Article } from "@/content/articles/types";

export function RelatedArticles({
  slugs,
  title = "Baca juga",
}: {
  slugs: readonly string[];
  title?: string;
}) {
  const items = slugs
    .map((slug) => getArticle(slug))
    .filter((article): article is Article => article !== undefined);

  if (items.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="related-articles-title"
      className="mt-12 border-t border-border pt-8"
    >
      <h2
        id="related-articles-title"
        className="font-display text-xl font-semibold tracking-tight text-foreground"
      >
        {title}
      </h2>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {items.map((article) => (
          <li key={article.slug}>
            <ArticleCard article={article} />
          </li>
        ))}
      </ul>
    </section>
  );
}
