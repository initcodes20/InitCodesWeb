import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import Admin from "@/app/models/admin";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    // 1. Restrict to only allowed admin email
    if (email !== process.env.ADMIN_EMAIL) {
      return NextResponse.json(
        { error: "Unauthorized access" },
        { status: 401 }
      );
    }

    // 2. Find admin
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return NextResponse.json(
        { error: "Admin not found" },
        { status: 404 }
      );
    }

    // 3. Verify password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // 4. Success
    return NextResponse.json(
      {
        message: "Login successful",
        admin: {
          id: admin._id,
          email: admin.email,
        },
      },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
