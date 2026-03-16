'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Phone, Instagram, Facebook } from 'lucide-react';
import { contatti, social } from '@/lib/data/contatti';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/chi-siamo', label: 'Chi Siamo' },
    { href: '/servizi', label: 'Servizi' },
    { href: '/contatti', label: 'Contatti' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-[60] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-52 h-16 group-hover:scale-105 transition-transform">
              <Image
                src="/images/logo_scritta.jpeg"
                alt="Farmacia Resta"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-green-600 font-semibold transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition-colors p-2 hover:bg-pink-50 rounded-lg"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-lg"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>

            {/* Phone CTA */}
            <a
              href={contatti.telefonoLink}
              className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-5 py-2.5 rounded-xl hover:shadow-lg hover:scale-105 transition-all font-semibold"
            >
              <Phone size={18} />
              <span className="hidden lg:inline">Chiama Ora</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors px-2 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="flex items-center space-x-4 px-2 py-2">
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
              </div>

              <a
                href={contatti.telefonoLink}
                className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors mx-2"
              >
                <Phone size={18} />
                <span>Chiama Ora</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
