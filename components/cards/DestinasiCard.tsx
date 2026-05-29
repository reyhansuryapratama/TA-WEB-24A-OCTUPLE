import Link from "next/link";

import { Destinasi } from "@/types";
import { formatCurrency } from "@/lib/utils";

import Badge from "@/components/ui/Badge";

interface DestinasiCardProps {
  destinasi: Destinasi;
  index?: number;
}

const kategoriLabel = {
  snorkeling: "Snorkeling",
  diving: "Diving",
  island: "Pulau",
  beach: "Pantai",
  camping: "Camping",
} as const;

const kategoriColor = {
  snorkeling: "teal",
  diving: "ocean",
  island: "coral",
  beach: "sand",
  camping: "sand",
} as const;

export default function DestinasiCard({
  destinasi,
  index = 0,
}: DestinasiCardProps) {
  return (
    <Link
      href={`/destinasi/${destinasi.slug}`}
      className="
        group
        block
        bg-white
        rounded-2xl
        overflow-hidden
        shadow-[var(--shadow-card)]
        border
        border-[var(--color-border)]
        hover:shadow-[var(--shadow-card-hover)]
        transition-all
        duration-300
        hover:-translate-y-1
      "
    >
      {/* ============================================================
          Image
      ============================================================ */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={destinasi.gambar}
          alt={destinasi.nama}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
          loading={index < 3 ? "eager" : "lazy"}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* ============================================================
            Badge
        ============================================================ */}
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge
  variant={
    kategoriColor[
      destinasi.kategori as keyof typeof kategoriColor
    ]
  }
>
  {
    kategoriLabel[
      destinasi.kategori as keyof typeof kategoriLabel
    ]
  }
</Badge>

          {destinasi.isFeatured && (
            <Badge variant="coral">
              Highlight
            </Badge>
          )}
        </div>

        {/* ============================================================
            Rating
        ============================================================ */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-white/95 rounded-full px-2.5 py-1 shadow-sm">
          <span className="text-amber-400 text-xs">
            ★
          </span>

          <span className="text-xs font-bold text-[var(--ocean-900)]">
            {destinasi.rating}
          </span>

          <span className="text-xs text-[var(--color-text-muted)]">
            (
            {destinasi.jumlahReview.toLocaleString(
              "id-ID"
            )}
            )
          </span>
        </div>
      </div>

      {/* ============================================================
          Content
      ============================================================ */}
      <div className="p-5">
        {/* Title */}
        <h3
          className="
            font-display
            font-semibold
            text-[var(--ocean-900)]
            text-lg
            mb-1.5
            line-clamp-1
            transition-colors
            group-hover:text-[var(--ocean-500)]
          "
        >
          {destinasi.nama}
        </h3>

        {/* Description */}
        <p
          className="
            text-sm
            text-[var(--color-text-muted)]
            leading-relaxed
            line-clamp-2
            mb-4
          "
        >
          {destinasi.deskripsi}
        </p>

        {/* ============================================================
            Highlight Tags
        ============================================================ */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {destinasi.highlight
            .slice(0, 3)
            .map((item) => (
              <span
                key={item}
                className="
                  text-xs
                  bg-[var(--sand-100)]
                  text-[var(--ocean-900)]
                  rounded-full
                  px-2.5
                  py-0.5
                "
              >
                {item}
              </span>
            ))}

          {destinasi.highlight.length > 3 && (
            <span
              className="
                text-xs
                text-[var(--color-text-muted)]
                px-1
                py-0.5
              "
            >
              +
              {destinasi.highlight.length - 3}
            </span>
          )}
        </div>

        {/* ============================================================
            Footer
        ============================================================ */}
        <div
          className="
            flex
            items-center
            justify-between
            pt-3
            border-t
            border-[var(--color-border)]
          "
        >
          {/* Price */}
          <div>
            <span className="text-xs text-[var(--color-text-muted)]">
              Tiket masuk
            </span>

            <div className="text-[var(--ocean-500)] font-bold text-sm">
              {formatCurrency(destinasi.hargaTiket)}

              <span className="text-[var(--color-text-muted)] font-normal">
                /orang
              </span>
            </div>
          </div>

          {/* CTA */}
          <div
            className="
              flex
              items-center
              gap-1
              text-[var(--ocean-500)]
              text-sm
              font-semibold
              transition-all
              group-hover:gap-2
            "
          >
            Lihat Detail

            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}