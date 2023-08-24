import React from 'react';
import { Button } from './ui/button';
import { ExtraHexLogo } from '@/assets/photos/logos/Logos';
import Link from 'next/link';

type Props = {};

export default function Header({}: Props) {
  return (
    <header className=" bg-white/[0.001] backdrop-blur-sm h-20 px-6 py-4 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href={''}>
          <ExtraHexLogo className="h-12 fill-white" />
        </Link>
        <div className="flex gap-4 items-center w-fit">
          <nav className="flex gap-8 text-lg w-full">
            <a>Home</a>
            <a>What is Hex</a>
            <a>Buy Hex</a>
            <a>Ecosystem</a>
          </nav>
          <Button className="bg-[linear-gradient(95deg,_#00d4a1_11%,#0061d4_151%)] flex flex-col justify-center w-[200px] h-12 items-center rounded-lg">
            <div className="text-center font-['Argentum_Sans'] text-white">Launch Dapp</div>
          </Button>
        </div>
      </div>
    </header>
  );
}
