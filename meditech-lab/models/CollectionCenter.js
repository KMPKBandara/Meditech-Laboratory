import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  email: String,
});

export default mongoose.models.CollectionCenter ||
  mongoose.model("CollectionCenter", schema);
