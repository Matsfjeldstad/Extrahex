'use client';
import { Arrow, EthLogo, PlsLogo } from '@/assets/icons/Icons';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import React, { useRef } from 'react';

type Props = {};

export default function ChainSection({}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
    layoutEffect: false,
  });

  const gradientOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.8, 0.9], [0, 0.5, 0.5, 0]);
  const subHeadingOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const heading1Opacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);
  const ethOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const pulseOpacity = useTransform(scrollYProgress, [0.55 , 0.65], [0, 1]);
  const linkOpacity = useTransform(scrollYProgress, [0.65, 0.7], [0, 1]);
  const pulseScale = useTransform(scrollYProgress, [0.55, 0.65], [0.8, 1]);
  const scale = useTransform(scrollYProgress, [0.6, 0.65], [0.8, 1]);

  return (
    <section ref={scrollRef} className='relative mt-20 h-[300vh] w-full gap-4 p-6 text-white'>
      <motion.div
        style={{ opacity: gradientOpacity }}
        className='absolute left-0 top-0 z-0 h-full w-1/2 bg-gradient-to-r from-pink-500/50 to-transparent opacity-50'
      />
      <div className='sticky top-20 z-10 mx-auto flex h-screen w-full max-w-6xl flex-col-reverse justify-center gap-10 md:flex-row md:items-center md:justify-between md:gap-4'>
        <div className='flex w-fit max-w-lg scale-75 justify-end gap-4 md:scale-100'>
          <div className='relative'>
            <motion.div
              style={{ opacity: pulseOpacity, scale: pulseScale }}
              className='relative left-24 z-20 flex aspect-square w-[160px] items-center justify-center rounded-full bg-[linear-gradient(215deg,_#00eaff_-5%,#0080ff_23%,#8000ff_50%,#e619e6_77%,#ff0000_105%)]'
            >
              <PlsLogo className='w h-16' />
            </motion.div>
            <motion.div
              style={{ opacity: ethOpacity }}
              className='absolute left-0 top-0 z-10 flex aspect-square w-[160px] items-center justify-center rounded-full bg-green-600 bg-gradient-to-br from-[#00FF85] to-[#02302B]'
            >
              <EthLogo className='w h-16' />
            </motion.div>
          </div>
          <motion.div
            style={{ opacity: linkOpacity, scale }}
            className='relative left-24 hidden md:block'
          >
            <p className='text-sm'>1300x Cheaper Gas Fees</p>
            <Arrow className='mt-4' />
          </motion.div>
        </div>
        <div className='flex max-w-lg flex-col gap-3'>
          <motion.p style={{ opacity: subHeadingOpacity }}>Blockchains</motion.p>
          <h2 className='text-3xl font-bold leading-normal md:text-5xl'>
            <motion.span style={{ opacity: heading1Opacity }}>Same Contract,</motion.span>
            <br />
            <motion.span style={{ opacity: ethOpacity }}>On Ethereum,</motion.span>
            <br />
            <motion.span style={{ opacity: pulseOpacity }}>And Pulsechain</motion.span>
          </h2>
          <motion.div style={{ opacity: linkOpacity }}>
            <Link href={''}> Read more {'->'} </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
