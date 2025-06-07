// src/app/api/admin/branches/route.js
import dbConnect from "@/app/admin/lib/mongodb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth"; // <--- ADD THIS LINE
import { authOptions } from "../../auth/[...nextauth]/route";
import Branch from "@/models/Branch";

function getBranchModel() {
  return Branch;
}

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();
  const BranchModel = getBranchModel();

  const data = await req.json();

  try {
    const branch = await BranchModel.create(data);
    return NextResponse.json(branch, { status: 201 });
  } catch (err) {
    console.error("Error creating branch:", err);
    return NextResponse.json(
      {
        message: "Error creating branch",
        error: err.message,
        detailedError: JSON.stringify(err, Object.getOwnPropertyNames(err)),
      },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  // Authentication and Authorization Check
  const session = await getServerSession(authOptions); // This line needs the import

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    await dbConnect();
    const BranchModel = getBranchModel();

    const branches = await BranchModel.find({});
    return NextResponse.json(branches);
  } catch (err) {
    console.error("Error fetching branches:", err);
    return NextResponse.json(
      { message: "Failed to fetch branches", error: err.message },
      { status: 500 }
    );
  }
}
