import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { firebase } from '../config/firebase';
import toast from 'react-hot-toast';

interface RegistrationData {
  fullName: string;
  email: string;
  phone: string;
  consent: boolean;
}

export function useRegistration() {
  const [isLoading, setIsLoading] = useState(false);

  const registerUser = async (data: RegistrationData) => {
    try {
      setIsLoading(true);

      // Generate a random password
      const tempPassword = Math.random().toString(36).slice(-8);

      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        firebase.auth,
        data.email,
        tempPassword
      );

      // Store user data in Firestore
      await setDoc(doc(firebase.db, 'users', userCredential.user.uid), {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        consent: data.consent,
        createdAt: new Date().toISOString(),
        tempPassword, // Store temporarily for email sending
      });

      // Send welcome email with credentials
      await sendWelcomeEmail(data.email, data.fullName, tempPassword);

      toast.success('¡Registro exitoso! Revisa tu correo para más información.');
      return true;
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error('Error al registrar. Por favor, intenta nuevamente.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const sendWelcomeEmail = async (email: string, name: string, tempPassword: string) => {
    try {
      // Here you would implement your email sending logic
      // For example, using a service like SendGrid, AWS SES, or Firebase Cloud Functions
      // For now, we'll just log the information
      console.log('Welcome email would be sent to:', {
        email,
        name,
        tempPassword,
      });
    } catch (error) {
      console.error('Error sending welcome email:', error);
    }
  };

  return {
    registerUser,
    isLoading,
  };
} 