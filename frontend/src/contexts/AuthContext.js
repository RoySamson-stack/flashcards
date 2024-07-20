import React, { createContext, useState } from 'react';
import axios from 'axios'
import axiosInstance from '../axiosConfig';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // const login = (email, password) => {
  //   const testUser = { username: 'testuser', email };
  //   setUser(testUser);
  // };

  const signup = async (username, email, password) => {
    try {
      const response = await axiosInstance.post('/api/auth/register', { username, email, password });
      console.log('Signup response:', response.data);
      const newUser = response.data;
      setUser(newUser);
    } catch (error) {
      console.error('Signup failed', error.response ? error.response.data : error.message);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
     <AuthContext.Provider value={{ user, signup, logout }}>         {/* //remember to add login */}

      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
