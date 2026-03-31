'use client';

import { useState, useEffect, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';


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
      <div className="max-w-2xl mx-auto">

        {/* Intestazione */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Cosa dicono i clienti</h2>
          <p className="text-lg text-gray-500">Dal 1970 al servizio della comunità di Opera</p>
        </div>

        {/* Card recensione */}
        <div
          className="relative bg-gray-50 rounded-2xl px-10 py-10 shadow-sm transition-all duration-300"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(6px)' }}
        >
          {/* Virgoletta aperta — angolo in alto a sinistra */}
          <span
            className="absolute top-4 left-6 select-none leading-none"
            style={{ fontFamily: 'Georgia, serif', fontSize: '4rem', color: '#00746b', opacity: 0.2, lineHeight: 1 }}
          >&ldquo;</span>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light italic text-center px-4">
            {r.testo}
          </p>

          {/* Virgoletta chiusa — angolo in basso a destra */}
          <span
            className="absolute bottom-2 right-6 select-none leading-none"
            style={{ fontFamily: 'Georgia, serif', fontSize: '4rem', color: '#00746b', opacity: 0.2, lineHeight: 1 }}
          >&rdquo;</span>
        </div>

        {/* Autore */}
        <div
          className="flex items-center justify-center gap-3 mt-6 transition-all duration-300"
          style={{ opacity: visible ? 1 : 0 }}
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
            style={{ backgroundColor: '#00746b' }}
          >
            {r.nome.split(' ').map((p) => p[0]).join('').slice(0, 2).toUpperCase()}
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm">{r.nome}</p>
            <p className="text-xs text-gray-400">{r.data}</p>
          </div>
        </div>

        {/* Pallini navigazione */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {recensioni.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === idx ? '2rem' : '0.5rem',
                backgroundColor: i === idx ? '#00746b' : '#cbd5e1',
              }}
            />
          ))}
        </div>

        {/* Link Google */}
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/search/Farmacia+Resta+Opera"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all text-lg"
            style={{ color: '#00746b' }}
          >
            Lascia una recensione su Google
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
