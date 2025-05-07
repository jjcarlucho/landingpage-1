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
      await signInWithEmailAndPassword(firebase.auth, email, password);
    } catch (error) {
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(firebase.auth);
    } catch (error) {
      throw error;
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(firebase.auth, email, password);
      const user = userCredential.user;
      
      await setDoc(doc(firebase.db, 'users', user.uid), {
        email: user.email,
        role: 'user',
        createdAt: new Date().toISOString(),
        consent: false
      });
    } catch (error) {
      throw error;
    }
  };

  const updateUserProfile = async (user: User) => {
    try {
      const userDoc = await getDoc(doc(firebase.db, 'users', user.uid));
      if (userDoc.exists()) {
        setUserData(userDoc.data() as UserData);
      }
    } catch (error) {
      throw error;
    }
  };

  const createAdminUser = async (email: string, password: string) => {
    try {
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
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebase.auth, async (user) => {
      setUser(user);
      
      if (user) {
        const userDoc = await getDoc(doc(firebase.db, 'users', user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data() as UserData);
        }
      } else {
        setUserData(null);
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      userData,
      loading,
      signIn,
      signOut,
      signUp,
      updateUserProfile,
      createAdminUser
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 