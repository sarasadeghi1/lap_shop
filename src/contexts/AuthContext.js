import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  // بررسی وضعیت لاگین از sessionStorage
  const [isAdmin, setIsAdmin] = useState(() => {
    return sessionStorage.getItem('lapshop_admin') === 'true';
  });

  // لاگین ادمین
  const login = (username, password) => {
    // اعتبارسنجی ساده
    if (username === 'admin' && password === 'admin123') {
      setIsAdmin(true);
      sessionStorage.setItem('lapshop_admin', 'true');
      return true;
    }
    return false;
  };

  // خروج ادمین
  const logout = () => {
    setIsAdmin(false);
    sessionStorage.removeItem('lapshop_admin');
  };

  const value = {
    isAdmin,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

