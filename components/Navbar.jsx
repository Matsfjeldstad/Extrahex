'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from './Button';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const Nav = {
    exit: {
      x: -60,
      opacity: 0,
    },
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div
      className={`fixed top-0 left-0 h-20 w-screen ${
        menuOpen ? 'text-gray-200 sm:text-gray-900' : 'text-gray-900'
      } font-argentum text-xl z-40 p-4 flex justify-between items-center`}
    >
      <div id="logo" className="relative font-light flex gap-1 items-center z-40">
        <svg
          width="37"
          height="32"
          viewBox="0 0 37 32"
          className={menuOpen ? 'fill-gray-200 sm:fill-gray-900' : 'fill-gray-900'}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.55986 31.2641L6.09575 26.9955C6.01923 26.8372 6.01923 26.6527 6.09575 26.4945L8.8335 21.7521C8.93079 21.6031 9.09299 21.5092 9.27056 21.499H14.7435C14.9213 21.5094 15.0838 21.6032 15.1818 21.7521L17.9183 26.4945C17.9975 26.6539 17.9975 26.8412 17.9183 27.0007L15.1741 31.7404C15.076 31.8853 14.9177 31.9779 14.7435 31.9922H9.82693C9.31464 31.9592 8.84663 31.6902 8.55986 31.2641ZM26.3274 21.5029L20.8804 12.0545C20.7458 11.8524 20.5247 11.7248 20.2826 11.7093H9.37561C9.13343 11.7248 8.91233 11.8524 8.77774 12.0545L3.32427 21.5081C3.21674 21.7257 3.21674 21.981 3.32427 22.1986L4.92853 24.9708L7.72465 20.1272C7.87782 19.8934 8.13195 19.7453 8.41072 19.7275H15.5955C15.8764 19.7431 16.133 19.8915 16.2868 20.1272L19.8805 26.3569C20.0076 26.6082 20.0076 26.9051 19.8805 27.1564L17.0844 32H20.2787C20.5215 31.9856 20.7432 31.8571 20.8765 31.6535L26.3274 22.2012C26.4375 21.9815 26.4375 21.7226 26.3274 21.5029ZM36.2228 15.2511L27.8642 0.746269C27.5754 0.305001 27.0937 0.0278496 26.5673 0H9.83731C9.31091 0.0278496 8.82926 0.305001 8.5404 0.746269L0.177984 15.2511C-0.0593281 15.7194 -0.0593281 16.2728 0.177984 16.7411L2.0961 20.0649L7.65203 10.4257C7.84253 10.1349 8.15972 9.95182 8.50669 9.93251H21.1398C21.4864 9.95181 21.8032 10.1349 21.9932 10.4257L28.3078 21.3705C28.4647 21.6806 28.4647 22.0469 28.3078 22.3569L22.7467 31.9922H26.5725C27.0989 31.9644 27.5806 31.6872 27.8694 31.2459L36.2318 16.7424C36.4679 16.2738 36.4679 15.721 36.2318 15.2524L36.2228 15.2511Z" />
        </svg>
        <div>
          EXTRA<span className="font-black italic">HEX</span>
        </div>
      </div>
      <div className="sm:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className=" duration-200 relative h-7 z-30 border-red-300">
          {menuOpen ? (
            <>
              <div className={`h-1 w-7 absolute top-3 hidden rotate-45 left-0  bg-gray-200`} />
              <div className={`h-1 w-7 relative top-0 rotate-45 bg-gray-200`} />
              <div className={`h-1 w-7 absolute top-3 -rotate-45 left-0 bg-gray-200`} />
            </>
          ) : (
            <>
              <div className="h-1 w-7 absolute top-1 left-0 bg-gray-900" />
              <div className="h-1 w-7 relative top-0  bg-gray-900" />
              <div className="h-1 w-7 absolute top-5 left-0 bg-gray-900" />
            </>
          )}
        </button>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100vw' }}
              exit={{ width: 0 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.2,
              }}
              className="fixed top-0 left-0 bg-gray-900 w-full h-full z-20 overflow-hidden"
            >
              <motion.nav
                variants={Nav}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  staggerChildren: 0.05,
                  duration: 0.2,
                }}
                className="flex flex-col w-full justify-center items-start gap-5 mt-20 font-bold text-4xl m-4"
              >
                <motion.div variants={Nav}>
                  <Link href="/"> HOME </Link>
                </motion.div>
                <motion.div variants={Nav}>
                  <Link href="/"> WHAT IS HEX</Link>
                </motion.div>
                <motion.div variants={Nav}>
                  <Link href="/"> BUY HEX </Link>
                </motion.div>
                <motion.div variants={Nav}>
                  <Link href="/"> FAQ </Link>
                </motion.div>
                <motion.div variants={Nav}>
                  <Button mobile={true} buttonText={'Learn More'} />
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <nav className="hidden gap-4 text-base sm:flex">
        <Link href={'/'}>Home</Link>
        <Link href={'/'}>What is Hex</Link>
        <Link href={'/'}>Buy Hex</Link>
        <Link href={'/'}>FAQ</Link>
      </nav>
      <Button buttonText="Learn More" />
    </div>
  );
}
