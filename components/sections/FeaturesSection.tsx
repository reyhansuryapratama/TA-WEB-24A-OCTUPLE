"use client";

import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import SectionHeader from "@/components/ui/SectionHeader";


interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bg: string;
}

const features: Feature[] = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: "Lokasi Strategis",
    description: "2 jam dari Bandar Lampung via jalur darat + kapal. Mudah diakses dari berbagai kota di Sumatera dan Jawa.",
    color: "from-blue-500 to-[var(--ocean-bright)]",
    bg: "bg-blue-50",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: "Paket Lengkap",
    description: "Mulai dari One Day Trip hingga Paket Premium Diving. Semua kebutuhan wisata sudah kami siapkan.",
    color: "from-[var(--turquoise)] to-teal-400",
    bg: "bg-teal-50",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Guide Berpengalaman",
    description: "Tim guide lokal bersertifikat yang ramah, informatif, dan menjaga keselamatan seluruh wisatawan.",
    color: "from-violet-500 to-purple-400",
    bg: "bg-violet-50",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
        <line x1="4" y1="22" x2="4" y2="15"/>
      </svg>
    ),
    title: "Ramah Lingkungan",
    description: "Berkomitmen pada wisata berkelanjutan. Setiap kunjungan berkontribusi untuk konservasi terumbu karang.",
    color: "from-emerald-500 to-green-400",
    bg: "bg-emerald-50",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: "Dokumentasi Profesional",
    description: "Tim fotografer bawah air profesional yang siap mengabadikan momen terbaik perjalanan Anda.",
    color: "from-[var(--coral)] to-orange-400",
    bg: "bg-orange-50",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: "Harga Transparan",
    description: "Tidak ada biaya tersembunyi. Semua harga dan ketentuan paket tertera jelas sejak awal pemesanan.",
    color: "from-amber-500 to-yellow-400",
    bg: "bg-amber-50",
  },
];

export default function FeaturesSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section className="section-py bg-[var(--sand)]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionHeader
            eyebrow="Mengapa Pahawang Wisata"
            title="Pengalaman Wisata"
            titleHighlight="Tak Terlupakan"
            description="Kami bukan sekadar agen perjalanan — kami adalah pintu menuju petualangan bahari yang aman, nyaman, dan berkesan."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-6 shadow-[var(--shadow-sm)] border border-[var(--border)] 
                          card-hover group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-5 
                            group-hover:scale-110 transition-transform duration-300`}
              >
                <div className={`bg-gradient-to-br ${feature.color} bg-clip-text text-transparent [&>svg]:stroke-current`}
                  style={{ color: "transparent" }}>
                  <div className={`bg-gradient-to-br ${feature.color} text-transparent`}
                    style={{
                      background: `linear-gradient(135deg, var(--ocean-bright), var(--turquoise))`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}>
                  </div>
                  <div className="text-[var(--ocean-mid)] group-hover:text-[var(--ocean-bright)] transition-colors">
                    {feature.icon}
                  </div>
                </div>
              </div>

              <h3 className="font-display font-semibold text-[var(--ocean-deep)] text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}