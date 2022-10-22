export const TopTour = () => {
  return (
    <>
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
            <h1 className="text-[34px] text-white font-bold pb-[12px]">Bali</h1>
            <div className="flex items-center pb-[30px]">
              <span className="text-white -mt-[7px] text-[16px]">
                10 Popular Places
              </span>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
