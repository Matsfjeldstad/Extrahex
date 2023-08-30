import React from 'react';
import { Button } from '../ui/button';
import wavyAnimation from '@/assets/gifs/wavyAnimation.webp';
import Image from 'next/image';

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <section>
      <div className='relative flex h-[90vh] w-screen max-w-7xl items-center gap-4 overflow-hidden rounded-[40px] bg-slate-400'>
        <div className='z-10 flex h-full w-full flex-col justify-center gap-4 bg-gradient-to-br from-green-600 to-cyan-500/60 px-20 py-10 backdrop-blur-[5px]'>
          <h1 className='max-w-2xl text-6xl font-bold text-white [text-wrap:balance]'>
            Earn Descentralized Yeild. All onchain
          </h1>
          <h5 className='max-w-3xl text-2xl text-gray-300'>
            Hex is a descentralized smart contract where you can lock up your coins, and mint your
            own rewards.{' '}
          </h5>
          <div className='flex w-full gap-2'>
            <Button variant='default' className=' w-full max-w-[200px]'>
              Open dapp
            </Button>
            <Button variant='secondary' className='w-full max-w-[200px]'>
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
