import { createContext, useContext,useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Mocked current user
 const [user, setUser] = useState({
    name: 'John Doe',
    role: 'user',
  });

  const setRole = (role) => setUser((u) => ({ ...u, role }));
  return (
    <AuthContext.Provider value={{ user, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
