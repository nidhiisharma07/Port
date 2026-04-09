type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-3xl md:mb-14">
      {eyebrow && (
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-accent/80">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance text-[1.95rem] font-semibold tracking-[-0.02em] text-zinc-900 dark:text-zinc-50 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
