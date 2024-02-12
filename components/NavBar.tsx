'use client'
import LanguageSwitcher from './LanguageSwitcher';
import { NavLinks } from '@/config';
import { type Locale } from '@/i18n/i18n';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NavBar ({ lang, dictionary }:{lang: Locale, dictionary:any}) {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const pathname = usePathname();
  return (
    <header className='fixed top-0 z-50  flex h-[65px] w-full   items-center justify-between  bg-[#03001417] py-1 shadow-lg shadow-[#2A0E61]/50 sm:flex '>
      <p className='ml-2 hidden w-full  font-mono text-[25px] text-white   sm:block'>{'<Leyner />'} </p>
      <nav className={`w-[300px] min-w-[300px] rounded-full border border-[#7042f861] bg-[#030014Se] lg:min-w-[700px] ${isVisible ? 'bg-[#2A0E61]/90' : ''} `}>
        <div className='flex justify-between  px-4 py-3 font-mono text-white '>
          {NavLinks.map((linkValue) => (
            <div key={linkValue.link} className={`flex  hover:scale-110 hover:underline ${pathname === linkValue.link ? 'scale-110 underline' : ''}`}>
              <Link className='flex cursor-pointer gap-x-2 ' href={linkValue.link}>
                <linkValue.icon size={{ width: linkValue.size.width, height: linkValue.size.height }} />
                <p className='hidden font-bold lg:block'>{dictionary.navigation[linkValue.ref]}</p>
              </Link>
            </div>
          ))}

        </div>
      </nav>
      <section className='w-full '>  <LanguageSwitcher lang={lang} /></section>

    </header>
  )
}
