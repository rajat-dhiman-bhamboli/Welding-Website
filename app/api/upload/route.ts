import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as string;

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file uploaded' }, { status: 400 });
    }

    const uploadResponse = await cloudinary.uploader.upload(file, {
      folder: 'welding_website',
    });

    return NextResponse.json({ 
      success: true, 
      url: uploadResponse.secure_url 
    });

  } catch (error: any) {
    console.error('Cloudinary Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
