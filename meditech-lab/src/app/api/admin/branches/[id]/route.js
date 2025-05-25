// src/app/api/admin/branches/[id]/route.js
import dbConnect from "@/app/admin/lib/mongodb";
import { NextResponse } from "next/server";
import Branch from "@/models/Branch"; // <--- Import your Branch model here

// The getBranchModel function is now much simpler!
function getBranchModel() {
  return Branch; // Just return the imported model
}

export async function PUT(req, { params }) {
  await dbConnect();
  const BranchModel = getBranchModel(); // Use BranchModel

  try {
    // Await params to avoid the Next.js sync-dynamic-apis warning
    const { id } = await Promise.resolve(params);
    console.log("PUT Branch Handler: ID from params:", id);

    if (!id) {
      return NextResponse.json(
        { message: "Branch ID is required in URL" },
        { status: 400 }
      );
    }

    const updates = await req.json();
    console.log("PUT Branch Handler: Received updates:", updates);

    const updatedBranch = await BranchModel.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true } // new: true returns the updated document; runValidators enforces schema rules on update
    );

    if (!updatedBranch) {
      return NextResponse.json(
        { message: "Branch not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedBranch);
  } catch (err) {
    console.error("Error updating branch:", err);
    return NextResponse.json(
      { message: "Error updating branch", error: err.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    await dbConnect();
    const BranchModel = getBranchModel(); // Use BranchModel

    // Await params to avoid the Next.js sync-dynamic-apis warning
    const { id } = await Promise.resolve(params);
    console.log("DELETE Branch Handler: ID from params:", id);

    if (!id) {
      return NextResponse.json(
        { message: "Branch ID is required for deletion" },
        { status: 400 }
      );
    }

    const deletedBranch = await BranchModel.findByIdAndDelete(id);

    if (!deletedBranch) {
      return NextResponse.json(
        { message: "Branch not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Branch deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error deleting branch:", err);
    return NextResponse.json(
      { message: "Failed to delete branch", error: err.message },
      { status: 500 }
    );
  }
}
