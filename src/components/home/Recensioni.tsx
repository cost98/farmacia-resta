'use client';

import { useState, useEffect, useCallback } from 'react';
import { Star } from 'lucide-react';
import SectionIntro from '@/components/ui/SectionIntro';
import DirectionsLink from '@/components/home/DirectionsLink';


const recensioni = [
  {
    nome: 'Laura M.',
    stelle: 5,
    testo: 'Farmacia eccellente! Il personale è sempre gentile e disponibile. Mi hanno aiutata a trovare il prodotto giusto con molta professionalità. La consiglio a tutti.',
    data: 'Marzo 2025',
  },
  {
    nome: 'Marco T.',
    stelle: 5,
    testo: 'Ho trovato subito quello che cercavo e il farmacista mi ha consigliato un\'alternativa più adatta alle mie esigenze. Competenza e cortesia al top.',
    data: 'Febbraio 2025',
  },
  {
    nome: 'Giulia R.',
    stelle: 5,
    testo: 'Farmacia di fiducia da anni. Staff preparato e sempre pronti a dare una mano. Orari comodi e mai file interminabili.',
    data: 'Gennaio 2025',
  },
  {
    nome: 'Alessandro B.',
    stelle: 5,
    testo: 'Ottima farmacia, personale molto professionale. Ho ricevuto una consulenza precisa e dettagliata. Punto di riferimento per il quartiere.',
    data: 'Dicembre 2024',
  },
  {
    nome: 'Francesca D.',
    stelle: 5,
    testo: 'Sempre disponibili e pazienti. Ho portato mia mamma anziana e si sono presi tutto il tempo necessario per spiegarle le terapie. Grazie!',
    data: 'Novembre 2024',
  },
];

export default function Recensioni() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = useCallback((next: number) => {
    setVisible(false);
    setTimeout(() => {
      setIdx(next);
      setVisible(true);
    }, 300);
  }, []);

  const prev = () => goTo((idx - 1 + recensioni.length) % recensioni.length);
  const next = useCallback(() => goTo((idx + 1) % recensioni.length), [idx, goTo]);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const r = recensioni[idx];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* Intestazione */}
        <div className="text-center mb-16">
          <SectionIntro
            eyebrow="Recensioni"
            title="Le vostre parole"
            highlight="parole"
            handwritten
            subtitle="Testimonianze di chi ci ha scelto"
          />
        </div>

        {/* Recensione */}
        <div
          className="transition-all duration-500"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'scale(0.98)' : 'scale(1)' }}
        >
          {/* Stelle */}
          <div className="flex items-center justify-center gap-1.5 mb-10">
            {Array.from({ length: r.stelle }).map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5"
                fill="#00746b"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Virgoletta decorativa */}
          <div className="flex justify-center mb-6">
            <svg className="w-16 h-16 text-green-700 opacity-20" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z" />
            </svg>
          </div>

          {/* Testo recensione */}
          <blockquote className="relative max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl text-slate-700 leading-[1.6] text-center px-4 md:px-12" style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic', fontWeight: 400 }}>
              {r.testo}
            </p>
          </blockquote>

          {/* Separatore decorativo */}
          <div className="flex items-center justify-center gap-2 my-10">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-green-300"></div>
            <div className="h-1 w-1 rounded-full bg-green-600"></div>
            <div className="h-px w-12 bg-linear-to-l from-transparent to-green-300"></div>
          </div>

          {/* Autore */}
          <div className="flex items-center justify-center gap-4">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-base shrink-0 shadow-md"
              style={{ backgroundColor: '#00746b' }}
            >
              {r.nome.split(' ').map((p) => p[0]).join('').slice(0, 2).toUpperCase()}
            </div>
            <div className="text-left">
              <p className="font-bold text-slate-900 text-lg tracking-tight">{r.nome}</p>
              <p className="text-sm text-slate-500 tracking-wide">{r.data}</p>
            </div>
          </div>
        </div>

        {/* Pallini navigazione */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {recensioni.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="h-2 rounded-full transition-all duration-300 hover:opacity-70"
              style={{
                width: i === idx ? '2.5rem' : '0.5rem',
                backgroundColor: i === idx ? '#00746b' : '#cbd5e1',
              }}
              aria-label={`Vai alla recensione ${i + 1}`}
            />
          ))}
        </div>

        {/* Link recensione */}
        <div className="text-center mt-12">
          <DirectionsLink
            href="https://www.google.com/maps/search/Farmacia+Resta+Opera"
            label="Lascia una recensione"
            icon={Star}
            external
            className="text-lg"
          />
        </div>
      </div>
    </section>
  );
}
