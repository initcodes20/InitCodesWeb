import Teams from "@/models/Teams";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

export async function POST(res) {
    try {
        await connectDB();

        const { name, designation, imageUrl } = await req.json();
        
    } catch (error) {
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}