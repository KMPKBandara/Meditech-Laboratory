import dbConnect from "@/app/admin/lib/mongodb";
import Service from "@/models/Service";
import { NextResponse } from "next/server";

export async function POST(req) {
  await dbConnect();
  const data = await req.json();

  try {
    const service = await Service.create(data);
    return NextResponse.json(service);
  } catch (err) {
    console.error("Error creating service:", err);
    return NextResponse.json(
      { message: "Error creating service", error: err.message },
      { status: 500 }
    );
  }
}
