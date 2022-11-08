import dynamic from 'next/dynamic';
import Image from 'next/image';

const ThemeButton = dynamic(() => import('./ThemeButton.components') as any, {
  ssr: false,
});

const Footer = () => {
  return (
    <>
      <section className="bg-footerBg font-dmSans dark:bg-[#222529]">
        <div className="pt-10 pb-8 md:px-5 md:pt-44 md:pb-32 md:flex md:justify-between md:gap-10">
          <div className="md:w-[1440px] md:max-w-[1440px] mx-auto md:flex justify-between px-10">
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
              <div className="mt-10">
                <ThemeButton />
              </div>
            </div>
            {/* Services - Desktop/Mobile */}
            <div className="">
              <ul className="flex flex-col gap-3.5">
                <li className="text-lg md:text-2xl">Services</li>
                <li className="text-xs text-gray-600 md:text-gray-400 md:text-base dark:text-gray-400">
                  Travel Booking
                </li>
                <li className="text-xs text-gray-600 md:text-gray-400 md:text-base dark:text-gray-400">
                  Flight Booking
                </li>
                <li className="text-xs text-gray-600 md:text-gray-400 md:text-base dark:text-gray-400">
                  Car Booking
                </li>
                <li className="text-xs text-gray-600 md:text-gray-400 md:text-base dark:text-gray-400">
                  Fivestar Hotel
                </li>
                <li className="text-xs text-gray-600 md:text-gray-400 md:text-base dark:text-gray-400">
                  Traveling
                </li>
              </ul>
            </div>
            <div className="md:hidden border-b border-gray-300 dark:border-gray-700 my-5"></div>
            {/* Support - Desktop/Mobile */}
            <div className="">
              <ul className="flex flex-col gap-3.5">
                <li className="text-lg md:text-2xl">Support</li>
                <li className="text-xs text-gray-600 md:text-gray-400 md:text-base dark:text-gray-400">
                  Account
                </li>
                <li className="text-xs text-gray-600 md:text-gray-400 md:text-base dark:text-gray-400">
                  Legal
                </li>
                <li className="text-xs text-gray-600 md:text-gray-400 md:text-base dark:text-gray-400">
                  Contact
                </li>
                <li className="text-xs text-gray-600 md:text-gray-400 md:text-base dark:text-gray-400">
                  Terms & Condition
                </li>
                <li className="text-xs text-gray-600 md:text-gray-400 md:text-base dark:text-gray-400">
                  Privacy Policy
                </li>
              </ul>
            </div>
            <div className="md:hidden border-b border-gray-300 dark:border-gray-700 my-5"></div>
            {/* Business - Desktop/Mobile */}
            <div>
              <ul className="flex flex-col gap-3.5">
                <li className="text-lg md:text-2xl">Business</li>
                <li className="text-xs text-gray-600 md:text-gray-400 md:text-base dark:text-gray-400">
                  Success
                </li>
                <li className="text-xs text-gray-600 md:text-gray-400 md:text-base dark:text-gray-400">
                  About
                </li>
                <li className="text-xs text-gray-600 md:text-gray-400 md:text-base dark:text-gray-400">
                  Blog
                </li>
                <li className="text-xs text-gray-600 md:text-gray-400 md:text-base dark:text-gray-400">
                  Information
                </li>
                <li className="text-xs text-gray-600 md:text-gray-400 md:text-base dark:text-gray-400">
                  Travel Guide
                </li>
              </ul>
            </div>
            <div className="md:hidden border-b border-gray-300 dark:border-gray-700 my-5"></div>
            {/* Mobile */}
            <div className="mt-5 mb-5 flex items-center md:hidden justify-between">
              <div className="flex items-center">
                <Image src="/img/logo.png" alt="" width="24" height="24" />
                <span className="text-xs font-openSans font-bold pl-2.5">
                  TripGuide
                </span>
              </div>
              <ThemeButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
