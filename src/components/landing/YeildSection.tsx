'use client';
import Link from 'next/link';
import React, {useRef} from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type Props = {};

export default function YeildSection({}: Props) {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
    layoutEffect: false,
  })

  const opacity = useTransform(scrollYProgress, [0.3, 0.35], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.3, 0.45], [0.8, 1]);
  return (
    <motion.section style={{ opacity, scale }}  className='mx-auto mt-20 flex h-screen w-full max-w-6xl flex-col justify-center gap-4 p-4 text-white md:flex-row md:items-center md:justify-between'>
      <div className='flex max-w-lg flex-col gap-3'>
        <p>Yeild</p>
        <h2 className='text-3xl font-bold leading-normal md:text-5xl'>
          True{' '}
          <span  className='bg-gradient-to-br from-[#9BFF78] to-[#00A2A2] bg-clip-text text-transparent'>
            Decentalized{' '}
          </span>
          Yield.
        </h2>
      </div>
      <div className='flex w-fit max-w-lg flex-col gap-4'>
        <p className='w-fit text-2xl text-gray-300'>
          The yeild in HEX mining comes from a capped 3.69% inflation, bonuses and penalties.{' '}
        </p>
        <Link href={''}> Read more {'->'} </Link>
      </div>
    </motion.section>
  );
}
