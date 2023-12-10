'use client';
import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useBgStore } from '@/store/store';
import React, { useRef } from 'react';

type Props = {};

export default function InflationSection({}: Props) {
  const ref = useRef(null);
  const bgColorState = useBgStore((state) => state.bgClass);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end start'],
  });

  const mainOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0.1, 0.2], [100, 0]);

  const subheadingOpacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);

  const paragraphOpacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
  return (
    <div
      ref={ref}
      className={cn(
        'relative h-[300vh] min-h-screen text-center transition-colors',
        bgColorState === 'bg-gray-950' ? 'text-white' : 'text-gray-950',
      )}
    >
      <div className='sticky top-20 mx-auto flex h-screen max-w-xl flex-col items-center justify-center gap-6'>
        <div>
          <motion.h2
            style={{ y, opacity: mainOpacity }}
            className={cn(
              'flex bg-gradient-to-tr from-[#FD06C6] to-[#FF7A00] bg-clip-text text-7xl font-bold text-transparent lg:text-9xl',
            )}
          >
            3.69%
          </motion.h2>
          <motion.h4 style={{ opacity: subheadingOpacity }} className='text-4xl font-semibold'>
            Max inflation
          </motion.h4>
        </div>
        <motion.p style={{ opacity: paragraphOpacity }} className='text-2xl [text-wrap:balance]'>
          Stakers are rewarded with inflation when locking their hex.
        </motion.p>
      </div>
    </div>
  );
}
