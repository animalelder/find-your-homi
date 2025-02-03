import { Poppins, Roboto } from 'next/font/google';

export const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-roboto',
  subsets: ['latin'],
  display: 'swap',
});

export const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap',
});
