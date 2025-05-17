import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: String,
  description: String,
});

export default mongoose.models.Service || mongoose.model("Service", schema);
