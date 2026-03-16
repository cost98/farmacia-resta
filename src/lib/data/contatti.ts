import { Orario } from '@/types';

export const orari: Orario[] = [
  {
    giorno: 'Lunedì',
    orari: '14:30 - 19:30',
  },
  {
    giorno: 'Martedì - Sabato',
    orari: '8:30 - 12:30 | 14:30 - 19:30',
  },
  {
    giorno: 'Domenica',
    orari: 'Chiuso',
  },
];

export const contatti = {
  telefono: '02 5760 4980',
  telefonoLink: 'tel:+390257604980',
  whatsapp: '376 195 0984',
  whatsappLink: 'https://wa.me/393761950984',
  email: 'info@anticafarmaciadiopera.it',
  emailLink: 'mailto:info@anticafarmaciadiopera.it',
  indirizzo: 'Via Resistenza 14/B, Opera (MI), 20073',
  piva: '06778670965',
  coordinate: {
    lat: 45.3733,
    lng: 9.2067,
  },
};

export const social = {
  instagram: 'https://www.instagram.com/farmacia.resta/',
  facebook: 'https://www.facebook.com/farmaciavera',
};
