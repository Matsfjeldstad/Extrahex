import Link from 'next/link';
import React from 'react';

type Props = {};

export default function StatsSection({}: Props) {
  return (
    <section className='mx-auto mt-20 flex h-screen w-full max-w-4xl items-center justify-between gap-4 text-white'>
      <div className='flex max-w-lg flex-col gap-3'>
        <p>3+ years of flawless operation</p>
        <h2 className='text-5xl font-bold'>HEX Some cool stuff about it so this heading is nice</h2>
        <Link href={''}> Read more {'->'} </Link>
      </div>
      <div className=' flex max-w-lg flex-col gap-10'>
        <div className='flex flex-col gap-2'>
          <h3 className='bg-gradient-to-br from-[#9BFF78] to-[#00A2A2] bg-clip-text text-6xl font-bold text-transparent'>
            500k
          </h3>
          <div> Hex Holders </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='bg-gradient-to-br from-[#9BFF78] to-[#00A2A2] bg-clip-text text-6xl font-bold text-transparent'>
            120k
          </h3>
          <div> Hex Miners </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='bg-gradient-to-br from-[#9BFF78] to-[#00A2A2] bg-clip-text text-6xl font-bold text-transparent'>
            60B
          </h3>
          <div> Locked Hex Supply </div>
        </div>
      </div>
    </section>
  );
}
