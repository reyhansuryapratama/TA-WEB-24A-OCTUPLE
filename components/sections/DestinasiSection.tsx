"use client";

import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import SectionHeader from "@/components/ui/SectionHeader";
import DestinasiCard from "@/components/cards/DestinasiCard";
import Button from "@/components/ui/Button";
import { getDestinasiHighlight } from "@/lib/data/destinasi";
import Link from "next/link";

export default function DestinasiSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });
  const destinasiHighlight = getDestinasiHighlight();

  return (
    <section className="section-py bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionHeader
            eyebrow="Destinasi Wisata"
            title="Jelajahi Keajaiban"
            titleHighlight="Pahawang"
            description="Dari pulau utama hingga pasir timbul yang ikonik — setiap sudut Pahawang menyimpan cerita."
            align="left"
          />

          <Link href="/destinasi" className="shrink-0">
            <Button
              variant="outline"
              size="md"
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              }
              iconPosition="right"
            >
              Lihat Semua Destinasi
            </Button>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinasiHighlight.map((destinasi, idx) => (
            <div
              key={destinasi.id}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <DestinasiCard destinasi={destinasi} index={idx} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <p className="text-[var(--text-secondary)] mb-5">
            Masih ada <strong>6 destinasi</strong> menakjubkan lainnya menanti Anda
          </p>
          <Link href="/destinasi">
            <Button variant="primary" size="lg">
              Lihat Semua Destinasi
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}