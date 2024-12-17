import { Client } from 'minio';
import { NextResponse } from 'next/server';

// Utiliser les variables d'environnement pour la configuration
const endpoint = process.env.MINIO_ENDPOINT || '';
const port = parseInt(process.env.MINIO_PORT || '443');
const useSSL = process.env.MINIO_USE_SSL !== 'false';

if (!endpoint) {
    throw new Error('MINIO_ENDPOINT environment variable is not set');
}

const minioClient = new Client({
    endPoint: endpoint,
    port: port,
    useSSL: useSSL,
    accessKey: process.env.MINIO_ACCESS_KEY || '',
    secretKey: process.env.MINIO_SECRET_KEY || '',
    region: process.env.MINIO_REGION || 'us-east-1'
});

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const objectName = searchParams.get('object');

        if (!objectName) {
            return NextResponse.json({ error: 'Object name is required' }, { status: 400 });
        }

        const bucketName = process.env.MINIO_BUCKET_NAME || '';
        
        if (!bucketName) {
            console.error('MINIO_BUCKET_NAME environment variable is not set');
            return NextResponse.json({ error: 'Bucket name is not configured' }, { status: 500 });
        }

        console.log(`Attempting to access object: ${objectName} in bucket: ${bucketName}`);

        // Vérifier si l'objet existe avant de générer l'URL
        try {
            await minioClient.statObject(bucketName, objectName);
        } catch (statError) {
            console.error(`Object ${objectName} not found in bucket ${bucketName}:`, statError);
            return NextResponse.json({ error: 'Object not found' }, { status: 404 });
        }

        const url = await minioClient.presignedGetObject(
            bucketName,
            objectName,
            7 * 24 * 60 * 60 // 7 jours
        );

        // Assurez-vous que l'URL utilise HTTPS
        const secureUrl = url.replace('http://', 'https://');

        return NextResponse.json({ url: secureUrl });
    } catch (error: unknown) {
        const errorDetails = error instanceof Error ? error.message : String(error);
        console.error('Minio error:', errorDetails);
        return NextResponse.json(
            { error: `Failed to generate URL: ${errorDetails}` },
            { status: 500 }
        );
    }
}