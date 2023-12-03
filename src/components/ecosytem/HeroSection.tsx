import React from 'react';

import baseLogo from '@/assets/photos/logos/base.png';
import hedronLogo from '@/assets/photos/logos/Hedron.svg';
import icosaLogo from '@/assets/photos/logos/icosa.png';
import maxiLogo from '@/assets/photos/logos/MAXI.svg';
import polyLogo from '@/assets/photos/logos/poly.png';
import trioLogo from '@/assets/photos/logos/trio.png';
import partyLogo from '@/assets/photos/logos/party.png';
import ppLogo from '@/assets/photos/logos/pp.png';
import teamLogo from '@/assets/photos/logos/team.png';
import commisLogo from '@/assets/photos/logos/commis.png';
import imLogo from '@/assets/photos/logos/internetMoney.png';
import deciLogo from '@/assets/photos/logos/deci.png';
import luckyLogo from '@/assets/photos/logos/lucky.png';
import cstLogo from '@/assets/photos/logos/CST.svg';
import Image from 'next/image';

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <section className='relative text-white'>
      <div className='pointer-events-none fixed inset-0 z-0 h-full w-full bg-[radial-gradient(circle_at_top_right,_#0038FF_0%,_#00C2FF00_60%)] opacity-40' />
      <div className='absolute right-0 top-0 z-0 flex h-full w-1/2 items-center justify-center p-6'>
        <div className='relative h-fit w-fit'>
          <div className='relative z-20 flex aspect-square h-40 items-center justify-center rounded-full bg-[#2510A5] '>
            <Image src={maxiLogo} alt='maxi-logo' className='h-28 w-28 ' />
          </div>
          <div className='absolute -top-8 left-24 z-0 flex aspect-square h-40 scale-[0.75] items-center justify-center rounded-full bg-[#004652] opacity-40 blur-sm '>
            <Image src={cstLogo} alt='maxi-logo' className='h-28 w-28 ' />
          </div>
          <div className='absolute -top-10 right-40 z-0 flex aspect-square h-40 scale-[0.8] items-center justify-center rounded-full bg-[#1C00CD] opacity-80 blur-[2px] '>
            <Image src={hedronLogo} alt='maxi-logo' className='h-28 w-28 ' />
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-6xl border-b border-gray-300/40 py-10'>
        <div className='flex max-w-[500px] flex-col gap-6'>
          <h1 className='text-[64px] font-bold leading-tight [text-wrap:balance]'>
            Explore the Hex Ecosystem
          </h1>
          <p className='text-lg text-gray-400'>
            Many projects are buildt around Hex, opening more doors to use Hex
          </p>
          <button className=' flex w-full max-w-sm justify-between rounded-md border-2 px-4 border-gray-400 bg-transparent py-6 text-lg hover:border-blue-300'>
            Submit your project <span>{'->'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
