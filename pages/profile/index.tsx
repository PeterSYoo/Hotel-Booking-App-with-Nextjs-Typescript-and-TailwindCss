import { unstable_getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { authOptions } from '../api/auth/[...nextauth]';
import { FiCheck } from 'react-icons/fi';
import { BiEditAlt } from 'react-icons/bi';
import { BsHouseDoor, BsGenderMale } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { MdOutlineCake } from 'react-icons/md';
import { getUser, updateUser } from '../../lib/usersHelper';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@tanstack/react-query';

const ProfilePage = () => {
  const { data: session }: any = useSession();
  const router = useRouter();

  if (session) {
    // const { mutateAsync, isLoading: isMutating } = useMutation(updateUser);
    const userId = session.id;
    const { isLoading, isError, data, error } = useQuery(['user'], () =>
      getUser(userId)
    );

    // const onFormSubmit = async (data: any) => {
    //   await mutateAsync({ ...data, id });
    //   router.push('/profile');
    // };

    // console.log(session);
    console.log(data);

    return (
      <>
        <div className="max-w-[1165px] px-5 mx-auto md:mt-20 mb-[200px]">
          <div className="flex flex-col">
            {/* Nav */}
            <nav className="md:flex gap-2 items-center hidden">
              <span className="text-sm">Home</span>
              <span className="text-sm">&gt;</span>
              <span className="text-sm">Profile</span>
            </nav>
            {/* Grid Container */}
            <div className="flex flex-col md:grid grid-cols-12 mt-10">
              {/* Col 1 */}
              <aside className="col-start-1 col-span-4 border-2 bg-white rounded-lg dark:bg-[#222529] dark:border-[#3B3E44]">
                <div className="flex flex-col">
                  <div className="max-w-[170px] max-h-[170px] mx-auto mt-5">
                    <Image
                      src={data?.image}
                      width={170}
                      height={170}
                      alt={'profile image'}
                    />
                  </div>
                  <h1 className="mx-auto text-3xl mt-3 font-bold">
                    {data?.firstName} {data?.lastName}
                  </h1>
                  <div className="mx-auto bg-gray-100 rounded-3xl px-6 py-2 text-[14px] mt-4 flex items-center gap-2 dark:bg-[#3B3E44] dark:text-[#B1B5C4]">
                    <FiCheck />
                    <span className="text-gray-500 dark:text-[#B1B5C4]">
                      Identity verified
                    </span>
                  </div>
                  <div className="border-b mt-5 mx-5 border-gray-300 dark:border-[#3B3E44]" />
                  <div className="flex justify-between mx-5 mt-5">
                    <span className="text-[14px]">From</span>
                    <span className="text-[14px] text-gray-500">
                      United States
                    </span>
                  </div>
                  <div className="flex justify-between mx-5 mt-4">
                    <span className="text-[14px]">Member Since</span>
                    <span className="text-[14px] text-gray-500">
                      01.01.1991
                    </span>
                  </div>
                  <button className="bg-indigo-500 text-white rounded-3xl text-[14px] py-2 w-3/4 mx-auto flex justify-center items-center gap-3 mt-10 mb-6">
                    Edit My Data
                    <BiEditAlt />
                  </button>
                </div>
              </aside>
              {/* Col 2 */}
              <aside className="col-start-5 col-span-8">
                <form>
                  <div className="flex flex-col md:mx-9">
                    <h1 className="hidden md:flex text-[48px] font-semibold">
                      My Profile
                    </h1>
                    <div className="border-b mt-5 border-gray-300 hidden md:flex dark:border-[#3B3E44] " />
                    <div className="flex justify-between mt-5">
                      <h1 className="text-[20px] md:text">
                        Hi, I'm {data?.firstName} {data?.lastName}
                      </h1>
                      <button className="border-2 border-gray-300 rounded-3xl text-[10px] md:text-[14px] px-3 py-1 dark:border-[#3B3E44]">
                        Edit your Profile
                      </button>
                    </div>
                    {/* Lives in | Street Address */}
                    <div className="flex flex-col md:flex-row justify-between mt-4 gap-4 md:gap-8">
                      <div className="flex flex-col md:w-1/2 w-full">
                        <span className="text-gray-500 font-bold">
                          Lives in
                        </span>
                        <div className="border border-gray-300 rounded-md px-2 flex items-center gap-2 py-2 mt-2 dark:border-[#3B3E44]">
                          <BsHouseDoor />
                          <input
                            className="bg-transparent focus:outline-none text-[14px] w-full"
                            type="text"
                            name="..."
                          />
                        </div>
                      </div>
                      <div className="flex flex-col w-full md:w-1/2">
                        <span className="text-gray-500 font-bold">
                          Street Address
                        </span>
                        <div className="border border-gray-300 rounded-md px-2 flex items-center gap-2 py-2 mt-2 dark:border-[#3B3E44]">
                          <BsHouseDoor />
                          <input
                            className="bg-transparent focus:outline-none text-[14px] w-full"
                            type="text"
                            placeholder="..."
                          />
                        </div>
                      </div>
                    </div>
                    {/* Email Address */}
                    <div className="flex justify-between mt-4">
                      <div className="flex flex-col w-full">
                        <span className="text-gray-500 font-bold">
                          Email Address
                        </span>
                        <div className="border border-gray-300 rounded-md px-2 flex items-center gap-2 py-2 mt-2 dark:border-[#3B3E44]">
                          <AiOutlineMail />
                          <input
                            className="bg-transparent focus:outline-none text-[14px] w-full"
                            type="text"
                            defaultValue={data?.email}
                          />
                        </div>
                      </div>
                    </div>
                    {/* Date of Birth | Gender */}
                    <div className="flex flex-col md:flex-row justify-between mt-4 gap-8">
                      <div className="flex flex-col w-full md:w-1/2">
                        <span className="text-gray-500 font-bold">
                          Date of Birth
                        </span>
                        <div className="border border-gray-300 rounded-md px-2 flex items-center gap-2 py-2 mt-2 dark:border-[#3B3E44]">
                          <MdOutlineCake />
                          <input
                            className="bg-transparent focus:outline-none text-[14px] w-full"
                            type="text"
                            placeholder="..."
                          />
                        </div>
                      </div>
                      <div className="flex flex-col w-full md:w-1/2">
                        <span className="text-gray-500 font-bold">Gender</span>
                        <div className="border border-gray-300 rounded-md px-2 flex items-center gap-2 py-2 mt-2 dark:border-[#3B3E44]">
                          <BsGenderMale />
                          <input
                            className="bg-transparent focus:outline-none text-[14px] w-full"
                            type="text"
                            placeholder="..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </aside>
            </div>
          </div>
        </div>
      </>
    );
  }

  useEffect(() => {
    if (!session) {
      router.push('/');
    }
  }, [session]);
};

export default ProfilePage;

export const getServerSideProps = async (context: any) => {
  return {
    props: {
      session: await unstable_getServerSession(
        context.req,
        context.res,
        authOptions
      ),
    },
  };
};
