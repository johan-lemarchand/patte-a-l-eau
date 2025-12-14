import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { token } = body;

        const verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';
        const secretKey = process.env.RECAPTCHA_SECRET_KEY;

        const response = await fetch(verifyUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${secretKey}&response=${token}`,
        });

        const data = await response.json();

        if (data.success) {
        return NextResponse.json({ success: true });
        } else {
        return NextResponse.json(
            { success: false, error: 'reCAPTCHA verification failed' },
            { status: 400 }
        );
        }
    } catch {
        return NextResponse.json(
        { success: false, error: 'Internal server error' },
        { status: 500 }
        );
    }
}