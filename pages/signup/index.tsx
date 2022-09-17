import React from 'react';

const SignUp = () => {
  return (
    <div className="bg-gray-400 h-screen font-dmSans pt-10">
      <section className="max-w-375 mx-auto md:max-w-1140">
        <div className="w-[324px] bg-white rounded-2xl px-[30px] py-[30px] md:w-[448px] md:px-[40px]">
          <div className="text-right -mt-10 -mr-10 md:-mr-12">
            <button
              type="button"
              className="bg-white rounded-3xl p-1 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 drop-shadow"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-[17px] w-[17px]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <h1 className="text-center text-[24px] font-bold">Let&apos;s Go</h1>
          <div className="flex justify-between mt-[20px] gap-[12px]">
            <div className="bg-blue-600 text-center text-[12px] text-white py-[8px] rounded-md w-full md:text-[20px]">
              Signup with Google
            </div>
            <div className="w-[68px] h-[34px] bg-gray-600 rounded-md md:w-[48px] md:h-[48px]"></div>
          </div>
          <div className="flex mx-auto justify-center items-center">
            <div className="border-b w-[69px] h-[1px] mt-[22px]"></div>
            <p className="text-[10px] mt-[14px] mx-3 text-gray-400 md:text-[14px]">
              or continue with
            </p>
            <div className="border-b w-[69px] h-[1px] mt-[22px]"></div>
          </div>
          <div className="mt-[12px]">
            <form>
              <div className="flex justify-between gap-[14px] w-full">
                <div className="w-full">
                  <div className="text-[10px] text-gray-600">First Name</div>
                  <input
                    type="text"
                    placeholder="First name"
                    className="bg-gray-200 text-[10px] rounded-md py-[10px] pl-[10px] w-full mt-[6px] md:text-[14px] md:py-[13px]"
                  />
                </div>
                <div className="w-full">
                  <div className="text-[10px] text-gray-600">Last Name</div>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="bg-gray-200 text-[10px] rounded-md py-[10px] pl-[10px] w-full mt-[6px] md:text-[14px] md:py-[13px]"
                  />
                </div>
              </div>
              <div className="text-[10px] text-gray-600 mt-[16px] md:text-[14px]">
                Email address
              </div>
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-gray-200 text-[10px] rounded-md py-[10px] pl-[10px] w-full mt-[6px] md:text-[14px] md:py-[13px]"
              />
              <div className="text-[10px] text-gray-600 mt-[14px] md:text-[14px]">
                Password
              </div>
              <input
                type="text"
                placeholder="Enter your password"
                className="bg-gray-200 text-[10px] rounded-md py-[10px] pl-[10px] w-full mt-[6px] md:text-[14px] md:py-[13px]"
              />
              <div className="text-[10px] text-gray-600 mt-[12px] text-right md:text-[14px]">
                Forgot your password?
              </div>
              <div className="flex mt-[16px] items-start">
                <input type="checkbox" className="mt-1" />
                <p className="ml-2 text-[10px] w-3/4">
                  I’ve read and accepted Terms of Service and Privacy Policy
                </p>
              </div>
              <input
                type="submit"
                value="Signup"
                className="bg-blue-600 text-center text-white py-[8px] rounded-md mt-[15px] w-full md:text-[20px]"
              />
              <div className="text-center text-[10px] mt-[20px] text-gray-600 md:text-[14px]">
                Don&apos;t have an account? Sign up
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
