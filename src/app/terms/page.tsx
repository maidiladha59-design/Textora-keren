import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { Prose } from "@/components/ui/Prose";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Syarat & Ketentuan",
  description:
    "Syarat dan ketentuan penggunaan TEXTORA: deskripsi layanan, penggunaan yang wajar, hak kekayaan intelektual, dan batasan tanggung jawab.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageIntro
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Syarat & Ketentuan" },
        ]}
        eyebrow="Legal"
        title="Syarat & Ketentuan"
        description="Dengan menggunakan TEXTORA, Anda menyetujui ketentuan berikut. Bacalah dengan saksama; jika tidak setuju, mohon tidak menggunakan situs ini."
      >
        <p className="text-xs text-muted-foreground">
          Terakhir diperbarui: 17 November 2026
        </p>
      </PageIntro>

      <Container size="narrow" className="py-10 sm:py-14">
        <Prose>
          <h2>Penerimaan ketentuan</h2>
          <p>
            Ketentuan ini berlaku untuk semua pengunjung TEXTORA. Penggunaan
            situs setelah pembaruan ketentuan berarti Anda menerima versi yang
            berlaku saat itu.
          </p>

          <h2>Deskripsi layanan</h2>
          <p>
            TEXTORA menyediakan alat yang membantu mengubah teks menjadi
            variasi Unicode, menampilkan simbol, serta menyusun nickname, bio,
            emoji, dan angka. Semua alat yang tampil di navigasi sudah aktif,
            dan favorit serta riwayat disimpan hanya di browser Anda.
          </p>
          <p>
            Layanan disediakan apa adanya. Kami dapat menambah, mengubah, atau
            menghentikan fitur untuk menjaga kualitas, keamanan, atau kepatuhan
            hukum.
          </p>

          <h2>Penggunaan yang diperbolehkan</h2>
          <ul>
            <li>Anda boleh memakai hasil generator untuk keperluan pribadi maupun komersial.</li>
            <li>
              Anda bertanggung jawab memastikan teks yang Anda pakai tidak
              melanggar hak orang lain, aturan platform, atau hukum yang
              berlaku.
            </li>
            <li>
              Dilarang menggunakan situs untuk menipu, meniru identitas pihak
              lain, menyebarkan ujaran kebencian, atau mengganggu layanan.
            </li>
            <li>
              Dilarang mengotomatiskan akses secara berlebihan yang membebani
              infrastruktur.
            </li>
          </ul>

          <h2>Hak kekayaan intelektual</h2>
          <p>
            Nama, logo, desain antarmuka, dan konten tulisan TEXTORA dilindungi
            hak yang berlaku. Karakter Unicode yang dihasilkan bukan milik
            TEXTORA; karakter tersebut merupakan bagian dari standar Unicode dan
            dapat dipakai secara bebas sesuai ketentuannya.
          </p>

          <h2>Tanpa jaminan</h2>
          <p>
            Kami berupaya menjaga situs tetap tersedia dan akurat, tetapi tidak
            menjamin bahwa situs akan bebas gangguan atau bahwa hasil Unicode
            akan tampil identik di setiap perangkat dan aplikasi. Sebagian
            karakter bergantung pada dukungan font setempat.
          </p>

          <h2>Batasan tanggung jawab</h2>
          <p>
            Sejauh diizinkan hukum, TEXTORA tidak bertanggung jawab atas
            kerugian tidak langsung yang timbul dari penggunaan atau
            ketidakmampuan menggunakan situs, termasuk kehilangan data lokal
            akibat pembersihan browser atau mode privat.
          </p>

          <h2>Layanan dan tautan pihak ketiga</h2>
          <p>
            TEXTORA tidak berafiliasi dengan WhatsApp, Instagram, TikTok, Google,
            atau penerbit game. Nama platform digunakan hanya untuk menjelaskan
            kompatibilitas. Tautan ke situs pihak ketiga mengikuti ketentuan
            situs masing-masing.
          </p>

          <h2>Perubahan ketentuan</h2>
          <p>
            Kami dapat memperbarui ketentuan ini sewaktu-waktu. Versi terbaru
            selalu tersedia di halaman ini dengan tanggal pembaruan.
          </p>

          <h2>Hukum yang berlaku</h2>
          <p>
            Ketentuan ini ditafsirkan sesuai hukum yang berlaku di Indonesia,
            tanpa mengesampingkan perlindungan wajib yang mungkin berlaku bagi
            Anda sebagai konsumen.
          </p>

          <h2>Kontak</h2>
          <p>
            Pertanyaan tentang ketentuan ini dapat disampaikan melalui{" "}
            <Link href="/contact">halaman kontak</Link>. Lihat juga{" "}
            <Link href="/privacy-policy">Kebijakan Privasi</Link> dan{" "}
            <Link href="/disclaimer">Disclaimer</Link>.
          </p>
        </Prose>
      </Container>
    </>
  );
}
