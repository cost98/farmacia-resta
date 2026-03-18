import { Metadata } from 'next';
import { Heart, Users, Award, Clock } from 'lucide-react';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Chi Siamo | Farmacia Resta - Opera (MI)',
  description:
    'La storia della Farmacia Resta: dal 1970 al servizio della comunità di Opera con professionalità, ascolto e dedizione al benessere della persona.',
};

import Link from 'next/link';

export default function ChiSiamoPage() {
  const valori = [
    {
      icon: Heart,
      title: 'Dedizione',
      description:
        'Ogni giorno ci dedichiamo con passione al benessere dei nostri clienti',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: Users,
      title: 'Ascolto',
      description:
        'Ascoltiamo le esigenze di ogni persona con attenzione e professionalità',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Award,
      title: 'Professionalità',
      description:
        'Offriamo servizi di alta qualità con competenza e professionalità',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Clock,
      title: 'Esperienza',
      description:
        'Oltre 50 anni di esperienza al servizio della comunità di Opera',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Chi Siamo</h1>
          <p className="text-xl text-green-100 leading-relaxed">
            La storia della Farmacia Resta è la storia della nostra comunità
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              La Farmacia Resta rappresenta da decenni un punto di riferimento
              per la comunità di Opera, intrecciando la propria storia con
              quella del territorio e delle famiglie che lo abitano. Fondata con
              l&apos;intento di offrire un servizio sanitario affidabile e vicino ai
              cittadini, la farmacia ha saputo evolversi nel corso degli anni
              mantenendo intatti i valori che ne hanno guidato i primi passi:{' '}
              <strong>professionalità, ascolto e dedizione</strong> al benessere
              della persona.
            </p>

            <p>
              Nel tempo, la Farmacia Resta ha ampliato i propri servizi. Dalla
              dispensazione tradizionale dei medicinali si è sviluppata verso
              un&apos;offerta sempre più completa, introducendo{' '}
              <strong>reparti specializzati</strong>,{' '}
              <strong>consulenze personalizzate</strong> e{' '}
              <strong>tecnologie innovative</strong> per la salute.
            </p>

            <p>
              L&apos;attenzione al rapporto umano, da sempre elemento distintivo
              della farmacia, si è mantenuta centrale nonostante i cambiamenti.
              Generazioni di cittadini hanno trovato nella Farmacia Resta un
              luogo affidabile, dove essere accolti, ascoltati e seguiti con
              cura.
            </p>

            <p>
              Oggi la farmacia continua a evolversi, con uno sguardo rivolto al
              futuro e uno profondamente radicato nella tradizione. La sua
              storia è il risultato di <strong>impegno</strong>,{' '}
              <strong>competenza</strong> e <strong>passione</strong>, e si
              rinnova ogni giorno attraverso i servizi offerti alla comunità.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              I Nostri Valori
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I principi che guidano il nostro lavoro ogni giorno
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valori.map((valore, index) => {
              const Icon = valore.icon;
              return (
                <Card key={index} hover>
                  <div className="p-6 text-center">
                    <div
                      className={`${valore.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon className={valore.color} size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {valore.title}
                    </h3>
                    <p className="text-gray-600">{valore.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Vieni a trovarci
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Ti aspettiamo in Via Resistenza 14/B a Opera per prenderci cura
            della tua salute
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Contattaci
            </Link>
            <Link
              href="/servizi"
              className="inline-flex items-center justify-center border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-medium"
            >
              Scopri i servizi
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
