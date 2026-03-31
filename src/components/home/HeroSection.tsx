'use client';

import { Clock3, ShieldCheck, HeartPulse, Phone, ChevronDown } from 'lucide-react';
import { contatti, orari } from '@/lib/data/contatti';
import { useEffect, useState } from 'react';

const slides = [
  { src: '/images/sfondo.jpg', position: 'center left' },
  { src: '/images/sfondo2.jpg', position: 'center' },
  { src: '/images/sfondo3.jpg', position: 'center left' },
];

function getIsOpen(): boolean {
  const now = new Date();
  const day = now.getDay();
  const time = now.getHours() * 60 + now.getMinutes();
  if (day === 0) return false;
  if (day === 1) return time >= 14 * 60 + 30 && time < 19 * 60 + 30;
  const mattina = time >= 8 * 60 + 30 && time < 12 * 60 + 30;
  const pomeriggio = time >= 14 * 60 + 30 && time < 19 * 60 + 30;
  return mattina || pomeriggio;
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const isOpen = mounted ? getIsOpen() : false;

  return (
    <section className="relative overflow-hidden py-16 md:py-28">
      {/* Carosello sfondi */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${slide.src})`,
            backgroundSize: 'cover',
            backgroundPosition: slide.position,
            opacity: currentSlide === i ? 1 : 0,
          }}
        />
      ))}

      {/* Indicatori carosello (visibili solo con più slide) */}
      {slides.length > 1 && (
        <div className="absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === i ? 'w-6 bg-white' : 'w-1.5 bg-white/40'
              }`}
            />
          ))}
        </div>
      )}

      {/* Overlay gradiente: verde solido a sinistra, sfuma a destra */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, #00746b 0%, #00746b 30%, rgba(0,116,107,0.75) 50%, rgba(0,61,56,0.35) 75%, rgba(0,0,0,0.15) 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

          {/* Testo */}
          <div
            className="max-w-3xl transition-all duration-700"
            style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(16px)' }}
          >
            <span className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-white/90">
              <HeartPulse size={16} className="text-emerald-200" />
              Dal 1970 al vostro servizio · Opera (MI)
            </span>

            <h1 className="mb-6 text-4xl font-black leading-tight text-white md:text-6xl">
              La tua salute,
              <br />
              <span className="bg-gradient-to-r from-emerald-200 to-cyan-100 bg-clip-text text-transparent">
                ogni giorno.
              </span>
            </h1>

            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-100 md:text-xl">
              Farmacia Resta è un punto di riferimento a Opera: consulenza, prevenzione e servizi
              con un team sempre vicino alle persone.
            </p>

            <div className="mt-0 flex flex-wrap items-center gap-6 text-sm text-slate-100">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck size={17} className="text-emerald-300" />
                <span>Consulenza professionale</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <Clock3 size={17} className="text-emerald-300" />
                <span>Aperti da lunedì a sabato</span>
              </div>
              <a
                href={contatti.telefonoLink}
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Phone size={15} className="text-emerald-300" />
                <span>{contatti.telefono}</span>
              </a>
            </div>
          </div>

          {/* Card orari */}
          <div
            className="rounded-2xl bg-white/12 p-5 shadow-[0_16px_50px_rgba(2,6,23,0.22)] backdrop-blur-sm md:p-6 transition-all duration-700 delay-150 hover:scale-[1.01]"
            style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(24px)' }}
          >
            {/* Intestazione card */}
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300">Orari di apertura</p>
              </div>
              {mounted && (
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold tracking-wide shadow-lg ${
                    isOpen
                      ? 'bg-emerald-500 text-white shadow-emerald-500/40'
                      : 'bg-red-500/80 text-white shadow-red-500/30'
                  }`}
                >
                  <span className="relative flex h-2 w-2">
                    {isOpen && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
                    )}
                    <span className={`relative inline-flex h-2 w-2 rounded-full ${isOpen ? 'bg-white' : 'bg-white/80'}`} />
                  </span>
                  {isOpen ? 'Aperto ora' : 'Chiuso'}
                </span>
              )}
            </div>

            <div className="divide-y divide-white/20">
              {orari.map((orario, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 px-2"
                >
                  <span className="text-sm font-semibold md:text-base text-white">
                    {orario.giorno}{index === 0 && <span className="ml-1 text-xs font-normal text-white/50">(pomeriggio)</span>}
                  </span>
                  <span className="text-sm font-medium text-emerald-100 md:text-base">{orario.orari}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center pt-10">
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors cursor-pointer"
          >
            <span className="text-xs tracking-widest uppercase">Scopri</span>
            <ChevronDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>

      {/* Transizione ondulata verso il basso */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-16">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
