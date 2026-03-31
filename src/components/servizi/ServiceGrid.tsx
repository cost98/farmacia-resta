import { servizi } from '@/lib/data/servizi';
import ServiceCard from './ServiceCard';
import PageHeader from '@/components/ui/PageHeader';

export default function ServiceGrid() {
  return (
    <>
      <PageHeader
        title="I Nostri Servizi"
        subtitle="Una vasta gamma di servizi diagnostici e ambulatoriali per prenderci cura della tua salute e del tuo benessere."
        eyebrow="Farmacia Resta"
      />
      <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
