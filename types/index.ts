// ============================================================
// PAHAWANG WISATA — TypeScript Types & Interfaces
// ============================================================

export interface Destinasi {
  id: string;
  slug: string;
  nama: string;
  deskripsi: string;
  deskripsiPanjang: string;
  gambar: string;
  gambarGaleri: string[];
  kategori: KategoriDestinasi;
  rating: number;
  jumlahReview: number;
  fasilitas: string[];
  lokasi: string;
  koordinat: { lat: number; lng: number };
  hargaTiket: number;
  waktuOperasional: string;
  highlight: string[];
  tips: string[];
  isFeatured: boolean;
}

export type KategoriDestinasi =
  | "snorkeling"
  | "diving"
  | "island-hopping"
  | "pantai"
  | "mangrove"
  | "sunset";

export interface PaketWisata {
  id: string;
  nama: string;
  deskripsi: string;
  harga: number;
  hargaCoret?: number;
  durasi: string;
  peserta: string;
  include: string[];
  exclude: string[];
  fasilitas: string[];
  gambar: string;
  badge?: string;
  isPopuler: boolean;
  isRecommended: boolean;
  jadwal: string;
  meetingPoint: string;
  minPeserta: number;
  maxPeserta: number;
}

export interface Testimoni {
  id: string;
  nama: string;
  asal: string;
  avatar: string;
  rating: number;
  komentar: string;
  tanggal: string;
  paket: string;
  foto?: string;
}

export interface BookingFormData {
  nama: string;
  email: string;
  telepon: string;
  tanggal: string;
  jumlahOrang: number;
  paketId: string;
  destinasiId?: string;
  pesan?: string;
  metodePembayaran: "transfer" | "cash" | "ewallet";
}

export interface BookingResponse {
  success: boolean;
  bookingId?: string;
  message: string;
  data?: BookingFormData;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface GaleriItem {
  id: string;
  src: string;
  alt: string;
  kategori: string;
  width: number;
  height: number;
}