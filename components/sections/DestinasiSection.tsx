"use client";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  description,
  light = false,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`
        relative
        ${align === "center" ? "mx-auto text-center" : "text-left"}
        ${className}
      `}
    >
      {/* Eyebrow */}
      {eyebrow && (
        <div
          className={`
            mb-5 flex items-center gap-3
            ${align === "center" ? "justify-center" : "justify-start"}
          `}
        >
          <span
            className={`
              h-px w-10 rounded-full
              ${
                light
                  ? "bg-white/40"
                  : "bg-[var(--ocean-bright)]"
              }
            `}
          />

          <span
            className={`
              text-[11px] sm:text-xs
              uppercase tracking-[0.28em]
              font-semibold
              ${
                light
                  ? "text-white/70"
                  : "text-[var(--ocean-bright)]"
              }
            `}
          >
            {eyebrow}
          </span>
        </div>
      )}

      {/* Title */}
      <h2
        className={`
          text-display-lg
          leading-[1.05]
          font-bold
          tracking-[-0.03em]
          max-w-3xl
          ${
            align === "center" ? "mx-auto" : ""
          }
          ${
            light
              ? "text-white"
              : "text-[var(--text-primary)]"
          }
        `}
      >
        {title}{" "}

        {titleHighlight && (
          <span className="text-gradient-ocean relative inline-block">
            {titleHighlight}

            {/* Glow */}
            <span
              className="
                absolute
                inset-x-0
                -bottom-2
                h-4
                rounded-full
                bg-cyan-300/20
                blur-xl
                -z-10
              "
            />
          </span>
        )}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={`
            mt-6
            text-[15px]
            sm:text-base
            leading-8
            max-w-2xl
            font-normal
            ${
              align === "center"
                ? "mx-auto"
                : ""
            }
            ${
              light
                ? "text-white/75"
                : "text-[var(--text-secondary)]"
            }
          `}
        >
          {description}
        </p>
      )}
    </div>
  );
}