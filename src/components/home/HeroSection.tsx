import { Phone, MessageCircle, Clock3, ShieldCheck, HeartPulse } from 'lucide-react';
import { contatti, orari } from '@/lib/data/contatti';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-emerald-100 py-16 md:py-24">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/istockphoto-1212746813-640_adpp_is.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/58 via-emerald-900/42 to-cyan-900/34" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="max-w-3xl">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-800 backdrop-blur">
              <HeartPulse size={16} />
              Dal 1970 al vostro servizio
            </span>

            <h1 className="mb-6 text-4xl font-black leading-tight text-white md:text-6xl">
              La tua salute,
              <br />
              <span className="bg-gradient-to-r from-emerald-200 to-cyan-100 bg-clip-text text-transparent">
                ogni giorno.
              </span>
            </h1>

            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-100 md:text-xl">
              Farmacia Resta e un punto di riferimento a Opera: consulenza, prevenzione e servizi
              con un team sempre vicino alle persone.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={contatti.telefonoLink}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-green-600/30 transition-all hover:-translate-y-0.5 hover:bg-green-700"
              >
                <Phone size={20} />
                <span>Chiama Ora</span>
              </a>
              <a
                href={contatti.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-green-600 bg-white/90 px-7 py-3.5 font-semibold text-green-700 transition-colors hover:bg-green-50"
              >
                <MessageCircle size={20} />
                <span>Scrivici su WhatsApp</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-100">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck size={17} className="text-emerald-300" />
                <span>Consulenza professionale</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <Clock3 size={17} className="text-emerald-300" />
                <span>Aperti da lunedi a sabato</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/35 bg-white/12 p-5 shadow-[0_16px_50px_rgba(2,6,23,0.22)] backdrop-blur-sm md:p-6">
            <div className="divide-y divide-white/20">
              {orari.map((orario, index) => (
                <div key={index} className="flex items-center justify-between py-3.5">
                  <span className="text-sm font-semibold text-white md:text-base">{orario.giorno}</span>
                  <span className="text-sm font-medium text-emerald-100 md:text-base">{orario.orari}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
