import { ArrowRight } from 'lucide-react';
import DirectionsLink from '@/components/home/DirectionsLink';
import SectionIntro from '@/components/ui/SectionIntro';

export default function ChiSiamoTeaser() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionIntro
            title="Chi Siamo"
            subtitle="Dal 1970 al servizio della comunita di Opera"
            className="mb-8"
          />
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            La Farmacia Resta rappresenta da decenni un punto di riferimento per
            la comunità di Opera, intrecciando la propria storia con quella del
            territorio e delle famiglie che lo abitano. Fondata con l'intento di
            offrire un servizio sanitario affidabile e vicino ai cittadini, la
            farmacia ha saputo evolversi nel corso degli anni mantenendo intatti i
            valori che ne hanno guidato i primi passi: <strong className="text-green-600">professionalità, ascolto e
            dedizione</strong> al benessere della persona.
          </p>
          <DirectionsLink
            disabled
            label="Scopri la nostra storia"
            icon={ArrowRight}
            className="text-lg"
          />
        </div>
      </div>
    </section>
  );
}
