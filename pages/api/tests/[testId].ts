import { NextApiRequest, NextApiResponse } from 'next';
import testConnect from '../../../lib/testsConnect';
import { deleteTests, getTest, putTests } from '../../../lib/testsController';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  testConnect().catch(() =>
    res.status(405).json({ error: 'Error in the connection' })
  );
  const { method } = req;

  switch (method) {
    case 'GET':
      getTest(req, res);
      break;
    case 'PUT':
      putTests(req, res);
      break;
    case 'DELETE':
      deleteTests(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
};
