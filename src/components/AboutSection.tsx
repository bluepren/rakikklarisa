export default function AboutSection() {
  return (
    <section id="tentang" className="relative py-20 sm:py-28 overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/production-kitchen.jpg"
                    alt="Proses pembuatan rakik"
                    className="w-full h-48 sm:h-56 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/rakik-balado.jpg"
                    alt="Rakik premium"
                    className="w-full h-36 sm:h-44 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/ingredients-cassava.jpg"
                    alt="Bahan berkualitas"
                    className="w-full h-36 sm:h-44 object-cover"
                  />
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-gold-50 to-gold-100 p-6 shadow-lg border border-gold-200/50">
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-gold-700">2018</div>
                    <p className="text-sm text-gold-800 font-medium">Tahun Berdiri</p>
                    <p className="text-xs text-gold-600">Melayani sejak 7 tahun</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl" />
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 tracking-wide uppercase">
                <span className="h-px w-8 bg-gold-400" />
                Cerita Kami
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-800 leading-tight">
                Dari Dapur Rumah ke{" "}
                <span className="text-gold-600">Meja Premium</span>
              </h2>
            </div>

            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                Rakik Klarisa lahir dari kecintaan kami terhadap kuliner tradisional Indonesia. 
                Berawal dari hobi membuat camilan untuk keluarga di dapur kecil rumah kami pada tahun 2018, 
                kini Rakik Klarisa telah menjadi brand camilan premium yang dipercaya ribuan pelanggan.
              </p>
              <p>
                Kami percaya bahwa camilan tradisional bisa tampil elegan dan bersaing di pasar modern. 
                Setiap kemasan Rakik Klarisa dibuat dengan standar kualitas tinggi — dari pemilihan singkong 
                terbaik, proses produksi higienis, hingga pengemasan premium yang menjadikannya layak 
                untuk hampers dan oleh-oleh istimewa.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                {
                  icon: "🌿",
                  title: "Bahan Alami",
                  desc: "Tanpa pengawet & pewarna buatan",
                },
                {
                  icon: "🧹",
                  title: "Higienis",
                  desc: "Diproses dengan standar kebersihan tinggi",
                },
                {
                  icon: "📦",
                  title: "Premium",
                  desc: "Kemasan elegan & kualitas terbaik",
                },
                {
                  icon: "💝",
                  title: "Sepenuh Hati",
                  desc: "Dibuat dengan resep turun-temurun",
                },
              ].map((val) => (
                <div key={val.title} className="flex items-start gap-3">
                  <span className="text-2xl">{val.icon}</span>
                  <div>
                    <h4 className="font-semibold text-stone-800 text-sm">{val.title}</h4>
                    <p className="text-xs text-stone-500">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#produk"
              className="inline-flex items-center gap-2 text-gold-600 font-semibold hover:text-gold-700 transition-colors group"
            >
              Lihat Produk Kami
              <svg
                className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
