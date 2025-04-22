// /pages/api/send-email.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // or any SMTP provider like 'SendGrid', 'Mailgun', etc.
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail/SMTP user
        pass: process.env.EMAIL_PASS, // Your Gmail/SMTP password or App Password
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: 'support@gyrusneet.com', // Change to your receiver email
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Message from Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: 'Email sent successfully' });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, message: 'Error sending email' });
  }
}
