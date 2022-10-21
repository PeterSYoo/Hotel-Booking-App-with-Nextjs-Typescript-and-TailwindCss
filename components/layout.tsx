import Head from "next/head";
import Footer from "./footer.components";
import Header from "./header.components";
import { Html } from "next/document";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>TripGuide</title>
        <meta name="description" content="Hotel booking app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Open+Sans:wght@400;700&family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="min-h-screen min-w-screen flex flex-col">
        <Header />
        <main className="flex-grow z-10">{children}</main>
        <div className="z-0">
          <Footer />
        </div>
      </div>
    </>
  );
};
