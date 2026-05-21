import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button"; 

interface PaketCardProps {
  title: string;
  duration: string;
  price: number;
  rating: number;
  imageUrl: string;
  features: string[];
  className?: string;
}

export const PaketCard: React.FC<PaketCardProps> = ({
  title,
  duration,
  price,
  rating,
  imageUrl,
  features,
  className,
}) => {
  const formatRupiah = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className={cn("flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl", className)}>
      {/* Image Section */}
      <div className="relative h-52 w-full">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover" 
        />
        {/* Diubah ke bg-linear-to-t sesuai aturan Tailwind v4 */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10" />
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white z-20">
          <span className="text-sm font-medium bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-md">
            {duration}
          </span>
          <div className="flex items-center gap-1 text-amber-400 text-sm font-bold bg-slate-900/40 px-2 py-0.5 rounded-md backdrop-blur-sm">
            ⭐ {rating.toFixed(1)}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-lg font-bold text-slate-800 line-clamp-1">{title}</h3>
        
        {/* Features List */}
        <ul className="mb-5 flex-1 space-y-1.5">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center text-xs text-slate-600">
              <span className="mr-2 text-green-500">✓</span> {feature}
            </li>
          ))}
          {features.length > 3 && (
            <li className="text-xs text-slate-400 italic">+{features.length - 3} fasilitas lainnya</li>
          )}
        </ul>

        {/* Price & Action */}
        <div className="mt-auto border-t border-slate-100 pt-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Mulai dari</p>
            <p className="text-lg font-extrabold text-blue-600">{formatRupiah(price)}</p>
          </div>
          <Button variant="primary" size="md">
            Pesan Paket
          </Button>
        </div>
      </div>
    </div>
  );
};