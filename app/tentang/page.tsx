import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

// ============================================================
// METADATA
// ============================================================

export const metadata: Metadata = {
  title:
    "Tentang Pahawang — Sejarah & Keindahan Alam",

  description:
    "Mengenal lebih dekat Pulau Pahawang — sejarah, keanekaragaman hayati, kondisi terumbu karang, dan upaya konservasi.",
};

// ============================================================
// DATA
// ============================================================

const timeline = [
  {
    tahun: "2005",

    judul: "Mulai Dikenal",

    deskripsi:
      "Keindahan bawah laut Pulau Pahawang mulai menarik perhatian para penyelam dan pecinta snorkeling, menjadikannya destinasi bahari yang mulai diperhitungkan di Lampung..",
  },

  {
    tahun: "2010",

    judul: "Berkembang Pesat",

    deskripsi:
      "Mulai viral di media sosial dan menarik wisatawan dari luar Lampung.",
  },

  {
    tahun: "2015",

    judul: "Infrastruktur Meningkat",

    deskripsi:
      "Pembangunan homestay, dermaga, dan fasilitas wisata oleh masyarakat lokal.",
  },

  {
    tahun: "2018",

    judul: "Konservasi Terumbu Karang",

    deskripsi:
      "Program transplantasi terumbu karang dimulai bersama komunitas lokal.",
  },

  {
    tahun: "2024",

    judul: "50.000+ Wisatawan",

    deskripsi:
      "Pahawang menjadi salah satu destinasi wisata bahari utama di Lampung.",
  },
];

const biodiversitas = [
  {
    icon: "🐠",

    judul: "300+ Spesies Ikan",

    deskripsi:
      "Dari ikan badut hingga napoleon.",
  },

  {
    icon: "🪸",

    judul: "15 Jenis Terumbu",

    deskripsi:
      "Acropora, brain coral, dan staghorn.",
  },

  {
    icon: "🐢",

    judul: "Penyu Hijau",

    deskripsi:
      "Area peneluran penyu hijau yang dilindungi.",
  },

  {
    icon: "🦈",

    judul: "Hiu Karang Jinak",

    deskripsi:
      "Blacktip reef shark di perairan dangkal.",
  },

  {
    icon: "⭐",

    judul: "Bintang Laut",

    deskripsi:
      "Termasuk bintang laut biru yang langka.",
  },

  {
    icon: "🦑",

    judul: "Cumi & Gurita",

    deskripsi:
      "Habitat alami cephalopoda di malam hari.",
  },
];

// ============================================================
// PAGE
// ============================================================

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[450px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Pemandangan Pahawang"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ocean-deep)]/80 via-[var(--ocean-deep)]/40 to-transparent" />

        <div className="absolute inset-0 flex items-end pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--turquoise)]" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--turquoise-light)]">
                Mengenal Pahawang
              </span>
            </div>

            <h1 className="font-display max-w-2xl text-4xl font-bold text-white md:text-5xl">
              Surga Tersembunyi di Teluk Lampung
            </h1>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 lg:grid-cols-2 lg:px-8">
          {/* LEFT */}
          <div>
            <h2 className="font-display mb-6 text-3xl text-[var(--ocean-deep)]">
              Mengenal Pulau Pahawang
            </h2>

            <div className="space-y-4 leading-relaxed text-[var(--text-secondary)]">
              <p>
                Pulau Pahawang terletak di Kecamatan
                Marga Punduh, Kabupaten Pesawaran,
                Provinsi Lampung.
              </p>

              <p>
                Pulau ini terkenal dengan air laut yang
                sangat jernih serta ekosistem terumbu
                karang yang masih terjaga.
              </p>

              <p>
                Keindahan bawah laut Pahawang membuatnya
                menjadi salah satu destinasi snorkeling
                dan diving terbaik di Indonesia.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-4">
            {[
              {
                label: "Lokasi",

                value:
                  "Pesawaran, Lampung",
              },

              {
                label:
                  "Luas Pahawang Besar",

                value:
                  "± 1.084 hektar",
              },

              {
                label:
                  "Jarak dari Bandar Lampung",

                value:
                  "± 40 km",
              },

              {
                label: "Koordinat",

                value:
                  "5°41'S, 105°13'E",
              },

              {
                label: "Populasi",

                value:
                  "± 3.500 jiwa",
              },
            ].map((info, idx) => {
              return (
                <div
                  key={idx}
                  className="flex gap-4 border-b border-[var(--border)] py-3"
                >
                  <dt className="w-44 shrink-0 text-sm font-semibold text-[var(--ocean-deep)]">
                    {info.label}
                  </dt>

                  <dd className="text-sm text-[var(--text-secondary)]">
                    {info.value}
                  </dd>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BIODIVERSITAS */}
      <section className="bg-ocean-gradient py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <SectionHeader
              eyebrow="Keanekaragaman Hayati"
              title="Kehidupan Laut"
              titleHighlight="Menakjubkan"
              description="Ekosistem bawah laut yang kaya dan indah."
              align="center"
              dark
              />
          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            {biodiversitas.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="glass rounded-2xl p-5 text-center"
                >
                  <div className="mb-3 text-4xl">
                    {item.icon}
                  </div>

                  <h3 className="mb-1 font-semibold text-white">
                    {item.judul}
                  </h3>

                  <p className="text-xs leading-relaxed text-blue-200">
                    {item.deskripsi}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <SectionHeader
              eyebrow="Sejarah Pariwisata"
              title="Perjalanan"
              titleHighlight="Pahawang"
            />
          </div>

          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-[var(--border)]" />

            <div className="space-y-8">
              {timeline.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-6"
                  >
                    <div className="w-32 shrink-0 text-right">
                      <span className="font-display text-xl font-bold text-[var(--ocean-bright)]">
                        {item.tahun}
                      </span>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-[25px] h-4 w-4 rounded-full border-4 border-white bg-[var(--ocean-bright)] shadow-sm" />
                    </div>

                    <div className="flex-1">
                      <h3 className="mb-1 font-semibold text-[var(--ocean-deep)]">
                        {item.judul}
                      </h3>

                      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                        {item.deskripsi}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--sand)]/40 py-14">
        <div className="mx-auto max-w-xl px-4 text-center">
          <h2 className="font-display mb-4 text-3xl font-bold text-[var(--ocean-deep)]">
            Siap Menjelajahi Pahawang?
          </h2>

          <p className="mb-8 text-[var(--text-secondary)]">
            Bergabunglah dengan ribuan wisatawan yang
            telah menikmati surga bahari Lampung.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/paket">
              <Button
                variant="primary"
                size="lg"
              >
                Lihat Paket Wisata
              </Button>
            </Link>

            <Link href="/kontak">
              <Button
                variant="outline"
                size="lg"
              >
                Hubungi Kami
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}