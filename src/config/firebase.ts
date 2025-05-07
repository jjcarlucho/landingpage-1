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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export default app; 