import React from 'react';

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className="bg-gray-200/70 backdrop-blur-lg fixed top-0 w-screen">
      <div className="mx-auto relative max-w-7xl flex justify-between items-center h-20 p-4">
        <div>Logo</div>
        <nav className="flex items-center justify-center gap-2 absolute mx-auto w-full">
          <div>Home</div>
          <div>about</div>
          <div>contact</div>
          <div>contact</div>
        </nav>
        <button className="bg-gradient-to-r from-[#0EA5FA] to-[#045989] text-base text-white rounded-full py-2 px-6 min-w-[100px]">
          Launch Dapp
        </button>
      </div>
    </header>
  );
}
