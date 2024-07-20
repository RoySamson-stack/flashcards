import React, { createContext, useState } from 'react';
import axios from 'axios'
import axiosInstance from '../axiosConfig';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    const dummyUser = { username: 'john_doe', email };
    setUser(dummyUser);
  };

  const signup = async (username, email, password) => {
    try {
      const response = await axiosInstance.post('/api/auth/register', { username, email, password });
      const newUser = response.data;
      setUser(newUser);
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
