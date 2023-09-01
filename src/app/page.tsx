import Image, { StaticImageData } from 'next/image';
import wavyAnimation from '@/assets/gifs/wavyAnimation.webp';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import { Arrow, EthLogo, PlsLogo } from '@/assets/icons/Icons';
import { ExtraHexLogo } from '@/assets/photos/logos/Logos';
import HeroSection from '@/components/landing/HeroSection';
import StatsSection from '@/components/landing/StatsSection';
import EcosystemSection from '@/components/landing/EcosystemSection';
import YeildSection from '@/components/landing/YeildSection';
import ChainSection from '@/components/landing/ChainSection';
import PrivacySection from '@/components/landing/PrivacySection';
import MineHexSection from '@/components/landing/MineHexSection';

// const with half of the objects in ecosystem

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between '>
      <HeroSection />
      <StatsSection />
      <EcosystemSection />
      <YeildSection />
      <ChainSection />
      <PrivacySection />
      <MineHexSection />
    </main>
  );
}
