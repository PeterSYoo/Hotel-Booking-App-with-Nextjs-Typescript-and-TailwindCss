export const ProOffers = () => {
  return (
    <>
      {/* Desktop */}
      {/* Get our pro offers */}
      <section className="hidden mx-auto md:mx-[135px] md:flex md:gap-[30px]">
        {/* Card */}
        <section className="flex justify-between h-[248px] rounded-2xl mb-[20px] w-[1170px] bg-blue-600 py-[62px] px-[90px] items-center md:-mb-[75px]">
          <div className="">
            <h1 className="text-[44px] text-white font-bold pb-[12px] leading-10">
              Get our pro offers
            </h1>
            <p className="text-white mt-[7px] text-[16px] w-[234px]">
              Subscribe to stay up to date with our latest offers!
            </p>
          </div>
          <div className="">
            <form className="bg-white w-[288px] h-[69px] rounded-md py-[9px] px-[9px]">
              <div className="flex justify-between item-center -mt-[1px] pl-[9px]">
                <input
                  type="text"
                  className="w-[255px]"
                  placeholder="Type your email here"
                />
                <input
                  className="bg-gray-700 w-[130px] h-[55px] text-white text-[16px] font-bold rounded-md flex items-center justify-center"
                  type="submit"
                  value="Subscribe"
                />
              </div>
            </form>
          </div>
        </section>
      </section>

      {/* Mobile */}
      {/* Get our pro offers */}
      <section className="max-w-[375px] mx-auto -mb-12 mt-[30px] md:hidden">
        {/* Card */}
        <section className="flex flex-col justify-between w-[335px] h-[174px] rounded-2xl mb-[20px] mx-auto bg-[url('/img/offers-bg.png')] bg-blue-600 px-[20px] py-[14px]">
          <div className="">
            <h1 className="text-[20px] text-white font-bold pb-[12px]">
              Get our pro offers
            </h1>
            <div className="">
              <p className="text-white -mt-[7px] text-[12px] w-[234px]">
                Subscribe to stay up to date with our latest offers!
              </p>
            </div>
            <div className="mt-[14px]">
              <form className="bg-white w-[295px] h-[60px] rounded-md p-[9px]">
                <div className="flex justify-between item-center -mt-[1px]">
                  <input
                    type="text"
                    className="w-[155px]"
                    placeholder="Enter email..."
                  />
                  <input
                    className="bg-gray-700 w-[120px] h-[44px] text-white text-[16px] font-bold rounded-md flex items-center justify-center"
                    type="submit"
                    value="Subscribe"
                  />
                </div>
              </form>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
