import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { articles } from "@/content/articles";

const LAST_UPDATED = new Date("2026-11-17T00:00:00.000Z");

const staticRoutes: ReadonlyArray<{
  path: string;
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
}> = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/fancy-text-generator", priority: 0.9, changeFrequency: "weekly" },
  { path: "/bold-text", priority: 0.8, changeFrequency: "monthly" },
  { path: "/italic-text", priority: 0.8, changeFrequency: "monthly" },
  { path: "/script-text", priority: 0.8, changeFrequency: "monthly" },
  { path: "/symbols", priority: 0.8, changeFrequency: "monthly" },
  { path: "/nickname-generator", priority: 0.8, changeFrequency: "monthly" },
  {
    path: "/instagram-bio-generator",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  { path: "/emoji", priority: 0.8, changeFrequency: "monthly" },
  { path: "/number-generator", priority: 0.8, changeFrequency: "monthly" },
  { path: "/favorites", priority: 0.4, changeFrequency: "monthly" },
  { path: "/history", priority: 0.4, changeFrequency: "monthly" },
  { path: "/articles", priority: 0.7, changeFrequency: "weekly" },
  { path: "/about", priority: 0.5, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/disclaimer", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: route.path === "/" ? siteConfig.url : `${siteConfig.url}${route.path}`,
    lastModified: LAST_UPDATED,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteConfig.url}/articles/${article.slug}`,
    lastModified: new Date(
      `${article.updatedAt ?? article.publishedAt}T00:00:00.000Z`,
    ),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pages, ...articlePages];
}
