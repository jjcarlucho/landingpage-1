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

let app: FirebaseApp;
let auth: Auth;
let db: Firestore;
let storage: FirebaseStorage;
let analytics: Analytics;

try {
  // Initialize Firebase only in browser environment
  if (typeof window !== 'undefined') {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
    analytics = getAnalytics(app);
  } else {
    // Create dummy instances for server-side rendering
    app = {} as FirebaseApp;
    auth = {} as Auth;
    db = {} as Firestore;
    storage = {} as FirebaseStorage;
    analytics = {} as Analytics;
  }
} catch (error) {
  console.error('Error initializing Firebase:', error);
  // Create dummy instances in case of initialization error
  app = {} as FirebaseApp;
  auth = {} as Auth;
  db = {} as Firestore;
  storage = {} as FirebaseStorage;
  analytics = {} as Analytics;
}

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