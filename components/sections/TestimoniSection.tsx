"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimoniData } from "@/lib/data/testimoni";
import { formatDate } from "@/lib/utils";

// ============================================================
// PAHAWANG WISATA — Star Rating
// ============================================================

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-4 w-4 ${
            star <= rating
              ? "text-amber-400"
              : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ============================================================
// PAHAWANG WISATA — Testimoni Section
// ============================================================

export default function TestimoniSection() {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.05,
  });

  const [active, setActive] = useState(0);

  const activeTestimoni = testimoniData?.[active];

  if (!activeTestimoni) return null;
  return (
    <section className="section-py relative overflow-hidden bg-ocean-gradient">
      {/* Decorative Background */}
      <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/2 rounded-full bg-white/5" />

      <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/3 translate-y-1/2 rounded-full bg-white/5" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-14 transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <SectionHeader
            eyebrow="Ulasan Wisatawan"
            title="Cerita Nyata dari"
            titleHighlight="Pelanggan Kami"
            description="Lebih dari 50.000 wisatawan telah merasakan keajaiban Pahawang bersama kami."
            align="center"
            dark
          />
        </div>

        {/* Featured Testimonial */}
        <div
          className={`mx-auto mb-10 max-w-3xl transition-all duration-700 delay-200 ${
            isVisible
              ? "scale-100 opacity-100"
              : "scale-95 opacity-0"
          }`}
        >
          <div className="glass rounded-3xl p-8 text-center md:p-10">
            {/* Quote Icon */}
          <div className="mb-4 font-serif text-5xl text-[var(--turquoise-light)] opacity-60">
          &quot;
          </div>
            
            {/* Comment */}
            <p className="mb-8 text-lg italic leading-relaxed text-white md:text-xl">
              {activeTestimoni.komentar}
            </p>

            {/* User */}
            <div className="flex items-center justify-center gap-4">
              <img
                src={activeTestimoni.avatar}
                alt={activeTestimoni.nama}
                className="h-14 w-14 rounded-full border-2 border-[var(--turquoise)] object-cover"
              />

              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white">
                    {activeTestimoni.nama}
                  </span>

                  {/* Verified */}
                  {"verified" in activeTestimoni &&
                    activeTestimoni.verified && (
                      <span className="text-xs text-[var(--turquoise)]">
                        ✓ Verified
                      </span>
                    )}
                </div>

                <div className="mt-1 flex items-center gap-2">
                  <span className="text-sm text-blue-200">
                    {activeTestimoni.asal}
                  </span>

                  <span className="text-blue-400">•</span>

                  <StarRating
                    rating={activeTestimoni.rating}
                  />
                </div>

                {/* Date */}
                <div className="mt-1 text-xs text-blue-300/80">
                  {formatDate(activeTestimoni.tanggal)}
                </div>
              </div>
            </div>

            {/* Paket */}
            {activeTestimoni.paket && (
              <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md">
                <svg
                  className="h-4 w-4 text-[var(--turquoise-light)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-xs text-blue-100">
                  {activeTestimoni.paket}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="mb-10 flex justify-center gap-2">
          {testimoniData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              aria-label={`Testimoni ${idx + 1}`}
              className={`rounded-full transition-all duration-300 ${
                idx === active
                  ? "h-2.5 w-8 bg-[var(--turquoise)]"
                  : "h-2.5 w-2.5 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Avatar List */}
        <div
          className={`flex justify-center gap-3 transition-all duration-700 delay-300 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          {testimoniData.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setActive(idx)}
              className={`relative transition-all duration-300 ${
                idx === active
                  ? "z-10 scale-125"
                  : "scale-90 opacity-60 hover:opacity-90"
              }`}
            >
              <img
                src={t.avatar}
                alt={t.nama}
                className={`h-12 w-12 rounded-full border-2 object-cover transition-all ${
                  idx === active
                    ? "border-[var(--turquoise)]"
                    : "border-white/30"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}