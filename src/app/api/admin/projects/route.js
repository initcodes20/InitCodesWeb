import Project from "@/models/Project";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(req) {
  try {
    await connectDB();
    const formData = await req.formData();

    const title = formData.get("title");
    const description = formData.get("description");
    const developer = formData.get("developer") || "InitCodes";
    const redirectLink = formData.get("redirectLink");
    const isFeatured = formData.get("isFeatured") === "true";
    const tagsRaw = formData.get("tags");
    const image = formData.get("image");

    /* ---------- VALIDATION ---------- */
    if (!title || !description || !image) {
      return NextResponse.json(
        { success: false, error: "Title, description and image are required" },
        { status: 400 },
      );
    }

    /* ---------- PARSE TAGS ---------- */
    let tags = [];
    if (tagsRaw) {
      tags = JSON.parse(tagsRaw);
    }

    /* ---------- CLOUDINARY UPLOAD ---------- */
    const buffer = Buffer.from(await image.arrayBuffer());

    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "projects" }, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        })
        .end(buffer);
    });

    /* ---------- CREATE PROJECT ---------- */
    const newProject = await Project.create({
      title,
      description,
      developer,
      redirectLink,
      isFeatured,
      tags,
      imageUrl: uploadResult.secure_url,
    });

    return NextResponse.json(
      { success: true, data: newProject },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Project deployment failed" },
      { status: 500 },
    );
  }
}

// -----------------------------------------------------------------------------

export async function GET(req) {
  try {
    await connectDB();

    const projects = await Project.find();
    return NextResponse.json(
      { success: true, data: projects },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Project deployment failed" },
      { status: 500 },
    );
  }
}
