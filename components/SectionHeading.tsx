type SectionHeadingProps = {
  label: string;
  tone?: "dark" | "light";
  compact?: boolean;
};

export default function SectionHeading({
  label,
  tone = "dark",
  compact = false,
}: SectionHeadingProps) {
  const mutedClass = tone === "dark" ? "text-muted" : "text-muted-panel";

  return (
    <div className={compact ? "mb-6 md:mb-8" : "mb-14 md:mb-20"}>
      <span
        className={`text-xs tracking-[0.25em] uppercase md:text-sm ${mutedClass}`}
      >
        {label}
      </span>
    </div>
  );
}
