import { unstable_getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import { authOptions } from '../api/auth/[...nextauth]';

const ProfilePage = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <>
        <h1>Not Logged in</h1>
      </>
    );
  }

  if (session) {
    return (
      <>
        <h1>Logged in</h1>
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
