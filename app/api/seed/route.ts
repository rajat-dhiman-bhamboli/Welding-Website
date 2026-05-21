import dbConnect from "@/lib/mongodb";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

const initialProducts = [
  {
    name: "Standard Titan Box",
    price: 1500,
    description: "Indestructible steel fabrication for heavy-duty storage. Weatherproof and secure.",
    image: "https://images.unsplash.com/photo-1558981403-c5f91cbba527?q=80&w=2070&auto=format&fit=crop",
    category: "Armor",
    stock: 20
  },
  {
    name: "Royal Heavy Box",
    price: 2500,
    description: "Reinforced steel diggi with premium finish. Perfect for heavy cruisers.",
    image: "https://images.unsplash.com/photo-1558981403-c5f91cbba527?q=80&w=2070&auto=format&fit=crop",
    category: "Armor",
    stock: 15
  },
  {
    name: "Iron-Core Manja",
    price: 4500,
    description: "Traditional Manja with a modern structural steel frame. Built for eternity.",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=2070&auto=format&fit=crop",
    category: "Structure",
    stock: 10
  },
  {
    name: "Legacy Carved Bed",
    price: 6500,
    description: "Hand-crafted steel bed with ornamental designs and premium powder coating.",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=2070&auto=format&fit=crop",
    category: "Structure",
    stock: 5
  }
];

export async function GET() {
  try {
    await dbConnect();
    
    // Clear existing products
    await Product.deleteMany({});
    
    // Insert initial products
    await Product.insertMany(initialProducts);
    
    return NextResponse.json({ success: true, message: "Database seeded successfully!" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
