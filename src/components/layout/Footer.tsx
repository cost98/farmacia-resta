import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { contatti, social } from '@/lib/data/contatti';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonna 1: Info Farmacia */}
          <div>
            <div className="relative w-48 h-16 mb-4">
              <Image
                src="/images/logo_scritta.jpeg"
                alt="Farmacia Resta"
                fill
                className="object-contain object-left brightness-0 invert"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-green-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300">{contatti.indirizzo}</p>
              </div>
              <p className="text-gray-400 text-sm">P.IVA: {contatti.piva}</p>
            </div>
          </div>

          {/* Colonna 2: Link Rapidi */}
          <div>
            <h3 className="text-xl font-bold mb-4">Link Rapidi</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/chi-siamo"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link
                  href="/servizi"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Servizi
                </Link>
              </li>
              <li>
                <Link
                  href="/contatti"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Contatti
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonna 3: Contatti e Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contatti</h3>
            <div className="space-y-3 mb-6">
              <a
                href={contatti.telefonoLink}
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors"
              >
                <Phone size={20} />
                <span>{contatti.telefono}</span>
              </a>
              <a
                href={contatti.emailLink}
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors"
              >
                <Mail size={20} />
                <span>{contatti.email}</span>
              </a>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Seguici su</h4>
              <div className="flex gap-4">
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Farmacia Resta SRL. Tutti i
            diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
