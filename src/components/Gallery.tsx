import { useState } from "react";

const galleryImages = [
  {
    src: "/images/production-kitchen.jpg",
    alt: "Proses pembuatan rakik tradisional",
    caption: "Proses Tradisional",
  },
  {
    src: "/images/rakik-balado.jpg",
    alt: "Rakik siap saji",
    caption: "Siap Dinikmati",
  },
  {
    src: "/images/ingredients-cassava.jpg",
    alt: "Bahan baku singkong pilihan",
    caption: "Bahan Premium",
  },
  {
    src: "/images/production-kitchen.jpg",
    alt: "Dapur produksi higienis",
    caption: "Dapur Higienis",
  },
  {
    src: "/images/rakik-packaging.jpg",
    alt: "Packaging premium rakik",
    caption: "Packaging Elegan",
  },
  {
    src: "/images/rakik-bundle.jpg",
    alt: "Hampers rakik klarisa",
    caption: "Hampers Spesial",
  },
  {
    src: "/images/rakik-spicy.jpg",
    alt: "Varian rakik pedas",
    caption: "Varian Pedas",
  },
  {
    src: "/images/rakik-original.jpg",
    alt: "Rakik original klasik",
    caption: "Klasik Premium",
  },
  {
    src: "/images/rakik-gallery.jpg",
    alt: "Display produk rakik",
    caption: "Display Produk",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeri" className="py-20 sm:py-28 bg-premium-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 tracking-wide uppercase">
            <span className="h-px w-8 bg-gold-400" />
            Galeri
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-800">
            Sekilas{" "}
            <span className="text-gold-600">Rakik Klarisa</span>
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            Momen di balik layar, proses produksi, dan produk premium kami.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-2 sm:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">{img.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
