import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { Prose } from "@/components/ui/Prose";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Disclaimer",
  description:
    "Disclaimer TEXTORA: kompatibilitas Unicode antar perangkat, bukan afiliasi platform mana pun, dan batas penggunaan informasi di situs ini.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <>
      <PageIntro
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Disclaimer" },
        ]}
        eyebrow="Legal"
        title="Disclaimer"
        description="Penjelasan batas tanggung jawab dan hal-hal yang perlu Anda pahami sebelum memakai teks atau informasi dari TEXTORA."
      >
        <p className="text-xs text-muted-foreground">
          Terakhir diperbarui: 17 November 2026
        </p>
      </PageIntro>

      <Container size="narrow" className="py-10 sm:py-14">
        <Prose>
          <h2>Kompatibilitas Unicode</h2>
          <p>
            Teks yang dihasilkan TEXTORA terdiri dari karakter Unicode. Bentuk
            dan ketersediaan karakter bergantung pada font serta versi sistem
            operasi perangkat. Sebagian karakter bisa tampil berbeda, terpotong,
            atau berbentuk kotak di perangkat lama. Kami menandai gaya yang
            dukungannya terbatas, tetapi Anda tetap perlu menguji hasil di
            aplikasi tujuan sebelum memakainya untuk hal penting.
          </p>

          <h2>Bukan afiliasi platform</h2>
          <p>
            TEXTORA bukan produk resmi WhatsApp, Instagram, TikTok, Discord,
            Roblox, Free Fire, Mobile Legends, PUBG, Google, atau platform lain
            yang mungkin disebut di situs ini. Nama merek tersebut digunakan
            hanya untuk menjelaskan konteks pemakaian dan tetap menjadi milik
            pemegang haknya masing-masing.
          </p>

          <h2>Tidak menjamin hasil tampilan</h2>
          <p>
            Kami tidak menjamin bahwa teks akan tampil sama di setiap aplikasi,
            bahwa nickname akan diterima platform, atau bahwa gaya tertentu akan
            selalu didukung. Batas karakter, aturan nama pengguna, dan
            normalisasi teks ditentukan oleh platform masing-masing dan dapat
            berubah tanpa pemberitahuan.
          </p>

          <h2>Informasi bersifat edukatif</h2>
          <p>
            Artikel di TEXTORA bersifat edukatif dan umum. Artikel tidak
            merupakan nasihat hukum, keamanan, atau profesional lainnya. Jika
            Anda membutuhkan nasihat untuk situasi tertentu, konsultasikan
            dengan pihak yang kompeten.
          </p>

          <h2>Iklan dan tautan</h2>
          <p>
            Versi ini tidak menampilkan iklan. Jika layanan periklanan
            diaktifkan, konten iklan akan dipisahkan dari konten editorial dan
            tidak akan menutupi tombol atau input generator. Tautan eksternal
            tidak berarti endorsement terhadap seluruh isi situs tujuan.
          </p>

          <h2>Penggunaan yang bertanggung jawab</h2>
          <p>
            Gunakan hasil generator secara wajar. Hindari penggunaan teks
            bergaya untuk menyesatkan orang lain, meniru identitas, atau
            melanggar aturan platform. Anda bertanggung jawab penuh atas konten
            yang Anda bagikan.
          </p>

          <h2>Tautan terkait</h2>
          <p>
            Baca <Link href="/privacy-policy">Kebijakan Privasi</Link>,{" "}
            <Link href="/terms">Syarat & Ketentuan</Link>, atau{" "}
            <Link href="/articles/apa-itu-unicode">
              artikel dasar Unicode
            </Link>{" "}
            untuk konteks lebih lengkap.
          </p>
        </Prose>
      </Container>
    </>
  );
}
