import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email, password) => {
    // Simulate login - in real app, call API
    setUser({ email, name: email.split('@')[0] });
    setIsLoggedIn(true);
    localStorage.setItem('user', JSON.stringify({ email }));
  };

  const signup = (name, email, password) => {
    // Simulate signup - in real app, call API
    setUser({ email, name });
    setIsLoggedIn(true);
    localStorage.setItem('user', JSON.stringify({ email, name }));
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
