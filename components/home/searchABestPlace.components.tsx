import Image from "next/image";

export const SearchABestPlace = () => {
  return (
    <>
      {/* Search Best Place in the World */}
      <section className="max-w-375 mx-auto md:max-w-1170 dark:bg-[#141416]">
        <h1 className="text-center text-3xl px-9 pt-7 pb-3 font-bold leading-10 md:text-5xl md:max-w-1170 md:px-0 md:mx-auto">
          Search a best place in the world
        </h1>
        <p className="max-w-375 w-600 text-center text-sm px-14 leading-5 text-gray-400 pb-14 md:max-w-1170 md:text-base md:px-1 md:mx-auto">
          Whether you’re looking for places for a vacation. We are here to Guide
          you about the details you need to check in and ease your trips in
          advance
        </p>
      </section>
      {/* Search Best Place in the World - Cards */}
      <section className="md:mx-auto px-[30px] md:px-[135px] overflow-x-auto no-scrollbar snap-x snap-mandatory">
        <div className="flex pb-10">
          <div className="flex flex-nowrap gap-[30px] md:flex-wrap">
            {/* Card */}
            <div className="inline-block md:pb-30 snap-always snap-center">
              <div className="w-250 h-207 rounded-2xl border border-gray-200 hover:bg-white dark:hover:bg-[#222529] dark:border-gray-800">
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
              <div className="w-250 h-207 rounded-2xl border border-gray-200 hover:bg-white dark:hover:bg-[#222529] dark:border-gray-800">
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
              <div className="w-250 h-207 rounded-2xl border border-gray-200 hover:bg-white dark:hover:bg-[#222529] dark:border-gray-800">
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
              <div className="w-250 h-207 rounded-2xl border border-gray-200 hover:bg-white dark:hover:bg-[#222529] dark:border-gray-800">
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
              <div className="w-250 h-207 rounded-2xl border border-gray-200 hover:bg-white dark:hover:bg-[#222529] dark:border-gray-800">
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
              <div className="w-250 h-207 rounded-2xl border border-gray-200 hover:bg-white dark:hover:bg-[#222529] dark:border-gray-800">
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
              <div className="w-250 h-207 rounded-2xl border border-gray-200 hover:bg-white dark:hover:bg-[#222529] dark:border-gray-800">
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
              <div className="w-250 h-207 rounded-2xl border border-gray-200 hover:bg-white dark:hover:bg-[#222529] dark:border-gray-800">
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
    </>
  );
};
