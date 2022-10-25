import { MongoClient } from "mongodb";

const CARDS_URL = process.env.NEXT_PUBLIC_MONGO_URL_CARDDB;

const options = {
  maxPoolSize: 50,
  wtimeoutMS: 2500,
  useNewUrlParser: true,
};

let client;
let cardsConnect;

if (!process.env.NEXT_PUBLIC_MONGO_URL_CARDDB) {
  throw new Error("Missing cardDB URL from .env.local");
}

let globalWithMongo = global as typeof globalThis & {
  _mongoClientPromise: Promise<MongoClient>;
};

if (process.env.NODE_ENV === "development") {
  if (!globalWithMongo._mongoClientPromise) {
    // @ts-ignore
    client = new MongoClient(CARDS_URL, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }

  cardsConnect = globalWithMongo._mongoClientPromise;
} else {
  // @ts-ignore
  client = new MongoClient(CARDS_URL, options);
  cardsConnect = client.connect();
}

export default cardsConnect;
