'use client';
import { HexLogo } from '@/assets/icons/Icons';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import InflationSection from './_sections/InflationSection';
import { cn } from '@/lib/utils';
import { useBgStore } from '@/store/store';

type Props = {};

export default function WhatIsHexPage({}: Props) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, (pos) => {
     pos >= 0.8 ? useBgStore.setState({ bgClass: 'bg-gray-100' }) : useBgStore.setState({ bgClass: 'bg-gray-950' });
  });
  const bgColor = useBgStore((state) => state.bgClass);
  return (
    <motion.main className={cn('text-white transition-colors duration-500', bgColor)}>
      <motion.section
        ref={ref}
        className='relative flex h-screen min-h-screen flex-col overflow-hidden'
      >
        <div className='absolute left-0 top-20 z-0 flex h-full w-full justify-center '>
          <div className='pointer-events-none absolute -left-10 -top-32 z-0 h-full w-full skew-x-12 skew-y-12 bg-[radial-gradient(circle_at_center,_#E300BE_0%,_#FF8A0040_30%,_#FF8A0000_45%)] opacity-60' />
          <HexLogo className='h-80' />
        </div>
        <div className='z-20 mx-auto flex h-full w-full max-w-3xl flex-col items-center justify-center gap-6 '>
          <h1 className='text-center text-6xl font-bold text-white'>
            <span className='bg-gradient-to-br from-[#FF7A00] to-[#FD06C6] bg-clip-text text-transparent'>
              Decentralized Yeild on
            </span>
            <br />
            <span className='bg-gradient-to-b from-gray-500 to-gray-100 bg-clip-text text-transparent'>
              Pulsechain & Ethereum
            </span>
          </h1>
          <p className='text-center text-2xl [text-wrap:balance]'>
            Discover the power of decentralized yield with HEX - learn more about this innovative
            cryptocurrency
          </p>
        </div>
      </motion.section>
      <div>
        <InflationSection />
      </div>
    </motion.main>
  );
}
