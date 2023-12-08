import React from 'react';
import { Button } from '../ui/button';
import { ExtraHexLogo } from '@/assets/photos/logos/Logos';
import Link from 'next/link';
import Hamburger from '../ui/hamburger';
import MobileNav from './MobileNav';
import NavLinks from './NavLinks';

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

export default function Header({}: Props) {
  return (
    <>
      <header className='sticky top-0 z-[100] h-20 w-full bg-black/[0.1] px-6 py-4 text-white backdrop-blur-xl'>
        <div className='mx-auto flex max-w-7xl items-center justify-between'>
          <Link href={''} className='relative z-10'>
            <ExtraHexLogo className='h-12 fill-white' />
          </Link>
          <div className='hidden w-fit items-center gap-4 lg:flex '>
            <NavLinks links={links} />
            {/* <Button className='flex h-12 w-[200px] flex-col items-center justify-center rounded-lg bg-[linear-gradient(95deg,_#00d4a1_11%,#0061d4_151%)]'>
              <div className="text-center font-['Argentum_Sans'] text-white">Launch Dapp</div>
            </Button> */}
          </div>
          <Hamburger />
        </div>
      </header>
      <MobileNav />
    </>
  );
}
