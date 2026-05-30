import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { PaketWisata } from "@/types";

// ============================================================
// PAHAWANG WISATA — Paket Card
// ============================================================

interface PaketCardProps {
  paket: PaketWisata;
  featured?: boolean;
  className?: string;
}

export default function PaketCard({
  paket,
  featured = false,
  className,
}: PaketCardProps) {
  const formatRupiah = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        featured &&
          "ring-2 ring-[var(--teal-400)] shadow-xl scale-[1.01]",
        className
      )}
    >
      {/* Image Section */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={paket.gambar}
          alt={paket.nama}
          fill
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10" />

        {/* Featured Badge */}
        {featured && (
          <div className="absolute left-4 top-4 z-20 rounded-full bg-[var(--teal-500)] px-3 py-1 text-xs font-semibold text-white shadow-lg">
            Paket Favorit
          </div>
        )}

        {/* Badge Paket */}
        {paket.badge && (
          <div className="absolute right-4 top-4 z-20 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
            {paket.badge}
          </div>
        )}

        {/* Bottom Content */}
        <div className="absolute bottom-3 left-4 right-4 z-20 flex items-center justify-between">
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
            {paket.durasi}
          </span>

          <div className="flex items-center gap-1 rounded-full bg-slate-900/50 px-3 py-1 text-xs font-bold text-amber-400 backdrop-blur-md">
            ⭐ 4.9
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Title */}
        <h3 className="mb-2 line-clamp-1 text-lg font-bold text-slate-800">
          {paket.nama}
        </h3>

        {/* Description */}
        <p className="mb-4 line-clamp-2 text-sm text-slate-600">
          {paket.deskripsi}
        </p>

        {/* Features */}
        <ul className="mb-5 flex-1 space-y-2">
          {paket.fasilitas.slice(0, 3).map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-sm text-slate-600"
            >
              <span className="mr-2 text-emerald-500">✓</span>

              {feature}
            </li>
          ))}

          {paket.fasilitas.length > 3 && (
            <li className="text-xs italic text-slate-400">
              +{paket.fasilitas.length - 3} fasilitas lainnya
            </li>
          )}
        </ul>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Mulai dari
            </p>

            <div className="flex flex-col">
              {paket.hargaCoret && (
                <span className="text-xs text-slate-400 line-through">
                  {formatRupiah(paket.hargaCoret)}
                </span>
              )}

              <p className="text-lg font-extrabold text-blue-600">
                {formatRupiah(paket.harga)}
              </p>
            </div>
          </div>

          <Button variant="primary" size="md">
            Pesan Paket
          </Button>
        </div>
      </div>
    </div>
  );
}