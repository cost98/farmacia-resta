type SectionIntroProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  className?: string;
};

export default function SectionIntro({
  title,
  subtitle,
  eyebrow,
  className = '',
}: SectionIntroProps) {
  return (
    <div className={`text-center mb-16 ${className}`.trim()}>
      {eyebrow ? (
        <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
      {subtitle ? (
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      ) : null}
    </div>
  );
}
