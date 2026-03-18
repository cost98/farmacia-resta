import { Metadata } from 'next';
import { contatti } from '@/lib/data/contatti';

export const metadata: Metadata = {
  title: 'Privacy Policy | Farmacia Resta - Opera (MI)',
  description:
    'Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) - Farmacia Resta SRL, Via Resistenza 14/B, Opera (MI).',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm mb-8">
            Ultimo aggiornamento: novembre 2025
          </p>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                1. Titolare del trattamento
              </h2>
              <p>
                Il Titolare del trattamento dei dati personali è{' '}
                <strong>Farmacia Resta SRL</strong>, con sede legale in Via
                Resistenza 14/B, 20073 Opera (MI), P.IVA {contatti.piva}.
              </p>
              <p className="mt-2">
                Contatti del Titolare:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  Email:{' '}
                  <a
                    href={contatti.emailLink}
                    className="text-green-600 hover:underline"
                  >
                    {contatti.email}
                  </a>
                </li>
                <li>
                  Telefono:{' '}
                  <a
                    href={contatti.telefonoLink}
                    className="text-green-600 hover:underline"
                  >
                    {contatti.telefono}
                  </a>
                </li>
                <li>Indirizzo: {contatti.indirizzo}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                2. Tipologie di dati trattati
              </h2>
              <p>
                Nell&apos;ambito della propria attività, Farmacia Resta SRL tratta le
                seguenti categorie di dati personali:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  <strong>Dati di contatto:</strong> nome, cognome, indirizzo
                  email, numero di telefono, forniti volontariamente tramite il
                  modulo di contatto del sito web.
                </li>
                <li>
                  <strong>Dati di navigazione:</strong> indirizzo IP, tipo di
                  browser, sistema operativo e altri dati tecnici raccolti
                  automaticamente durante la navigazione sul sito.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                3. Finalità e base giuridica del trattamento
              </h2>
              <p>I dati personali vengono trattati per le seguenti finalità:</p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>
                  <strong>Gestione delle richieste di contatto</strong> (base
                  giuridica: esecuzione di misure precontrattuali adottate su
                  richiesta dell&apos;interessato, art. 6 par. 1 lett. b GDPR).
                </li>
                <li>
                  <strong>Adempimento di obblighi legali</strong> (base
                  giuridica: obbligo legale, art. 6 par. 1 lett. c GDPR).
                </li>
                <li>
                  <strong>Miglioramento del sito web</strong> tramite dati
                  aggregati e anonimi di navigazione (base giuridica: legittimo
                  interesse, art. 6 par. 1 lett. f GDPR).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                4. Modalità di trattamento e conservazione
              </h2>
              <p>
                I dati personali sono trattati con strumenti informatici e/o
                cartacei, nel rispetto delle misure di sicurezza tecniche e
                organizzative previste dal GDPR. I dati vengono conservati per
                il tempo strettamente necessario al conseguimento delle finalità
                per cui sono stati raccolti, e comunque non oltre:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  <strong>Dati di contatto:</strong> 24 mesi dalla ricezione
                  della richiesta, salvo diversa previsione di legge.
                </li>
                <li>
                  <strong>Dati di navigazione:</strong> fino a 12 mesi dalla
                  raccolta.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                5. Comunicazione e diffusione dei dati
              </h2>
              <p>
                I dati personali non vengono diffusi a terzi salvo nei seguenti
                casi:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  Soggetti che svolgono funzioni necessarie all&apos;erogazione dei
                  servizi richiesti (es. fornitori di servizi email), designati
                  responsabili del trattamento ai sensi dell&apos;art. 28 GDPR.
                </li>
                <li>
                  Autorità competenti su richiesta o per adempimento di
                  obblighi di legge.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                6. Diritti dell&apos;interessato
              </h2>
              <p>
                Ai sensi degli artt. 15-22 del GDPR, l&apos;interessato ha il
                diritto di:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  Accedere ai propri dati personali e ottenerne copia (art. 15).
                </li>
                <li>
                  Rettificare dati inesatti o incompleti (art. 16).
                </li>
                <li>
                  Ottenere la cancellazione dei dati (&quot;diritto all&apos;oblio&quot;, art.
                  17).
                </li>
                <li>
                  Limitare il trattamento in determinate circostanze (art. 18).
                </li>
                <li>
                  Ricevere i propri dati in formato strutturato (portabilità,
                  art. 20).
                </li>
                <li>Opporsi al trattamento (art. 21).</li>
                <li>
                  Proporre reclamo all&apos;Autorità Garante per la protezione dei
                  dati personali (www.garanteprivacy.it).
                </li>
              </ul>
              <p className="mt-3">
                Per esercitare tali diritti, scrivere a:{' '}
                <a
                  href={contatti.emailLink}
                  className="text-green-600 hover:underline"
                >
                  {contatti.email}
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                7. Cookie
              </h2>
              <p>
                Il presente sito utilizza esclusivamente cookie tecnici
                strettamente necessari al funzionamento del sito stesso. Non
                vengono utilizzati cookie di profilazione o cookie di terze
                parti a fini pubblicitari senza il previo consenso
                dell&apos;utente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                8. Modifiche alla presente informativa
              </h2>
              <p>
                Il Titolare si riserva il diritto di modificare la presente
                informativa in qualsiasi momento, dando adeguata pubblicità alle
                modifiche sul presente sito. Si invita pertanto a consultare
                periodicamente questa pagina.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
