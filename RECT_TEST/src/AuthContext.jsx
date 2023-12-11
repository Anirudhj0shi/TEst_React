// AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [userType, setUserType] = useState('Muggle');

  const login = (type) => {
    setUserType(type);
    setAuthenticated(true);
  };

  const logout = () => {
    setUserType('Muggle');
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, userType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
