'use client';
import { useState } from 'react';
import Button from '@/components/Button';
import Loader from './Loader';
import Navbar from '@/components/Navbar';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div
      className="h-screen w-full flex flex-col p-3 pattern-dots pattern-gray-200 pattern-bg-gray-100
  pattern-size-2 pattern-opacity-100 gap-6 justify-center items-center font-argentum"
    >
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.2,
              },
            }}
            className="h-screen w-full flex flex-col p-3 pattern-dots pattern-gray-200 pattern-bg-gray-100
      pattern-size-2 pattern-opacity-100 gap-6 justify-center items-center font-argentum"
          >
            <Navbar />
            {/* <Image src="/extrahexlogo.svg" width={64} height={64} alt="hex logo" /> */}
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
              <span className=" bg-clip-text bg-gradient-to-r text-transparent from-[#00A3FF] to-[#0E6697]">
                Trustless
              </span>{' '}
              Yield.
            </motion.h1>
            <Button mobile={true} buttonText="Learn More" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
