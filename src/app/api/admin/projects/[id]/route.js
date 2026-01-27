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
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Project deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to delete project" },
      { status: 500 }
    );
  }
}

export async function PUT(req,{params}) {
  try {
    
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to Edit project" },
      { status: 500 }
    );
  }
}

export async function PATCH(req, {params}) {
  try {
    
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to ADD project to Home" },
      { status: 500 }
    );
  }
}