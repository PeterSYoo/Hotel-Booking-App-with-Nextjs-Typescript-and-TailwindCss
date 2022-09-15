import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/header.components';
import Footer from '../components/footer.components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
