import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={pageProps.session}>
        <div className="bg-sectionBg">
          <Head>
            <title>TripGuide</title>
          </Head>
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
