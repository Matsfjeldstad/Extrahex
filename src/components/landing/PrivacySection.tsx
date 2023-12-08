'use client';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

export default function PrivacySection() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
    layoutEffect: false,
  });

  const opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.2, 0.3], [3.5, 1]);
  const fontSize = useTransform(scrollYProgress, [0.2, 0.3], ["64px", "16px"]);

  const headingOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const sectionOpacity = useTransform(scrollYProgress, [0.5, 0.8], [1, 0]);
  const sectionScale = useTransform(scrollYProgress, [0.6, 1], [1, 0.8]);

  return (
    <motion.section
      ref={scrollRef}
      style={{ opacity: sectionOpacity, scale: sectionScale }}
      className='relative mt-20 flex h-[300vh] w-full justify-between gap-4 p-4 text-white'
    >
      <div className='sticky top-20 mx-auto flex h-screen w-full max-w-lg flex-col justify-center gap-3 text-left md:items-center [text-wrap:balance] md:text-center'>
        <motion.p className='font-bold w-fit' style={{ fontSize }}>
          NO KYC
        </motion.p>
        <h2 className='text-3xl font-bold leading-normal md:text-5xl'>
          <motion.span
            style={{ opacity: headingOpacity }}
            className='bg-gradient-to-br from-[#9BFF78] to-[#00A2A2] bg-clip-text text-transparent [text-wrap:balance]'
          >
            Decentralised By Design
            <br />
          </motion.span>
          <motion.span style={{ opacity }}>No Email, Phone or ID required</motion.span>
        </h2>
        <motion.div style={{ opacity }}>
          <Link href={''}> Read more {'->'} </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
