// src/models/Branch.js
import mongoose from "mongoose";

const BranchSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
  },
  {
    collection: "branches", // Ensure this matches your MongoDB collection name
    timestamps: true, // Good practice for created/updated dates
  }
);

// Check if the model already exists to prevent OverwriteModelError in development (hot-reloading)
const Branch = mongoose.models.Branch || mongoose.model("Branch", BranchSchema);

export default Branch;
