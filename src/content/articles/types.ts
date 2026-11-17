export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; ordered?: boolean; items: readonly string[] }
  | { type: "callout"; title?: string; text: string }
  | { type: "quote"; text: string }
  | {
      type: "linkList";
      title: string;
      links: readonly { label: string; href: string }[];
    }
  | { type: "divider" };

export type ArticleSource = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  updatedAt?: string;
  related?: readonly string[];
  blocks: readonly ArticleBlock[];
};

export type Article = ArticleSource & {
  readingMinutes: number;
};
