import { NextApiRequest, NextApiResponse } from 'next';
import { useSession } from 'next-auth/react';
import Users from '../model/Users';

export const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const users = await Users.find({});

    if (!users) return res.status(404).json({ error: 'Data not Found' });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Users' });
  }
};

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
    const formData = req.body;

    if (userId && formData) {
      const user = await Users.findByIdAndUpdate(userId, formData);
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(404).json({ error: 'Error while updating User!' });
  }
};
