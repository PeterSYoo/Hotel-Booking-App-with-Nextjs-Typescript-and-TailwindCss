import Image from 'next/image';
import Link from 'next/link';
import { getSession, useSession, signOut } from 'next-auth/react';

const handleSignOut = () => {
  signOut();
};

const Guest = () => {
  return (
    <div className="flex py-5 px-10 justify-between items-center max-w-1440 mx-auto bg-white font-dmSans">
      {/* Desktop */}
      <div className="hidden items-center md:flex">
        <Image src="/img/logo.png" alt="" width="40" height="38" />
        <span className="text-xl font-openSans font-bold pl-2.5">
          TripGuide
        </span>
        <span className="text-xl font-openSans font-bold pl-2.5">Unknown</span>
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
  return (
    <div className="flex py-5 px-10 justify-between items-center max-w-1440 mx-auto bg-white font-dmSans">
      {/* Desktop */}
      <div className="hidden items-center md:flex">
        <Image src="/img/logo.png" alt="" width="40" height="38" />
        <span className="text-xl font-openSans font-bold pl-2.5">
          TripGuide
        </span>
        <span className="text-xl font-openSans font-bold pl-2.5">
          {session.user.name}
        </span>
        <span className="text-xl font-openSans font-bold pl-2.5">
          {session.user.email}
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
        <div className="text-xl font-bold">Login</div>
        <button
          onClick={handleSignOut}
          className="text-xl text-white bg-red-500 px-5 py-3 rounded-xl"
        >
          signout
        </button>
      </div>
      {/* Mobile */}
      <div className="flex gap-x-4 items-center md:hidden">
        <div className="text-base">Login</div>
        <button
          onClick={handleSignOut}
          className="text-base text-white bg-red-500 px-2 py-1 rounded-xl"
        >
          signout
        </button>
      </div>
    </div>
  );
};

const Header = () => {
  const { data: session } = useSession();

  return <>{session ? User({ session }) : Guest()}</>;
};

export default Header;
