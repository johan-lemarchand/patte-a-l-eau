import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const videoUrl = `https://${process.env.NEXT_PUBLIC_MINIO_ENDPOINT}/${process.env.NEXT_PUBLIC_MINIO_BUCKET_NAME}/entree-salon.mp4`;
    return NextResponse.json({ url: videoUrl });
} 