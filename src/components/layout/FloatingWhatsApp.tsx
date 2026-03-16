'use client';

import { MessageCircle } from 'lucide-react';
import { contatti } from '@/lib/data/contatti';

export default function FloatingWhatsApp() {
  return (
    <a
      href={contatti.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 z-50 group animate-bounce"
      aria-label="Contattaci su WhatsApp"
      style={{ animationDuration: '3s' }}
    >
      <MessageCircle size={28} strokeWidth={2.5} />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
        Scrivici su WhatsApp! 💬
      </span>
      {/* Ping animation */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></span>
    </a>
  );
}
