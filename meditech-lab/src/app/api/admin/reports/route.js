import dbConnect from "@/app/admin/lib/mongodb";
import Report from "@/models/Report";
import { NextResponse } from "next/server";

export async function POST(req) {
  await dbConnect();
  const data = await req.json();

  try {
    const report = await Report.create(data);
    return NextResponse.json(report);
  } catch (err) {
    console.error("Error creating report:", err);
    return NextResponse.json(
      { message: "Error creating report", error: err.message },
      { status: 500 }
    );
  }
}
