import Image from 'next/image';

const Header = () => {
  return (
    <div className="flex py-5 px-10 justify-between items-center">
      <div className="">
        <Image src="/img/logo.png" alt="" width="148" height="38" />
      </div>
      <div className="flex gap-x-12 items-center">
        <div className="text-xl">Login</div>
        <div className="text-xl text-white bg-blueBtn px-5 py-3 rounded-xl">
          signup
        </div>
      </div>
    </div>
  );
};

export default Header;
