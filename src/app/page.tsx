import Image from "next/image";
import wavyAnimation from "@/assets/gifs/wavyAnimation.webp";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <section>
        <div className="relative flex h-[100vh] w-screen max-w-7xl items-center gap-4 overflow-hidden rounded-[40px] bg-slate-400">
          <div className="z-10 flex h-full w-full flex-col justify-center gap-4 bg-gradient-to-br from-green-600 to-cyan-500/40 px-20 py-10 backdrop-blur-[5px]">
            <h1 className="max-w-2xl text-6xl font-bold text-white [text-wrap:balance]">
              Earn Descentralized Yeild. All onchain
            </h1>
            <h5 className="max-w-3xl text-2xl text-gray-300">
              Hex is a descentralized smart contract where you can lock up your
              coins, and mint your own rewards.{" "}
            </h5>
            <div className="flex w-full gap-2">
              <Button variant="default" className=" w-full max-w-[200px]">
                Open dapp
              </Button>
              <Button variant="secondary" className="w-full max-w-[200px]">
                Read more
              </Button>
            </div>
          </div>
          <Image
            src={wavyAnimation}
            alt="wavy animation"
            className="absolute z-0 h-full w-full object-cover"
          />
        </div>
      </section>
      <section className="mt-20 flex h-screen w-full items-center justify-center gap-4 text-white">
        <div className="flex max-w-lg flex-col gap-3">
          <p>1390d of flawless operation</p>
          <h2 className="text-6xl font-bold">
            HEX Some cool stuff about it so this heading is nice
          </h2>
          <Link href={""}> Read more {"->"} </Link>
        </div>
        <div className=" flex max-w-lg flex-col gap-3">
          <h2 className="text-6xl font-bold">500k</h2>
          <div> Read more {"->"} </div>
        </div>
      </section>
    </main>
  );
}
