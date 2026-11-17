import Link from "next/link";
import type { ArticleBlock } from "@/content/articles/types";
import { buildOutline } from "@/lib/articles/outline";

function Block({ block, id }: { block: ArticleBlock; id?: string }) {
  switch (block.type) {
    case "paragraph":
      return <p>{block.text}</p>;
    case "heading":
      return block.level === 2 ? (
        <h2 id={id} className="scroll-mt-24">
          {block.text}
        </h2>
      ) : (
        <h3 id={id} className="scroll-mt-24">
          {block.text}
        </h3>
      );
    case "list": {
      const items = block.items.map((item) => <li key={item}>{item}</li>);
      return block.ordered ? <ol>{items}</ol> : <ul>{items}</ul>;
    }
    case "callout":
      return (
        <aside className="my-6 rounded-2xl border border-border bg-surface-muted/70 p-4 sm:p-5">
          {block.title ? (
            <p className="text-sm font-semibold text-foreground">
              {block.title}
            </p>
          ) : null}
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            {block.text}
          </p>
        </aside>
      );
    case "quote":
      return <blockquote>{block.text}</blockquote>;
    case "linkList":
      return (
        <aside className="my-8 rounded-2xl border border-border bg-surface p-5 shadow-card">
          <p className="text-sm font-semibold text-foreground">
            {block.title}
          </p>
          <ul className="mt-3 space-y-2">
            {block.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-link underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      );
    case "divider":
      return <hr />;
  }
}

export function ArticleBody({ blocks }: { blocks: readonly ArticleBlock[] }) {
  const headingIds = new Map(
    buildOutline(blocks).map((item) => [item.index, item.id]),
  );

  return (
    <div className="prose-text">
      {blocks.map((block, index) => (
        <Block
          key={`${block.type}-${index}`}
          block={block}
          id={headingIds.get(index)}
        />
      ))}
    </div>
  );
}
