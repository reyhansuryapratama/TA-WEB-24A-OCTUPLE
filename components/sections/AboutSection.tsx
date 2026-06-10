"use client";

import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Link from "next/link";

interface Highlight {
  icon: string;
  title: string;
  desc: string;
}

const highlights: Highlight[] = [
  {
    icon: "🐠",
    title: "Biodiversitas Tinggi",
    desc: "Ratusan spesies ikan tropis, terumbu karang, penyu, dan biota laut langka.",
  },
  {
    icon: "💎",
    title: "Air Jernih Terjaga",
    desc: "Kejernihan air hingga 15 meter, menjadikannya spot snorkeling & diving terbaik.",
  },
  {
    icon: "🌺",
    title: "Alam Terpelihara",
    desc: "Kawasan konservasi yang dijaga ketat untuk kelestarian ekosistem laut.",
  },
];

export default function AboutSection() {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const { ref: imgRef, isVisible: imgVisible } = useScrollAnimation();

  return (
    <section className="section-py bg-[var(--bg-primary)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div
            ref={imgRef}
            className={`relative transition-all duration-900 ${
              imgVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-lg)]">
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=85"
                alt="Snorkeling di Pulau Pahawang"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ocean-deep)]/40 to-transparent" />
            </div>

            {/* Floating card 1 */}
            <div className="absolute -right-6 top-8 glass-dark rounded-2xl p-4 max-w-[160px] animate-float shadow-xl">
              <div className="text-3xl mb-1">🐢</div>
              <div className="text-white text-sm font-bold">Penyu Hijau</div>
              <div className="text-blue-200 text-xs">Berenang bebas di sini</div>
            </div>

            {/* Floating card 2 */}
            <div className="absolute -left-6 bottom-16 glass-dark rounded-2xl p-4 max-w-[170px] shadow-xl" style={{ animation: "float 5s ease-in-out infinite 1s" }}>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <div className="text-white text-sm font-bold">4.8 / 5.0</div>
              <div className="text-blue-200 text-xs">Dari 1,247 ulasan</div>
            </div>

            {/* Decorative blob */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full bg-[var(--turquoise)] opacity-10 -z-10" />
            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-[var(--ocean-bright)] opacity-10 -z-10" />
          </div>

          {/* Text side */}
          <div
            ref={textRef}
            className={`transition-all duration-900 delay-200 ${
              textVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <SectionHeader
              eyebrow="Tentang Pahawang"
              title="Surga Tersembunyi di"
              titleHighlight="Teluk Lampung"
              description="Pulau Pahawang terletak di Kabupaten Pesawaran, Lampung Selatan — sekitar 2 jam perjalanan dari Bandar Lampung. Dengan luas perairan yang kaya ekosistem, Pahawang menjadi salah satu destinasi wisata bahari terpopuler di Sumatera."
              align="left"
            />

            <div className="mt-8 space-y-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-[var(--sand)] transition-colors duration-200 group"
                >
                  <div className="text-3xl shrink-0 group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--ocean-deep)] mb-1">{item.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <Link href="/tentang">
                <Button variant="primary" size="lg">
                  Pelajari Lebih Lanjut
                </Button>
              </Link>
              <Link href="/galeri">
                <Button variant="outline" size="lg">
                  Lihat Galeri
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}