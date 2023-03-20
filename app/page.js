'use client';

import Button from '@/components/Button';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="h-screen w-full p-3 font-argentum">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.2,
          },
        }}
        className="flex flex-col justify-center items-center h-full gap-6"
      >
        <motion.p
          initial={{ y: 60, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.5,
            },
          }}
          className="text-gray-700"
        >
          High yield, no minimum & decentralized design
        </motion.p>
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          }}
          className="text-6xl md:text-8xl uppercase text-center text-[#303030] font-black max-w-4xl"
        >
          Earn{' '}
          <span className=" bg-clip-text bg-gradient-to-r text-transparent from-[#00A3FF] to-[#0E6697]">Trustless</span>{' '}
          Yield.
        </motion.h1>
        <Button mobile={true} buttonText="Learn More" />
      </motion.div>
    </div>
  );
}
