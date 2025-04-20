import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

export const sesClient = new SESClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export const sendEmail = async (toAddress: string[], subject: string, body: string, isHTML: boolean = true) => {
  const params = {
    Source: process.env.SOURCE_EMAIL!,
    Destination: {
      ToAddresses: toAddress,
    },
    Message: {
      Subject: {
        Data: subject,
      },
      Body: {
        // Determinar si el cuerpo debe ser HTML o texto plano
        [isHTML ? 'Html' : 'Text']: {
          Data: body,
        },
      },
    },
  };

  try {
    const command = new SendEmailCommand(params);
    const response = await sesClient.send(command);
    console.log('Correo enviado con éxito:', response);
    return { success: true, messageId: response.MessageId };
  } catch (error) {
    console.error('Error al enviar correo:', error);
    return { success: false, error: error };
  }
};
