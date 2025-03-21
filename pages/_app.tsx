import '../styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from '@next/font/local';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';

import { Merriweather } from '@next/font/google';

const merri = Merriweather({
  weight: '700',
  subsets: ['latin'],
  variable: '--merri-font',
});

const bely = localFont({
  src: './Bely-Display.ttf',
  variable: '--bely-font',
  display: 'swap',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <style jsx global>{`
        :root {
          --merri-font: ${merri.style.fontFamily};
          --bely-font: ${bely.style.fontFamily};
        }
      `}</style>
      <Navbar />

      <Component {...pageProps} />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default MyApp;
