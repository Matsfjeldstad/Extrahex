import { Arrow, EthLogo, PlsLogo } from '@/assets/icons/Icons';
import Link from 'next/link';
import React from 'react';

type Props = {};

export default function ChainSection({}: Props) {
  return (
    <section className='relative mt-20 flex h-screen w-full items-center justify-between gap-4 text-white'>
      <div className='absolute left-0 top-0 z-0 h-screen w-1/2 bg-gradient-to-r from-pink-500 to-transparent opacity-50' />
      <div className='z-10 mx-auto flex w-full max-w-6xl items-center justify-between'>
        <div className='flex w-fit max-w-lg justify-end gap-4'>
          <div className='relative'>
            <div className='relative left-24 z-20 flex aspect-square w-[160px] items-center justify-center rounded-full bg-[linear-gradient(215deg,_#00eaff_-5%,#0080ff_23%,#8000ff_50%,#e619e6_77%,#ff0000_105%)]'>
              <PlsLogo className='w h-16' />
            </div>
            <div className='absolute left-0 top-0 z-10 flex aspect-square w-[160px] items-center justify-center rounded-full bg-green-600 bg-gradient-to-br from-[#00FF85] to-[#02302B]'>
              <EthLogo className='w h-16' />
            </div>
          </div>
          <div className='relative left-20'>
            <p className='text-sm'>1300x Cheaper Gas Fees</p>
            <Arrow className='mt-4' />
          </div>
        </div>
        <div className='flex max-w-lg flex-col gap-3'>
          <p>Blockchains</p>
          <h2 className='text-5xl font-bold leading-normal'>
            Same Contract,
            <br />
            Same Adress,
            <br />
            Diffrent Chains
          </h2>
          <Link href={''}> Read more {'->'} </Link>
        </div>
      </div>
    </section>
  );
}
