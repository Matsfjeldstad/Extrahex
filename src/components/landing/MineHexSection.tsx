import { ExtraHexLogo } from '@/assets/photos/logos/Logos';
import wavyAnimation from '@/assets/gifs/wavyAnimation.webp';
import Image from 'next/image';

type Props = {};

export default function MineHexSection({}: Props) {
  return (
    <section className='my-20'>
      <div className='relative flex h-[90vh] w-screen max-w-7xl items-center gap-4 overflow-hidden rounded-[40px] bg-slate-400'>
        <div className='z-10 flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-gray-950 to-gray-800/90 px-20 py-10 text-center backdrop-blur-[5px]'>
          <h1 className='flex max-w-2xl flex-col items-center text-center text-3xl font-bold leading-snug text-white [text-wrap:balance]'>
            Mine Hex with{' '}
            <span>
              <ExtraHexLogo className='h-[100px] fill-white' />{' '}
            </span>
          </h1>
          <h5 className='max-w-3xl text-2xl leading-normal  text-gray-300'>
            Mine your Hex with ExtraHex for a seamless, user-friendly experience.
          </h5>
          <div className='flex w-fit gap-2 text-2xl font-bold text-white'>Comming soon</div>
        </div>
        <Image
          src={wavyAnimation}
          alt='wavy animation'
          className='absolute z-0 h-full w-full rotate-180 object-cover'
        />
      </div>
    </section>
  );
}
