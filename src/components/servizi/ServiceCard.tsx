import Link from 'next/link';
import { Servizio } from '@/types';
import Card from '@/components/ui/Card';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  servizio: Servizio;
}

export default function ServiceCard({ servizio }: ServiceCardProps) {
  return (
    <Link href={`/servizi/${servizio.slug}`} className="h-full">
      <Card className="group h-full">
        <div className="p-6 flex flex-col h-full">
          {/* Placeholder immagine con gradiente più ricco */}
          <div className="w-full h-48 bg-gradient-to-br from-green-50 via-emerald-100 to-teal-100 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10"></div>
            <span className="text-6xl relative z-10 group-hover:scale-110 transition-transform duration-300">🏥</span>
          </div>

          <div className="mb-3">
            <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 text-xs font-semibold rounded-full border border-green-100">
              {servizio.categoria}
            </span>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
            {servizio.titolo}
          </h3>

          <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed flex-grow">
            {servizio.descrizioneBreve}
          </p>

          <div className="mt-auto">
            <div className="mb-4 h-7">
              {servizio.prenotazioneConsigliata ? (
                <span className="text-xs text-gray-400">· Prenotazione consigliata</span>
              ) : null}
            </div>

            <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700 group-hover:gap-3 transition-all">
              <span>Scopri di più</span>
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
