import Link from "next/link";
import React from "react";

type Props = {};

export default function YeildSection({}: Props) {
  return <section className='mx-auto mt-20 flex h-screen w-full max-w-6xl items-center justify-between gap-4 text-white'>
  <div className='flex max-w-lg flex-col gap-3'>
    <p>Yeild</p>
    <h2 className='text-5xl font-bold leading-normal'>
      True{' '}
      <span className='bg-gradient-to-br from-[#9BFF78] to-[#00A2A2] bg-clip-text text-transparent'>
        Decentalized{' '}
      </span>
      Yield.
    </h2>
  </div>
  <div className='flex w-fit max-w-lg flex-col gap-4'>
    <p className='w-fit text-2xl text-gray-300'>
      The yeild in HEX mining comes from a capped 3.69% inflation, bonuses and penalties.{' '}
    </p>
    <Link href={''}> Read more {'->'} </Link>
  </div>
</section>;
}
