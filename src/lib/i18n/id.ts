export const dictionary = {
  common: {
    skipToContent: "Langsung ke konten",
    home: "Beranda",
    backHome: "Kembali ke beranda",
    comingSoon: "Segera hadir",
    inDevelopment: "Sedang disiapkan",
  },
  generator: {
    inputLabel: "Teks untuk diubah",
    inputPlaceholder: "Ketik atau tempel teks di sini…",
    inputHint:
      "Teks hanya diproses di browser dan tidak pernah dikirim ke server.",
    characterCount: (count: number) =>
      `${count} karakter`,
    clear: "Bersihkan",
    sample: "Coba contoh",
    sampleText: "Hello World 123",
    sampleAnnouncement:
      "Contoh teks diisi. Hasil gaya ditampilkan di bawah kolom input.",
    categoryLabel: "Kategori gaya",
    allCategories: "Semua",
    resultsTitle: "Hasil gaya",
    resultCount: (count: number) => `${count} gaya`,
    resultsHint: "Klik Salin untuk memakai gaya di aplikasi tujuan.",
    updating: "Memperbarui pratinjau…",
    emptyTitle: "Hasil muncul saat Anda mengetik",
    emptyDescription:
      "Ketik teks di kolom atas atau pakai contoh untuk melihat semua gaya Unicode secara langsung.",
    noResults: "Tidak ada gaya pada kategori ini.",
    copy: "Salin",
    copied: "Tersalin",
    copyError: "Coba lagi",
    copyLabel: (style: string) => `Salin gaya ${style}`,
    copyAnnouncement: (style: string) =>
      `Gaya ${style} berhasil disalin ke clipboard.`,
    copyErrorAnnouncement:
      "Teks gagal disalin. Pilih teks pada pratinjau lalu salin secara manual.",
    limited: "Dukungan terbatas",
    limitedHint:
      "Sebagian perangkat mungkin menampilkan bentuk karakter yang berbeda.",
    previewLabel: (style: string) => `Pratinjau visual gaya ${style}.`,
  },
  glyphs: {
    searchLabel: "Cari nama",
    searchPlaceholder: "Cari nama karakter…",
    all: "Semua",
    resultCount: (count: number) => `${count} karakter`,
    visibleCount: (shown: number, total: number) =>
      `Menampilkan ${shown} dari ${total} karakter`,
    showMore: "Tampilkan lebih banyak",
    emptyTitle: "Tidak ada karakter yang cocok",
    emptyDescription:
      "Coba kata kunci lain atau pilih kategori Semua untuk melihat seluruh koleksi.",
    copyAnnouncement: (name: string) => `${name} berhasil disalin.`,
    addAnnouncement: (name: string) =>
      `${name} ditambahkan ke susunan di atas.`,
    copyLabel: (name: string) => `Salin ${name}`,
    addLabel: (name: string) => `Tambahkan ${name} ke susunan`,
    copied: "Tersalin",
    composerTitle: "Susunan",
    composerHint:
      "Klik ikon + pada karakter untuk menambah, atau ketik langsung di sini.",
    composerPlaceholder: "Susun beberapa karakter di sini…",
    copyComposer: "Salin susunan",
    clearComposer: "Kosongkan",
    composerCopyAnnouncement:
      "Susunan berhasil disalin ke clipboard.",
  },
  nickname: {
    nameLabel: "Nama dasar",
    namePlaceholder: "Contoh: ProGamer",
    platformLabel: "Platform tujuan",
    vibeLabel: "Nuansa nickname",
    resultsTitle: "Saran nickname",
    resultCount: (count: number) => `${count} nickname`,
    hint: "Semua saran dibuat dari nama dasar yang sama. Batas karakter bersifat umum dan dapat berubah.",
    emptyTitle: "Masukkan nama dasar",
    emptyDescription:
      "Ketik nama yang ingin dipakai, lalu pilih platform dan nuansa. Saran nickname muncul otomatis.",
    sample: "Coba contoh",
    sampleName: "ProGamer",
    charCount: (count: number, limit: number) =>
      `${count}/${limit} karakter`,
    safeLimit: "Dalam batas umum",
    overLimit: "Melebihi batas umum",
    copyLabel: (name: string) => `Salin nickname ${name}`,
  },
  bio: {
    nameLabel: "Nama atau brand",
    namePlaceholder: "Contoh: Nadia",
    roleLabel: "Peran atau minat",
    rolePlaceholder: "Contoh: Ilustrator & desainer",
    actionLabel: "Ajakan atau tautan",
    actionPlaceholder: "Contoh: Karya baru setiap Jumat",
    categoryLabel: "Kategori bio",
    resultsTitle: "Template bio",
    resultCount: (count: number) => `${count} template`,
    hint: "Klik Sunting untuk mengubah teks sebelum menyalin. Tombol salin nonaktif bila melewati 150 karakter.",
    emptyTitle: "Isi nama untuk mulai",
    emptyDescription:
      "Nama wajib diisi. Peran dan ajakan bersifat opsional, tetapi membuat bio lebih lengkap.",
    sample: "Coba contoh",
    sampleName: "Nadia",
    sampleRole: "Ilustrator & desainer",
    sampleAction: "Karya baru setiap Jumat",
    edit: "Sunting",
    editorTitle: "Sunting bio",
    closeEditor: "Tutup editor",
    editorHint:
      "Perubahan hanya ada di sesi ini dan tidak disimpan di server.",
    limit: 150,
    nearLimit: "Mendekati batas",
    overLimit: "Melebihi batas 150 karakter",
    withinLimit: "Dalam batas Instagram",
    copyLabel: (name: string) => `Salin bio ${name}`,
  },
  saved: {
    addLabel: (style: string) => `Simpan ${style} ke favorit`,
    removeLabel: (style: string) => `Hapus ${style} dari favorit`,
    added: (style: string) => `${style} disimpan ke favorit.`,
    removed: (style: string) => `${style} dihapus dari favorit.`,
    limitReached:
      "Favorit penuh. Hapus beberapa entri sebelum menyimpan yang baru.",
    invalid: "Teks kosong atau terlalu panjang untuk disimpan.",
    unavailable: "Browser ini tidak mengizinkan penyimpanan favorit.",
    openTool: "Buka alat",
    savedAt: (date: string) => `Disimpan ${date}`,
    usedAt: (date: string) => `Dipakai ${date}`,
    inputLabel: "Teks asli",
    localOnly: "Hanya tersimpan di browser ini.",
  },
  favorites: {
    eyebrow: "Koleksi pribadi",
    title: "Favorit",
    description:
      "Hasil generator yang Anda simpan di perangkat ini. Tekan ikon hati pada hasil untuk menambah atau melepas favorit.",
    count: (count: number) => `${count} favorit`,
    listTitle: "Daftar favorit",
    emptyTitle: "Belum ada favorit",
    emptyDescription:
      "Tekan ikon hati pada hasil generator untuk menyimpannya di sini. Favorit tetap tersedia setelah halaman dimuat ulang.",
    start: "Buat teks sekarang",
    browseSymbols: "Jelajahi simbol",
    removeLabel: (name: string) => `Hapus ${name} dari favorit`,
    clearAll: "Hapus semua favorit",
    clearConfirmTitle: "Hapus semua favorit?",
    clearConfirmDescription:
      "Semua entri favorit akan dihapus dari browser ini. Tindakan ini tidak bisa dibatalkan.",
    confirmClear: "Ya, hapus semua",
    cancel: "Batal",
    cleared: "Semua favorit dihapus.",
    removed: "Favorit dihapus.",
    limitNote: "Maksimal 100 favorit disimpan di perangkat ini.",
    loading: "Memuat favorit…",
    storageError: "Favorit tidak dapat diubah di browser ini.",
  },
  history: {
    eyebrow: "Aktivitas lokal",
    title: "Riwayat",
    description:
      "Teks yang pernah Anda salin dari generator, tersimpan lokal agar mudah dipakai lagi.",
    count: (count: number) => `${count} entri`,
    listTitle: "Riwayat pemakaian",
    emptyTitle: "Belum ada riwayat",
    emptyDescription:
      "Riwayat muncul otomatis setiap kali Anda menyalin hasil generator. Daftar ini hanya tersimpan di browser Anda.",
    start: "Mulai menyalin teks",
    browseTools: "Jelajahi alat",
    removeLabel: (name: string) => `Hapus ${name} dari riwayat`,
    clearAll: "Hapus semua riwayat",
    clearConfirmTitle: "Hapus semua riwayat?",
    clearConfirmDescription:
      "Seluruh entri riwayat akan dihapus dari browser ini. Tindakan ini tidak bisa dibatalkan.",
    confirmClear: "Ya, hapus semua",
    cancel: "Batal",
    cleared: "Riwayat dihapus.",
    removed: "Entri riwayat dihapus.",
    limitNote:
      "Menyimpan 50 entri terakhir tanpa duplikat berurutan. Entri tertua dilepas otomatis.",
    loading: "Memuat riwayat…",
    storageError: "Riwayat tidak dapat diubah di browser ini.",
  },
  toast: {
    close: "Tutup notifikasi",
  },
  numbers: {
    resultsTitle: "Gaya angka",
    resultCount: (count: number) => `${count} gaya angka`,
    hint: "Hanya angka yang diubah. Huruf, spasi, dan tanda baca tetap seperti aslinya.",
    emptyTitle: "Hasil muncul saat Anda mengetik",
    emptyDescription:
      "Ketik angka, tanggal, atau nomor urut untuk melihat sepuluh gaya Unicode sekaligus.",
    sample: "Coba contoh",
    sampleText: "2026",
  },
  header: {
    brandHome: "TEXTORA — Beranda",
    openMenu: "Buka menu navigasi",
    menuLabel: "Menu navigasi",
  },
  nav: {
    tools: "Alat",
    explore: "Jelajahi",
    account: "Akun Anda",
    legal: "Legal",
    closeMenu: "Tutup menu",
  },
  theme: {
    label: "Tema tampilan",
    light: "Terang",
    dark: "Gelap",
    system: "Sistem",
  },
  footer: {
    description:
      "Fancy text generator berbasis Unicode untuk teks keren, simbol, nickname, bio, dan emoji. Teks Anda diproses di browser, bukan di server.",
    copyright: (year: number) =>
      `© ${year} TEXTORA. Seluruh hak cipta dilindungi.`,
    localNote: "Dibuat untuk dibaca di semua layar.",
  },
  status: {
    label: "Informasi ketersediaan",
  },
  errors: {
    notFoundTitle: "Halaman tidak ditemukan",
    notFoundDescription:
      "Alamat yang Anda buka tidak ada atau sudah dipindahkan. Coba kembali ke beranda atau pilih alat dari menu.",
    errorTitle: "Terjadi kendala",
    errorDescription:
      "Halaman ini gagal dimuat. Anda bisa mencoba lagi tanpa kehilangan data di perangkat.",
    retry: "Coba lagi",
  },
} as const;

export type Dictionary = typeof dictionary;
