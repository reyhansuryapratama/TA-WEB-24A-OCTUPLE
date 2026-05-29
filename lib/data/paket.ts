// ============================================================
// PAHAWANG WISATA — Data Paket Wisata
// ============================================================

import { PaketWisata } from "@/types";

export const paketList: PaketWisata[] = [
  {
    id: "open-trip-basic",
    nama: "Open Trip Basic",
    deskripsi:
      "Paket terjangkau untuk menjelajahi keindahan Pahawang bersama traveler lainnya.",

    harga: 175000,
    hargaCoret: 225000,

    durasi: "1 Hari (07:00 - 17:00)",
    peserta: "Min. 10 orang",

    include: [
      "Transportasi kapal PP dari Dermaga Ketapang",
      "Snorkeling di 3 spot terbaik",
      "Peralatan snorkeling (masker, fin, life jacket)",
      "Makan siang 1x",
      "Dokumentasi foto",
      "Guide lokal",
      "Tiket masuk kawasan",
    ],

    exclude: [
      "Transportasi menuju dermaga",
      "Penginapan",
      "Makan malam",
      "Oleh-oleh",
      "Asuransi perjalanan",
    ],

    fasilitas: [
      "Kapal Motor",
      "Life Jacket",
      "Snorkel Set",
      "Makan Siang",
    ],

    gambar: "/images/paket-basic.jpg",

    badge: "HEMAT",

    isPopuler: false,
    isRecommended: false,

    jadwal: "Setiap Sabtu & Minggu",

    meetingPoint: "Dermaga Ketapang, Bandar Lampung",

    minPeserta: 10,
    maxPeserta: 25,
  },

  {
    id: "open-trip-premium",

    nama: "Open Trip Premium",

    deskripsi:
      "Pengalaman wisata bahari lengkap dengan fasilitas premium dan dokumentasi profesional.",

    harga: 325000,
    hargaCoret: 425000,

    durasi: "1 Hari (06:30 - 18:00)",

    peserta: "Min. 8 orang",

    include: [
      "Transportasi kapal boat premium PP",
      "Snorkeling di 5 spot eksklusif",
      "Kunjungan Gosong Sekopong",
      "Peralatan snorkeling premium",
      "Makan siang & snack",
      "Fotografer underwater",
      "Hasil foto editing",
      "Guide bersertifikat",
      "Asuransi perjalanan",
    ],

    exclude: [
      "Transportasi menuju dermaga",
      "Penginapan",
      "Oleh-oleh",
    ],

    fasilitas: [
      "Kapal Boat Premium",
      "Underwater Camera",
      "Snorkel Premium",
      "Makan + Snack",
      "Asuransi",
    ],

    gambar: "/images/paket-premium.jpg",

    badge: "TERPOPULER",

    isPopuler: true,
    isRecommended: true,

    jadwal: "Setiap hari",

    meetingPoint: "Dermaga Ketapang, Bandar Lampung",

    minPeserta: 8,
    maxPeserta: 20,
  },

  {
    id: "private-trip",

    nama: "Private Trip Exclusive",

    deskripsi:
      "Trip privat eksklusif dengan kapal sendiri dan layanan VIP.",

    harga: 1200000,

    durasi: "Custom (maks. 12 jam)",

    peserta: "2 - 15 orang",

    include: [
      "Kapal eksklusif",
      "Akses semua destinasi",
      "Snorkeling & diving",
      "Makan siang + snack",
      "Drone footage",
      "Fotografer profesional",
      "Butler service",
    ],

    exclude: [
      "Transportasi menuju dermaga",
      "Penginapan",
    ],

    fasilitas: [
      "Kapal Eksklusif",
      "Drone",
      "Full Photography",
      "Butler Service",
    ],

    gambar: "/images/paket-private.jpg",

    badge: "EKSKLUSIF",

    isPopuler: false,
    isRecommended: false,

    jadwal: "Setiap hari",

    meetingPoint: "Custom",

    minPeserta: 2,
    maxPeserta: 15,
  },

  {
    id: "menginap-2d1n",

    nama: "Paket Menginap 2D1N",

    deskripsi:
      "Nikmati keajaiban Pahawang semalam penuh dengan sunset dan sunrise.",

    harga: 550000,
    hargaCoret: 750000,

    durasi: "2 Hari 1 Malam",

    peserta: "Min. 6 orang",

    include: [
      "Transportasi kapal PP",
      "Penginapan cottage",
      "Snorkeling spot utama",
      "Makan 3x",
      "BBQ seafood",
      "Sunset boat tour",
      "Sunrise photography",
    ],

    exclude: [
      "Transportasi menuju dermaga",
      "Oleh-oleh",
    ],

    fasilitas: [
      "Penginapan",
      "BBQ Seafood",
      "Sunset Tour",
      "Sunrise",
      "Snorkeling",
    ],

    gambar: "/images/paket-menginap.jpg",

    badge: "BEST VALUE",

    isPopuler: true,
    isRecommended: false,

    jadwal: "Jumat - Minggu",

    meetingPoint: "Dermaga Ketapang, Bandar Lampung",

    minPeserta: 6,
    maxPeserta: 20,
  },
];

// ============================================================
// HELPERS
// ============================================================

export function getPaketById(
  id: string
): PaketWisata | undefined {
  return paketList.find((p) => p.id === id);
}

// DIPAKAI DI COMPONENT
export function getPaketPopular(): PaketWisata[] {
  return paketList.filter((p) => p.isPopuler);
}

// OPTIONAL
export function getRecommendedPaket(): PaketWisata[] {
  return paketList.filter((p) => p.isRecommended);
}