import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';
import * as mailjetTransport from 'nodemailer-mailjet-transport';

admin.initializeApp();

// Configura el transporter de Nodemailer con Mailjet
const transporter = nodemailer.createTransport(
  mailjetTransport({
    auth: {
      apiKey: functions.config().mailjet.apikey,
      apiSecret: functions.config().mailjet.secret,
    },
  })
);

// Plantillas de correo
const emailTemplates = {
  welcome: (fullName: string, tempPassword: string) => ({
    subject: '¡Bienvenido a The Game Changer Books!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2c3e50;">¡Bienvenido a The Game Changer Books!</h1>
        <p>Hola ${fullName},</p>
        <p>Nos complace darte la bienvenida a nuestra plataforma. Tu cuenta ha sido creada exitosamente.</p>
        <p>Tu contraseña temporal es: <strong>${tempPassword}</strong></p>
        <p>Por favor, cambia tu contraseña después de iniciar sesión por primera vez.</p>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 0;">¿Necesitas ayuda? No dudes en contactarnos.</p>
        </div>
        <p>Saludos,<br>El equipo de The Game Changer Books</p>
      </div>
    `,
  }),
  passwordReset: (fullName: string, resetLink: string) => ({
    subject: 'Restablecimiento de Contraseña - The Game Changer Books',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2c3e50;">Restablecimiento de Contraseña</h1>
        <p>Hola ${fullName},</p>
        <p>Hemos recibido una solicitud para restablecer tu contraseña.</p>
        <p>Haz clic en el siguiente enlace para crear una nueva contraseña:</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${resetLink}" style="background-color: #3498db; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px;">Restablecer Contraseña</a>
        </div>
        <p>Si no solicitaste este cambio, puedes ignorar este correo.</p>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 0;">El enlace expirará en 1 hora por razones de seguridad.</p>
        </div>
        <p>Saludos,<br>El equipo de The Game Changer Books</p>
      </div>
    `,
  }),
  notification: (fullName: string, message: string) => ({
    subject: 'Notificación Importante - The Game Changer Books',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2c3e50;">Notificación Importante</h1>
        <p>Hola ${fullName},</p>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 0;">${message}</p>
        </div>
        <p>Saludos,<br>El equipo de The Game Changer Books</p>
      </div>
    `,
  }),
};

// Función para enviar correo con manejo de errores mejorado
async function sendEmail(mailOptions: nodemailer.SendMailOptions) {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw new functions.https.HttpsError('internal', 'Error sending email', error);
  }
}

// Función de prueba
export const sendTestEmail = functions.https.onRequest(async (req, res) => {
  const mailOptions = {
    from: 'noreply@thegamechangerbooks.com',
    to: 'carluchojonthan2@gmail.com',
    subject: 'Test Email from Firebase Functions',
    text: 'This is a test email sent from Firebase Functions using Mailjet.',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2c3e50;">Test Email</h1>
        <p>This is a test email sent from Firebase Functions using Mailjet.</p>
        <p>If you're receiving this, the email configuration is working correctly!</p>
      </div>
    `,
  };

  try {
    const result = await sendEmail(mailOptions);
    res.status(200).send('Test email sent successfully!');
  } catch (error) {
    console.error('Error sending test email:', error);
    res.status(500).send('Error sending test email');
  }
});

// Función de bienvenida
export const sendWelcomeEmail = functions.firestore
  .document('users/{userId}')
  .onCreate(async (snap, context) => {
    const userData = snap.data();
    const { email, fullName, tempPassword } = userData;

    const template = emailTemplates.welcome(fullName, tempPassword);
    const mailOptions = {
      from: 'noreply@thegamechangerbooks.com',
      to: email,
      subject: template.subject,
      html: template.html,
    };

    await sendEmail(mailOptions);
  });

// Función para restablecer contraseña
export const sendPasswordResetEmail = functions.https.onCall(async (data, context) => {
  const { email, resetLink } = data;
  
  // Obtener datos del usuario
  const userSnapshot = await admin.firestore()
    .collection('users')
    .where('email', '==', email)
    .limit(1)
    .get();

  if (userSnapshot.empty) {
    throw new functions.https.HttpsError('not-found', 'User not found');
  }

  const userData = userSnapshot.docs[0].data();
  const template = emailTemplates.passwordReset(userData.fullName, resetLink);

  const mailOptions = {
    from: 'noreply@thegamechangerbooks.com',
    to: email,
    subject: template.subject,
    html: template.html,
  };

  await sendEmail(mailOptions);
  return { success: true };
});

// Función para enviar notificaciones
export const sendNotificationEmail = functions.https.onCall(async (data, context) => {
  const { userId, message } = data;

  // Verificar autenticación
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
  }

  // Obtener datos del usuario
  const userDoc = await admin.firestore().collection('users').doc(userId).get();
  if (!userDoc.exists) {
    throw new functions.https.HttpsError('not-found', 'User not found');
  }

  const userData = userDoc.data();
  if (!userData) {
    throw new functions.https.HttpsError('not-found', 'User data not found');
  }
  const template = emailTemplates.notification(userData.fullName, message);

  const mailOptions = {
    from: 'noreply@thegamechangerbooks.com',
    to: userData.email,
    subject: template.subject,
    html: template.html,
  };

  await sendEmail(mailOptions);
  return { success: true };
}); 