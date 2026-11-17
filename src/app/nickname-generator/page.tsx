import type { Metadata } from "next";
import Link from "next/link";
import { RelatedArticles } from "@/components/articles/RelatedArticles";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { NicknameTool } from "@/components/nickname/NicknameTool";
import { Prose } from "@/components/ui/Prose";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Nickname Generator Game & Sosial",
  description:
    "Buat nickname keren dari nama dasar untuk Free Fire, Mobile Legends, PUBG, Roblox, Discord, dan Instagram. Pilih nuansa gaming, aesthetic, cute, atau minimal.",
  path: "/nickname-generator",
});

export default function NicknameGeneratorPage() {
  return (
    <>
      <PageIntro
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Nickname Generator" },
        ]}
        eyebrow="Nama tampilan"
        title="Nickname Generator untuk game dan akun sosial"
        description="Masukkan nama dasar, pilih platform dan nuansa, lalu salin nickname yang paling cocok. Setiap saran menampilkan jumlah karakter terhadap batas umum platform."
      />

      <Container className="py-8 sm:py-10">
        <NicknameTool />
      </Container>

      <Container size="narrow" className="pb-14 sm:pb-20">
        <Prose>
          <h2>Cara membuat nickname</h2>
          <ol>
            <li>
              Ketik nama dasar, misalnya <strong>ProGamer</strong> atau nama
              pendek yang mudah diingat.
            </li>
            <li>
              Pilih platform tujuan dan nuansa. Saran muncul otomatis dengan
              variasi huruf serta bingkai.
            </li>
            <li>
              Perhatikan penghitung karakter. Tekan <strong>Salin</strong> pada
              saran yang masih dalam batas platform.
            </li>
          </ol>

          <h2>Nuansa yang tersedia</h2>
          <ul>
            <li>Gaming: huruf tebal dengan mahkota, sayap, dan kurung.</li>
            <li>Aesthetic: script lembut dengan bintang dan bunga.</li>
            <li>Cute: bubble dan hati untuk nama yang hangat.</li>
            <li>Minimal: small caps dan monospace dengan dekorasi tipis.</li>
          </ul>

          <h2>Bagaimana saran dibuat?</h2>
          <p>
            Generator menyusun nama dari gaya huruf Unicode yang nyata dan
            bingkai simbol. Hasilnya deterministik: nama dan pilihan yang sama
            selalu menghasilkan saran yang sama, tanpa undian tersembunyi.
            Saran yang teksnya identik otomatis dihapus agar daftar tidak
            berulang.
          </p>

          <h2>Batas karakter per platform</h2>
          <p>
            Batas yang ditampilkan adalah batas umum: Free Fire 12 karakter,
            Mobile Legends 16, PUBG Mobile 14, Roblox 20, Discord 32, dan
            Instagram 30. Platform dapat mengubah aturannya kapan saja, dan
            simbol dekoratif bisa dihitung berbeda. Selalu periksa aturan resmi
            sebelum mengganti nama.
          </p>

          <h2>Tips memilih nickname</h2>
          <ul>
            <li>Pastikan nama masih terbaca saat diperkecil di daftar pemain.</li>
            <li>Hindari simbol yang menyerupai akun resmi atau menyesatkan.</li>
            <li>Sisakan ruang bila platform membatasi karakter.</li>
            <li>Uji tampilan di perangkat teman atau lawan main Anda.</li>
          </ul>

          <h2>Privasi</h2>
          <p>
            Generator berjalan di browser. Nama yang Anda ketik tidak dikirim
            atau disimpan di server. Saat hasil disalin, teks dan gaya dicatat
            di riwayat lokal; favorit hanya disimpan bila Anda menekan ikon
            hati.
          </p>

          <p>
            Lengkapi dengan <Link href="/symbols">Symbol Generator</Link> atau{" "}
            <Link href="/fancy-text-generator">Fancy Text Generator</Link>.
            Untuk bio, gunakan{" "}
            <Link href="/instagram-bio-generator">Instagram Bio Generator</Link>.
          </p>
        </Prose>

        <RelatedArticles
          slugs={[
            "nickname-game-keren-dan-batas-karakter",
            "simbol-aesthetic-untuk-bio-dan-caption",
          ]}
        />
      </Container>
    </>
  );
}
