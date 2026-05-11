import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 tracking-wide uppercase">
            <span className="h-px w-8 bg-gold-400" />
            Testimoni
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-800">
            Cerita dari{" "}
            <span className="text-gold-600">Pelanggan Setia</span>
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            Kepuasan Anda adalah motivasi kami untuk terus memberikan yang terbaik.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              className="bg-premium-light rounded-2xl p-6 sm:p-8 border border-stone-100 hover:shadow-xl hover:shadow-gold-500/5 hover:border-gold-200/50 transition-all duration-500 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`h-4 w-4 ${i < t.rating ? "text-gold-400" : "text-stone-200"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-stone-600 text-sm leading-relaxed flex-1 mb-6">
                "{t.content}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold-100 to-gold-300 text-sm font-bold text-gold-800 ring-2 ring-gold-100">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-stone-800 text-sm">{t.name}</div>
                  <div className="text-xs text-stone-500">{t.role}</div>
                </div>
              </div>

              <div className="mt-2 text-xs text-gold-600 font-medium">
                Membeli: {t.product}
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-gold-50 border border-gold-200/50">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-gold-700">4.9</span>
              <span className="text-gold-400 text-lg">★</span>
            </div>
            <div className="h-8 w-px bg-gold-200" />
            <span className="text-sm font-medium text-gold-800">Dari 200+ Ulasan</span>
          </div>
        </div>
      </div>
    </section>
  );
}
