import PageHeader from '@/components/ui/PageHeader';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata = {
  title: 'Privacy Policy | Farmacia Resta',
  description: 'Informativa sulla privacy e trattamento dei dati personali della Farmacia Resta.',
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Privacy Policy', href: '/privacy' }]} />
      <PageHeader
        title="Privacy Policy"
        subtitle="Informativa sul trattamento dei dati personali"
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. Titolare del Trattamento</h2>
            <p className="text-gray-700 mb-6">
              Farmacia Resta<br />
              Via Brescia, 99 - 25015 Desenzano del Garda (BS)<br />
              P.IVA: [INSERIRE P.IVA]<br />
              Email: info@farmaciarestadesenzano.it<br />
              Tel: 030 9121046
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. Tipologie di Dati Raccolti</h2>
            <p className="text-gray-700 mb-4">
              Attraverso questo sito web, raccogliamo le seguenti tipologie di dati:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Dati di navigazione (indirizzo IP, browser utilizzato)</li>
              <li>Dati forniti volontariamente tramite il form di contatto (nome, email, telefono, messaggio)</li>
              <li>Cookie tecnici necessari al funzionamento del sito</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. Finalità del Trattamento</h2>
            <p className="text-gray-700 mb-4">I dati personali sono trattati per le seguenti finalità:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Rispondere alle richieste di informazioni inviate tramite il form di contatto</li>
              <li>Garantire il corretto funzionamento del sito web</li>
              <li>Adempiere a obblighi di legge</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. Base Giuridica</h2>
            <p className="text-gray-700 mb-6">
              Il trattamento dei dati è basato sul consenso dell'interessato per l'invio di richieste 
              tramite form di contatto, e sull'interesse legittimo per l'analisi della navigazione.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. Modalità di Trattamento</h2>
            <p className="text-gray-700 mb-6">
              I dati sono trattati con strumenti informatici e telematici, con l'adozione di misure 
              di sicurezza atte a prevenire accessi non autorizzati, divulgazione, modifica o 
              distruzione non autorizzata.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">6. Conservazione dei Dati</h2>
            <p className="text-gray-700 mb-6">
              I dati personali saranno conservati per il tempo strettamente necessario a gestire 
              le richieste ricevute e in ogni caso nel rispetto della normativa vigente.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">7. Comunicazione e Diffusione</h2>
            <p className="text-gray-700 mb-6">
              I dati personali non saranno oggetto di diffusione. Potranno essere comunicati a:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Provider di hosting e servizi tecnici</li>
              <li>Società che gestiscono il sistema di invio messaggi del form di contatto</li>
              <li>Autorità competenti per adempimenti di legge</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">8. Diritti dell'Interessato</h2>
            <p className="text-gray-700 mb-4">
              Ai sensi degli artt. 15-22 del GDPR, l'interessato ha il diritto di:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Accedere ai propri dati personali</li>
              <li>Ottenere la rettifica o la cancellazione degli stessi</li>
              <li>Limitare il trattamento</li>
              <li>Opporsi al trattamento</li>
              <li>Richiedere la portabilità dei dati</li>
              <li>Revocare il consenso in qualsiasi momento</li>
              <li>Proporre reclamo all'autorità di controllo (Garante Privacy)</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Per esercitare i propri diritti, l'interessato può contattare il Titolare del 
              Trattamento agli indirizzi indicati al punto 1.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">9. Cookie</h2>
            <p className="text-gray-700 mb-6">
              Questo sito utilizza esclusivamente cookie tecnici necessari al suo funzionamento. 
              Non vengono utilizzati cookie di profilazione o di terze parti per finalità di marketing.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">10. Servizi di Terze Parti</h2>
            <p className="text-gray-700 mb-4">
              Il sito integra contenuti da servizi di terze parti:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Google Maps:</strong> per visualizzare la mappa della farmacia</li>
              <li><strong>Instagram:</strong> per mostrare i post pubblici della farmacia</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Per informazioni sul trattamento dei dati da parte di questi servizi, 
              consultare le rispettive privacy policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">11. Modifiche alla Privacy Policy</h2>
            <p className="text-gray-700 mb-6">
              Questa Privacy Policy può essere modificata nel tempo. Le modifiche saranno 
              pubblicate su questa pagina con indicazione della data di ultimo aggiornamento.
            </p>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                Per qualsiasi domanda o richiesta relativa al trattamento dei dati personali, 
                contattare la Farmacia Resta all'indirizzo email: <a href="mailto:info@farmaciarestadesenzano.it" className="text-blue-600 hover:underline">info@farmaciarestadesenzano.it</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
