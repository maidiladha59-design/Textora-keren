import type { ArticleSource } from "@/content/articles/types";

export const nicknameGame: ArticleSource = {
  slug: "nickname-game-keren-dan-batas-karakter",
  title: "Nickname Game Keren: Batas Karakter dan Simbol yang Aman",
  description:
    "Batas karakter nickname Free Fire, Mobile Legends, PUBG, Roblox, dan Discord, plus cara menyusun simbol agar nama tetap diterima saat disimpan.",
  category: "Nickname Game",
  publishedAt: "2026-11-13",
  related: [
    "simbol-aesthetic-untuk-bio-dan-caption",
    "mengapa-karakter-unicode-tampil-sebagai-kotak",
  ],
  blocks: [
    {
      type: "paragraph",
      text: "Nickname game punya aturan yang lebih ketat daripada bio media sosial. Kolom nama harus pendek, sering hanya menerima karakter tertentu, dan dihitung dengan cara yang bisa berbeda dari yang terlihat di layar. Simbol yang terlihat cantik di generator belum tentu lolos saat disimpan, sehingga lebih aman memahami batasnya sebelum membeli item rename.",
    },
    { type: "heading", level: 2, text: "Batas umum nickname per platform" },
    {
      type: "paragraph",
      text: "Angka berikut adalah batas umum yang sering dipakai. Platform dapat mengubahnya kapan saja, dan cara menghitung simbol serta emoji bisa berbeda dari jumlah huruf yang terlihat. Perlakukan angka ini sebagai perkiraan, bukan jaminan.",
    },
    {
      type: "list",
      items: [
        "Free Fire: sekitar 12 karakter.",
        "Mobile Legends: sekitar 16 karakter.",
        "PUBG Mobile: sekitar 14 karakter.",
        "Roblox: 20 karakter untuk username.",
        "Discord: 32 karakter untuk username dan nama tampilan.",
        "Instagram: 30 karakter untuk username.",
      ],
    },
    {
      type: "paragraph",
      text: "Perhatikan bahwa batas tersebut biasanya mencakup semua karakter, termasuk spasi dan hiasan. Setiap simbol tambahan mengurangi ruang untuk huruf. Emoji yang tampak sebagai satu gambar bisa tersusun dari beberapa kode, sehingga sebagian sistem menghitungnya lebih dari satu karakter.",
    },
    { type: "heading", level: 2, text: "Mengapa simbol bisa membuat nama ditolak" },
    {
      type: "paragraph",
      text: "Banyak game memakai daftar karakter yang diizinkan. Huruf Latin, angka, dan beberapa simbol umum biasanya lolos; karakter dekoratif yang lebih jarang bisa ditolak atau dihapus otomatis. Ada juga sistem yang menyaring kata-kata tertentu, sehingga nama yang tampak aman tetap bisa gagal disimpan.",
    },
    {
      type: "list",
      items: [
        "Simbol dari blok Unicode yang jarang dipakai sering tidak masuk daftar putih.",
        "Tanda penggabung yang menumpuk huruf bisa dianggap karakter rusak.",
        "Emoji kadang dilarang di kolom nama tertentu meski tampil di kolom obrolan.",
        "Spasi di awal atau akhir nama biasanya dipangkas otomatis.",
      ],
    },
    {
      type: "callout",
      title: "Uji di akun sekunder",
      text: "Jika game memakai item rename berbayar, coba dulu susunan nama di akun sekunder atau mode uji bila tersedia. Lebih baik kehilangan beberapa menit daripada kehilangan item rename.",
    },
    { type: "heading", level: 2, text: "Menyusun nickname dari nama dasar" },
    {
      type: "list",
      ordered: true,
      items: [
        "Pilih nama dasar yang pendek, idealnya empat sampai delapan huruf, agar masih ada ruang untuk hiasan.",
        "Tentukan platform tujuan sehingga batas karakternya jelas sejak awal.",
        "Pilih satu nuansa saja: gaming, aesthetic, cute, atau minimal. Mencampur semuanya membuat nama sulit dibaca.",
        "Periksa penghitung karakter pada setiap saran dan pilih yang masih di bawah batas platform.",
        "Salin saran, tempel di kolom nama, lalu simpan. Jika ditolak, kembali ke saran yang lebih sederhana.",
      ],
    },
    { type: "heading", level: 2, text: "Pola yang biasanya tetap aman" },
    {
      type: "list",
      items: [
        "Huruf tebal atau miring matematis dengan satu simbol di awal atau akhir nama.",
        "Huruf biasa dengan satu pasang kurung hias, misalnya untuk membungkus nama pendek.",
        "Small caps untuk nuansa minimal, tanpa tambahan ornamen.",
        "Satu simbol pemisah antara nama dan tag tim, bukan deretan simbol panjang.",
      ],
    },
    {
      type: "paragraph",
      text: "Hindari nama yang menyerupai akun resmi, staf, atau penyelenggara turnamen. Selain berisiko melanggar aturan, nama seperti itu bisa dilaporkan pemain lain dan menyebabkan akun dibatasi. Hiasan sebaiknya memperkuat identitas Anda, bukan menyamar sebagai pihak lain.",
    },
    { type: "heading", level: 2, text: "Tips memilih nickname yang tahan lama" },
    {
      type: "list",
      items: [
        "Pastikan nama masih terbaca saat diperkecil di daftar pemain atau papan skor.",
        "Sisakan ruang untuk tag klan yang mungkin ditambahkan kemudian.",
        "Hindari karakter yang membuat nama sulit disebutkan saat voice chat.",
        "Jangan memakai informasi pribadi seperti tanggal lahir atau nomor telepon.",
        "Periksa apakah nama sudah dipakai sebelum membeli item rename.",
      ],
    },
    { type: "heading", level: 2, text: "Sebelum mengganti nama" },
    {
      type: "paragraph",
      text: "Beberapa game memakai item rename berbayar atau menetapkan jeda waktu antarpergantian. Periksa menu akun dan ketentuan platform lebih dulu. Setelah nama diganti, salin versi akhirnya ke catatan agar Anda tidak perlu menyusun ulang jika ingin kembali ke nama lama.",
    },
    {
      type: "paragraph",
      text: "Generator nickname TEXTORA menyusun saran dari huruf Unicode dan simbol yang nyata, lalu menampilkan jumlah karakter terhadap batas platform. Hasilnya deterministik dan diproses di browser, sehingga nama yang Anda ketik tidak dikirim ke server.",
    },
    {
      type: "linkList",
      title: "Alat dan panduan terkait",
      links: [
        { label: "Nickname Generator", href: "/nickname-generator" },
        { label: "Symbol Generator", href: "/symbols" },
        {
          label: "Simbol aesthetic untuk bio dan caption",
          href: "/articles/simbol-aesthetic-untuk-bio-dan-caption",
        },
        {
          label: "Mengapa karakter tampil sebagai kotak?",
          href: "/articles/mengapa-karakter-unicode-tampil-sebagai-kotak",
        },
      ],
    },
  ],
};
