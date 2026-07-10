import Link from 'next/link';
import { ArrowUpRight, Instagram, ShoppingBag, Stethoscope } from 'lucide-react';
import Card from '@/components/ui/Card';
import SectionIntro from '@/components/ui/SectionIntro';
import { social } from '@/lib/data/contatti';

type CtaBox = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; size?: number; strokeWidth?: number }>;
  href: string;
  ctaLabel: string;
  color: string;
  bgColor: string;
  ringColor: string;
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
    color: 'text-green-700',
    bgColor: 'bg-green-50',
    ringColor: 'ring-green-200',
  },
  {
    id: 'talk-pharmacist',
    title: 'Parla con il Farmacista',
    description: 'Hai dubbi su farmaci o terapie? Ti richiamiamo noi',
    icon: ShoppingBag,
    href: '/contatti',
    ctaLabel: 'Contattaci',
    color: 'text-green-700',
    bgColor: 'bg-emerald-50',
    ringColor: 'ring-emerald-200',
  },
  {
    id: 'instagram-offers',
    title: 'Offerte e Novita',
    description: 'Promozioni, giornate prevenzione e aggiornamenti utili',
    icon: Instagram,
    href: social.instagram,
    external: true,
    ctaLabel: 'Seguici su Instagram',
    color: 'text-green-700',
    bgColor: 'bg-green-50',
    ringColor: 'ring-green-200',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {ctaBoxes.map((box) => {
            const Icon = box.icon;
            const content = (
              <Card hover className="group h-full border-green-100/80">
                <div className="relative h-full overflow-hidden p-6">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-linear-to-br from-green-100/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="mb-5">
                    <div className={`${box.bgColor} ring-1 ${box.ringColor} flex h-12 w-12 items-center justify-center rounded-xl shadow-sm`}>
                      <Icon className={box.color} size={24} strokeWidth={2.4} />
                    </div>
                  </div>

                  <h3 className="text-xl font-black leading-tight text-slate-900">{box.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{box.description}</p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-green-700 transition-all duration-300 group-hover:gap-3">
                    {box.ctaLabel}
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </Card>
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
