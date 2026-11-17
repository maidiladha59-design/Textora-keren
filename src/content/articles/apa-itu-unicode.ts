import type { ArticleSource } from "@/content/articles/types";

export const apaItuUnicode: ArticleSource = {
  slug: "apa-itu-unicode",
  title: "Apa Itu Unicode dan Mengapa Teks Bisa Terlihat Berbeda?",
  description:
    "Penjelasan sederhana tentang Unicode, cara kerja teks keren atau fancy text, dan alasan tampilannya bisa berbeda di setiap perangkat.",
  category: "Dasar Unicode",
  publishedAt: "2026-11-10",
  updatedAt: "2026-11-17",
  related: [
    "mengapa-karakter-unicode-tampil-sebagai-kotak",
    "cara-membuat-teks-keren-di-whatsapp",
  ],
  blocks: [
    {
      type: "paragraph",
      text: "Pernah melihat bio Instagram atau nama game yang hurufnya tebal, miring, atau seperti tulisan tangan? Teks itu sering disebut fancy text, cool text, atau teks keren. Banyak orang mengira itu adalah font khusus yang harus diunduh. Kenyataannya, yang berubah bukan font perangkat Anda, melainkan karakter yang dipakai: setiap huruf diganti dengan karakter Unicode lain yang bentuknya mirip.",
    },
    {
      type: "heading",
      level: 2,
      text: "Bukan font baru, tapi karakter yang berbeda",
    },
    {
      type: "paragraph",
      text: "Font adalah kumpulan desain bentuk huruf. Karakter adalah simbol yang disimpan di dalam teks. Ketika Anda mengetik huruf A biasa, komputer menyimpan satu kode. Ketika Anda menempelkan huruf A tebal, komputer menyimpan kode lain yang sudah didesain tebal oleh standar Unicode. Aplikasi cukup memakai font yang tersedia di perangkat untuk menggambar kode tersebut.",
    },
    {
      type: "paragraph",
      text: "Karena itu, teks keren bisa disalin ke WhatsApp, Instagram, TikTok, Discord, atau game tanpa memasang aplikasi tambahan. Selama perangkat memiliki bentuk karakter yang dimaksud, teks akan tampil sesuai harapan. Tidak ada gambar, tidak ada unggahan file, dan tidak ada font yang diinstal.",
    },
    {
      type: "callout",
      title: "Intinya",
      text: "Fancy text bukan tipografi yang dipaksakan. Setiap huruf hanyalah karakter Unicode lain yang bentuknya kebetulan mirip huruf biasa.",
    },
    {
      type: "heading",
      level: 2,
      text: "Bagaimana satu huruf bisa punya banyak bentuk?",
    },
    {
      type: "paragraph",
      text: "Unicode adalah standar internasional yang memberi kode unik untuk karakter dari berbagai bahasa, simbol matematika, emoji, dan banyak lagi. Di dalamnya ada blok bernama Mathematical Alphanumeric Symbols yang menyediakan varian huruf Latin untuk kebutuhan matematika, seperti huruf tebal, miring, fraktur, dan double-struck. Huruf A biasa memiliki kode U+0041, sedangkan A tebal matematis memiliki kode U+1D400.",
    },
    {
      type: "paragraph",
      text: "Contoh lain datang dari blok Enclosed Alphanumerics untuk angka dan huruf dalam lingkaran, serta Halfwidth and Fullwidth Forms untuk karakter selebar penuh yang sering dipakai sebagai gaya wide atau aesthetic. Karena semua varian ini adalah karakter yang sah, teksnya tetap bisa dicari, disalin, dan ditempel seperti teks biasa.",
    },
    {
      type: "heading",
      level: 2,
      text: "Mengapa tampilannya bisa berbeda atau menjadi kotak?",
    },
    {
      type: "paragraph",
      text: "Tidak semua perangkat menyediakan bentuk untuk setiap karakter Unicode. Jika sebuah karakter tidak ditemukan di font sistem, perangkat akan menampilkan kotak kosong, tanda tanya, atau karakter pengganti. Ini bukan berarti teksnya rusak; hanya bentuk karakternya tidak tersedia di perangkat tersebut.",
    },
    {
      type: "list",
      items: [
        "Versi sistem operasi lama sering belum memiliki bentuk untuk karakter Unicode yang lebih baru.",
        "Beberapa aplikasi membatasi karakter yang boleh dipakai, terutama pada kolom nama pengguna atau nickname game.",
        "Panjang teks bisa berbeda karena sebagian karakter memakan ruang lebih lebar, meskipun terlihat seperti satu huruf.",
        "Pembaca layar dapat mengeja karakter bergaya secara berbeda, sehingga teks penting sebaiknya tetap memakai huruf biasa.",
      ],
    },
    {
      type: "callout",
      title: "Jika muncul kotak-kotak",
      text: "Coba buka teks di aplikasi atau perangkat lain. Jika tampil normal di sana, berarti perangkat pertama hanya tidak memiliki bentuk karakter tersebut. TEXTORA akan menandai gaya yang dukungannya terbatas agar Anda bisa memilih dengan sadar.",
    },
    {
      type: "heading",
      level: 2,
      text: "Aman dipakai di WhatsApp dan Instagram?",
    },
    {
      type: "paragraph",
      text: "Untuk bio, caption, status, dan pesan, umumnya aman selama aplikasi menerima karakter Unicode. Namun ada beberapa hal yang perlu diingat. Kolom username biasanya hanya mengizinkan huruf dan angka standar. Sebagian platform juga menormalkan teks saat pencarian, sehingga orang lain mungkin tidak menemukan akun Anda jika namanya ditulis dengan karakter bergaya. Gunakan fancy text sebagai hiasan, bukan sebagai pengganti identitas utama.",
    },
    {
      type: "heading",
      level: 2,
      text: "Cara memakai teks keren dengan bijak",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Pakai untuk hal yang tidak kritis: bio, caption, nama tampilan, atau judul kreatif.",
        "Sisakan teks biasa di tempat yang membutuhkan pencarian, seperti nama akun dan kata kunci.",
        "Uji dulu tampilannya di aplikasi target sebelum menyimpan perubahan.",
        "Hindari gaya yang terlalu ramai bila teksnya panjang; keterbacaan tetap yang utama.",
        "Perhatikan pembaca layar dan pengguna perangkat lama, terutama jika Anda mengelola konten publik.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Peran TEXTORA",
    },
    {
      type: "paragraph",
      text: "TEXTORA adalah generator teks Unicode yang berjalan sepenuhnya di browser. Anda cukup mengetik teks dan hasilnya muncul langsung tanpa reload. Tidak ada teks yang dikirim ke server, tidak ada akun yang harus dibuat, dan setiap gaya diberi catatan kompatibilitas bila tampilannya berpotensi berbeda antar perangkat.",
    },
    {
      type: "paragraph",
      text: "Sembilan alat sudah aktif: fancy text, bold, italic, script, simbol, nickname, bio Instagram, emoji, dan angka. Favorit dan riwayat tersimpan hanya di browser Anda, sehingga teks pribadi tetap berada di perangkat. Tidak ada tombol atau kolom input yang belum benar-benar berfungsi.",
    },
    {
      type: "linkList",
      title: "Alat dan bacaan terkait",
      links: [
        {
          label: "Fancy Text Generator",
          href: "/fancy-text-generator",
        },
        { label: "Bold Text Generator", href: "/bold-text" },
        { label: "Italic Text Generator", href: "/italic-text" },
        { label: "Script Text Generator", href: "/script-text" },
        { label: "Symbol Generator", href: "/symbols" },
        {
          label: "Mengapa karakter tampil sebagai kotak?",
          href: "/articles/mengapa-karakter-unicode-tampil-sebagai-kotak",
        },
      ],
    },
  ],
};
