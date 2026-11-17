import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { Prose } from "@/components/ui/Prose";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Kebijakan Privasi",
  description:
    "Kebijakan privasi TEXTORA: teks generator diproses di browser, favorit dan tema disimpan lokal, serta penjelasan cookie dan iklan pihak ketiga.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageIntro
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Kebijakan Privasi" },
        ]}
        eyebrow="Legal"
        title="Kebijakan Privasi"
        description="Kami berusaha membuat kebijakan ini sesingkat mungkin tanpa menyembunyikan hal penting."
      >
        <p className="text-xs text-muted-foreground">
          Terakhir diperbarui: 17 November 2026
        </p>
      </PageIntro>

      <Container size="narrow" className="py-10 sm:py-14">
        <Prose>
          <h2>Ringkasan</h2>
          <p>
            TEXTORA adalah situs alat teks yang berjalan tanpa backend. Teks
            yang Anda masukkan ke generator tidak dikirim ke server kami. Tidak
            ada akun, tidak ada database pengguna, dan tidak ada penjualan data.
          </p>

          <h2>Data yang diproses</h2>
          <ul>
            <li>
              <strong>Teks generator.</strong> Saat generator aktif, teks
              diproses di browser Anda untuk menghasilkan variasi Unicode. Kami
              tidak menerima salinan teks tersebut.
            </li>
            <li>
              <strong>Penyimpanan lokal.</strong> Tema tampilan disimpan di
              localStorage browser. Favorit dan riwayat yang Anda buat juga
              disimpan di perangkat Anda dengan batas jumlah tertentu.
            </li>
            <li>
              <strong>Data teknis hosting.</strong> Penyedia hosting dapat
              memproses log teknis seperti alamat IP dan user agent untuk
              keamanan, diagnostik, dan pengiriman halaman.
            </li>
          </ul>

          <h2>Penyimpanan lokal di browser</h2>
          <p>
            Data lokal hanya dapat dibaca di browser yang sama. Anda dapat
            menghapusnya kapan saja melalui pengaturan situs di browser atau
            dengan membersihkan data situs. Mode privat dan kuota penyimpanan
            yang penuh dapat membuat penyimpanan gagal; aplikasi menangani
            kondisi ini tanpa menghentikan fungsi utama.
          </p>

          <h2>Cookie dan iklan</h2>
          <p>
            Saat ini TEXTORA tidak menampilkan iklan dan tidak memasang cookie
            iklan. Jika layanan periklanan seperti Google AdSense diaktifkan di
            kemudian hari, penyedia iklan dan mitranya dapat memakai cookie
            untuk menayangkan serta mengukur iklan. Sebelum itu diaktifkan, kami
            akan memperbarui kebijakan ini dan menyediakan pilihan persetujuan
            yang sesuai.
          </p>
          <p>
            Anda dapat mempelajari cara Google menggunakan data untuk iklan di
            halaman kebijakan Google, dan menolak personalisasi iklan melalui
            pengaturan iklan Google atau inisiatif industri seperti
            aboutads.info.
          </p>

          <h2>Analitik</h2>
          <p>
            Versi ini tidak memakai analitik pihak ketiga. Jika nanti
            ditambahkan, kami akan memilih alat yang menghormati privasi dan
            menjelaskan perubahannya di halaman ini.
          </p>

          <h2>Tautan pihak ketiga</h2>
          <p>
            Artikel atau halaman tertentu dapat menautkan situs pihak ketiga.
            Kebijakan privasi mereka berlaku sepenuhnya di situs mereka sendiri;
            kami tidak mengendalikan pengumpulan data di sana.
          </p>

          <h2>Anak-anak</h2>
          <p>
            TEXTORA tidak ditujukan khusus untuk anak di bawah 13 tahun dan
            tidak menyediakan akun atau formulir pendaftaran. Jika Anda merasa
            ada data anak yang perlu dihapus, hubungi kami melalui{" "}
            <Link href="/contact">halaman kontak</Link>.
          </p>

          <h2>Hak Anda</h2>
          <p>
            Karena data utama tersimpan di perangkat Anda, Anda dapat mengakses
            dan menghapusnya secara langsung melalui browser. Untuk pertanyaan
            tentang privasi atau permintaan lain, gunakan{" "}
            <Link href="/contact">halaman kontak</Link>.
          </p>

          <h2>Perubahan kebijakan</h2>
          <p>
            Kebijakan ini dapat diperbarui ketika fitur baru, termasuk iklan,
            diaktifkan. Tanggal pembaruan akan ditampilkan di bagian atas
            halaman ini.
          </p>
        </Prose>
      </Container>
    </>
  );
}
