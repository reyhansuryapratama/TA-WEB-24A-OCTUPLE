// ============================================================
// PAHAWANG WISATA — Data Testimoni Pengunjung
// ============================================================

import { Testimoni } from "@/types";

export const testimoniData: Testimoni[] = [
  {
    id: "1",
    nama: "Rizky Pratama",
    asal: "Bengkulu",
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
      "Paket 2D1N-nya luar biasa! BBQ seafood di tepi pantai dengan bintang di atas kepala — pengalaman yang tidak akan terlupakan seumur hidup.",
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
      "Gosong Sekopong benar-benar epic! Foto di tengah laut dengan pasir putih kelihatan seperti di Maladewa.",
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
      "Private trip buat anniversary kami jadi momen terbaik dalam hidup! Drone footage-nya keren banget.",
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
      "Snorkeling di Pahawang adalah pengalaman pertama saya dan langsung jatuh cinta!",
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
      "Sunset di Pahawang tidak ada duanya! Trip premiumnya sangat worth it.",
    tanggal: "2025-12-22",
    paket: "Open Trip Premium",
    foto: "/images/review-6.jpg",
  },
];

// ============================================================
// Helper Functions
// ============================================================

export function getFeaturedTestimoni(
  limit: number = 4
): Testimoni[] {
  return testimoniData
    .filter((t) => t.rating >= 4)
    .slice(0, limit);
}

export function getTestimoniById(
  id: string
): Testimoni | undefined {
  return testimoniData.find((t) => t.id === id);
}