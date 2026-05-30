import type {
  PaketWisata,
  ItineraryItem,
} from "@/types";

// ============================================================
// DATA
// ============================================================

export const paketData: PaketWisata[] = [
  {
    id: "open-trip-basic",

    nama: "Open Trip Basic",

    deskripsi:
      "Paket hemat untuk menikmati keindahan Pulau Pahawang bersama traveler lainnya.",

    harga: 175000,

    hargaCoret: 225000,

    durasi: "1 Hari",

    peserta: "Min. 10 orang",

    include: [
      "Transportasi kapal",
      "Alat snorkeling",
      "Makan siang",
      "Guide wisata",
    ],

    exclude: [
      "Transportasi ke dermaga",
      "Penginapan",
    ],

    fasilitas: [
      "Kapal wisata",
      "Life jacket",
      "Snorkeling set",
    ],

    gambar:
      "/images/paket-basic.jpg",

    badge: "HEMAT",

    popular: false,

    isRecommended: false,

    jadwal:
      "Sabtu & Minggu",

    meetingPoint:
      "Dermaga Ketapang",

    minPeserta: 10,

    maxPeserta: 25,

    itinerary: [
      {
        waktu: "07:00",
        aktivitas:
          "Meeting point di Dermaga Ketapang",

        lokasi:
          "Dermaga Ketapang",
      },

      {
        waktu: "08:30",
        aktivitas:
          "Perjalanan menuju Pulau Pahawang",

        lokasi:
          "Perairan Pahawang",
      },

      {
        waktu: "10:00",
        aktivitas:
          "Snorkeling dan eksplorasi spot terumbu karang",

        lokasi:
          "Pahawang Kecil",
      },

      {
        waktu: "12:00",
        aktivitas:
          "Makan siang dan istirahat",

        lokasi:
          "Pulau Kelagian",
      },

      {
        waktu: "15:00",
        aktivitas:
          "Kembali ke dermaga",

        lokasi:
          "Dermaga Ketapang",
      },
    ],
  },

  {
    id: "open-trip-premium",

    nama: "Open Trip Premium",

    deskripsi:
      "Paket premium dengan fasilitas lebih lengkap dan pengalaman wisata eksklusif.",

    harga: 325000,

    hargaCoret: 425000,

    durasi: "1 Hari",

    peserta: "Min. 8 orang",

    include: [
      "Boat premium",
      "Alat snorkeling premium",
      "Makan siang",
      "Fotografer",
      "Drone documentation",
    ],

    exclude: [
      "Transportasi ke dermaga",
    ],

    fasilitas: [
      "Boat premium",
      "Kamera underwater",
      "Drone",
      "Snack & drink",
    ],

    gambar:
      "/images/paket-premium.jpg",

    badge: "TERPOPULER",

    popular: true,

    isRecommended: true,

    jadwal:
      "Setiap Hari",

    meetingPoint:
      "Dermaga Ketapang",

    minPeserta: 8,

    maxPeserta: 20,

    itinerary: [
      {
        waktu: "07:00",
        aktivitas:
          "Briefing dan keberangkatan",

        lokasi:
          "Dermaga Ketapang",
      },

      {
        waktu: "09:00",
        aktivitas:
          "Snorkeling premium spot",

        lokasi:
          "Cukuh Bedil",
      },

      {
        waktu: "11:00",
        aktivitas:
          "Foto drone & underwater session",

        lokasi:
          "Pahawang Besar",
      },

      {
        waktu: "12:30",
        aktivitas:
          "Makan siang seafood",

        lokasi:
          "Pulau Kelagian",
      },

      {
        waktu: "15:30",
        aktivitas:
          "Sunset trip & kembali",

        lokasi:
          "Dermaga Ketapang",
      },
    ],
  },
];

// ============================================================
// ALIAS
// ============================================================

export const paketList =
  paketData;

// ============================================================
// HELPERS
// ============================================================

export function getPaketById(
  id: string
): PaketWisata | undefined {
  return paketData.find(
    (paket) => paket.id === id
  );
}

export function getPaketPopular(): PaketWisata[] {
  return paketData.filter(
    (paket) => paket.popular
  );
}

export function getRecommendedPaket(): PaketWisata[] {
  return paketData.filter(
    (paket) => paket.isRecommended
  );
}