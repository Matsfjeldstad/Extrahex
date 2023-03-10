import Button from '@/components/Button';

export default function Home() {
  return (
    <main
      className="bg-[#0B0B0B] h-screen w-full flex flex-col p-3 pattern-dots pattern-gray-200 pattern-bg-gray-100
    pattern-size-2 pattern-opacity-100 gap-6 justify-center items-center font-argentum"
    >
      {/* <Image src="/extrahexlogo.svg" width={64} height={64} alt="hex logo" /> */}
      <div className="text-gray-700">High yield, no minimum & decentralized design</div>
      <h1 className="text-6xl md:text-8xl uppercase text-center text-[#303030] font-black max-w-4xl">
        Earn{' '}
        <span className=" bg-clip-text bg-gradient-to-r text-transparent from-[#00A3FF] to-[#0E6697]">Trustless</span>{' '}
        Yield.
      </h1>
      <Button mobile={true} buttonText="Learn More" />
    </main>
  );
}
