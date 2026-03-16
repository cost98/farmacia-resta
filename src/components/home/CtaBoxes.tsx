import Link from 'next/link';
import { Stethoscope, Instagram, ShoppingBag } from 'lucide-react';
import Card from '@/components/ui/Card';
import SectionIntro from '@/components/ui/SectionIntro';
import { social } from '@/lib/data/contatti';

const ctaBoxes = [
  {
    title: 'Servizi su Misura',
    description: 'Scopri tutti i nostri servizi diagnostici e ambulatoriali',
    icon: Stethoscope,
    href: '/servizi',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'Seguici sui Social',
    description: 'Rimani informato su iniziative e promozioni',
    icon: Instagram,
    href: social.instagram,
    external: true,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
  },
  {
    title: 'Prenota e Ritira',
    description: 'Prenota online e ritira direttamente in farmacia',
    icon: ShoppingBag,
    href: '/contatti',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
];

export default function CtaBoxes() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionIntro
          title="Cosa Puoi Fare"
          subtitle="Scopri tutti i modi in cui possiamo aiutarti"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ctaBoxes.map((box, index) => {
            const Icon = box.icon;
            const content = (
              <Card hover className="h-full group">
                <div className="p-8 text-center h-full flex flex-col relative overflow-hidden">
                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-gray-100 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div
                    className={`${box.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className={box.color} size={40} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {box.title}
                  </h3>
                  <p className="text-gray-700 mb-6 flex-grow leading-relaxed text-base">
                    {box.description}
                  </p>
                  <span className={`${box.color} font-bold flex items-center justify-center gap-2 group-hover:gap-3 transition-all text-lg`}>
                    Scopri di più 
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </Card>
            );

            if (box.external) {
              return (
                <a
                  key={index}
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
              <Link key={index} href={box.href}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
