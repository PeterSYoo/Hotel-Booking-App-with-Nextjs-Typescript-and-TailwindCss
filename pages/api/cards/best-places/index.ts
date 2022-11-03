// @ts-ignore
import cardsConnect from '../../../../lib/cardsConnect';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  // @ts-ignore
  const client = await cardsConnect;
  const db = client.db('cardDB');

  if (method === 'GET') {
    try {
      const allCards = await db.collection('bestplaces').find({}).toArray();
      res.json({ status: 200, data: allCards });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
      console.log(error);
    }
  }
}
