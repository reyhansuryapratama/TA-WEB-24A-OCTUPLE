"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Utility helper
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Destinasi", href: "/destinasi" },
  { label: "Paket Wisata", href: "/paket" },
  { label: "Galeri", href: "/galeri" },
  { label: "Tentang", href: "/tentang" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isHome = pathname === "/";
  const isTransparent = isHome && !scrolled && !isOpen;

  return (
    <>
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isTransparent
            ? "bg-transparent"
            : "bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
        )}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-cyan-500 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />

                <div className="absolute inset-0 bg-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">P</span>
                </div>
              </div>

              <div className="leading-tight">
                <span className="block text-white font-bold text-lg leading-none">
                  Pahawang
                </span>

                <span className="block text-cyan-300 text-xs tracking-widest uppercase font-medium">
                  Wisata
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active =
                  pathname === link.href ||
                  (link.href !== "/" &&
                    pathname.startsWith(link.href));

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                        active
                          ? "text-cyan-300 bg-white/10"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      )}
                    >
                      {link.label}

                      {active && (
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Right Side */}
            <div className="flex items-center gap-3">

              {/* CTA */}
              <Link
                href="/kontak"
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500 text-white text-sm font-semibold rounded-full hover:scale-105 transition-all duration-200"
              >
                Booking Sekarang
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Toggle Menu"
              >
                <span
                  className={cn(
                    "w-5 h-0.5 bg-white rounded-full transition-all duration-300",
                    isOpen && "rotate-45 translate-y-2"
                  )}
                />

                <span
                  className={cn(
                    "w-5 h-0.5 bg-white rounded-full transition-all duration-300",
                    isOpen && "opacity-0 scale-x-0"
                  )}
                />

                <span
                  className={cn(
                    "w-5 h-0.5 bg-white rounded-full transition-all duration-300",
                    isOpen && "-rotate-45 -translate-y-2"
                  )}
                />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        style={{
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(6px)",
        }}
      />

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-72 lg:hidden transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{
          background: "#0f172a",
        }}
      >
        <div className="flex flex-col h-full pt-20 pb-8 px-6">

          {/* Mobile Menu */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {navLinks.map((link) => {
                const active =
                  pathname === link.href ||
                  (link.href !== "/" &&
                    pathname.startsWith(link.href));

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-2xl transition-all",
                        active
                          ? "bg-cyan-500/20 text-cyan-300"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="border-t border-white/10 pt-6">
            <Link
              href="/kontak"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full py-3 rounded-2xl bg-cyan-500 text-white font-semibold"
            >
              Booking Sekarang
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}