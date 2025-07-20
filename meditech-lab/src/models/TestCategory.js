import mongoose from "mongoose";

const TestCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Category name is required."],
    unique: true,
    trim: true,
    maxlength: [50, "Category name cannot be more than 50 characters."],
  },
  description: {
    type: String,
    maxlength: [200, "Description cannot be more than 200 characters."],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.TestCategory ||
  mongoose.model("TestCategory", TestCategorySchema);
