import { connectDB } from "@/lib/mongodb";
import Blogs from "@/models/Blogs";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const body = await req.json();

    const updatedBlog = await Blogs.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );

    if (!updatedBlog) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: updatedBlog },
      { status: 200 }
    );
  } catch (error) {
    console.error("BLOG UPDATE ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update blog" },
      { status: 500 }
    );
  }
}



export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const deleted = await Blogs.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Delete failed" },
      { status: 500 }
    );
  }
}
