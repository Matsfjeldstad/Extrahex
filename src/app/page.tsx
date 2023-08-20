export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="flex min-h-[100vh] flex-col items-center justify-center gap-5 p-6">
        <p className="text-2xl text-gray-500">
          High yield, no minimum & decentralized design
        </p>
        <h1 className="max-w-5xl text-center text-8xl font-black uppercase text-stone-800 [text-wrap:balance]">
          Earn{" "}
          <span className="bg-gradient-to-r from-[#0EA5FA] to-[#045989] bg-clip-text text-transparent">
            Trustless{" "}
          </span>{" "}
          Yeild.
        </h1>
        <button className="min-w-[100px] rounded-full bg-gradient-to-r from-[#0EA5FA] to-[#045989] px-6 py-2 text-xl text-white">
          Launch Dapp
        </button>
      </section>
      <section className="w-full p-6">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex h-[calc(100vh-85px)] w-full items-center justify-between gap-4 rounded-3xl bg-slate-100 pl-6">
            <div className="flex w-[40%] flex-col gap-2">
              <h2 className=" text-4xl font-bold text-gray-900 ">
                No middel men.
                <br />
                Just <span className="text-[#0EA5FA]">code.</span>
              </h2>
              <p className=" text-lg text-gray-500">
                ExtraHex is a decentralized protocol that allows users to
                deposit and earn interest on their assets.{" "}
                <a className="text-gray-700 underline">Learn more</a>
              </p>
            </div>
            <div className=" h-[50%] w-[50%] rounded-s-xl  bg-black p-4">
              <pre className="flex h-full items-center whitespace-pre font-mono text-white">
                <code>
                  <span className="text-purple-400">function</span>
                  <span className="text-blue-300"> _stakeUnlock</span>
                  <span className="text-yellow-400"> (</span>
                  <span className="text-gray-100">
                    GlobalsCache memory g, StakeCache memory st
                  </span>
                  <span className="text-yellow-400"> )</span>
                  <div className="ml-6 mt-2 text-gray-100">
                    private
                    <br />
                    pure
                  </div>
                  <div className="whitespace-normal text-yellow-400">{"{"}</div>
                  <div className="ml-6 mt-2 text-gray-100">
                    g._stakeSharesTotal -= st._stakeShares;
                    <br />
                    st._unlockedDay = g._currentDay;
                  </div>
                  <div className="whitespace-normal text-yellow-400">{"}"}</div>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
