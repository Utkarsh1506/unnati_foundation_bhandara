import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { to, subject, name, email, phone, message } = await request.json();

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email template
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #FF6B35;">New Inquiry from ${name}</h2>
        <hr style="border: 1px solid #e0e0e0;" />
        
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        
        <hr style="border: 1px solid #e0e0e0;" />
        <h3 style="color: #333;">Message:</h3>
        <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        
        <hr style="border: 1px solid #e0e0e0;" />
        <p style="font-size: 12px; color: #999;">
          This email was sent from the Unnati Foundation Bhandara website contact form.
        </p>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: to,
      replyTo: email,
      subject: subject,
      html: htmlContent,
    });

    return Response.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return Response.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    );
  }
}
