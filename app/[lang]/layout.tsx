import React from 'react'
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from '@/components/NavBar'
import '../globals.css';
import { type Locale } from '@/i18n/i18n';
import { getDictionary } from '@/dictionaries/get-diccionary';
import StartsCanvas from '@/components/StartBackground';
// import StartsCanvas from '@/components/StartBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio of Leyner Patterson Tamayo.'
};

export default async function RootLayout ({
  children,
  params
}: {
  children: React.ReactNode;
  params: {lang: Locale}
}) {
  const dictionary = await getDictionary(params.lang);
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${inter.className} overflow-x-hidden overflow-y-scroll bg-[#030014] antialiased`}>
        <NavBar lang={params.lang} dictionary={dictionary} />
        <StartsCanvas />
        {children}
      </body>
    </html>
  );
}
