import Image, { StaticImageData } from 'next/image';
import wavyAnimation from '@/assets/gifs/wavyAnimation.webp';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
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
import { Arrow, EthLogo, PlsLogo } from '@/assets/icons/Icons';

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

// const with half of the objects in ecosystem

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between '>
      <section>
        <div className='relative flex h-[100vh] w-screen max-w-7xl items-center gap-4 overflow-hidden rounded-[40px] bg-slate-400'>
          <div className='z-10 flex h-full w-full flex-col justify-center gap-4 bg-gradient-to-br from-green-600 to-cyan-500/40 px-20 py-10 backdrop-blur-[5px]'>
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
      <section className='mx-auto mt-20 flex h-screen w-full max-w-4xl items-center justify-between gap-4 text-white'>
        <div className='flex max-w-lg flex-col gap-3'>
          <p>3+ years of flawless operation</p>
          <h2 className='text-5xl font-bold'>
            HEX Some cool stuff about it so this heading is nice
          </h2>
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
                  className='w-[40px] sm:w-[50px] md:w-[60px] lg:w-[80px]'
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
                  className='w-[40px] sm:w-[50px] md:w-[60px] lg:w-[80px]'
                />
              )}
            </div>
          ))}
        </div>
      </section>
      <section className='mx-auto mt-20 flex h-screen w-full max-w-6xl items-center justify-between gap-4 text-white'>
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
      </section>
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
      <section className='relative mt-20 flex h-screen w-full items-center justify-between gap-4 text-white'>
        <div className='mx-auto flex w-full max-w-lg flex-col gap-3 text-center'>
          <p>No KYC</p>
          <h2 className=' text-5xl font-bold leading-normal'>
            <span className='bg-gradient-to-br from-[#9BFF78] to-[#00A2A2] bg-clip-text text-transparent'>
              Private by design.
              <br />
            </span>
            No Email, Phone or ID required
          </h2>
          <Link href={''}> Read more {'->'} </Link>
        </div>
      </section>
    </main>
  );
}
