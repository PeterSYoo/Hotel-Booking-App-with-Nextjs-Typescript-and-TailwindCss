// @ts-ignore
import destinationsConnect from '../../../../lib/destinationsConnect';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  // @ts-ignore
  const client = await destinationsConnect;
  const db = client.db('destinationDB');

  if (method === 'GET') {
    try {
      const allDestinations = await db
        .collection('jerusalem')
        .find({})
        .toArray();
      res.json({ status: 200, data: allDestinations });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
      console.log(error);
    }
  }
}
