import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as firebaseSignOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { firebase } from '../config/firebase';

interface UserData {
  fullName: string;
  email: string;
  phone: string;
  role: 'user' | 'admin' | 'super-admin';
  createdAt: string;
  consent: boolean;
}

interface AuthContextType {
  user: User | null;
  userData: UserData | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  updateUserProfile: (user: User) => Promise<void>;
  createAdminUser: (email: string, password: string) => Promise<User>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  const signIn = async (email: string, password: string) => {
    try {
      if (!firebase.auth) throw new Error('Firebase auth no está inicializado');
      await signInWithEmailAndPassword(firebase.auth, email, password);
    } catch (error) {
      console.error('Error en signIn:', error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      if (!firebase.auth) throw new Error('Firebase auth no está inicializado');
      await firebaseSignOut(firebase.auth);
      setUser(null);
      setUserData(null);
    } catch (error) {
      console.error('Error en signOut:', error);
      throw error;
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      if (!firebase.auth || !firebase.db) throw new Error('Firebase no está inicializado');
      const userCredential = await createUserWithEmailAndPassword(firebase.auth, email, password);
      const user = userCredential.user;
      
      await setDoc(doc(firebase.db, 'users', user.uid), {
        email: user.email,
        role: 'user',
        createdAt: new Date().toISOString(),
        consent: false
      });
    } catch (error) {
      console.error('Error en signUp:', error);
      throw error;
    }
  };

  const updateUserProfile = async (user: User) => {
    try {
      if (!firebase.db) throw new Error('Firebase db no está inicializado');
      const userDoc = await getDoc(doc(firebase.db, 'users', user.uid));
      if (userDoc.exists()) {
        setUserData(userDoc.data() as UserData);
      }
    } catch (error) {
      console.error('Error en updateUserProfile:', error);
      throw error;
    }
  };

  const createAdminUser = async (email: string, password: string) => {
    try {
      if (!firebase.auth || !firebase.db) throw new Error('Firebase no está inicializado');
      const userCredential = await createUserWithEmailAndPassword(firebase.auth, email, password);
      const user = userCredential.user;
      
      await setDoc(doc(firebase.db, 'users', user.uid), {
        email: user.email,
        role: 'admin',
        createdAt: new Date().toISOString(),
        consent: true
      });
      
      return user;
    } catch (error) {
      console.error('Error en createAdminUser:', error);
      throw error;
    }
  };

  useEffect(() => {
    if (!firebase.auth) {
      console.error('Firebase auth no está inicializado');
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(firebase.auth, async (user) => {
      try {
        setUser(user);
        
        if (user && firebase.db) {
          const userDoc = await getDoc(doc(firebase.db, 'users', user.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data() as UserData);
          }
        } else {
          setUserData(null);
        }
      } catch (error) {
        console.error('Error en onAuthStateChanged:', error);
        setUserData(null);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    userData,
    loading,
    signIn,
    signOut,
    signUp,
    updateUserProfile,
    createAdminUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
} 