// ============================================================
// PAHAWANG WISATA — Utility Helpers
// ============================================================

import { type ClassValue, clsx } from "clsx";

import { twMerge } from "tailwind-merge";

// ============================================================
// CLASSNAME MERGER
// ============================================================

/** Merge Tailwind classes safely */
export function cn(
  ...inputs: ClassValue[]
): string {
  return twMerge(
    clsx(inputs)
  );
}

// ============================================================
// CURRENCY
// ============================================================

/** Format currency to Indonesian Rupiah */
export function formatCurrency(
  amount: number
): string {
  return new Intl.NumberFormat(
    "id-ID",
    {
      style: "currency",

      currency: "IDR",

      minimumFractionDigits: 0,

      maximumFractionDigits: 0,
    }
  ).format(amount);
}

/** Format number with Indonesian separator */
export function formatNumber(
  num: number
): string {
  return new Intl.NumberFormat(
    "id-ID"
  ).format(num);
}

// ============================================================
// DATE
// ============================================================

/** Format date to Indonesian locale */
export function formatDate(
  dateStr: string
): string {
  return new Intl.DateTimeFormat(
    "id-ID",
    {
      day: "numeric",

      month: "long",

      year: "numeric",
    }
  ).format(
    new Date(dateStr)
  );
}

// ============================================================
// RATING
// ============================================================

/** Generate star rating array */
export function generateStars(
  rating: number
): boolean[] {
  return Array.from(
    { length: 5 },
    (_, i) =>
      i < Math.floor(rating)
  );
}

/** Get rating label */
export function getRatingLabel(
  rating: number
): string {
  if (rating >= 4.8)
    return "Luar Biasa";

  if (rating >= 4.5)
    return "Sangat Baik";

  if (rating >= 4)
    return "Baik";

  return "Cukup";
}

// ============================================================
// TEXT
// ============================================================

/** Truncate text with ellipsis */
export function truncate(
  text: string,
  maxLength: number
): string {
  if (
    text.length <= maxLength
  ) {
    return text;
  }

  return (
    text
      .slice(0, maxLength)
      .trimEnd() + "..."
  );
}

/** Slugify string */
export function slugify(
  str: string
): string {
  return str
    .toLowerCase()

    .replace(
      /[^\w\s-]/g,
      ""
    )

    .replace(
      /[\s_-]+/g,
      "-"
    )

    .replace(
      /^-+|-+$/g,
      ""
    );
}

// ============================================================
// DISCOUNT
// ============================================================

/** Calculate discount percentage */
export function calculateDiscount(
  original: number,
  discounted: number
): number {
  return Math.round(
    ((original - discounted) /
      original) *
      100
  );
}

// ============================================================
// IMAGE PLACEHOLDER
// ============================================================

/** Get blur placeholder */
export function getBlurDataUrl(
  width = 8,
  height = 8
): string {
  return `data:image/svg+xml;base64,${Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <rect width="100%" height="100%" fill="#0e7490"/>
    </svg>`
  ).toString("base64")}`;
}

// ============================================================
// VALIDATION
// ============================================================

/** Validate email */
export function isValidEmail(
  email: string
): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    email
  );
}

/** Validate Indonesian phone */
export function isValidPhone(
  phone: string
): boolean {
  return /^(\+62|62|0)8[1-9][0-9]{6,11}$/.test(
    phone.replace(
      /\s|-/g,
      ""
    )
  );
}

// ============================================================
// CATEGORY LABEL
// ============================================================

/** Convert category label */
export function getCategoryLabel(
  category: string
): string {
  const map: Record<
    string,
    string
  > = {
    snorkeling:
      "Snorkeling",

    diving: "Diving",

    "island-hopping":
      "Island Hopping",

    pantai: "Pantai",

    mangrove:
      "Mangrove",

    sunset: "Sunset",
  };

  return (
    map[category] ??
    category
  );
}

// ============================================================
// WHATSAPP
// ============================================================

/** Generate WhatsApp link */
export function generateWhatsAppLink(
  message: string,
  phone = "628123456789"
): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;
}