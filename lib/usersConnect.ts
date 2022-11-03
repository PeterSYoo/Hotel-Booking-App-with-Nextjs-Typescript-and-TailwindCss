import mongoose from 'mongoose';

const DB_URL: any = process.env.NEXT_PUBLIC_MONGO_URL_USERDB;

const usersConnect = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      // if connection is open return the instance of the databse for cleaner queries
      return mongoose.connection.db;
    }

    return mongoose.connect(DB_URL);
  } catch (error) {
    return Promise.reject(error);
  }
};

export default usersConnect;
