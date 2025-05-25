// src/app/api/admin/branches/route.js
import dbConnect from "@/app/admin/lib/mongodb";
import { NextResponse } from "next/server";
import Branch from "@/models/Branch"; // <--- Import your Branch model here

// The getBranchModel function is now much simpler!
function getBranchModel() {
  return Branch; // Just return the imported model
}

export async function POST(req) {
  await dbConnect();
  const BranchModel = getBranchModel(); // Use BranchModel to avoid naming conflict with import

  const data = await req.json();

  try {
    const branch = await BranchModel.create(data);
    return NextResponse.json(branch, { status: 201 }); // 201 Created
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
  try {
    await dbConnect();
    const BranchModel = getBranchModel(); // Use BranchModel

    const branches = await BranchModel.find({}); // Fetch all branches
    return NextResponse.json(branches);
  } catch (err) {
    console.error("Error fetching branches:", err);
    return NextResponse.json(
      { message: "Failed to fetch branches", error: err.message },
      { status: 500 }
    );
  }
}
