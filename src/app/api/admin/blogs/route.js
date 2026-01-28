import { connectDB } from "@/lib/mongodb";
import Blogs from "@/models/Blogs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const {
      slug,
      title,
      author,
      category,
      readTime,
      description,
    } = body;

    if (!slug || !title || !category || !readTime || !description) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const existing = await Blogs.findOne({ slug });
    if (existing) {
      return NextResponse.json(
        { success: false, error: "Slug already exists" },
        { status: 409 }
      );
    }

    const blog = await Blogs.create({
      slug,
      title,
      author,
      category,
      readTime,
      description,
    });

    return NextResponse.json(
      { success: true, data: blog },
      { status: 201 }
    );
  } catch (error) {
    console.error("BLOG POST ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const blogs = await Blogs
      .find({})
      .sort({ createdAt: -1 }); // latest first

    return NextResponse.json(
      { success: true, data: blogs },
      { status: 200 } 
    );
  } catch (error) {
    console.error("BLOG FIND ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}