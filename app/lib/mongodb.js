import { MongoClient } from "mongodb";

const uri = process.env.MONGO_KEY;
let client;

export async function connectDatabase() {
  if (!client) {
    client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  }
  console.log("Database Connected!");
  return client;
}

export async function disconnectDatabase() {
  if (client) {
    await client.close();
    client = null;
  }
  console.log("Database Disconnected!");
}
