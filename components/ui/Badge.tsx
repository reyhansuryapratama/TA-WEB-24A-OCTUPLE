// ============================================================
// PAHAWANG WISATA — Badge Component
// ============================================================

import { cn } from "@/lib/utils";

type BadgeVariant = "ocean" | "teal" | "coral" | "sand" | "gold" | "success" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: "sm" | "md";
  className?: string;
  dot?: boolean;
}

const badgeVariants: Record<BadgeVariant, string> = {
  ocean: "bg-[var(--ocean-100)] text-[var(--ocean-700)]",
  teal: "bg-[var(--teal-400)]/15 text-[var(--teal-600)]",
  coral: "bg-orange-100 text-orange-700",
  sand: "bg-[var(--sand-100)] text-[var(--sand-700)]",
  gold: "bg-amber-100 text-amber-700",
  success: "bg-emerald-100 text-emerald-700",
  outline: "bg-transparent border border-current text-[var(--ocean-500)]",
};

export function Badge({ children, variant = "ocean", size = "md", className, dot }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium rounded-full",
        size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-xs",
        badgeVariants[variant],
        className
      )}
    >
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
      {children}
    </span>
  );
}

// ============================================================
// PAHAWANG WISATA — SectionHeader Component
// ============================================================

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center" | "right";
  dark?: boolean;
  className?: string;
}

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
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align];

  return (
    <div className={cn("flex flex-col gap-4", alignClass, className)}>
      {eyebrow && (
        <div className="flex items-center gap-2">
          {align !== "left" && <div className={cn("h-px w-8", dark ? "bg-[var(--teal-400)]" : "bg-[var(--teal-500)]")} />}
          <span
            className={cn(
              "text-xs font-semibold tracking-[0.2em] uppercase font-body",
              dark ? "text-[var(--teal-300)]" : "text-[var(--teal-600)]"
            )}
          >
            {eyebrow}
          </span>
          <div className={cn("h-px w-8", dark ? "bg-[var(--teal-400)]" : "bg-[var(--teal-500)]")} />
        </div>
      )}

      <h2 className={cn("text-section-title font-display font-bold", dark ? "text-white" : "text-[var(--ocean-900)]")}>
        {titleHighlight ? (
          <>
            {title}{" "}
            <span className={dark ? "text-gradient-ocean" : "text-gradient-ocean"}>
              {titleHighlight}
            </span>
          </>
        ) : (
          title
        )}
      </h2>

      {description && (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed",
            align === "center" && "max-w-2xl",
            dark ? "text-white/65" : "text-[var(--color-text-muted)]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}