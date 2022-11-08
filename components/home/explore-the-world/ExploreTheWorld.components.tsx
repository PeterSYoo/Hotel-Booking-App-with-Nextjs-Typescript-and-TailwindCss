import Image from 'next/image';

export const ExploreTheWorld = () => {
  return (
    <>
      <div className="bg-[#F5F5F5] dark:bg-[#141416] pt-1 pb-10">
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
        {/* Explore The World - Cards */}
        <section className="md:mx-auto px-[30px] md:px-[135px] overflow-x-auto no-scrollbar snap-x snap-mandatory">
          <div className="flex pb-10">
            <div className="flex flex-nowrap gap-[30px] md:flex-wrap">
              {/* Card */}
              <div className="inline-block md:pb-30 snap-always snap-center opacity-80 hover:opacity-100">
                <div className="w-[270px] h-[362px] rounded-2xl border border-gray-200 hover:bg-white dark:hover:bg-[#222529] dark:border-0 dark:bg-[#222529] py-1">
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
                <div className="w-[270px] h-[362px] rounded-2xl border border-gray-200 hover:bg-white dark:hover:bg-[#222529] dark:border-0 dark:bg-[#222529] py-1">
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
                <div className="w-[270px] h-[362px] rounded-2xl border border-gray-200 hover:bg-white dark:hover:bg-[#222529] dark:border-0 dark:bg-[#222529] py-1">
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
                <div className="w-[270px] h-[362px] rounded-2xl border border-gray-200 hover:bg-white dark:hover:bg-[#222529] dark:border-0 dark:bg-[#222529] py-1">
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
      </div>
    </>
  );
};
