import dbConnect from "@/app/admin/lib/mongodb";
import Tip from "@/models/Tip";
import { NextResponse } from "next/server";

export async function POST(req) {
  await dbConnect();
  const data = await req.json();

  try {
    const tip = await Tip.create(data);
    return NextResponse.json(tip);
  } catch (err) {
    console.error("Error creating tip:", err);
    return NextResponse.json(
      { message: "Error creating tip", error: err.message },
      { status: 500 }
    );
  }
}
