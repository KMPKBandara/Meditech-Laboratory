// src/app/api/admin/testcategories/route.js
import dbConnect from "@/app/admin/lib/mongodb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route"; // Adjust path if necessary
import TestCategory from "@/models/TestCategory";

function getTestCategoryModel() {
  return TestCategory;
}

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();
  const TestCategoryModel = getTestCategoryModel();

  const data = await req.json();

  try {
    const category = await TestCategoryModel.create(data);
    return NextResponse.json(category, { status: 201 });
  } catch (err) {
    console.error("Error creating test category:", err);
    // Handle duplicate key error specifically
    if (err.code === 11000) {
      return NextResponse.json(
        { message: "Category with this name already exists." },
        { status: 409 }
      );
    }
    return NextResponse.json(
      {
        message: "Error creating test category",
        error: err.message,
      },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    await dbConnect();
    const TestCategoryModel = getTestCategoryModel();

    const categories = await TestCategoryModel.find({});
    return NextResponse.json(categories);
  } catch (err) {
    console.error("Error fetching test categories:", err);
    return NextResponse.json(
      { message: "Failed to fetch test categories", error: err.message },
      { status: 500 }
    );
  }
}
