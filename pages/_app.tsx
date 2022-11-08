import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import {
  QueryClientProvider,
  QueryClient,
  Hydrate,
} from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { LoadingSpinner } from '../Components/LoadingSpinner.components';
import { Layout } from '../Components/Layout';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };

    const end = () => {
      setLoading(false);
    };

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <SessionProvider session={pageProps.session}>
          <ThemeProvider enableSystem={true} attribute="class">
            <Layout>
              {loading ? (
                <>
                  <LoadingSpinner />
                </>
              ) : (
                <>
                  <div className="max-w-[1440px] mx-auto">
                    <Component {...pageProps} />
                  </div>
                </>
              )}
            </Layout>
          </ThemeProvider>
        </SessionProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
