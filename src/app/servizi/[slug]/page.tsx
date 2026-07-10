import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { servizi } from '@/lib/data/servizi';
import { Clock, Calendar, ArrowLeft, Phone } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import SectionIntro from '@/components/ui/SectionIntro';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { contatti } from '@/lib/data/contatti';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servizi.map((servizio) => ({
    slug: servizio.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const servizio = servizi.find((s) => s.slug === slug);

  if (!servizio) {
    return {
      title: 'Servizio non trovato',
    };
  }

  return {
    title: `${servizio.titolo} | Farmacia Resta`,
    description: servizio.descrizioneBreve,
  };
}

export default async function ServizioPage({ params }: Props) {
  const { slug } = await params;
  const servizio = servizi.find((s) => s.slug === slug);

  if (!servizio) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="pt-16 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <SectionIntro
              eyebrow={servizio.categoria}
              title={servizio.titolo}
              highlight={servizio.titolo.split(' ').pop() || servizio.titolo}
              handwritten
              subtitle={servizio.descrizioneBreve}
            />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Servizi', href: '/servizi' },
          { label: servizio.titolo }
        ]} />

        {/* Back Button */}
        <Link
          href="/servizi"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium mb-8"
        >
          <ArrowLeft size={20} />
          <span>Torna ai servizi</span>
        </Link>

        {/* Immagine Servizio */}
        {servizio.immagine ? (
          <div className="w-full h-96 rounded-xl mb-12 relative overflow-hidden">
            <Image
              src={servizio.immagine}
              alt={servizio.titolo}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
        ) : (
          <div className="w-full h-96 bg-linear-to-br from-green-100 to-green-200 rounded-xl mb-12 flex items-center justify-center">
            <span className="text-9xl">🏥</span>
          </div>
        )}

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {servizio.durata && (
            <Card hover={false}>
              <div className="p-6 flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Clock className="text-blue-600" size={28} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Durata</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {servizio.durata}
                  </p>
                </div>
              </div>
            </Card>
          )}

          <Card hover={false}>
            <div className="p-6 flex items-center gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Calendar className="text-purple-600" size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">
                  Prenotazione
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  {servizio.prenotazioneConsigliata
                    ? 'Consigliata'
                    : 'Non necessaria'}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Descrizione
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {servizio.descrizioneCompleta}
            </p>
          </div>

          {servizio.quandoUtile && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Quando è utile eseguirlo?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {servizio.quandoUtile}
              </p>
            </div>
          )}

          {servizio.comeSiEsegue && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Come si esegue?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {servizio.comeSiEsegue}
              </p>
            </div>
          )}

          {servizio.preparazione && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Preparazione
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {servizio.preparazione}
              </p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <Card hover={false}>
          <div className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Per conoscere le disponibilità e i costi
            </h3>
            <p className="text-gray-700 mb-6">
              Contattaci per prenotare il servizio o richiedere maggiori
              informazioni
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={contatti.telefonoLink}>
                <Button size="lg" className="gap-2">
                  <Phone size={20} />
                  <span>Chiama Ora</span>
                </Button>
              </a>
              <Link href="/contatti">
                <Button size="lg" variant="outline">
                  Compila il form
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
