import React from 'react'
import Link from 'next/link';
import { Email, Linkedln } from './SvgComponent';

function SocialButtons () {
  return (
    <article className='flex gap-x-8'>
      <Link target='_blank' href='mailto:leyner.patterson@gmail.com' className='  flex items-center gap-x-3 rounded-full border-[2px] border-white px-4  py-[2px] text-sm text-white opacity-85  hover:scale-110'>
        <Email /> <span>Contácteme</span>
      </Link>
      <Link target='_blank' href='mailto:leyner.patterson@gmail.com' className=' flex items-center gap-x-3 rounded-full border-[2px] border-white px-4  py-[2px] text-sm text-white opacity-85  hover:scale-110'>
        <Linkedln /> <span>Linkedln</span>
      </Link>
    </article>
  )
}

export default SocialButtons
