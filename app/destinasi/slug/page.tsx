import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import { notFound } from "next/navigation";

import {
  destinasiList,
  getDestinasiBySlug,
} from "@/lib/data/destinasi";

/* =========================================================
   TYPES
========================================================= */

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* =========================================================
   STATIC PARAMS
========================================================= */

export async function generateStaticParams() {
  return destinasiList.map((item) => ({
    slug: item.slug,
  }));
}

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const destinasi =
    getDestinasiBySlug(slug);

  if (!destinasi) {
    return {
      title: "Destinasi Tidak Ditemukan",
      description:
        "Halaman destinasi tidak ditemukan.",
    };
  }

  return {
    metadataBase: new URL(
      "https://yourdomain.com"
    ),

    title: `${destinasi.nama} | Pahawang Wisata`,

    description:
      destinasi.deskripsi,
  };
}

/* =========================================================
   PAGE
========================================================= */

export default async function DestinasiDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const destinasi =
    getDestinasiBySlug(slug);

  if (!destinasi) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--bg-primary)]">
      {/* HERO */}
      <section className="relative h-[90vh] min-h-[700px] overflow-hidden">
        {/* IMAGE */}
        <Image
          src={
            destinasi.gambar ||
            "/images/placeholder.jpg"
          }
          alt={destinasi.nama}
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 z-0 bg-black/50 pointer-events-none" />

        <div className="absolute inset-0 z-0 hero-overlay pointer-events-none" />

        {/* LIGHT */}
        <div className="absolute left-0 top-0 z-0 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-3xl pointer-events-none" />

        {/* CONTENT */}
        <div className="relative z-20 flex h-full items-end">
          <div className="container pb-20">
            {/* BREADCRUMB */}
            <div className="mb-8 flex items-center gap-3 text-sm text-white/70">
              <Link
                href="/"
                className="transition hover:text-white"
              >
                Beranda
              </Link>

              <span>/</span>

              <Link
                href="/destinasi"
                className="transition hover:text-white"
              >
                Destinasi
              </Link>

              <span>/</span>

              <span className="text-white">
                {destinasi.nama}
              </span>
            </div>

            {/* BADGE */}
            <div className="badge-luxury mb-6">
              🌴 Premium Island Destination
            </div>

            {/* TITLE */}
            <h1 className="text-hero max-w-4xl text-white">
              {destinasi.nama}
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-3xl text-xl leading-9 text-white/80">
              {destinasi.deskripsi}
            </p>

            {/* INFO */}
            <div className="mt-10 flex flex-wrap gap-4">
              <div className="glass-dark rounded-2xl px-5 py-4 text-white">
                ⭐ {destinasi.rating} (
                {destinasi.jumlahReview.toLocaleString(
                  "id-ID"
                )}
                )
              </div>

              <div className="glass-dark rounded-2xl px-5 py-4 text-white">
                📍 {destinasi.lokasi}
              </div>

              <div className="glass-dark rounded-2xl px-5 py-4 text-white">
                🕒{" "}
                {
                  destinasi.waktuOperasional
                }
              </div>
            </div>
          </div>
        </div>

        {/* WAVE */}
        <div className="wave-bottom relative z-10">
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
          >
            <path
              fill="var(--bg-primary)"
              d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,80L0,80Z"
            />
          </svg>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section-gap relative">
        <div className="ocean-pattern pointer-events-none absolute inset-0 opacity-50" />

        <div className="container relative z-20">
          <div className="grid gap-14 lg:grid-cols-3">
            {/* LEFT */}
            <div className="lg:col-span-2">
              <div className="card p-10 md:p-14">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--text-muted)]">
                  Explore Paradise
                </p>

                <h2 className="text-section-title mt-4">
                  Tentang Destinasi
                </h2>

                <div className="mt-10 space-y-7 text-lg leading-9 text-[var(--text-secondary)]">
                  {destinasi.deskripsiPanjang
                    .split("\n")
                    .filter(Boolean)
                    .map(
                      (item, idx) => (
                        <p key={idx}>
                          {item}
                        </p>
                      )
                    )}
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="relative z-50">
              <div className="sticky top-28">
                <div className="card relative z-50 p-8">
                  <p className="text-sm uppercase tracking-[0.25em] text-[var(--text-muted)]">
                    Harga Mulai
                  </p>

                  <h3 className="mt-4 text-5xl text-[var(--ocean-500)]">
                    Rp{" "}
                    {destinasi.hargaTiket.toLocaleString(
                      "id-ID"
                    )}
                  </h3>

                  <p className="mt-2 text-[var(--text-muted)]">
                    / orang
                  </p>

                  {/* BUTTON BOOKING */}
                  <Link
                    href={`/booking?destinasi=${destinasi.slug}`}
                    className="
                      btn-premium
                      relative
                      z-50
                      mt-8
                      flex
                      w-full
                      cursor-pointer
                      items-center
                      justify-center
                      rounded-2xl
                      py-5
                      text-lg
                      font-semibold
                      transition
                      hover:scale-[1.02]
                    "
                  >
                    Booking Sekarang
                  </Link>
                </div>
              </div>
            </div>

            {/* END */}
          </div>
        </div>
      </section>
    </main>
  );
}