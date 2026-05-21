import dbConnect from "@/lib/mongodb";
import Inquiry from "@/models/Inquiry";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const inquiries = await Inquiry.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: inquiries });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
