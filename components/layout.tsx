import Head from "next/head";
import Footer from "./footer.components";
import Header from "./header.components";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>TripGuide</title>
        <meta name="description" content="Hotel booking app" />
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
