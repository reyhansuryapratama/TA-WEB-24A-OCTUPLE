// ============================================================
// PAHAWANG WISATA — Badge Component
// ============================================================

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

// ============================================================
// BADGE TYPES
// ============================================================

export type BadgeVariant =
  | "ocean"
  | "teal"
  | "turquoise"
  | "coral"
  | "sand"
  | "gold"
  | "success"
  | "outline";

// ============================================================
// BADGE PROPS
// ============================================================

interface BadgeProps {
  children: ReactNode;

  variant?: BadgeVariant;

  size?: "sm" | "md";

  className?: string;

  dot?: boolean;
}

// ============================================================
// BADGE VARIANTS
// ============================================================

const badgeVariants: Record<
  BadgeVariant,
  string
> = {
  ocean:
    "bg-sky-100 text-sky-700",

  teal:
    "bg-teal-100 text-teal-700",

  turquoise:
    "bg-cyan-100 text-cyan-700",

  coral:
    "bg-orange-100 text-orange-700",

  sand:
    "bg-amber-100 text-amber-800",

  gold:
    "bg-yellow-100 text-yellow-700",

  success:
    "bg-emerald-100 text-emerald-700",

  outline:
    "border border-current bg-transparent text-[var(--ocean-600)]",
};

// ============================================================
// BADGE COMPONENT
// ============================================================

export default function Badge({
  children,

  variant = "ocean",

  size = "md",

  className,

  dot = false,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-medium transition-colors",

        size === "sm"
          ? "px-2.5 py-1 text-xs"
          : "px-3 py-1.5 text-sm",

        badgeVariants[variant],

        className
      )}
    >
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current" />
      )}

      {children}
    </span>
  );
}

// ============================================================
// SECTION HEADER
// ============================================================

interface SectionHeaderProps {
  eyebrow?: string;

  title: string;

  titleHighlight?: string;

  description?: string;

  align?:
    | "left"
    | "center"
    | "right";

  dark?: boolean;

  className?: string;
}

// ============================================================
// SECTION HEADER COMPONENT
// ============================================================

export function SectionHeader({
  eyebrow,

  title,

  titleHighlight,

  description,

  align = "center",

  dark = false,

  className,
}: SectionHeaderProps) {
  const alignClass = {
    left:
      "items-start text-left",

    center:
      "items-center text-center",

    right:
      "items-end text-right",
  }[align];

  return (
    <div
      className={cn(
        "flex flex-col gap-4",

        alignClass,

        className
      )}
    >
      {/* EYEBROW */}
      {eyebrow && (
        <div className="flex items-center gap-2">
          {align !==
            "left" && (
            <div
              className={cn(
                "h-px w-8",

                dark
                  ? "bg-cyan-400"
                  : "bg-cyan-500"
              )}
            />
          )}

          <span
            className={cn(
              "text-xs font-semibold uppercase tracking-[0.2em]",

              dark
                ? "text-cyan-300"
                : "text-cyan-600"
            )}
          >
            {eyebrow}
          </span>

          <div
            className={cn(
              "h-px w-8",

              dark
                ? "bg-cyan-400"
                : "bg-cyan-500"
            )}
          />
        </div>
      )}

      {/* TITLE */}
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl font-bold",

          dark
            ? "text-white"
            : "text-[var(--ocean-900)]"
        )}
      >
        {titleHighlight ? (
          <>
            {title}{" "}

            <span className="text-cyan-500">
              {titleHighlight}
            </span>
          </>
        ) : (
          title
        )}
      </h2>

      {/* DESCRIPTION */}
      {description && (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed",

            align ===
              "center" &&
              "max-w-2xl",

            dark
              ? "text-white/70"
              : "text-gray-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

// ============================================================
// KATEGORI LABEL
// ============================================================

export const kategoriLabel: Record<
  string,
  {
    label: string;
    color: BadgeVariant;
  }
> = {
  snorkeling: {
    label: "Snorkeling",
    color: "turquoise",
  },

  diving: {
    label: "Diving",
    color: "ocean",
  },

  keluarga: {
    label: "Keluarga",
    color: "success",
  },

  premium: {
    label: "Premium",
    color: "gold",
  },

  adventure: {
    label: "Adventure",
    color: "coral",
  },
};