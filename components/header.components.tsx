import Image from 'next/image';
import Link from 'next/link';
import { getSession, useSession, signOut } from 'next-auth/react';
import { FaRegBell } from 'react-icons/fa';

const handleSignOut = () => {
  signOut();
};

const Guest = () => {
  return (
    <div className="flex py-[25px] px-10 justify-between items-center max-w-1440 mx-auto bg-white font-dmSans">
      {/* Desktop */}
      <div className="hidden items-center md:flex">
        <Image src="/img/logo.png" alt="" width="40" height="38" />
        <span className="text-xl font-openSans font-bold pl-2.5">
          TripGuide
        </span>
      </div>
      {/* Mobile */}
      <div className="flex items-center md:hidden">
        <Image src="/img/logo.png" alt="" width="28" height="28" />
        <span className="text-xs font-openSans font-bold pl-2.5">
          TripGuide
        </span>
      </div>
      {/* Desktop */}
      <div className="hidden gap-x-12 items-center md:flex">
        <div className="text-xl font-bold">
          <Link href={'/login'}>
            <a>Login</a>
          </Link>
        </div>
        <button className="text-xl text-white bg-blueBtn px-5 py-3 rounded-xl">
          <Link href={'/signup'}>
            <a>signup</a>
          </Link>
        </button>
      </div>
      {/* Mobile */}
      <div className="flex gap-x-4 items-center md:hidden">
        <div className="text-base">Login</div>
        <button className="text-base text-white bg-blueBtn px-2 py-1 rounded-xl">
          <Link href={'/signup'}>
            <a>signup</a>
          </Link>
        </button>
      </div>
    </div>
  );
};

// Authorize User
const User = ({ session }: any) => {
  const myLoader = ({ src }: any) => {
    return session.user.image;
  };

  return (
    <div className="flex py-[25px] px-10 justify-between items-center max-w-1440 mx-auto bg-white font-dmSans">
      {/* Desktop */}
      <div className="hidden items-center md:flex">
        <Image src="/img/logo.png" alt="" width="40" height="38" />
        <span className="text-xl font-openSans font-bold pl-2.5">
          TripGuide
        </span>
      </div>
      {/* Mobile */}
      <div className="flex items-center md:hidden">
        <Image src="/img/logo.png" alt="" width="28" height="28" />
        <span className="text-xs font-openSans font-bold pl-2.5">
          TripGuide
        </span>
      </div>
      {/* Desktop */}
      <div className="hidden gap-x-12 items-center md:flex">
        <div className="flex items-center gap-3">
          <button
            onClick={handleSignOut}
            className="text-md text-white bg-red-500 px-2 py-1 rounded-xl"
          >
            signout
          </button>
          <div className="flex items-center gap-5">
            <span className="text-[14px] font-bold font-openSans text-gray-400">
              USD
            </span>
            <Image src="/img/usa-flag.png" alt="" width="20" height="20" />
            <div className="text-xl text-gray-500">
              <FaRegBell />
            </div>
          </div>
          <div className="border-r h-[32px] w-[1px] mx-1"></div>
          <Image
            loader={myLoader}
            src={session.user.image}
            alt=""
            width="32"
            height="32"
            className="rounded-3xl"
          />
          <span className="text-[14px] font-openSans">{session.user.name}</span>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex gap-x-4 items-center md:hidden">
        <div className="flex items-center gap-3">
          <button
            onClick={handleSignOut}
            className="text-md text-white bg-red-500 px-2 py-1 rounded-xl"
          >
            signout
          </button>
          <div className="flex items-center gap-5">
            <span className="text-[12px] font-bold font-openSans text-gray-400">
              USD
            </span>
            <Image src="/img/usa-flag.png" alt="" width="16" height="16" />
            <div className="text-lg text-gray-500">
              <FaRegBell />
            </div>
          </div>
          <div className="border-r h-[32px] w-[1px] mx-1"></div>
          <Image
            loader={myLoader}
            src={session.user.image}
            alt=""
            width="28"
            height="28"
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const { data: session } = useSession();

  return <>{session ? User({ session }) : Guest()}</>;
};

export default Header;
