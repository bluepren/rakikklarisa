export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  bestSeller?: boolean;
  weight: string;
  variants?: { label: string; price: number }[];
}

export const products: Product[] = [
  {
    id: "rakik-original",
    name: "Rakik Original",
    description:
      "Keripik rakik klasik dengan cita rasa gurih asli. Dibuat dari singkong pilihan, digoreng dengan minyak kelapa premium menghasilkan tekstur renyah yang sempurna.",
    price: 35000,
    image: "/images/rakik-original.jpg",
    category: "Rakik Klasik",
    bestSeller: true,
    weight: "200g",
    variants: [
      { label: "200g", price: 35000 },
      { label: "400g", price: 65000 },
      { label: "1kg", price: 150000 },
    ],
  },
  {
    id: "rakik-pedas",
    name: "Rakik Pedas Nusantara",
    description:
      "Perpaduan sempurna antara gurihnya rakik dan pedasnya cabai khas Nusantara. Dibumbui rempah pilihan untuk sensasi pedas yang menggoda.",
    price: 38000,
    image: "/images/rakik-spicy.jpg",
    category: "Rakik Premium",
    bestSeller: true,
    weight: "200g",
    variants: [
      { label: "200g", price: 38000 },
      { label: "400g", price: 70000 },
      { label: "1kg", price: 165000 },
    ],
  },
  {
    id: "rakik-balado",
    name: "Rakik Balado",
    description:
      "Rakik renyah berbalut bumbu balado khas Minang yang kaya rasa. Pedas, gurih, dan sedikit manis berpadu dalam setiap gigitan.",
    price: 38000,
    image: "/images/rakik-balado.jpg",
    category: "Rakik Premium",
    weight: "200g",
    variants: [
      { label: "200g", price: 38000 },
      { label: "400g", price: 70000 },
    ],
  },
  {
    id: "rakik-jagung",
    name: "Rakik Jagung Manis",
    description:
      "Inovasi rakik dengan bahan dasar jagung manis pilihan. Tekstur renyah dengan rasa manis alami yang cocok untuk camilan keluarga.",
    price: 30000,
    image: "/images/rakik-gallery.jpg",
    category: "Rakik Varian",
    weight: "180g",
    variants: [
      { label: "180g", price: 30000 },
      { label: "360g", price: 55000 },
    ],
  },
  {
    id: "rakik-keju",
    name: "Rakik Keju Premium",
    description:
      "Rakik singkong renyah dengan taburan keju cheddar premium. Perpaduan gurih dan creamy yang memanjakan lidah.",
    price: 42000,
    image: "/images/rakik-cheese.jpg",
    category: "Rakik Premium",
    weight: "200g",
    variants: [
      { label: "200g", price: 42000 },
      { label: "400g", price: 78000 },
    ],
  },
  {
    id: "rakik-barbeque",
    name: "Rakik Barbeque",
    description:
      "Rakik dengan balutan bumbu barbeque smokey yang menggugah selera. Cocok untuk teman nonton dan kumpul bersama.",
    price: 38000,
    image: "/images/rakik-spicy.jpg",
    category: "Rakik Varian",
    weight: "200g",
    variants: [
      { label: "200g", price: 38000 },
      { label: "400g", price: 70000 },
    ],
  },
  {
    id: "paket-bundling",
    name: "Paket Bundling Keluarga",
    description:
      "Paket hemat berisi 4 varian rakik best seller: Original, Pedas, Balado, dan Keju. Masing-masing kemasan 200g.",
    price: 135000,
    image: "/images/rakik-bundle.jpg",
    category: "Paket Hemat",
    bestSeller: true,
    weight: "4 x 200g",
    variants: [
      { label: "4 Varian (4x200g)", price: 135000 },
      { label: "4 Varian (4x400g)", price: 250000 },
    ],
  },
  {
    id: "keripik-singkong",
    name: "Keripik Singkong Premium",
    description:
      "Selain rakik, kami juga menghadirkan keripik singkong iris tipis dengan berbagai pilihan rasa. Renyah dan gurih dalam setiap gigitan.",
    price: 28000,
    image: "/images/rakik-original.jpg",
    category: "Produk Lain",
    weight: "150g",
    variants: [
      { label: "Original 150g", price: 28000 },
      { label: "Balado 150g", price: 32000 },
    ],
  },
];

export const productCategories = [
  "Semua",
  "Rakik Klasik",
  "Rakik Premium",
  "Rakik Varian",
  "Paket Hemat",
  "Produk Lain",
];
