import mongoose from "mongoose";

const schema = new mongoose.Schema({
  category: String,
  name: String,
  description: String,
});

export default mongoose.models.Test || mongoose.model("Test", schema);
