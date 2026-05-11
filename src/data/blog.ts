export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "Mengenal Rakik: Camilan Tradisional yang Naik Kelas",
    excerpt:
      "Dari dapur desa hingga ke meja premium, rakik telah bertransformasi menjadi camilan kekinian. Simak sejarah dan keunikan rakik yang membuatnya istimewa.",
    date: "15 Januari 2026",
    image: "/images/rakik-gallery.jpg",
    category: "Kuliner",
    readTime: "5 menit",
  },
  {
    id: "b2",
    title: "Tips Memilih Camilan Sehat untuk Keluarga",
    excerpt:
      "Di tengah maraknya camilan dengan bahan pengawet, bagaimana cara memilih camilan yang aman dan sehat? Berikut panduan memilih camilan berkualitas.",
    date: "28 Januari 2026",
    image: "/images/ingredients-cassava.jpg",
    category: "Gaya Hidup",
    readTime: "4 menit",
  },
  {
    id: "b3",
    title: "Di Balik Layar: Proses Produksi Higienis Rakik Klarisa",
    excerpt:
      "Kami membuka rahasia dapur Rakik Klarisa. Dari pemilihan singkong premium hingga pengemasan, semua dilakukan dengan standar kebersihan tinggi.",
    date: "5 Februari 2026",
    image: "/images/production-kitchen.jpg",
    category: "Di Balik Layar",
    readTime: "6 menit",
  },
  {
    id: "b4",
    title: "Ide Hampers Lebaran Unik dengan Sentuhan Tradisional",
    excerpt:
      "Ingin memberikan hampers yang berkesan? Kombinasikan produk premium Rakik Klarisa dengan packaging elegan untuk hadiah yang tak terlupakan.",
    date: "18 Februari 2026",
    image: "/images/rakik-packaging.jpg",
    category: "Inspirasi",
    readTime: "5 menit",
  },
  {
    id: "b5",
    title: "Singkong: Bahan Lokal Bernutrisi Tinggi",
    excerpt:
      "Tahukah Anda bahwa singkong kaya akan karbohidrat kompleks dan serat? Pelajari manfaat kesehatan dari bahan utama rakik kesukaan Anda.",
    date: "2 Maret 2026",
    image: "/images/ingredients-cassava.jpg",
    category: "Edukasi",
    readTime: "4 menit",
  },
  {
    id: "b6",
    title: "5 Alasan Rakik Klarisa Jadi Oleh-Oleh Favorit",
    excerpt:
      "Bingung cari oleh-oleh yang beda dari yang lain? Temukan alasan mengapa Rakik Klarisa menjadi pilihan utama untuk buah tangan spesial.",
    date: "15 Maret 2026",
    image: "/images/rakik-bundle.jpg",
    category: "Tips",
    readTime: "3 menit",
  },
];
