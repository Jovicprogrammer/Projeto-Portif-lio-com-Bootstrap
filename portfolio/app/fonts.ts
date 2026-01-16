import localFont from 'next/font/local';

export const GoodOld = localFont({
  src: [
    {
      path: './fonts/GoodOldDOSSmooth.ttf',
      weight: '300',
    },

  ],
  variable: '--font-goodold',
  display: 'swap',
});

export const Creato = localFont({
  src: [
    {
      path: './fonts/CreatoDisplay-Regular.otf',
      weight: '300',
    },

  ],
  variable: '--font-creato',
  display: 'swap',
});
