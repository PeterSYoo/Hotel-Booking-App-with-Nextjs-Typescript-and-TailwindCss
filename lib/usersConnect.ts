import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    // @ts-ignore
    const { connection } = await mongoose.connect(
      // @ts-ignore
      process.env.NEXT_PUBLIC_MONGO_URL_USERDB
    );

    // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
    if (connection.readyState === 1) {
      return Promise.resolve(true);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectMongo;
