import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';
import * as mailjetTransport from 'nodemailer-mailjet-transport';
import { Request, Response } from 'express';

admin.initializeApp();

const transporter = nodemailer.createTransport(
  mailjetTransport({
    auth: {
      apiKey: functions.config().mailjet.apikey,
      apiSecret: functions.config().mailjet.secret,
    },
  })
);

export const sendTestEmail = functions.https.onRequest(async (req: Request, res: Response) => {
  const mailOptions = {
    from: 'noreply@thegamechangerbooks.com',
    to: 'carluchojonthan2@gmail.com',
    subject: 'Test Email from Firebase Functions',
    text: 'This is a test email sent from Firebase Functions using Mailjet.',
    html: `
      <h1>Test Email</h1>
      <p>This is a test email sent from Firebase Functions using Mailjet.</p>
      <p>If you are receiving this, the email configuration is working correctly!</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Test email sent successfully!');
  } catch (error) {
    console.error('Error sending test email:', error);
    res.status(500).send('Error sending test email');
  }
}); 