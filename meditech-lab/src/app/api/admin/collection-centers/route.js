// src/app/api/admin/collection-centers/route.js (NEW File 2)
import dbConnect from "@/app/admin/lib/mongodb";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

// Define the CollectionCenter Schema directly in the API route file
// IMPORTANT: This schema definition must be consistent between both route.js files
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
// IMPORTANT: This helper function must be consistent between both route.js files
function getCollectionCenterModel() {
  try {
    return mongoose.model("CollectionCenter");
  } catch (error) {
    return mongoose.model("CollectionCenter", collectionCenterSchema);
  }
}

export async function POST(req) {
  // <-- Handles /api/admin/collection-centers
  await dbConnect();
  const CollectionCenter = getCollectionCenterModel();

  const data = await req.json();

  try {
    const objectToCreate = {
      ...data,
      branchId: new mongoose.Types.ObjectId(data.branchId),
    };

    const center = await CollectionCenter.create(objectToCreate);

    return NextResponse.json(center);
  } catch (err) {
    console.error("❌ Fatal Error creating collection center:", err);
    return NextResponse.json(
      {
        message: "Error creating collection center",
        error: err.message,
        detailedError: JSON.stringify(err, Object.getOwnPropertyNames(err)),
      },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  // <-- Handles /api/admin/collection-centers
  try {
    await dbConnect();
    const CollectionCenter = getCollectionCenterModel();
    // If you want to populate branch details for the table, add .populate('branchId') here:
    const centers = await CollectionCenter.find(); // .populate('branchId') if you want branch object
    return NextResponse.json(centers); // Changed from Response.json for consistency
  } catch (err) {
    console.error("Error fetching collection centers:", err); // Added error logging
    return NextResponse.json({ message: "Failed to fetch" }, { status: 500 }); // Changed from new Response for consistency
  }
}
