import mongoose from "mongoose";

const DB_URL = process.env.NEXT_PUBLIC_MONGO_URL_TESTDB;

if (!DB_URL) {
  throw new Error("Please define the testDB env variable");
}

const testConnect = async () => {
  try {
    const { connection } = await mongoose.connect(DB_URL);

    if (connection.readyState === 1) {
      console.log("Database Connected");
    }
  } catch (errors) {
    return Promise.reject(errors);
  }
};

export default testConnect;
