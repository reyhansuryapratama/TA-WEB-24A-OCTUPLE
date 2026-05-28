"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const stats = [
  { value: "6+", label: "Destinasi Wisata" },
  { value: "4.8★", label: "Rating Pelanggan" },
  { value: "50K+", label: "Wisatawan Puas" },
  { value: "10+", label: "Tahun Pengalaman" },
];

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=90"
          alt="Keindahan Pantai Pahawang Lampung"
          className="w-full h-full object-cover object-center"
          style={{ transform: "scale(1.05)" }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ocean-deep)]/80 via-[var(--ocean-deep)]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ocean-deep)]/60 via-transparent to-transparent" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[var(--turquoise)] opacity-20"
            style={{
              width: `${20 + i * 15}px`,
              height: `${20 + i * 15}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
              animation: `float ${4 + i * 0.7}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div
              className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="h-px w-10 bg-[var(--turquoise)]" />
              <span className="text-[var(--turquoise-light)] text-sm font-bold tracking-[0.2em] uppercase">
                Kabupaten Pesawaran, Lampung
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`font-display text-white mb-6 transition-all duration-700 delay-100 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
            >
              Surga Bahari
              <br />
              <span className="text-[var(--turquoise-light)] italic">Pulau Pahawang</span>
            </h1>

            {/* Description */}
            <p
              className={`text-lg sm:text-xl text-blue-100 leading-relaxed mb-10 max-w-xl transition-all duration-700 delay-200 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Jelajahi keajaiban bawah laut Pahawang — terumbu karang berwarna-warni, 
              ikan tropis yang bersahabat, dan pantai pasir putih yang tak terlupakan di Lampung.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap items-center gap-4 mb-16 transition-all duration-700 delay-300 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Button
                variant="secondary"
                size="xl"
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.61 19.79 19.79 0 01.12 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.46-.46a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                }
                iconPosition="left"
                onClick={() => window.open("https://wa.me/6281234567890?text=Halo, saya tertarik booking paket wisata Pahawang", "_blank")}
              >
                Booking via WhatsApp
              </Button>

              <Link href="/destinasi">
                <Button
                  variant="outline"
                  size="xl"
                  className="border-white/60 text-white hover:bg-white hover:text-[var(--ocean-deep)] hover:border-white"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/>
                      <path d="m21 21-4.35-4.35"/>
                    </svg>
                  }
                  iconPosition="left"
                >
                  Jelajahi Destinasi
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-2 sm:grid-cols-4 gap-4 transition-all duration-700 delay-[400ms] ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass rounded-2xl px-4 py-3 text-center"
                >
                  <div className="font-display text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-blue-200 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2">
          <div className="w-1 h-2.5 rounded-full bg-white/80" style={{ animation: "float 1.5s ease-in-out infinite" }} />
        </div>
      </div>

      {/* Bottom wave */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,40 1440,40 L1440,80 L0,80 Z"
            fill="var(--bg-primary)"
          />
        </svg>
      </div>
    </section>
  );
}