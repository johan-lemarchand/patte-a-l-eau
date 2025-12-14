declare module 'sib-api-v3-sdk' {
    export class ApiClient {
        static instance: ApiClient;
        authentications: {
            'api-key': {
                apiKey: string;
            };
        };
    }

    interface SendEmailResponse {
        messageId: string;
        code: number;
        message: string;
    }

    export class TransactionalEmailsApi {
        sendTransacEmail(sendSmtpEmail: SendSmtpEmail): Promise<SendEmailResponse>;
    }

    export class SendSmtpEmail {
        subject?: string;
        htmlContent?: string;
        sender?: {
            name?: string;
            email: string;
        };
        to?: Array<{
            email: string;
            name?: string;
        }>;
        replyTo?: {
            email: string;
            name?: string;
        };
    }
}
