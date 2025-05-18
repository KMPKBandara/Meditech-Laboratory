import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  patientId: String,
  email: String,
  pdfPath: String, // File upload path
});

export default mongoose.models.Report || mongoose.model("Report", schema);
