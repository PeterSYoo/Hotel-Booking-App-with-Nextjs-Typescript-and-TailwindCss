import usersConnect from '../../../lib/usersConnect';
import { NextApiRequest, NextApiResponse } from 'next';
import { getUser, putUser } from '../../../lib/usersController';

export default async function userId(
  req: NextApiRequest,
  res: NextApiResponse
) {
  usersConnect().catch(() => {
    res.status(405).json({ error: 'Error in connecting to users databse' });
  });

  const { method } = req;

  switch (method) {
    case 'GET':
      getUser(req, res);
      break;
    case 'PUT':
      putUser(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
