import Image from 'next/image';
import wavyAnimation from '@/assets/gifs/wavyAnimation.webp';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <section>
        <div className="overflow-hidden relative flex gap-4 items-center rounded-[40px] max-w-7xl w-screen bg-slate-400 h-[100vh]">
          <div className="px-20 py-10 bg-gradient-to-br from-green-600 to-cyan-500/40 backdrop-blur-[5px] flex flex-col gap-4 justify-center w-full h-full z-10">
            <h1 className="text-6xl font-bold max-w-2xl [text-wrap:balance] text-white">
              Earn Descentralized Yeild. All onchain
            </h1>
            <h5 className="text-2xl max-w-3xl text-gray-300">
              Hex is a descentralized smart contract where you can lock up your coins, and mint your own rewards.{' '}
            </h5>
            <div className="w-full flex gap-2">
              <Button variant="default" className=" w-full max-w-[200px]">
                Open dapp
              </Button>
              <Button variant="secondary" className="w-full max-w-[200px]">
                Read more
              </Button>
            </div>
          </div>
          <Image src={wavyAnimation} alt="wavy animation" className="w-full h-full object-cover z-0 absolute" />
        </div>
      </section>
      <section className="flex gap-4 items-center justify-center w-full mt-20 h-screen text-white">
        <div className="flex flex-col gap-3 max-w-lg">
          <p>1390d of flawless operation</p>
          <h2 className="text-6xl font-bold">HEX Some cool stuff about it so this heading is nice</h2>
          <Link href={''}> Read more {'->'} </Link>
        </div>
        <div className="flex flex-col gap-3 max-w-lg">
          <h2 className="text-6xl font-bold">500k</h2>
          <div> Read more {'->'} </div>
        </div>
      </section>
    </main>
  );
}
