import type { ArticleBlock } from "@/content/articles/types";

export type ArticleOutlineItem = {
  index: number;
  id: string;
  text: string;
  level: 2 | 3;
};

export function headingSlug(text: string): string {
  const slug = text
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug.length > 0 ? slug : "bagian";
}

export function buildOutline(
  blocks: readonly ArticleBlock[],
): ArticleOutlineItem[] {
  const used = new Map<string, number>();
  const items: ArticleOutlineItem[] = [];

  blocks.forEach((block, index) => {
    if (block.type !== "heading") return;

    const base = headingSlug(block.text);
    const seen = used.get(base) ?? 0;
    used.set(base, seen + 1);

    items.push({
      index,
      id: seen === 0 ? base : `${base}-${seen + 1}`,
      text: block.text,
      level: block.level,
    });
  });

  return items;
}
