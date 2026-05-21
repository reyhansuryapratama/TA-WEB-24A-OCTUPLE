import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button"; 

interface DestinasiCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category?: string;
  className?: string;
}

export const DestinasiCard: React.FC<DestinasiCardProps> = ({
  title,
  description,
  imageUrl,
  category = "Spot Wisata",
  className,
}) => {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl", className)}>
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
        <span className="absolute left-3 top-3 z-10 rounded-full bg-blue-600/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {category}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold text-slate-800">{title}</h3>
        <p className="mb-4 line-clamp-2 text-sm text-slate-600">{description}</p>
        
        <Button variant="outline" size="sm" fullWidth>
          Jelajahi Spot
        </Button>
      </div>
    </div>
  );
};