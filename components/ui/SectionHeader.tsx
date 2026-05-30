interface Props {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  description,
  align = "left",
  dark = false,
}: Props) {
  return (
    <div
      className={
        align === "center"
          ? "text-center mx-auto"
          : "text-left"
      }
    >
      {eyebrow && (
        <p
          className={`uppercase tracking-[0.2em] text-sm font-semibold mb-4 ${
            dark
              ? "text-white/70"
              : "text-sky-600"
          }`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`font-display text-4xl md:text-5xl leading-tight ${
          dark
            ? "text-white"
            : "text-[var(--ocean-deep)]"
        }`}
      >
        {title}{" "}

        {titleHighlight && (
          <span className="text-gradient-ocean">
            {titleHighlight}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={`mt-5 max-w-2xl text-lg leading-relaxed ${
            dark
              ? "text-white/75"
              : "text-[var(--text-secondary)]"
          } ${
            align === "center"
              ? "mx-auto"
              : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}