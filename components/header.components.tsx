import Image from 'next/image';

const Header = () => {
  return (
    <div className="flex py-5 px-10 justify-between items-center max-w-1440 mx-auto bg-white font-dmSans">
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
        <div className="text-xl font-bold">Login</div>
        <div className="text-xl text-white bg-blueBtn px-5 py-3 rounded-xl">
          signup
        </div>
      </div>
      {/* Mobile */}
      <div className="flex gap-x-4 items-center md:hidden">
        <div className="text-base">Login</div>
        <div className="text-base text-white bg-blueBtn px-2 py-1 rounded-xl">
          signup
        </div>
      </div>
    </div>
  );
};

export default Header;
