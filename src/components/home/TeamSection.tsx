import SectionIntro from '@/components/ui/SectionIntro';
import TeamCarousel from '@/components/home/TeamCarousel';

export default function TeamSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionIntro
            eyebrow="Il Nostro Team"
            title="Le persone dietro il servizio"
            highlight="persone"
            handwritten
            subtitle="Un team di professionisti dedicati al vostro benessere"
          />
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            Ogni giorno il nostro team lavora con <strong className="text-green-600">passione</strong> e{' '}
            <strong className="text-green-600">competenza</strong> per offrirvi il miglior servizio possibile.
            Dalla consulenza farmaceutica ai servizi specializzati, siamo qui per ascoltarvi e supportarvi
            in ogni momento.
          </p>
        </div>
        <TeamCarousel />
      </div>
    </section>
  );
}
