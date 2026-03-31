import HeroSection from '@/components/home/HeroSection';
import ChiSiamoTeaser from '@/components/home/ChiSiamoTeaser';
import CtaBoxes from '@/components/home/CtaBoxes';
import MapSection from '@/components/home/MapSection';
import InstagramFeed from '@/components/home/InstagramFeed';
import Recensioni from '@/components/home/Recensioni';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ChiSiamoTeaser />
      <Recensioni />
      <CtaBoxes />
      <InstagramFeed />
      <MapSection />
    </>
  );
}

