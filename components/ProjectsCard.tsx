'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectsData } from '@/types.d.ts/types'
import { Lato, Dancing_Script } from 'next/font/google'
import Image from 'next/image';
const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300']
})
const DancingS = Dancing_Script({
  subsets: ['latin'],
  weight: ['700']
})
export default function ProjectsCard ({ project, dictionary }:{project:ProjectsData, dictionary:any}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { title, description, image, url, technology } = project;
  function handleFlip () {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div
      onClick={handleFlip}
      className='h-[280px] w-[360px] cursor-pointer rounded-md '
    >
      <motion.div
        className='flip-card-inner size-full'
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: 'normal' }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div
          style={{ backgroundImage: `url(${image})` }}
          className='flip-card-front group relative size-full rounded-lg bg-cover bg-center p-4 text-white'
        >
          <div className='absolute inset-0 size-full rounded-md bg-black opacity-0 group-hover:opacity-40' />
          <div className='absolute inset-0 z-[20] hidden size-full items-center justify-center pb-10 text-[20px] group-hover:flex'>
            {dictionary.projects.know} &gt;
          </div>
        </div>

        <div className='flip-card-back group relative size-full rounded-lg bg-cover bg-center p-4 text-white'>
          <div className='absolute inset-0 z-[-1] size-full rounded-lg border border-blue-400 bg-black  shadow' />
          <div className='z-[30] flex flex-col gap-1 py-1'>
            <h5 className={`${DancingS.className} mb-1 text-xl font-bold tracking-tight text-white opacity-90`}>{title}</h5>

            <p className='mb-3 h-[160px]  font-normal text-gray-500 '>{description}</p>
            <section className='flex items-center justify-between gap-x-4'>
              <a href={url} target='_blank' className='inline-flex items-center font-medium text-blue-600 hover:underline'>
                {dictionary.projects.view}
                <svg className='ms-2.5 size-3 rtl:rotate-[270deg]' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 18 18'>
                  <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778' />
                </svg>
              </a>
              <ul className='flex gap-x-2'>
                {
                  technology.map(value => (
                    <li key={value}>
                      <Image className='rounded-md' src={value} height={20} width={20} alt='Tecno' />
                    </li>
                  ))
                }
              </ul>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
