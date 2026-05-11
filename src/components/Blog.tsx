import { blogPosts } from "../data/blog";

export default function Blog() {
  return (
    <section id="blog" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 tracking-wide uppercase">
            <span className="h-px w-8 bg-gold-400" />
            Artikel & Cerita
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-800">
            Inspirasi dari{" "}
            <span className="text-gold-600">Dapur Kami</span>
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            Baca artikel menarik seputar kuliner, tips, dan cerita di balik Rakik Klarisa.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="group bg-premium-light rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-stone-100 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gold-700 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-stone-400 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime} baca</span>
                </div>
                <h3 className="text-lg font-bold text-stone-800 mb-2 group-hover:text-gold-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-stone-500 flex-1 line-clamp-2">
                  {post.excerpt}
                </p>
                <button className="mt-4 inline-flex items-center gap-2 text-gold-600 font-semibold text-sm hover:text-gold-700 transition-colors group/btn">
                  Baca Selengkapnya
                  <svg
                    className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
