export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-premium-dark via-stone-900 to-stone-800">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
          style={{ backgroundImage: "url('/images/production-kitchen.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-premium-dark/90 via-transparent to-premium-dark/40" />
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-gold-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-medium text-gold-300 tracking-wide uppercase">
                  Premium Sejak 2018
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Cita Rasa{" "}
                <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
                  Premium
                </span>
                <br />
                Dalam Setiap{" "}
                <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
                  Gigitan
                </span>
              </h1>

              <p className="text-base sm:text-lg text-stone-300 max-w-lg leading-relaxed">
                Rakik singkong pilihan dengan resep turun-temurun, diolah secara higienis 
                menghadirkan pengalaman camilan tradisional yang elegan dan tak terlupakan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#produk"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-xl hover:from-gold-600 hover:to-gold-700 transition-all duration-300 shadow-xl shadow-gold-500/25 hover:shadow-2xl hover:shadow-gold-500/30 text-sm sm:text-base"
              >
                Jelajahi Produk
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
              <a
                href="#tentang"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
              >
                Cerita Kami
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 sm:gap-12 pt-4">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">8+</div>
                <div className="text-xs sm:text-sm text-stone-400">Varian Produk</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">5000+</div>
                <div className="text-xs sm:text-sm text-stone-400">Pelanggan Puas</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">4.9</div>
                <div className="text-xs sm:text-sm text-stone-400 flex items-center gap-1">
                  Rating
                  <span className="text-gold-400">★</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image - Rakik Chips Display */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold-400/30 via-gold-500/20 to-transparent blur-sm" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
                <img
                  src="/images/rakik-hero.jpg"
                  alt="Rakik Klarisa Premium - Keripik Singkong Renyah"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-premium-dark/40 to-transparent" />
                
                {/* Floating Product Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-100">
                      <span className="text-lg">🥨</span>
                    </div>
                    <div>
                      <div className="text-xs text-stone-500 font-medium">Best Seller</div>
                      <div className="text-sm font-bold text-stone-800">Original</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl shadow-black/20">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-stone-500 font-medium">100%</div>
                    <div className="text-sm font-bold text-stone-800">Halal MUI</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl shadow-black/20">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-50">
                    <span className="text-xl">⭐</span>
                  </div>
                  <div>
                    <div className="text-xs text-stone-500 font-medium">Rating</div>
                    <div className="text-sm font-bold text-stone-800">4.9 / 5.0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a
          href="#tentang"
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </a>
      </div>
    </section>
  );
}
