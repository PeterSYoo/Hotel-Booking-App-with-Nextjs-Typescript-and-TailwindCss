const Login = () => {
  return (
    <div className="bg-gray-400 h-screen font-dmSans pt-10">
      {/* Mobile */}

      <section className="max-w-375 mx-auto">
        <div className="w-[324px] bg-white rounded-2xl px-[30px] py-[30px]">
          <div className="text-right -mt-10 -mr-10">
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
          <h1 className="text-center text-[30px] font-bold">Welcome Back!</h1>
          <div className="flex justify-between mt-[20px]">
            <div className="w-[221px] h-[34px] bg-blue-500 text-center text-[12px] py-2 text-white rounded-md">
              Sign in with Google
            </div>
            <div className="w-[34px] h-[34px] bg-gray-600 rounded-md"></div>
          </div>
          <div className="flex mx-auto justify-center items-center">
            <div className="border-b w-[69px] h-[1px] mt-[22px]"></div>
            <p className="text-[10px] mt-[22px] mx-3 text-gray-400">
              or continue with
            </p>
            <div className="border-b w-[69px] h-[1px] mt-[22px]"></div>
          </div>
          <div className="mt-[12px]">
            <form>
              <div className="text-[10px] text-gray-600">Email address</div>
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-gray-200 text-[10px] rounded-md py-[10px] pl-[10px] w-full mt-[6px]"
              />
              <div className="text-[10px] text-gray-600 mt-[14px]">
                Password
              </div>
              <input
                type="text"
                placeholder="Enter your password"
                className="bg-gray-200 text-[10px] rounded-md py-[10px] pl-[10px] w-full mt-[6px]"
              />
              <div className="text-[10px] text-gray-600 mt-[12px] text-right">
                Forgot your password?
              </div>
              <input
                type="submit"
                value="Sign in"
                className="bg-blue-600 text-center text-white py-[8px] rounded-md mt-[15px] w-full"
              />
              <div className="text-center text-[10px] mt-[20px]">
                Don&apos;t have an account? Sign up
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
