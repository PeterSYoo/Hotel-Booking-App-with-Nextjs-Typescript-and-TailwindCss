import { useEffect, useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Formik, useFormik } from 'formik';
import { AiFillEye, AiOutlineGoogle, AiOutlineGithub } from 'react-icons/ai';
import loginValidate from '../../lib/loginValidate';

interface Modal {
  open: boolean;
  onClose: () => void;
}

const Login: React.FC<Modal> = ({ open, onClose }) => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const onSubmit = async (values: any) => {
    const status = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: '/',
    });

    // @ts-ignore
    if (status.ok) {
      // @ts-ignore
      router.push(status.url);
    }
  };

  // formik hook
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: loginValidate,
    onSubmit,
  });

  // Google handler function
  const handleGoogleSignin = async () => {
    signIn('google', {
      callbackUrl: process.env.NEXT_PUBLIC_NEXTAUTH_BASE_URL,
    });
  };

  // GitHub handler function
  const handleGithubSignin = async () => {
    signIn('github', {
      callbackUrl: process.env.NEXT_PUBLIC_NEXTAUTH_BASE_URL,
    });
  };

  if (!open) return null;

  return (
    <>
      <div className="font-dmSans fixed w-full h-full z-50 bg-gray-300 bg-opacity-80 flex items-center justify-center">
        <section
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="max-w-375"
        >
          <div className="w-[324px] bg-white dark:bg-gray-900 rounded-2xl px-[30px] py-[30px] md:w-[448px] md:px-[40px]">
            <div className="text-right -mt-10 -mr-10 md:-mr-14">
              <button
                type="button"
                onClick={onClose}
                className="bg-white dark:bg-gray-900 dark:border dark:border-gray-700 rounded-3xl p-1 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 drop-shadow"
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
            <h1 className="text-center text-[30px] font-bold">Login</h1>

            {/* Form */}
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col justify-between mt-[20px] gap-[12px]">
                {/* Google signin */}
                <button
                  type="button"
                  onClick={handleGoogleSignin}
                  className="bg-blue-600 text-center text-[12px] text-white py-[8px] rounded-md w-full md:text-[20px]"
                >
                  <div className="flex items-center justify-center gap-3">
                    <span className="">
                      <AiOutlineGoogle className="text-xl  md:text-3xl" />
                    </span>
                    Sign In with Google
                  </div>
                </button>
                {/* Github signin */}
                <button
                  type="button"
                  onClick={handleGithubSignin}
                  className="bg-blue-600 text-center text-[12px] text-white py-[8px] rounded-md w-full md:text-[20px]"
                >
                  <div className="flex items-center justify-center gap-3">
                    <span className="">
                      <AiOutlineGithub className="text-xl  md:text-3xl" />
                    </span>
                    Sign In with Github
                  </div>
                </button>
              </div>
              {/* <div className="flex mx-auto justify-center items-center">
                <div className="border-b w-[69px] h-[1px] mt-[22px]"></div>
                <p className="text-[10px] mt-[22px] mx-3 text-gray-400 md:text-[14px]">
                  or continue with
                </p>
                <div className="border-b w-[69px] h-[1px] mt-[22px]"></div>
              </div>
              <div className="mt-[12px]">
                <div className="text-[10px] text-gray-600 md:text-[14px]">
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
                <div className="flex justify-between">
                  <input
                    type={`${show ? 'text' : 'password'}`}
                    placeholder="Enter your password"
                    className={`${
                      formik.errors.password && formik.touched.password
                        ? 'border-red-500 border bg-gray-200 text-[10px] rounded-md py-[10px] pl-[10px] w-full mt-[6px] md:text-[14px] md:py-[13px]'
                        : 'bg-gray-200 text-[10px] rounded-md py-[10px] pl-[10px] w-full mt-[6px] md:text-[14px] md:py-[13px]'
                    }`}
                    {...formik.getFieldProps('password')}
                  />
                  <span
                    className="flex items-center ml-3 text-gray-600"
                    onClick={() => setShow(!show)}
                  >
                    <AiFillEye size={25} />
                  </span>
                </div>
                {formik.errors.password && formik.touched.password ? (
                  <span className="text-red-500 text-[10px] md:text-[12px]">
                    {formik.errors.password}
                  </span>
                ) : (
                  <></>
                )}
                <div className="text-[10px] text-gray-600 mt-[12px] text-right md:text-[14px]">
                  <Link href="/reset-password">Forgot your password?</Link>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-center text-white py-[8px] rounded-md mt-[15px] w-full md:text-[20px]"
                >
                  Sign In
                </button>
                <div className="text-center text-[10px] mt-[20px] text-gray-600 md:text-[14px]">
                  Don&apos;t have an account?&nbsp;
                  <Link href="/signup">Sign up</Link>
                </div>
              </div> */}
            </form>
            <div className="mt-5 grid grid-cols-12 px-1">
              <div className="col-start-1 col-span-1 pt-1">
                <span className="text-xs">*</span>
              </div>
              <div className="col-start-2 col-span-11 leading-snug">
                <span className="text-xs">
                  If you are using the same email address across different
                  providers, you must login with the original provider you 1st
                  logged in with. If not, you can login with any provider for
                  your 1st login.
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
