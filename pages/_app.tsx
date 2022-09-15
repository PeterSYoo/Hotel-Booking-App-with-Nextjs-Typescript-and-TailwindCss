import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/header.components';
import Footer from '../components/footer.components';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-sectionBg">
      <Head>
        <title>Hotel Booking</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
