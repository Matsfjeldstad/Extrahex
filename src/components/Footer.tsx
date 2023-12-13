import { ExtraHexLogo } from '@/assets/photos/logos/Logos';
import React from 'react';

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className='py-6 border-t border-gray-800 text-white'>
      <div className='container mx-auto flex flex-wrap py-10 items-center justify-between '>
        <div className='mb-6 w-full md:mb-0 md:w-1/4'>
          <ExtraHexLogo className='h-12 fill-white' />
          <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <ul className='mb-6 w-full md:mb-0 md:w-1/4'>
          <li>
            <a href='#' className='hover:text-gray-300'>
              What is Hex
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-gray-300'>
              The ecosystem
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-gray-300'>
              Buy hex
            </a>
          </li>
        </ul>
        <div className='mb-6 w-full md:mb-0 md:w-1/4'>
          <h4 className='mb-2'>Follow Us</h4>
          <div className='flex space-x-3'>
            <a href='#'>Facebook</a>
            <a href='#'>X</a>
            <a href='#'>Instagram</a>
          </div>
        </div>
      </div>
      <div className='mt-6 border-t border-gray-700 pt-4 text-center'>
        <p className='text-sm text-gray-700'>© 2023 Mats Fjeldstad. All rights reserved.</p>
      </div>
    </footer>
  );
}
