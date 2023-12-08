'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type Props = {};

export default function Stats({}: Props) {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
    layoutEffect: false,
  });
  console.log(scrollYProgress);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.52], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
  return (
    <motion.div ref={scrollRef} className='flex max-w-lg flex-col gap-10'>
      <motion.div style={{ opacity }} className='flex flex-col gap-2'>
        <h3 className='bg-gradient-to-br from-[#9BFF78] to-[#00A2A2] bg-clip-text text-5xl font-bold text-transparent md:text-6xl'>
          500k
        </h3>
        <div> Hex Holders </div>
      </motion.div>
      <motion.div style={{ opacity: opacity2 }} className='flex flex-col gap-2'>
        <motion.h3 className='bg-gradient-to-br from-[#9BFF78] to-[#00A2A2] bg-clip-text text-5xl font-bold text-transparent md:text-6xl'>
          120k
        </motion.h3>
        <div> Hex Miners </div>
      </motion.div>
      <motion.div style={{ opacity: opacity3}} className='flex flex-col gap-2'>
        <motion.h3
          className='bg-gradient-to-br from-[#9BFF78] to-[#00A2A2] bg-clip-text text-5xl font-bold text-transparent md:text-6xl'
        >
          60B
        </motion.h3>
        <div> Locked Hex Supply </div>
      </motion.div>
    </motion.div>
  );
}
