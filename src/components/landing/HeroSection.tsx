import React from 'react';
import { Button } from '../ui/button';
import wavyAnimation from '@/assets/gifs/wavyAnimation.webp';
import Image from 'next/image';
import { ExtraHexLogo } from '../../../public/logos/Logos';

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <section className='w-full p-4 md:px-10'>
      <div className='relative mx-auto flex h-full min-h-[80vh] w-full max-w-7xl items-center gap-4 overflow-hidden rounded-[40px] bg-slate-400'>
        <div className='z-10 flex h-full min-h-[80vh]  w-full flex-col gap-8 bg-gradient-to-br from-blue-950 via-gray-900/90 to-blue-950/90 px-5 py-10 text-white backdrop-blur-[5px] md:justify-center md:px-20'>
          <ExtraHexLogo className='h-[40px] fill-white' />
          <h1 className='max-w-2xl text-4xl xs:text-[48px] font-bold leading-tight text-white md:text-6xl'>
            Earn Descentralized Yeild. All onchain
          </h1>
          <h5 className='max-w-3xl text-lg text-gray-200 md:text-2xl'>
            Hex is a descentralized smart contract where you can lock up your coins, and mint your
            own rewards.{' '}
          </h5>
          <div className='flex w-full gap-2 text-lg'>
            {/* <Button
              variant='default'
              className='h-12 w-fit max-w-[200px] bg-white text-gray-800 hover:bg-gray-200'
            >
              Open dapp
            </Button> */}
            <Button variant='outline' className='h-12 w-fit max-w-[200px] bg-transparent'>
              Read more
            </Button>
          </div>
        </div>
        <Image
          src={wavyAnimation}
          alt='wavy animation'
          className='absolute z-0 h-full w-full object-cover'
        />
      </div>
    </section>
  );
}
