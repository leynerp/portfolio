'use client'
import LanguageSwitcher from './LanguageSwitcher';
import { NavLinks } from '@/constans';
import { i18n } from '@/i18n/i18n';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar () {
  const pathname = usePathname();
  return (
    <div className='fixed z-50  flex h-[65px] w-full   items-center justify-between  bg-[#03001417] py-1 shadow-lg shadow-[#2A0E61]/50 sm:flex '>
      <p className='ml-2 hidden w-full  font-mono text-[25px] text-white   sm:block'>{'<Leyner />'} </p>
      <nav className='w-[300px] min-w-[300px] rounded-full border border-[#7042f861] bg-[#030014Se] lg:min-w-[700px] '>
        <div className='flex justify-between  px-4 py-3 font-mono text-white '>
          {NavLinks.map((linkValue, index) => (
            <div key={linkValue.link} className={`flex  hover:scale-110 hover:underline ${pathname === linkValue.link ? 'scale-110 underline' : ''}`}>
              <Link className='flex cursor-pointer gap-x-2 ' href={linkValue.link}>
                <linkValue.icon />
                <p className='hidden font-bold lg:block'>{i18n.es.navbar[index]}</p>
              </Link>
            </div>
          ))}

        </div>
      </nav>
      <section className='w-full '>  <LanguageSwitcher /></section>

    </div>
  )
}
