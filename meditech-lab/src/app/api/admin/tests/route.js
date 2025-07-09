// src/app/api/admin/tests/route.js
import dbConnect from "@/app/admin/lib/mongodb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route"; // Adjust path if necessary
import Test from "@/models/Test";
import TestCategory from "@/models/TestCategory"; // Import to validate category existence

function getTestModel() {
  return Test;
}

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();
  const TestModel = getTestModel();

  const data = await req.json();

  try {
    // Validate category existence
    const categoryExists = await TestCategory.findById(data.category);
    if (!categoryExists) {
      return NextResponse.json(
        { message: "Provided category ID does not exist." },
        { status: 400 }
      );
    }

    const test = await TestModel.create(data);
    return NextResponse.json(test, { status: 201 });
  } catch (err) {
    console.error("Error creating test:", err);
    if (err.code === 11000) {
      return NextResponse.json(
        { message: "Test with this name already exists." },
        { status: 409 }
      );
    }
    return NextResponse.json(
      {
        message: "Error creating test",
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
    const TestModel = getTestModel();

    // Populate the category field to show category name
    const tests = await TestModel.find({}).populate("category", "name"); // Only fetch 'name' field of category
    return NextResponse.json(tests);
  } catch (err) {
    console.error("Error fetching tests:", err);
    return NextResponse.json(
      { message: "Failed to fetch tests", error: err.message },
      { status: 500 }
    );
  }
}
