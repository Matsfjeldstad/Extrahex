import React from 'react';
import baseLogo from '@/assets/photos/logos/base.png';
import hedronLogo from '@/assets/photos/logos/hedron.png';
import icosaLogo from '@/assets/photos/logos/icosa.png';
import maxiLogo from '@/assets/photos/logos/maxi.png';
import polyLogo from '@/assets/photos/logos/poly.png';
import trioLogo from '@/assets/photos/logos/trio.png';
import partyLogo from '@/assets/photos/logos/party.png';
import ppLogo from '@/assets/photos/logos/pp.png';
import teamLogo from '@/assets/photos/logos/team.png';
import commisLogo from '@/assets/photos/logos/commis.png';
import imLogo from '@/assets/photos/logos/internetMoney.png';
import deciLogo from '@/assets/photos/logos/deci.png';
import luckyLogo from '@/assets/photos/logos/lucky.png';
import texanLogo from '@/assets/photos/logos/texan.png';
import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type Props = {};

type Ecosystem = {
    name: string;
    img: StaticImageData;
    bgColor: string;
  };
  
  const ecoSystem: Ecosystem[] = [
    {
      name: 'Hedron',
      img: hedronLogo,
      bgColor: 'bg-[#1C00CD]',
    },
    {
      name: 'Icosa',
      img: icosaLogo,
      bgColor: 'bg-[#FFFFFF]',
    },
    {
      name: 'Maxi',
      img: maxiLogo,
      bgColor: 'bg-[#2510A5]',
    },
    {
      name: 'Deci',
      img: deciLogo,
      bgColor: 'bg-[#6A0000]',
    },
    {
      name: 'Lucky',
      img: luckyLogo,
      bgColor: 'bg-[#004218]',
    },
    {
      name: 'Trio',
      img: trioLogo,
      bgColor: 'bg-[#A7A7A7]',
    },
    {
      name: 'Trio',
      img: trioLogo,
      bgColor: 'bg-[#2510A5]',
    },
    {
      name: 'Base',
      img: baseLogo,
      bgColor: 'bg-[#E17034]',
    },
  ];
  
  const ecoSystem2: Ecosystem[] = [
    {
      name: 'Team',
      img: teamLogo,
      bgColor: 'bg-[#1B3A42]',
    },
    {
      name: 'Team',
      img: teamLogo,
      bgColor: 'bg-[#1B3A42]',
    },
    {
      name: 'Poly',
      img: polyLogo,
      bgColor: 'bg-[#170121]',
    },
    {
      name: 'Party',
      img: partyLogo,
      bgColor: 'bg-[#97F8FF]',
    },
    {
      name: 'PP',
      img: ppLogo,
      bgColor: 'bg-[#FFFFFF]',
    },
    {
      name: 'Commis',
      img: commisLogo,
      bgColor: 'bg-[#fff]',
    },
    {
      name: 'IM',
      img: imLogo,
      bgColor: 'bg-[#222222]',
    },
    {
      name: 'Texan',
      img: texanLogo,
      bgColor: 'bg-[#004218]',
    },
  ];

export default function EcosystemSection({}: Props) {
  return (
    <section className='relative mt-20 flex h-screen w-full flex-col items-center justify-center gap-4 overflow-hidden text-white'>
      <div className=' absolute left-0 top-0 h-screen w-[30%] bg-gradient-to-r  from-gray-950 via-gray-950/50 to-transparent' />
      <div className=' absolute right-0 top-0 h-screen w-[30%] bg-gradient-to-l  from-gray-950 via-gray-950/50 to-transparent' />
      <div className='flex gap-10 md:gap-20'>
        {ecoSystem.map((eco) => (
          <div
            key={eco.name}
            className={cn(
              'flex aspect-square w-[60px] items-center justify-center rounded-full bg-slate-400 sm:w-[80px] md:w-[100px] lg:w-[120px]',
              eco.bgColor,
            )}
          >
            {eco.img && (
              <Image
                src={eco.img}
                alt={eco.name}
                className='w-[40px] sm:w-[40px] md:w-[50px] lg:w-[60px]'
              />
            )}
          </div>
        ))}
      </div>
      <div className='relative my-24 flex flex-col items-center justify-center gap-5 text-center text-2xl'>
        <h2 className=' text-5xl font-bold'>Expaning the Ecosystem</h2>
        <p className='max-w-[700px] text-gray-300 [text-wrap:balance]'>
          Many projects are buildt around Hex, opening more doors to use Hex
        </p>
        <Link className='underline' href={''}>
          Explore the Ecosystem{'->'}
        </Link>
      </div>
      <div className='flex gap-10 md:gap-20'>
        {ecoSystem2.map((eco) => (
          <div
            key={eco.name}
            className={cn(
              'flex aspect-square w-[60px] items-center justify-center rounded-full bg-slate-400 sm:w-[80px] md:w-[100px] lg:w-[120px]',
              eco.bgColor,
            )}
          >
            {eco.img && (
              <Image
                src={eco.img}
                alt={eco.name}
                className='w-[40px] sm:w-[40px] md:w-[50px] lg:w-[60px]'
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
