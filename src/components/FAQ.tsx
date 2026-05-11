import { useState } from "react";
import { faqData } from "../data/faq";
import { businessLinks } from "../data/business";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-premium-light">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 tracking-wide uppercase">
            <span className="h-px w-8 bg-gold-400" />
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-800">
            Pertanyaan yang{" "}
            <span className="text-gold-600">Sering Diajukan</span>
          </h2>
          <p className="text-stone-500">
            Temukan jawaban atas pertanyaan umum tentang produk dan layanan kami.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? "border-gold-300 shadow-lg shadow-gold-500/5"
                  : "border-stone-100 shadow-sm hover:border-stone-200"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left gap-4"
              >
                <span className="text-sm sm:text-base font-semibold text-stone-800 pr-4">
                  {item.question}
                </span>
                <div
                  className={`flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-300 ${
                    openIndex === index
                      ? "bg-gold-500 text-white rotate-45"
                      : "bg-stone-100 text-stone-500"
                  }`}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-stone-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center p-6 sm:p-8 bg-white rounded-2xl border border-stone-100 shadow-md">
          <div className="text-3xl mb-3">💬</div>
          <h3 className="text-lg font-bold text-stone-800 mb-2">
            Masih punya pertanyaan?
          </h3>
          <p className="text-sm text-stone-500 mb-4">
            Jangan ragu untuk menghubungi kami langsung via WhatsApp.
          </p>
          <a
            href={`${businessLinks.whatsapp}?text=${encodeURIComponent(
              "Halo Rakik Klarisa! Saya ingin bertanya."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-green-600/25"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Tanya via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
