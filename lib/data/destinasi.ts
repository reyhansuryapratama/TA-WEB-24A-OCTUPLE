// ============================================================
// PAHAWANG WISATA — Data Destinasi
// ============================================================

import { Destinasi } from "@/types";

export const destinasiList: Destinasi[] = [
  {
    id: "1",
    slug: "pulau-pahawang-besar",
    nama: "Pulau Pahawang Besar",
    deskripsi:
      "Surga tersembunyi di Teluk Lampung dengan air kristal dan terumbu karang yang memukau.",
    deskripsiPanjang: `Pulau Pahawang Besar adalah destinasi utama yang menawarkan pengalaman wisata bahari tak terlupakan. 
    Dengan luas sekitar 1.084 hektar, pulau ini menyimpan kekayaan alam bawah laut yang luar biasa — 
    terumbu karang beraneka warna, ikan tropis, dan ekosistem mangrove yang masih terjaga.
    
    Air laut yang jernih dengan visibilitas hingga 10 meter menjadikan Pahawang Besar surga bagi para penyelam 
    dan penggemar snorkeling. Pantai berpasir putih dengan pohon kelapa berjajar indah menjadi latar sempurna 
    untuk bersantai dan menikmati keindahan alam Lampung.`,
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
    fasilitas: [
      "Toilet & Kamar Mandi",
      "Warung Makan",
      "Penginapan",
      "Penyewaan Alat Snorkel",
      "Parkir Kapal",
      "WiFi Area",
    ],
    lokasi: "Padang Cermin, Pesawaran, Lampung",
    koordinat: { lat: -5.6234, lng: 105.2156 },
    hargaTiket: 25000,
    waktuOperasional: "07:00 - 17:00 WIB",
    highlight: [
      "Air laut kristal dengan visibilitas 10m",
      "Terumbu karang UNESCO-listed",
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
  {
    id: "2",
    slug: "pulau-pahawang-kecil",
    nama: "Pulau Pahawang Kecil",
    deskripsi:
      "Pulau mungil eksotis dengan laguna tersembunyi dan pasir putih yang memesona.",
    deskripsiPanjang: `Pulau Pahawang Kecil menawarkan ketenangan dan keindahan alam yang lebih intim dibanding 
    saudaranya. Dikelilingi perairan dangkal berwarna toska, pulau ini memiliki laguna tersembunyi 
    yang hanya bisa dicapai saat air surut — sebuah pengalaman eksklusif yang tak terlupakan.
    
    Spot snorkeling di sekitar pulau ini terkenal dengan kelimpahan ikan Napoleon, penyu hijau, 
    dan berbagai jenis terumbu karang keras maupun lunak. Suasana yang lebih sepi menjadikannya 
    pilihan sempurna bagi mereka yang mencari ketenangan jauh dari keramaian.`,
    gambar: "/images/pahawang-kecil.jpg",
    gambarGaleri: [
      "/images/pahawang-kecil-1.jpg",
      "/images/pahawang-kecil-2.jpg",
    ],
    kategori: "snorkeling",
    rating: 4.8,
    jumlahReview: 1523,
    fasilitas: ["Toilet", "Warung Makan", "Penyewaan Alat Snorkel", "Gazebo"],
    lokasi: "Padang Cermin, Pesawaran, Lampung",
    koordinat: { lat: -5.6312, lng: 105.2089 },
    hargaTiket: 20000,
    waktuOperasional: "07:00 - 16:00 WIB",
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
  {
    id: "3",
    slug: "tanjung-putus",
    nama: "Tanjung Putus",
    deskripsi:
      "Semenanjung magis yang terputus saat air pasang, menciptakan fenomena alam menakjubkan.",
    deskripsiPanjang: `Tanjung Putus adalah fenomena alam unik yang wajib dikunjungi. Saat air surut, 
    sebuah jalan pasir putih memanjang muncul menghubungkan dua daratan — menciptakan pemandangan 
    yang luar biasa indah. Namun saat air pasang, jalur ini tenggelam dan menciptakan efek "tanjung yang terputus".
    
    Area ini juga dikenal sebagai salah satu spot diving terbaik di Pahawang, dengan dinding karang 
    vertikal yang dihuni aneka biota laut langka termasuk kuda laut pygmy dan nudibranch berwarna-warni.`,
    gambar: "/images/tanjung-putus.jpg",
    gambarGaleri: ["/images/tanjung-putus-1.jpg", "/images/tanjung-putus-2.jpg"],
    kategori: "diving",
    rating: 4.7,
    jumlahReview: 987,
    fasilitas: ["Gazebo", "Warung Ringan", "Pemandu Dive"],
    lokasi: "Pesawaran, Lampung",
    koordinat: { lat: -5.6156, lng: 105.2234 },
    hargaTiket: 30000,
    waktuOperasional: "06:00 - 17:00 WIB",
    highlight: [
      "Fenomena pasir timbul unik",
      "Wall diving spektakuler",
      "Kuda laut pygmy & nudibranch",
      "Sunset panorama 360°",
    ],
    tips: [
      "Cek jadwal pasang-surut sebelum berangkat",
      "Datang jam 06.00 untuk foto terbaik",
      "Wajib diving certification untuk wall dive",
    ],
    isFeatured: true,
  },
  {
    id: "4",
    slug: "pulau-kelagian",
    nama: "Pulau Kelagian",
    deskripsi:
      "Pulau cantik dengan hutan mangrove lebat dan pantai terpencil yang masih perawan.",
    deskripsiPanjang: `Pulau Kelagian merupakan permata tersembunyi di gugusan kepulauan Pahawang. 
    Hutan mangrove yang mengelilingi pantai barat pulau ini menjadi habitat penting bagi berbagai 
    spesies burung migran dan satwa laut. Jalur kayak di antara akar-akar mangrove memberikan 
    pengalaman ekowisata yang tak tertandingi.
    
    Pantai timur Kelagian dengan pasir putih halus dan gradasi air biru-hijau menjadi favorit 
    fotografer dan konten kreator. Minim wisatawan menjadikan tempat ini sangat cocok untuk 
    retreat dan digital detox.`,
    gambar: "/images/kelagian.jpg",
    gambarGaleri: ["/images/kelagian-1.jpg", "/images/kelagian-2.jpg"],
    kategori: "mangrove",
    rating: 4.6,
    jumlahReview: 654,
    fasilitas: ["Kapal Kayak", "Pemandu Lokal", "Gazebo", "Area Camping"],
    lokasi: "Pesawaran, Lampung",
    koordinat: { lat: -5.6089, lng: 105.2312 },
    hargaTiket: 20000,
    waktuOperasional: "07:00 - 17:00 WIB",
    highlight: [
      "Hutan mangrove terlindungi",
      "Spot birdwatching kelas dunia",
      "Pantai perawan terpencil",
      "Kayak di antara mangrove",
    ],
    tips: [
      "Bawa repellent nyamuk",
      "Cocok untuk hiking ringan",
      "Sewa kayak dari operator lokal",
    ],
    isFeatured: false,
  },
  {
    id: "5",
    slug: "gosong-sekopong",
    nama: "Gosong Sekopong",
    deskripsi:
      "Hamparan pasir timbul di tengah laut yang muncul saat air surut — spot foto ikonik Pahawang.",
    deskripsiPanjang: `Gosong Sekopong adalah sebuah beting pasir putih yang muncul di tengah lautan 
    biru saat air surut. Fenomena ini menciptakan panorama yang tampak seperti "pulau mengambang" 
    di atas laut — menjadikannya salah satu spot foto paling viral di Lampung.
    
    Airnya yang dangkal dan jernih sangat cocok untuk bermain-main di air, foto lesehan di pasir putih, 
    atau sekadar bersantai menikmati angin laut. Di sekelilingnya terdapat spot snorkeling dengan 
    karang-karang muda yang mulai tumbuh.`,
    gambar: "/images/gosong-sekopong.jpg",
    gambarGaleri: ["/images/gosong-1.jpg"],
    kategori: "pantai",
    rating: 4.8,
    jumlahReview: 1876,
    fasilitas: ["Kapal Pengantar", "Pemandu"],
    lokasi: "Perairan Pahawang, Lampung",
    koordinat: { lat: -5.619, lng: 105.221 },
    hargaTiket: 15000,
    waktuOperasional: "Tergantung pasang-surut",
    highlight: [
      "Pasir timbul ikonik viral",
      "Foto 360° di tengah laut",
      "Air jernih dangkal",
      "Snorkeling karang muda",
    ],
    tips: [
      "WAJIB cek jadwal air surut",
      "Waktu terbaik: 2 jam setelah surut tertinggi",
      "Bawa payung/topi karena tidak ada naungan",
    ],
    isFeatured: true,
  },
  {
    id: "6",
    slug: "sunset-point-pahawang",
    nama: "Sunset Point Pahawang",
    deskripsi:
      "Titik terbaik untuk menyaksikan matahari terbenam dramatis di perairan Teluk Lampung.",
    deskripsiPanjang: `Sunset Point Pahawang adalah lokasi tertinggi di Pulau Pahawang Besar yang 
    menawarkan pemandangan panoramik 180° ke arah Barat. Setiap sore, langit berubah menjadi 
    kanvas alam dengan gradasi oranye, merah, dan ungu yang memukau — menciptakan momen magis 
    yang tak terlupakan bagi setiap pengunjung.
    
    Tersedia gazebo dan area duduk yang nyaman untuk menikmati golden hour. Spot ini juga 
    sempurna untuk melihat siluet kapal-kapal nelayan yang pulang ke dermaga.`,
    gambar: "/images/sunset-pahawang.jpg",
    gambarGaleri: ["/images/sunset-1.jpg", "/images/sunset-2.jpg"],
    kategori: "sunset",
    rating: 5.0,
    jumlahReview: 3201,
    fasilitas: ["Gazebo Premium", "Warung Kopi", "Area Foto"],
    lokasi: "Bukit Pahawang Besar, Lampung",
    koordinat: { lat: -5.621, lng: 105.214 },
    hargaTiket: 10000,
    waktuOperasional: "15:00 - 19:00 WIB",
    highlight: [
      "Sunset ranking #1 Lampung",
      "Panorama 180° Teluk Lampung",
      "Golden hour magis",
      "Siluet kapal nelayan",
    ],
    tips: [
      "Datang minimal 30 menit sebelum matahari terbenam",
      "Bawa kamera dengan tripod",
      "Musim kemarau: langit lebih jernih",
    ],
    isFeatured: false,
  },
];

export function getDestinasiBySlug(slug: string): Destinasi | undefined {
  return destinasiList.find((d) => d.slug === slug);
}

export function getFeaturedDestinasi(): Destinasi[] {
  return destinasiList.filter((d) => d.isFeatured);
}

export function getDestinasiByKategori(
  kategori: string
): Destinasi[] {
  if (kategori === "semua") return destinasiList;
  return destinasiList.filter((d) => d.kategori === kategori);
}