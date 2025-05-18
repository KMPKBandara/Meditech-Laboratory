import mongoose from "mongoose";

const branchSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  email: String,
  collectionCenters: [
    { type: mongoose.Schema.Types.ObjectId, ref: "CollectionCenter" },
  ],
});

export default mongoose.models.Branch || mongoose.model("Branch", branchSchema);
