'use client';
import React from 'react';
import { Skill as SkillIcon } from './SvgComponent';
import { skillDataFront, skillDataBack } from '@/config';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
export default function Skill ({ dictionary }:{dictionary:any}) {
  return (
    <section id='skill' className='mx-auto w-full items-start md:max-w-[750px]'>
      <h1 className=' flex  gap-x-3 text-3xl text-white opacity-80  '>
        <SkillIcon size={{ width: 40, height: 40 }} /> {dictionary.skills.title}
      </h1>
      <div className='mt-10 flex flex-col gap-y-10'>
        <article className='flex flex-col items-center gap-y-8'>
          <span className='text-[20px] font-bold text-gray-400'>{dictionary.skills.front}</span>
          <Swiper
            slidesPerView={8}
            loop
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={4000}
            modules={[Autoplay]}
            className='max-w-[100%] '
          >
            {skillDataFront.map((skill, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={skill.Image}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.height}
                  className='rounded-md'
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </article>
        <article className='flex flex-col items-center gap-y-8'>
          <span className='bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-2xl font-bold text-transparent'>{dictionary.skills.back}</span>
          <Swiper
            slidesPerView={6}
            loop
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true
            }}
            speed={5000}
            modules={[Autoplay]}
            className='max-w-[100%]'
          >
            {skillDataBack.map((skill, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={skill.Image}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.height}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </article>

      </div>
    </section>
  )
}
