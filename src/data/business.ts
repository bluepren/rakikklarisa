export const businessInfo = {
  name: "Rakik Klarisa",
  tagline: "Cita Rasa Premium Dalam Setiap Gigitan",
  whatsappDisplay: "0812-3456-7890",
  whatsappNumber: "6281234567890",
  address: "Jl. Melati No. 45, Lowokwaru, Kota Malang, Jawa Timur 65141",
  mapQuery: "Jl. Melati No. 45 Lowokwaru Malang Jawa Timur",
  instagram: "@rakikklarisa",
  tiktok: "@rakikklarisa",
  facebook: "Rakik Klarisa Official",
  shopee: "Rakik Klarisa Official",
  tokopedia: "Rakik Klarisa",
  email: "halo@rakikklarisa.com",
  hours: "Senin - Sabtu, 08.00 - 17.00 WIB",
  sundayHours: "Minggu khusus pre-order via WhatsApp",
};

export const businessLinks = {
  whatsapp: `https://wa.me/${businessInfo.whatsappNumber}`,
  instagram: "https://instagram.com/rakikklarisa",
  tiktok: "https://www.tiktok.com/@rakikklarisa",
  facebook: "https://facebook.com/rakikklarisa",
  shopee: "https://shopee.co.id/rakikklarisa",
  tokopedia: "https://www.tokopedia.com/rakikklarisa",
  email: `mailto:${businessInfo.email}`,
  mapEmbed: `https://www.google.com/maps?q=${encodeURIComponent(
    businessInfo.mapQuery
  )}&output=embed`,
};