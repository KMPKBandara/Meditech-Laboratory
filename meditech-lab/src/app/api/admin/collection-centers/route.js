// src/app/api/admin/collection-centers/route.js
import dbConnect from "@/app/admin/lib/mongodb";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { getServerSession } from "next-auth"; // NEW: Import getServerSession
import { authOptions } from "../../auth/[...nextauth]/route"; // NEW: Import your auth options

// Define the CollectionCenter Schema directly in the API route file
// IMPORTANT: This schema definition must be consistent if you use it elsewhere
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
// IMPORTANT: This helper function must be consistent if you use it elsewhere
function getCollectionCenterModel() {
  try {
    return mongoose.model("CollectionCenter");
  } catch (error) {
    return mongoose.model("CollectionCenter", collectionCenterSchema);
  }
}

export async function POST(req) {
  // NEW: Authentication and Authorization Check
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  // END NEW: Authentication and Authorization Check

  await dbConnect();
  const CollectionCenter = getCollectionCenterModel();

  const data = await req.json();

  try {
    const objectToCreate = {
      ...data,
      branchId: new mongoose.Types.ObjectId(data.branchId),
    };

    const center = await CollectionCenter.create(objectToCreate);

    return NextResponse.json(center, { status: 201 }); // 201 Created
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
  // NEW: Authentication and Authorization Check
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  // END NEW: Authentication and Authorization Check

  try {
    await dbConnect();
    const CollectionCenter = getCollectionCenterModel();

    // Fetch all collection centers
    const centers = await CollectionCenter.find({});
    return NextResponse.json(centers);
  } catch (err) {
    console.error("Error fetching collection centers:", err);
    return NextResponse.json(
      { message: "Failed to fetch collection centers", error: err.message },
      { status: 500 }
    );
  }
}
