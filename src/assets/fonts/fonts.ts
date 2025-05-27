import localFont from 'next/font/local';
import { Wix_Madefor_Text } from 'next/font/google';

export const classDisplay = localFont({
  src: [
    {
      path: './ClashDisplay-Extralight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './ClashDisplay-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './ClashDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './ClashDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './ClashDisplay-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './ClashDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-class-display',
  display: 'swap',
});

export const wixFont = Wix_Madefor_Text({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-wix-madefor-text',
  display: 'swap',
});
