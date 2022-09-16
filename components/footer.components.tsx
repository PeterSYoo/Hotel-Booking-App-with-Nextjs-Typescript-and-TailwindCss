import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-footerBg font-dmSans max-w-1440 mx-auto">
      <div className="pt-10 px-8 pb-8 max-w-1057 mx-auto md:px-48 md:pt-44 md:pb-32 md:flex md:justify-between ">
        <div className="hidden flex-col w-64 md:flex">
          <div className="items-center md:flex">
            <Image src="/img/logo.png" alt="" width="40" height="38" />
            <span className="text-xl font-openSans font-bold pl-2.5">
              TripGuide
            </span>
          </div>
          <div className="pt-7">
            <span className="text-gray-400">
              Making sure in finding the best place for you to travel
            </span>
          </div>
          <div className="w-32 h-10 mt-7 pl-[12px] pt-1 pr-[12px] flex items-center gap-x-7 bg-white rounded-lg">
            <Image src="/img/button-sun.png" alt="" width="60" height="30" />
            <div className="mt-1">
              <Image src="/img/button-moon.png" alt="" width="24" height="24" />
            </div>
          </div>
        </div>
        <div className="">
          <ul className="flex flex-col gap-3.5">
            <li className="text-lg md:text-2xl">Business</li>
            <li className="text-xs text-gray-600 md:text-gray-400 md:text-base">
              Success
            </li>
            <li className="text-xs text-gray-600 md:text-gray-400 md:text-base">
              About
            </li>
            <li className="text-xs text-gray-600 md:text-gray-400 md:text-base">
              Blog
            </li>
            <li className="text-xs text-gray-600 md:text-gray-400 md:text-base">
              Information
            </li>
            <li className="text-xs text-gray-600 md:text-gray-400 md:text-base">
              Travel Guide
            </li>
          </ul>
        </div>
        {/* Mobile */}
        <div className="pt-7 flex items-center md:hidden">
          <Image src="/img/logo.png" alt="" width="24" height="24" />
          <span className="text-xs font-openSans font-bold pl-2.5">
            TripGuide
          </span>
        </div>
        <div className="w-32 mt-6 pl-[12px] pr-[12px] pt-1 flex items-center gap-x-7 bg-white rounded-lg md:hidden">
          <Image src="/img/button-sun.png" alt="" width="60" height="30" />
          <div className="mt-1">
            <Image src="/img/button-moon.png" alt="" width="24" height="24" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
