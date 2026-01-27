import Teams from "@/models/Teams";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import cloudinary from "@/lib/cloudinary";


// DELETE team member
export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;
    console.log(id)
    const deletedMember = await Teams.findByIdAndDelete(id);

    if (!deletedMember) {
      return NextResponse.json(
        { success: false, error: "Member not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Member deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Delete Member Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete member" },
      { status: 500 }
    );
  }
}

export async function PUT(req, context) {
  try {
    await connectDB();

    const { id } = await context.params;
    const formData = await req.formData();

    const name = formData.get("name");
    const designation = formData.get("designation");
    const file = formData.get("image");

    let updateData = { name, designation };

    if (file) {
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

      updateData.imageUrl = uploadResult.secure_url;
    }

    const updatedMember = await Teams.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    return NextResponse.json({ success: true, data: updatedMember });
  } catch (error) {
    console.error("Update Team Error:", error);
    return NextResponse.json(
      { error: "Failed to update team member" },
      { status: 500 }
    );
  }
}
