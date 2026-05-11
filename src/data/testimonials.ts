export interface Testimonial {
  id: string;
  name: string;
  role: string;
  initials: string;
  rating: number;
  content: string;
  product: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Rina Maharani",
    role: "Ibu Rumah Tangga",
    initials: "RM",
    rating: 5,
    content:
      "Rakik Klarisa ini beda banget sama rakik biasa! Teksturnya renyah, bumbunya meresap sempurna. Anak-anak saya yang biasanya susah makan camilan tradisional malah ketagihan. Packagingnya juga elegan, cocok banget buat hampers!",
    product: "Rakik Original",
  },
  {
    id: "t2",
    name: "Andre Wijaya",
    role: "Pengusaha Kuliner",
    initials: "AW",
    rating: 5,
    content:
      "Sebagai pelaku usaha kuliner, saya sangat menghargai kualitas Rakik Klarisa. Bahan bakunya premium, proses produksinya higienis. Saya sudah jadi pelanggan tetap untuk stok di kafe saya. Pelanggan selalu kasih feedback positif!",
    product: "Rakik Pedas Nusantara",
  },
  {
    id: "t3",
    name: "Siti Nurhaliza",
    role: "Content Creator",
    initials: "SN",
    rating: 5,
    content:
      "Pertama kali coba Rakik Klarisa karena lihat di media sosial. Ternyata rasanya melebihi ekspektasi! Rakik Baladonya juara banget, pedasnya nampol tapi nagih. Sekarang tiap ada acara keluarga pasti pesen di sini.",
    product: "Rakik Balado",
  },
  {
    id: "t4",
    name: "Budi Santoso",
    role: "Karyawan Swasta",
    initials: "BS",
    rating: 4,
    content:
      "Camilan wajib saat kerja! Rakik Keju Premiumnya enak banget, gurih dan cheesy. Pengirimannya juga cepat dan aman, packing rapi banget sampai nggak ada yang remuk. Recommended seller!",
    product: "Rakik Keju Premium",
  },
  {
    id: "t5",
    name: "Dian Permata",
    role: "Event Organizer",
    initials: "DP",
    rating: 5,
    content:
      "Saya sering pesan Rakik Klarisa untuk goodie bag event. Packaging premium-nya selalu bikin tamu impressed. Harganya worth it banget untuk kualitas yang diberikan. Pokoknya langganan terus!",
    product: "Paket Bundling Keluarga",
  },
];
