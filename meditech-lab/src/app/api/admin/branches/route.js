import dbConnect from "@/app/admin/lib/mongodb";
import Branch from "@/models/Branch";
import { NextResponse } from "next/server";

export async function POST(req) {
  await dbConnect();
  const data = await req.json();
  try {
    const branch = await Branch.create(data);
    return NextResponse.json(branch);
  } catch (err) {
    return NextResponse.json(
      { message: "Error creating branch", error: err },
      { status: 500 }
    );
  }
}
