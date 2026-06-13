// ============================================================
// PAHAWANG WISATA — DATA DESTINASI
// ============================================================

import { Destinasi } from "@/types";

/* ============================================================
   DESTINASI LIST
============================================================ */

export const destinasiList: Destinasi[] = [
  {
    id: "1",

    slug: "pulau-pahawang-besar",

    nama: "Pulau Pahawang Besar",

    deskripsi:
      "Surga tersembunyi di Teluk Lampung dengan air kristal dan terumbu karang yang memukau.",

    deskripsiPanjang: `
Pulau Pahawang Besar adalah destinasi utama yang menawarkan pengalaman wisata bahari tak terlupakan.

Dengan luas sekitar 1.084 hektar, pulau ini menyimpan kekayaan alam bawah laut yang luar biasa — terumbu karang beraneka warna, ikan tropis, dan ekosistem mangrove yang masih terjaga.

Air laut yang jernih dengan visibilitas hingga 10 meter menjadikan Pahawang Besar surga bagi para penyelam dan penggemar snorkeling.

Pantai berpasir putih dengan pohon kelapa berjajar indah menjadi latar sempurna untuk bersantai dan menikmati keindahan alam Lampung.
`,

    gambar: "/images/pahawang-besar.jpg",

    gambarGaleri: [
      "/images/pahawang-besar-1.jpg",
      "/images/pahawang-besar-2.jpg",
      "/images/pahawang-besar-3.jpg",
      "/images/pahawang-besar-4.jpg",
    ],

    kategori: "snorkeling",

    rating: 4.9,

    jumlahReview: 2847,

    lokasi: "Padang Cermin, Pesawaran, Lampung",

    koordinat: {
      lat: -5.6234,
      lng: 105.2156,
    },

    hargaTiket: 25000,

    waktuOperasional: "07:00 - 17:00 WIB",

    fasilitas: [
      "Toilet & Kamar Mandi",
      "Warung Makan",
      "Penginapan",
      "Penyewaan Alat Snorkel",
      "Parkir Kapal",
      "WiFi Area",
    ],

    highlight: [
      "Air laut kristal dengan visibilitas 10m",
      "Terumbu karang indah",
      "Pantai berpasir putih sepanjang 2km",
      "Spot sunset terbaik di Lampung",
    ],

    tips: [
      "Datang pagi hari untuk mendapat kondisi air terbaik",
      "Bawa sunscreen reef-safe agar ekosistem terjaga",
      "Musim terbaik: April - Oktober",
      "Bawa uang tunai karena sinyal terbatas",
    ],

    isFeatured: true,
  },

  // ========================================================

  {
    id: "2",

    slug: "pulau-pahawang-kecil",

    nama: "Pulau Pahawang Kecil",

    deskripsi:
      "Pulau mungil eksotis dengan laguna tersembunyi dan pasir putih yang memesona.",

    deskripsiPanjang: `
Pulau Pahawang Kecil menawarkan ketenangan dan keindahan alam yang lebih intim dibanding saudaranya.

Dikelilingi perairan dangkal berwarna toska, pulau ini memiliki laguna tersembunyi yang hanya bisa dicapai saat air surut.

Spot snorkeling di sekitar pulau ini terkenal dengan kelimpahan ikan Napoleon, penyu hijau, dan berbagai jenis terumbu karang keras maupun lunak.

Suasana yang lebih sepi menjadikannya pilihan sempurna bagi mereka yang mencari ketenangan jauh dari keramaian.
`,

    gambar: "/images/pahawang-kecil.jpg",

    gambarGaleri: [
      "/images/pahawang-kecil-1.jpg",
      "/images/pahawang-kecil-2.jpg",
      "/images/pahawang-kecil-3.jpg",
      "/images/pahawang-kecil-4.jpg",
    ],

    kategori: "snorkeling",

    rating: 4.8,

    jumlahReview: 1523,

    lokasi: "Padang Cermin, Pesawaran, Lampung",

    koordinat: {
      lat: -5.6312,
      lng: 105.2089,
    },

    hargaTiket: 20000,

    waktuOperasional: "07:00 - 16:00 WIB",

    fasilitas: [
      "Toilet",
      "Warung Makan",
      "Penyewaan Alat Snorkel",
      "Gazebo",
    ],

    highlight: [
      "Laguna tersembunyi eksklusif",
      "Penyu hijau liar",
      "Lebih sepi dan tenang",
      "Air dangkal berwarna toska",
    ],

    tips: [
      "Kunjungi saat air surut untuk laguna tersembunyi",
      "Bawa makanan sendiri karena warung terbatas",
      "Cocok untuk foto underwater",
    ],

    isFeatured: true,
  },

  // ========================================================

  {
    id: "3",

    slug: "tanjung-putus",

    nama: "Tanjung Putus",

    deskripsi:
      "Semenanjung magis yang terputus saat air pasang dan menciptakan fenomena alam menakjubkan.",

    deskripsiPanjang: `
Tanjung Putus adalah fenomena alam unik yang wajib dikunjungi.

Saat air surut, sebuah jalan pasir putih memanjang muncul menghubungkan dua daratan dan menciptakan pemandangan yang sangat indah.

Saat air pasang, jalur ini tenggelam dan menciptakan efek “tanjung yang terputus”.

Area ini juga dikenal sebagai salah satu spot diving terbaik di Pahawang dengan dinding karang vertikal yang dihuni aneka biota laut langka.
`,

    gambar: "/images/tanjung-putus.jpg",

    gambarGaleri: [
      "/images/tanjung-putus-1.jpg",
      "/images/tanjung-putus-2.jpg",
      "/images/tanjung-putus-3.jpg",
      "/images/tanjung-putus-4.jpg",
    ],

    kategori: "diving",

    rating: 4.7,

    jumlahReview: 987,

    lokasi: "Pesawaran, Lampung",

    koordinat: {
      lat: -5.6156,
      lng: 105.2234,
    },

    hargaTiket: 30000,

    waktuOperasional: "06:00 - 17:00 WIB",

    fasilitas: [
      "Gazebo",
      "Warung Ringan",
      "Pemandu Dive",
    ],

    highlight: [
      "Fenomena pasir timbul unik",
      "Wall diving spektakuler",
      "Kuda laut pygmy",
      "Sunset panorama 360°",
    ],

    tips: [
      "Cek jadwal pasang-surut sebelum berangkat",
      "Datang jam 06.00 untuk foto terbaik",
      "Wajib diving certification untuk wall dive",
    ],

    isFeatured: true,
  },
];

/* ============================================================
   GET DESTINASI BY SLUG
============================================================ */

export function getDestinasiBySlug(
  slug: string
): Destinasi | undefined {
  return destinasiList.find(
    (item) =>
      item.slug.trim().toLowerCase() ===
      slug.trim().toLowerCase()
  );
}
/* ============================================================
   FEATURED DESTINASI
============================================================ */

export function getFeaturedDestinasi(): Destinasi[] {
  return destinasiList.filter(
    (item) => item.isFeatured
  );
}

/* ============================================================
   DESTINASI HIGHLIGHT
============================================================ */

export function getDestinasiHighlight(): Destinasi[] {
  return destinasiList.filter(
    (item) => item.isFeatured
  );
}

/* ============================================================
   FILTER KATEGORI
============================================================ */

export function getDestinasiByKategori(
  kategori: string
): Destinasi[] {
  if (
    kategori === "all" ||
    kategori === "semua"
  ) {
    return destinasiList;
  }

  return destinasiList.filter(
    (item) => item.kategori === kategori
  );
}