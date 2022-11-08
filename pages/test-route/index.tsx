import {
  dehydrate,
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { useReducer, useState } from 'react';
import { TestForm } from '../../Components/test-route/TestForm.components';

import { deleteTest, getTests } from '../../lib/testsHelper';

const formReducer = (state: any, event: any) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const TestRoute = () => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useReducer(formReducer, {});
  // Fetches the data stored in the cache so no loading state.
  const { isError, data, error } = useQuery(['tests'], getTests);

  if (isError) return <div className="mx-10 mt-10">Got an error..</div>;

  const handleDelete = (testId: any) => {
    deleteTest(testId);
    queryClient.refetchQueries(['tests']);
  };

  return (
    <>
      <div className="mx-20 mt-10">
        {data.map((test: any) => (
          <div key={test._id}>
            <div className="flex flex-col pb-3 mb-3 border-b border-gray-600">
              <div className="grid grid-cols-12 items-center">
                <div className="col-start-1 col-span-6">
                  <div>
                    <span className="text-md text-gray-500">
                      First Name:&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    <span className="">{test.firstName}</span>
                  </div>
                  <div>
                    <span className="text-md text-gray-500">
                      Last Name:&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    <span className="">{test.lastName}</span>
                  </div>
                </div>
                <div className="col-start-7 col-span-6">
                  <div className="flex justify-end gap-10">
                    <button>Edit</button>
                    <button onClick={(e: any) => handleDelete(test._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TestRoute;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  // We prefetch the data and store it in the cache
  await queryClient.prefetchQuery(['tests'], getTests);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
