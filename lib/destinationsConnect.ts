import { MongoClient } from "mongodb";

const DESTINATIONS_URL = process.env.NEXT_PUBLIC_MONGO_URL_DESTINATIONDB;

const options = {
  maxPoolSize: 50,
  wtimeoutMS: 2500,
  useNewUrlParser: true,
};

let client;
let destinationsConnect;

if (!process.env.NEXT_PUBLIC_MONGO_URL_DESTINATIONDB) {
  throw new Error("Missing destinationDB URL from .env.local");
}

let globalWithMongo = global as typeof globalThis & {
  _mongoClientPromise: Promise<MongoClient>;
};

if (process.env.NODE_ENV === "development") {
  if (!globalWithMongo._mongoClientPromise) {
    // @ts-ignore
    client = new MongoClient(DESTINATIONS_URL, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }

  destinationsConnect = globalWithMongo._mongoClientPromise;
} else {
  // @ts-ignore
  client = new MongoClient(DESTINATIONS_URL, options);
  destinationsConnect = client.connect();
}

export default destinationsConnect;
