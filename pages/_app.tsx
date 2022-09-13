import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/header.components';
import Footer from '../components/footer.components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
