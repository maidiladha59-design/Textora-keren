import type { ArticleOutlineItem } from "@/lib/articles/outline";

export function ArticleToc({
  items,
}: {
  items: readonly ArticleOutlineItem[];
}) {
  const sections = items.filter((item) => item.level === 2);

  if (sections.length < 2) {
    return null;
  }

  return (
    <nav
      aria-labelledby="article-toc-title"
      className="mt-8 rounded-2xl border border-border bg-surface-muted/60 p-4 sm:p-5"
    >
      <h2
        id="article-toc-title"
        className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
      >
        Daftar isi
      </h2>
      <ol className="mt-3 grid gap-x-6 gap-y-1 text-sm sm:grid-cols-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="inline-flex min-h-11 items-center rounded text-link hover:underline"
            >
              {section.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
