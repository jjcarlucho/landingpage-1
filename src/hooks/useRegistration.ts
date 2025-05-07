import { useState } from 'react';
import { createUserWithEmailAndPassword, AuthError } from 'firebase/auth';
import { doc, setDoc, FirestoreError } from 'firebase/firestore';
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

      if (!firebase.auth) {
        throw new Error('Firebase Auth is not initialized');
      }

      if (!firebase.db) {
        throw new Error('Firebase Firestore is not initialized');
      }

      // Generate a random password
      const tempPassword = Math.random().toString(36).slice(-8);

      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        firebase.auth,
        data.email,
        tempPassword
      );

      try {
        // Store user data in Firestore
        await setDoc(doc(firebase.db, 'users', userCredential.user.uid), {
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          consent: data.consent,
          createdAt: new Date().toISOString(),
          tempPassword, // Store temporarily for email sending
        });
      } catch (firestoreError) {
        // If Firestore fails, delete the created user
        await userCredential.user.delete();
        throw firestoreError;
      }

      // Send welcome email with credentials
      await sendWelcomeEmail(data.email, data.fullName, tempPassword);

      toast.success('Registration successful! Check your email for more information.');
      return true;
    } catch (error) {
      console.error('Error during registration:', error);
      
      // Handle specific Firebase Auth errors
      if (error instanceof Error) {
        if ('code' in error) {
          const authError = error as AuthError;
          switch (authError.code) {
            case 'auth/email-already-in-use':
              toast.error('This email is already registered. Please use a different email or try logging in.');
              break;
            case 'auth/invalid-email':
              toast.error('Please enter a valid email address.');
              break;
            case 'auth/operation-not-allowed':
              toast.error('Email/password accounts are not enabled. Please contact support.');
              break;
            case 'auth/weak-password':
              toast.error('The password is too weak. Please try again.');
              break;
            default:
              toast.error('Registration failed. Please try again.');
          }
        } else if (error instanceof FirestoreError) {
          switch (error.code) {
            case 'permission-denied':
              toast.error('Permission denied. Please try again or contact support.');
              break;
            case 'unavailable':
              toast.error('Service temporarily unavailable. Please try again later.');
              break;
            default:
              toast.error('Error saving user data. Please try again.');
          }
        } else {
          toast.error('An unexpected error occurred. Please try again.');
        }
      } else {
        toast.error('An unexpected error occurred. Please try again.');
      }
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
      // Don't throw the error as it's not critical for the registration process
    }
  };

  return {
    registerUser,
    isLoading,
  };
} 