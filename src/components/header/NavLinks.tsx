'use client';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useBgStore } from '@/store/store';

type Props = {
  links: {
    title: string;
    href: string;
  }[];
};

export default function NavLinks({ links }: Props) {
  const bgColorState = useBgStore((state) => state.bgClass);
  const [hoverID, setHoverID] = useState('');
  return (
    <motion.nav layout className='flex w-full text-lg'>
      {links.map((link) => {
        return (
          <Link
            onMouseEnter={() => setHoverID(link.title)}
            onMouseLeave={() => setHoverID('')}
            className='relative w-fit px-4 py-1 group'
            href={link.href}
            key={link.title}
          >
            <span
              className={cn(
                'relative z-10 group-hover:text-white',
                bgColorState === 'bg-gray-950' ? 'text-white' : 'text-gray-950',
              )}
            >
              {link.title}
            </span>
            <AnimatePresence>
              {hoverID === link.title && (
                <motion.div
                  layoutId='nav'
                  initial={{ y: 0, scale: 1, opacity: 1 }}
                  exit={{ y: 0, scale: 0.7, opacity: 0 }}
                  className={cn('absolute left-0 top-0 h-full w-full rounded-full bg-blue-600')}
                />
              )}
            </AnimatePresence>
          </Link>
        );
      })}
    </motion.nav>
  );
}
