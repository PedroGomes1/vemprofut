/* eslint-disable @typescript-eslint/ban-types */
import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@VemProFut:token');
    const user = localStorage.getItem('@VemProFut:user');

    if (token && user) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  }); // No primeiro momento é nulo, por isso mando o as AuthContextData

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('login', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    localStorage.setItem('@VemProFut:token', token);
    localStorage.setItem('@VemProFut:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@VemProFut:token');
    localStorage.removeItem('@VemProFut:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be a used within an AuthProvidr');
  }

  return context;
}
