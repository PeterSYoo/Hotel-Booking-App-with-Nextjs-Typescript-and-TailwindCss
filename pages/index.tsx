import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import Footer from '../components/footer.components';
import Header from '../components/header.components';

const Guest = () => {
  return (
    <>
      <Header />
      <div className="md:max-w-1440 mx-auto flex flex-col justify-center w-full font-dmSans bg-sectionBg">
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
        <section className="max-w-375 mx-auto md:max-w-1170">
          <h1 className="text-center text-3xl px-9 pt-7 pb-3 font-bold leading-10 md:text-5xl md:max-w-1170 md:px-0 md:mx-auto">
            Search a best place in the world
          </h1>
          <p className="max-w-375 w-600 text-center text-sm px-14 leading-5 text-gray-400 pb-7 md:max-w-1170 md:text-base md:px-1 md:mx-auto">
            Whether you’re looking for places for a vacation. We are here to
            Guide you about the details you need to check in and ease your trips
            in advance
          </p>
        </section>
        {/* Search Best Place in the World - Cards */}
        <section className="md:mx-auto px-[30px] md:px-[135px] overflow-x-auto no-scrollbar snap-x snap-mandatory">
          <div className="flex pb-10">
            <div className="flex flex-nowrap gap-[30px] md:flex-wrap">
              {/* Card */}
              <div className="inline-block md:pb-30 snap-always snap-center">
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
              <div className="inline-block md:pb-30 snap-always snap-center">
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
              <div className="inline-block md:pb-30 snap-always snap-center">
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
              <div className="inline-block md:pb-30 snap-always snap-center">
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
              <div className="inline-block md:pb-30 snap-always snap-center">
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
              <div className="inline-block md:pb-30 snap-always snap-center">
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
              <div className="inline-block md:pb-30 snap-always snap-center">
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
              <div className="inline-block md:pb-30 snap-always snap-center">
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

        {/* Featured Destinations */}
        <section className="max-w-375 mx-auto md:pl-[135px] md:mx-0 md:max-w-1170">
          <h1 className="text-center text-3xl px-9 pt-7 pb-3 font-bold leading-10 md:text-left md:px-0 md:text-5xl">
            Featured Destinations
          </h1>
          <p className="max-w-375 w-600 text-center px-14 leading-6 text-gray-600 pb-7 md:max-w-1440 md:text-left md:px-0 md:mb-[50px]">
            Popular destinations open to vistors from Indonesia
          </p>
        </section>

        {/* Desktop */}
        {/* Featured Destinations - Cards */}
        <section className="px-[135px] hidden md:block">
          <div className="grid grid-cols-12 grid-rows-6 gap-[30px] h-[718px]">
            <div className="row-start-1 row-span-6 col-start-1 col-span-9">
              <div className="grid grid-cols-2 grid-rows-5 gap-[30px] h-[718px]">
                <div className="bg-gray-200 row-start-1 row-span-2 col-start-1 col-span-2 rounded-3xl p-6">
                  1
                </div>
                <div className="bg-gray-200 row-start-3 row-span-3 col-start-1 col-span-1 rounded-3xl p-6">
                  2
                </div>
                <div className="bg-gray-200 row-start-3 row-span-3 col-start-2 col-span-1 rounded-3xl p-6">
                  3
                </div>
              </div>
            </div>
            <div className="row-start-1 row-span-6 col-start-10 col-span-4">
              <div className="grid grid-cols-1 grid-rows-3 gap-[30px] h-[718px]">
                <div className="bg-gray-200 row-start-1 row-span-1 rounded-3xl p-6">
                  4
                </div>
                <div className="bg-gray-200 row-start-2 row-span-1 rounded-3xl p-6">
                  5
                </div>
                <div className="bg-gray-200 row-start-3 row-span-1 rounded-3xl p-6">
                  6
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile */}
        {/* Featured Destinations - Cards */}
        <section className="max-w-375 mx-auto md:hidden">
          {/* Card */}
          <div className="flex flex-col justify-between pl-[20px] w-335 h-[280px] mb-[20px] bg-[url('/img/destinations/barcelona.png')]">
            <div className="pt-[20px]">
              <span className="bg-white rounded-full px-[19px] py-[2px] text-[#FF543D]">
                3.5
              </span>
            </div>
            <div className="">
              <h1 className="text-2xl text-white font-bold pb-[6px]">
                Barcelona Tour
              </h1>
              <div className="flex items-center pb-[18px]">
                <span className="">
                  <Image
                    src="/img/destinations/avatar.png"
                    alt=""
                    width="28"
                    height="28"
                  />
                </span>
                <span className="pl-[14px] text-white -mt-[7px]">
                  196 Activities
                </span>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="flex flex-col justify-between pl-[20px] w-335 h-[408px] mb-[20px] bg-[url('/img/destinations/london.png')]">
            <div className="pt-[20px]">
              <span className="bg-white rounded-full px-[19px] py-[2px] text-[#FF543D]">
                3.5
              </span>
            </div>
            <div className="">
              <h1 className="text-2xl text-white font-bold pb-[6px]">
                London, United Kingdom
              </h1>
              <div className="flex items-center pb-[18px]">
                <span className="">
                  <Image
                    src="/img/destinations/avatar.png"
                    alt=""
                    width="28"
                    height="28"
                  />
                </span>
                <span className="pl-[14px] text-white -mt-[7px]">
                  196 Activities
                </span>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="flex flex-col justify-between pl-[20px] w-335 h-[408px] mb-[20px] bg-[url('/img/destinations/australia.png')]">
            <div className="pt-[20px]">
              <span className="bg-white rounded-full px-[19px] py-[2px] text-[#FF543D]">
                3.5
              </span>
            </div>
            <div className="">
              <h1 className="text-2xl text-white font-bold pb-[6px]">
                Australia Tour
              </h1>
              <div className="flex items-center pb-[18px]">
                <span className="">
                  <Image
                    src="/img/destinations/avatar.png"
                    alt=""
                    width="28"
                    height="28"
                  />
                </span>
                <span className="pl-[14px] text-white -mt-[7px]">
                  196 Activities
                </span>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="flex flex-col justify-between pl-[20px] w-335 h-[220px] mb-[20px] bg-[url('/img/destinations/australia-2.png')]">
            <div className="pt-[20px]">
              <span className="bg-white rounded-full px-[19px] py-[2px] text-[#FF543D]">
                3.5
              </span>
            </div>
            <div className="">
              <h1 className="text-2xl text-white font-bold pb-[6px]">
                Australia Tour
              </h1>
              <div className="flex items-center pb-[18px]">
                <span className="">
                  <Image
                    src="/img/destinations/avatar.png"
                    alt=""
                    width="28"
                    height="28"
                  />
                </span>
                <span className="pl-[14px] text-white -mt-[7px]">
                  196 Activities
                </span>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="flex flex-col justify-between pl-[20px] w-335 h-[220px] mb-[20px] bg-[url('/img/destinations/japan.png')]">
            <div className="pt-[20px]">
              <span className="bg-white rounded-full px-[19px] py-[2px] text-[#FF543D]">
                3.5
              </span>
            </div>
            <div className="">
              <h1 className="text-2xl text-white font-bold pb-[6px]">
                Japan Tour
              </h1>
              <div className="flex items-center pb-[18px]">
                <span className="">
                  <Image
                    src="/img/destinations/avatar.png"
                    alt=""
                    width="28"
                    height="28"
                  />
                </span>
                <span className="pl-[14px] text-white -mt-[7px]">
                  196 Activities
                </span>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="flex flex-col justify-between pl-[20px] w-335 h-[217px] mb-[20px] bg-[url('/img/destinations/japan-2.png')]">
            <div className="pt-[20px]">
              <span className="bg-white rounded-full px-[19px] py-[2px] text-[#FF543D]">
                3.5
              </span>
            </div>
            <div className="">
              <h1 className="text-2xl text-white font-bold pb-[6px]">
                Japan Tour
              </h1>
              <div className="flex items-center pb-[18px]">
                <span className="">
                  <Image
                    src="/img/destinations/avatar.png"
                    alt=""
                    width="28"
                    height="28"
                  />
                </span>
                <span className="pl-[14px] text-white -mt-[7px]">
                  196 Activities
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Top Tour */}
        <section className="max-w-375 mx-auto md:pl-[135px] md:mx-0 md:max-w-1170">
          <div className="mt-[60px] mb-[12px] md:mb-[24px] md:mt-[120px]">
            <h1 className="text-center text-[30px] font-bold leading-10 md:text-left md:text-[48px]">
              Top Tour
            </h1>
          </div>
          <div className="mb-[35px]">
            <p className="max-w-375 w-600 text-center text-[14px] leading-6 text-gray-400 md:max-w-1440 md:text-left md:px-0">
              Keep calm & Travel on
            </p>
          </div>
        </section>

        {/* Desktop */}
        <section className="hidden max-w-375 mx-auto md:mx-[135px] md:max-w-1170 md:flex md:gap-[30px]">
          {/* Card */}
          <section className="flex flex-col justify-between h-[495px] rounded-2xl mb-[20px] bg-[url('/img/top-tour/japan.png')] bg-no-repeat w-[370px]">
            <div className="mt-[30px] ml-[30px]">
              <span className="bg-black bg-opacity-25 rounded-full px-[28px] py-[11px] text-white text-[20px]">
                Japan
              </span>
            </div>
            <div className="px-[30px]">
              <h1 className="text-[34px] text-white font-bold pb-[12px]">
                Japan
              </h1>
              <div className="flex items-center pb-[30px]">
                <span className="text-white -mt-[7px] text-[16px]">
                  10 Popular Places
                </span>
              </div>
            </div>
          </section>
          {/* Card */}
          <section className="flex flex-col justify-between h-[495px] rounded-2xl mb-[20px] bg-[url('/img/top-tour/japan.png')] bg-no-repeat w-[370px]">
            <div className="mt-[30px] ml-[30px]">
              <span className="bg-black bg-opacity-25 rounded-full px-[28px] py-[11px] text-white text-[20px]">
                Japan
              </span>
            </div>
            <div className="px-[30px]">
              <h1 className="text-[34px] text-white font-bold pb-[12px]">
                Japan
              </h1>
              <div className="flex items-center pb-[30px]">
                <span className="text-white -mt-[7px] text-[16px]">
                  10 Popular Places
                </span>
              </div>
            </div>
          </section>
          {/* Card */}
          <section className="flex flex-col justify-between h-[495px] rounded-2xl mb-[20px] bg-[url('/img/top-tour/japan.png')] bg-no-repeat w-[370px]">
            <div className="mt-[30px] ml-[30px]">
              <span className="bg-black bg-opacity-25 rounded-full px-[28px] py-[11px] text-white text-[20px]">
                Japan
              </span>
            </div>
            <div className="px-[30px]">
              <h1 className="text-[34px] text-white font-bold pb-[12px]">
                Japan
              </h1>
              <div className="flex items-center pb-[30px]">
                <span className="text-white -mt-[7px] text-[16px]">
                  10 Popular Places
                </span>
              </div>
            </div>
          </section>
        </section>

        {/* Mobile */}
        <section className="md:hidden">
          {/* Card */}
          <section className="flex flex-col justify-between w-[335px] h-[495px] rounded-2xl mb-[20px] mx-auto bg-[url('/img/top-tour/japan.png')]">
            <div className="pt-[30px] pl-[30px]">
              <span className="bg-black bg-opacity-25 rounded-full px-[28px] py-[11px] text-white text-[20px]">
                Japan
              </span>
            </div>
            <div className="pl-[30px]">
              <h1 className="text-[34px] text-white font-bold pb-[12px]">
                Japan
              </h1>
              <div className="flex items-center pb-[30px]">
                <span className="text-white -mt-[7px] text-[16px]">
                  10 Popular Places
                </span>
              </div>
            </div>
          </section>
          {/* Card */}
          <section className="flex flex-col justify-between w-[335px] h-[495px] rounded-2xl mb-[20px] mx-auto bg-[url('/img/top-tour/japan.png')]">
            <div className="pt-[30px] pl-[30px]">
              <span className="bg-black bg-opacity-25 rounded-full px-[28px] py-[11px] text-white text-[20px]">
                Barcelona
              </span>
            </div>
            <div className="pl-[30px]">
              <h1 className="text-[34px] text-white font-bold pb-[12px]">
                Spain
              </h1>
              <div className="flex items-center pb-[30px]">
                <span className="text-white -mt-[7px] text-[16px]">
                  10 Popular Places
                </span>
              </div>
            </div>
          </section>
          {/* Card */}
          <section className="flex flex-col justify-between w-[335px] h-[495px] rounded-2xl mb-[20px] mx-auto bg-[url('/img/top-tour/japan.png')]">
            <div className="pt-[30px] pl-[30px]">
              <span className="bg-black bg-opacity-25 rounded-full px-[28px] py-[11px] text-white text-[20px]">
                Indonesia
              </span>
            </div>
            <div className="pl-[30px]">
              <h1 className="text-[34px] text-white font-bold pb-[12px]">
                Bali
              </h1>
              <div className="flex items-center pb-[30px]">
                <span className="text-white -mt-[7px] text-[16px]">
                  10 Popular Places
                </span>
              </div>
            </div>
          </section>
        </section>

        {/* Explore The World */}
        <section className="max-w-375 mx-auto md:pl-[135px] md:mx-0 md:max-w-1170">
          <div className="mt-[60px] mb-[12px] md:mb-[24px] md:mt-[100px]">
            <h1 className="text-center text-[30px] font-bold leading-10 md:text-left md:text-[48px]">
              Explore The World
            </h1>
          </div>
          <div className="mb-[35px]">
            <p className="max-w-375 w-600 text-center text-[14px] leading-6 text-gray-400 md:max-w-1440 md:text-left md:px-0">
              10,788 beautiful places to go
            </p>
          </div>
        </section>
        {/* Search Best Place in the World - Cards */}
        <section className="md:mx-auto px-[30px] md:px-[135px] overflow-x-auto no-scrollbar snap-x snap-mandatory">
          <div className="flex pb-10">
            <div className="flex flex-nowrap gap-[30px] md:flex-wrap">
              {/* Card */}
              <div className="inline-block md:pb-30 snap-always snap-center opacity-80 hover:opacity-100">
                <div className="w-[270px] h-[362px] rounded-2xl border border-gray-200 hover:bg-white">
                  <div className="mx-[14px] mt-[14px]">
                    <div className="bg-gray-300 h-[152px] w-[242px] rounded-2xl"></div>
                  </div>
                  <div className="mt-[20px] mx-[14px] flex items-center">
                    <Image
                      src="/img/explore-the-world/star.png"
                      alt=""
                      width="14"
                      height="14"
                    />
                    <span className="pl-[8px]">4.91</span>
                    <span className="text-gray-400">&nbsp;(147)</span>
                  </div>
                  <div className="mt-[14px] mx-[14px] flex justify-between">
                    <div className="">
                      <h1 className="text-[20px]">Comfort Space</h1>
                      <p className="text-sm text-gray-400">
                        1.2 km to Town Center
                      </p>
                    </div>
                    <div className="mt-1">
                      <span className="bg-blue-600 text-white py-[4.5px] px-[12px] rounded-lg">
                        $210
                      </span>
                    </div>
                  </div>
                  <div className="mt-[14px] mx-[14px] flex items-center">
                    <Image
                      src="/img/explore-the-world/location.png"
                      alt=""
                      width="22"
                      height="22"
                    />
                    <span className="text-gray-400 text-[14px]">
                      &nbsp;Turkey, Mamaris
                    </span>
                  </div>
                  <div className="mt-[7px] mx-[14px] flex items-center">
                    <Image
                      src="/img/explore-the-world/building.png"
                      alt=""
                      width="22"
                      height="22"
                    />
                    <span className="text-gray-400 text-[14px]">
                      &nbsp;Rooms available: 375
                    </span>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="inline-block md:pb-30 snap-always snap-center opacity-80 hover:opacity-100">
                <div className="w-[270px] h-[362px] rounded-2xl border border-gray-200 hover:bg-white">
                  <div className="mx-[14px] mt-[14px]">
                    <div className="bg-gray-300 h-[152px] w-[242px] rounded-2xl"></div>
                  </div>
                  <div className="mt-[20px] mx-[14px] flex items-center">
                    <Image
                      src="/img/explore-the-world/star.png"
                      alt=""
                      width="14"
                      height="14"
                    />
                    <span className="pl-[8px]">4.91</span>
                    <span className="text-gray-400">&nbsp;(147)</span>
                  </div>
                  <div className="mt-[14px] mx-[14px] flex justify-between">
                    <div className="">
                      <h1 className="text-[20px]">Comfort Space</h1>
                      <p className="text-sm text-gray-400">
                        1.2 km to Town Center
                      </p>
                    </div>
                    <div className="mt-1">
                      <span className="bg-blue-600 text-white py-[4.5px] px-[12px] rounded-lg">
                        $210
                      </span>
                    </div>
                  </div>
                  <div className="mt-[14px] mx-[14px] flex items-center">
                    <Image
                      src="/img/explore-the-world/location.png"
                      alt=""
                      width="22"
                      height="22"
                    />
                    <span className="text-gray-400 text-[14px]">
                      &nbsp;Turkey, Mamaris
                    </span>
                  </div>
                  <div className="mt-[7px] mx-[14px] flex items-center">
                    <Image
                      src="/img/explore-the-world/building.png"
                      alt=""
                      width="22"
                      height="22"
                    />
                    <span className="text-gray-400 text-[14px]">
                      &nbsp;Rooms available: 375
                    </span>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="inline-block md:pb-30 snap-always snap-center opacity-80 hover:opacity-100">
                <div className="w-[270px] h-[362px] rounded-2xl border border-gray-200 hover:bg-white">
                  <div className="mx-[14px] mt-[14px]">
                    <div className="bg-gray-300 h-[152px] w-[242px] rounded-2xl"></div>
                  </div>
                  <div className="mt-[20px] mx-[14px] flex items-center">
                    <Image
                      src="/img/explore-the-world/star.png"
                      alt=""
                      width="14"
                      height="14"
                    />
                    <span className="pl-[8px]">4.91</span>
                    <span className="text-gray-400">&nbsp;(147)</span>
                  </div>
                  <div className="mt-[14px] mx-[14px] flex justify-between">
                    <div className="">
                      <h1 className="text-[20px]">Comfort Space</h1>
                      <p className="text-sm text-gray-400">
                        1.2 km to Town Center
                      </p>
                    </div>
                    <div className="mt-1">
                      <span className="bg-blue-600 text-white py-[4.5px] px-[12px] rounded-lg">
                        $210
                      </span>
                    </div>
                  </div>
                  <div className="mt-[14px] mx-[14px] flex items-center">
                    <Image
                      src="/img/explore-the-world/location.png"
                      alt=""
                      width="22"
                      height="22"
                    />
                    <span className="text-gray-400 text-[14px]">
                      &nbsp;Turkey, Mamaris
                    </span>
                  </div>
                  <div className="mt-[7px] mx-[14px] flex items-center">
                    <Image
                      src="/img/explore-the-world/building.png"
                      alt=""
                      width="22"
                      height="22"
                    />
                    <span className="text-gray-400 text-[14px]">
                      &nbsp;Rooms available: 375
                    </span>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="inline-block md:pb-30 snap-always snap-center opacity-80 hover:opacity-100">
                <div className="w-[270px] h-[362px] rounded-2xl border border-gray-200 hover:bg-white">
                  <div className="mx-[14px] mt-[14px]">
                    <div className="bg-gray-300 h-[152px] w-[242px] rounded-2xl"></div>
                  </div>
                  <div className="mt-[20px] mx-[14px] flex items-center">
                    <Image
                      src="/img/explore-the-world/star.png"
                      alt=""
                      width="14"
                      height="14"
                    />
                    <span className="pl-[8px]">4.91</span>
                    <span className="text-gray-400">&nbsp;(147)</span>
                  </div>
                  <div className="mt-[14px] mx-[14px] flex justify-between">
                    <div className="">
                      <h1 className="text-[20px]">Comfort Space</h1>
                      <p className="text-sm text-gray-400">
                        1.2 km to Town Center
                      </p>
                    </div>
                    <div className="mt-1">
                      <span className="bg-blue-600 text-white py-[4.5px] px-[12px] rounded-lg">
                        $210
                      </span>
                    </div>
                  </div>
                  <div className="mt-[14px] mx-[14px] flex items-center">
                    <Image
                      src="/img/explore-the-world/location.png"
                      alt=""
                      width="22"
                      height="22"
                    />
                    <span className="text-gray-400 text-[14px]">
                      &nbsp;Turkey, Mamaris
                    </span>
                  </div>
                  <div className="mt-[7px] mx-[14px] flex items-center">
                    <Image
                      src="/img/explore-the-world/building.png"
                      alt=""
                      width="22"
                      height="22"
                    />
                    <span className="text-gray-400 text-[14px]">
                      &nbsp;Rooms available: 375
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Cities */}
        <section className="bg-[#F5F5F5] pb-[30px]">
          <section className="max-w-375 mx-auto md:max-w-1170">
            <h1 className="text-center text-3xl px-9 pt-7 pb-3 font-bold leading-10 md:text-5xl md:max-w-1170 md:px-0 md:mx-auto md:mt-[20px]">
              Trending Cities
            </h1>
            <div className="mb-[35px]">
              <p className="max-w-375 mx-auto w-600 text-center text-[14px] leading-6 text-gray-400 md:max-w-1440 md:text-[24px] md:leading-3 md:mt-[16px] md:mb-[50px]">
                The most searched for cities on TripGuide
              </p>
            </div>
          </section>

          <section className="max-w-375 mx-auto md:flex md:gap-[40px] md:max-w-[980px] md:flex-wrap">
            {/* Card */}
            <div className="flex w-335 h-[201px] mb-[20px] bg-white rounded-3xl mx-auto md:w-[470px]">
              <div className="flex mx-[16px] my-[16px] gap-[16px]">
                <div className="w-[160px] h-[168px] bg-gray-300 rounded-2xl"></div>
                <div className="w-[127px] h-[168px] flex flex-col justify-between -mt-1">
                  <h1 className="text-[24px] font-bold">Manila</h1>
                  <div className="flex items-center">
                    <Image
                      src="/img/explore-the-world/star.png"
                      alt=""
                      width="14"
                      height="14"
                    />
                    <span className="pl-[8px]">4.91</span>
                    <span className="text-gray-400">&nbsp;(147)</span>
                  </div>
                  <div className="">
                    <span className="text-[18px]">
                      $250.00
                      <span className="text-gray-400">/night</span>
                    </span>
                  </div>
                  <div className="">
                    <span className="bg-blue-600 text-white py-[4.5px] px-[12px] rounded-md">
                      Book now
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="flex w-335 h-[201px] mb-[20px] bg-white rounded-3xl mx-auto md:w-[470px]">
              <div className="flex mx-[16px] my-[16px] gap-[16px]">
                <div className="w-[160px] h-[168px] bg-gray-300 rounded-2xl"></div>
                <div className="w-[127px] h-[168px] flex flex-col justify-between -mt-1">
                  <h1 className="text-[24px] font-bold">Manila</h1>
                  <div className="flex items-center">
                    <Image
                      src="/img/explore-the-world/star.png"
                      alt=""
                      width="14"
                      height="14"
                    />
                    <span className="pl-[8px]">4.91</span>
                    <span className="text-gray-400">&nbsp;(147)</span>
                  </div>
                  <div className="">
                    <span className="text-[18px]">
                      $250.00
                      <span className="text-gray-400">/night</span>
                    </span>
                  </div>
                  <div className="">
                    <span className="bg-blue-600 text-white py-[4.5px] px-[12px] rounded-md">
                      Book now
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="flex w-335 h-[201px] mb-[20px] bg-white rounded-3xl mx-auto md:w-[470px]">
              <div className="flex mx-[16px] my-[16px] gap-[16px]">
                <div className="w-[160px] h-[168px] bg-gray-300 rounded-2xl"></div>
                <div className="w-[127px] h-[168px] flex flex-col justify-between -mt-1">
                  <h1 className="text-[24px] font-bold">Manila</h1>
                  <div className="flex items-center">
                    <Image
                      src="/img/explore-the-world/star.png"
                      alt=""
                      width="14"
                      height="14"
                    />
                    <span className="pl-[8px]">4.91</span>
                    <span className="text-gray-400">&nbsp;(147)</span>
                  </div>
                  <div className="">
                    <span className="text-[18px]">
                      $250.00
                      <span className="text-gray-400">/night</span>
                    </span>
                  </div>
                  <div className="">
                    <span className="bg-blue-600 text-white py-[4.5px] px-[12px] rounded-md">
                      Book now
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="flex w-335 h-[201px] mb-[20px] bg-white rounded-3xl mx-auto md:w-[470px]">
              <div className="flex mx-[16px] my-[16px] gap-[16px]">
                <div className="w-[160px] h-[168px] bg-gray-300 rounded-2xl"></div>
                <div className="w-[127px] h-[168px] flex flex-col justify-between -mt-1">
                  <h1 className="text-[24px] font-bold">Manila</h1>
                  <div className="flex items-center">
                    <Image
                      src="/img/explore-the-world/star.png"
                      alt=""
                      width="14"
                      height="14"
                    />
                    <span className="pl-[8px]">4.91</span>
                    <span className="text-gray-400">&nbsp;(147)</span>
                  </div>
                  <div className="">
                    <span className="text-[18px]">
                      $250.00
                      <span className="text-gray-400">/night</span>
                    </span>
                  </div>
                  <div className="">
                    <span className="bg-blue-600 text-white py-[4.5px] px-[12px] rounded-md">
                      Book now
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="flex w-335 h-[201px] mb-[20px] bg-white rounded-3xl mx-auto md:w-[470px]">
              <div className="flex mx-[16px] my-[16px] gap-[16px]">
                <div className="w-[160px] h-[168px] bg-gray-300 rounded-2xl"></div>
                <div className="w-[127px] h-[168px] flex flex-col justify-between -mt-1">
                  <h1 className="text-[24px] font-bold">Manila</h1>
                  <div className="flex items-center">
                    <Image
                      src="/img/explore-the-world/star.png"
                      alt=""
                      width="14"
                      height="14"
                    />
                    <span className="pl-[8px]">4.91</span>
                    <span className="text-gray-400">&nbsp;(147)</span>
                  </div>
                  <div className="">
                    <span className="text-[18px]">
                      $250.00
                      <span className="text-gray-400">/night</span>
                    </span>
                  </div>
                  <div className="">
                    <span className="bg-blue-600 text-white py-[4.5px] px-[12px] rounded-md">
                      Book now
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="flex w-335 h-[201px] mb-[20px] bg-white rounded-3xl mx-auto md:w-[470px]">
              <div className="flex mx-[16px] my-[16px] gap-[16px]">
                <div className="w-[160px] h-[168px] bg-gray-300 rounded-2xl"></div>
                <div className="w-[127px] h-[168px] flex flex-col justify-between -mt-1">
                  <h1 className="text-[24px] font-bold">Manila</h1>
                  <div className="flex items-center">
                    <Image
                      src="/img/explore-the-world/star.png"
                      alt=""
                      width="14"
                      height="14"
                    />
                    <span className="pl-[8px]">4.91</span>
                    <span className="text-gray-400">&nbsp;(147)</span>
                  </div>
                  <div className="">
                    <span className="text-[18px]">
                      $250.00
                      <span className="text-gray-400">/night</span>
                    </span>
                  </div>
                  <div className="">
                    <span className="bg-blue-600 text-white py-[4.5px] px-[12px] rounded-md">
                      Book now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* Travel Your Passion */}
        <section className="max-w-375 mx-auto md:pl-[135px] md:mx-0 md:max-w-1170">
          <div className="mt-[60px] mb-[12px] md:mb-[24px] md:mt-[100px]">
            <h1 className="text-center text-[30px] font-bold leading-10 md:text-left md:text-[48px]">
              Travel Your Passion
            </h1>
          </div>
          <div className="mb-[35px]">
            <p className="max-w-375 w-600 text-center px-11 text-[14px] leading-6 text-gray-400 md:max-w-1440 md:text-left md:px-0">
              Most Brilliant reasons Entrada should be your one-stop-shop!
            </p>
          </div>
        </section>
        {/* Search Best Place in the World - Cards */}
        <section className="md:mx-auto px-[30px] overflow-x-auto no-scrollbar snap-x snap-mandatory md:px-[135px]">
          <div className="flex pb-10">
            <div className="flex flex-nowrap gap-[30px] md:flex-wrap">
              {/* Card */}
              <div className="inline-block snap-always snap-center md:pb-30">
                <div className="flex flex-col justify-end w-[270px] h-[362px] rounded-2xl border border-gray-200 pl-[30px] bg-gray-400 pb-[30px]">
                  <div className="">
                    <h1 className="text-[24px] font-bold text-white">
                      Beach Hobby
                    </h1>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src="/img/explore-the-world/star.png"
                      alt=""
                      width="14"
                      height="14"
                    />
                    <span className="pl-[8px] text-white text-[14px]">
                      4.8 (122 reviews)
                    </span>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="inline-block snap-always snap-center md:pb-30">
                <div className="flex flex-col justify-end w-[270px] h-[362px] rounded-2xl border border-gray-200 pl-[30px] bg-gray-400 pb-[30px]">
                  <div className="">
                    <h1 className="text-[24px] font-bold text-white">
                      Beach Hobby
                    </h1>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src="/img/explore-the-world/star.png"
                      alt=""
                      width="14"
                      height="14"
                    />
                    <span className="pl-[8px] text-white text-[14px]">
                      4.8 (122 reviews)
                    </span>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="inline-block snap-always snap-center md:pb-30">
                <div className="flex flex-col justify-end w-[270px] h-[362px] rounded-2xl border border-gray-200 pl-[30px] bg-gray-400 pb-[30px]">
                  <div className="">
                    <h1 className="text-[24px] font-bold text-white">
                      Beach Hobby
                    </h1>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src="/img/explore-the-world/star.png"
                      alt=""
                      width="14"
                      height="14"
                    />
                    <span className="pl-[8px] text-white text-[14px]">
                      4.8 (122 reviews)
                    </span>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="inline-block snap-always snap-center md:pb-30">
                <div className="flex flex-col justify-end w-[270px] h-[362px] rounded-2xl border border-gray-200 pl-[30px] bg-gray-400 pb-[30px]">
                  <div className="">
                    <h1 className="text-[24px] font-bold text-white">
                      Beach Hobby
                    </h1>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src="/img/explore-the-world/star.png"
                      alt=""
                      width="14"
                      height="14"
                    />
                    <span className="pl-[8px] text-white text-[14px]">
                      4.8 (122 reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Desktop */}
        {/* Get our pro offers */}
        <section className="hidden mx-auto md:mx-[135px] md:max-w-1170 md:flex md:gap-[30px] md:-mb-[75px]">
          {/* Card */}
          <section className="flex justify-between h-[248px] rounded-2xl mb-[20px] w-[1170px] bg-blue-600 py-[62px] px-[90px] items-center">
            <div className="">
              <h1 className="text-[44px] text-white font-bold pb-[12px] leading-10">
                Get our pro offers
              </h1>
              <p className="text-white mt-[7px] text-[16px] w-[234px]">
                Subscribe to stay up to date with our latest offers!
              </p>
            </div>
            <div className="">
              <form className="bg-white w-[288px] h-[69px] rounded-md py-[9px] px-[9px]">
                <div className="flex justify-between item-center -mt-[1px] pl-[9px]">
                  <input
                    type="text"
                    className="w-[255px]"
                    placeholder="Type your email here"
                  />
                  <input
                    className="bg-gray-700 w-[130px] h-[55px] text-white text-[16px] font-bold rounded-md flex items-center justify-center"
                    type="submit"
                    value="Subscribe"
                  />
                </div>
              </form>
            </div>
          </section>
        </section>

        {/* Mobile */}
        {/* Get our pro offers */}
        <section className="max-w-[375px] mx-auto mb-[159px] mt-[30px] md:hidden">
          {/* Card */}
          <section className="flex flex-col justify-between w-[335px] h-[174px] rounded-2xl mb-[20px] mx-auto bg-[url('/img/offers-bg.png')] bg-blue-600 px-[20px] py-[14px]">
            <div className="">
              <h1 className="text-[20px] text-white font-bold pb-[12px]">
                Get our pro offers
              </h1>
              <div className="">
                <p className="text-white -mt-[7px] text-[12px] w-[234px]">
                  Subscribe to stay up to date with our latest offers!
                </p>
              </div>
              <div className="mt-[14px]">
                <form className="bg-white w-[295px] h-[60px] rounded-md p-[9px]">
                  <div className="flex justify-between item-center -mt-[1px]">
                    <input
                      type="text"
                      className="w-[155px]"
                      placeholder="Enter email..."
                    />
                    <input
                      className="bg-gray-700 w-[120px] h-[44px] text-white text-[16px] font-bold rounded-md flex items-center justify-center"
                      type="submit"
                      value="Subscribe"
                    />
                  </div>
                </form>
              </div>
            </div>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
};

