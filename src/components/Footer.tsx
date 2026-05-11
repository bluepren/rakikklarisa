import { businessInfo, businessLinks } from "../data/business";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-5">
            <a href="#beranda" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 shadow-lg shadow-gold-500/20">
                <span className="text-2xl">🥨</span>
              </div>
              <div>
                <span className="text-lg font-bold text-white">Rakik Klarisa</span>
                <span className="block text-xs tracking-[0.2em] uppercase text-gold-400">Premium</span>
              </div>
            </a>
            <p className="text-sm text-stone-400 leading-relaxed">
              Camilan tradisional premium dengan cita rasa autentik. 
              Dibuat dari bahan pilihan, diproses secara higienis, 
              dikemas dengan elegan.
            </p>
            <div className="flex gap-3">
              {[
                { icon: "IG", label: "Instagram", href: businessLinks.instagram },
                { icon: "FB", label: "Facebook", href: businessLinks.facebook },
                { icon: "TT", label: "TikTok", href: businessLinks.tiktok },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-800 hover:bg-gold-600 transition-all duration-300 text-lg"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Menu Cepat</h4>
            <ul className="space-y-3">
              {[
                { name: "Beranda", href: "#beranda" },
                { name: "Tentang Kami", href: "#tentang" },
                { name: "Produk", href: "#produk" },
                { name: "Galeri", href: "#galeri" },
                { name: "Blog", href: "#blog" },
                { name: "Kontak", href: "#kontak" },
                { name: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-gold-400 transition-colors flex items-center gap-2"
                  >
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-5">Produk</h4>
            <ul className="space-y-3">
              {[
                "Rakik Original",
                "Rakik Pedas Nusantara",
                "Rakik Balado",
                "Rakik Keju Premium",
                "Rakik Jagung Manis",
                "Paket Bundling",
              ].map((product) => (
                <li key={product}>
                  <a
                    href="#produk"
                    className="text-sm text-stone-400 hover:text-gold-400 transition-colors flex items-center gap-2"
                  >
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-lg">📍</span>
                <span className="text-stone-400">
                  {businessInfo.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">📱</span>
                <a
                  href={businessLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-gold-400 transition-colors"
                >
                  {businessInfo.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">📧</span>
                <a
                  href={businessLinks.email}
                  className="text-stone-400 hover:text-gold-400 transition-colors"
                >
                  {businessInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg">🕐</span>
                <span className="text-stone-400">
                  {businessInfo.hours}<br />
                  {businessInfo.sundayHours}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            © {currentYear} Rakik Klarisa. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-stone-500">
            <a href="#" className="hover:text-gold-400 transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-gold-400 transition-colors">
              Syarat & Ketentuan
            </a>
            <span className="flex items-center gap-1">
              Made with
              <span className="text-red-400">❤</span>
              in Malang
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
