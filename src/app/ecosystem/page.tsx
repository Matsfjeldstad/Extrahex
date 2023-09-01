import EcosytemSection from '@/components/ecosytem/EcosytemSection';
import HeroSection from '@/components/ecosytem/HeroSection';
import React from 'react';

type Props = {};

export default function page({}: Props) {
  return (
    <main className='text-white'>
      <HeroSection />
      <EcosytemSection />
    </main>
  );
}
