export default function VideoSection() {
  return (
    <section className="py-20 sm:py-28 bg-stone-900 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 tracking-wide uppercase">
              <span className="h-px w-8 bg-gold-500" />
              Video Produksi
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Lihat Bagaimana{" "}
              <span className="text-gold-400">Rakik Premium</span>{" "}
              Kami Dibuat
            </h2>
            <p className="text-stone-300 leading-relaxed">
              Dari pemilihan singkong terbaik hingga proses penggorengan yang sempurna, 
              saksikan sendiri dedikasi kami dalam menciptakan setiap kemasan Rakik Klarisa. 
              Kualitas adalah prioritas utama kami.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/20">
                  <svg className="h-5 w-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Higienis</div>
                  <div className="text-stone-400 text-xs">Standar kebersihan tinggi</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/20">
                  <svg className="h-5 w-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Berkualitas</div>
                  <div className="text-stone-400 text-xs">Bahan baku premium</div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40 group cursor-pointer">
              <img
                src="/images/production-kitchen.jpg"
                alt="Video proses produksi"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gold-500/90 group-hover:bg-gold-500 group-hover:scale-110 transition-all duration-300 shadow-2xl shadow-gold-500/30">
                  <svg className="h-7 w-7 sm:h-9 sm:w-9 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5.14v14l11-7-11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-center text-stone-400 text-sm mt-4">
              Klik untuk menonton proses produksi kami
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
