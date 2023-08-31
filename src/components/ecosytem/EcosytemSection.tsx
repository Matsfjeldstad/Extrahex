import React from 'react';
import { Input } from '../ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import maxiLogo from '@/assets/photos/logos/MAXI.svg';
import Image from 'next/image';
import { Checkbox } from '../ui/checkbox';

type Props = {};

export default function EcosytemSection({}: Props) {
  return (
    <section className='relative z-10 mx-auto mt-10 min-h-[50vh] max-w-6xl p-4'>
      <label className='relative'>
        <Input
          className='w-1/2 text-gray-800'
          placeholder='search by name, description or ticker symbol'
        ></Input>
      </label>
      <div className='mt-6'>40 projects found</div>
      <div className='my-6 flex flex-col gap-12 md:flex-row'>
        <Accordion type='single' className='h-fit w-full md:w-1/5' collapsible>
          <AccordionItem value='item-1'>
            <AccordionTrigger>Category</AccordionTrigger>
            <AccordionContent>
              <label className='flex items-center gap-2 '>
                <Checkbox className='border-gray-200 bg-transparent  data-[state=checked]:bg-transparent'></Checkbox>
                PulseChain
              </label>
              <label className='mt-5 flex items-center gap-2 '>
                <Checkbox className='border-gray-200 bg-transparent  data-[state=checked]:bg-transparent'></Checkbox>
                Ethereum
              </label>
              <label className='mt-5 flex items-center gap-2 '>
                <Checkbox className='border-gray-200 bg-transparent  data-[state=checked]:bg-transparent'></Checkbox>
                PulseChain
              </label>
              <label className='mt-5 flex items-center gap-2 '>
                <Checkbox className='border-gray-200 bg-transparent  data-[state=checked]:bg-transparent'></Checkbox>
                Ethereum
              </label>
              <label className='mt-5 flex items-center gap-2 '>
                <Checkbox className='border-gray-200 bg-transparent  data-[state=checked]:bg-transparent'></Checkbox>
                PulseChain
              </label>
              <label className='mt-5 flex items-center gap-2 '>
                <Checkbox className='border-gray-200 bg-transparent  data-[state=checked]:bg-transparent'></Checkbox>
                Ethereum
              </label>
              <label className='mt-5 flex items-center gap-2 '>
                <Checkbox className='border-gray-200 bg-transparent  data-[state=checked]:bg-transparent'></Checkbox>
                PulseChain
              </label>
              <label className='mt-5 flex items-center gap-2 '>
                <Checkbox className='border-gray-200 bg-transparent  data-[state=checked]:bg-transparent'></Checkbox>
                Ethereum
              </label>
              <label className='mt-5 flex items-center gap-2 '>
                <Checkbox className='border-gray-200 bg-transparent  data-[state=checked]:bg-transparent'></Checkbox>
                PulseChain
              </label>
              <label className='mt-5 flex items-center gap-2 '>
                <Checkbox className='border-gray-200 bg-transparent  data-[state=checked]:bg-transparent'></Checkbox>
                Ethereum
              </label>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>Network</AccordionTrigger>
            <AccordionContent>
              <label className='flex items-center gap-2 '>
                <Checkbox className='border-gray-200 bg-transparent  data-[state=checked]:bg-transparent'></Checkbox>
                PulseChain
              </label>
              <label className='mt-5 flex items-center gap-2 '>
                <Checkbox className='border-gray-200 bg-transparent  data-[state=checked]:bg-transparent'></Checkbox>
                Ethereum
              </label>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className='flex w-full flex-col justify-center gap-6 md:w-4/5'>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <div className='flex h-[360px] flex-col gap-8 rounded-[24px] border-2 border-gray-500 p-6 duration-150 hover:border-blue-300'>
              <Image src={maxiLogo} alt='logo' className='h-12 w-12' />
              <div>
                <h5 className='text-base font-bold'>Maximus</h5>
                <p className='text-sm leading-loose text-[#828282]'>
                  Maximus is a smart contract for trustless pooling of a max length HEX stake.
                </p>
              </div>
              <div className='flex w-full flex-wrap gap-1 text-sm'>
                <div className='w-fit rounded bg-[#3B3B3B] px-2 py-1'>Stake pool</div>
                <div className='w-fit rounded bg-[#3B3B3B] px-2 py-1'>Smart contract</div>
                <div className='w-fit rounded bg-[#3B3B3B] px-2 py-1'>ERC-20</div>
                <div className='w-fit rounded bg-[#3B3B3B] px-2 py-1'>PRC-20</div>
              </div>
            </div>
            <div className='flex h-[360px] flex-col gap-8 rounded-[24px] border-2 border-gray-500 p-6 duration-150 hover:border-blue-300'>
              <Image src={maxiLogo} alt='logo' className='h-12 w-12' />
              <div>
                <h5 className='text-2xl font-bold'>Maximus</h5>
                <p className='text-sm leading-loose text-[#828282]'>
                  Maximus is a smart contract for trustless pooling of a max length HEX stake.
                </p>
              </div>
              <div className='flex w-full flex-wrap gap-1 text-sm'>
                <div className='w-fit rounded bg-[#3B3B3B] px-2 py-1'>Stake pool</div>
                <div className='w-fit rounded bg-[#3B3B3B] px-2 py-1'>Smart contract</div>
                <div className='w-fit rounded bg-[#3B3B3B] px-2 py-1'>ERC-20</div>
                <div className='w-fit rounded bg-[#3B3B3B] px-2 py-1'>PRC-20</div>
              </div>
            </div>
            <div className='flex h-[360px] flex-col gap-8 rounded-[24px] border-2 border-gray-500 p-6 duration-150 hover:border-blue-300'>
              <Image src={maxiLogo} alt='logo' className='h-12 w-12' />
              <div>
                <h5 className='text-2xl font-bold'>Maximus</h5>
                <p className='text-sm leading-loose text-[#828282]'>
                  Maximus is a smart contract for trustless pooling of a max length HEX stake.
                </p>
              </div>
              <div className='flex w-full flex-wrap gap-1 text-sm'>
                <div className='w-fit rounded bg-[#3B3B3B] px-2 py-1'>Stake pool</div>
                <div className='w-fit rounded bg-[#3B3B3B] px-2 py-1'>Smart contract</div>
                <div className='w-fit rounded bg-[#3B3B3B] px-2 py-1'>ERC-20</div>
                <div className='w-fit rounded bg-[#3B3B3B] px-2 py-1'>PRC-20</div>
              </div>
            </div>
            <div className='flex h-[360px] flex-col gap-8 rounded-[24px] border-2 border-gray-500 p-6 duration-150 hover:border-blue-300'>
              <Image src={maxiLogo} alt='logo' className='h-12 w-12' />
              <div>
                <h5 className='text-2xl font-bold'>Maximus</h5>
                <p className='text-sm leading-loose text-[#828282]'>
                  Maximus is a smart contract for trustless pooling of a max length HEX stake.
                </p>
              </div>
              <div className='flex w-full flex-wrap gap-1 text-sm'>
                <div className='w-fit rounded bg-[#3B3B3B] px-2 py-1'>Stake pool</div>
                <div className='w-fit rounded bg-[#3B3B3B] px-2 py-1'>Smart contract</div>
                <div className='w-fit rounded bg-[#3B3B3B] px-2 py-1'>ERC-20</div>
                <div className='w-fit rounded bg-[#3B3B3B] px-2 py-1'>PRC-20</div>
              </div>
            </div>
          </div>
          <p className='max-w-md text-center mx-auto text-base leading-normal mt-6 text-gray-400'>
            Listings are not endorsements and are only for informational purposes. Users should do
            their own research before interacting with them.
          </p>
        </div>
      </div>
    </section>
  );
}
