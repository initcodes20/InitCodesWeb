import Project from "@/models/Project";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const { id } = await params;

    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return NextResponse.json(
        { success: false, error: "Project not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { success: true, message: "Project deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to delete project" },
      { status: 500 },
    );
  }
}

// -----------------------------------------------------------------------------

export async function PUT(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await req.json();

    // ✅ Whitelist allowed fields
    const updateData = {
      title: body.title,
      description: body.description,
      developer: body.developer,
      redirectLink: body.redirectLink,
      tags: body.tags,
      isFeatured: body.isFeatured,
    };

    // Remove undefined fields
    Object.keys(updateData).forEach(
      (key) => updateData[key] === undefined && delete updateData[key],
    );

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true },
    );

    if (!updatedProject) {
      return NextResponse.json(
        { success: false, error: "Project not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { success: true, data: updatedProject },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to update project" },
      { status: 500 },
    );
  }
}

// -----------------------------------------------------------------------------
export async function PATCH(req, { params }) {
  await connectDB();

  const session = await Project.startSession();
  session.startTransaction();

  try {
    const { id } = await params;

    // 1️⃣ Fetch project INSIDE transaction
    const project = await Project.findById(id).session(session);

    if (!project) {
      await session.abortTransaction();
      session.endSession();
      return NextResponse.json(
        { success: false, error: "Project not found" },
        { status: 404 },
      );
    }

    // 2️⃣ Enforce max featured = 20
    if (!project.isFeatured) {
      const featuredCount = await Project.countDocuments(
        { isFeatured: true },
        { session },
      );

      if (featuredCount >= 25) {
        await session.abortTransaction();
        session.endSession();
        return NextResponse.json(
          { success: false, error: "Maximum featured projects reached" },
          { status: 400 },
        );
      }
    }

    // 3️⃣ Toggle
    project.isFeatured = !project.isFeatured;
    await project.save({ session });

    await session.commitTransaction();
    session.endSession();

    // 4️⃣ Success response
    return NextResponse.json(
      {
        success: true,
        message: project.isFeatured
          ? "Project featured successfully"
          : "Project removed from featured",
        data: project,
      },
      { status: 200 },
    );
  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    console.error("PATCH TOGGLE ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Failed to toggle project visibility" },
      { status: 500 },
    );
  }
}
