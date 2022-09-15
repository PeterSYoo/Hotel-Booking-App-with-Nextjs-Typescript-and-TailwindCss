import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className="max-w-1440 mx-auto flex flex-col justify-center w-full font-dmSans bg-white">
      {/* Hero Section */}
      <section className="bg-hero bg-cover bg-no-repeat bg-center h-541 md:h-578">
        <h1 className="text-4xl font-bold w-80 pl-7 pt-10 leading-54 text-gray-700 font-poppins md:text-64 md:w-full md:leading-80 md:pl-32 md:pt-36">
          Book With Us
          <br />
          And Enjoy your
          <br />
          Journey!
        </h1>
      </section>
      {/* Search Best Place in the World */}
      <section className="mx-auto">
        <h1 className="text-center text-3xl px-9 pt-7 pb-3 font-bold leading-10">
          Search a best place in the world
        </h1>
        <p className="text-center text-sm px-14 leading-5 text-gray-400 pb-7">
          Whether you’re looking for places for a vacation. We are here to Guide
          you about the details you need to check in and ease your trips in
          advance
        </p>
      </section>
      {/* Cards - Search Best Place in the World */}
      <section>
        <div className="flex overflow-x-hidden pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap">
            <div className="pl-30 inline-block px-3">
              <div className="w-250 h-207 overflow-hidden rounded-2xl bg-white border border-gray-200">
                <div className="pl-30 pt-30">
                  <Image
                    src="/img/places/batu.png"
                    alt=""
                    width="70"
                    height="70"
                  />
                </div>
                <div className="pl-30 pt-2">
                  <h1 className="text-xl font-bold">Batu, East Java</h1>
                </div>
                <div className="pl-30 pt-3">
                  <p className="text-sm text-gray-400">86 Destinations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
