import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or another email service
      auth: {
        user: process.env.EMAIL_USER, // Use environment variables
        pass: process.env.EMAIL_PASS, // Use environment variables
      },
    });

    const mailOptions = {
      from: email,
      to: 'support@gyrusneet.com',
      subject: `Message from ${name} - ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Failed to send message' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
