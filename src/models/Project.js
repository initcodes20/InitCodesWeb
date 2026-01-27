import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    imageUrl: {
      type: String,
      required: true,
    },

    developer: {
      type: String,
      default: "InitCodes",
    },

    redirectLink: {
      type: String,
    },

    // ⭐ FIXED FEATURE FLAG
    isFeatured: {
      type: Boolean,
      default: false,
    },

    // ⭐ FIXED TAGS
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Project ||
  mongoose.model("Project", projectSchema);
