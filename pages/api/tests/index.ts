import testConnect from '../../../lib/testsConnect';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  deleteTests,
  getTests,
  postTests,
  putTests,
} from '../../../lib/testsController';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  testConnect().catch(() =>
    res.status(405).json({ error: 'Error in the connection' })
  );
  const { method } = req;

  switch (method) {
    case 'GET':
      getTests(req, res);
      break;
    case 'POST':
      postTests(req, res);
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
}
