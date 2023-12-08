import Link from 'next/link';
import React from 'react';
import Stats from './stats/Stats';

type Props = {};

export default function StatsSection({}: Props) {
  return (
    <section className='mx-auto mt-20 flex h-fit w-full max-w-4xl flex-col gap-8 p-4 text-white md:min-h-screen md:flex-row md:items-center md:justify-between md:gap-4'>
      <div className='flex max-w-lg flex-col gap-3'>
        <p>3+ years of flawless operation</p>
        <h2 className='text-4xl font-bold [text-wrap:balance] md:text-5xl'>
          HEX Some cool stuff about it so this heading is nice
        </h2>
        <Link href={''}> Read more {'->'} </Link>
      </div>
      <Stats />

    </section>
  );
}
