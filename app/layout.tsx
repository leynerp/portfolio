import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from '@/components/NavBar'

import './globals.css';
// import StartsCanvas from '@/components/StartBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio of Leyner Patterson Tamayo.'
};

export default function RootLayout ({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} overflow-x-hidden overflow-y-scroll bg-[#030014] antialiased`}>
        <NavBar />
        {/* <StartsCanvas /> */}
        {children}
      </body>
    </html>
  );
}
