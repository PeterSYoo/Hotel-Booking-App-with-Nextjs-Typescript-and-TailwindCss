import { NextApiRequest, NextApiResponse } from 'next';
import { useSession } from 'next-auth/react';
import Users from '../model/Users';

export const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { userId } = req.query;

    if (userId) {
      const user = await Users.findById(userId);
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(404).json({ error: 'Cannot get the User!' });
  }
};

export const putUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { userId } = req.query;
    const data = req.body;

    if (userId && data) {
      const user = await Users.findByIdAndUpdate(userId, data);
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(404).json({ error: 'Error while updating User!' });
  }
};
