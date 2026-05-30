import type { Metadata } from "next";

import { destinasiList } from "@/lib/data/destinasi";

import DestinasiCard from "@/components/cards/DestinasiCard";

import SectionHeader from "@/components/ui/SectionHeader";

// ============================================================
// METADATA
// ============================================================

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: "Destinasi Wisata Pahawang",

  description:
    "Temukan semua destinasi wisata bahari terbaik di Pulau Pahawang Lampung.",
};

// ============================================================
// KATEGORI
// ============================================================

const kategoriList = [
  {
    value: "all",
    label: "Semua",
    icon: "🌊",
  },

  {
    value: "snorkeling",
    label: "Snorkeling",
    icon: "🤿",
  },

  {
    value: "diving",
    label: "Diving",
    icon: "🐠",
  },

  {
    value: "pantai",
    label: "Pantai",
    icon: "🏖️",
  },

  {
    value: "mangrove",
    label: "Mangrove",
    icon: "🌿",
  },

  {
    value: "sunset",
    label: "Sunset",
    icon: "🌅",
  },
];

// ============================================================
// TYPES
// ============================================================

interface PageProps {
  searchParams: Promise<{
    kategori?: string;
  }>;
}

// ============================================================
// PAGE
// ============================================================

export default async function DestinasiPage({
  searchParams,
}: PageProps) {
  // WAJIB await searchParams di Next.js terbaru
  const params = await searchParams;

  const selectedKategori =
    params?.kategori ?? "all";

  const filtered =
    selectedKategori === "all"
      ? destinasiList
      : destinasiList.filter(
          (d) =>
            d.kategori === selectedKategori
        );

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] overflow-hidden">
      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="relative pt-36 pb-24 overflow-hidden bg-ocean-gradient">
        {/* ambient light */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="absolute bottom-[-140px] left-[-120px] w-[340px] h-[340px] rounded-full bg-sky-300/20 blur-3xl" />
        </div>

        {/* mesh */}
        <div className="absolute inset-0 opacity-[0.06] ocean-pattern" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 text-sm text-white/90 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />

              Luxury Island Experience
            </div>

            <SectionHeader
              eyebrow="Wisata Bahari Lampung"
              title="Destinasi Wisata"
              titleHighlight="Pahawang"
              description={`${destinasiList.length} destinasi tropis premium untuk pengalaman liburan yang lebih eksklusif.`}
            />

            <p className="mt-6 text-white/70 max-w-2xl mx-auto leading-relaxed text-[15px] sm:text-base">
              Jelajahi pasir putih, laut turquoise, snorkeling eksotis,
              dan pengalaman island hopping dengan nuansa resort internasional.
            </p>
          </div>
        </div>

        {/* wave */}
        <div className="wave-bottom">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,64L60,74.7C120,85,240,107,360,106.7C480,107,600,85,720,69.3C840,53,960,43,1080,53.3C1200,64,1320,96,1380,112L1440,128L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
              fill="var(--bg-primary)"
            />
          </svg>
        </div>
      </section>

      {/* ===================================================== */}
      {/* FILTER */}
      {/* ===================================================== */}

      <section className="sticky top-16 md:top-20 z-40 backdrop-blur-xl bg-white/70 border-b border-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto py-5 scrollbar-hide">
            {kategoriList.map((kat) => {
              const active =
                selectedKategori === kat.value;

              return (
                <a
                  key={kat.value}
                  href={
                    kat.value === "all"
                      ? "/destinasi"
                      : `/destinasi?kategori=${kat.value}`
                  }
                  className={`
                    shrink-0
                    flex items-center gap-2
                    px-5 py-3
                    rounded-2xl
                    text-sm font-semibold
                    transition-all duration-300

                    ${
                      active
                        ? "bg-[var(--ocean-deep)] text-white shadow-2xl shadow-cyan-500/20"
                        : "bg-white/90 text-[var(--text-secondary)] border border-[rgba(255,255,255,0.6)] hover:bg-white hover:-translate-y-0.5 hover:shadow-xl"
                    }
                  `}
                >
                  <span className="text-base">
                    {kat.icon}
                  </span>

                  {kat.label}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* CONTENT */}
      {/* ===================================================== */}

      <section className="relative py-16 lg:py-24">
        {/* background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-40 left-0 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-40" />

          <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <div className="text-6xl mb-5">
                🌊
              </div>

              <h3 className="font-display text-3xl text-[var(--ocean-deep)] mb-3">
                Destinasi Tidak Ditemukan
              </h3>

              <p className="text-[var(--text-secondary)]">
                Coba pilih kategori wisata lainnya.
              </p>
            </div>
          ) : (
            <>
              {/* top info */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-[var(--text-muted)]">
                    Explore Paradise
                  </p>

                  <h2 className="font-display text-3xl text-[var(--ocean-deep)] mt-2">
                    Pilihan Destinasi Premium
                  </h2>
                </div>

                <div className="glass rounded-2xl px-5 py-3 text-sm text-[var(--ocean-deep)]">
                  Menampilkan{" "}
                  <strong>
                    {filtered.length}
                  </strong>{" "}
                  destinasi
                </div>
              </div>

              {/* grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filtered.map(
                  (destinasi, idx) => (
                    <div
                      key={destinasi.id}
                      className="animate-fade-up"
                      style={{
                        animationDelay: `${idx * 120}ms`,
                      }}
                    >
                      <DestinasiCard
                        destinasi={destinasi}
                        index={idx}
                      />
                    </div>
                  )
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}