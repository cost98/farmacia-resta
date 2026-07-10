type SectionIntroProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  highlight?: string;
  handwritten?: boolean;
  className?: string;
};

export default function SectionIntro({
  title,
  subtitle,
  eyebrow,
  highlight,
  handwritten = false,
  className = '',
}: SectionIntroProps) {
  const canHighlight = Boolean(highlight && title.includes(highlight));
  const titleParts = canHighlight && highlight
    ? title.split(highlight)
    : [title, ''];

  return (
    <div className={`relative z-10 text-center mb-14 md:mb-16 ${className}`.trim()}>
      {eyebrow ? (
        <span className="mb-6 inline-block text-xs md:text-sm font-bold uppercase tracking-[0.16em] text-green-700">
          {eyebrow}
        </span>
      ) : null}

      <h2 className="mx-auto max-w-4xl text-4xl md:text-6xl font-black leading-[0.96] text-slate-900">
        {canHighlight && highlight ? (
          <>
            <span className="section-title-base">{titleParts[0]}</span>
            <span className="inline-block px-1">
              <span className={handwritten ? 'handwritten-highlight handwritten-ink' : ''}>{highlight}</span>
            </span>
            <span className="section-title-base">{titleParts[1]}</span>
          </>
        ) : (
          title
        )}
      </h2>

      {subtitle ? (
        <p className="mt-6 mx-auto max-w-2xl text-lg md:text-xl leading-relaxed text-slate-700 font-medium">{subtitle}</p>
      ) : null}
    </div>
  );
}
