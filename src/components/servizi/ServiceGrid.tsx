import { servizi } from '@/lib/data/servizi';
import ServiceCard from './ServiceCard';

export default function ServiceGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            I Nostri Servizi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Offriamo una vasta gamma di servizi diagnostici e ambulatoriali per
            prenderci cura della tua salute e del tuo benessere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servizi.map((servizio) => (
            <ServiceCard key={servizio.id} servizio={servizio} />
          ))}
        </div>
      </div>
    </section>
  );
}
