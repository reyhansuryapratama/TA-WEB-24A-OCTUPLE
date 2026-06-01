
import type { Metadata } from "next";

import { paketData } from "@/lib/data/paket";

import PaketCard from "@/components/cards/PaketCard";

import SectionHeader from "@/components/ui/SectionHeader";

import { formatCurrency } from "@/lib/utils";

// ============================================================
// METADATA
// ============================================================

export const metadata: Metadata = {
  title:
    "Paket Wisata Pahawang — Harga & Itinerary Lengkap",

  description:
    "Pilih paket wisata Pahawang sesuai budget Anda. One Day Trip, Overnight Adventure, hingga Premium Diving Package.",
};

// ============================================================
// PAGE
// ============================================================

export default function PaketPage() {
  const featuredPaket =
    paketData?.[0];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden bg-ocean-gradient pt-32 pb-20 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="dots"
                x="0"
                y="0"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="2"
                  fill="white"
                />
              </pattern>
            </defs>

            <rect
              width="100%"
              height="100%"
              fill="url(#dots)"
            />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[var(--turquoise)]" />

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--turquoise-light)]">
              Paket & Harga
            </span>

            <span className="h-px w-10 bg-[var(--turquoise)]" />
          </div>

          <h1 className="font-display mb-4 text-4xl font-bold md:text-5xl">
            Paket Wisata Pahawang
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-blue-100">
            Pilih paket terbaik untuk liburan Anda —
            sudah termasuk kapal, guide,
            dan perlengkapan snorkeling.
          </p>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              {
                value: `Mulai ${formatCurrency(185000)}`,
                label: "Harga",
              },

              {
                value: `${paketData.length} Paket`,
                label: "Pilihan",
              },

              {
                value: "Maks 30",
                label: "Peserta",
              },

              {
                value: "Setiap Hari",
                label: "Trip",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="glass rounded-2xl px-5 py-3 text-center"
              >
                <div className="font-display text-xl font-bold">
                  {item.value}
                </div>

                <div className="mt-1 text-xs text-blue-200">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave */}
        <div className="wave-bottom">
          <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,30 C360,60 720,0 1080,30 C1260,45 1440,30 1440,30 L1440,60 L0,60 Z"
              fill="var(--bg-primary)"
            />
          </svg>
        </div>
      </section>

      {/* ===================================================== */}
      {/* PAKET GRID */}
      {/* ===================================================== */}

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {paketData.map(
              (paket, index) => (
                <PaketCard
                  key={paket.id}
                  paket={paket}
                  featured={
                    paket.popular &&
                    index === 0
                  }
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* ITINERARY */}
      {/* ===================================================== */}

      {featuredPaket &&
        featuredPaket.itinerary &&
        featuredPaket.itinerary.length > 0 && (
          <section className="bg-[var(--sand)]/40 py-14">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="mb-12 text-center">
                <SectionHeader
                  eyebrow="Rencana Perjalanan"
                  title="Itinerary"
                  titleHighlight="Lengkap"
                  description="Detail perjalanan paket wisata terpopuler kami."
                />
              </div>

              <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-[var(--shadow-md)]">
                {/* Header */}
                <div className="bg-ocean-gradient p-6 text-white">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-bold">
                        {featuredPaket.nama}
                      </h3>

                      <p className="mt-1 text-sm text-blue-200">
                        Durasi:{" "}
                        {featuredPaket.durasi}
                      </p>
                    </div>

                    <div className="glass rounded-xl px-4 py-2 text-center">
                      <div className="text-lg font-bold">
                        {formatCurrency(
                          featuredPaket.harga
                        )}
                      </div>

                      <div className="text-xs text-blue-200">
                        per orang
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="p-6">
                  <div className="relative">
                    <div className="absolute left-[22px] top-2 bottom-2 w-0.5 bg-[var(--border)]" />

                    <div className="space-y-5">
                      {featuredPaket.itinerary.map(
                        (item, idx) => (
                          <div
                            key={idx}
                            className="relative flex items-start gap-4"
                          >
                            {/* Number */}
                            <div
                   className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold
                         ${
                        idx === 0 ||
                        idx ===
                  (featuredPaket.itinerary?.length ?? 0) - 1
                  ? "border-[var(--ocean-deep)] bg-[var(--ocean-deep)] text-white"
                    : "border-[var(--ocean-bright)] bg-white text-[var(--ocean-bright)]"
                  }`}
                        >
                    {idx + 1}
                        </div>

                            {/* Content */}
                            <div className="flex-1 pb-1">
                              <div className="flex flex-wrap items-center gap-3">
                                <span className="rounded-full bg-[var(--sand)] px-2.5 py-0.5 text-sm font-bold text-[var(--ocean-bright)]">
                                  {item.waktu}
                                </span>

                                {item.lokasi && (
                                  <span className="text-xs text-[var(--text-muted)]">
                                    📍{" "}
                                    {item.lokasi}
                                  </span>
                                )}
                              </div>

                              <p className="mt-1.5 text-sm text-[var(--text-secondary)]">
                                {
                                  item.aktivitas
                                }
                              </p>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

      {/* ===================================================== */}
      {/* FAQ */}
      {/* ===================================================== */}

      <section className="py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <SectionHeader
              eyebrow="FAQ"
              title="Pertanyaan"
              titleHighlight="Umum"
            />
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Apakah bisa booking untuk anak-anak?",
                a: "Ya, kami melayani semua usia dan menyediakan life jacket anak.",
              },

              {
                q: "Bagaimana cara pembayaran?",
                a: "Pembayaran dapat dilakukan melalui transfer bank maupun e-wallet.",
              },

              {
                q: "Apakah ada refund jika cuaca buruk?",
                a: "Ya, DP dapat dikembalikan penuh atau dijadwalkan ulang.",
              },

              {
                q: "Apakah harus bisa berenang?",
                a: "Tidak wajib. Semua peserta mendapat life jacket.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-[var(--ocean-deep)]">
                  {faq.q}

                  <svg
                    className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180 text-[var(--ocean-bright)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>

                <div className="border-t border-[var(--border)] px-5 pb-5 pt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}