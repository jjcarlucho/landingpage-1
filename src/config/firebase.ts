import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyC3yV5JBivrdGP1CeYsfkmd_QKbS0Rtk4Q",
  authDomain: "myproject-5b844.firebaseapp.com",
  projectId: "myproject-5b844",
  storageBucket: "myproject-5b844.firebasestorage.app",
  messagingSenderId: "591697293552",
  appId: "1:591697293552:web:12070ac72bd04afccd1235",
  measurementId: "G-BCN8EPL57B"
};

let app;
let auth;
let db;
let storage;
let analytics;

if (typeof window !== 'undefined') {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
  analytics = getAnalytics(app);
}

export { auth, db, storage, analytics };
export default app; 