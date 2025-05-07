import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';
import { getAnalytics, Analytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyC3yV5JBivrdGP1CeYsfkmd_QKbS0Rtk4Q",
  authDomain: "myproject-5b844.firebaseapp.com",
  projectId: "myproject-5b844",
  storageBucket: "myproject-5b844.firebasestorage.app",
  messagingSenderId: "591697293552",
  appId: "1:591697293552:web:12070ac72bd04afccd1235",
  measurementId: "G-BCN8EPL57B"
};

// Initialize Firebase only in browser environment
const app: FirebaseApp = typeof window !== 'undefined' ? initializeApp(firebaseConfig) : null as unknown as FirebaseApp;
const auth: Auth = typeof window !== 'undefined' ? getAuth(app) : null as unknown as Auth;
const db: Firestore = typeof window !== 'undefined' ? getFirestore(app) : null as unknown as Firestore;
const storage: FirebaseStorage = typeof window !== 'undefined' ? getStorage(app) : null as unknown as FirebaseStorage;
const analytics: Analytics = typeof window !== 'undefined' ? getAnalytics(app) : null as unknown as Analytics;

// Export as a single object to ensure type safety
export const firebase = {
  app,
  auth,
  db,
  storage,
  analytics
} as const;

// Also export individual services for backward compatibility
export { auth, db, storage, analytics };
export default app; 