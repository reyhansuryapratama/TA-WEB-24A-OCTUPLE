// ============================================================
// PAHAWANG WISATA — Halaman Home
// ============================================================

import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import DestinasiSection from "@/components/sections/DestinasiSection";
import PaketSection from "@/components/sections/PaketSection";
import GaleriSection from "@/components/sections/GaleriSection";
import TestimoniSection from "@/components/sections/TestimoniSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Pahawang Wisata — Surga Bahari Lampung",
  description:
    "Jelajahi keindahan Kepulauan Pahawang, Lampung. Snorkeling, diving, island hopping dengan pemandu profesional. Pesan paket wisata sekarang!",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <DestinasiSection />
      <PaketSection />
      <GaleriSection />
      <TestimoniSection />
      <CTASection />
    </>
  );
}