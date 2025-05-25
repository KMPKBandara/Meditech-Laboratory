// src/app/api/admin/collection-centers/[id]/route.js (File 1)
import dbConnect from "@/app/admin/lib/mongodb";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

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
  { collection: "collectioncenters" }
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
  // <-- Handles /api/admin/collection-centers/some_id
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
      updates.branchId = new mongoose.Types.ObjectId(updates.branchId);
    }

    const updatedCenter = await CollectionCenter.findByIdAndUpdate(
      id,
      updates,
      { new: true }
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
  // <-- Handles /api/admin/collection-centers/some_id
  try {
    await dbConnect();
    const CollectionCenter = getCollectionCenterModel();
    const { id } = await Promise.resolve(params);

    console.log("DELETE Handler: ID from params:", id);

    if (!id) {
      return new Response(
        JSON.stringify({ message: "ID is required for deletion" }),
        { status: 400 }
      );
    }

    await CollectionCenter.findByIdAndDelete(id);
    return new Response(
      JSON.stringify({ message: "Collection Center deleted" }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Error deleting collection center:", err);
    return new Response(
      JSON.stringify({
        message: "Failed to delete Collection Center",
        error: err.message,
      }),
      { status: 500 }
    );
  }
}
