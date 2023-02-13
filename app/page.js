import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-black text-white h-screen w-screen flex flex-col  gap-6 justify-center items-center">
      <Image src="/extrahexlogo.svg" width={64} height={64} alt="hex logo" />
      <h1 className=" text-5xl uppercase font-bold">A New Hex Staking Interface</h1>
      <h2 className="text-gray-300 text-lg">Comming Soon</h2>
    </main>
  );
}
