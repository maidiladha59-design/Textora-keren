import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ArticleBody } from "@/components/articles/ArticleBody";
import { ArticleJsonLd } from "@/components/articles/ArticleJsonLd";
import { ArticleToc } from "@/components/articles/ArticleToc";
import { RelatedArticles } from "@/components/articles/RelatedArticles";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import {
  articles,
  getArticle,
  getRelatedArticles,
} from "@/content/articles";
import { buildOutline } from "@/lib/articles/outline";
import { formatDate } from "@/lib/format";
import { createMetadata } from "@/lib/seo/metadata";

export const instant = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/articles/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {};
  }

  return createMetadata({
    title: article.title,
    description: article.description,
    path: `/articles/${article.slug}`,
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
  });
}

export default async function ArticlePage({
  params,
}: PageProps<"/articles/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const outline = buildOutline(article.blocks);
  const related = getRelatedArticles(article);

  return (
    <>
      <ArticleJsonLd article={article} />

      <PageIntro
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Artikel", href: "/articles" },
          { label: article.title },
        ]}
        eyebrow={article.category}
        title={article.title}
        description={article.description}
      >
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          <time dateTime={article.publishedAt}>
            Diterbitkan {formatDate(article.publishedAt)}
          </time>
          <span aria-hidden="true">•</span>
          <span>{article.readingMinutes} menit baca</span>
          {article.updatedAt ? (
            <>
              <span aria-hidden="true">•</span>
              <time dateTime={article.updatedAt}>
                Diperbarui {formatDate(article.updatedAt)}
              </time>
            </>
          ) : null}
        </p>
      </PageIntro>

      <Container size="narrow" className="py-10 sm:py-14">
        <ArticleToc items={outline} />

        <article className="mt-4">
          <ArticleBody blocks={article.blocks} />
        </article>

        <RelatedArticles
          slugs={related.map((item) => item.slug)}
          title="Artikel terkait"
        />

        <div className="mt-10 border-t border-border pt-6">
          <Link
            href="/articles"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-link hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Semua artikel
          </Link>
        </div>
      </Container>
    </>
  );
}
