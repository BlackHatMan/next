import '../styles/app.scss';
import '../styles/globals.scss';

import { Comic_Neue } from '@next/font/google';

const comic = Comic_Neue({
  weight: ['300', '400', '700'],
  style: ['italic', 'normal'],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          html: {
            font-family: ${comic.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps}></Component>
    </>
  );
}
