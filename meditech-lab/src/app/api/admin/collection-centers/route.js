import dbConnect from "@/app/admin/lib/mongodb";
import CollectionCenter from "@/models/CollectionCenter";
import { NextResponse } from "next/server";

// Create a new Collection Center
export async function POST(req) {
  await dbConnect();
  const data = await req.json();

  try {
    const center = await CollectionCenter.create(data);
    return NextResponse.json(center);
  } catch (err) {
    console.error("Error creating collection center:", err);
    return NextResponse.json(
      { message: "Error creating collection center", error: err.message },
      { status: 500 }
    );
  }
}
