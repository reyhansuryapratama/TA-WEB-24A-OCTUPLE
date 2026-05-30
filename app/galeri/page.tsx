import { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Galeri Foto Wisata Pahawang",
  description:
    "Koleksi foto dan video keindahan Pulau Pahawang — terumbu karang, snorkeling, sunset, kuliner seafood, dan momen tak terlupakan wisatawan kami.",
};

const galeriItems = [
  { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80", alt: "Pantai Pahawang", kategori: "pantai", judul: "Keindahan Pantai Pahawang", lokasi: "Pulau Pahawang Besar" },
  { src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80", alt: "Snorkeling", kategori: "snorkeling", judul: "Snorkeling Terumbu Karang", lokasi: "Kelagian" },
  { src: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=800&q=80", alt: "Bawah Laut", kategori: "snorkeling", judul: "Biota Bawah Laut", lokasi: "Pahawang Kecil" },
  { src: "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=800&q=80", alt: "Pasir Timbul", kategori: "pantai", judul: "Pasir Timbul Ikonik", lokasi: "Pasir Timbul" },
  { src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80", alt: "Pulau Mahitam", kategori: "pantai", judul: "Pulau Mahitam", lokasi: "Mahitam" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", alt: "Sunrise Pahawang", kategori: "sunset", judul: "Golden Hour di Pahawang", lokasi: "Pahawang Besar" },
  { src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80", alt: "Diving", kategori: "snorkeling", judul: "Diving Adventure", lokasi: "Kelagian" },
  { src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80", alt: "Pantai 2", kategori: "pantai", judul: "Sore Hari di Pantai", lokasi: "Pahawang Besar" },
  { src: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800&q=80", alt: "Sunset", kategori: "sunset", judul: "Sunset Spektakuler", lokasi: "Mahitam" },
  { src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80", alt: "Panorama", kategori: "pantai", judul: "Panorama Dari Atas", lokasi: "Pahawang Besar" },
  { src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80", alt: "Laut Biru", kategori: "pantai", judul: "Laut Biru Jernih", lokasi: "Pahawang Kecil" },
  { src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80", alt: "Alam Hijau", kategori: "pantai", judul: "Keindahan Alam Pahawang", lokasi: "Pulau Mahitam" },
];

const kategoriFilter = [
  { value: "all", label: "Semua" },
  { value: "pantai", label: "Pantai & Pulau" },
  { value: "snorkeling", label: "Snorkeling & Diving" },
  { value: "sunset", label: "Sunset & Sunrise" },
];

export default function GaleriPage({
  searchParams,
}: {
  searchParams: { kategori?: string };
}) {
  const selectedKategori = searchParams.kategori ?? "all";
  const filtered =
    selectedKategori === "all"
      ? galeriItems
      : galeriItems.filter((g) => g.kategori === selectedKategori);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <section className="bg-ocean-gradient text-white pt-32 pb-20 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-[var(--turquoise)]" />
            <span className="text-[var(--turquoise-light)] text-sm font-bold tracking-[0.2em] uppercase">Foto & Video</span>
            <span className="h-px w-10 bg-[var(--turquoise)]" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Galeri Pahawang
          </h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Ribuan momen indah yang berhasil diabadikan oleh wisatawan kami. Setiap foto menceritakan pengalaman nyata.
          </p>
        </div>
        <div className="wave-bottom">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none"><path d="M0,30 C360,60 720,0 1080,30 C1260,45 1440,30 1440,30 L1440,60 L0,60 Z" fill="var(--bg-primary)" /></svg>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-16 md:top-20 z-30 bg-[var(--bg-primary)] border-b border-[var(--border)] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4">
            {kategoriFilter.map((kat) => (
              <a
                key={kat.value}
                href={kat.value === "all" ? "/galeri" : `/galeri?kategori=${kat.value}`}
                className={`shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all
                  ${selectedKategori === kat.value
                    ? "bg-[var(--ocean-deep)] text-white"
                    : "bg-white text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--ocean-bright)]"
                  }`}
              >
                {kat.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-[var(--text-muted)] mb-6">
            {filtered.length} foto ditemukan
          </p>

          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filtered.map((item, idx) => (
              <div key={idx} className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-zoom-in img-zoom-container">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover"
                  loading="lazy"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[var(--ocean-deep)]/0 group-hover:bg-[var(--ocean-deep)]/60 transition-all duration-300 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100">
                  <h3 className="text-white font-semibold text-sm">{item.judul}</h3>
                  <p className="text-blue-200 text-xs flex items-center gap-1 mt-1">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    {item.lokasi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Photo CTA */}
      <section className="py-14 bg-[var(--sand)]/40">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="text-4xl mb-4">📸</div>
          <h2 className="font-display text-2xl text-[var(--ocean-deep)] font-bold mb-3">
            Punya Foto Pahawang?
          </h2>
          <p className="text-[var(--text-secondary)] mb-6">
            Bagikan foto wisata Pahawang terbaikmu! Foto-foto terpilih akan kami tampilkan di galeri dan media sosial kami.
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo! Saya ingin mengirimkan foto wisata Pahawang untuk galeri."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--ocean-deep)] text-white rounded-xl px-6 py-3 font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            Kirim Foto via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}