import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { FaRegBell } from "react-icons/fa";
import Login from "../pages/login";
import SignUp from "../pages/signup";
import useLoginModal from "../hooks/useLoginModal";
import useSignupModal from "../hooks/useSignupModal";
import Button from "./button.components";

// Guest
const Guest = () => {
  const { openLogin, setOpenLogin } = useLoginModal();
  const { openSignup, setOpenSignup } = useSignupModal();
  return (
    <>
      <Login open={openLogin} onClose={() => setOpenLogin(false)} />
      <SignUp open={openSignup} onClose={() => setOpenSignup(false)} />
      <div className="flex justify-between py-[25px] px-10 bg-white dark:bg-[#222529] font-dmSans">
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
            <button onClick={() => setOpenLogin(true)}>Login</button>
          </div>
          <Button
            onClick={() => setOpenSignup(true)}
          >
            signup
          </Button>
        </div>
        {/* Mobile */}
        <div className="flex gap-x-4 items-center md:hidden">
          <div className="text-base">
            <button onClick={() => setOpenLogin(true)}>Login</button>
          </div>
          <button
            onClick={() => setOpenSignup(true)}
            className="text-base text-white bg-blueBtn px-2 py-1 rounded-xl"
          >
            signup
          </button>
        </div>
      </div>
    </>
  );
};

// Authorize User
const User = ({ session }: any) => {
  const { openLogin, setOpenLogin } = useLoginModal();
  const { openSignup, setOpenSignup } = useSignupModal();
  return (
    <>
      <div className="flex justify-between py-[25px] px-10 bg-white dark:bg-[#222529] font-dmSans">
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
              onClick={() => signOut()}
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
            <span className="text-[14px] font-openSans">
              {session.user.name}
            </span>
          </div>
        </div>
        {/* Mobile */}
        <div className="flex gap-x-4 items-center md:hidden">
          <div className="flex items-center gap-3">
            <button
              onClick={() => signOut()}
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
          </div>
        </div>
      </div>
    </>
  );
};

const Header = () => {
  const { data: session } = useSession();

  return <>{session ? User({ session }) : Guest()}</>;
};

export default Header;
