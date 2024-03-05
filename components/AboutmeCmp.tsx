import React from 'react'
import { AboutMe } from './SvgComponent'
import { Rubik } from 'next/font/google'
const rubik = Rubik({
  subsets: ['latin'],
  weight: ['500']
})
export default function AboutmeCmp ({ dictionary }:{dictionary:any}) {
  return (
    <section id='about-me' className='mx-auto w-full  md:max-w-[750px]'>
      <h1 className=' flex  gap-x-3 text-3xl text-white opacity-80  '>
        <AboutMe size={{ width: 40, height: 40 }} /> {dictionary.aboutme.title}
      </h1>
      <div
        className={`${rubik.className} order-2 mt-8 text-pretty text-white opacity-80 md:order-1 [&>p>strong]:font-mono [&>p>strong]:font-normal [&>p>strong]:text-yellow-500 [&>p]:mb-4`}
      >
        <p>{dictionary.aboutme.p1} <strong> {dictionary.aboutme.p1Strong}</strong></p>
        <p>{dictionary.aboutme.p2} <strong> {dictionary.aboutme.p2Strong}</strong></p>
        <p>{dictionary.aboutme.p3} <strong> {dictionary.aboutme.p3Strong}</strong></p>
      </div>
    </section>
  )
}
