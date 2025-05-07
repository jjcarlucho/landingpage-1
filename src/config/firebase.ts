import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, Firestore, connectFirestoreEmulator, enableIndexedDbPersistence } from 'firebase/firestore';
import { getStorage, FirebaseStorage, connectStorageEmulator } from 'firebase/storage';
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
let analytics: Analytics | undefined;

try {
  // Initialize Firebase only in browser environment
  if (typeof window !== 'undefined') {
    // Initialize Firebase
    app = initializeApp(firebaseConfig);
    
    // Initialize Auth
    auth = getAuth(app);
    auth.useDeviceLanguage();
    
    // Initialize Firestore
    db = getFirestore(app);
    
    // Initialize Storage
    storage = getStorage(app);
    
    // Initialize Analytics only in production
    if (process.env.NODE_ENV === 'production') {
      analytics = getAnalytics(app);
    }

    // Enable persistence for offline support
    if (db) {
      enableIndexedDbPersistence(db)
        .catch((err: Error) => {
          if (err.name === 'failed-precondition') {
            console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
          } else if (err.name === 'unimplemented') {
            console.warn('The current browser does not support persistence.');
          }
        });
    }

    // Log successful initialization
    console.log('Firebase initialized successfully');
  } else {
    // Create dummy instances for server-side rendering
    app = {} as FirebaseApp;
    auth = {} as Auth;
    db = {} as Firestore;
    storage = {} as FirebaseStorage;
    analytics = undefined;
  }
} catch (error) {
  console.error('Error initializing Firebase:', error);
  // Create dummy instances in case of initialization error
  app = {} as FirebaseApp;
  auth = {} as Auth;
  db = {} as Firestore;
  storage = {} as FirebaseStorage;
  analytics = undefined;
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