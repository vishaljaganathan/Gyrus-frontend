// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  // Create the transporter
  let transporter;
  try {
    transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address (from .env.local)
        pass: process.env.EMAIL_PASS, // your Gmail App Password (not real password)
      },
    });
  } catch (error) {
    console.error('Error creating transporter:', error);
    return res.status(500).json({ success: false, message: 'Internal server error while setting up email transporter.' });
  }

  // Email options
  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`, // sender (your Gmail)
    to: process.env.EMAIL_TO,                      // receiver (you)
    subject: subject || 'New Contact Form Submission',
    text: `
New Message from Contact Form:

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not Provided'}
Subject: ${subject}
Message:
${message}
    `,
  };

  // Send the email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return res.status(200).json({ success: true, message: 'Email sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);

    if (error.response) {
      console.error('Nodemailer response error:', error.response);
    }
    return res.status(500).json({ success: false, message: 'Failed to send email. Please try again later.' });
  }
}
