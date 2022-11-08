import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { TestForm } from '../../../components/test-route/testForm.components';
import { addTest } from '../../../lib/testsHelper';

const CreateTest = () => {
  const router = useRouter();
  const { mutateAsync, isLoading } = useMutation(addTest);

  const onFormSubmit = async (data: any) => {
    await mutateAsync(data);
    router.push('/');
  };

  return (
    <>
      {/* Add form */}
      <div className="flex flex-col mb-10 px-6 py-4 bg-gray-700 rounded-lg w-3/4 mx-auto border-b-2 border-gray-600"></div>
    </>
  );
};

export default CreateTest;
