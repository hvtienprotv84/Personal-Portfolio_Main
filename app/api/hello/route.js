import { connectDatabase, disconnectDatabase } from "../../lib/mongodb";
import { NextResponse } from "next/server";

// Handle GET requests to fetch data from MongoDB
export async function GET() {
  try {
    const client = await connectDatabase();
    const db = client.db("blog");
    const result = await db.collection("books").find().toArray();
    return NextResponse.json(result);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, error: "Server Error!" });
  } finally {
    await disconnectDatabase();
  }
}
