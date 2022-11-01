import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useReducer } from 'react';
import { addTest, getTests } from '../../lib/testsHelper';

export const TestForm = ({ formData, setFormData }: any) => {
  const queryClient = useQueryClient();
  const addMutuation = useMutation(addTest, {
    onSuccess: () => {
      queryClient.prefetchQuery(['tests'], getTests);
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (Object.keys(formData).length === 0) return console.log('No form data');
    let { firstName, lastName } = formData;

    const model = {
      firstName: `${firstName}`,
      lastName: `${lastName}`,
    };

    addMutuation.mutate(model);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex mb-2">
          <span className="w-1/5">First Name:</span>
          <input
            type="text"
            onChange={setFormData}
            className="text-black rounded-sm w-full pl-2 focus:outline-none"
            placeholder="John"
            name="firstName"
          />
        </div>
        <div className="flex">
          <span className="w-1/5">Last Name:</span>
          <input
            type="text"
            onChange={setFormData}
            className="text-black rounded-sm w-full pl-2 focus:outline-none"
            placeholder="Doe"
            name="lastName"
          />
        </div>
        <div className="flex mt-4 justify-end">
          <button className="p-2 bg-blue-600 rounded-lg">Add Test</button>
        </div>
      </form>
    </>
  );
};
