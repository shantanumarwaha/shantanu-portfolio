type SectionHeadingProps = {
  index: string;
  label: string;
  tone?: "dark" | "light";
  compact?: boolean;
};

export default function SectionHeading({
  index,
  label,
  tone = "dark",
  compact = false,
}: SectionHeadingProps) {
  const mutedClass = tone === "dark" ? "text-muted" : "text-muted-panel";

  return (
    <div
      className={`flex items-baseline gap-4 ${compact ? "mb-6 md:mb-8" : "mb-14 md:mb-20"}`}
    >
      <span className="font-display text-3xl text-accent md:text-4xl">
        {index}
      </span>
      <span
        className={`text-xs tracking-[0.25em] uppercase md:text-sm ${mutedClass}`}
      >
        {label}
      </span>
    </div>
  );
}
