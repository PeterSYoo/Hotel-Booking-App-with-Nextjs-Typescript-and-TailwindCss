import { useFormik } from 'formik';
import registerValidate from '../../lib/registerValidate';

const SignUp = () => {
  const onSubmit = async (values: any) => {
    console.log('test');
  };

  // formik hook
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      cpassword: '',
    },
    validate: registerValidate,
    onSubmit,
  });

  return (
    <div className="bg-gray-400 h-screen font-dmSans pt-10">
      <section className="max-w-375 mx-auto md:max-w-1140">
        <div className="w-[324px] bg-white rounded-2xl px-[30px] py-[30px] md:w-[448px] md:px-[40px]">
          <div className="text-right -mt-10 -mr-10 md:-mr-14">
            <button
              type="button"
              className="bg-white rounded-3xl p-1 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 drop-shadow"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-[27px] w-[27px]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <h1 className="text-center text-[24px] font-bold">Let&apos;s Go</h1>
          {/* Form */}
          <form onSubmit={formik.handleSubmit}>
            <div className="flex justify-between mt-[20px] gap-[12px]">
              <div className="bg-blue-600 text-center text-[12px] text-white py-[8px] rounded-md w-full md:text-[20px]">
                Sign Up with Google
              </div>
              {/* <div className="w-[68px] h-[34px] bg-gray-600 rounded-md md:w-[98px] md:h-[48px]"></div> */}
            </div>
            <div className="flex mx-auto justify-center items-center">
              <div className="border-b w-[69px] h-[1px] mt-[22px]"></div>
              <p className="text-[10px] mt-[14px] mx-3 text-gray-400 md:text-[14px]">
                or continue with
              </p>
              <div className="border-b w-[69px] h-[1px] mt-[22px]"></div>
            </div>
            <div className="mt-[14px]">
              <div className="flex justify-between gap-[14px] w-full">
                <div className="w-full">
                  <div className="text-[10px] text-gray-600 md:text-[14px]">
                    First Name
                  </div>
                  <input
                    type="text"
                    placeholder="First name"
                    className={`${
                      formik.errors.firstName && formik.touched.firstName
                        ? 'border-red-500 border bg-gray-200 text-[10px] rounded-md py-[10px] pl-[10px] w-full mt-[6px] md:text-[14px] md:py-[13px]'
                        : 'bg-gray-200 text-[10px] rounded-md py-[10px] pl-[10px] w-full mt-[6px] md:text-[14px] md:py-[13px]'
                    }`}
                    {...formik.getFieldProps('firstName')}
                  />
                  {formik.errors.firstName && formik.touched.firstName ? (
                    <span className="text-red-500 text-[10px] md:text-[12px]">
                      {formik.errors.firstName}
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="w-full">
                  <div className="text-[10px] text-gray-600 md:text-[14px]">
                    Last Name
                  </div>
                  <input
                    type="text"
                    placeholder="Last name"
                    className={`${
                      formik.errors.lastName && formik.touched.lastName
                        ? 'border-red-500 border bg-gray-200 text-[10px] rounded-md py-[10px] pl-[10px] w-full mt-[6px] md:text-[14px] md:py-[13px]'
                        : 'bg-gray-200 text-[10px] rounded-md py-[10px] pl-[10px] w-full mt-[6px] md:text-[14px] md:py-[13px]'
                    }`}
                    {...formik.getFieldProps('lastName')}
                  />
                  {formik.errors.lastName && formik.touched.lastName ? (
                    <span className="text-red-500 text-[10px] md:text-[12px]">
                      {formik.errors.lastName}
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="text-[10px] text-gray-600 mt-[16px] md:text-[14px]">
                Email address
              </div>
              <input
                type="text"
                placeholder="Enter your email"
                className={`${
                  formik.errors.email && formik.touched.email
                    ? 'border-red-500 border bg-gray-200 text-[10px] rounded-md py-[10px] pl-[10px] w-full mt-[6px] md:text-[14px] md:py-[13px]'
                    : 'bg-gray-200 text-[10px] rounded-md py-[10px] pl-[10px] w-full mt-[6px] md:text-[14px] md:py-[13px]'
                }`}
                {...formik.getFieldProps('email')}
              />
              {formik.errors.email && formik.touched.email ? (
                <span className="text-red-500 text-[10px] md:text-[12px]">
                  {formik.errors.email}
                </span>
              ) : (
                <></>
              )}
              <div className="text-[10px] text-gray-600 mt-[14px] md:text-[14px]">
                Password
              </div>
              <input
                type="text"
                placeholder="Enter your password"
                className={`${
                  formik.errors.password && formik.touched.password
                    ? 'border-red-500 border bg-gray-200 text-[10px] rounded-md py-[10px] pl-[10px] w-full mt-[6px] md:text-[14px] md:py-[13px]'
                    : 'bg-gray-200 text-[10px] rounded-md py-[10px] pl-[10px] w-full mt-[6px] md:text-[14px] md:py-[13px]'
                }`}
                {...formik.getFieldProps('password')}
              />
              {formik.errors.password && formik.touched.password ? (
                <span className="text-red-500 text-[10px] md:text-[12px]">
                  {formik.errors.password}
                </span>
              ) : (
                <></>
              )}
              <div className="text-[10px] text-gray-600 mt-[14px] md:text-[14px]">
                Confirm Password
              </div>
              <input
                type="text"
                placeholder="Confirm your password"
                className={`${
                  formik.errors.cpassword && formik.touched.cpassword
                    ? 'border-red-500 border bg-gray-200 text-[10px] rounded-md py-[10px] pl-[10px] w-full mt-[6px] md:text-[14px] md:py-[13px]'
                    : 'bg-gray-200 text-[10px] rounded-md py-[10px] pl-[10px] w-full mt-[6px] md:text-[14px] md:py-[13px]'
                }`}
                {...formik.getFieldProps('cpassword')}
              />
              {formik.errors.cpassword && formik.touched.cpassword ? (
                <span className="text-red-500 text-[10px] md:text-[12px]">
                  {formik.errors.cpassword}
                </span>
              ) : (
                <></>
              )}
              <div className="text-[10px] text-gray-600 mt-[12px] text-right md:text-[14px]">
                Forgot your password?
              </div>
              <div className="flex mt-[16px] items-start">
                <input type="checkbox" className="mt-1" />
                <p className="ml-2 text-[10px] w-3/4 md:text-[14px]">
                  I’ve read and accepted Terms of Service and Privacy Policy
                </p>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-center text-white py-[8px] rounded-md mt-[15px] w-full md:text-[20px]"
              >
                Sign Up
              </button>
              <div className="text-center text-[10px] mt-[20px] text-gray-600 md:text-[14px]">
                Don&apos;t have an account? Sign up
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
