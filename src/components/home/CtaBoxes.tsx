import Link from 'next/link';
import { ArrowUpRight, Instagram, ShoppingBag, Stethoscope, type LucideIcon } from 'lucide-react';
import SectionIntro from '@/components/ui/SectionIntro';
import { social } from '@/lib/data/contatti';

type CtaBox = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  ctaLabel: string;
  external?: boolean;
};

const ctaBoxes: CtaBox[] = [
  {
    id: 'book-service',
    title: 'Prenota un Servizio',
    description: 'Holter, autoanalisi e altri controlli direttamente in farmacia',
    icon: Stethoscope,
    href: '/servizi',
    ctaLabel: 'Prenota ora',
  },
  {
    id: 'talk-pharmacist',
    title: 'Parla con il Farmacista',
    description: 'Hai dubbi su farmaci o terapie? Ti richiamiamo noi',
    icon: ShoppingBag,
    href: '/contatti',
    ctaLabel: 'Contattaci',
  },
  {
    id: 'instagram-offers',
    title: 'Offerte e Novita',
    description: 'Promozioni, giornate prevenzione e aggiornamenti utili',
    icon: Instagram,
    href: social.instagram,
    external: true,
    ctaLabel: 'Seguici su Instagram',
  },
];

export default function CtaBoxes() {
  return (
    <section className="relative overflow-hidden py-20 bg-linear-to-b from-white to-gray-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-linear-to-b from-green-50/80 to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-20 h-52 w-52 rounded-full bg-green-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-6 h-64 w-64 rounded-full bg-emerald-200/25 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Servizi"
          title="Come possiamo aiutarti oggi"
          highlight="aiutarti"
          handwritten
          subtitle="Tre percorsi semplici, progettati per farti risparmiare tempo"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ctaBoxes.map((box) => {
            const Icon = box.icon;
            const content = (
              <div className="group relative h-full overflow-hidden rounded-2xl bg-white border-2 border-gray-100 transition-all duration-300 hover:border-green-200 hover:shadow-xl hover:-translate-y-1">
                {/* Background gradient decorativo */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-emerald-50/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative p-8">
                  {/* Icona grande */}
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl bg-green-500/20 blur-xl transition-all duration-300 group-hover:bg-green-500/30" />
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <Icon className="text-white" size={36} strokeWidth={2} />
                      </div>
                    </div>
                  </div>

                  {/* Contenuto */}
                  <div className="text-center">
                    <h3 className="text-2xl font-black text-slate-900 mb-3">{box.title}</h3>
                    <p className="text-base text-slate-600 leading-relaxed mb-6">{box.description}</p>
                    
                    {/* CTA */}
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-700 text-white font-bold text-sm transition-all duration-300 group-hover:bg-green-600 group-hover:gap-3 group-hover:shadow-lg">
                      {box.ctaLabel}
                      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:rotate-45" />
                    </div>
                  </div>
                </div>
              </div>
            );

            if (box.external) {
              return (
                <a
                  key={box.id}
                  href={box.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              );
            }

            return (
              <Link key={box.id} href={box.href} className="block">
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
