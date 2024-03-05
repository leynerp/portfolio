'use client'
import LanguageSwitcher from './LanguageSwitcher';
import { NavLinks } from '@/config';
import { type Locale } from '@/i18n/i18n';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function NavBar ({ lang, dictionary }:{lang: Locale, dictionary:any}) {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const initIntersection = () => {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('header nav a');

    const callback = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navItems.forEach((item) => {
            if (item.getAttribute('aria-label') === entry.target.id) {
              console.log(item)
              item.classList.add('scale-110', 'underline');
            } else {
              item.classList.remove('scale-110', 'underline');
            }
          })
        }
      })
    }
    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    })

    sections.forEach((section) => {
      observer.observe(section)
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    initIntersection();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className='fixed top-0 z-50  flex h-[65px] w-full   items-center  justify-between  bg-[#03001417] py-1 shadow-lg shadow-[#2A0E61]/50 sm:flex '>
      <p className='ml-2 hidden w-full  font-mono text-[25px] text-white   sm:block'>{'<Leyner />'} </p>
      <nav className={`ml-3 w-[300px] min-w-[300px] rounded-full border border-[#7042f861] bg-[#030014Se] md:ml-10 lg:min-w-[700px] ${isVisible ? 'bg-[#2A0E61]/90' : ''} `}>
        <div className='flex justify-between  px-4 py-3 font-mono text-white '>
          {NavLinks.map((linkValue, item) => (
            <div key={linkValue.link} className='flex  hover:scale-110 hover:underline'>
              <Link aria-label={linkValue.ref} className='flex cursor-pointer gap-x-2 transition ' href={linkValue.link}>
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
