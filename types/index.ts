// ============================================================
// PAHAWANG WISATA — GLOBAL TYPES
// File: src/types/index.ts
// ============================================================

import type { ReactNode } from "react";

/* ============================================================
   DESTINASI
============================================================ */

export type KategoriDestinasi =
  | "snorkeling"
  | "diving"
  | "island-hopping"
  | "pantai"
  | "mangrove"
  | "sunset"
  | "island"
  | "beach"
  | "camping";

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

  koordinat: {
    lat: number;
    lng: number;
  };

  hargaTiket: number;

  waktuOperasional: string;

  highlight: string[];

  tips: string[];

  aktivitas?: string[];

  isFeatured: boolean;
}

/* ============================================================
   ITINERARY
============================================================ */

export interface ItineraryItem {
  waktu: string;

  aktivitas: string;

  lokasi?: string;
}

/* ============================================================
   PAKET WISATA
============================================================ */

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

  popular?: boolean;

  isPopuler?: boolean;

  isRecommended?: boolean;

  isFeatured?: boolean;

  jadwal: string;

  meetingPoint: string;

  rating?: number;

  minPeserta?: number;

  maxPeserta?: number;

  itinerary?: ItineraryItem[];
}

/* ============================================================
   BOOKING
============================================================ */

export interface BookingFormData {
  nama: string;

  email: string;

  telepon: string;

  tanggal: string;

  paketId: string;

  jumlahPeserta: number;

  catatan: string;
}

export interface BookingResponse {
  success: boolean;

  bookingId?: string;

  message: string;

  data?: BookingFormData;
}

/* ============================================================
   TESTIMONI
============================================================ */

export interface Testimoni {
  id: string;

  nama: string;

  asal: string;

  avatar: string;

  rating: number;

  komentar: string;

  tanggal: string;

  paket?: string;

  foto?: string;

  verified?: boolean;
}

/* ============================================================
   NAVIGATION
============================================================ */

export interface NavItem {
  label: string;

  href: string;

  children?: NavItem[];
}

/* ============================================================
   SOCIAL LINKS
============================================================ */

export interface SocialLink {
  platform: string;

  url: string;

  icon: string;
}

/* ============================================================
   GALERI
============================================================ */

export interface GaleriItem {
  id: string;

  src: string;

  alt: string;

  kategori: string;

  width: number;

  height: number;
}

/* ============================================================
   API RESPONSE
============================================================ */

export interface ApiResponse<T> {
  success: boolean;

  message: string;

  data?: T;
}

/* ============================================================
   COMPONENT PROPS
============================================================ */

export interface BaseComponentProps {
  className?: string;

  children?: ReactNode;
}