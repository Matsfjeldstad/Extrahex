'use client';
import React from 'react';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { useMenuStore } from '@/store/store';

export default function Hamburger() {
  const isOpen = useMenuStore((state) => state.isOpen);
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        onClick={() => useMenuStore.setState({ isOpen: !isOpen })}
        className='relative z-50 flex w-8 cursor-pointer flex-col gap-1.5 lg:hidden'
      >
        <m.div
          animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0 }}
          className='h-1 w-full rounded-full bg-white'
        />
        <m.div
          animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
          className='h-1 w-full rounded-full bg-white'
        />
        <m.div
          animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0 }}
          className='h-1 w-full rounded-full bg-white'
        />
      </m.div>
    </LazyMotion>
  );
}
