import type { Metadata } from 'next';
import Link from 'next/link';
import { contatti } from '@/lib/data/contatti';

export const metadata: Metadata = {
  title: 'Privacy Policy | Farmacia Resta - Opera (MI)',
  description:
    'Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) - Farmacia Resta, Opera (MI).',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium mb-6"
          >
            ← Torna alla Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-500 text-sm">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-10 text-gray-700 leading-relaxed">

          {/* Titolare */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Titolare del Trattamento</h2>
            <p>
              Il titolare del trattamento dei dati personali è:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <p className="font-semibold text-gray-900">Farmacia Resta SRL</p>
              <p>{contatti.indirizzo}</p>
              <p>P.IVA: {contatti.piva}</p>
              <p>
                Email:{' '}
                <a href={contatti.emailLink} className="text-green-600 hover:underline">
                  {contatti.email}
                </a>
              </p>
              <p>
                Telefono:{' '}
                <a href={contatti.telefonoLink} className="text-green-600 hover:underline">
                  {contatti.telefono}
                </a>
              </p>
            </div>
          </section>

          {/* Dati raccolti */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Tipologie di Dati Raccolti</h2>
            <p className="mb-3">
              Attraverso il presente sito web raccogliamo le seguenti categorie di dati personali:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong>Dati di contatto</strong>: nome, cognome, indirizzo email, numero di telefono.
              </li>
              <li>
                <strong>Dati di navigazione</strong>: indirizzo IP, tipo di browser, pagine visitate, data e ora di accesso (raccolti automaticamente).
              </li>
              <li>
                <strong>Dati forniti volontariamente</strong>: messaggi e richieste inviati tramite il modulo di contatto.
              </li>
            </ul>
          </section>

          {/* Finalità */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finalità del Trattamento</h2>
            <p className="mb-3">I dati personali raccolti vengono trattati per le seguenti finalità:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Rispondere alle richieste di informazioni e prenotazioni inviate tramite il modulo di contatto.</li>
              <li>Gestione dei rapporti contrattuali e pre-contrattuali con i clienti.</li>
              <li>Adempimento degli obblighi di legge.</li>
              <li>Miglioramento del sito web e dell&apos;esperienza utente (dati anonimi di navigazione).</li>
            </ul>
          </section>

          {/* Base giuridica */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Base Giuridica del Trattamento</h2>
            <p>
              Il trattamento dei dati personali si basa sulle seguenti basi giuridiche ai sensi dell&apos;art. 6 del Regolamento UE 2016/679 (GDPR):
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
              <li><strong>Consenso dell&apos;interessato</strong> (art. 6, par. 1, lett. a) per il modulo di contatto.</li>
              <li><strong>Esecuzione di un contratto</strong> (art. 6, par. 1, lett. b) per la gestione delle prenotazioni.</li>
              <li><strong>Obbligo legale</strong> (art. 6, par. 1, lett. c) per gli adempimenti di legge.</li>
              <li><strong>Legittimo interesse</strong> (art. 6, par. 1, lett. f) per la sicurezza e il miglioramento del sito.</li>
            </ul>
          </section>

          {/* Conservazione */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Periodo di Conservazione</h2>
            <p>
              I dati personali raccolti tramite il modulo di contatto saranno conservati per il tempo strettamente necessario
              a gestire la richiesta e, comunque, non oltre 12 mesi dalla raccolta, salvo diversi obblighi di legge.
            </p>
          </section>

          {/* Condivisione */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Condivisione dei Dati</h2>
            <p className="mb-3">
              I dati personali non vengono ceduti a terzi per finalità di marketing. Possono essere comunicati a:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Fornitori di servizi tecnici (hosting, email) che agiscono come responsabili del trattamento.</li>
              <li>Autorità competenti in caso di obblighi di legge.</li>
            </ul>
          </section>

          {/* Diritti */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Diritti dell&apos;Interessato</h2>
            <p className="mb-3">
              Ai sensi degli artt. 15-22 del GDPR, l&apos;interessato ha il diritto di:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Accedere ai propri dati personali.</li>
              <li>Ottenere la rettifica o la cancellazione dei dati.</li>
              <li>Opporsi al trattamento o richiederne la limitazione.</li>
              <li>Richiedere la portabilità dei dati.</li>
              <li>Revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del trattamento effettuato prima della revoca.</li>
              <li>Proporre reclamo all&apos;Autorità Garante per la protezione dei dati personali (www.garanteprivacy.it).</li>
            </ul>
            <p className="mt-4">
              Per esercitare i propri diritti, è possibile contattarci all&apos;indirizzo email{' '}
              <a href={contatti.emailLink} className="text-green-600 hover:underline">
                {contatti.email}
              </a>{' '}
              o telefonicamente al{' '}
              <a href={contatti.telefonoLink} className="text-green-600 hover:underline">
                {contatti.telefono}
              </a>
              .
            </p>
          </section>

          {/* Cookie */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookie</h2>
            <p>
              Il presente sito utilizza esclusivamente cookie tecnici necessari al funzionamento del sito.
              Non vengono utilizzati cookie di profilazione o di terze parti a fini pubblicitari.
            </p>
          </section>

          {/* Modifiche */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Modifiche alla Privacy Policy</h2>
            <p>
              Il Titolare si riserva il diritto di apportare modifiche alla presente policy in qualunque momento.
              Si invita l&apos;utente a consultare periodicamente questa pagina. Le modifiche saranno efficaci dal momento
              della pubblicazione.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
