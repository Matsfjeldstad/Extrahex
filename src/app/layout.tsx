'use client';

import { useState } from 'react';
import './globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import Navbar from '../components/Navbar';
import { WagmiProvider } from '@/components/WagmiContext';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from '../components/Loader';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [loading, setLoading] = useState(true);

  return (
    <html>
      <head></head>
      <body className="pattern-dots pattern-gray-200 pattern-bg-gray-100 pattern-size-2 pattern-opacity-100">
        <WagmiProvider>
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div key="loader" className="overflow-hidden">
                <Loader setLoading={setLoading} />
              </motion.div>
            ) : (
              <>
                <header>{!loading && <Navbar />}</header>
                <main>{children}</main>
              </>
            )}
          </AnimatePresence>
        </WagmiProvider>
      </body>
    </html>
  );
}
