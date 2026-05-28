"use client";

import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import Button from "@/components/ui/Button";

const galeriItems = [
  { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80", alt: "Pantai Pahawang", span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80", alt: "Snorkeling Pahawang", span: "" },
  { src: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=600&q=80", alt: "Bawah Laut Pahawang", span: "" },
  { src: "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=600&q=80", alt: "Pasir Timbul", span: "" },
  { src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80", alt: "Pulau Mahitam", span: "" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", alt: "Sunrise Pahawang", span: "" },
];

export default function GaleriSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section className="section-py bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionHeader
            eyebrow="Galeri Foto"
            title="Keindahan yang"
            titleHighlight="Berbicara Sendiri"
            description="Ribuan foto dari wisatawan kami. Setiap gambar menceritakan pengalaman nyata."
            align="left"
          />
          <Link href="/galeri" className="shrink-0">
            <Button variant="outline" size="md">
              Lihat Semua Foto
            </Button>
          </Link>
        </div>

        {/* Masonry Grid */}
        <div
          className={`grid grid-cols-3 grid-rows-2 gap-3 h-[520px] transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {galeriItems.map((item, idx) => (
            <Link
              key={idx}
              href="/galeri"
              className={`relative group overflow-hidden rounded-2xl img-zoom-container ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[var(--ocean-deep)]/0 group-hover:bg-[var(--ocean-deep)]/30 transition-all duration-300 flex items-center justify-center">
                <div className="glass rounded-full p-3 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats bar */}
        <div className={`mt-8 grid grid-cols-3 gap-4 transition-all duration-700 delay-400 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          {[
            { value: "500+", label: "Foto HD" },
            { value: "50+", label: "Video Bawah Laut" },
            { value: "Setiap", label: "Kunjungan Didokumentasikan" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center py-4 rounded-xl bg-[var(--sand)]/60">
              <div className="font-display font-bold text-xl text-[var(--ocean-deep)]">{stat.value}</div>
              <div className="text-xs text-[var(--text-secondary)] mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}