import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { contatti, orari } from '@/lib/data/contatti';
import Card from '@/components/ui/Card';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contatti | Farmacia Resta - Opera (MI)',
  description:
    'Contatta la Farmacia Resta: telefono, WhatsApp, email. Ti aspettiamo in Via Resistenza 14/B a Opera (MI). Orari: Lun 14:30-19:30, Mar-Sab 8:30-12:30 e 14:30-19:30.',
};

export default function ContattiPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contattaci
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siamo qui per aiutarti. Contattaci per informazioni, prenotazioni o
            qualsiasi esigenza.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Indirizzo */}
            <Card hover={false}>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MapPin className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Indirizzo
                    </h3>
                    <p className="text-gray-700">{contatti.indirizzo}</p>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                        contatti.indirizzo
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 text-sm font-medium mt-2 inline-block"
                    >
                      Ottieni indicazioni →
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Telefono */}
            <Card hover={false}>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Telefono
                    </h3>
                    <a
                      href={contatti.telefonoLink}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {contatti.telefono}
                    </a>
                    <p className="text-gray-600 text-sm mt-2">
                      WhatsApp:{' '}
                      <a
                        href={contatti.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 font-medium"
                      >
                        {contatti.whatsapp}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Email */}
            <Card hover={false}>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Mail className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <a
                      href={contatti.emailLink}
                      className="text-purple-600 hover:text-purple-700 font-medium break-all"
                    >
                      {contatti.email}
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Orari */}
            <Card hover={false}>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Clock className="text-orange-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Orari di Apertura
                    </h3>
                    <div className="space-y-2">
                      {orari.map((orario, index) => (
                        <div
                          key={index}
                          className="flex justify-between text-sm"
                        >
                          <span className="font-medium text-gray-700">
                            {orario.giorno}
                          </span>
                          <span className="text-gray-600">{orario.orari}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card hover={false}>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Inviaci un messaggio
                </h2>
                <ContactForm />
              </div>
            </Card>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <Card hover={false}>
            <div className="overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.8!2d9.2067!3d45.3733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDIyJzIzLjkiTiA5wrAxMicyNC4xIkU!5e0!3m2!1sit!2sit!4v1234567890"
                width="100%"
                height="400"
                className="border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Farmacia Resta"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
