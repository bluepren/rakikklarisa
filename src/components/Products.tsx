import { useState } from "react";
import { products, productCategories } from "../data/products";
import { useCart } from "../context/CartContext";
import type { Product } from "../data/products";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<Record<string, string>>({});
  const [addedNotification, setAddedNotification] = useState<string | null>(null);

  const filtered =
    activeCategory === "Semua"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleAddToCart = (product: Product) => {
    const variantLabel = selectedVariant[product.id] || product.variants?.[0]?.label || product.weight;
    const variant = product.variants?.find((v) => v.label === variantLabel) || {
      label: variantLabel,
      price: product.price,
    };
    addToCart(product, variant, 1);
    setAddedNotification(product.name);
    setTimeout(() => setAddedNotification(null), 2000);
  };

  return (
    <section id="produk" className="py-20 sm:py-28 bg-premium-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 tracking-wide uppercase">
            <span className="h-px w-8 bg-gold-400" />
            Katalog Produk
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-800">
            Pilihan{" "}
            <span className="text-gold-600">Rakik Premium</span>{" "}
            Untuk Anda
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            Temukan varian rakik favorit Anda. Setiap produk dibuat dengan bahan berkualitas dan penuh cinta.
          </p>
        </div>

        {/* Notification */}
        {addedNotification && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
            <div className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-xl flex items-center gap-3">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium text-sm">{addedNotification} ditambahkan ke keranjang!</span>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {productCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gold-500 text-white shadow-lg shadow-gold-500/25"
                  : "bg-white text-stone-600 hover:bg-gold-50 hover:text-gold-700 border border-stone-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filtered.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              selectedVariant={selectedVariant[product.id]}
              onVariantChange={(v) =>
                setSelectedVariant((prev) => ({ ...prev, [product.id]: v }))
              }
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
  selectedVariant,
  onVariantChange,
  onAddToCart,
}: {
  product: Product;
  index: number;
  selectedVariant?: string;
  onVariantChange: (v: string) => void;
  onAddToCart: () => void;
}) {
  const defaultVariant = product.variants?.[0]?.label || product.weight;
  const activeVariant = selectedVariant || defaultVariant;
  const activePrice =
    product.variants?.find((v) => v.label === activeVariant)?.price || product.price;

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-gold-500/10 transition-all duration-500 flex flex-col"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        {product.bestSeller && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            Best Seller
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <span className="text-xs font-medium text-gold-600 uppercase tracking-wider">
            {product.category}
          </span>
          <h3 className="text-lg font-bold text-stone-800 mt-1 group-hover:text-gold-700 transition-colors">
            {product.name}
          </h3>
        </div>

        <p className="text-sm text-stone-500 mb-4 line-clamp-2 flex-1">
          {product.description}
        </p>

        {/* Variants */}
        {product.variants && product.variants.length > 1 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1.5">
              {product.variants.map((v) => (
                <button
                  key={v.label}
                  onClick={() => onVariantChange(v.label)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    activeVariant === v.label
                      ? "bg-gold-500 text-white shadow-md"
                      : "bg-stone-100 text-stone-600 hover:bg-gold-50"
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between pt-3 border-t border-stone-100">
          <div>
            <span className="text-lg font-bold text-gold-700">
              Rp {activePrice.toLocaleString("id-ID")}
            </span>
          </div>
          <button
            onClick={onAddToCart}
            className="flex items-center gap-2 px-4 py-2.5 bg-stone-900 hover:bg-gold-600 text-white text-sm font-semibold rounded-xl transition-all duration-300 active:scale-95"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Tambah
          </button>
        </div>
      </div>
    </div>
  );
}
