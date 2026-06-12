"use client";

// ============================================================
// PAHAWANG WISATA — Atomic UI: Button
// ============================================================

import React from "react";
import Link from "next/link";

/* ============================================================
   Utility: cn()
============================================================ */
function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter((item) => Boolean(item)).join(" ");
}

/* ============================================================
   Types
============================================================ */
type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";

type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

/* ============================================================
   Variant Classes
============================================================ */
const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-[var(--teal-500)] to-[var(--ocean-400)] text-white hover:shadow-lg hover:shadow-teal-500/30 hover:-translate-y-0.5 active:translate-y-0",

  secondary:
    "bg-[var(--ocean-800)] text-white border border-white/15 hover:bg-[var(--ocean-700)] hover:-translate-y-0.5",

  outline:
    "bg-transparent text-[var(--ocean-600)] border-2 border-[var(--ocean-600)] hover:bg-[var(--ocean-600)] hover:text-white hover:-translate-y-0.5",

  ghost:
    "bg-transparent text-[var(--ocean-600)] hover:bg-[var(--ocean-50)] hover:text-[var(--ocean-700)]",

  danger:
    "bg-red-500 text-white hover:bg-red-600 hover:-translate-y-0.5",
};

/* ============================================================
   Size Classes
============================================================ */
const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-2.5 text-sm gap-2",
  lg: "px-7 py-3 text-base gap-2",
  xl: "px-8 py-4 text-lg gap-2.5",
};

/* ============================================================
   Button Component
============================================================ */
export default function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  loading,
  icon,
  iconPosition = "left",
  fullWidth,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--teal-500)]",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    (disabled || loading) && "opacity-60 pointer-events-none",
    className
  );

  const content = (
    <>
      {/* Loading Spinner */}
      {loading && (
        <svg
          className="animate-spin w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />

          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}

      {/* Left Icon */}
      {!loading && icon && iconPosition === "left" && icon}

      {/* Text */}
      {children}

      {/* Right Icon */}
      {!loading && icon && iconPosition === "right" && icon}
    </>
  );

  /* ============================================================
     Link Button
  ============================================================ */
  if (href) {
    return external ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  /* ============================================================
     Native Button
  ============================================================ */
  return (
    <button
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
}