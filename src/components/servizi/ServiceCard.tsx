import Link from 'next/link';
import {
  Activity,
  Ear,
  FlaskConical,
  Heart,
  Package,
  Scissors,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Syringe,
  TestTube2,
  type LucideIcon,
} from 'lucide-react';
import { Servizio } from '@/types';
import Card from '@/components/ui/Card';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  servizio: Servizio;
}

const categoryIcons: Record<string, LucideIcon> = {
  'Diagnostica Cardiologica': Heart,
  'Diagnostica': Activity,
  'Laboratorio': FlaskConical,
  'Test Diagnostici': TestTube2,
  'Servizi Ambulatoriali': Stethoscope,
  'Dermocosmesi': Sparkles,
  'Noleggio': Package,
  'Servizi': ShoppingBag,
  'Vaccinazioni': Syringe,
};

const slugIcons: Record<string, LucideIcon> = {
  'foratura-lobi': Scissors,
  'controllo-udito': Ear,
};

export default function ServiceCard({ servizio }: ServiceCardProps) {
  const Icon = slugIcons[servizio.slug] ?? categoryIcons[servizio.categoria] ?? Stethoscope;

  return (
    <Link href={`/servizi/${servizio.slug}`}>
      <Card className="group">
        <div className="p-6">
          {/* Icon area */}
          <div className="w-full h-48 bg-gradient-to-br from-green-50 via-emerald-100 to-teal-100 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10"></div>
            <Icon
              size={72}
              className="relative z-10 text-green-600 group-hover:scale-110 transition-transform duration-300"
              strokeWidth={1.5}
            />
          </div>

          <div className="mb-3">
            <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 text-xs font-semibold rounded-full border border-green-100">
              {servizio.categoria}
            </span>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
            {servizio.titolo}
          </h3>

          <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
            {servizio.descrizioneBreve}
          </p>

          {servizio.prenotazioneConsigliata && (
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Prenotazione consigliata
              </span>
            </div>
          )}

          <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700 group-hover:gap-3 transition-all">
            <span>Scopri di più</span>
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
