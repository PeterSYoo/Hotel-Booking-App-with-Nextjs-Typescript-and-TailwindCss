import React, { useState } from 'react'
import { useRouter } from "next/router";
import {
  RiHotelBedFill,
  RiFlightTakeoffFill,
  RiTaxiFill,
} from "react-icons/ri";
import { AiOutlineSwap } from "react-icons/ai";

type AppProps = {
  isHome: boolean;
  searchQuery?: string;
}

export const SearchPlace = ({isHome, searchQuery}:AppProps) => {
  const [inputValue, setInputValue] = useState(searchQuery)
  const router = useRouter()
  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const data = {
      destination: e.target.destination.value
    }

    const JSONdata = JSON.stringify(data)

    const endpoint = '/api/forms/destination'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    const response = await fetch(endpoint, options)
    const result = await response.json()
    router.push({
      pathname: '/hotel-list',
      query: {dest: result.data}
    })

  }

  return (
    <>
      {/* Search Component */}
      {/* Desktop */}
      <section className=" mx-[20px] mb-10 hidden md:block" style={isHome ? {marginTop: '-152px'} : {marginTop: '0'}}>
        {/* Search Form */}
        <form onSubmit={handleSubmit}>
          <div className="w-full bg-white rounded-xl px-[60px] py-[30px] drop-shadow-2xl dark:bg-[#222529]">
            <div className="flex justify-between">
              <div className="w-3/4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-6">
                    <div className="flex justify-between items-center gap-1">
                      <RiHotelBedFill className="text-2xl text-gray-800 dark:text-white" />
                      <span className="text-[14px] font-bold text-gray-800 dark:text-white">
                        Hotel
                      </span>
                    </div>
                    <div className="flex justify-between items-center gap-1">
                      <RiFlightTakeoffFill className="text-2xl text-gray-800 dark:text-white" />
                      <span className="text-[14px] font-bold text-gray-800 dark:text-white">
                        Flight
                      </span>
                    </div>
                    <div className="flex justify-between items-center gap-1">
                      <RiTaxiFill className="text-2xl text-gray-800 dark:text-white" />
                      <span className="text-[14px] font-bold text-gray-800 dark:text-white">
                        Car Rental
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <span className="text-[18px] text-gray-800 dark:text-white">
                      Round trip
                    </span>
                    <span className="text-[18px] text-gray-800 dark:text-white">
                      1 passenger
                    </span>
                  </div>
                </div>
                <div className="border-b-2 w-full mt-[20px] dark:border-gray-700"></div>
              </div>
              <div className="w-1/4"></div>
            </div>
            <div className="flex justify-between items-end w-full">
              <div className="w-3/4 flex">
                <div className="bg-gray-100 w-full border rounded-lg px-[20px] mt-[20px] py-2 dark:bg-[#3B3E44] dark:border-[#3B3E44]">
                  <h1 className="text-[18px]">Location</h1>
                  <input
                    type="text"
                    name="destination"
                    value={inputValue}
                    className="bg-gray-100 text-[16px] w-full py-2 dark:bg-[#3B3E44]"
                    placeholder="Where are you going?"
                    onChange={(e) => setInputValue(e.target.value)}
                    required
                  />
                </div>
                <div className="flex items-center -mx-3 mt-4 z-10">
                  <div className="bg-white p-1 rounded-3xl dark:bg-[#42464B]">
                    <AiOutlineSwap className="text-2xl text-gray-400 cursor-pointer dark:text-white" />
                  </div>
                </div>
                <div className="bg-gray-100 w-full border rounded-lg px-[20px] mt-[20px] py-2 dark:bg-[#3B3E44] dark:border-[#3B3E44]">
                  <h1 className="text-[18px]">Check in</h1>
                  <input
                    type="text"
                    className="bg-gray-100 text-[16px] w-full py-2 dark:bg-[#3B3E44]"
                    placeholder="Add Date"
                  />
                </div>
                <div className="flex items-center -mx-3 mt-4 z-10">
                  <div className="bg-white p-1 rounded-3xl dark:bg-[#42464B]">
                    <AiOutlineSwap className="text-2xl text-gray-400 cursor-pointer dark:text-white" />
                  </div>
                </div>
                <div className="bg-gray-100 w-full border rounded-lg px-[20px] mt-[20px] py-2 dark:bg-[#3B3E44] dark:border-[#3B3E44]">
                  <h1 className="text-[18px]">Check out</h1>
                  <input
                    type="text"
                    className="bg-gray-100 text-[16px] w-full py-2 dark:bg-[#3B3E44]"
                    placeholder="Add Date"
                  />
                </div>
              </div>
              <div className="w-1/4 ">
                <div className="ml-20">
                  <button
                    type="submit"
                    className="py-[27px] w-full bg-blue-600 text-white rounded-lg text-[20px]"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>

      {/* Search Component */}
      {/* Mobile */}
      <section className="-mt-[245px] mx-[20px] mb-10 md:hidden" style={isHome ? {marginTop: '-152px'} : {marginTop: '0'}}>
        {/* Search Form */}
        <form onSubmit={handleSubmit}>
          <div className="w-full bg-white rounded-xl px-[20px] py-[20px] drop-shadow-2xl dark:bg-[#222529]">
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-1">
                <RiHotelBedFill className="text-2xl text-gray-800 dark:text-white" />
                <span className="text-[14px] font-bold text-gray-800 dark:text-white">
                  Hotel
                </span>
              </div>
              <div className="flex justify-between items-center gap-1">
                <RiFlightTakeoffFill className="text-2xl text-gray-800 dark:text-white" />
                <span className="text-[14px] font-bold text-gray-800 dark:text-white">
                  Flight
                </span>
              </div>
              <div className="flex justify-between items-center gap-1">
                <RiTaxiFill className="text-2xl text-gray-800 dark:text-white" />
                <span className="text-[14px] font-bold text-gray-800 dark:text-white">
                  Car Rental
                </span>
              </div>
            </div>
            <div className="border-b-2 w-full mt-[20px]"></div>
            <div className="flex gap-10 mt-[20px]">
              <span className="text-[16px] text-gray-800 dark:text-white">
                Round trip
              </span>
              <span className="text-[16px] text-gray-800 dark:text-white">
                1 passenger
              </span>
            </div>
            <div className="bg-gray-100 w-full border rounded-lg px-[20px] py-[8px] mt-[20px] dark:bg-[#3B3E44] dark:border-[#3B3E44]">
              <h1 className="text-[16px]">Location</h1>
              <input
                type="text"
                name="destination"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="bg-gray-100 text-[12px] w-full py-2 dark:bg-[#3B3E44]"
                placeholder="Where are you from?"
                required
              />
            </div>
            <div className="flex justify-between gap-[10px] mt-[10px]">
              <div className="bg-gray-100 w-full border rounded-lg px-[20px] py-[8px] dark:bg-[#3B3E44] dark:border-[#3B3E44]">
                <h1 className="text-[16px]">Check in</h1>
                <input
                  type="text"
                  className="bg-gray-100 text-[12px] w-full py-2 dark:bg-[#3B3E44]"
                  placeholder="Add date"
                />
              </div>
              <div className="bg-gray-100 w-full border rounded-lg px-[20px] py-[8px] dark:bg-[#3B3E44] dark:border-[#3B3E44]">
                <h1 className="text-[16px]">Check out</h1>
                <input
                  type="text"
                  className="bg-gray-100 text-[12px] w-full py-2 dark:bg-[#3B3E44]"
                  placeholder="Add date"
                />
              </div>
            </div>
            <div className="mt-[12px]">
              <button
                type="submit"
                className="py-[11px] w-full bg-blue-600 text-white rounded-lg text-[20px]"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
