import React from 'react';
import Image from 'next/image';
import { Github, Twitter } from '@/assets/photos/logos/Logos';

type Card = {
  image: string;
  title: string;
  description: string;
  primary_category: string;
  project_website: string;
  secondary_categories: string[];
  twitter?: string;
  github?: string;
};

export default function EcosystemCard({
  image,
  title,
  description,
  secondary_categories,
  primary_category,
  project_website,
  twitter,
  github, //   project_website,
}: Card) {
  return (
    <div className='relative flex h-[360px] flex-col gap-8 rounded-[24px] border-2 border-gray-500 bg-gray-950 p-6 duration-150 hover:border-blue-300 '>
      <a className='absolute inset-0 z-0 h-full w-full' href={project_website} target='_blank' />
      <div className='flex justify-between'>
        <Image src={image} alt='logo' width={100} height={100} className='h-12 w-12' />
        <div className='flex'>
          {github && (
            <a
              href={github}
              target='_blank'
              className='group relative z-20 flex h-8 w-8 items-center justify-center'
            >
              <Github className='w-6 fill-gray-400 duration-200 group-hover:fill-gray-200' />
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target='_blank'
              className='group relative z-20 flex h-8 w-8 items-center justify-center'
            >
              <Twitter className='w-6 fill-gray-400 duration-200 group-hover:fill-gray-200' />
            </a>
          )}
        </div>
      </div>
      <div>
        <h5 className='text-base font-bold'>{title}</h5>
        <p className='text-sm leading-loose text-[#828282]'>{description}</p>
      </div>
      <div className='flex w-full flex-wrap gap-2 text-sm'>
        <div className='w-fit rounded bg-[#3B3B3B] px-2 py-1'>{primary_category}</div>
        {secondary_categories.map((category) => {
          return (
            <div key={category} className='w-fit rounded bg-[#3B3B3B] px-2 py-1'>
              {category}
            </div>
          );
        })}
      </div>
    </div>
  );
}
