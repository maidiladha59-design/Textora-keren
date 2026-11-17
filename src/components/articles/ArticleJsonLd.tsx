import { siteConfig } from "@/config/site";
import type { Article } from "@/content/articles";

export function ArticleJsonLd({ article }: { article: Article }) {
  const url = `${siteConfig.url}/articles/${article.slug}`;
  const publisher = {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  };

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.description,
        datePublished: article.publishedAt,
        dateModified: article.updatedAt ?? article.publishedAt,
        inLanguage: "id-ID",
        articleSection: article.category,
        timeRequired: `PT${article.readingMinutes}M`,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        author: publisher,
        publisher,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Beranda",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Artikel",
            item: `${siteConfig.url}/articles`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
