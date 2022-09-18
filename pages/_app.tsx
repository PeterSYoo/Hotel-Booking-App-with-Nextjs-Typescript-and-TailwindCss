import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <div className="bg-sectionBg">
        <Head>
          <title>TripGuide</title>
        </Head>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}

export default MyApp;
