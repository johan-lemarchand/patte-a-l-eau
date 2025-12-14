import { NextResponse } from 'next/server';

export async function GET() {
    const videoUrl = `https://${process.env.NEXT_PUBLIC_MINIO_ENDPOINT}/${process.env.NEXT_PUBLIC_MINIO_BUCKET_NAME}/711dd14577bdd6ffe207d1afe8a01682.mp4`;
    return NextResponse.json({ url: videoUrl });
} 