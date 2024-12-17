import { NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { render } from '@react-email/render';
import ContactEmail from '@/emails/ContactEmail';

const ses = new SESClient({
    region: process.env.AWS_REGION || 'eu-west-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
    },
});

export async function POST(request: Request) {
    try {
        const formData = await request.json();
        const { first_name, last_name, email, phone, message } = formData;

        const emailHtml = await render(
            ContactEmail({
                first_name,
                last_name,
                email,
                phone,
                message,
            })
        );

        const fromEmail = process.env.AWS_SES_FROM_EMAIL;
        const toEmail = process.env.AWS_SES_TO_EMAIL;

        if (!fromEmail || !toEmail) {
            throw new Error('Missing email configuration');
        }

        const params = {
            Source: fromEmail,
            Destination: {
                ToAddresses: [toEmail],
            },
            Message: {
                Subject: {
                    Data: `Nouveau message de ${first_name} ${last_name}`,
                    Charset: 'UTF-8',
                },
                Body: {
                    Html: {
                        Data: emailHtml,
                        Charset: 'UTF-8',
                    },
                },
            },
        };

        await ses.send(new SendEmailCommand(params));

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to send email' },
            { status: 500 }
        );
    }
}