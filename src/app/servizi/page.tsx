import { Metadata } from 'next';
import ServiceGrid from '@/components/servizi/ServiceGrid';

export const metadata: Metadata = {
  title: 'Servizi | Farmacia Resta - Opera (MI)',
  description:
    '18 servizi farmaceutici e diagnostici: Holter cardiaco, elettrocardiogramma, preparazioni galeniche, tamponi, foratura lobi, analisi pelle e capello, noleggio elettromedicali.',
};

export default function ServiziPage() {
  return <ServiceGrid />;
}
