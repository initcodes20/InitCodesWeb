import mongoose from "mongoose";

const blogsSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      default: "InitCodes",
    },
    category: {
      type: String,
      required: true,
    },
    readTime: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Blogs || mongoose.model("Blogs", blogsSchema);
