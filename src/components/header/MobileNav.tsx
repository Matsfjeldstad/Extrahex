'use client';
import React from 'react';

import { m, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { RemoveScroll } from 'react-remove-scroll';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useMenuStore } from '@/store/store';

type Props = {};

const links = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'What is Hex?',
    href: '/what-is-hex',
  },
  {
    title: 'Buy Hex',
    href: '/buy-hex',
  },
  {
    title: 'Ecosystem',
    href: '/ecosystem',
  },
];

export default function MobileNav({}: Props) {
  const open = useMenuStore((state) => state.isOpen);
  const pathName = usePathname();
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {open && (
          <div className='block lg:hidden'>
            <m.div
              initial={{ height: 0 }}
              animate={{ height: '100vh' }}
              exit={{ height: 0 }}
              className='fixed left-0 top-0 z-50 w-full overflow-hidden bg-gray-950 p-6'
            >
              <RemoveScroll>
                <nav className='mx-auto mt-24 flex max-w-7xl flex-col gap-8 text-5xl font-black uppercase'>
                  {links.map((link) => {
                    return (
                      <Link
                        onClick={() => useMenuStore.setState({ isOpen: false })}
                        className={cn(
                          'w-fit',
                          pathName === link.href ? 'text-green-400 underline' : 'text-white',
                        )}
                        href={link.href}
                        key={link.title}
                      >
                        {link.title}
                      </Link>
                    );
                  })}
                </nav>
              </RemoveScroll>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
