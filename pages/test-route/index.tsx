import { useQuery } from '@tanstack/react-query';
import { deleteTest, getTests } from '../../lib/testsHelper';

const Testing = () => {
  const { isLoading, isError, data, error } = useQuery(['tests'], getTests);

  if (isLoading) return <div className="mx-10 mt-10">Tests are loading..</div>;
  if (isError) return <div className="mx-10 mt-10">Got an error..</div>;

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
                    <button onClick={(e: any) => deleteTest(test._id)}>
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

export default Testing;
