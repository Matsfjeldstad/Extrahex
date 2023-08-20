import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ExtraHex',
  description: 'ExtraHex is an alternative front end for Hex.com',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className + ' ' + 'bg-slate-200'}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
