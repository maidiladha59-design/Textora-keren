import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { Prose } from "@/components/ui/Prose";
import { StatusNotice } from "@/components/ui/StatusNotice";
import { buttonStyles } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Kontak",
  description:
    "Hubungi TEXTORA untuk pertanyaan, koreksi konten, atau laporan bug. Kontak tersedia melalui email; tidak ada formulir palsu tanpa backend.",
  path: "/contact",
});

export default function ContactPage() {
  const email = siteConfig.contactEmail;

  return (
    <>
      <PageIntro
        breadcrumb={[
          { label: "Beranda", href: "/" },
          { label: "Kontak" },
        ]}
        eyebrow="Hubungi kami"
        title="Kontak"
        description="Punya pertanyaan tentang konten, menemukan bug, atau ingin memberi masukan? Kirim email; kami membaca pesan yang masuk."
      />

      <Container size="narrow" className="py-10 sm:py-14">
        {email ? (
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-card sm:p-8">
            <span className="grid size-11 place-items-center rounded-xl bg-primary-soft text-primary-soft-foreground">
              <Mail className="size-5" aria-hidden="true" />
            </span>
            <h2 className="mt-4 font-display text-lg font-semibold">
              Email
            </h2>
            <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
              Cara paling langsung untuk menghubungi pemilik TEXTORA. Sertakan
              perangkat dan langkah reproduksi bila melaporkan bug.
            </p>
            <a
              href={`mailto:${email}`}
              className={buttonStyles({ className: "mt-5" })}
            >
              <Mail className="size-4" aria-hidden="true" />
              Kirim email
            </a>
            <p className="mt-3 break-all text-xs text-muted-foreground">
              {email}
            </p>
          </div>
        ) : (
          <StatusNotice title="Alamat email belum diatur">
            Pemilik situs belum mengonfigurasi alamat email kontak. Halaman ini
            tidak memakai formulir karena TEXTORA belum memiliki backend untuk
            mengirim pesan; formulir yang tidak mengirim apa pun akan
            menyesatkan.
          </StatusNotice>
        )}

        <Prose className="mt-8">
          <h2>Yang bisa Anda sampaikan</h2>
          <ul>
            <li>Koreksi atau masukan untuk artikel dan panduan.</li>
            <li>Laporan bug disertai perangkat, browser, dan langkahnya.</li>
            <li>Pertanyaan tentang privasi dan penyimpanan lokal.</li>
            <li>Permintaan kerja sama yang relevan dengan TEXTORA.</li>
          </ul>

          <h2>Kenapa tidak ada formulir?</h2>
          <p>
            TEXTORA sengaja dibangun tanpa backend dan tanpa database. Formulir
            kontak membutuhkan layanan pengiriman pesan, penyimpanan, dan
            perlindungan spam. Selama itu belum ada, email adalah kanal yang
            jujur dan langsung, tanpa data tambahan yang dikumpulkan.
          </p>
          <p>
            Baca juga{" "}
            <Link href="/privacy-policy">Kebijakan Privasi</Link> untuk memahami
            bagaimana data diperlakukan.
          </p>
        </Prose>
      </Container>
    </>
  );
}
