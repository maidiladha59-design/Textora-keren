import type { Metadata } from "next";
import Link from "next/link";
import { RelatedArticles } from "@/components/articles/RelatedArticles";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { BioTool } from "@/components/bio/BioTool";
import { Prose } from "@/components/ui/Prose";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Instagram Bio Generator 150 Karakter",
  description:
    "Buat bio Instagram dari tujuh kategori: simple, aesthetic, gaming, cool, cute, professional, dan minimalist. Sunting teks, pantau batas 150, lalu salin.",
  path: "/instagram-bio-generator",
});

export default function InstagramBioPage() {
  return (
    <>
      <PageIntro
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Instagram Bio Generator" },
        ]}
        eyebrow="Bio media sosial"
        title="Instagram Bio Generator dengan batas 150 karakter"
        description="Isi nama, peran, dan ajakan, lalu pilih template bio. Setiap hasil menampilkan jumlah karakter, bisa disunting, dan hanya dapat disalin bila masih dalam batas 150."
      />

      <Container className="py-8 sm:py-10">
        <BioTool />
      </Container>

      <Container size="narrow" className="pb-14 sm:pb-20">
        <Prose>
          <h2>Cara membuat bio Instagram</h2>
          <ol>
            <li>
              Isi nama atau brand. Peran dan ajakan bersifat opsional, tetapi
              membuat bio lebih jelas.
            </li>
            <li>
              Pilih kategori, lalu bandingkan template. Setiap kartu menampilkan
              jumlah karakter terhadap batas 150.
            </li>
            <li>
              Tekan <strong>Sunting</strong> untuk mengubah teks di editor,
              lalu salin bila jumlah karakter masih mencukupi.
            </li>
          </ol>

          <h2>Kategori bio</h2>
          <ul>
            <li>Simple: satu atau dua baris tanpa dekorasi berlebihan.</li>
            <li>Aesthetic: simbol halus dan huruf ringan.</li>
            <li>Gaming: istilah singkat dengan gaya tegas.</li>
            <li>Cool: kalimat percaya diri yang tetap ringkas.</li>
            <li>Cute: nada hangat dengan emoji secukupnya.</li>
            <li>Professional: jelas, ringkas, dan tanpa hiasan berlebihan.</li>
            <li>Minimalist: kata kunci dan spasi yang lapang.</li>
          </ul>

          <h2>Mengapa batas 150 karakter penting?</h2>
          <p>
            Kolom bio Instagram memiliki batas karakter yang ketat. Kalimat yang
            terasa pendek di editor bisa terpotong saat disimpan, terutama jika
            memakai baris baru, emoji, atau huruf Unicode bergaya. Penghitung di
            halaman ini memakai jumlah kode Unicode pada teks yang akan disalin,
            sehingga Anda bisa melihat ukuran sebenarnya sebelum menempel.
          </p>
          <p>
            Emoji tertentu tersusun dari beberapa kode dan bisa dihitung berbeda
            oleh platform. Jika mendekati batas, uji bio di aplikasi Instagram
            sebelum menyimpan.
          </p>

          <h2>Tips menulis bio yang bekerja</h2>
          <ul>
            <li>Tulis satu kalimat tentang siapa Anda atau apa yang Anda lakukan.</li>
            <li>Tambahkan satu ajakan atau tautan penting, bukan daftar panjang.</li>
            <li>Gunakan emoji untuk memberi jeda visual, bukan mengganti kata.</li>
            <li>Pertahankan nama dan profesi dalam huruf biasa agar mudah dicari.</li>
            <li>Uji tampilan di aplikasi Instagram sebelum menyimpan.</li>
          </ul>

          <h2>Privasi dan penyimpanan</h2>
          <p>
            Semua teks diproses di browser dan tidak dikirim ke server.
            Perubahan pada editor hanya bertahan selama halaman terbuka. Saat
            Anda menyalin hasil, entri dicatat di riwayat lokal; tekan ikon hati
            bila ingin menyimpannya sebagai favorit.
          </p>

          <p>
            Lengkapi profil dengan{" "}
            <Link href="/emoji">Emoji Generator</Link> dan{" "}
            <Link href="/symbols">Symbol Generator</Link>, atau buat nama
            tampilan lewat{" "}
            <Link href="/nickname-generator">Nickname Generator</Link>.
          </p>
        </Prose>

        <RelatedArticles
          slugs={[
            "bio-instagram-aesthetic-150-karakter",
            "simbol-aesthetic-untuk-bio-dan-caption",
          ]}
        />
      </Container>
    </>
  );
}
