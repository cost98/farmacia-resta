import { servizi } from '@/lib/data/servizi';
import ServiceCard from './ServiceCard';
import SectionIntro from '@/components/ui/SectionIntro';
import Breadcrumb from '@/components/ui/Breadcrumb';

export default function ServiceGrid() {
  return (
    <>
      <section className="pt-16 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <SectionIntro
              eyebrow="Farmacia Resta"
              title="I Nostri Servizi"
              highlight="Servizi"
              handwritten
              subtitle="Una vasta gamma di servizi diagnostici e ambulatoriali per prenderci cura della tua salute e del tuo benessere."
            />
          </div>
        </div>
      </section>
      
      <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Servizi' }
        ]} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {servizi.map((servizio) => (
            <ServiceCard key={servizio.id} servizio={servizio} />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
