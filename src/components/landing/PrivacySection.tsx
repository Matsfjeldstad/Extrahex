import Link from "next/link";
import React from "react";

type Props = {};

export default function PrivacySection({}: Props) {
  return <section className='relative mt-20 flex h-screen w-full items-center justify-between gap-4 text-white'>
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
</section>;
}
