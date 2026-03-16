'use client';

import DirectionsLink from '@/components/home/DirectionsLink';
import SectionIntro from '@/components/ui/SectionIntro';
import { contatti } from '@/lib/data/contatti';

export default function MapSection() {
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    contatti.indirizzo
  )}&output=embed`;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionIntro
          title="Dove Siamo"
          subtitle="Passa a trovarci in farmacia"
          className="mb-4"
        />

        <div className="mb-8 text-center">
          <DirectionsLink destination={contatti.indirizzo} />
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg">
          {/* Google Maps Embed */}
          <iframe
            src={mapEmbedSrc}
            width="100%"
            height="450"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa Farmacia Resta"
          />
        </div>
      </div>
    </section>
  );
}
