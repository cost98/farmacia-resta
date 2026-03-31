type PageHeaderProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
};

export default function PageHeader({ title, subtitle, eyebrow }: PageHeaderProps) {
  return (
    <section
      className="relative overflow-hidden py-20 text-white"
      style={{ background: 'linear-gradient(135deg, #00746b 0%, #003d38 100%)' }}
    >
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full opacity-10" style={{ background: '#ffffff' }} />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full opacity-10" style={{ background: '#ffffff' }} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {eyebrow && (
          <span className="inline-block px-4 py-1.5 mb-5 rounded-full text-sm font-semibold tracking-wide" style={{ background: 'rgba(255,255,255,0.15)' }}>
            {eyebrow}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 fill-white dark:fill-gray-50">
          <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" />
        </svg>
      </div>
    </section>
  );
}
