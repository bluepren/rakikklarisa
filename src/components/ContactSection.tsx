import { businessInfo, businessLinks } from "../data/business";

const contactItems = [
  {
    label: "Nomor WhatsApp",
    value: businessInfo.whatsappDisplay,
    href: `${businessLinks.whatsapp}?text=${encodeURIComponent(
      "Halo Rakik Klarisa, saya ingin bertanya tentang produk."
    )}`,
  },
  {
    label: "Alamat Usaha",
    value: businessInfo.address,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      businessInfo.mapQuery
    )}`,
  },
  {
    label: "Email Bisnis",
    value: businessInfo.email,
    href: businessLinks.email,
  },
  {
    label: "Jam Operasional",
    value: `${businessInfo.hours}. ${businessInfo.sundayHours}.`,
    href: `${businessLinks.whatsapp}?text=${encodeURIComponent(
      "Halo Rakik Klarisa, saya ingin konfirmasi jam operasional."
    )}`,
  },
];

const socialItems = [
  { label: "Instagram", value: businessInfo.instagram, href: businessLinks.instagram },
  { label: "TikTok", value: businessInfo.tiktok, href: businessLinks.tiktok },
  { label: "Facebook", value: businessInfo.facebook, href: businessLinks.facebook },
];

const marketplaceItems = [
  { label: "Shopee", value: businessInfo.shopee, href: businessLinks.shopee },
  { label: "Tokopedia", value: businessInfo.tokopedia, href: businessLinks.tokopedia },
];

export default function ContactSection() {
  return (
    <section id="kontak" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-start">
          <div className="space-y-7">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 tracking-wide uppercase">
                <span className="h-px w-8 bg-gold-400" />
                Lokasi & Kontak
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-800 leading-tight">
                Kunjungi dan Pesan Langsung ke{" "}
                <span className="text-gold-600">Rakik Klarisa</span>
              </h2>
              <p className="text-stone-500 leading-relaxed">
                Hubungi kami untuk pemesanan harian, reseller, hampers, dan kebutuhan acara.
                Semua pesanan online dapat diproses cepat melalui WhatsApp.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group rounded-2xl border border-stone-100 bg-premium-light p-5 transition-all duration-300 hover:border-gold-200 hover:shadow-lg hover:shadow-gold-500/5"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-stone-700 group-hover:text-stone-900">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-stone-100 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-stone-800">Instagram / TikTok / Facebook</h3>
                <div className="mt-4 space-y-3">
                  {socialItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-4 text-sm text-stone-600 hover:text-gold-700 transition-colors"
                    >
                      <span>{item.label}</span>
                      <span className="font-semibold">{item.value}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-stone-100 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-stone-800">Marketplace</h3>
                <div className="mt-4 space-y-3">
                  {marketplaceItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-4 text-sm text-stone-600 hover:text-gold-700 transition-colors"
                    >
                      <span>{item.label}</span>
                      <span className="font-semibold text-right">{item.value}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`${businessLinks.whatsapp}?text=${encodeURIComponent(
                  "Halo Rakik Klarisa, saya ingin pesan rakik premium."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition-all hover:bg-green-700"
              >
                Chat WhatsApp
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  businessInfo.mapQuery
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-stone-200 px-6 py-3.5 text-sm font-semibold text-stone-700 transition-all hover:border-gold-300 hover:bg-gold-50 hover:text-gold-700"
              >
                Buka di Google Maps
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-stone-100 bg-premium-light shadow-xl shadow-gold-500/5">
            <iframe
              title="Peta lokasi Rakik Klarisa"
              src={businessLinks.mapEmbed}
              className="h-[420px] w-full border-0 sm:h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="border-t border-stone-100 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                Alamat Usaha
              </p>
              <p className="mt-2 text-sm font-medium text-stone-700">
                {businessInfo.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}