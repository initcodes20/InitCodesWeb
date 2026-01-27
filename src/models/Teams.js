import mongoose from "mongoose";

const TeamsSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    designation: { type: String, require: true },
    imageUrl: { type: String, require: true },
  },
  { timestamps: true },
);

export default mongoose.models.Teams ||
  mongoose.model("Teams", TeamsSchema);