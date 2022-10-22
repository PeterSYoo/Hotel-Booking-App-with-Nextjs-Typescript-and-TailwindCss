import Image from "next/image";

export const FeaturedDestinations = () => {
  return (
    <>
      {/* Featured Destinations */}
      <section className="max-w-375 mx-auto md:pl-[135px] md:mx-0 md:max-w-1170">
        <h1 className="text-center text-3xl px-9 pt-7 pb-3 font-bold leading-10 md:text-left md:px-0 md:text-5xl">
          Featured Destinations
        </h1>
        <p className="max-w-375 w-600 text-center px-14 leading-6 text-gray-600 pb-1 md:max-w-1440 md:text-left md:px-0 md:mb-[50px]">
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
    </>
  );
};
