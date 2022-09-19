import mongoose from 'mongoose';

const connectMongo = async () => {
  try {
    // @ts-ignore
    const { connection } = await mongoose.connect(process.env.MONGO_URL);

    // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
    if (connection.readyState === 1) {
      return Promise.resolve(true);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectMongo;
