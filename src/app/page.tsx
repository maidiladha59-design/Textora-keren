import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bold,
  BookOpen,
  Camera,
  Gamepad2,
  Hash,
  Italic,
  PenLine,
  ShieldCheck,
  Shapes,
  Smartphone,
  Smile,
  Sparkles,
  Wand2,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { getLatestArticles } from "@/content/articles";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = {
  ...createMetadata({
    title: "Fancy Text Generator, Simbol & Nickname",
    description:
      "TEXTORA adalah generator teks Unicode untuk membuat teks keren, simbol, nickname, bio Instagram, emoji, dan angka. Semua diproses di browser Anda.",
    path: "/",
  }),
  title: {
    absolute: "TEXTORA — Fancy Text Generator, Simbol & Nickname",
  },
};

const tools: ReadonlyArray<{
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
  available?: boolean;
}> = [
  {
    href: "/fancy-text-generator",
    title: "Fancy Text",
    description: "Lebih dari 100 gaya Unicode dari satu teks yang sama.",
    icon: Wand2,
    available: true,
  },
  {
    href: "/bold-text",
    title: "Bold Text",
    description: "Huruf tebal yang bisa ditempel ke bio dan caption.",
    icon: Bold,
    available: true,
  },
  {
    href: "/italic-text",
    title: "Italic Text",
    description: "Huruf miring untuk penekanan yang tetap rapi.",
    icon: Italic,
    available: true,
  },
  {
    href: "/script-text",
    title: "Script Text",
    description: "Gaya kursif dan tulisan tangan yang lembut.",
    icon: PenLine,
    available: true,
  },
  {
    href: "/symbols",
    title: "Simbol",
    description: "Koleksi simbol aesthetic, hati, bintang, dan panah.",
    icon: Shapes,
    available: true,
  },
  {
    href: "/nickname-generator",
    title: "Nickname",
    description: "Nama unik untuk game dan akun sosial media.",
    icon: Gamepad2,
    available: true,
  },
  {
    href: "/instagram-bio-generator",
    title: "Bio Instagram",
    description: "Bio aesthetic dengan penghitung 150 karakter.",
    icon: Camera,
    available: true,
  },
  {
    href: "/emoji",
    title: "Emoji",
    description: "Emoji tematik dan kombinasi siap pakai.",
    icon: Smile,
    available: true,
  },
  {
    href: "/number-generator",
    title: "Angka",
    description: "Angka bergaya bulat, superskrip, dan matematis.",
    icon: Hash,
    available: true,
  },
];

const samples: ReadonlyArray<{ label: string; text: string }> = [
  { label: "Bold", text: "𝐓𝐄𝐗𝐓𝐎𝐑𝐀" },
  { label: "Script", text: "𝓣𝓮𝔁𝓽𝓸𝓻𝓪" },
  { label: "Fraktur", text: "𝕿𝕰𝖃𝕿𝕺𝕽𝕬" },
  { label: "Double-struck", text: "𝕋𝔼𝕏𝕋𝕆ℝ𝔸" },
  { label: "Wide", text: "ＴＥＸＴＯＲＡ" },
];

const values: ReadonlyArray<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Privasi sejak desain",
    description:
      "Generator berjalan sepenuhnya di browser. Teks yang Anda ketik tidak dikirim, disimpan, atau dianalisis di server.",
    icon: ShieldCheck,
  },
  {
    title: "Ringan dan langsung",
    description:
      "Tanpa akun, tanpa unggah file, dan tanpa instalasi. Hasil dibuat saat Anda mengetik, dengan antarmuka yang tetap mulus.",
    icon: Zap,
  },
  {
    title: "Fokus pada keterbacaan",
    description:
      "Setiap gaya ditandai bila dukungannya terbatas, sehingga Anda tahu kapan tampilan bisa berbeda antar perangkat.",
    icon: Smartphone,
  },
];

