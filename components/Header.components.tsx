import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import { FaRegBell } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import Login from '../pages/login';
// import SignUp from '../pages/signup';
import useLoginModal from '../hooks/useLoginModal';
import useSignupModal from '../hooks/useSignupModal';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const ThemeButton = dynamic(() => import('./themeButton.components') as any, {
  ssr: false,
});

// Guest
const Guest = () => {
  const { openLogin, setOpenLogin } = useLoginModal();
  // const { openSignup, setOpenSignup } = useSignupModal();
  return (
    <>
      <Login open={openLogin} onClose={() => setOpenLogin(false)} />
      {/* <SignUp open={openSignup} onClose={() => setOpenSignup(false)} /> */}
      <div className="flex py-[25px] bg-white dark:bg-[#222529] font-dmSans ">
        {/* Desktop */}
        <div className="w-[1440px] md:max-w-[1440px] mx-auto flex justify-between px-5 md:px-10">
          <div className="hidden items-center md:flex">
            <button className="text-xl font-openSans font-bold flex items-center gap-3">
              <Image src="/img/logo.png" alt="" width="28" height="28" />
              <Link href="/">TripGuide</Link>
            </button>
          </div>
          {/* Mobile */}
          <div className="flex items-center md:hidden">
            <button className="text-base font-openSans font-bold flex items-center gap-3">
              <Image src="/img/logo.png" alt="" width="22" height="22" />
              <Link href="/">TripGuide</Link>
            </button>
          </div>
          {/* Desktop */}
          <div className="hidden gap-x-8 items-center md:flex">
            <ThemeButton />
            <div className="border-r h-[32px] w-[1px] mx-1 dark:border-gray-700" />
            <button
              onClick={() => setOpenLogin(true)}
              className="text-xl font-bold"
            >
              Login
            </button>
            {/* <Button onClick={() => setOpenSignup(true)}>signup</Button> */}
          </div>
          {/* Mobile */}
          <div className="flex gap-x-4 items-center md:hidden">
            <ThemeButton />
            <div className="border-r h-[32px] w-[1px] mx-1 dark:border-gray-700" />
            <button
              onClick={() => setOpenLogin(true)}
              className="text-base font-bold"
            >
              Login
            </button>
            {/* <button
            onClick={() => setOpenSignup(true)}
            className="text-base text-white bg-blueBtn px-2 py-1 rounded-xl"
          >
            signup
          </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

// Authorize User
const User = ({ session }: any) => {
  const { openLogin, setOpenLogin } = useLoginModal();
  // const { openSignup, setOpenSignup } = useSignupModal();
  return (
    <>
      <div className="flex justify-between py-[25px] bg-white dark:bg-[#222529] font-dmSans">
        {/* Desktop */}
        <div className="w-[1440px] md:max-w-[1440px] mx-auto flex justify-between px-5 md:px-10">
          <div className="hidden items-center md:flex">
            <button className="text-xl font-openSans font-bold flex items-center gap-3">
              <Image src="/img/logo.png" alt="" width="28" height="28" />
              <Link href="/">TripGuide</Link>
            </button>
          </div>
          {/* Mobile */}
          <div className="flex items-center md:hidden">
            <button className="text-base font-openSans font-bold flex items-center gap-3">
              <Image src="/img/logo.png" alt="" width="22" height="22" />
              <Link href="/">TripGuide</Link>
            </button>
          </div>
          {/* Desktop */}
          <div className="hidden items-center md:flex">
            <div className="flex items-center gap-x-8">
              {/* <div className="flex items-center gap-5">
                <span className="text-[14px] font-bold font-openSans text-gray-400">
                  USD
                </span>
                <Image src="/img/usa-flag.png" alt="" width="20" height="20" />
                <div className="text-xl text-gray-500">
                  <FaRegBell />
                </div>
              </div>
               */}
              <ThemeButton />
              <div className="border-r h-[32px] w-[1px] mx-1 dark:border-gray-700" />
              <button className="text-blue-600 dark:text-white">
                <Link href="/profile">
                  <FaUserCircle size={27} />
                </Link>
              </button>
              <div className="border-r h-[32px] w-[1px] mx-1 dark:border-gray-700" />
              <button onClick={() => signOut()} className="text-xl font-bold">
                Sign out
              </button>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex gap-x-4 items-center md:hidden">
            <div className="flex items-center gap-3">
              {/* <div className="flex items-center gap-5">
                <span className="text-[12px] font-bold font-openSans text-gray-400">
                  USD
                </span>
                <Image src="/img/usa-flag.png" alt="" width="16" height="16" />
                <div className="text-lg text-gray-500">
                  <FaRegBell />
                </div>
              </div> */}
              <ThemeButton />
              <div className="border-r h-[32px] w-[1px] mx-1 dark:border-gray-700" />
              <button className="text-blue-600 dark:text-white">
                <Link href="/profile">
                  <FaUserCircle size={20} />
                </Link>
              </button>
              <div className="border-r h-[32px] w-[1px] mx-1 dark:border-gray-700" />
              <button onClick={() => signOut()} className="text-base font-bold">
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Header = () => {
  const { data: session } = useSession();

  return <>{session ? User({ session }) : Guest()}</>;
};
