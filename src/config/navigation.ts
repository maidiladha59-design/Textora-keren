export type NavLink = {
  href: string;
  label: string;
  shortLabel?: string;
  description?: string;
};

export const generatorLinks: readonly NavLink[] = [
  {
    href: "/fancy-text-generator",
    label: "Fancy Text Generator",
    shortLabel: "Generator",
    description: "Ubah teks biasa menjadi 100+ gaya Unicode.",
  },
  {
    href: "/bold-text",
    label: "Bold Text",
    shortLabel: "Bold",
    description: "Teks tebal Unicode untuk bio dan caption.",
  },
  {
    href: "/italic-text",
    label: "Italic Text",
    shortLabel: "Italic",
    description: "Huruf miring yang rapi di media sosial.",
  },
  {
    href: "/script-text",
    label: "Script Text",
    shortLabel: "Script",
    description: "Gaya kursif dan tulisan tangan.",
  },
  {
    href: "/symbols",
    label: "Symbol Generator",
    shortLabel: "Simbol",
    description: "Simbol aesthetic, hati, bintang, dan panah.",
  },
  {
    href: "/nickname-generator",
    label: "Nickname Generator",
    shortLabel: "Nickname",
    description: "Nama keren untuk game dan akun sosial.",
  },
  {
    href: "/instagram-bio-generator",
    label: "Bio Instagram",
    shortLabel: "Bio IG",
    description: "Bio aesthetic dengan batas 150 karakter.",
  },
  {
    href: "/emoji",
    label: "Emoji Generator",
    shortLabel: "Emoji",
    description: "Emoji dan kombinasi siap salin.",
  },
  {
    href: "/number-generator",
    label: "Number Generator",
    shortLabel: "Angka",
    description: "Angka bergaya bulat, superskrip, dan lainnya.",
  },
];

export const exploreLinks: readonly NavLink[] = [
  {
    href: "/articles",
    label: "Artikel",
    shortLabel: "Artikel",
    description: "Panduan Unicode, teks keren, dan bio.",
  },
  { href: "/about", label: "Tentang", description: "Kenapa TEXTORA dibuat." },
  {
    href: "/contact",
    label: "Kontak",
    description: "Hubungi pemilik situs lewat email.",
  },
];

export const accountLinks: readonly NavLink[] = [
  {
    href: "/favorites",
    label: "Favorit",
    description: "Hasil yang Anda simpan di perangkat.",
  },
  {
    href: "/history",
    label: "Riwayat",
    description: "Teks yang pernah Anda pakai.",
  },
];

export const legalLinks: readonly NavLink[] = [
  { href: "/privacy-policy", label: "Kebijakan Privasi" },
  { href: "/terms", label: "Syarat & Ketentuan" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export const mainNavLinks: readonly NavLink[] = [
  generatorLinks[0],
  generatorLinks[4],
  generatorLinks[5],
  generatorLinks[6],
  generatorLinks[7],
  generatorLinks[8],
  exploreLinks[0],
];
