import Image from 'next/image';

const Header = () => {
  return (
    <div className="flex py-5 px-10 justify-between items-center max-w-1440 mx-auto">
      {/* Desktop */}
      <div className="hidden md:flex">
        <Image src="/img/logo.png" alt="" width="148" height="38" />
      </div>
      {/* Mobile */}
      <div className="flex md:hidden">
        <Image src="/img/logo.png" alt="" width="96" height="28" />
      </div>
      {/* Desktop */}
      <div className="hidden gap-x-12 items-center md:flex">
        <div className="text-xl">Login</div>
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
