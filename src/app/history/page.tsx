import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { HistoryList } from "@/components/saved/HistoryList";
import { Prose } from "@/components/ui/Prose";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Riwayat",
  description:
    "Riwayat teks yang pernah Anda salin dari generator TEXTORA, tersimpan lokal di browser. Salin ulang atau hapus kapan saja.",
  path: "/history",
});

export default function HistoryPage() {
  return (
    <>
      <PageIntro
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Riwayat" },
        ]}
        eyebrow="Aktivitas lokal"
        title="Riwayat"
        description="Temukan kembali teks yang pernah Anda pakai tanpa mencari ulang. Riwayat disimpan di perangkat ini dan dibatasi agar tetap ringan."
      />

      <Container className="py-8 sm:py-10">
        <HistoryList />
      </Container>

      <Container size="narrow" className="pb-14 sm:pb-20">
        <Prose>
          <h2>Kapan riwayat dicatat?</h2>
          <p>
            Setiap kali Anda menyalin hasil generator, TEXTORA mencatat hasil,
            teks asli bila tersedia, nama gaya, alat asal, dan waktu pemakaian.
            Menyalin susunan simbol atau emoji juga dicatat. Mengetik atau
            mengganti pratinjau tanpa menyalin tidak menambah riwayat.
          </p>

          <h2>Batas dan urutan</h2>
          <p>
            Riwayat menyimpan sekitar 50 entri terakhir dengan entri terbaru di
            atas. Pemakaian berulang yang sama secara berurutan tidak membuat
            duplikat; waktu entri teratas diperbarui. Entri tertua dilepas
            otomatis saat batas tercapai.
          </p>

          <h2>Kendali ada di tangan Anda</h2>
          <p>
            Hapus satu entri dengan tombol sampah, atau bersihkan seluruh
            riwayat dengan konfirmasi. Data tidak dikirim ke server dan tidak
            dipakai untuk analitik. Bila penyimpanan browser tidak tersedia,
            generator tetap bisa dipakai dan pesan kegagalan ditampilkan tanpa
            halaman error.
          </p>

          <p>
            Lihat juga <Link href="/favorites">Favorit</Link> dan{" "}
            <Link href="/fancy-text-generator">Fancy Text Generator</Link>.
          </p>
        </Prose>
      </Container>
    </>
  );
}
