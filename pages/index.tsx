import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className="max-w-1440 overflow-x-hidden mx-auto flex flex-col justify-center w-full font-dmSans bg-gray-100">
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
        <p className="w-600 text-center text-sm px-14 leading-5 text-gray-400 pb-7">
          Whether you’re looking for places for a vacation. We are here to Guide
          you about the details you need to check in and ease your trips in
          advance
        </p>
      </section>
      {/* Cards - Search Best Place in the World */}
      <section className="max-w-1170 mx-auto px-7">
        <div className="flex pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap md:flex-wrap">
            {/* Card */}
            <div className="inline-block px-3 md:pb-30">
              <div className="w-250 h-207 rounded-2xl border border-gray-200 hover:bg-white">
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
            {/* Card */}
            <div className="inline-block px-3 md:pb-30">
              <div className="w-250 h-207 rounded-2xl border border-gray-200 hover:bg-white">
                <div className="pl-30 pt-30">
                  <Image
                    src="/img/places/kuta.png"
                    alt=""
                    width="70"
                    height="70"
                  />
                </div>
                <div className="pl-30 pt-2">
                  <h1 className="text-xl font-bold">Kuta</h1>
                </div>
                <div className="pl-30 pt-3">
                  <p className="text-sm text-gray-400">86 Destinations</p>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="inline-block px-3 md:pb-30">
              <div className="w-250 h-207 rounded-2xl border border-gray-200 hover:bg-white">
                <div className="pl-30 pt-30">
                  <Image
                    src="/img/places/surabaya.png"
                    alt=""
                    width="70"
                    height="70"
                  />
                </div>
                <div className="pl-30 pt-2">
                  <h1 className="text-xl font-bold">Surabaya, East Java</h1>
                </div>
                <div className="pl-30 pt-3">
                  <p className="text-sm text-gray-400">86 Destinations</p>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="inline-block px-3 md:pb-30">
              <div className="w-250 h-207 rounded-2xl border border-gray-200 hover:bg-white">
                <div className="pl-30 pt-30">
                  <Image
                    src="/img/places/malang.png"
                    alt=""
                    width="70"
                    height="70"
                  />
                </div>
                <div className="pl-30 pt-2">
                  <h1 className="text-xl font-bold">Malang, East Java</h1>
                </div>
                <div className="pl-30 pt-3">
                  <p className="text-sm text-gray-400">86 Destinations</p>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="inline-block px-3 md:pb-30">
              <div className="w-250 h-207 rounded-2xl border border-gray-200 hover:bg-white">
                <div className="pl-30 pt-30">
                  <Image
                    src="/img/places/doemg.png"
                    alt=""
                    width="70"
                    height="70"
                  />
                </div>
                <div className="pl-30 pt-2">
                  <h1 className="text-xl font-bold">Doemg, Central Java</h1>
                </div>
                <div className="pl-30 pt-3">
                  <p className="text-sm text-gray-400">186 Destinations</p>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="inline-block px-3 md:pb-30">
              <div className="w-250 h-207 rounded-2xl border border-gray-200 hover:bg-white">
                <div className="pl-30 pt-30">
                  <Image
                    src="/img/places/nusa-dua.png"
                    alt=""
                    width="70"
                    height="70"
                  />
                </div>
                <div className="pl-30 pt-2">
                  <h1 className="text-xl font-bold">Nusa Dua, Lombok</h1>
                </div>
                <div className="pl-30 pt-3">
                  <p className="text-sm text-gray-400">86 Destinations</p>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="inline-block px-3 md:pb-30">
              <div className="w-250 h-207 rounded-2xl border border-gray-200 hover:bg-white">
                <div className="pl-30 pt-30">
                  <Image
                    src="/img/places/badung.png"
                    alt=""
                    width="70"
                    height="70"
                  />
                </div>
                <div className="pl-30 pt-2">
                  <h1 className="text-xl font-bold">Badung, West Java</h1>
                </div>
                <div className="pl-30 pt-3">
                  <p className="text-sm text-gray-400">86 Destinations</p>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="inline-block px-3 md:pb-30">
              <div className="w-250 h-207 rounded-2xl border border-gray-200 hover:bg-white">
                <div className="pl-30 pt-30">
                  <Image
                    src="/img/places/watatobi.png"
                    alt=""
                    width="70"
                    height="70"
                  />
                </div>
                <div className="pl-30 pt-2">
                  <h1 className="text-xl font-bold">Watatobi, Sumatera</h1>
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
