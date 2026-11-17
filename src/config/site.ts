const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";

export const siteConfig = {
  name: "TEXTORA",
  tagline: "Make Every Text Stand Out.",
  taglineId: "Buat setiap teks menonjol.",
  description:
    "TEXTORA adalah platform fancy text generator berbasis Unicode: teks keren, simbol, nickname, bio Instagram, emoji, dan angka. Semua diproses di browser Anda.",
  url: rawSiteUrl.replace(/\/+$/, ""),
  locale: "id_ID",
  language: "id",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ?? "",
  themeColor: {
    light: "#fafafc",
    dark: "#08090f",
  },
} as const;

export type SiteConfig = typeof siteConfig;
