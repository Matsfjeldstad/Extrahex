import React from 'react';
import { Input } from '../ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import maxiLogo from '@/assets/photos/logos/MAXI.svg';
import Image from 'next/image';
import EcosystemData from '@/data/ecosytem.json';
import { Checkbox } from '../ui/checkbox';
import EcosystemCard from './ui/EcosystemCard';
import { data } from 'autoprefixer';

type Props = {};

export default function EcosytemSection({}: Props) {
  const data = EcosystemData;

  const categories: Set<string> = new Set();
  const networks: Set<string> = new Set();

  data.forEach(function (project) {
    categories.add(project.primary_category);

    project.secondary_categories.forEach((category) => {
      categories.add(category);
    });

    project.networks.forEach((network) => {
      networks.add(network);
    });
  });

  const uniqueCategories = Array.from(categories);
  const uniqueNetworks = Array.from(networks);

  return (
    <section className='relative z-10 mx-auto mt-10 min-h-[50vh] max-w-6xl p-4'>
      <label className='relative'>
        <Input
          className='w-1/2 text-gray-800'
          placeholder='search by name, description or ticker symbol'
        ></Input>
      </label>
      <div className='mt-6'>{data.length} projects found</div>
      <div className='my-6 flex flex-col gap-12 md:flex-row'>
        <Accordion
          type='single'
          className='h-fit w-full rounded-xl border border-gray-500 md:w-1/4'
          collapsible
        >
          <AccordionItem value='item-1' className='border-gray-500 px-6'>
            <AccordionTrigger>Category</AccordionTrigger>
            <AccordionContent>
              {uniqueCategories.map((category) => {
                return (
                  <label key={category} className='mt-5 flex items-center gap-2 '>
                    <Checkbox className='border-gray-200 bg-transparent data-[state=checked]:bg-transparent' />
                    {category}
                  </label>
                );
              })}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2' className='border-none  px-6'>
            <AccordionTrigger>Network</AccordionTrigger>
            <AccordionContent>
              {uniqueNetworks.map((network) => {
                return (
                  <label key={network} className='mt-5 flex items-center gap-2 '>
                    <Checkbox className='border-gray-200 bg-transparent data-[state=checked]:bg-transparent' />
                    {network}
                  </label>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className='flex w-full flex-col justify-center gap-6 md:w-3/4'>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {data.map((project) => {
              return (
                <EcosystemCard
                  key={project.project}
                  title={project.project}
                  image={project.logo}
                  description={project.description}
                  secondary_categories={project.secondary_categories}
                  project_website={project.project_website}
                  primary_category={project.primary_category}
                  twitter={project.twitter ? project.twitter : undefined}
                  github={project.github ? project.github : undefined}
                />
              );
            })}
            {/* <div className='group relative overflow-hidden rounded-xl p-0.5 cursor-pointer'>
              <div className='after:animate-border-rotate absolute h-full w-full scale-[1.8] bg-gray-800 after:absolute after:left-0 after:top-0 after:z-0 after:h-full after:w-full after:bg-gradient-to-l after:from-blue-300 after:via-transparent after:to-transparent after:opacity-0 after:transition-opacity group-hover:after:opacity-100'></div>
              <div className='relative z-10 h-full w-full rounded-xl p-6 bg-black'>
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
            </div> */}
          </div>
          <p className='mx-auto mt-6 max-w-md text-center text-base leading-normal text-gray-500'>
            Listings are not endorsements and are only for informational purposes. Users should do
            their own research before interacting with them.
          </p>
        </div>
      </div>
    </section>
  );
}
