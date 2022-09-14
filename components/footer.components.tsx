import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="md:flex md:justify-between pt-10 px-8 pb-8 md:px-48 md:pt-44 md:pb-32 max-w-1920 mx-auto">
        <div className="hidden md:flex flex-col w-64">
          <div className="">
            <Image src="/img/logo.png" alt="" width="148" height="38" />
          </div>
          <div className="pt-7">
            <span className="text-gray-400">
              This is the team that specializes in making sure in the find it a
              your interior looks cool
            </span>
          </div>
          <div className="w-32 h-10 mt-7 pl-3 pt-1 pr-2 flex items-center gap-x-7 bg-white rounded-lg">
            <Image src="/img/button-sun.png" alt="" width="60" height="30" />
            <Image src="/img/button-moon.png" alt="" width="24" height="24" />
          </div>
        </div>
        <div className="">
          <ul className="flex flex-col gap-3.5">
            <li className="text-lg md:text-2xl">Business</li>
            <li className="text-xs text-gray-600 md:text-gray-400 md:text-base">
              Success
            </li>
            <li className="text-xs text-gray-600 md:text-gray-400 md:text-base">
              About Locato
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
        <div className="pt-7 md:hidden">
          <Image src="/img/logo.png" alt="" width="94" height="24" />
        </div>
        <div className="w-32 mt-6 pl-2 pr-1 pt-1 flex items-center gap-x-7 bg-white rounded-lg md:hidden">
          <Image src="/img/button-sun.png" alt="" width="60" height="30" />
          <Image src="/img/button-moon.png" alt="" width="24" height="24" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
