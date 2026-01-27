import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Teams from "@/models/Teams";
import cloudinary from "@/lib/cloudinary";

export async function POST(req) {
  try {
    await connectDB();

    const formData = await req.formData();

    const file = formData.get("image");
    const name = formData.get("name");
    const designation = formData.get("designation");

    if (!file || !name || !designation) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: "teams" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(buffer);
    });

    const newMember = await Teams.create({
      name,
      designation,
      imageUrl: uploadResult.secure_url,
    });

    return NextResponse.json(
      { success: true, data: newMember },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create Team Error:", error);
    return NextResponse.json(
      { error: "Failed to create team member" },
      { status: 500 }
    );
  }
}


export async function GET() {
  try {
    await connectDB();

    const teams = await Teams.find().sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: teams }, { status: 200 });
  } catch (error) {
    console.error("GET teams error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch teams" },
      { status: 500 },
    );
  }
}