const latestArticles = getLatestArticles(3);

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-grid hero-grid-mask" />
          <div className="absolute left-1/2 top-[-18rem] size-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--glow-primary),transparent_65%)] blur-2xl" />
          <div className="absolute right-[-12rem] top-32 size-[28rem] rounded-full bg-[radial-gradient(circle_at_center,var(--glow-secondary),transparent_65%)] blur-3xl" />
        </div>

        <Container className="py-14 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
                <Sparkles
                  className="size-3.5 text-primary-soft-foreground"
                  aria-hidden="true"
                />
                Fancy text generator berbasis Unicode
              </span>

              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Teks biasa,
                <br />
                <span className="text-gradient">tampil luar biasa.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                TEXTORA mengubah teks sehari-hari menjadi gaya Unicode untuk
                WhatsApp, Instagram, TikTok, dan nama game. Satu tempat untuk
                teks keren, simbol, nickname, bio, dan emoji — tanpa mengunggah
                apa pun.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/fancy-text-generator" size="lg">
                  <Wand2 className="size-4" aria-hidden="true" />
                  Buka generator
                </ButtonLink>
                <ButtonLink
                  href="/articles/apa-itu-unicode"
                  variant="secondary"
                  size="lg"
                >
                  <BookOpen className="size-4" aria-hidden="true" />
                  Pelajari Unicode
                </ButtonLink>
              </div>

              <p className="mt-5 flex max-w-xl items-start gap-2 text-xs leading-5 text-muted-foreground">
                <Sparkles
                  className="mt-0.5 size-3.5 shrink-0"
                  aria-hidden="true"
                />
                <span>
                  Sembilan alat sudah aktif: fancy text, bold, italic, script,
                  simbol, nickname, bio Instagram, emoji, dan angka. Setiap
                  halaman bekerja langsung di browser tanpa akun.
                </span>
              </p>

              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-muted-foreground">
                <li className="flex items-center gap-1.5">
                  <ShieldCheck
                    className="size-4 text-primary-soft-foreground"
                    aria-hidden="true"
                  />
                  Diproses di browser
                </li>
                <li className="flex items-center gap-1.5">
                  <Zap
                    className="size-4 text-primary-soft-foreground"
                    aria-hidden="true"
                  />
                  Tanpa unggah teks
                </li>
                <li className="flex items-center gap-1.5">
                  <Smartphone
                    className="size-4 text-primary-soft-foreground"
                    aria-hidden="true"
                  />
                  Dirancang untuk mobile
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="rounded-4xl border border-border bg-surface/70 p-2 shadow-lift backdrop-blur-sm">
                <div className="rounded-[1.65rem] border border-border/70 bg-gradient-to-b from-surface-muted/80 to-surface p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Contoh representasi Unicode
                    </p>
                    <span className="grid size-8 place-items-center rounded-full bg-primary-soft text-primary-soft-foreground">
                      <Sparkles
                        className="size-4"
                        aria-hidden="true"
                      />
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {samples.map((sample) => (
                      <li
                        key={sample.label}
                        className="flex items-center justify-between gap-4 rounded-xl border border-border/70 bg-background/70 px-4 py-2.5"
                      >
                        <span className="text-[11px] font-medium text-muted-foreground">
                          {sample.label}
                        </span>
                        <span
                          aria-hidden="true"
                          className="truncate text-base font-medium tracking-wide text-foreground sm:text-lg"
                        >
                          {sample.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 text-[11px] leading-5 text-muted-foreground">
                    Pratinjau statis untuk menunjukkan bentuk karakter Unicode.
                    Buka generator untuk membuat variasi dari teks Anda sendiri.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="alat"
        className="scroll-mt-20 border-y border-border bg-surface/50"
      >
        <Container className="py-16 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-soft-foreground">
                Alat TEXTORA
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Sembilan alat, satu tempat
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
                Ubah teks, susun simbol dan emoji, buat nickname, siapkan bio,
                atau bergaya dengan angka. Setiap halaman punya panduan dan
                kontrol sendiri, dan semua diproses di browser.
              </p>
            </div>
            <span className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground">
              9 alat aktif
            </span>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map(({ href, title, description, icon: Icon, available }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-5 shadow-card transition-[transform,box-shadow,border-color] duration-200 hover:border-border-strong hover:shadow-lift motion-safe:hover:-translate-y-0.5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid size-11 place-items-center rounded-xl bg-primary-soft text-primary-soft-foreground">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    {available ? (
                      <span className="rounded-full bg-primary-soft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary-soft-foreground">
                        Aktif
                      </span>
                    ) : (
                      <span className="rounded-full border border-border bg-surface-muted px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                        Segera
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary-soft-foreground">
                    {available ? "Buka alat" : "Lihat halaman"}
                    <ArrowRight
                      className="size-3.5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-border">
        <Container className="py-16 sm:py-20">
          <h2 className="max-w-2xl font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Dibangun untuk teks yang tetap bisa dibaca
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            Gaya boleh kreatif, tetapi fungsi tetap utama. Tiga prinsip ini
            menjadi dasar setiap alat di TEXTORA.
          </p>

          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {values.map(({ title, description, icon: Icon }) => (
              <li
                key={title}
                className="rounded-2xl border border-border bg-surface p-6 shadow-card"
              >
                <span className="grid size-10 place-items-center rounded-xl bg-primary-soft text-primary-soft-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-border">
        <Container className="py-16 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-soft-foreground">
                Pusat belajar
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Kenali Unicode sebelum memakai teks keren
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
                Pahami mengapa fancy text bisa disalin ke aplikasi lain,
                mengapa sebagian karakter tampil sebagai kotak, dan batas
                karakter yang perlu diperhatikan di setiap platform.
              </p>
            </div>
            <ButtonLink href="/articles" variant="secondary" size="md">
              Semua artikel
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
          </div>

          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {latestArticles.map((article) => (
              <li key={article.slug}>
                <ArticleCard article={article} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
