import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { servizi } from '@/lib/data/servizi';
import { ChevronRight, Clock, Calendar, ArrowLeft, Phone } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import PageHeader from '@/components/ui/PageHeader';
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
      <PageHeader
        title={servizio.titolo}
        subtitle={servizio.descrizioneBreve}
        eyebrow={servizio.categoria}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-green-600">
            Home
          </Link>
          <ChevronRight size={16} />
          <Link href="/servizi" className="hover:text-green-600">
            Servizi
          </Link>
          <ChevronRight size={16} />
          <span className="text-gray-900 font-medium">{servizio.titolo}</span>
        </nav>

        {/* Back Button */}
        <Link
          href="/servizi"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium mb-8"
        >
          <ArrowLeft size={20} />
          <span>Torna ai servizi</span>
        </Link>

        {/* Image Placeholder */}
        <div className="w-full h-96 bg-gradient-to-br from-green-100 to-green-200 rounded-xl mb-12 flex items-center justify-center">
          <span className="text-9xl">🏥</span>
        </div>

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
