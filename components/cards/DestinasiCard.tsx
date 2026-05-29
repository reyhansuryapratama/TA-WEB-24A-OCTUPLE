import Image from "next/image";
import Link from "next/link";

import { Destinasi } from "@/types";

import { formatCurrency } from "@/lib/utils";

import Badge, {
  BadgeVariant,
} from "@/components/ui/Badge";

interface DestinasiCardProps {
  destinasi: Destinasi;
  index?: number;
}

/* =========================================================
   CATEGORY
========================================================= */

const kategoriMap: Record<
  string,
  {
    label: string;
    color: BadgeVariant;
  }
> = {
  snorkeling: {
    label: "Snorkeling",
    color: "teal",
  },

  diving: {
    label: "Diving",
    color: "ocean",
  },

  pantai: {
    label: "Pantai",
    color: "sand",
  },

  mangrove: {
    label: "Mangrove",
    color: "teal",
  },

  sunset: {
    label: "Sunset",
    color: "coral",
  },

  island: {
    label: "Island",
    color: "ocean",
  },

  beach: {
    label: "Beach",
    color: "sand",
  },

  camping: {
    label: "Camping",
    color: "coral",
  },
};

export default function DestinasiCard({
  destinasi,
  index = 0,
}: DestinasiCardProps) {
  const kategori =
    kategoriMap[destinasi.kategori] || {
      label: destinasi.kategori,
      color: "ocean" as BadgeVariant,
    };

  return (
    <Link
      href={`/destinasi/${destinasi.slug}`}
      className="
        group
        relative
        block
        overflow-hidden
        rounded-[28px]
        bg-white/90
        backdrop-blur-xl
        border
        border-white/40
        shadow-[0_10px_40px_rgba(15,23,42,0.08)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_30px_80px_rgba(14,165,233,0.18)]
      "
    >
      {/* ======================================================
          IMAGE
      ====================================================== */}

      <div className="relative h-[260px] overflow-hidden">
        <Image
          src={destinasi.gambar || "/images/placeholder.jpg"}
          alt={destinasi.nama}
          fill
          priority={index < 3}
          sizes="(max-width:768px) 100vw, 33vw"
          className="
            object-cover
            transition-transform
            duration-[1400ms]
            ease-out
            group-hover:scale-110
          "
        />

        {/* cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* ambient glow */}
        <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-colors duration-700" />

        {/* badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
          <Badge variant={kategori.color}>
            {kategori.label}
          </Badge>

          {destinasi.isFeatured && (
            <Badge variant="coral">
              Featured
            </Badge>
          )}
        </div>

        {/* rating */}
        <div
          className="
            absolute
            bottom-4
            right-4
            z-10
            flex
            items-center
            gap-1.5
            rounded-full
            bg-white/95
            backdrop-blur-md
            px-3
            py-1.5
            shadow-lg
          "
        >
          <span className="text-amber-400 text-sm">
            ★
          </span>

          <span className="text-sm font-bold text-slate-900">
            {destinasi.rating}
          </span>

          <span className="text-xs text-slate-500">
            (
            {destinasi.jumlahReview?.toLocaleString(
              "id-ID"
            ) || 0}
            )
          </span>
        </div>
      </div>

      {/* ======================================================
          CONTENT
      ====================================================== */}

      <div className="p-6">
        {/* title */}
        <h3
          className="
            font-display
            text-[1.4rem]
            leading-tight
            font-semibold
            tracking-[-0.02em]
            text-[var(--ocean-900)]
            transition-colors
            duration-300
            group-hover:text-sky-700
          "
        >
          {destinasi.nama}
        </h3>

        {/* desc */}
        <p
          className="
            mt-3
            text-[15px]
            leading-7
            text-slate-600
            line-clamp-2
          "
        >
          {destinasi.deskripsi}
        </p>

        {/* highlights */}
        <div className="mt-5 flex flex-wrap gap-2">
          {destinasi.highlight
            ?.slice(0, 3)
            .map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  bg-sky-50
                  border
                  border-sky-100
                  px-3
                  py-1
                  text-[11px]
                  font-medium
                  tracking-wide
                  text-sky-700
                "
              >
                {item}
              </span>
            ))}
        </div>

        {/* footer */}
        <div
          className="
            mt-6
            flex
            items-center
            justify-between
            border-t
            border-slate-100
            pt-5
          "
        >
          {/* price */}
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-400">
              Harga mulai
            </p>

            <div className="mt-1 flex items-end gap-1">
              <span className="text-xl font-bold text-[var(--ocean-600)]">
                {formatCurrency(
                  destinasi.hargaTiket || 0
                )}
              </span>

              <span className="text-sm text-slate-500">
                /orang
              </span>
            </div>
          </div>

          {/* CTA */}
          <div
            className="
              flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-sky-700
              transition-all
              duration-300
              group-hover:gap-3
            "
          >
            Explore

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </div>
      </div>

      {/* subtle border glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[28px]
          ring-1
          ring-inset
          ring-white/20
        "
      />
    </Link>
  );
}