import { NextResponse } from 'next/server';
import { render } from '@react-email/render';
import ContactEmail from '@/emails/ContactEmail';

export async function POST(request: Request) {
    try {
        console.log('Début de la fonction POST');
        const formData = await request.json();
        console.log('Body reçu:', formData);

        const fromEmail = process.env.SMTP_FROM_EMAIL;
        const toEmail = process.env.SMTP_TO_EMAIL;

        if (!fromEmail || !toEmail) {
            throw new Error('Configuration email manquante');
        }

        console.log('Emails configurés:', { fromEmail, toEmail });

        const { first_name, last_name, email, phone, message } = formData;

        // Rendre le template d'email
        const emailHtml = await render(
            ContactEmail({
                first_name,
                last_name,
                email,
                phone,
                message,
            })
        );

        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'api-key': process.env.BREVO_API_KEY!,
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                sender: { 
                    email: fromEmail,
                    name: "Pattes à l'eau"
                },
                to: [{ 
                    email: toEmail,
                    name: "Pattes à l'eau"
                }],
                replyTo: { 
                    email: email,
                    name: `${first_name} ${last_name}`
                },
                subject: `Nouveau message de ${first_name} ${last_name}`,
                htmlContent: emailHtml
            })
        });

        if (!response.ok) {
            const error = await response.json();
            console.error('Erreur Brevo:', error);
            throw new Error(`Erreur d'envoi: ${error.message || 'Erreur inconnue'}`);
        }

        const data = await response.json();
        console.log('Email envoyé avec succès:', data);
        
        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Erreur détaillée:', error);
        return NextResponse.json(
            { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}