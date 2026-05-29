"use client";

import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-py bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M0 30 C15 10 45 50 60 30" stroke="var(--ocean-deep)" strokeWidth="1.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)"/>
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Emoji decoration */}
          <div className="text-5xl mb-6 animate-float">🌊</div>

          <h2 className="font-display text-display-lg text-[var(--ocean-deep)] mb-4">
            Siap Jelajahi Pahawang?
          </h2>

          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-xl mx-auto">
            Jangan tunda lagi! Hubungi kami sekarang dan dapatkan penawaran spesial untuk grup, 
            keluarga, dan wisatawan individu.
          </p>

          {/* Offer badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "✅ Booking Mudah via WhatsApp",
              "🎯 Harga Transparan",
              "🔒 Pembayaran Aman",
              "⭐ Guide Berpengalaman",
            ].map((item, idx) => (
              <span
                key={idx}
                className="text-sm bg-[var(--sand)] text-[var(--ocean-deep)] font-medium rounded-full px-4 py-2"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/6281234567890?text=Halo, saya ingin tanya tentang paket wisata Pahawang"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="primary"
                size="xl"
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                }
                iconPosition="left"
              >
                Chat WhatsApp Sekarang
              </Button>
            </a>

            <Link href="/paket">
              <Button variant="outline" size="xl">
                Lihat Semua Paket
              </Button>
            </Link>
          </div>

          {/* Guarantee text */}
          <p className="mt-6 text-sm text-[var(--text-muted)]">
            Respons cepat dalam 5 menit · Konsultasi gratis · Tanpa biaya tersembunyi
          </p>
        </div>
      </div>
    </section>
  );
}