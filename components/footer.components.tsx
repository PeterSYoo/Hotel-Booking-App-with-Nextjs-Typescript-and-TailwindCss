import Image from "next/image";
import { useEffect } from "react";
import { applyThemePreference } from "../applyThemePreference";
import useThemeStore from "../stores/useThemeStore";
import { BsFillSunFill, BsMoonStars } from "react-icons/bs";

const Footer = () => {
  const toggleTheme = useThemeStore((state: any) => state.toggleTheme);
  const theme = useThemeStore((state: any) => state.theme);

  useEffect(() => {
    applyThemePreference(theme);
  }, [theme]);

  return (
    <>
      <section className="bg-footerBg font-dmSans dark:bg-[#222529]">
        <div className="pt-10 px-8 pb-8 md:px-48 md:pt-44 md:pb-32 md:flex md:justify-between md:gap-10">
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
            <div className="w-28 h-10 mt-7 flex items-center justify-between px-4 gap-x-7 bg-white rounded-lg dark:bg-[#3B3E44]">
              <button onClick={toggleTheme} type="button">
                <BsFillSunFill />
              </button>
              <button onClick={toggleTheme} type="button">
                <BsMoonStars />
              </button>
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
          <div className="md:hidden border-b border-gray-700 my-5"></div>
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
          <div className="md:hidden border-b border-gray-700 my-5"></div>
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
          {/* Mobile */}
          <div className="pt-7 flex items-center md:hidden">
            <Image src="/img/logo.png" alt="" width="24" height="24" />
            <span className="text-xs font-openSans font-bold pl-2.5">
              TripGuide
            </span>
          </div>
          <div className="w-32 mt-6 py-2 px-4 flex items-center justify-between gap-x-7 bg-white rounded-lg md:hidden dark:bg-[#3B3E44]">
            <button onClick={toggleTheme} type="button">
              <BsFillSunFill />
            </button>
            <button onClick={toggleTheme} type="button">
              <BsMoonStars />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
