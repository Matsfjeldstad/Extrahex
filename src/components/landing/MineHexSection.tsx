import { ExtraHexLogo } from '@/assets/photos/logos/Logos';
import wavyAnimation from '@/assets/gifs/wavyAnimation.webp';
import Image from 'next/image';

type Props = {};

export default function MineHexSection({}: Props) {
  return (
    <div className='relative mt-20 h-[100vh] w-full overflow-hidden'>
      <div className='relative z-10 flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-gray-950 via-gray-900/90 to-gray-950 px-4 py-10 text-center backdrop-blur-lg md:px-20'>
        <h2 className='flex max-w-2xl flex-col items-center text-center text-3xl font-bold leading-snug text-white [text-wrap:balance]'>
          Mine Hex with{' '}
          <span>
            <ExtraHexLogo className='h-[100px] fill-white' />{' '}
          </span>
        </h2>
        <h5 className='max-w-3xl text-base leading-normal text-gray-300 [text-wrap:balance] md:text-2xl'>
          Mine your Hex with ExtraHex for a seamless, user-friendly experience.
        </h5>
        <div className='flex w-fit gap-2 text-2xl font-bold text-white'>Comming soon</div>
      </div>
      <Image
        src={wavyAnimation}
        alt='wavy animation'
        className='absolute left-0 top-0 z-0 h-full w-full rotate-180 object-cover'
      />
    </div>
  );
}
