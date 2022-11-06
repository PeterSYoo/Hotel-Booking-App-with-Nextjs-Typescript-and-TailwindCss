import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/layout';
import { SessionProvider } from 'next-auth/react';
import {
  QueryClientProvider,
  QueryClient,
  Hydrate,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <SessionProvider session={pageProps.session}>
          <Layout>
            <div className="max-w-[1440px] mx-auto">
              <Component {...pageProps} />
            </div>
          </Layout>
        </SessionProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
