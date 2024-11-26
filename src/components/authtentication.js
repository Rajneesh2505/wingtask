// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context
const AuthContext = createContext();

// Custom hook to use authentication
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// AuthProvider component to provide auth context
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Initialize user state (could be from localStorage or API)
    return localStorage.getItem('user') || null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', userData); // Store user info in localStorage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove user info from localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
