import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { getTest } from '../../../lib/testsHelper';

const TestId = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading, isError } = useQuery(
    ['test', { id }],
    getTest
  );

  return (
    <>
      <div className=""></div>
    </>
  );
};

export default TestId;
