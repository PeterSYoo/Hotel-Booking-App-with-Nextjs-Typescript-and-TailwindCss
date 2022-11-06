import { unstable_getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useReducer, useState } from 'react';
import { authOptions } from '../api/auth/[...nextauth]';
import { FiCheck } from 'react-icons/fi';
import { BiEditAlt } from 'react-icons/bi';
import { BsHouseDoor, BsGenderMale } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { MdOutlineCake } from 'react-icons/md';
import { FiUser } from 'react-icons/fi';
import { getUser, getUsers, updateUser } from '../../lib/usersHelper';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import moment from 'moment';

/* Create an object inside our useReducer hook. Our key is the name prop in 
our input, and value is the value prop in input. */
const formReducer = (state: any, event: any) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const ProfilePage = () => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useReducer(formReducer, {});
  const { data: session }: any = useSession();
  const router = useRouter();

  const { data, isLoading, isError, error } = useQuery(['user'], () =>
    getUser(session.id)
  );

  const UpdateMutation = useMutation(
    (newData: any) => updateUser(session.id, newData),
    {
      onSuccess: async (data: any) => {
        queryClient.prefetchQuery(['user'], getUsers);
      },
    }
  );

  useEffect(() => {
    if (!session) {
      router.push('/');
    }
  }, []);

  if (isLoading) return '';

  if (isError) {
    // @ts-ignore
    return <div>Error {error.message}</div>;
  }

  const {
    firstName,
    lastName,
    cityState,
    streetAddress,
    email,
    dateOfBirth,
    gender,
  } = data;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let updated = Object.assign({}, data, formData);
    UpdateMutation.mutate(updated);
    router.reload();
  };

  if (session) {
    // console.log(session);
    // console.log(data);

    return (
      <>
        <div className="max-w-[1165px] px-5 mx-auto mt-5 md:mt-20 mb-20 md:mb-[200px]">
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
                <div className="flex flex-col pb-6">
                  <div className="max-w-[170px] max-h-[170px] mx-auto mt-5">
                    {data?.image ? (
                      <Image
                        src={data?.image}
                        width={170}
                        height={170}
                        alt={'profile image'}
                      />
                    ) : (
                      <Image
                        src="https://via.placeholder.com/170"
                        width={170}
                        height={170}
                        alt={'profile image'}
                      />
                    )}
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
                      {data?.cityState}
                    </span>
                  </div>
                  <div className="flex justify-between mx-5 mt-4">
                    <span className="text-[14px]">Profile last updated</span>
                    <span className="text-[14px] text-gray-500">
                      {moment(data?.updatedAt).format('YYYY-MM-DD')}
                    </span>
                  </div>
                </div>
              </aside>
              {/* Col 2 */}
              <aside className="col-start-5 col-span-8">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col md:mx-9">
                    <h1 className="hidden md:flex text-[48px] font-semibold">
                      My Profile
                    </h1>
                    <div className="border-b mt-5 border-gray-300 hidden md:flex dark:border-[#3B3E44] " />
                    <div className="flex mt-8 md:mt-3">
                      <h1 className="text-[20px] md:text">
                        {data?.firstName ? (
                          <span>
                            Welcome {data?.firstName} {data?.lastName}!
                          </span>
                        ) : (
                          ''
                        )}
                      </h1>
                    </div>
                    {/* First Name | Last Name */}
                    <div className="flex flex-col md:flex-row justify-between mt-6 md:mt-4 gap-4 md:gap-8">
                      <div className="flex flex-col md:w-1/2 w-full">
                        <span className="text-gray-500 font-bold">
                          First Name
                        </span>
                        <div className="border border-gray-300 rounded-md px-2 flex items-center gap-2 py-2 mt-2 dark:border-[#3B3E44]">
                          <FiUser />
                          <input
                            onChange={setFormData}
                            className="bg-transparent focus:outline-none text-[14px] w-full"
                            type="text"
                            id="firstName"
                            name="firstName"
                            defaultValue={data?.firstName}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col w-full md:w-1/2">
                        <span className="text-gray-500 font-bold">
                          Last Name
                        </span>
                        <div className="border border-gray-300 rounded-md px-2 flex items-center gap-2 py-2 mt-2 dark:border-[#3B3E44]">
                          <FiUser />
                          <input
                            onChange={setFormData}
                            id="lastName"
                            name="lastName"
                            className="bg-transparent focus:outline-none text-[14px] w-full"
                            type="text"
                            defaultValue={data?.lastName}
                          />
                        </div>
                      </div>
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
                            onChange={setFormData}
                            className="bg-transparent focus:outline-none text-[14px] w-full"
                            type="text"
                            id="cityState"
                            name="cityState"
                            defaultValue={data?.cityState}
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
                            onChange={setFormData}
                            id="streetAddress"
                            name="streetAddress"
                            className="bg-transparent focus:outline-none text-[14px] w-full"
                            type="text"
                            defaultValue={data?.streetAddress}
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
                            onChange={setFormData}
                            id="email"
                            name="email"
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
                            onChange={setFormData}
                            id="gender"
                            name="gender"
                            className="bg-transparent focus:outline-none text-[14px] w-full"
                            type="text"
                            defaultValue={data?.gender}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end mt-5">
                      <button className="border-2 border-gray-300 rounded-3xl text-[10px] md:text-[14px] px-3 py-1 dark:border-[#3B3E44]">
                        Edit your Profile
                      </button>
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
