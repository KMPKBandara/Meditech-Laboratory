// src/app/api/admin/tests/[id]/route.js
import dbConnect from "@/app/admin/lib/mongodb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../auth/[...nextauth]/route"; // Adjust path if necessary
import Test from "@/models/Test";
import TestCategory from "@/models/TestCategory"; // Import to validate category existence

function getTestModel() {
  return Test;
}

export async function PUT(req, { params }) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();
  const TestModel = getTestModel();

  try {
    const { id } = await Promise.resolve(params);

    if (!id) {
      return NextResponse.json(
        { message: "Test ID is required in URL" },
        { status: 400 }
      );
    }

    const updates = await req.json();

    // If category is being updated, validate its existence
    if (updates.category) {
      const categoryExists = await TestCategory.findById(updates.category);
      if (!categoryExists) {
        return NextResponse.json(
          { message: "Provided category ID does not exist." },
          { status: 400 }
        );
      }
    }

    const updatedTest = await TestModel.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedTest) {
      return NextResponse.json({ message: "Test not found" }, { status: 404 });
    }

    return NextResponse.json(updatedTest);
  } catch (err) {
    console.error("Error updating test:", err);
    if (err.code === 11000) {
      return NextResponse.json(
        { message: "Test with this name already exists." },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { message: "Error updating test", error: err.message },
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
    const TestModel = getTestModel();

    const { id } = await Promise.resolve(params);

    if (!id) {
      return NextResponse.json(
        { message: "Test ID is required for deletion" },
        { status: 400 }
      );
    }

    const deletedTest = await TestModel.findByIdAndDelete(id);

    if (!deletedTest) {
      return NextResponse.json({ message: "Test not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Test deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error deleting test:", err);
    return NextResponse.json(
      { message: "Failed to delete test", error: err.message },
      { status: 500 }
    );
  }
}
