'use client';

import { useState } from 'react';
import './globals.css';
import Navbar from '../components/Navbar';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from '../components/Loader';

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  return (
    <html>
      <head></head>
      <body className="pattern-dots pattern-gray-200 pattern-bg-gray-100 pattern-size-2 pattern-opacity-100">
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
      </body>
    </html>
  );
}
