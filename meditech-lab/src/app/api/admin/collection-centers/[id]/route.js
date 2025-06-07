// src/app/api/admin/collection-centers/[id]/route.js
import dbConnect from "@/app/admin/lib/mongodb";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { getServerSession } from "next-auth"; // NEW: Import getServerSession
import { authOptions } from "../../../auth/[...nextauth]/route"; // NEW: Import your auth options (adjusted path)

// Define the CollectionCenter Schema directly in the API route file
const collectionCenterSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    phone: String,
    email: String,
    branchId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
    },
  },
  { collection: "collectioncenters", timestamps: true } // Added timestamps for consistency
);

// Function to get or define the CollectionCenter model
function getCollectionCenterModel() {
  try {
    return mongoose.model("CollectionCenter");
  } catch (error) {
    return mongoose.model("CollectionCenter", collectionCenterSchema);
  }
}

export async function PUT(req, { params }) {
  // NEW: Authentication and Authorization Check
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  // END NEW: Authentication and Authorization Check

  await dbConnect();
  const CollectionCenter = getCollectionCenterModel();

  try {
    const { id } = await Promise.resolve(params);

    console.log("PUT Handler: ID from params:", id);

    if (!id) {
      return NextResponse.json(
        { message: "ID is required in URL (from params)" },
        { status: 400 }
      );
    }

    const updates = await req.json();

    if (updates.branchId) {
      // Ensure branchId is converted to ObjectId if provided
      updates.branchId = new mongoose.Types.ObjectId(updates.branchId);
    }

    const updatedCenter = await CollectionCenter.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true } // Added runValidators for schema validation on update
    );

    if (!updatedCenter) {
      return NextResponse.json(
        { message: "Collection center not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedCenter);
  } catch (err) {
    console.error("Error updating collection center:", err);
    return NextResponse.json(
      { message: "Error updating collection center", error: err.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  // NEW: Authentication and Authorization Check
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  // END NEW: Authentication and Authorization Check

  try {
    await dbConnect();
    const CollectionCenter = getCollectionCenterModel();
    const { id } = await Promise.resolve(params);

    console.log("DELETE Handler: ID from params:", id);

    if (!id) {
      // Consistent use of NextResponse.json
      return NextResponse.json(
        { message: "ID is required for deletion" },
        { status: 400 }
      );
    }

    const deletedCenter = await CollectionCenter.findByIdAndDelete(id); // Capture deleted document

    if (!deletedCenter) {
      // If no document was found and deleted
      return NextResponse.json(
        { message: "Collection center not found" },
        { status: 404 }
      );
    }

    // Consistent use of NextResponse.json
    return NextResponse.json(
      { message: "Collection Center deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error deleting collection center:", err);
    // Consistent use of NextResponse.json
    return NextResponse.json(
      {
        message: "Failed to delete Collection Center",
        error: err.message,
      },
      { status: 500 }
    );
  }
}
