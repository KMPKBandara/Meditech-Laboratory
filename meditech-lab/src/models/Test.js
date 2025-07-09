import mongoose from "mongoose";

const TestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Test name is required."],
    unique: true,
    trim: true,
    maxlength: [100, "Test name cannot be more than 100 characters."],
  },
  description: {
    type: String,
    maxlength: [500, "Description cannot be more than 500 characters."],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Price is required."],
    min: [0, "Price cannot be negative."],
  },
  // Reference to TestCategory model
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TestCategory",
    required: [true, "Category is required."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Test || mongoose.model("Test", TestSchema);
