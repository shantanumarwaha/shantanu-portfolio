type SectionHeadingProps = {
  index: string;
  label: string;
  tone?: "dark" | "light";
};

export default function SectionHeading({
  index,
  label,
  tone = "dark",
}: SectionHeadingProps) {
  const mutedClass = tone === "dark" ? "text-muted" : "text-muted-panel";

  return (
    <div className="mb-14 flex items-baseline gap-4 md:mb-20">
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
