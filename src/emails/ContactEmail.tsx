import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import * as React from 'react';

interface ContactEmailProps {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    message: string;
}

export const ContactEmail = ({
    first_name,
    last_name,
    email,
    phone,
    message,
}: ContactEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>Nouveau message de {first_name} {last_name}</Preview>
            <Body style={main}>
            <Container style={container}>
                <Heading style={h1}>Nouveau message depuis Patte à l'eau</Heading>
                <Section style={section}>
                <Heading as="h2" style={h2}>
                    Informations du contact
                </Heading>
                <Text style={text}>
                    <strong style={label}>Nom:</strong> {first_name}
                </Text>
                <Text style={text}>
                    <strong style={label}>Prénom:</strong> {last_name}
                </Text>
                <Text style={text}>
                    <strong style={label}>Email:</strong>{' '}
                    <a href={`mailto:${email}`} style={link}>
                    {email}
                    </a>
                </Text>
                <Text style={text}>
                    <strong style={label}>Téléphone:</strong>{' '}
                    <a href={`tel:${phone}`} style={link}>
                    {phone}
                    </a>
                </Text>
                </Section>
                <Hr style={hr} />
                <Section style={section}>
                <Heading as="h2" style={h2}>
                    Message
                </Heading>
                <Text style={messageText}>{message}</Text>
                </Section>
            </Container>
            </Body>
        </Html>
        );
    };

const main = {
    backgroundColor: '#f6f9fc',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '20px 0 48px',
    marginBottom: '64px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
};

const h1 = {
    color: '#1f2937',
    fontSize: '24px',
    fontWeight: '600',
    padding: '0 48px',
    margin: '20px 0',
};

const h2 = {
    color: '#374151',
    fontSize: '20px',
    fontWeight: '600',
    margin: '16px 0',
};

const section = {
    padding: '0 48px',
};

const text = {
    color: '#374151',
    fontSize: '16px',
    margin: '12px 0',
    lineHeight: '24px',
};

const messageText = {
    ...text,
    backgroundColor: '#f9fafb',
    padding: '16px',
    borderRadius: '4px',
    whiteSpace: 'pre-wrap',
};

const label = {
    color: '#6b7280',
    marginRight: '8px',
};

const link = {
    color: '#2563eb',
    textDecoration: 'underline',
};

const hr = {
    borderColor: '#e5e7eb',
    margin: '24px 0',
};

export default ContactEmail;