import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the form data
    const validatedData = contactFormSchema.parse(body);

    // TODO: Implement email sending logic here
    // You can use services like:
    // - Resend (recommended)
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES
    
    // For now, we'll just log the data and return success
    console.log('Contact form submission:', validatedData);

    // Simulate email sending
    // Example with Resend (uncomment when configured):
    /*
    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Farmacia Resta <noreply@farmaciasta.it>',
      to: 'info@anticafarmaciadiopera.it',
      subject: `Nuovo contatto dal sito - ${validatedData.nome}`,
      html: `
        <h2>Nuovo messaggio dal form di contatto</h2>
        <p><strong>Nome:</strong> ${validatedData.nome} ${validatedData.cognome || ''}</p>
        <p><strong>Telefono:</strong> ${validatedData.telefono}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        ${validatedData.servizio ? `<p><strong>Servizio:</strong> ${validatedData.servizio}</p>` : ''}
        <p><strong>Messaggio:</strong></p>
        <p>${validatedData.messaggio}</p>
      `,
    });
    */

    return NextResponse.json(
      { message: 'Messaggio inviato con successo' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    if (error instanceof Error) {
      return NextResponse.json(
        { error: 'Errore durante l\'invio del messaggio', details: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Errore durante l\'invio del messaggio' },
      { status: 500 }
    );
  }
}
