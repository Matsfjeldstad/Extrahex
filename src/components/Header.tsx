import React from 'react';
import { Button } from './ui/button';
import { ExtraHexLogo } from '@/assets/photos/logos/Logos';
import Link from 'next/link';

type Props = {};

export default function Header({}: Props) {
  return (
    <header className='h-28 bg-white/[0.001] px-6 py-4 text-white backdrop-blur-sm'>
      <div className='mx-auto flex max-w-7xl items-center justify-between'>
        <Link href={''}>
          <ExtraHexLogo className='h-12 fill-white' />
        </Link>
        <div className='flex w-fit items-center gap-4'>
          <nav className='flex w-full gap-8 text-lg'>
            <a>Home</a>
            <a>What is Hex</a>
            <a>Buy Hex</a>
            <a>Ecosystem</a>
          </nav>
          <Button className='flex h-12 w-[200px] flex-col items-center justify-center rounded-lg bg-[linear-gradient(95deg,_#00d4a1_11%,#0061d4_151%)]'>
            <div className="text-center font-['Argentum_Sans'] text-white">Launch Dapp</div>
          </Button>
        </div>
      </div>
    </header>
  );
}
