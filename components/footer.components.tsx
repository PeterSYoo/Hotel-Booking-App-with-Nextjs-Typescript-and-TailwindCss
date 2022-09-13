import Image from 'next/image';

const Footer = () => {
  return (
    <div className="flex justify-between px-48 pt-44 pb-32 bg-gray-100">
      <div className="w-64">
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
          <li className="text-2xl">Business</li>
          <li className="text-gray-400">Success</li>
          <li className="text-gray-400">About Locato</li>
          <li className="text-gray-400">Blog</li>
          <li className="text-gray-400">Information</li>
          <li className="text-gray-400">Travel Guide</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
