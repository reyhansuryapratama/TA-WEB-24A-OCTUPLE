import type { Metadata } from "next";

import BookingForm from "@/components/forms/BookingForms";

import {
  SectionHeader,
} from "@/components/ui/Badge";

// ============================================================
// METADATA
// ============================================================

export const metadata: Metadata =
{
  title:
    "Kontak & Booking — Pahawang Wisata",

  description:
    "Hubungi Pahawang Wisata untuk booking paket wisata dan informasi lainnya.",
};

// ============================================================
// CONTACT INFO
// ============================================================

const contactInfo = [
  {
    label: "WhatsApp",

    value:
      "+62 812-3456-7890",

    href:
      "https://wa.me/6281234567890",

    sublabel:
      "Respons 5 menit",

    color:
      "bg-emerald-100 text-emerald-600",

    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
      </svg>
    ),
  },

  {
    label: "Email",

    value:
      "info@pahawangwisata.com",

    href:
      "mailto:info@pahawangwisata.com",

    sublabel:
      "Balasan 1×24 jam",

    color:
      "bg-blue-100 text-blue-600",

    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />

        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },

  {
    label: "Alamat",

    value:
      "Dermaga Ketapang",

    href:
      "https://maps.google.com",

    sublabel:
      "Bandar Lampung",

    color:
      "bg-rose-100 text-rose-600",

    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />

        <circle
          cx="12"
          cy="10"
          r="3"
        />
      </svg>
    ),
  },

  {
    label:
      "Jam Operasional",

    value:
      "06:00 - 17:00",

    href: "#",

    sublabel:
      "Setiap Hari",

    color:
      "bg-amber-100 text-amber-600",

    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
        />

        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
] as const;

// ============================================================
// PAGE
// ============================================================

export default function KontakPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* HERO */}
      <section className="bg-ocean-gradient text-white pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow="Hubungi Kami"
            title="Kontak"
            titleHighlight="& Booking"
            description="Kami siap membantu merencanakan liburan terbaik Anda ke Pahawang."
            dark
          />
        </div>

        {/* WAVE */}
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

      {/* CONTENT */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* CONTACT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {contactInfo.map(
              (info) => (
                <a
                  key={
                    info.label
                  }
                  href={
                    info.href
                  }
                  target={
                    info.href.startsWith(
                      "http"
                    )
                      ? "_blank"
                      : undefined
                  }
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-5 border border-[var(--border)] shadow-sm hover:shadow-md transition-all"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${info.color}`}
                  >
                    {
                      info.icon
                    }
                  </div>

                  <div className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-bold mb-1">
                    {
                      info.label
                    }
                  </div>

                  <div className="font-semibold text-[var(--ocean-deep)]">
                    {
                      info.value
                    }
                  </div>

                  <div className="text-xs text-[var(--text-muted)] mt-1">
                    {
                      info.sublabel
                    }
                  </div>
                </a>
              )
            )}
          </div>

          {/* MAIN */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* FORM */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[var(--border)] shadow-sm">
                <div className="mb-6">
                  <h2 className="font-display text-2xl font-bold text-[var(--ocean-deep)] mb-2">
                    Form Booking
                  </h2>

                  <p className="text-sm text-[var(--text-secondary)]">
                    Isi form dan tim kami akan menghubungi Anda via WhatsApp.
                  </p>
                </div>

                <BookingForm />
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-2 space-y-5">
              {/* CTA */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                <h3 className="font-semibold text-emerald-800 mb-2">
                  💬 Chat WhatsApp
                </h3>

                <p className="text-sm text-emerald-700 mb-4">
                  Konsultasi langsung dengan admin Pahawang Wisata.
                </p>

                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white py-3 font-semibold text-sm transition-colors"
                >
                  Mulai Chat
                </a>
              </div>

              {/* STEP */}
              <div className="bg-white rounded-2xl border border-[var(--border)] p-5">
                <h3 className="font-semibold text-[var(--ocean-deep)] mb-4">
                  Cara Booking
                </h3>

                <div className="space-y-4">
                  {[
                    "Isi form booking",
                    "Konfirmasi tanggal",
                    "Transfer DP",
                    "Terima e-ticket",
                    "Berangkat wisata",
                  ].map(
                    (
                      text,
                      index
                    ) => (
                      <div
                        key={
                          text
                        }
                        className="flex gap-3"
                      >
                        <div className="w-7 h-7 rounded-full bg-[var(--ocean-deep)] text-white text-xs flex items-center justify-center shrink-0">
                          {index + 1}
                        </div>

                        <p className="text-sm text-[var(--text-secondary)]">
                          {text}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}