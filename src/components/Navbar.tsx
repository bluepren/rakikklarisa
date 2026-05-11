import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalItems, openCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#beranda" },
    { name: "Tentang", href: "#tentang" },
    { name: "Produk", href: "#produk" },
    { name: "Galeri", href: "#galeri" },
    { name: "Blog", href: "#blog" },
    { name: "Kontak", href: "#kontak" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-gold-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">
          {/* Logo */}
          <a
            href="#beranda"
            className="flex items-center gap-3 group"
          >
            <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 shadow-lg shadow-gold-500/30 group-hover:shadow-gold-500/50 transition-all duration-300">
              <span className="text-xl sm:text-2xl">🥨</span>
            </div>
            <div className="flex flex-col">
              <span
                className={`text-base sm:text-lg font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled ? "text-premium-dark" : "text-white"
                }`}
              >
                Rakik Klarisa
              </span>
              <span
                className={`text-[10px] sm:text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                  isScrolled ? "text-gold-600" : "text-gold-300"
                }`}
              >
                Premium
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isScrolled
                    ? "text-stone-600 hover:text-gold-700 hover:bg-gold-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Cart & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Cart Button */}
            <button
              onClick={openCart}
              className={`relative p-2 sm:p-2.5 rounded-xl transition-all duration-300 ${
                isScrolled
                  ? "text-stone-600 hover:bg-gold-50 hover:text-gold-700"
                  : "text-white/90 hover:bg-white/10 hover:text-white"
              }`}
              aria-label="Keranjang belanja"
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold-500 text-[10px] font-bold text-white shadow-md shadow-gold-500/30 animate-fade-in">
                  {totalItems}
                </span>
              )}
            </button>

            {/* CTA */}
            <a
              href="#produk"
              className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                isScrolled
                  ? "bg-gold-500 text-white hover:bg-gold-600 shadow-lg shadow-gold-500/25"
                  : "bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm"
              }`}
            >
              Beli Sekarang
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 lg:hidden rounded-lg transition-colors ${
                isScrolled ? "text-stone-700 hover:bg-gold-50" : "text-white hover:bg-white/10"
              }`}
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-stone-200/50 animate-fade-in">
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-stone-600 hover:text-gold-700 hover:bg-gold-50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#produk"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 px-3 py-2.5 text-sm font-semibold text-center text-white bg-gold-500 hover:bg-gold-600 rounded-xl transition-colors sm:hidden"
              >
                Beli Sekarang
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
