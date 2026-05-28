"use client";

import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import SectionHeader from "@/components/ui/SectionHeader";
import PaketCard from "@/components/cards/PaketCard";
import { getPaketPopular } from "@/lib/data/paket";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function PaketSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });
  const popularPaket = getPaketPopular();

  return (
    <section className="section-py relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-ocean-gradient opacity-[0.04]" />
      <div className="absolute inset-0 bg-[var(--sand)]/50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionHeader
            eyebrow="Paket Wisata"
            title="Pilih Paket"
            titleHighlight="Sesuai Budget Anda"
            description="Dari trip hemat seharian hingga pengalaman menginap premium — kami punya paket untuk semua jenis wisatawan."
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {popularPaket.map((paket, idx) => (
            <div
              key={paket.id}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <PaketCard paket={paket} featured={idx === 0} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-10 transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <Link href="/paket">
            <Button variant="primary" size="lg">
              Lihat Semua Paket & Harga
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}