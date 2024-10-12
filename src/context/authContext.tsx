"use client"
import { ReactNode, createContext, useCallback, useState } from 'react';
import { localStorageKeys } from '../config/localStorageKeys';

interface AuthContextValue {
  signedIn: boolean;
  setSignedIn: any;
  userId: string | null;
  signin(accessToken: string, name: string, email: string, userId: string): void;
  signout(): void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(
    () => !!localStorage.getItem(localStorageKeys.ACCESS_USER),
  );
  const [userId, setUserId] = useState<string | null>(
    () => JSON.parse(localStorage.getItem(localStorageKeys.ACCESS_USER) || '{}').userId || null
  );

  const signin = useCallback((accessToken: string, name: string, email: string, userId: string) => {
    const object = { token: accessToken, name, email, userId };
    localStorage.setItem(localStorageKeys.ACCESS_USER, JSON.stringify(object));

    setSignedIn(true);
    setUserId(userId);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_USER);

    setSignedIn(false);
    setUserId(null);
  }, []);

  return (
    <AuthContext.Provider value={{ signedIn, setSignedIn, userId, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}
