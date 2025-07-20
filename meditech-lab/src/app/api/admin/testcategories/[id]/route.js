// src/app/api/admin/testcategories/[id]/route.js
import dbConnect from "@/app/admin/lib/mongodb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../auth/[...nextauth]/route"; // Adjust path if necessary
import TestCategory from "@/models/TestCategory";
import Test from "@/models/Test"; // Import Test model to check for dependencies

function getTestCategoryModel() {
  return TestCategory;
}

export async function PUT(req, { params }) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();
  const TestCategoryModel = getTestCategoryModel();

  try {
    const { id } = await Promise.resolve(params);

    if (!id) {
      return NextResponse.json(
        { message: "Category ID is required in URL" },
        { status: 400 }
      );
    }

    const updates = await req.json();

    const updatedCategory = await TestCategoryModel.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true }
    );

    if (!updatedCategory) {
      return NextResponse.json(
        { message: "Test Category not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedCategory);
  } catch (err) {
    console.error("Error updating test category:", err);
    if (err.code === 11000) {
      return NextResponse.json(
        { message: "Category with this name already exists." },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { message: "Error updating test category", error: err.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    await dbConnect();
    const TestCategoryModel = getTestCategoryModel();

    const { id } = await Promise.resolve(params);

    if (!id) {
      return NextResponse.json(
        { message: "Category ID is required for deletion" },
        { status: 400 }
      );
    }

    // Check if any tests are associated with this category
    const associatedTests = await Test.countDocuments({ category: id });
    if (associatedTests > 0) {
      return NextResponse.json(
        {
          message: `Cannot delete category. There are ${associatedTests} tests associated with it.`,
        },
        { status: 409 } // Conflict
      );
    }

    const deletedCategory = await TestCategoryModel.findByIdAndDelete(id);

    if (!deletedCategory) {
      return NextResponse.json(
        { message: "Test Category not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Test Category deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error deleting test category:", err);
    return NextResponse.json(
      { message: "Failed to delete test category", error: err.message },
      { status: 500 }
    );
  }
}
