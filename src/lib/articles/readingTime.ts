import type { ArticleBlock } from "@/content/articles/types";

export const WORDS_PER_MINUTE = 200;

export function countWords(text: string): number {
  const matches = text.match(/[\p{L}\p{N}]+/gu);
  return matches ? matches.length : 0;
}

function countBlockWords(block: ArticleBlock): number {
  switch (block.type) {
    case "paragraph":
    case "heading":
    case "quote":
      return countWords(block.text);
    case "callout":
      return countWords(block.title ?? "") + countWords(block.text);
    case "list":
      return block.items.reduce(
        (total, item) => total + countWords(item),
        0,
      );
    case "linkList":
      return (
        countWords(block.title) +
        block.links.reduce(
          (total, link) => total + countWords(link.label),
          0,
        )
      );
    case "divider":
      return 0;
  }
}

export function estimateReadingMinutes(
  blocks: readonly ArticleBlock[],
): number {
  const words = blocks.reduce(
    (total, block) => total + countBlockWords(block),
    0,
  );
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}
