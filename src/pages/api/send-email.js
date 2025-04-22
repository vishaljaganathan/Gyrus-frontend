import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', process.env.NEXT_PUBLIC_BASE_URL || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed',
      allowedMethods: ['POST'] 
    });
  }

  console.log('Environment:', {
    EMAIL_USER: process.env.EMAIL_USER ? '*****' : 'NOT SET',
    NODE_ENV: process.env.NODE_ENV
  });

  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      console.error('Validation failed - missing required fields');
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and message are required' 
      });
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please enter a valid email address' 
      });
    }

    // Create transporter with multiple fallback options
    let transporter;
    try {
      transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        tls: {
          rejectUnauthorized: false
        },
        logger: true,
        debug: true
      });

      // Verify connection configuration
      await transporter.verify();
      console.log('Server is ready to take our messages');
    } catch (transportError) {
      console.error('Transport creation failed:', transportError);
      throw new Error('Failed to initialize email service');
    }

    const mailOptions = {
      from: `"Gyrus Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Send to yourself
      replyTo: email,
      subject: `New Contact: ${subject || 'No Subject'}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #2d3748;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
          <p><strong>Subject:</strong> ${subject || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f8f9fa; padding: 10px; border-left: 4px solid #667eea;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <p style="margin-top: 20px; font-size: 0.9em; color: #718096;">
            Sent from Gyrus website on ${new Date().toLocaleString()}
          </p>
        </div>
      `,
      text: `Name: ${name}\nEmail: ${email}\n${phone ? `Phone: ${phone}\n` : ''}Subject: ${subject || 'Not specified'}\n\nMessage:\n${message}`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent:', info.messageId);

    return res.status(200).json({ 
      success: true,
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Full error details:', {
      message: error.message,
      stack: error.stack,
      code: error.code
    });

    let userMessage = 'Failed to send message. Please try again later.';
    if (error.code === 'EAUTH') {
      userMessage = 'Authentication failed. Please check email settings.';
    } else if (error.code === 'ECONNECTION') {
      userMessage = 'Could not connect to email server.';
    }

    return res.status(500).json({ 
      success: false, 
      message: userMessage,
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}