// Authorize User
const User = () => {
  return (
    <>
      <Header />
      <div className="md:max-w-1440 mx-auto flex flex-col justify-center w-full font-dmSans bg-sectionBg">
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
        <section className="max-w-375 mx-auto md:max-w-1170">
          <h1 className="text-center text-3xl px-9 pt-7 pb-3 font-bold leading-10 md:text-5xl md:max-w-1170 md:px-0 md:mx-auto">
            Search a best place in the world
          </h1>
          <p className="max-w-375 w-600 text-center text-sm px-14 leading-5 text-gray-400 pb-7 md:max-w-1170 md:text-base md:px-1 md:mx-auto">
            Whether you’re looking for places for a vacation. We are here to
            Guide you about the details you need to check in and ease your trips
            in advance
          </p>
        </section>
        {/* Search Best Place in the World - Cards */}
        <section className="md:mx-auto px-[30px] md:px-[135px] overflow-x-auto no-scrollbar snap-x snap-mandatory">
          <div className="flex pb-10">
            <div className="flex flex-nowrap gap-[30px] md:flex-wrap">
              {/* Card */}
              <div className="inline-block md:pb-30 snap-always snap-center">
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
              <div className="inline-block md:pb-30 snap-always snap-center">
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
              <div className="inline-block md:pb-30 snap-always snap-center">
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
              <div className="inline-block md:pb-30 snap-always snap-center">
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
              <div className="inline-block md:pb-30 snap-always snap-center">
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
              <div className="inline-block md:pb-30 snap-always snap-center">
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
              <div className="inline-block md:pb-30 snap-always snap-center">
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
              <div className="inline-block md:pb-30 snap-always snap-center">
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

        {/* Featured Destinations */}
        <section className="max-w-375 mx-auto md:pl-[135px] md:mx-0 md:max-w-1170">
          <h1 className="text-center text-3xl px-9 pt-7 pb-3 font-bold leading-10 md:text-left md:px-0 md:text-5xl">
            Featured Destinations
          </h1>
          <p className="max-w-375 w-600 text-center px-14 leading-6 text-gray-600 pb-7 md:max-w-1440 md:text-left md:px-0 md:mb-[50px]">
            Popular destinations open to vistors from Indonesia
          </p>
        </section>

        {/* Desktop */}
        {/* Featured Destinations - Cards */}
        <section className="px-[135px] hidden md:block">
          <div className="grid grid-cols-12 grid-rows-6 gap-[30px] h-[718px]">
            <div className="row-start-1 row-span-6 col-start-1 col-span-9">
              <div className="grid grid-cols-2 grid-rows-5 gap-[30px] h-[718px]">
                <div className="bg-gray-200 row-start-1 row-span-2 col-start-1 col-span-2 rounded-3xl p-6">
                  1
                </div>
                <div className="bg-gray-200 row-start-3 row-span-3 col-start-1 col-span-1 rounded-3xl p-6">
                  2
                </div>
                <div className="bg-gray-200 row-start-3 row-span-3 col-start-2 col-span-1 rounded-3xl p-6">
                  3
                </div>
              </div>
            </div>
            <div className="row-start-1 row-span-6 col-start-10 col-span-4">
              <div className="grid grid-cols-1 grid-rows-3 gap-[30px] h-[718px]">
                <div className="bg-gray-200 row-start-1 row-span-1 rounded-3xl p-6">
                  4
                </div>
                <div className="bg-gray-200 row-start-2 row-span-1 rounded-3xl p-6">
                  5
                </div>
                <div className="bg-gray-200 row-start-3 row-span-1 rounded-3xl p-6">
                  6
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile */}
        {/* Featured Destinations - Cards */}
        <section className="max-w-375 mx-auto md:hidden">
          {/* Card */}
          <div className="flex flex-col justify-between pl-[20px] w-335 h-[280px] mb-[20px] bg-[url('/img/destinations/barcelona.png')]">
            <div className="pt-[20px]">
              <span className="bg-white rounded-full px-[19px] py-[2px] text-[#FF543D]">
                3.5
              </span>
            </div>
            <div className="">
              <h1 className="text-2xl text-white font-bold pb-[6px]">
                Barcelona Tour
              </h1>
              <div className="flex items-center pb-[18px]">
                <span className="">
                  <Image
                    src="/img/destinations/avatar.png"
                    alt=""
                    width="28"
                    height="28"
                  />
                </span>
                <span className="pl-[14px] text-white -mt-[7px]">
                  196 Activities
                </span>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="flex flex-col justify-between pl-[20px] w-335 h-[408px] mb-[20px] bg-[url('/img/destinations/london.png')]">
            <div className="pt-[20px]">
              <span className="bg-white rounded-full px-[19px] py-[2px] text-[#FF543D]">
                3.5
              </span>
            </div>
            <div className="">
              <h1 className="text-2xl text-white font-bold pb-[6px]">
                London, United Kingdom
              </h1>
              <div className="flex items-center pb-[18px]">
                <span className="">
                  <Image
                    src="/img/destinations/avatar.png"
                    alt=""
                    width="28"
                    height="28"
                  />
                </span>
                <span className="pl-[14px] text-white -mt-[7px]">
                  196 Activities
                </span>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="flex flex-col justify-between pl-[20px] w-335 h-[408px] mb-[20px] bg-[url('/img/destinations/australia.png')]">
            <div className="pt-[20px]">
              <span className="bg-white rounded-full px-[19px] py-[2px] text-[#FF543D]">
                3.5
              </span>
            </div>
            <div className="">
              <h1 className="text-2xl text-white font-bold pb-[6px]">
                Australia Tour
              </h1>
              <div className="flex items-center pb-[18px]">
                <span className="">
                  <Image
                    src="/img/destinations/avatar.png"
                    alt=""
                    width="28"
                    height="28"
                  />
                </span>
                <span className="pl-[14px] text-white -mt-[7px]">
                  196 Activities
                </span>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="flex flex-col justify-between pl-[20px] w-335 h-[220px] mb-[20px] bg-[url('/img/destinations/australia-2.png')]">
            <div className="pt-[20px]">
              <span className="bg-white rounded-full px-[19px] py-[2px] text-[#FF543D]">
                3.5
              </span>
            </div>
            <div className="">
              <h1 className="text-2xl text-white font-bold pb-[6px]">
                Australia Tour
              </h1>
              <div className="flex items-center pb-[18px]">
                <span className="">
                  <Image
                    src="/img/destinations/avatar.png"
                    alt=""
                    width="28"
                    height="28"
                  />
                </span>
                <span className="pl-[14px] text-white -mt-[7px]">
                  196 Activities
                </span>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="flex flex-col justify-between pl-[20px] w-335 h-[220px] mb-[20px] bg-[url('/img/destinations/japan.png')]">
            <div className="pt-[20px]">
              <span className="bg-white rounded-full px-[19px] py-[2px] text-[#FF543D]">
                3.5
              </span>
            </div>
            <div className="">
              <h1 className="text-2xl text-white font-bold pb-[6px]">
                Japan Tour
              </h1>
              <div className="flex items-center pb-[18px]">
                <span className="">
                  <Image
                    src="/img/destinations/avatar.png"
                    alt=""
                    width="28"
                    height="28"
                  />
                </span>
                <span className="pl-[14px] text-white -mt-[7px]">
                  196 Activities
                </span>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="flex flex-col justify-between pl-[20px] w-335 h-[217px] mb-[20px] bg-[url('/img/destinations/japan-2.png')]">
            <div className="pt-[20px]">
              <span className="bg-white rounded-full px-[19px] py-[2px] text-[#FF543D]">
                3.5
              </span>
            </div>
            <div className="">
              <h1 className="text-2xl text-white font-bold pb-[6px]">
                Japan Tour
              </h1>
              <div className="flex items-center pb-[18px]">
                <span className="">
                  <Image
                    src="/img/destinations/avatar.png"
                    alt=""
                    width="28"
                    height="28"
                  />
                </span>
                <span className="pl-[14px] text-white -mt-[7px]">
                  196 Activities
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Top Tour */}
        <section className="max-w-375 mx-auto md:pl-[135px] md:mx-0 md:max-w-1170">
          <div className="mt-[60px] mb-[12px] md:mb-[24px] md:mt-[120px]">
            <h1 className="text-center text-[30px] font-bold leading-10 md:text-left md:text-[48px]">
              Top Tour
            </h1>
          </div>
          <div className="mb-[35px]">
            <p className="max-w-375 w-600 text-center text-[14px] leading-6 text-gray-400 md:max-w-1440 md:text-left md:px-0">
              Keep calm & Travel on
            </p>
          </div>
        </section>

        {/* Desktop */}
        <section className="hidden max-w-375 mx-auto md:mx-[135px] md:max-w-1170 md:flex md:gap-[30px]">
          {/* Card */}
          <section className="flex flex-col justify-between h-[495px] rounded-2xl mb-[20px] bg-[url('/img/top-tour/japan.png')] bg-no-repeat w-[370px]">
            <div className="mt-[30px] ml-[30px]">
              <span className="bg-black bg-opacity-25 rounded-full px-[28px] py-[11px] text-white text-[20px]">
                Japan
              </span>
            </div>
            <div className="px-[30px]">
              <h1 className="text-[34px] text-white font-bold pb-[12px]">
                Japan
              </h1>
              <div className="flex items-center pb-[30px]">
                <span className="text-white -mt-[7px] text-[16px]">
                  10 Popular Places
                </span>
              </div>
            </div>
          </section>
          {/* Card */}
          <section className="flex flex-col justify-between h-[495px] rounded-2xl mb-[20px] bg-[url('/img/top-tour/japan.png')] bg-no-repeat w-[370px]">
            <div className="mt-[30px] ml-[30px]">
              <span className="bg-black bg-opacity-25 rounded-full px-[28px] py-[11px] text-white text-[20px]">
                Japan
              </span>
            </div>
            <div className="px-[30px]">
              <h1 className="text-[34px] text-white font-bold pb-[12px]">
                Japan
              </h1>
              <div className="flex items-center pb-[30px]">
                <span className="text-white -mt-[7px] text-[16px]">
                  10 Popular Places
                </span>
              </div>
            </div>
          </section>
          {/* Card */}
          <section className="flex flex-col justify-between h-[495px] rounded-2xl mb-[20px] bg-[url('/img/top-tour/japan.png')] bg-no-repeat w-[370px]">
            <div className="mt-[30px] ml-[30px]">
              <span className="bg-black bg-opacity-25 rounded-full px-[28px] py-[11px] text-white text-[20px]">
                Japan
              </span>
            </div>
            <div className="px-[30px]">
              <h1 className="text-[34px] text-white font-bold pb-[12px]">
                Japan
              </h1>
              <div className="flex items-center pb-[30px]">
                <span className="text-white -mt-[7px] text-[16px]">
                  10 Popular Places
                </span>
              </div>
            </div>
          </section>
        </section>

        {/* Mobile */}
        <section className="md:hidden">
          {/* Card */}
          <section className="flex flex-col justify-between w-[335px] h-[495px] rounded-2xl mb-[20px] mx-auto bg-[url('/img/top-tour/japan.png')]">
            <div className="pt-[30px] pl-[30px]">
              <span className="bg-black bg-opacity-25 rounded-full px-[28px] py-[11px] text-white text-[20px]">
                Japan
              </span>
            </div>
            <div className="pl-[30px]">
              <h1 className="text-[34px] text-white font-bold pb-[12px]">
                Japan
              </h1>
              <div className="flex items-center pb-[30px]">
                <span className="text-white -mt-[7px] text-[16px]">
                  10 Popular Places
                </span>
              </div>
            </div>
          </section>
          {/* Card */}
          <section className="flex flex-col justify-between w-[335px] h-[495px] rounded-2xl mb-[20px] mx-auto bg-[url('/img/top-tour/japan.png')]">
            <div className="pt-[30px] pl-[30px]">
              <span className="bg-black bg-opacity-25 rounded-full px-[28px] py-[11px] text-white text-[20px]">
                Barcelona
              </span>
            </div>
            <div className="pl-[30px]">
              <h1 className="text-[34px] text-white font-bold pb-[12px]">
                Spain
              </h1>
              <div className="flex items-center pb-[30px]">
                <span className="text-white -mt-[7px] text-[16px]">
                  10 Popular Places
                </span>
              </div>
            </div>
          </section>
          {/* Card */}
          <section className="flex flex-col justify-between w-[335px] h-[495px] rounded-2xl mb-[20px] mx-auto bg-[url('/img/top-tour/japan.png')]">
            <div className="pt-[30px] pl-[30px]">
              <span className="bg-black bg-opacity-25 rounded-full px-[28px] py-[11px] text-white text-[20px]">
                Indonesia
              </span>
            </div>
            <div className="pl-[30px]">
              <h1 className="text-[34px] text-white font-bold pb-[12px]">
                Bali
              </h1>
              <div className="flex items-center pb-[30px]">
                <span className="text-white -mt-[7px] text-[16px]">
                  10 Popular Places
                </span>
              </div>
            </div>
          </section>
        </section>

        {/* Explore The World */}
        <section className="max-w-375 mx-auto md:pl-[135px] md:mx-0 md:max-w-1170">
          <div className="mt-[60px] mb-[12px] md:mb-[24px] md:mt-[100px]">
            <h1 className="text-center text-[30px] font-bold leading-10 md:text-left md:text-[48px]">
              Explore The World
            </h1>
          </div>
          <div className="mb-[35px]">
            <p className="max-w-375 w-600 text-center text-[14px] leading-6 text-gray-400 md:max-w-1440 md:text-left md:px-0">
              10,788 beautiful places to go
            </p>
          </div>
        </section>
        {/* Search Best Place in the World - Cards */}
        <section className="md:mx-auto px-[30px] md:px-[135px] overflow-x-auto no-scrollbar snap-x snap-mandatory">
          <div className="flex pb-10">
            <div className="flex flex-nowrap gap-[30px] md:flex-wrap">
              {/* Card */}
              <div className="inline-block md:pb-30 snap-always snap-center opacity-80 hover:opacity-100">
                <div className="w-[270px] h-[362px] rounded-2xl border border-gray-200 hover:bg-white">
                  <div className="mx-[14px] mt-[14px]">
                    <div className="bg-gray-300 h-[152px] w-[242px] rounded-2xl"></div>
                  </div>
                  <div className="mt-[20px] mx-[14px] flex items-center">
                    <Image
                      src="/img/explore-the-world/star.png"
                      alt=""
                      width="14"
                      height="14"
                    />
                    <span className="pl-[8px]">4.91</span>
                    <span className="text-gray-400">&nbsp;(147)</span>
                  </div>
                  <div className="mt-[14px] mx-[14px] flex justify-between">
                    <div className="">
                      <h1 className="text-[20px]">Comfort Space</h1>
                      <p className="text-sm text-gray-400">
                        1.2 km to Town Center
                      </p>
                    </div>
                    <div className="mt-1">
                      <span className="bg-blue-600 text-white py-[4.5px] px-[12px] rounded-lg">
                        $210
                      </span>
                    </div>
                  </div>
                  <div className="mt-[14px] mx-[14px] flex items-center">
                    <Image
                      src="/img/explore-the-world/location.png"
                      alt=""
                      width="22"
                      height="22"
                    />
                    <span className="text-gray-400 text-[14px]">
                      &nbsp;Turkey, Mamaris
                    </span>
                  </div>
                  <div className="mt-[7px] mx-[14px] flex items-center">
                    <Image
                      src="/img/explore-the-world/building.png"
                      alt=""
                      width="22"
                      height="22"
                    />
                    <span className="text-gray-400 text-[14px]">
                      &nbsp;Rooms available: 375
                    </span>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="inline-block md:pb-30 snap-always snap-center opacity-80 hover:opacity-100">
                <div className="w-[270px] h-[362px] rounded-2xl border border-gray-200 hover:bg-white">
                  <div className="mx-[14px] mt-[14px]">
                    <div className="bg-gray-300 h-[152px] w-[242px] rounded-2xl"></div>
                  </div>
                  <div className="mt-[20px] mx-[14px] flex items-center">
                    <Image
                      src="/img/explore-the-world/star.png"
                      alt=""
                      width="14"
                      height="14"
                    />
                    <span className="pl-[8px]">4.91</span>
                    <span className="text-gray-400">&nbsp;(147)</span>
                  </div>
                  <div className="mt-[14px] mx-[14px] flex justify-between">
                    <div className="">
                      <h1 className="text-[20px]">Comfort Space</h1>
                      <p className="text-sm text-gray-400">
                        1.2 km to Town Center
                      </p>
                    </div>
                    <div className="mt-1">
                      <span className="bg-blue-600 text-white py-[4.5px] px-[12px] rounded-lg">
                        $210
                      </span>
                    </div>
                  </div>
                  <div className="mt-[14px] mx-[14px] flex items-center">
                    <Image
                      src="/img/explore-the-world/location.png"
                      alt=""
                      width="22"
                      height="22"
                    />
                    <span className="text-gray-400 text-[14px]">
                      &nbsp;Turkey, Mamaris
                    </span>
                  </div>
                  <div className="mt-[7px] mx-[14px] flex items-center">
                    <Image
                      src="/img/explore-the-world/building.png"
                      alt=""
                      width="22"
                      height="22"
                    />
                    <span className="text-gray-400 text-[14px]">
                      &nbsp;Rooms available: 375
                    </span>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="inline-block md:pb-30 snap-always snap-center opacity-80 hover:opacity-100">
                <div className="w-[270px] h-[362px] rounded-2xl border border-gray-200 hover:bg-white">
                  <div className="mx-[14px] mt-[14px]">
                    <div className="bg-gray-300 h-[152px] w-[242px] rounded-2xl"></div>
                  </div>
                  <div className="mt-[20px] mx-[14px] flex items-center">
                    <Image
                      src="/img/explore-the-world/star.png"
                      alt=""
                      width="14"
                      height="14"
                    />
                    <span className="pl-[8px]">4.91</span>
                    <span className="text-gray-400">&nbsp;(147)</span>
                  </div>
                  <div className="mt-[14px] mx-[14px] flex justify-between">
                    <div className="">
                      <h1 className="text-[20px]">Comfort Space</h1>
                      <p className="text-sm text-gray-400">
                        1.2 km to Town Center
                      </p>
                    </div>
                    <div className="mt-1">
                      <span className="bg-blue-600 text-white py-[4.5px] px-[12px] rounded-lg">
                        $210
                      </span>
                    </div>
                  </div>
                  <div className="mt-[14px] mx-[14px] flex items-center">
                    <Image
                      src="/img/explore-the-world/location.png"
                      alt=""
                      width="22"
                      height="22"
                    />
                    <span className="text-gray-400 text-[14px]">
                      &nbsp;Turkey, Mamaris
                    </span>
                  </div>
                  <div className="mt-[7px] mx-[14px] flex items-center">
                    <Image
                      src="/img/explore-the-world/building.png"
                      alt=""
                      width="22"
                      height="22"
                    />
                    <span className="text-gray-400 text-[14px]">
                      &nbsp;Rooms available: 375
                    </span>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="inline-block md:pb-30 snap-always snap-center opacity-80 hover:opacity-100">
                <div className="w-[270px] h-[362px] rounded-2xl border border-gray-200 hover:bg-white">
                  <div className="mx-[14px] mt-[14px]">
                    <div className="bg-gray-300 h-[152px] w-[242px] rounded-2xl"></div>
                  </div>
                  <div className="mt-[20px] mx-[14px] flex items-center">
                    <Image
                      src="/img/explore-the-world/star.png"
                      alt=""
                      width="14"
                      height="14"
                    />
                    <span className="pl-[8px]">4.91</span>
                    <span className="text-gray-400">&nbsp;(147)</span>
                  </div>
                  <div className="mt-[14px] mx-[14px] flex justify-between">
                    <div className="">
                      <h1 className="text-[20px]">Comfort Space</h1>
                      <p className="text-sm text-gray-400">
                        1.2 km to Town Center
                      </p>
                    </div>
                    <div className="mt-1">
                      <span className="bg-blue-600 text-white py-[4.5px] px-[12px] rounded-lg">
                        $210
                      </span>
                    </div>
                  </div>
                  <div className="mt-[14px] mx-[14px] flex items-center">
                    <Image
                      src="/img/explore-the-world/location.png"
                      alt=""
                      width="22"
                      height="22"
                    />
                    <span className="text-gray-400 text-[14px]">
                      &nbsp;Turkey, Mamaris
                    </span>
                  </div>
                  <div className="mt-[7px] mx-[14px] flex items-center">
                    <Image
                      src="/img/explore-the-world/building.png"
                      alt=""
                      width="22"
                      height="22"
                    />
                    <span className="text-gray-400 text-[14px]">
                      &nbsp;Rooms available: 375
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Cities */}
        <section className="bg-[#F5F5F5] pb-[30px]">
          <section className="max-w-375 mx-auto md:max-w-1170">
            <h1 className="text-center text-3xl px-9 pt-7 pb-3 font-bold leading-10 md:text-5xl md:max-w-1170 md:px-0 md:mx-auto md:mt-[20px]">
              Trending Cities
            </h1>
            <div className="mb-[35px]">
              <p className="max-w-375 mx-auto w-600 text-center text-[14px] leading-6 text-gray-400 md:max-w-1440 md:text-[24px] md:leading-3 md:mt-[16px] md:mb-[50px]">
                The most searched for cities on TripGuide
              </p>
            </div>
          </section>

          <section className="max-w-375 mx-auto md:flex md:gap-[40px] md:max-w-[980px] md:flex-wrap">
            {/* Card */}
            <div className="flex w-335 h-[201px] mb-[20px] bg-white rounded-3xl mx-auto md:w-[470px]">
              <div className="flex mx-[16px] my-[16px] gap-[16px]">
                <div className="w-[160px] h-[168px] bg-gray-300 rounded-2xl"></div>
                <div className="w-[127px] h-[168px] flex flex-col justify-between -mt-1">
                  <h1 className="text-[24px] font-bold">Manila</h1>
                  <div className="flex items-center">
                    <Image
                      src="/img/explore-the-world/star.png"
                      alt=""
                      width="14"
                      height="14"
                    />
                    <span className="pl-[8px]">4.91</span>
                    <span className="text-gray-400">&nbsp;(147)</span>
                  </div>
                  <div className="">
                    <span className="text-[18px]">
                      $250.00
                      <span className="text-gray-400">/night</span>
                    </span>
                  </div>
                  <div className="">
                    <span className="bg-blue-600 text-white py-[4.5px] px-[12px] rounded-md">
                      Book now
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="flex w-335 h-[201px] mb-[20px] bg-white rounded-3xl mx-auto md:w-[470px]">
              <div className="flex mx-[16px] my-[16px] gap-[16px]">
                <div className="w-[160px] h-[168px] bg-gray-300 rounded-2xl"></div>
                <div className="w-[127px] h-[168px] flex flex-col justify-between -mt-1">
                  <h1 className="text-[24px] font-bold">Manila</h1>
                  <div className="flex items-center">
                    <Image
                      src="/img/explore-the-world/star.png"
                      alt=""
                      width="14"
                      height="14"
                    />
                    <span className="pl-[8px]">4.91</span>
                    <span className="text-gray-400">&nbsp;(147)</span>
                  </div>
                  <div className="">
                    <span className="text-[18px]">
                      $250.00
                      <span className="text-gray-400">/night</span>
                    </span>
                  </div>
                  <div className="">
                    <span className="bg-blue-600 text-white py-[4.5px] px-[12px] rounded-md">
                      Book now
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="flex w-335 h-[201px] mb-[20px] bg-white rounded-3xl mx-auto md:w-[470px]">
              <div className="flex mx-[16px] my-[16px] gap-[16px]">
                <div className="w-[160px] h-[168px] bg-gray-300 rounded-2xl"></div>
                <div className="w-[127px] h-[168px] flex flex-col justify-between -mt-1">
                  <h1 className="text-[24px] font-bold">Manila</h1>
                  <div className="flex items-center">
                    <Image
                      src="/img/explore-the-world/star.png"
                      alt=""
                      width="14"
                      height="14"
                    />
                    <span className="pl-[8px]">4.91</span>
                    <span className="text-gray-400">&nbsp;(147)</span>
                  </div>
                  <div className="">
                    <span className="text-[18px]">
                      $250.00
                      <span className="text-gray-400">/night</span>
                    </span>
                  </div>
                  <div className="">
                    <span className="bg-blue-600 text-white py-[4.5px] px-[12px] rounded-md">
                      Book now
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="flex w-335 h-[201px] mb-[20px] bg-white rounded-3xl mx-auto md:w-[470px]">
              <div className="flex mx-[16px] my-[16px] gap-[16px]">
                <div className="w-[160px] h-[168px] bg-gray-300 rounded-2xl"></div>
                <div className="w-[127px] h-[168px] flex flex-col justify-between -mt-1">
                  <h1 className="text-[24px] font-bold">Manila</h1>
                  <div className="flex items-center">
                    <Image
                      src="/img/explore-the-world/star.png"
                      alt=""
                      width="14"
                      height="14"
                    />
                    <span className="pl-[8px]">4.91</span>
                    <span className="text-gray-400">&nbsp;(147)</span>
                  </div>
                  <div className="">
                    <span className="text-[18px]">
                      $250.00
                      <span className="text-gray-400">/night</span>
                    </span>
                  </div>
                  <div className="">
                    <span className="bg-blue-600 text-white py-[4.5px] px-[12px] rounded-md">
                      Book now
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="flex w-335 h-[201px] mb-[20px] bg-white rounded-3xl mx-auto md:w-[470px]">
              <div className="flex mx-[16px] my-[16px] gap-[16px]">
                <div className="w-[160px] h-[168px] bg-gray-300 rounded-2xl"></div>
                <div className="w-[127px] h-[168px] flex flex-col justify-between -mt-1">
                  <h1 className="text-[24px] font-bold">Manila</h1>
                  <div className="flex items-center">
                    <Image
                      src="/img/explore-the-world/star.png"
                      alt=""
                      width="14"
                      height="14"
                    />
                    <span className="pl-[8px]">4.91</span>
                    <span className="text-gray-400">&nbsp;(147)</span>
                  </div>
                  <div className="">
                    <span className="text-[18px]">
                      $250.00
                      <span className="text-gray-400">/night</span>
                    </span>
                  </div>
                  <div className="">
                    <span className="bg-blue-600 text-white py-[4.5px] px-[12px] rounded-md">
                      Book now
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="flex w-335 h-[201px] mb-[20px] bg-white rounded-3xl mx-auto md:w-[470px]">
              <div className="flex mx-[16px] my-[16px] gap-[16px]">
                <div className="w-[160px] h-[168px] bg-gray-300 rounded-2xl"></div>
                <div className="w-[127px] h-[168px] flex flex-col justify-between -mt-1">
                  <h1 className="text-[24px] font-bold">Manila</h1>
                  <div className="flex items-center">
                    <Image
                      src="/img/explore-the-world/star.png"
                      alt=""
                      width="14"
                      height="14"
                    />
                    <span className="pl-[8px]">4.91</span>
                    <span className="text-gray-400">&nbsp;(147)</span>
                  </div>
                  <div className="">
                    <span className="text-[18px]">
                      $250.00
                      <span className="text-gray-400">/night</span>
                    </span>
                  </div>
                  <div className="">
                    <span className="bg-blue-600 text-white py-[4.5px] px-[12px] rounded-md">
                      Book now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* Travel Your Passion */}
        <section className="max-w-375 mx-auto md:pl-[135px] md:mx-0 md:max-w-1170">
          <div className="mt-[60px] mb-[12px] md:mb-[24px] md:mt-[100px]">
            <h1 className="text-center text-[30px] font-bold leading-10 md:text-left md:text-[48px]">
              Travel Your Passion
            </h1>
          </div>
          <div className="mb-[35px]">
            <p className="max-w-375 w-600 text-center px-11 text-[14px] leading-6 text-gray-400 md:max-w-1440 md:text-left md:px-0">
              Most Brilliant reasons Entrada should be your one-stop-shop!
            </p>
          </div>
        </section>
        {/* Search Best Place in the World - Cards */}
        <section className="md:mx-auto px-[30px] overflow-x-auto no-scrollbar snap-x snap-mandatory md:px-[135px]">
          <div className="flex pb-10">
            <div className="flex flex-nowrap gap-[30px] md:flex-wrap">
              {/* Card */}
              <div className="inline-block snap-always snap-center md:pb-30">
                <div className="flex flex-col justify-end w-[270px] h-[362px] rounded-2xl border border-gray-200 pl-[30px] bg-gray-400 pb-[30px]">
                  <div className="">
                    <h1 className="text-[24px] font-bold text-white">
                      Beach Hobby
                    </h1>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src="/img/explore-the-world/star.png"
                      alt=""
                      width="14"
                      height="14"
                    />
                    <span className="pl-[8px] text-white text-[14px]">
                      4.8 (122 reviews)
                    </span>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="inline-block snap-always snap-center md:pb-30">
                <div className="flex flex-col justify-end w-[270px] h-[362px] rounded-2xl border border-gray-200 pl-[30px] bg-gray-400 pb-[30px]">
                  <div className="">
                    <h1 className="text-[24px] font-bold text-white">
                      Beach Hobby
                    </h1>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src="/img/explore-the-world/star.png"
                      alt=""
                      width="14"
                      height="14"
                    />
                    <span className="pl-[8px] text-white text-[14px]">
                      4.8 (122 reviews)
                    </span>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="inline-block snap-always snap-center md:pb-30">
                <div className="flex flex-col justify-end w-[270px] h-[362px] rounded-2xl border border-gray-200 pl-[30px] bg-gray-400 pb-[30px]">
                  <div className="">
                    <h1 className="text-[24px] font-bold text-white">
                      Beach Hobby
                    </h1>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src="/img/explore-the-world/star.png"
                      alt=""
                      width="14"
                      height="14"
                    />
                    <span className="pl-[8px] text-white text-[14px]">
                      4.8 (122 reviews)
                    </span>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="inline-block snap-always snap-center md:pb-30">
                <div className="flex flex-col justify-end w-[270px] h-[362px] rounded-2xl border border-gray-200 pl-[30px] bg-gray-400 pb-[30px]">
                  <div className="">
                    <h1 className="text-[24px] font-bold text-white">
                      Beach Hobby
                    </h1>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src="/img/explore-the-world/star.png"
                      alt=""
                      width="14"
                      height="14"
                    />
                    <span className="pl-[8px] text-white text-[14px]">
                      4.8 (122 reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Desktop */}
        {/* Get our pro offers */}
        <section className="hidden mx-auto md:mx-[135px] md:max-w-1170 md:flex md:gap-[30px] md:-mb-[75px]">
          {/* Card */}
          <section className="flex justify-between h-[248px] rounded-2xl mb-[20px] w-[1170px] bg-blue-600 py-[62px] px-[90px] items-center">
            <div className="">
              <h1 className="text-[44px] text-white font-bold pb-[12px] leading-10">
                Get our pro offers
              </h1>
              <p className="text-white mt-[7px] text-[16px] w-[234px]">
                Subscribe to stay up to date with our latest offers!
              </p>
            </div>
            <div className="">
              <form className="bg-white w-[288px] h-[69px] rounded-md py-[9px] px-[9px]">
                <div className="flex justify-between item-center -mt-[1px] pl-[9px]">
                  <input
                    type="text"
                    className="w-[255px]"
                    placeholder="Type your email here"
                  />
                  <input
                    className="bg-gray-700 w-[130px] h-[55px] text-white text-[16px] font-bold rounded-md flex items-center justify-center"
                    type="submit"
                    value="Subscribe"
                  />
                </div>
              </form>
            </div>
          </section>
        </section>

        {/* Mobile */}
        {/* Get our pro offers */}
        <section className="max-w-[375px] mx-auto mb-[159px] mt-[30px] md:hidden">
          {/* Card */}
          <section className="flex flex-col justify-between w-[335px] h-[174px] rounded-2xl mb-[20px] mx-auto bg-[url('/img/offers-bg.png')] bg-blue-600 px-[20px] py-[14px]">
            <div className="">
              <h1 className="text-[20px] text-white font-bold pb-[12px]">
                Get our pro offers
              </h1>
              <div className="">
                <p className="text-white -mt-[7px] text-[12px] w-[234px]">
                  Subscribe to stay up to date with our latest offers!
                </p>
              </div>
              <div className="mt-[14px]">
                <form className="bg-white w-[295px] h-[60px] rounded-md p-[9px]">
                  <div className="flex justify-between item-center -mt-[1px]">
                    <input
                      type="text"
                      className="w-[155px]"
                      placeholder="Enter email..."
                    />
                    <input
                      className="bg-gray-700 w-[120px] h-[44px] text-white text-[16px] font-bold rounded-md flex items-center justify-center"
                      type="submit"
                      value="Subscribe"
                    />
                  </div>
                </form>
              </div>
            </div>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
};

const Home: NextPage = () => {
  const [session, setSession] = useState(false);

  return <>{session ? User() : Guest()}</>;
};

export default Home;
