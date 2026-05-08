// ============================================================
// PAHAWANG WISATA — Utility Helpers
// ============================================================

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format currency to Indonesian Rupiah */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Format number with dot separator */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat("id-ID").format(num);
}

/** Format date to Indonesian locale */
export function formatDate(dateStr: string): string {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateStr));
}

/** Generate star rating array */
export function generateStars(rating: number): boolean[] {
  return Array.from({ length: 5 }, (_, i) => i < Math.floor(rating));
}

/** Truncate text with ellipsis */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "...";
}

/** Slugify string */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Calculate discount percentage */
export function calculateDiscount(original: number, discounted: number): number {
  return Math.round(((original - discounted) / original) * 100);
}

/** Get image placeholder blur data URL */
export function getBlurDataUrl(width = 8, height = 8): string {
  return `data:image/svg+xml;base64,${Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect width="100%" height="100%" fill="#0e7490"/></svg>`
  ).toString("base64")}`;
}

/** Check if string is valid email */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/** Check if string is valid Indonesian phone */
export function isValidPhone(phone: string): boolean {
  return /^(\+62|62|0)8[1-9][0-9]{6,9}$/.test(phone.replace(/\s|-/g, ""));
}

/** Get category label in Bahasa */
export function getCategoryLabel(category: string): string {
  const map: Record<string, string> = {
    snorkeling: "Snorkeling",
    diving: "Diving",
    "island-hopping": "Island Hopping",
    pantai: "Pantai",
    mangrove: "Mangrove",
    sunset: "Sunset",
  };
  return map[category] ?? category;
}