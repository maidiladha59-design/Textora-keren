# TEXTORA

Make Every Text Stand Out. Platform fancy text generator berbasis Unicode untuk pengguna Indonesia dan internasional.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript strict
- Tailwind CSS 4
- Lucide React
- Tanpa backend dan tanpa database; seluruh proses generator berjalan di browser

## Menjalankan proyek

```bash
npm install
cp .env.example .env.local
npm run dev
```

Buka `http://localhost:3000`.

## Perintah

```bash
npm run dev     # server pengembangan
npm run lint    # ESLint
npx tsc --noEmit
npm run build   # production build
npm start       # menjalankan hasil build
```

## Environment

| Variabel | Kegunaan |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL publik absolut untuk canonical, Open Graph, sitemap, dan robots. Wajib diisi dengan domain produksi saat deploy. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Email pada halaman kontak (`mailto:`). Bila kosong, halaman menampilkan catatan tanpa formulir. |

## Deploy ke Vercel

1. Impor repositori proyek ke Vercel. Preset framework terdeteksi otomatis sebagai Next.js; biarkan Build Command `npm run build` dan Output Directory default. Gunakan Node.js 22 (minimal 20.9) karena syarat Next.js 16.
2. Di **Project Settings → Environment Variables**, isi untuk Production (dan Preview):
   - `NEXT_PUBLIC_SITE_URL` = `https://domain-anda.com` tanpa garis miring di akhir.
   - `NEXT_PUBLIC_CONTACT_EMAIL` = alamat email aktif.
   Variabel `NEXT_PUBLIC_*` ditanam saat build, jadi lakukan redeploy setelah mengubahnya.
3. Di **Settings → Domains**, tambahkan domain utama dan ikuti instruksi DNS. Pilih satu versi kanonik (`domain.com` atau `www.domain.com`); Vercel mengalihkan versi lainnya. HTTPS aktif otomatis.
4. Verifikasi Google Search Console: buat **Domain property** lalu tambahkan record DNS TXT yang diberikan, atau pakai **URL-prefix property** dengan verifikasi DNS/HTML. Setelah terverifikasi, kirim `https://domain-anda.com/sitemap.xml` melalui menu **Sitemaps**, lalu minta indexing untuk halaman utama.
5. Periksa hasil deploy:
   ```bash
   curl -I https://domain-anda.com
   curl -s https://domain-anda.com/robots.txt
   curl -s https://domain-anda.com/sitemap.xml
   ```
   Pastikan status 200, header keamanan ada, canonical/OG memakai domain produksi, sitemap berisi 24 URL, dan halaman 404 tampil untuk path yang tidak dikenal.
6. Deploy Preview otomatis diberi header `X-Robots-Tag: noindex` agar tidak terindeks; indeks hanya berlaku di Production.

Catatan: slug artikel yang tidak dikenal menampilkan halaman 404 dengan status HTTP 200 dan `noindex` (keterbatasan `cacheComponents` + `dynamicParams`). Ini aman untuk pengguna, tetapi pantau laporan **Pages → Not indexed** di Search Console.

## Struktur

```
src/
  app/                 rute halaman, metadata, sitemap, robots, ikon, OG image
  components/          layout, ui, generator, artikel, glyphs, saved
  config/              identitas situs dan navigasi
  content/articles/    data artikel bertipe
  lib/                 i18n, SEO, unicode, glyph, bio, saved, utilitas tema
```

## Status

Fase 1–7 selesai: fondasi, generator inti, artikel edukasi, audit aksesibilitas/SEO/performa menyeluruh, pengujian fungsional, serta persiapan deploy. Seluruh 24 rute sitemap lulus uji fungsional, tautan, anchor, dan axe (mode terang dan gelap); Lighthouse mobile mencatat Performance 90–96, Accessibility/Best Practices/SEO 100. Panduan deploy ada di bagian [Deploy ke Vercel](#deploy-ke-vercel). Generator dan alat lain hanya muncul setelah benar-benar berfungsi.

Variabel lingkungan yang dibutuhkan saat deploy: `NEXT_PUBLIC_SITE_URL` (origin publik, dipakai canonical, sitemap, robots, dan JSON-LD) dan `NEXT_PUBLIC_CONTACT_EMAIL` (halaman kontak). Tanpa backend, seluruh teks pengguna diproses di browser.

Catatan rilis: teks legal (privasi, syarat, disclaimer) perlu ditinjau pemilik sebelum rilis produksi dan diperluas saat AdSense diaktifkan.
