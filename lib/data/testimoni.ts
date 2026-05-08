// ============================================================
// PAHAWANG WISATA — Data Testimoni Pengunjung
// ============================================================

import { Testimoni } from "@/types";

export const testimoniList: Testimoni[] = [
  {
    id: "1",
    nama: "Rizky Pratama",
    asal: "Jakarta Selatan",
    avatar: "/images/avatar-1.jpg",
    rating: 5,
    komentar:
      "Ini bukan pertama kali saya ke Pahawang, tapi tetap saja selalu terkagum-kagum. Air lautnya benar-benar jernih seperti kaca! Pelayanan guide-nya juga sangat profesional dan ramah. Highly recommended banget!",
    tanggal: "2025-10-15",
    paket: "Open Trip Premium",
    foto: "/images/review-1.jpg",
  },
  {
    id: "2",
    nama: "Sari Dewi Rahayu",
    asal: "Bandung",
    avatar: "/images/avatar-2.jpg",
    rating: 5,
    komentar:
      "Paket 2D1N-nya luar biasa! BBQ seafood di tepi pantai dengan bintang di atas kepala — pengalaman yang tidak akan terlupakan seumur hidup. Terumbu karangnya juga masih sangat terjaga. Tim fotografernya keren, foto-fotonya instagramable semua!",
    tanggal: "2025-11-02",
    paket: "Paket Menginap 2D1N",
    foto: "/images/review-2.jpg",
  },
  {
    id: "3",
    nama: "Ahmad Fauzi",
    asal: "Yogyakarta",
    avatar: "/images/avatar-3.jpg",
    rating: 5,
    komentar:
      "Gosong Sekopong benar-benar epic! Foto di tengah laut dengan pasir putih — kelihatan seperti di Maladewa. Pemandunya tahu persis kapan waktu terbaik untuk ke sana. Worth every rupiah!",
    tanggal: "2025-11-18",
    paket: "Open Trip Basic",
  },
  {
    id: "4",
    nama: "Maya Putri Anggraini",
    asal: "Surabaya",
    avatar: "/images/avatar-4.jpg",
    rating: 5,
    komentar:
      "Private trip buat anniversary kami jadi momen terbaik dalam hidup! Drone footage-nya keren banget, udah kayak film dokumenter. Pelayanannya beneran VIP, semua kebutuhan dipenuhi. Makasih banyak tim Pahawang Wisata!",
    tanggal: "2025-12-01",
    paket: "Private Trip Exclusive",
    foto: "/images/review-4.jpg",
  },
  {
    id: "5",
    nama: "Budi Santoso",
    asal: "Medan",
    avatar: "/images/avatar-5.jpg",
    rating: 4,
    komentar:
      "Snorkeling di Pahawang adalah pengalaman pertama saya dan langsung jatuh cinta! Ikannya banyak banget dan berani dideketin. Guide-nya sabar dan membantu banget untuk yang belum bisa berenang. Pasti balik lagi!",
    tanggal: "2025-12-10",
    paket: "Open Trip Basic",
  },
  {
    id: "6",
    nama: "Dina Amalia",
    asal: "Makassar",
    avatar: "/images/avatar-6.jpg",
    rating: 5,
    komentar:
      "Sunset di Pahawang tidak ada duanya! Warna langitnya dramatis banget. Trip premiumnya sangat worth it — 5 spot snorkeling, foto underwater yang bagus-bagus, dan makan siang yang enak. Recommended banget buat honeymooners!",
    tanggal: "2025-12-22",
    paket: "Open Trip Premium",
    foto: "/images/review-6.jpg",
  },
];

export function getFeaturedTestimoni(limit = 4): Testimoni[] {
  return testimoniList
    .filter((t) => t.rating >= 4.5 || t.rating === 5)
    .slice(0, limit);
}